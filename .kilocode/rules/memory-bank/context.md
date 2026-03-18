# Active Context: Maxx Tech (carlymaxx-tech-web)

## Current State

**Project Status**: ✅ Running — Vite dev server live on port 8080

The project is a Vite + React + TypeScript website for "Maxx Tech — Smart Tech Solutions by Carly Maxx" (deployed to maxxtech.co.ke). It was imported from https://github.com/Carlymaxx/carlymaxx-tech-web.git.

## Recently Completed

- [x] Cloned carlymaxx-tech-web GitHub repo into workspace
- [x] Installed all dependencies via `bun install`
- [x] Fixed 3 lint errors (empty interfaces → type aliases, require() → ESM import)
- [x] Removed stale Next.js template files (next.config.ts, eslint.config.mjs, postcss.config.mjs, src/app/)
- [x] Vite dev server started on port 8080 and exposed for preview
- [x] Build passes cleanly (dist/ output)
- [x] All commits pushed to Kilo builder remote

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/App.tsx` | Root React component | ✅ Active |
| `src/main.tsx` | Vite entry point | ✅ Active |
| `src/pages/` | Route pages (react-router-dom) | ✅ Active |
| `src/components/` | UI components (shadcn/ui) | ✅ Active |
| `src/hooks/` | Custom React hooks | ✅ Active |
| `src/lib/` | Utilities | ✅ Active |
| `vite.config.ts` | Vite config (port 8080) | ✅ Active |
| `tailwind.config.ts` | Tailwind CSS v3 | ✅ Active |
| `index.html` | Vite HTML entry | ✅ Active |
| `CNAME` | GitHub Pages domain: maxxtech.co.ke | ✅ Present |

## Tech Stack (Actual)

- **Framework**: Vite 5 + React 18 + TypeScript 5
- **Routing**: react-router-dom v6
- **UI**: shadcn/ui (full Radix UI suite)
- **Styling**: Tailwind CSS v3 + tailwindcss-animate
- **State**: TanStack Query v5
- **Forms**: react-hook-form + zod
- **Dev port**: 8080

## Session History

| Date | Changes |
|------|---------|
| 2026-03-18 | Imported carlymaxx-tech-web, fixed lint errors, started preview on port 8080 |
