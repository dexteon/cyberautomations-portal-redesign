# Fix prompt for bolt.new

Two pages were excluded from the original import due to size (they had large inline JSON data arrays baked into the HTML). They need to be rebuilt from scratch using the unified design system you just applied to the other pages.

## Page 1: Job Search (jobs/index.html)

This page previously had 152KB of inline job listing data. Rebuild it to fetch data from a JSON file instead of inlining it.

What it does:
- Shows a searchable, sortable table of job listings
- Filter by keyword (title, company, location)
- Sortable columns: title, company, location, posted date, salary
- Status badges (new, applied, interested)
- Stat tiles at top: total jobs, new this week, remote count
- Chips for filtering by job type (full-time, contract, remote, etc.)

Build it as jobs/index.html using the unified design system. Create a sample jobs.json file with 5 placeholder entries in the same directory so the page has data to render. The page should fetch jobs.json on load and populate the table from it.

## Page 2: RapidAPI Explorer (playgrounds/rapidapi-explorer.html)

This page previously had 165KB of inline API catalog data. Rebuild it to fetch from a JSON file.

What it does:
- Browsable catalog of RapidAPI subscriptions
- Top bar with stats: total APIs, categories, calls this month
- Searchable list of API cards (name, host, category, quota used/remaining)
- Click a card to expand and show endpoints (method, path, description)
- Category filter dropdown
- Quota bars showing usage per API

Build it as playgrounds/rapidapi-explorer.html using the unified design system. Create a sample rapidapi-catalog.json with 5 placeholder entries. The page should fetch the JSON on load.

## Design system to use (same as the pages you already rebuilt)

Use the same CSS variables from the unified theme you applied to the other pages. Same topbar, same card styles, same table patterns, same badge/pill styles, same mono font for stats.

## Also fix

1. The finance/index.html still has stripped @font-face comments. Replace them with actual Google Fonts links for Fraunces (400, 700), IBM Plex Sans (400, 700), and IBM Plex Mono (500). Add the <link> tags in the <head>.

2. Add a jobs link to the portal home page (index.html) card grid if it is not already there. Same for the RapidAPI Explorer on the playgrounds index page.