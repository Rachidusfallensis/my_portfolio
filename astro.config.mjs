// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site. If the repo is renamed to rachidusfallensis.github.io,
// set base to '/' and nothing else changes (all links go through url() in src/i18n/ui.ts).
export default defineConfig({
  site: 'https://rachidusfallensis.github.io',
  base: '/my_portfolio',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false }
  }
});
