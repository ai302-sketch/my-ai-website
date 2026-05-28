'use strict';

const {
  configureCors,
  createResponse,
  getOutputText,
  readJsonBody,
  requirePost,
  sendJson
} = require('./_openai');

const SYSTEM_PROMPT = `You are AutoBot AI for AutoMind AI, an automobile education website.
Answer as a helpful automotive and engineering assistant for students and enthusiasts.
Keep answers practical, accurate, and concise. Use simple structure when useful.
If the user asks for safety-critical, legal, repair, investment, or certification advice, ask them to verify with a qualified professional.
Do not invent current news, prices, test results, or statistics. If a fact may be recent, say it should be verified.`;

module.exports = async function handler(req, res) {
  configureCors(res);
  if (!requirePost(req, res)) return;

  try {
    const body = await readJsonBody(req);
    const message = String(body.message || '').trim().slice(0, 1500);

    if (!message) {
      sendJson(res, 400, { error: 'Message is required' });
      return;
    }

    const data = await createResponse({
      instructions: SYSTEM_PROMPT,
      input: message,
      max_output_tokens: 700,
      text: { verbosity: 'medium' }
    });

    const reply = getOutputText(data);
    sendJson(res, 200, { reply });
  } catch (error) {
    sendJson(res, error.status || 500, {
      error: error.status === 503 ? 'AI is not configured yet' : 'AI request failed',
      detail: error.message
    });
  }
};
