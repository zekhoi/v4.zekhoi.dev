# zekhoi.dev (v4)

Personal portfolio of Khoironi Kurnia Syah, Product Engineer. Live at [zekhoi.dev](https://zekhoi.dev).

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Deployed on Vercel.

## Getting started

Requires Node >= 20.19.4 and pnpm.

```bash
pnpm install
cp .env.example .env.local   # fill in the keys below
pnpm dev                     # http://localhost:3000
```

### Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile widget on the contact form |
| `TURNSTILE_SECRET_KEY` | Server-side Turnstile verification |
| `RESEND_API_KEY` | Sends contact form messages via Resend |

The site runs without them. Only the contact form needs them.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build, then generate the sitemap (`next-sitemap`) |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |

A husky pre-push hook runs lint and build.

## Project structure

```
src/
  app/          routes (/, /works, /archive, /services, /contact), server action, error pages
  components/   home sections, layout chrome, contact form, shared visuals
  lib/          project data (data.ts), og:image fetcher, utils
```

Projects are listed in `src/lib/data.ts`. Public projects get their preview image from the linked site's `og:image` at build time.

See [AGENTS.md](AGENTS.md) for conventions.
