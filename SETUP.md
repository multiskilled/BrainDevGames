# BrainDevGames Setup Guide

This file is the quickest way to get the current project running exactly as expected.

## 1) Prerequisites

- Node.js 18+
- npm
- API key for API Ninjas (riddles)
- API key for You-Do-Sudoku

## 2) Install dependencies

```bash
npm install
```

## 3) Create `.env.local`

Copy `.env.example` to `.env.local` and set real values:

```env
API_NINJAS_KEY=your_api_ninjas_key
SUDOKU_API_KEY=your_you_do_sudoku_api_key
NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000
```

Generate a random secret (PowerShell):

```powershell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | ForEach-Object {[char]$_})
```

## 4) Add required images

Put these exact files in `public/`:

- `public/logo.png`
- `public/hero-illustration.png`

If filenames differ, update the paths in code or rename files.

## 5) Run app

```bash
npm run dev
```

Open the URL shown in terminal.
If port `3000` is occupied, Next.js will auto-switch to `3001`/`3002`.

## 6) Verify working condition

Check these routes manually:

- `/` (home): hero uses `hero-illustration.png` as background
- `/sudoku`: puzzle loads, controls work (`Check`, `Hint`, `Get Solution`, `Generate Another Sudoku`)
- `/riddles`: riddles load, reveal/hide works, load more works

Check API routes:

- `/api/sudoku?difficulty=medium`
- `/api/riddles?limit=3`

Both should return JSON.

## 7) Common issues

- **Images not showing**: verify files exist in `public/` with exact names.
- **API config error**: env var missing; restart server after editing `.env.local`.
- **502 from app API routes**: upstream API unavailable or invalid key.
- **Unexpected local URL**: use the URL printed by `npm run dev`.

## 8) Pre-push checklist

- Run `npm run lint`
- Run `npm run build`
- Confirm home, sudoku, riddles pages render
- Confirm env secrets are not committed

When all checks pass, push to GitHub.
