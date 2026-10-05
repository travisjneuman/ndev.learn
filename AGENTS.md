# AGENTS.md — ndev.learn

## Workspace storage conservation

<!-- workspace-scratch-storage-contract-v1 -->
Use only this repository's existing canonical live checkout. A dirty, divergent, detached, ambiguous, or concurrently owned checkout is a blocker: preserve it and stop. Do not create a clone, fork, worktree, feature branch, full repository/workspace copy, or external dependency/build environment to bypass that blocker. Never place repositories, worktrees, workspace copies, package installations, builds, or development servers under `/tmp` or `/private/tmp`, including aliases that resolve there. Small, bounded non-repository temporary files remain allowed. Load the Agent Operating Layer `workspace-scratch-storage-policy` contract through the workspace registry when available.


> Codex-native project instructions for ndev.learn. The legacy sibling guidance file is retained for other tools, but Codex should read this file directly.
> Neuman Learn: multi-course learning platform hub.
> **Global rules from `C:\Users\tjn\.codex\AGENTS.md` and the workspace `E:\Web Development\AGENTS.md` apply automatically.**

---

## Project Overview

| Detail | Value |
|---|---|
| **Name** | Neuman Learn |
| **Location** | `E:\Web Development\ndev.learn` |
| **URL** | `learn.neuman.dev` |
| **Stack** | Astro 5, TypeScript 5.9, Tailwind CSS 4, React 19 (islands) |
| **Deploy** | Cloudflare Workers (`@astrojs/cloudflare`) |
| **License** | MIT |

## Cloudflare non-Lazy boundary

- Load `~/.codex/docs/CLOUDFLARE-SAFETY.md` before any Cloudflare, Worker, Wrangler, MCP, API, billing, or publication action.
- This is not Lazy Golfing. Preserve its provider-confirmed existing Worker target; normal maintenance and deployment through that established path are allowed when the current task explicitly requests publication.
- Never delete or destructively remove Cloudflare state and never enable paid/billing features.
- Routine publication uses the existing GitHub-connected source workflow under the repository completion rules, followed by one bounded provider receipt/readback. Do not duplicate it with direct Wrangler; direct publication requires an exact current-task request or approved recovery procedure. New resources, products, environments, bindings, schedules, or materially higher expected consumption require Travis's separate exact approval. Preserve current authentication unchanged.

---

## Architecture

- **Astro** for static-first pages with React islands for interactivity
- **Content Collections** for type-safe course data (`src/content/courses/`)
- **CSS variables** for dark/light theme tokens (dark default)
- **ThemeToggle.tsx** is the only React island — everything else is Astro components

### Content Flow

```
src/content/courses/*.md  →  Content Collection  →  CourseGrid / [slug] pages
```

Course repos (like learn.python) will become git submodules under `courses/` in Phase 2.

---

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build
npm run preview   # Preview production build
npx astro check   # TypeScript type checking
```

---

## Key Directories

| Path | Purpose |
|---|---|
| `src/pages/` | Astro page routes |
| `src/layouts/` | Base layout with theme script |
| `src/components/` | Astro + React components |
| `src/content/courses/` | Course data (frontmatter + markdown) |
| `src/styles/global.css` | Tailwind + CSS variable tokens |
| `src/lib/types.ts` | Shared TypeScript types |
| `public/images/courses/` | Course SVG icons |

---

## Theme System

- Dark default, light via `data-theme="light"` on `<html>`
- CSS variables defined in `src/styles/global.css`
- Flash prevention via inline `<script>` in Base.astro
- ThemeToggle React island persists preference to localStorage

---

## Adding a New Course

1. Create `src/content/courses/<slug>.md` with required frontmatter (see `config.ts` schema)
2. Add course SVG icon to `public/images/courses/<slug>.svg`
3. The course auto-appears on the landing page and gets a `/courses/<slug>` detail page

---

## Constraints

- No `any` types
- No `innerHTML` for user content
- All interactive elements must be accessible (keyboard, ARIA)
- CSS variables for all theme-dependent colors (no hardcoded color values in components)
- React only for components that need client-side interactivity

## Public Copy Style (owner rule, 2026-10-05)

Canonical copy: `tjn.portfolio/AGENTS.md`. Everything a visitor can read (site copy, README, docs pages, meta tags, titles, alt text, UI strings) must sound like Travis wrote it.

- **No em dashes (—)** anywhere public, and no spaced en dashes used as em dashes. Use a colon, a comma, parentheses, or a new sentence. Titles use ` | ` (for example `About | Site Name`).
- First person where a person is speaking, plain words, short sentences. Say what it does and what happened.
- Avoid AI tells: "not X but Y" / "rather than" setups, "built as a … surface", "demonstrates", "showcases", "leverage", "seamless", "robust", "passionate", "journey", slogans, and stacked triplets used for rhythm.
- No meta talk about the project's public positioning. If something is private, say so once, plainly.
- Only verified facts and numbers. Employers stay anonymized; named clients need Travis's OK.

---

_Global workflow, skills, and standards are loaded from `C:\Users\tjn\.codex\AGENTS.md` and workspace `E:\Web Development\AGENTS.md`._

## Showcase facts contract

This repo is showcased on travisjneuman.com and github.com/travisjneuman.
`showcase.json` is the only source for public facts about this project
(schema: travisjneuman/travisjneuman `showcase/schema/showcase-v1.json`).

- If a change affects anything in it (counts, version, status, stack, links,
  summary), update `showcase.json` in the same commit. Re-run each metric's
  `source` command; never guess. `floor-2sig` metrics round down to two
  significant digits plus "+" (398 -> "390+").
- Set `updated` (and the touched metric's `asOf`) to today's date.
- Never put private URLs, hostnames, user data, or private names in it.
- The profile repo's `scripts/showcase/sync-showcase.mjs` regenerates the GitHub
  cards, README table, and portfolio data from these files.
