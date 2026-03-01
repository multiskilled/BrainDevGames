# BrainDevGames 🧠

BrainDevGames is a Next.js brain-training web app with two playable experiences:
- Sudoku (live puzzles from You-Do-Sudoku API)
- Riddles (live riddles from API Ninjas)

It includes API proxy routes, retry/error handling, localStorage persistence, and a responsive UI.

## Features

- Sudoku with difficulty levels: `easy`, `medium`, `hard`
- Sudoku controls: check solution, hint, reveal solution, clear board, generate another puzzle
- Riddles with reveal/hide answer and load more
- De-duplication logic for riddles to reduce repeats
- Home hero background image support via `public/hero-illustration.png`
- Header logo support via `public/logo.png`
- Error boundaries and loading states for app routes

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- External APIs:
   - API Ninjas (`/v1/riddles`)
   - You-Do-Sudoku API

## Project Structure

```text
BrainDevGames/
├─ app/
│  ├─ api/
│  │  ├─ riddles/route.js
│  │  └─ sudoku/route.js
│  ├─ riddles/
│  ├─ sudoku/
│  ├─ globals.css
│  ├─ layout.js
│  └─ page.js
├─ components/
│  ├─ games/
│  ├─ layout/
│  └─ ui/
├─ lib/
├─ public/
├─ .env.example
└─ package.json
```

## Required Environment Variables

Create `.env.local` in project root (or copy from `.env.example`):

```env
API_NINJAS_KEY=your_api_ninjas_key
SUDOKU_API_KEY=your_you_do_sudoku_api_key
NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000
```

## Required Public Assets

Place these files in `public/`:

- `public/logo.png` (used in header)
- `public/hero-illustration.png` (used as home hero background)

If these are missing, the app will show broken-image/fallback behavior where used.

## Local Development

```bash
npm install
npm run dev
```

Open the URL printed by Next.js (usually `http://localhost:3000`).
If `3000` is busy, Next.js may start on `3001` or `3002`.

## API Endpoints

### `GET /api/sudoku?difficulty=easy|medium|hard`

Returns normalized 9x9 `puzzle` and `solution` grids.

Example response:

```json
{
   "difficulty": "medium",
   "puzzle": [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],
   "solution": [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]
}
```

### `GET /api/riddles?limit=1..10`

Returns an array of riddles in this shape:

```json
[
   {
      "title": "Riddle",
      "question": "...",
      "answer": "..."
   }
]
```

## Scripts

- `npm run dev` – start development server
- `npm run build` – production build
- `npm start` – run production server
- `npm run lint` – run ESLint

## Current Color Palette (Cards)

- Cognitive / Sudoku: `#63B6E5`
- Focus / Attention: `#32D38A`
- Memory / Riddles: `#FCA345`
- Stress Reduction: `#B37EE5`

## Deployment (Vercel)

1. Push to GitHub
2. Import repository in Vercel
3. Set env vars (`API_NINJAS_KEY`, `SUDOKU_API_KEY`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`)
4. Deploy

## Troubleshooting

- `API configuration error`: verify env vars are set and restart dev server
- Sudoku/Riddles 502: external API temporary issue or invalid key
- Images not showing: check exact filenames in `public/`
- App runs on unexpected port: check terminal output for actual URL
