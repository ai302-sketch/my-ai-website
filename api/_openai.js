'use strict';

const OPENAI_API_URL = 'https://api.openai.com/v1/responses';
const DEFAULT_MODEL = 'gpt-5-mini';

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
  if (typeof data.output_text === 'string') return data.output_text;

  const parts = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (content.type === 'output_text' && content.text) parts.push(content.text);
      if (content.type === 'text' && content.text) parts.push(content.text);
    }
  }
  return parts.join('\n').trim();
}

async function createResponse(payload) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    const error = new Error('OPENAI_API_KEY is not configured');
    error.status = 503;
    throw error;
  }

  const response = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || DEFAULT_MODEL,
      ...payload
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data.error?.message || 'OpenAI request failed';
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
