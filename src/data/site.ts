// =====================================================================
//  SITE / NAP CONFIG  —  EDIT THESE BEFORE LAUNCH
//  Everything marked TODO must be replaced with the client's real data.
//  NAP here must match the Google Business Profile EXACTLY (character
//  for character) — that consistency is what wins "near me" searches.
// =====================================================================

export const site = {
  name: 'Rocklin Water Heater Pros',
  legalName: 'Rocklin Water Heater Pros',
  url: 'https://www.waterheaterrepairrocklin.com', // TODO: real domain
  logo: '/images/logo.svg',
  defaultImage: '/images/water-heater-repair-rocklin-technician-servicing-unit.webp',

  phone: '(916) 270-0948',
  phoneHref: 'tel:+19162700948',
  email: 'service@waterheaterrepairrocklin.com', // TODO

  address: {
    street: '4415 Pacific St, Suite 120', // TODO: placeholder — replace with the address on the Google Business Profile
    city: 'Rocklin',
    region: 'CA',
    regionName: 'California',
    postalCode: '95677',
    country: 'US',
  },

  geo: { lat: 38.7907, lng: -121.2358 }, // Rocklin, CA

  // Add `number` (e.g. 'CSLB #123456') once the real license number is confirmed. Never invent one.
  license: { authority: 'California CSLB' },

  // Diagnostic / service-call fee, credited against the repair if the customer goes ahead.
  diagnosticFee: '$80–$160',

  hours: '24/7 — emergency water heater service, 7 days a week',
  foundedYear: 2012, // TODO

  // Neighborhoods INSIDE Rocklin — these get sections, never their own pages.
  neighborhoods: [
    'Whitney Ranch',
    'Stanford Ranch',
    'Sunset Whitney',
    'Springfield at Whitney Oaks',
    'Clover Valley',
    'Sierra College / Rocklin Commons',
  ],

  zips: ['95677', '95765'],

  // Nearby cities. Build dedicated city pages ONLY once Rocklin ranks and
  // only if the client genuinely services these areas.
  nearbyCities: [
    { name: 'Roseville', miles: 5 },
    { name: 'Loomis', miles: 5 },
    { name: 'Lincoln', miles: 9 },
    { name: 'Granite Bay', miles: 9 },
    { name: 'Citrus Heights', miles: 12 },
    { name: 'Auburn', miles: 14 },
  ],

  social: {
    gbp: '', // add the Google Business Profile link here once it exists
    facebook: '',
    yelp: '',
  },

  // ---------------------------------------------------------------
  //  REVIEW SCHEMA SWITCH — READ THIS
  //  The testimonials below are PLACEHOLDERS for layout only.
  //  Leave `reviewSchemaEnabled` false until you paste in genuine,
  //  verifiable reviews. Marking up invented reviews is a Google
  //  structured-data violation and risks a manual action.
  // ---------------------------------------------------------------
  reviewSchemaEnabled: false,

  //  Total review count shown beside the star rating on the reviews slider.
  //  TODO: set this to the real number from the Google Business Profile before
  //  launch — a count that does not match the live profile is a fabricated
  //  trust signal and should not be published.
  reviewCount: 319,
  aggregateRating: { value: '4.9', count: 0 }, // TODO: real GBP numbers
};

// ---------------------------------------------------------------------
//  SAMPLE REVIEWS — LAYOUT COPY ONLY, NOT REAL CUSTOMERS.
//  These exist so the slider renders with realistic-looking content while
//  the site is being built. They are NOT genuine testimonials and must be
//  replaced with real, permissioned customer reviews before this site goes
//  live. Publishing invented testimonials as real is deceptive and, in the
//  US, can breach the FTC endorsement rules. `reviewSchemaEnabled` stays
//  false so no review structured data is emitted from this placeholder copy.
// ---------------------------------------------------------------------
export const reviews = [
  {
    name: 'Danielle R.',
    area: 'Whitney Ranch, Rocklin',
    rating: 5,
    date: '2026-09-02',
    text: 'Woke up to a cold shower before work, which is the worst way to start a Monday. Called at 7, someone was in the garage by 9. Turned out to be the thermocouple, not the whole unit like I had convinced myself. He showed me the old one and the price was exactly what he quoted on the phone.',
  },
  {
    name: 'Marcus T.',
    area: 'Stanford Ranch, Rocklin',
    rating: 5,
    date: '2026-08-19',
    text: 'Our 14 year old tank finally let go on a Saturday afternoon and there was water everywhere. They talked me through shutting it off over the phone before they even arrived. New unit in the same day, permit pulled, straps done properly. I did not expect any of that on a weekend.',
  },
  {
    name: 'Priya K.',
    area: 'Sunset Whitney, Rocklin',
    rating: 5,
    date: '2026-07-28',
    text: 'Tankless kept throwing an error code mid shower. Two other companies told me to just replace it. These guys descaled it, cleaned the flame rod and explained why it kept happening. Six months on and it has not done it once. Saved me a few thousand dollars honestly.',
  },
  {
    name: 'Greg H.',
    area: 'Clover Valley, Rocklin',
    rating: 5,
    date: '2026-06-11',
    text: 'Straightforward, which is all I wanted. He looked at the unit, said it was twelve years old and gave me both numbers — repair and replace — and let me decide instead of pushing. We went with the replacement. Invoice matched the estimate to the dollar.',
  },
  {
    name: 'Ana M.',
    area: 'Springfield at Whitney Oaks, Rocklin',
    rating: 4,
    date: '2026-05-23',
    text: 'Good work and fair pricing. The only reason this is not five stars is that the first appointment slot moved by a couple of hours, though they did call ahead to tell me rather than leaving me waiting. The flush itself made a real difference to the noise.',
  },
  {
    name: 'Tom B.',
    area: 'Sierra College / Rocklin Commons',
    rating: 5,
    date: '2026-04-15',
    text: 'I manage a few rentals and have used them three times now. They send the write up and photos the same day, which my owners appreciate, and they do not invent extra work. That is rarer than it should be.',
  },
];
