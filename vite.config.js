import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        medical: './medical/index.html',
        steam: './steam/index.html',
        'email-agency': './email-agency/index.html',
        'email-digest': './email-digest/index.html',
        'finance': './finance/index.html',
        'comp-playground': './finance/comp-playground.html',
        'instacart': './instacart/dashboard.html',
        'playgrounds': './playgrounds/index.html',
        'va-claim': './playgrounds/va-claim.html',
        'headache-log': './playgrounds/headache-log.html',
        'rapidapi-explorer': './playgrounds/rapidapi-explorer.html',
        'jobs': './jobs/index.html',
      }
    }
  }
})
