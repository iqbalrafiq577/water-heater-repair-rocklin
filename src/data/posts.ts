// =====================================================================
//  BLOG POST INDEX — single source of truth
//  Add a post here AND create the matching page at
//  src/pages/blog/<slug>.astro. Each post page reads its own title,
//  excerpt and published date from this array so the hub page, the
//  post page and the generated sitemap can never drift apart.
//
//  These posts exist to capture INFORMATIONAL queries. Never give a
//  post a commercial title such as "water heater repair rocklin" —
//  that cannibalises the service pages. Keep titles question-shaped.
// =====================================================================

export interface Post {
  /** URL slug — the page must live at src/pages/blog/<slug>.astro */
  slug: string;
  /** Doubles as the <h1> and the <title>. Keep to 60 characters. */
  title: string;
  /** One-line summary, used on the hub card and under the post h1. */
  excerpt: string;
  /** ISO date (YYYY-MM-DD). */
  published: string;
  /** ISO date, only if the post has been materially revised. */
  modified?: string;
}

/** Newest first — the hub renders them in this order. */
export const posts: Post[] = [
  {
    slug: 'water-heater-making-noise',
    title: 'Why Is My Water Heater Making Noise?',
    excerpt:
      'Popping, rumbling, kettling, ticking and screeching all mean different things. Here is which sounds are harmless and which need a plumber.',
    published: '2026-09-29',
  },
  {
    slug: 'water-heater-permit-california',
    title: 'Water Heater Permits in California: What to Expect',
    excerpt:
      'Why California requires a permit for a water heater swap, what the inspector actually looks at, and the real cost of skipping it.',
    published: '2026-08-12',
  },
  {
    slug: 'tank-vs-tankless-water-heater',
    title: 'Tank vs Tankless Water Heater: An Honest Comparison',
    excerpt:
      'Upfront cost, running cost, space, recovery and hot-water feel compared — plus the situations where tankless is the wrong answer.',
    published: '2026-06-18',
  },
  {
    slug: 'how-long-do-water-heaters-last',
    title: 'How Long Do Water Heaters Last? A Realistic Answer',
    excerpt:
      'Typical lifespans for tank, tankless and heat pump units, what cuts them short in hard-water areas, and how to work out the age of yours.',
    published: '2026-05-06',
  },
  {
    slug: 'signs-your-water-heater-is-failing',
    title: 'Signs Your Water Heater Is Failing (and What They Mean)',
    excerpt:
      'Rusty water, popping noises, lukewarm showers, a weeping relief valve and a creeping gas bill — ranked by how urgent each one really is.',
    published: '2026-03-24',
  },
  {
    slug: 'repair-or-replace-water-heater',
    title: 'Repair or Replace a Water Heater? How to Decide',
    excerpt:
      'The 50% rule, sensible age thresholds, which faults are cheap and which are terminal — with a decision table you can use in five minutes.',
    published: '2026-02-11',
  },
];

/** Helper so a post page can pull its own metadata by slug. */
export const getPost = (slug: string): Post => {
  const found = posts.find((p) => p.slug === slug);
  if (!found) throw new Error(`Unknown post slug: ${slug} — add it to src/data/posts.ts`);
  return found;
};
