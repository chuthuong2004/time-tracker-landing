# Time Tracker — landing page

Marketing site for [Time Tracker](https://app.timetracker.io.vn), a time tracker
and invoicing tool for freelancers.

- **Live:** https://timetracker.io.vn
- **The app:** https://app.timetracker.io.vn ([repo](https://github.com/chuthuong2004/time-tracking))

## The idea

The page is a timesheet. Each section is one beat of a working day, with the
clock time in the left gutter, and the whole thing totals up at the bottom the
way an invoice does — the amount being the pricing. The hero is a real running
clock with money accruing by the second, because a screenshot of a timer is only
a picture of a timer.

Screenshots under `public/shots/` come from the real app. Payment details and the
contact email are hidden before capture — they are real, and this page is public.

## Local

```sh
npm install
npm run dev      # http://localhost:3000
npm run build
```

Next.js 16 (App Router) · Tailwind v4 · no other runtime dependencies.
