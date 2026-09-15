# Changelog — Football Squad Stats

Change agenda for tracking decisions and follow-up work. Each entry records what changed,
why, and what remains.

---

## 2026-09-15 — Toolchain modernization (React 19 / TS 7 / Tailwind 4)

### Context

The app could not run or build as-is:

- `ReactDOM.render` was removed in React 19 → runtime crash (blank page) + `tsc` error.
- `tsconfig.json` used options removed in TypeScript 7 (`esModuleInterop: false`, `moduleResolution: "Node"`) → `yarn build` failed.
- `yarn lint` failed: ESLint 10 requires flat config (`.eslintrc` unsupported), and
  `@typescript-eslint` hard-crashes with TypeScript 7.
- Tailwind v4 does not read JS config files; the v3-style `tailwind.config.mjs` was dead and
  daisyUI was never actually loaded.
- `vite.config.ts` passed Tailwind/autoprefixer (PostCSS plugins) into Vite's `plugins` array — inert/dead.
- Vite 8 did not discover the project's `postcss.config.mjs`; PostCSS plugins must be wired inline
  via `css.postcss` in `vite.config.ts`.

### Changes

| File | Change |
|---|---|
| `src/main.tsx` | Migrated `ReactDOM.render` → `createRoot` from `react-dom/client` |
| `src/App.tsx`, `src/components/*/*.tsx` (4) | Replaced global `JSX.Element` → `React.JSX.Element` (global removed in `@types/react` 19) |
| `tsconfig.json` | Removed `esModuleInterop: false`; `moduleResolution` `"Node"` → `"Bundler"` (TS 7 compat) |
| `package.json` | Removed `eslintConfig` + 8 unused ESLint devDeps; `lint` → `tsc --noEmit`; added `format` (Prettier); dropped `lint:fix` |
| `.eslintrc`, `.eslintignore` | Deleted (ESLint removed — see decision below) |
| `vite.config.ts` | Plugins reduced to `react()` only; PostCSS plugins (`@tailwindcss/postcss` + `autoprefixer`) wired inline via `css.postcss` |
| `tailwind.config.mjs`, `postcss.config.mjs` | Deleted (JS config was dead under Tailwind v4; PostCSS now configured inline in `vite.config.ts`) |
| `src/App.css` | `@tailwind base/components/utilities` → `@import "tailwindcss"` + `@plugin "daisyui"` |
| `.prettierrc` | `jsxBracketSameLine` (deprecated) → `bracketSameLine` |

### Decision: ESLint removed (subject to reintroduction)

`@typescript-eslint` (stable `8.70.0` **and** canary `8.70.1-alpha.19`) throws at load when
TypeScript ≥ 7 is detected. TypeScript 6 stable does not exist; TypeScript 7.1 is unreleased.
Without the typescript-eslint parser, ESLint cannot parse `.ts`/`.tsx`. There is no supported
path to run ESLint today.

**Chosen:** remove ESLint and re-purpose `yarn lint` as `tsc --noEmit`. Type integrity is
enforced by `tsc` in both `yarn lint` and `yarn build`.

**Trade-off:** JS style lint rules (quotes/semi/indent) are not enforced until typescript-eslint
supports TS 7. Prettier (`yarn format`) remains available for formatting.

### Validation

- [x] `yarn lint` (tsc) passes
- [x] `yarn build` passes
- [x] `yarn dev` serves the page; built CSS contains daisyUI styles
- [x] Headless Chrome render smoke test: 32 player cards + stat tiles mount without runtime errors
- [ ] Manual sanity check of all player data in browser

### Remaining / Follow-up

- [ ] Reintroduce ESLint + typescript-eslint when TS 7 support ships (track:
      typescript-eslint issue #10940, TS >= 7.1)
- [ ] Consider `incremental`/`skipLibCheck` tuning in `tsconfig.json`
- [ ] `LeaderBoard.sort()` mutates the imported `players.json` array in place; switch to a
      non-mutating copy (`[...players].sort(...)`)
- [ ] `positions.json` counts are hard-coded, not derived from `players.json`; consider deriving
- [ ] `key={index}` in list renders; prefer stable keys (`player.id`)
- [ ] HTML `lang` attribute and accessibility contrast review