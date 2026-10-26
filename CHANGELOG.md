# Changelog — Football Squad Stats

Change agenda for tracking decisions and follow-up work. Each entry records what changed,
why, and what remains.

---

## 2026-10-26 — Audit fixes: deploy base, roster guard, accessibility, dependencies

### Context

A repository audit found that a normal build emitted root-relative `/assets/...` URLs, the mock
roster was force-cast without validation, the demo data was not labeled, and several dependencies
and docs were stale.

### Changes

| File | Change |
|---|---|
| `vite.config.ts` | Set `base: './'` so built assets work from the GitHub Pages project URL; removed `autoprefixer` from inline PostCSS. |
| `src/data/players.json` | Renumbered duplicate shirt numbers: Judah Strickland `1` → `12`, Hunter Mendoza `86` → `20`. |
| `scripts/validate-data.mjs` | Added a dependency-free validator for unique IDs/numbers, valid positions, non-negative stats, and roster totals. |
| `package.json` | Added `validate` and `prebuild`; added Node engines and `packageManager`; removed unused `@types/node`, `autoprefixer`, and dead `resolutions`; moved `daisyui` to devDependencies. |
| `.nvmrc` | Pin Node 24. |
| `src/App.tsx` | Added a visible `Demo data` badge, promoted the title to `<h1>`, and marked the decorative logo image empty-alt. |
| `src/components/PlayerCard/PlayerCard.tsx` | Marked placeholder portraits as decorative (`alt=""`). |
| `src/components/LeaderBoard/LeaderBoard.tsx` | Show `—` instead of a meaningless average when the category is appearances. |
| `README.md` | Added install/requirements, fixed stale `lint:fix` docs, documented all scripts, and noted relative deploy assets. |
| `AGENTS.md` | Documented `yarn validate`/`prebuild`, updated PostCSS notes, and recorded the roster guard. |
| `.gitignore`, `yarn-error.log` | Ignored and deleted the stale tracked Yarn error log. |
| `src/index.css`, `src/types/Stats.ts` | Prettier normalized existing formatting; no behavior change. |

### Validation

- [x] `yarn validate` — 32 players, 4 positions, 44 goals, 82 assists, 625 appearances
- [x] `yarn lint`
- [x] `yarn build` — prebuild validation and Vite build pass
- [x] `dist/index.html` uses `./assets/...` paths
- [x] Browser smoke test at desktop and 320 px: one `<h1>`, visible `Demo data` badge, 32 player cards, all 33 images loaded, no non-empty placeholder alts, no horizontal overflow

### Remaining / Follow-up

- [ ] Delete or compress the 11 MB + 3.8 MB README demo GIFs (deferred).
- [ ] Add a CI/deploy workflow or retire the `demo` branch (deferred).
- [ ] Remove the `Demo data` badge and replace the mock roster with v2 match data.

---

## 2026-10-25 — Refine dashboard layout and player cards

### Changes

| File | Change |
|---|---|
| `src/App.tsx` | Replaced the narrow six-column layout with a responsive sidebar/content grid, a consistent three-column stats strip, and responsive player-card columns. |
| `src/components/LeaderBoard/LeaderBoard.tsx` | Added proportional columns, right-aligned numeric headers and values, and tighter row spacing for readability in the sidebar. |
| `src/components/PlayerCard/PlayerCard.tsx` | Reworked cards into a compact profile header and aligned definition-list stats; long names and nationalities no longer stretch the card layout. |
| `src/components/PositionList/PositionList.tsx`, `src/components/Stat/Stat.tsx` | Normalized component sizing within the new responsive layout. |

### Validation

- [ ] `yarn lint`
- [ ] `yarn build`
- [ ] Verify desktop, tablet, and mobile layouts in browser

---

## 2026-10-25 — Fix light surfaces and harden roster rendering

### Changes

| File | Change |
|---|---|
| `index.html`, `src/App.css`, `src/components/PlayerCard/PlayerCard.tsx` | Explicitly pin the document to daisyUI's light theme, define light base surface/text tokens, and apply the base-content color to player cards. |
| `src/data/players.json`, `src/types/Player.ts` | Add stable player IDs for React list keys. |
| `src/components/LeaderBoard/LeaderBoard.tsx` | Sort a copy of the player list, handle zero appearances, display the selected stat label, and use stable keys. |
| `src/data/positions.json`, `src/types/Position.ts`, `src/App.tsx`, `src/components/PositionList/PositionList.tsx` | Keep position names as static configuration and derive player counts from the roster. |
| `src/main.tsx` | Fail clearly if the root mount element is missing. |

### Validation

- [ ] `yarn lint`
- [ ] `yarn build`
- [ ] Verify light cards with OS dark mode enabled

---

## 2026-09-15 — Fix light theme rendering (daisyUI auto-dark override)

### Symptom

On machines with OS dark mode enabled (`prefers-color-scheme: dark`), the **player cards** and
**left summary panels** (`LeaderBoard`, `PositionList`) rendered with a **dark** background while
the rest of the page stayed light — an inconsistent, "darker" look.

### Root cause

daisyUI 5 ships two themes by default: `light --default` and `dark --prefersdark`. The latter
emits `@media (prefers-color-scheme: dark) { :root:not([data-theme]) { ... } }`, which overwrites
all `base-*` CSS variables (e.g. `--color-base-100` → near-black) whenever the OS is in dark mode
and `<html>` has no explicit `data-theme` attribute. Every `bg-base-100` surface then flipped dark.

### Change

| File | Change |
|---|---|
| `src/App.css` | `@plugin "daisyui";` → `@plugin "daisyui" { themes: light --default; }` — light is now the only enabled theme |

This follows the documented daisyUI approach for disabling the dark theme
(https://daisyui.com/docs/themes/). Effect: the `dark` theme and the auto-dark
`prefers-color-scheme` block are removed from the bundle (CSS shrank ~34.9 kB → ~31.4 kB).

### Validation

- [x] Built CSS contains zero `[data-theme=dark]` selectors and zero `prefers-color-scheme: dark` blocks
- [x] `--color-base-100` is `oklch(100% 0 0)` (white) in both dev and build output
- [x] Headless Chrome render with forced dark OS preference: 32 player cards + left summary mount without errors
- [x] `yarn lint` and `yarn build` pass

### Remaining / Follow-up

- [ ] If OS dark-mode support is ever wanted, re-add `dark --prefersdark` to `themes` (or add a
      `theme-change` toggle) — currently the app is intentionally light-only

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
