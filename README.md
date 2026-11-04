# www.mitchellboesche.com

Personal site and blog relating to all things I enjoy!

## Run locally

Requires Node 22.23+ (Node 24 recommended).

```sh
npm install
npm run dev      # http://localhost:4321  (drafts visible)
npm run build    # static output in dist/ (drafts excluded)
```

## Write a post

Add a Markdown file to `src/content/blog/`:

```md
---
title: My post
description: One-line summary shown in lists.
pubDate: 2026-11-01
tag: Snowflake
draft: false
---

Body text here.
```

`draft: true` keeps a post visible in `npm run dev` but off the live site.

## Edit your details

- Name, email, GitHub, LinkedIn, projects: `src/data/site.ts`
- Home page copy: `src/pages/index.astro`
- Colors and type: `src/styles/global.css` (`--accent` is the accent color)
- Public URL: `site` in `astro.config.mjs`

## Deploy

1. Push this repo to GitHub (branch `main`).
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` builds and deploys (`.github/workflows/deploy.yml`). You can also run it by hand from the **Actions** tab.

## Custom domain

1. At your DNS provider:
   - Apex (`yourdomain.com`): four `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: `CNAME` → `<your-username>.github.io`
2. Repo **Settings → Pages → Custom domain**: enter the domain and save. Tick **Enforce HTTPS** once the certificate is issued.
3. Set `site: 'https://yourdomain.com'` in `astro.config.mjs` and push.

No `CNAME` file is needed: with Actions-based deploys, the domain lives in the Pages settings.

**No custom domain yet?** Either name the repo `<your-username>.github.io`, or set `site: 'https://<your-username>.github.io'` and `base: '/<repo-name>'` in `astro.config.mjs`.
