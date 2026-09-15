# AGENTS.md — Football Squad Stats

Project-level engineering rules. Follow the interview engineering principles in
`../../harness/AGENTS.md` and the workflow in `../../harness/engineering/PLAYBOOK.md`.

## Stack

- React 19 + TypeScript 7, built with Vite 8
- Tailwind CSS 4 (`@tailwindcss/postcss`) + daisyUI 5 (loaded via `@plugin "daisyui"` in `src/App.css`)
- Yarn 1 (classic), `yarn.lock` committed

## Commands

| Command | Purpose |
|---|---|
| `yarn dev` | Start the Vite dev server |
| `yarn build` | Type-check (`tsc`) then production build (`vite build`) |
| `yarn serve` | Preview the production build |
| `yarn lint` | Type-check (`tsc --noEmit`) — see decision log below |
| `yarn format` | Format source + root config files with Prettier |

Description: after any change run `yarn lint` and `yarn build`.

## Conventions

- Strict TypeScript (`strict: true`), `moduleResolution: Bundler`, JSX via the React classic runtime
- Explicit function return types: `function X(props: Props): React.JSX.Element` (use `React.JSX.Element`, NOT the removed global `JSX.Element`)
- Folder-per-component under `src/components/<Name>/<Name>.tsx`
- Data flows one way: static JSON in `src/data` → imported at module scope in `App.tsx` → props → render
- No state management library; components are pure functions of props
- PostCSS config lives **inline** in `vite.config.ts` (`@tailwindcss/postcss` + `autoprefixer`) — do not reintroduce `postcss.config.*`

## Architecture notes

- Root entry: `src/main.tsx` mounts `<App />` via `createRoot` (`react-dom/client`)
- All player/position data is static JSON; derived totals computed inline during render

## Decision log

See `CHANGELOG.md` for the full agenda. Notable decisions:

- **ESLint removed (2026-09-15):** `@typescript-eslint` (latest stable + canary) hard-crashes with
  TypeScript 7 (`if versionMajor >= 7 throw`). Type integrity is enforced by `tsc` in `yarn lint`
  and `yarn build`. Reintroduce ESLint once typescript-eslint supports TS 7.
- **Tailwind v3 JS config removed:** Tailwind 4 is CSS-first; `@import "tailwindcss"` + `@plugin "daisyui"`
  in `src/App.css` is the source of truth. PostCSS plugins run **inline** from `vite.config.ts`
  (`@tailwindcss/postcss` + `autoprefixer`) — Vite 8 did not discover a project `postcss.config.mjs`,
  so the config file was removed to avoid a dead second source of truth.