# AGENTS.md

Personal portfolio for Khoironi Kurnia Syah, served at https://zekhoi.dev.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript (strict)
- Tailwind CSS v4 via `@tailwindcss/postcss`; theme tokens live in `src/app/globals.css` (`@theme inline`)
- Resend (contact email) + Cloudflare Turnstile (captcha)
- `next-sitemap` runs as `postbuild`
- Deployed on Vercel; headers are configured in `vercel.json`

## Commands

Use **pnpm**. It is pinned to 8.15.9 through `packageManager` in `package.json` (newer pnpm switches to it automatically), which keeps `pnpm-lock.yaml` at lockfile v6. Node >= 20.19.4.

```bash
pnpm dev     # local dev server
pnpm lint    # eslint (next core-web-vitals + typescript)
pnpm build   # production build (also generates the sitemap)
```

There is no test suite; `pnpm test` is a no-op. The husky pre-push hook runs lint, build and test, so make sure `pnpm lint` and `pnpm build` pass before you finish.

## Layout

```
src/
  app/
    layout.tsx        root layout: fonts, SEO metadata, JSON-LD, global overlays
    page.tsx          home (Hero, ProjectLog, ExperienceLog, Philosophy, Footer)
    works/ archive/ services/ contact/   other routes (each exports `metadata`)
    actions.ts        server action `sendEmail` (Turnstile verify -> Resend)
    opengraph-image.tsx  social share image, generated at build time
    error.tsx, not-found.tsx
  components/
    home/             home sections and project cards
    layout/           Navbar, Footer, FixedIndicators, MemLoad
    contact/          ContactForm (client)
    shared/           Scanline, BlueprintBg, MaterialSymbolsLoader
  lib/
    data.ts           PROJECTS (/works) and ARCHIVE (/archive); edit here to add or change projects
    og-image.ts       fetches og:image from project URLs (at build, then daily via `revalidate` on / and /works)
    metadata.ts       OG_IMAGES, shared by pages that set their own openGraph
```

Import through the `@/` alias, which maps to `src/`.

## Conventions

- Formatting: Prettier with `.prettierrc` (2-space indent, single quotes, semicolons, no trailing commas).
- Components are default-exported PascalCase files. Add `'use client'` only when a component needs state, effects or browser APIs.
- Visual style is brutalist "system console": monospace, uppercase labels written like identifiers (`PID_001`, `NODE_ACTIVE`, `View_Portal`), thin `border-black/10` lines, and a blueprint/scanline backdrop. Match it when adding UI.
- Icons are Material Symbols loaded by `MaterialSymbolsLoader`. There is no icon package. Only the names in its `ICON_NAMES` list are downloaded, so add a new icon's name there or it renders as plain text. Size icons with `text-*` classes (default 24px); `globals.css` makes those win over Google's stylesheet.
- Style with Tailwind utility classes. Only put custom CSS in `globals.css` for effects that utilities can't express.
- Every route sets its own `metadata`: a short `title` (the root layout appends " | Khoironi Kurnia Syah"), description, canonical, and `openGraph` with `images: OG_IMAGES` (a page's `openGraph` replaces the root one, image included).
- Animations are switched off globally for visitors with reduced motion turned on (`globals.css`), so nothing may rely on an animation to position an element.

## Environment

See `.env.example`: `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`, `RESEND_API_KEY`. Never commit real values.

## Git

- Default branch is `master`. Use conventional commit prefixes (`feat:`, `fix:`, `refactor:`, `chore:`).
- Don't commit or push unless asked.
