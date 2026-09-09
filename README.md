# Creator Home

Portfolio-first creator studio site for Adam. Not a social feed — a clean home base for featured work, project pages, and scored trailers.

## Stack

- Next.js App Router + TypeScript + Tailwind CSS
- MDX / Markdown projects in `content/projects/`
- `gray-matter` + `next-mdx-remote` for content

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build:

```bash
npm run build
npm start
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage — featured hero + project grid |
| `/projects/[slug]` | Project page (e.g. `/projects/spartas-revenge`) |

## Add a project or post

1. Create a file: `content/projects/your-slug.mdx` (or `.md`).
2. Add frontmatter + body:

```yaml
---
title: "Your Title"
slug: "your-slug"
oneLiner: "One-line description."
tags:
  - Scored
featured: false
order: 2
videoUrl: "https://example.com/video.mp4"  # optional
credit: "Short music / SFX credit."        # optional
date: "2026-09-09"
---

Your markdown / MDX content here.
```

3. Refresh the app. Set `featured: true` to show it in the homepage hero.

## Featured project (v1)

**Sparta's Revenge** — scored trailer player (autoplay off; mute off by default), title, one-liner, **Scored** tag, and music/SFX credit.

Trailer:

`https://github.com/Abbytes/sparta-adamo/releases/download/adamo-trailer-clips-v1/Adamo_trailer_spartas_revenge_scored.mp4`
