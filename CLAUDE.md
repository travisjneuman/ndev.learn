# ndev.learn — Project Configuration

> Neuman Learn: multi-course learning platform hub.
> **Global rules from `~/.claude/` apply automatically.**

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

---

_Global workflow, skills, and standards loaded from `~/.claude/`_
