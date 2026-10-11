# rhevix.com

The Rhevix website. Next.js 16 (App Router), TypeScript, no CSS framework. Light mode.

## Brand

Colours are taken from the logo and defined once in `app/globals.css`:

| Token | Colour | Use |
|---|---|---|
| `--brand-ink` / `--night` | `#001030` navy | Headings, footer (the wordmark colour) |
| `--brand` | `#0060F0` electric blue | Buttons, links, labels (passes WCAG AA with white text) |
| `--cyan` | `#00C2FA` | Gradients and artwork only |
| `--violet` | `#6A20F0` | Gradients and artwork only |
| `--brand-gradient` | cyan → blue → violet | Label rules, progress bars, accents |

Logo files are in `public/brand/` (full colour, white-wordmark version for dark backgrounds, tagline versions, and the R mark).
Favicon and Apple icon are `app/icon.png` and `app/apple-icon.png`. The share image is `public/og.png`.
These were produced from a 400 px PNG; replace them with SVG or high-resolution files from your designer for the sharpest result on retina screens.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
```

## Deploy (Vercel, recommended)

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New → Project**, import the repository. Framework is detected automatically.
3. Add environment variables (Project → Settings → Environment Variables):

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Your live URL, e.g. `https://rhevix.com`. Used for sitemap, canonical and social links. |
| `RESEND_API_KEY` | For forms | API key from resend.com. Without it, form submissions are only logged. |
| `CONTACT_TO_EMAIL` | For forms | Inbox that receives enquiries and applications. |
| `CONTACT_FROM_EMAIL` | Optional | Sender, e.g. `Rhevix <website@rhevix.com>` (domain must be verified in Resend). |

4. Add your domain under **Settings → Domains** and update DNS at your registrar as instructed.

Any Node host that runs `next start` also works (AWS Amplify, Netlify, Render, a container).

## Editing content (no CMS needed)

All copy lives in `content/`. Change a file, commit, and the site redeploys.

| File | What it controls |
|---|---|
| `content/site.ts` | Company name, email, social links, registered address, header, mega menus, footer, legal links |
| `content/home.ts` | Homepage carousel, trust strip, agenda themes, tiles, "Why Rhevix", technologies, life cards |
| `content/services.ts` | The nine service pages (`/services/...`) |
| `content/industries.ts` | The seven industry pages (`/industries/...`) |
| `content/insights.ts` | Articles. Add an object to publish a new article at `/insights/<slug>` |
| `content/assessments.ts` | Questions, scoring bands and recommendations for the self-assessments |
| `content/company.ts` | About page values, leadership, engagement models, vetting, expert roles, open roles, life pages |
| `content/legal.ts` | Terms, privacy, cookies, accessibility |

Things that appear automatically when filled in:
- **Social icons** in the footer: set URLs in `content/site.ts`.
- **Leadership** section on About: add people to `about.leadership`.
- **Open roles** on Careers: add roles to `openRoles`.

New pages are added to `/sitemap` and `/sitemap.xml` automatically.

## Do you need a CMS?

Not to launch. Content is typed and separated from layout, so developers can edit it quickly and safely.
Add a CMS when non-developers need to publish regularly (weekly insights, job posts):

- **Keystatic**: free, Git-based, edits the same kind of files in a web editor. Smallest change.
- **Sanity** or **Payload**: hosted editing dashboard, scheduled publishing, roles and workflows.

To migrate, replace the arrays exported from `content/*.ts` with fetches from the CMS. The page components only depend on the exported shapes.

## SEO

Built in and verified on every page:
- Server-rendered HTML (content is in the page source, no JavaScript needed to read it)
- Unique `<title>` and meta description per page, one `<h1>` per page
- Canonical URL on every page (filtered views like `/insights?type=guide` point to `/insights`)
- Open Graph and Twitter cards with a share image (`public/og.png`)
- Structured data (JSON-LD): Organization and WebSite site-wide, BreadcrumbList on inner pages, Service on service pages, Article on insights
- `sitemap.xml` (every page, with last-modified dates) and `robots.txt`, both generated automatically
- Crawlable `<a href>` links throughout, including the mega menu

After launch:
1. Verify the domain in **Google Search Console** and submit `https://<your-domain>/sitemap.xml`.
2. Do the same in **Bing Webmaster Tools** (also feeds several AI search tools).
3. Use Search Console's **URL Inspection** on the homepage to request indexing.
4. Set `NEXT_PUBLIC_SITE_URL` to the exact live domain, or canonical URLs will point to the default.
5. Publish insights regularly; fresh, expert content is what grows search traffic over time.

## Before launch checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`
- [ ] Add registered company details and social links in `content/site.ts`
- [ ] Have `content/legal.ts` reviewed by your legal adviser
- [ ] Confirm the technology list in `content/home.ts` reflects real skills
- [ ] Confirm commitments in copy (NDA before first call, four-stage vetting, screening)
- [ ] Replace the logo PNGs in `public/brand/` with SVG or high-resolution versions (and an official reversed logo for dark backgrounds)

## Structure

```
app/            routes (pages), API route for forms, sitemap, robots
components/     Header (mega menus), Footer, HeroCarousel, Agenda, forms, assessment, SilkArt
content/        all editable copy
lib/            silk art engine, shared UI helpers, route list
public/story.html  the sixty-second animated story
```
