import { site } from './site';

/** FAQPage node — only ever include questions that are visible on the page. */
export const faqSchema = (items: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
  })),
});

/** BreadcrumbList node matching the visible breadcrumb trail. */
export const breadcrumbSchema = (items: { name: string; href?: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((i, n) => ({
    '@type': 'ListItem',
    position: n + 1,
    name: i.name,
    ...(i.href ? { item: new URL(i.href, site.url).href } : {}),
  })),
});

/** Service node, tied back to the global LocalBusiness provider. */
export const serviceSchema = (opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  offers?: { name: string; low?: string; high?: string }[];
}) => ({
  '@type': 'Service',
  '@id': `${site.url}${opts.path}#service`,
  name: opts.name,
  description: opts.description,
  serviceType: opts.serviceType,
  url: new URL(opts.path, site.url).href,
  provider: { '@id': `${site.url}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Rocklin', address: { '@type': 'PostalAddress', addressRegion: 'CA', addressCountry: 'US' } },
    ...site.nearbyCities.map((c) => ({ '@type': 'City', name: c.name })),
  ],
  ...(opts.offers?.length
    ? {
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${opts.name} — Rocklin, CA`,
          itemListElement: opts.offers.map((o) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: o.name },
            ...(o.low
              ? {
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    priceCurrency: 'USD',
                    minPrice: o.low,
                    maxPrice: o.high ?? o.low,
                  },
                }
              : {}),
          })),
        },
      }
    : {}),
});

/** Article node for blog posts. */
export const articleSchema = (opts: {
  title: string; description: string; path: string; published: string; modified?: string;
}) => ({
  '@type': 'Article',
  headline: opts.title,
  description: opts.description,
  mainEntityOfPage: new URL(opts.path, site.url).href,
  datePublished: opts.published,
  dateModified: opts.modified ?? opts.published,
  author: { '@id': `${site.url}/#business` },
  publisher: { '@id': `${site.url}/#business` },
  image: new URL(site.defaultImage, site.url).href,
});
