# Time Tracker — landing page

Marketing site for [Time Tracker](https://app.timetracker.io.vn), a time tracker
and invoicing tool for freelancers.

- **Live:** https://timetracker.io.vn (vi) · https://timetracker.io.vn/en
- **The app:** https://app.timetracker.io.vn ([repo](https://github.com/chuthuong2004/time-tracking))

## The idea

The page is a timesheet. A ledger rail runs down the left with a clock time and
a tick at each section — one per beat of a working day — and the whole thing
totals up at the bottom the way an invoice does, where the amount is the pricing.
The hero is a real running clock with money accruing by the second, because a
screenshot of a timer is only a picture of a timer.

## How it is built

- **Two languages, two routes.** `/` is Vietnamese, `/en` is English, both
  statically rendered with `hreflang` alternates. A client-side string swap would
  leave one language invisible to crawlers, and this page exists to be found.
- **Two themes, both chosen.** The light palette re-picks every step against a
  paper surface rather than inverting the dark one. `data-theme` is set by an
  inline script before first paint, so there is no flash.
- **Screenshots in four variants.** Each shot is captured per language and per
  theme, so the English page shows an English app rather than a Vietnamese one
  under English headings. The two theme URLs ride in custom properties and only
  the matching rule resolves, so a visitor fetches ~150KB — one variant — not all
  four.
- **Be Vietnam Pro** for everything except numbers. It is drawn for this
  language, so ờ / ủ / ế / Đ hold up at display weight. JetBrains Mono takes the
  clock and the rail timestamps; money stays in the sans, because the mono draws
  ₫ with a stray crossbar and a monospace gap either side.

Screenshots under `public/shots/` come from the real app, running a dataset built
from a real backup with the identifying parts rewritten: client and project names
are generic, the issuer block is a placeholder, and payment details are blank.
Hours, rates and invoice numbers are untouched, because that is what makes the
shots look like an actual workload rather than a fixture.

## Local

```sh
npm install
npm run dev      # http://localhost:3000
npm run build
```

Next.js 16 (App Router) · Tailwind v4 · no other runtime dependencies.
