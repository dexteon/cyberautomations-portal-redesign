# Prompt for bolt.new

Build a unified personal portal web app. This is a redesign of an existing site at me.cyberautomations.com that currently has 13 pages across 6 inconsistent visual themes. I want ONE cohesive design system.

## Constraints
- No frameworks. No React, no Tailwind, no npm, no build step.
- Each page is a single self-contained HTML file with inline CSS and JS.
- All pages share one CSS variable palette (dark theme).
- Mobile responsive.
- Keep all existing JavaScript functionality.

## The unified design system

Use this single color palette for ALL pages:
```css
:root {
  --bg: #0f1115;
  --surface: #171a21;
  --surface-2: #1d212b;
  --border: #262b36;
  --border-2: #333a49;
  --text: #e7eaf0;
  --muted: #98a1b3;
  --faint: #6b7386;
  --accent: #4c8dff;
  --ok: #35c88a;
  --warn: #d9a25c;
  --crit: #e0566b;
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --mono: "SFMono-Regular", Consolas, "Cascadia Mono", Menlo, monospace;
}
```

## Pages to build

1. **Portal Home** (index.html) - Landing page with card links to all tools
2. **Medical Record** (medical/index.html) - Patient timeline, BP chart, medications, diagnoses, providers. Fetches data.json. Most complex page.
3. **Steam Library** (steam/index.html) - Game collection with search/sort/stats
4. **Job Search** (jobs/index.html) - Job listings table with filters
5. **Compensation and Budget** (finance/index.html) - Print-ready financial statement. Use Fraunces + IBM Plex Sans from Google Fonts.
6. **Comp Playground** (finance/comp-playground.html) - Interactive salary calculator
7. **Email Agency** (email-agency/index.html) - 4-account email dashboard with sidebar tabs
8. **Email Digest** (email-digest/index.html) - Cross-account inbox summary
9. **Headache Log** (playgrounds/headache-log.html) - Migraine attack logger with localStorage, DC 8100 tier calculator
10. **VA Claim** (playgrounds/va-claim.html) - VA disability rating calculator with condition cards
11. **Playgrounds Index** (playgrounds/index.html) - Tool directory
12. **RapidAPI Explorer** (playgrounds/rapidapi-explorer.html) - API catalog browser
13. **InstacartFlation** (instacart/dashboard.html) - Grocery price tracking with SVG charts

## Component patterns to use consistently

- **Cards**: background var(--surface), 1px border var(--border), radius 10px, padding 16px
- **Badges**: radius 20px, font-size 11px, 1px border
- **Tables**: sticky header, border-bottom rows, radius 10px wrapper
- **Inputs**: background var(--surface-2), 1px border, radius 8px, padding 10px 12px
- **Buttons**: primary (accent bg), secondary (surface bg with border), radius 6px
- **Breadcrumbs**: 11px uppercase, 0.12em letter-spacing, faint color
- **Alerts**: card with 3px left border in warn or crit color
- **Timeline**: vertical line with dots, event cards with date + type badge
- **Progress bars**: 8px height, radius 4px, accent fill
- **Stat boxes**: large mono number, small muted label

## Typography scale
- Page title: 26px, weight 650
- Section header: 15px, weight 600, uppercase, 0.02em tracking, muted color
- Panel title: 14px, weight 650
- Body: 14px, weight 400, line-height 1.5
- Small/muted: 13px, muted color
- Badge: 11px, weight 600
- Breadcrumb: 11px, uppercase, 0.12em tracking
- Mono stat: 22px, weight 600, monospace
- Big number: 44px, weight 700, monospace, accent color

## Max widths
- Home/playgrounds index: 880px
- Headache log: 980px
- Email digest: 1000px
- Medical/jobs/comp playground: 1180px
- VA claim: 1240px

## Start here
Read the existing HTML files in this repo to understand each page's functionality and JavaScript. Then rebuild them all with the unified design system above. Start with index.html (portal home), then medical/index.html (most complex), then work through the rest.