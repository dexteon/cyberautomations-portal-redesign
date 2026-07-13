# done

All three ENHANCE-PROMPT.md features implemented and build passes.

## 1. "Last updated" timestamp in every page topbar
- All 13 pages now fetch `/freshness.json` and display the relevant timestamp in the topbar
- Medical page compares freshness.json "as_of" with data.json "generated" and shows whichever is more recent
- Headache log also checks localStorage entry timestamps
- Falls back to "Updated: unknown" on fetch failure

## 2. "Refresh data" button in every page topbar
- Small refresh button (arrow icon) next to the timestamp in each topbar
- Uses cache-busting query string (`?t=Date.now()`)
- Pages with JSON data sources re-fetch in place without full reload (jobs, instacart, medical, rapidapi-explorer)
- Pages with inline/static data reload the page
- Shows "..." spinner state briefly during refresh

## 3. Doctor export on medical page
- "Export for doctor" button at the bottom of the medical page
- Opens a new window with a clean, printable clinical document
- Includes: diagnoses, BP readings (last 90 days), active medications, recent encounters (6 months), providers
- Excludes: va_relevance, va_claimed, evidence narratives, onset_basis, source_set, source fields
- Filters out event details containing VA-related language
- Serif font (Georgia), black on white, 1-inch margins, Print/Close buttons
- Auto-triggers print dialog after 500ms
