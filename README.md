# Olympus Threads

Modern React + Vite + TypeScript storefront styled with Tailwind and shadcn-ui.

## Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- shadcn-ui

## Getting Started

Prereqs: Node.js LTS and npm.

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Deploy

Static output in `dist/` works on Vercel:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

For React Router, ensure SPA rewrites to `index.html`.
