# me.cyberautomations.com - Portal Redesign

## What this is

A personal portal served at me.cyberautomations.com via Cloudflare tunnel. 13 pages across 6 visual themes. All HTML/CSS/JS is inline (no build step, no frameworks, no npm). Each page is a single self-contained .html file.

## Current site map

| # | Page | File | Theme | Notes |
|---|---|---|---|---|
| 1 | Portal Home | index.html | Main Dark | Landing page, links to all tools |
| 2 | Medical Record | medical/index.html | Main Dark | Timeline, BP chart, meds, diagnoses, providers. 451 lines. Fetches data.json + bp_log.json |
| 3 | Steam Library | steam/index.html | Steam | Game stats, search, sort. 347 lines |
| 4 | Job Search | jobs/index.html | Main Dark | 152KB (mostly inline job data) - SKIPPED in this export, rebuild with API fetch |
| 5 | Compensation and Budget | finance/index.html | Finance (light/print) | Print-ready financial statement. Uses Fraunces + IBM Plex fonts |
| 6 | Comp Playground | finance/comp-playground.html | Warm Dark (gold accent) | Interactive comp calculator |
| 7 | Email Agency | email-agency/index.html | GitHub Dark | 4-account email dashboard with AI drafts |
| 8 | Email Digest | email-digest/index.html | Main Dark | Cross-account email summary |
| 9 | Headache Log | playgrounds/headache-log.html | Main Dark | DC 8100 migraine attack logger with localStorage |
| 10 | VA Claim | playgrounds/va-claim.html | Main Dark | DC 7101/8100 rating calculator |
| 11 | Playgrounds Index | playgrounds/index.html | Main Dark | Tool directory |
| 12 | RapidAPI Explorer | playgrounds/rapidapi-explorer.html | GitHub Dark | SKIPPED (165KB inline API catalog) |
| 13 | InstacartFlation | instacart/dashboard.html | Instacart (near-black) | Grocery price tracking with SVG charts |

## Current design system

### Colors (Main Dark theme - used by 7 of 13 pages)
```
--bg: #0f1115        --card: #171a21      --card2: #1d212b
--border: #262b36    --border2: #333a49   --text: #e7eaf0
--muted: #98a1b3     --faint: #6b7386     --accent: #4c8dff
--ok: #35c88a        --warn: #d9a25c      --crit: #e0566b
--mil: #8a9a5b       --mono: SFMono-Regular, Consolas, Menlo
```

### Other themes
- Steam: #1b2838 / #66c0f4 / #c7d5e0 (Steam-inspired blue)
- Finance (light): #f6f7f4 / #1a211d (print document, Fraunces serif)
- GitHub Dark: #0d1117 / #58a6ff (GitHub-inspired)
- Instacart: #0d0d0d / #3987e5 (near-black)
- Comp Playground: #10120f / #c9a15a (warm dark, gold accent)

### Typography
- System sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif (14px base)
- Mono: SFMono-Regular, Consolas, Cascadia Mono, Menlo (stats, dates, readings, ICD codes)
- Finance page: Fraunces (serif) + IBM Plex Sans + IBM Plex Mono (were base64-embedded, stripped in this export - load from Google Fonts)

### Patterns
- Cards: bg=card, border=1px solid border, radius=10px, padding=16px
- Badges/pills: radius=20px, font-size=11px
- Tables: sticky headers, border-collapse, border-bottom rows
- Inputs: bg=card2, border=1px, radius=6px or 8px
- Breadcrumbs: 11px uppercase, .12em letter-spacing, faint color
- Alerts: card bg with 3px left border (warn/crit color)
- Timeline: vertical dots connected by line, event cards
- Max widths: 880px (home), 980px (headache), 1000px (email), 1180px (medical/jobs), 1240px (VA claim)

## What I want from bolt.new

Redesign the entire portal with a unified design system. Keep all 13 pages and their functionality, but replace the 6 inconsistent themes with one cohesive design language. Goals:

1. One unified dark theme (the current Main Dark is the best starting point)
2. Consistent spacing, typography, border radius, and component styles across all pages
3. Keep the inline data approach (no build step) but use shared CSS variables
4. Keep it dependency-free (no React, no Tailwind, no npm - just HTML/CSS/JS)
5. The Medical Dashboard and VA Claim pages are the most complex - prioritize those
6. Steam and Finance pages can have subtle theme variations but should share the base system
7. Mobile responsive (most pages already have @media queries)
8. Keep all JavaScript functionality intact (timeline filters, BP chart, headache logger, VA calculator, etc.)

## Files included

All HTML files are included except jobs/index.html and rapidapi-explorer.html (too large due to inline data). Data files (data.json, bp_log.json, orders.json) are excluded. The finance/index.html had its base64 fonts stripped to reduce size from 163KB to 37KB.