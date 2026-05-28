'use strict';

const {
  configureCors,
  createResponse,
  getOutputText,
  readJsonBody,
  requirePost,
  sendJson
} = require('./_openai');

const SYSTEM_PROMPT = `You generate automotive engineering project and thesis ideas for AutoMind AI.
Return realistic, student-friendly ideas only.
Each idea must be specific enough for a college project, thesis synopsis, or research proposal.
Avoid fabricated current statistics and unsafe instructions.`;

const PROJECT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    ideas: {
      type: 'array',
      minItems: 3,
      maxItems: 5,
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          title: { type: 'string' },
          desc: { type: 'string' },
          tags: {
            type: 'array',
            minItems: 3,
            maxItems: 5,
            items: { type: 'string' }
          }
        },
        required: ['title', 'desc', 'tags']
      }
    }
  },
  required: ['ideas']
};

module.exports = async function handler(req, res) {
  configureCors(res);
  if (!requirePost(req, res)) return;

  try {
    const body = await readJsonBody(req);
    const keyword = String(body.keyword || 'automobile technology').trim().slice(0, 300);
    const branch = String(body.branch || 'all').trim().slice(0, 80);
    const level = String(body.level || 'ug').trim().slice(0, 80);

    const data = await createResponse({
      instructions: SYSTEM_PROMPT,
      input: `Create project/thesis ideas for keyword: ${keyword}. Student level: ${level}. Engineering branch: ${branch}.`,
      max_output_tokens: 900,
      text: {
        format: {
          type: 'json_schema',
          name: 'automind_project_ideas',
          strict: true,
          schema: PROJECT_SCHEMA
        }
      }
    });

    const text = getOutputText(data);
    const parsed = JSON.parse(text);
    sendJson(res, 200, { ideas: parsed.ideas });
  } catch (error) {
    sendJson(res, error.status || 500, {
      error: error.status === 503 ? 'AI is not configured yet' : 'Project generation failed',
      detail: error.message
    });
  }
};
