# Genius.AI

A modern engineering-education web application that brings together course discovery and an in-browser code playground in a single, fast, performance-optimized React app.

Genius.AI presents a catalog of engineering courses (Computer Science, Math, Science, AI, and more) alongside an interactive HTML/CSS/JavaScript playground with live preview, built-in code analysis, and one-click optimization. The UI is dark-mode-first, fully responsive, and aggressively tuned for low-end and mobile devices.

## Features

- **Course catalog** – Browse featured and full course listings with search, level/duration/category filtering, ratings, instructors, and pagination (`Home`, `Courses`).
- **Interactive code playground** – A Monaco-powered editor for HTML, CSS, and JavaScript with:
  - Real-time live preview rendered in a sandboxed `<iframe>`.
  - Split / editor-only / preview-only layouts.
  - Auto-run ("Live Preview") toggle and a console output panel.
  - **Built-in debugger** – static heuristics that flag missing tags/braces, `var` usage, `eval`, missing semicolons, `!important`, accessibility hints, and more (no external API required).
  - **Built-in optimizer** – auto-formats code, injects missing boilerplate (DOCTYPE/head/body, CSS reset, `"use strict"`), and converts `var`→`const`/`let` and simple functions to arrow functions.
  - Copy to clipboard, download a single file, or download a full self-contained HTML project.
- **Light / dark theme** – Theme toggling via React context, persisted to `localStorage` (defaults to dark).
- **Performance & device awareness** – Device-detection utilities adapt animations, image quality, render batch sizes, and editor settings for mobile and low-end hardware; reduced-motion preferences are respected.
- **PWA-style caching** – A service worker (`public/sw.js`) caches static assets in production; a web manifest and full icon set are included.
- **Code-split routing** – Pages are lazy-loaded with `React.lazy` / `Suspense` for faster initial loads.

> Note: `Community`, `Register`, `Profile`, and `Resources` are placeholder/"Coming Soon" pages scaffolded for future expansion.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite 5
- **Routing:** React Router DOM 6
- **Styling:** Tailwind CSS 3 (PostCSS + Autoprefixer), custom CSS
- **Editor:** Monaco Editor via `@monaco-editor/react`
- **Icons:** lucide-react
- **Linting:** ESLint 9 (flat config) with TypeScript-ESLint and React Hooks plugins
- **Minification:** Terser
- **Deployment:** Vercel (`vercel.json`)

## Architecture / How It Works

```
main.tsx → App.tsx
              ├─ ThemeProvider (context: dark/light, persisted to localStorage)
              └─ Router
                   ├─ Navbar
                   ├─ <Suspense> lazy-loaded routes
                   │     /            → Home
                   │     /courses     → Courses
                   │     /playground  → Playground → CodePlayground
                   │     /community   → Community
                   │     /resources   → Resources
                   │     /profile     → Profile
                   │     /register     → Register
                   └─ Footer
```

- **Routing** is a client-side SPA; `vercel.json` rewrites all paths to `/` so deep links resolve correctly.
- **The playground** keeps HTML/CSS/JS in component state, combines them into a single document string, and renders it into a sandboxed iframe via `srcDoc`. Debugging and optimization run entirely client-side as regex/heuristic functions — there are **no backend services or API keys**.
- **Device adaptation** lives in `src/utils/deviceDetection.ts`, which exposes helpers (`isMobile`, `isSlowDevice`, `useReducedMotion`, `getImageQuality`, `getOptimalBatchSize`, etc.) used by pages to scale down work on constrained devices.
- **Build optimization** is configured in `vite.config.ts`: manual vendor/icon chunks, Terser with `drop_console`, ES2015 target, CSS code-splitting, and disabled sourcemaps for production.

## Project Structure

```
Genius-AI/
├─ index.html                 # Entry HTML with perf/SEO/PWA setup
├─ public/
│  ├─ sw.js                   # Service worker (static asset caching)
│  └─ images/                 # Course / hero / UI imagery
├─ src/
│  ├─ main.tsx                # React entry point
│  ├─ App.tsx                 # Providers, router, lazy routes
│  ├─ types.ts                # Shared types (e.g. Course)
│  ├─ context/                # ThemeContext + useTheme hook
│  ├─ components/             # Navbar, Footer, Button, image/lazy helpers
│  │  └─ playground/          # CodePlayground + editor/preview/console panes
│  ├─ pages/                  # Home, Courses, Playground, Community, etc.
│  ├─ utils/                  # deviceDetection, image/lazy/search utils
│  └─ styles/                 # Global CSS
├─ vite.config.ts             # Vite + build configuration
├─ tailwind.config.js         # Tailwind theme/config
├─ eslint.config.js           # ESLint flat config
├─ vercel.json                # Vercel headers + SPA rewrites
└─ tsconfig*.json             # TypeScript project references
```

## Prerequisites

- **Node.js** 18+ (recommended for Vite 5)
- **npm** (a `package-lock.json` is committed)

## Installation

```bash
git clone https://github.com/KarthikRommula/Genius-AI.git
cd Genius-AI
npm install
```

## Usage / Running Locally

```bash
# Start the dev server (Vite, with network host enabled)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview

# Lint the codebase
npm run lint
```

The dev server runs on Vite's default port (typically `http://localhost:5173`) and is exposed on the local network (`server.host: true`) for testing on mobile devices.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with HMR. |
| `npm run build` | Produce an optimized production build. |
| `npm run preview` | Serve the production build locally. |
| `npm run lint` | Run ESLint across the project. |

## Configuration / Environment Variables

This project requires **no environment variables** to run — the playground's debug and optimize features are fully client-side and call no external APIs. The `.gitignore` reserves the usual `.env*` files should configuration be added later.

## Deployment

The app is configured for **Vercel**. `vercel.json` sets no-cache headers, enables clean URLs, and rewrites all routes to `/` for SPA client-side routing. The included service worker registers only on non-localhost origins.
