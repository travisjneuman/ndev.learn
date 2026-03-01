# Neuman Learn

**Free, open-source programming courses. Learn by building real projects.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Built with Astro](https://img.shields.io/badge/Built_with-Astro-ff5a03.svg)](https://astro.build)
[![Deployed on Cloudflare](https://img.shields.io/badge/Deployed_on-Cloudflare-f38020.svg)](https://learn.neuman.dev)

---

## Overview

Neuman Learn is a multi-course learning platform where every concept is taught through hands-on projects. No video lectures, no quizzes — just real code, real tests, and real skills.

**Live:** [learn.neuman.dev](https://learn.neuman.dev)

### Available Courses

| Course | Projects | Status |
|--------|----------|--------|
| [Learn Python](https://github.com/travisjneuman/learn.python) | 274 projects, 13 levels, 12 modules | Active |
| Learn TypeScript | — | Coming Soon |
| Learn Go | — | Coming Soon |

## Tech Stack

- **Framework:** [Astro](https://astro.build) with TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **Interactive:** [React 19](https://react.dev) (islands architecture)
- **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com)
- **Theme:** Adaptive dark/light with system preference detection

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Development

```bash
git clone https://github.com/travisjneuman/ndev.learn.git
cd ndev.learn
npm install
npm run dev
```

The dev server starts at [http://localhost:4321](http://localhost:4321).

### Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npx astro check` | TypeScript type checking |

## Project Structure

```
ndev.learn/
├── public/images/courses/    # Course SVG icons
├── src/
│   ├── pages/                # Astro page routes
│   │   ├── index.astro       # Landing page
│   │   ├── about.astro       # About page
│   │   └── courses/[slug]    # Dynamic course detail pages
│   ├── layouts/Base.astro    # Root layout with theme system
│   ├── components/           # Astro + React components
│   ├── content/courses/      # Course data (Content Collections)
│   ├── lib/types.ts          # Shared TypeScript types
│   └── styles/global.css     # Tailwind + CSS variable tokens
├── astro.config.ts
├── wrangler.jsonc
└── package.json
```

## Adding a Course

1. Create `src/content/courses/<slug>.md` with the required frontmatter schema
2. Add a course icon SVG to `public/images/courses/<slug>.svg`
3. The course automatically appears on the landing page and gets its own detail page

See `src/content/config.ts` for the frontmatter schema.

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[MIT](LICENSE) — Travis Neuman
