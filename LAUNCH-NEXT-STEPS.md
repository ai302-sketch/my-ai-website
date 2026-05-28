# AutoMind AI Launch Next Steps

## What changed

- AutoBot now calls `/api/chat` first.
- The thesis/project generator now calls `/api/generate-projects` first.
- If the AI backend is not configured, the site keeps using the existing local demo answers.
- The Gemini API key is expected on the server only, never in `app.js`.

## Local setup

1. Install project tooling:

   ```bash
   npm install
   ```

2. Create a local environment file:

   ```bash
   copy .env.example .env
   ```

3. Add your real key in `.env`:

   ```bash
   GEMINI_API_KEY=your_real_key
   GEMINI_MODEL=gemini-2.0-flash
   ```

4. Start the local Vercel server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown by Vercel, usually:

   ```text
   http://localhost:3000
   ```

## Deployment

Use Vercel for the first launch because this project now needs backend API routes.

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Add these environment variables in Vercel project settings:

   ```text
   GEMINI_API_KEY
   GEMINI_MODEL
   ```

4. Deploy.

## Next recommended build items

1. Connect newsletter submissions to Supabase, Firebase, Web3Forms, or Formspree.
2. Add a simple admin page for reviewing AI-generated articles before publishing.
3. Move articles, quizzes, and projects into a database.
4. Add analytics and error monitoring before sending traffic to the site.
