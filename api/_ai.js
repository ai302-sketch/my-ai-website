'use strict';

const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
const DEFAULT_MODEL = 'gemini-2.0-flash';

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body || '{}');

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks.map(chunk => (
    Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk))
  ))).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}

function requirePost(req, res) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return false;
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'Method not allowed' });
    return false;
  }

  return true;
}

function configureCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function getOutputText(data) {
  const geminiText = data.candidates?.[0]?.content?.parts
    ?.map(part => part.text || '')
    .join('')
    .trim();
  if (geminiText) return geminiText;

  return '';
}

async function createResponse(payload) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    const error = new Error('GEMINI_API_KEY is not configured');
    error.status = 503;
    throw error;
  }

  const model = process.env.GEMINI_MODEL || DEFAULT_MODEL;
  const url = `${GEMINI_API_BASE}/${encodeURIComponent(model)}:generateContent`;
  const wantsJson = payload.text?.format?.type === 'json_schema';
  const prompt = [
    payload.instructions,
    wantsJson ? 'Return only valid JSON matching the requested shape. Do not wrap it in markdown.' : '',
    payload.input
  ].filter(Boolean).join('\n\n');

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'x-goog-api-key': apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        maxOutputTokens: payload.max_output_tokens || 800,
        temperature: wantsJson ? 0.4 : 0.7,
        ...(wantsJson ? { responseMimeType: 'application/json' } : {})
      }
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data.error?.message || 'Gemini request failed';
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  return data;
}

module.exports = {
  configureCors,
  createResponse,
  getOutputText,
  readJsonBody,
  requirePost,
  sendJson
};
