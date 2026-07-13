# Post-bolt: local deploy prompt for Claude Code

After bolt.new finishes the enhancements, run this prompt in Claude Code (or Hermes) locally to pull the changes and deploy to the live portal.

---

Pull the latest changes from the GitHub repo and deploy to the live portal.

1. cd to G:\Scratch\bolt-staging and git pull origin master
2. Back up the current portal files: copy all HTML and JSON files from D:\DexProjects\i-love-me\portal\ to G:\Scratch\portal-backup-YYYYMMDD\ (create the directory with today's date)
3. Copy the updated files from the bolt-staging repo into the live portal:
   - Copy index.html, freshness.json to D:\DexProjects\i-love-me\portal\
   - Copy medical/index.html to D:\DexProjects\i-love-me\portal\medical\
   - Copy steam/index.html to D:\DexProjects\i-love-me\portal\steam\
   - Copy jobs/index.html and jobs/jobs.json to D:\DexProjects\i-love-me\portal\jobs\
   - Copy finance/index.html and finance/comp-playground.html to D:\DexProjects\i-love-me\portal\finance\
   - Copy email-agency/index.html to D:\DexProjects\i-love-me\portal\email-agency\
   - Copy email-digest/index.html to D:\DexProjects\i-love-me\portal\email-digest\
   - Copy playgrounds/index.html, playgrounds/headache-log.html, playgrounds/va-claim.html, playgrounds/rapidapi-explorer.html, playgrounds/rapidapi-catalog.json to D:\DexProjects\i-love-me\portal\playgrounds\
   - Copy instacart/dashboard.html to D:\DexProjects\i-love-me\portal\instacart\
4. Do NOT overwrite D:\DexProjects\i-love-me\portal\medical\data.json or bp_log.json. Those are the live data files maintained separately.
5. Do NOT copy package.json, package-lock.json, vite.config.js, .bolt/, .gitignore, or any node_modules to the portal. The portal serves plain HTML files with no build step.
6. Verify the local server (port 8890) is still running: curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8890/
7. Verify the tunnel is up: curl -s -o /dev/null -w "%{http_code}" --max-time 10 https://me.cyberautomations.com/
8. Test each page loads: curl the home page, medical page, and one playground page
9. Report what changed and any files that were not copied (and why)