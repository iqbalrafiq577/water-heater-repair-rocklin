# Water Heater Repair Rocklin — launch checklist

Astro static site. `npm install` then `npm run dev` (local) / `npm run build` (output in `dist/`).

## 1. Replace every TODO before publishing

All of it lives in **`src/data/site.ts`**:

- [ ] Business name + legal name
- [ ] Real domain (`site.url`) — also update `astro.config.mjs` and `public/robots.txt`
- [ ] Phone number (`phone` **and** `phoneHref` — both)
- [ ] Email
- [ ] Street address + ZIP
- [ ] **CSLB licence number** — never publish an invented one
- [ ] Founded year
- [ ] Google Business Profile URL (`social.gbp`), Facebook, Yelp
- [ ] Lat/long if the address is not central Rocklin

The NAP in `site.ts` must match the Google Business Profile **character for character**.
That consistency is what actually wins the "near me" searches we deliberately did not
build pages for.

## 2. Reviews — read this

`reviews` in `src/data/site.ts` are **placeholders for layout only**. Swap them for real,
verifiable reviews before launch.

`reviewSchemaEnabled` is `false` on purpose. Review / AggregateRating structured data on
invented reviews is a structured-data violation and risks a manual action. Turn it on only
once the quotes are genuine and the GBP rating + count in `aggregateRating` are real.

## 3. Images

Only placeholder SVGs ship. Add real photos to `public/images/` and point
`site.defaultImage` at a 1200×630 WebP/JPG for social sharing. Use the company's own
van / technician / completed-install photos — stock images are a trust killer on local
service sites, and original photos with proper EXIF help local relevance.

## 4. Forms

`/contact-us` has an accessible HTML form posting to `#`. Wire it to the client's handler
(Formspree, Netlify Forms, CRM endpoint) and add spam protection before launch.

## 5. Page / keyword map — one primary keyword per page

| Page | Primary keyword | Vol |
|---|---|---|
| `/` | water heater repair rocklin | 250 |
| `/water-heater-replacement-rocklin` | water heater replacement rocklin | 150 |
| `/water-heater-installation-rocklin` | water heater installation rocklin | 60 |
| `/tankless-water-heater-repair-rocklin` | tankless water heater repair rocklin | 80 |
| `/tankless-water-heater-installation-rocklin` | tankless water heater installation rocklin | 150 |
| `/tankless-water-heater-replacement-rocklin` | tankless water heater replacement rocklin | 90 |
| `/water-heater-leak-repair-rocklin` | water heater leaking repair rocklin | — |
| `/water-heater-maintenance-rocklin` | water heater maintenance / flush rocklin ca | — |

**Deliberately NOT separate pages** (they live as sections/variations on the pages above,
to avoid cannibalisation):

- Emergency / same-day / 24-hour → section on the home page
- Gas and electric repair → sections on the home page
- `water heater installer rocklin` → installation page
- `hot water heater replacement rocklin`, `50 gallon replacement` → replacement page
- Cost keywords → pricing tables on each service page + the blog
- Rocklin neighbourhoods (Whitney Ranch, Stanford Ranch, Sunset Whitney…) → the
  "Areas We Cover" section, never their own pages

**"Near me" keywords are intentionally excluded.** They are proximity-ranked and cannot be
targeted on-page. They are won through the Google Business Profile, NAP consistency,
citations and review velocity.

## 6. SEO already built in

- Static HTML, near-zero JS, inlined critical CSS
- Unique title + meta description + canonical on every page
- Open Graph + Twitter card tags
- JSON-LD `@graph` on every page: `Plumber` (LocalBusiness) + `WebSite`, plus per-page
  `Service` with `OfferCatalog`/`PriceSpecification`, `FAQPage`, `BreadcrumbList`, and
  `Article` on blog posts — all `@id`-linked back to one business node
- Geo meta tags (region, placename, position, ICBM)
- `sitemap-index.xml` via `@astrojs/sitemap`, `robots.txt`
- Visible breadcrumbs that match the BreadcrumbList markup
- Semantic HTML, one H1 per page, logical H2/H3 nesting
- Skip link, visible focus states, labelled form fields, `prefers-reduced-motion`
- Internal linking: every service page cross-links the others; blog posts link up to
  the commercial pages

## 7. Still to do after launch

- [ ] Google Business Profile: claim, categories (Water Heater Repair Service as primary),
      services list, photos, Q&A, review request flow
- [ ] Google Search Console + Bing Webmaster — submit `sitemap-index.xml`
- [ ] Analytics (GA4 or a privacy-friendly alternative) + call tracking
- [ ] Local citations: Yelp, BBB, Angi, HomeAdvisor, Nextdoor, Placer County directories
- [ ] Legal pages reviewed by the client's attorney
- [ ] Phase 2 only once Rocklin ranks: a cost page, then city pages for Roseville (5 mi),
      Loomis (5 mi), Lincoln (9 mi), Granite Bay (9 mi), Citrus Heights (12 mi) — and only
      for areas the client genuinely services
