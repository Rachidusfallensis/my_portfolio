# Arona Fall, portfolio

Bilingual (FR / EN) static portfolio of Arona Fall: CIFRE PhD researcher in AI and
model-based systems engineering (MBSE) at LIUPPA (Université de Pau et des Pays de
l'Adour) with Alouette AI. Built with Astro 5, deployed to GitHub Pages.

Live: https://rachidusfallensis.github.io/my_portfolio/

## Requirements

- Node.js 22 (matches the deploy workflow)

## Local development

```sh
npm install
npm run dev       # dev server on http://localhost:4321/my_portfolio/
npm run build     # static build into dist/
npm run preview   # serve the built dist/ locally
```

## Deployment

Pushing to `main` (or running the workflow manually from the Actions tab) triggers
`.github/workflows/deploy.yml`, which builds the site with `withastro/action@v3` and
publishes it with `actions/deploy-pages@v4`.

The repository's Pages source must be set to **GitHub Actions** (Settings > Pages > Build
and deployment > Source). This is a one-time setting; the workflow does not change it.

## Contact form (Formspree)

The contact form posts to Formspree. The endpoint is defined in `src/i18n/ui.ts`:

```ts
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/FORM_ID';
```

Create a form on formspree.io, then replace `FORM_ID` with its ID.

## Moving to the user site (rachidusfallensis.github.io)

To serve the site at the root of `https://rachidusfallensis.github.io/`:

1. Rename the GitHub repository to `rachidusfallensis.github.io`.
2. In `astro.config.mjs`, set `base: '/'`.

Nothing else needs to change: every internal link goes through `url()` in
`src/i18n/ui.ts`, which adds the base. Also update the sitemap URL in `public/robots.txt`
to drop the `/my_portfolio` segment.

## Where things live

- `src/data/*.ts`: content (research, projects, experience, and so on). Edit these to
  change text and entries rather than the page components.
- `src/i18n/ui.ts`: routes (FR and EN paths), navigation, external links, Formspree endpoint, and the `url()` helper.
- `src/components/Seo.astro`: Open Graph, Twitter card, and JSON-LD `Person` metadata, included from `src/layouts/Base.astro`.
- `src/pages/sitemap.xml.ts`: generated sitemap with hreflang alternates for all routes.
- `public/`: static assets (`og.png` social image, `robots.txt`, CV, logos, favicon).
- `docs/`: design and specification documents (`SPEC.md`, `DESIGN.md`, and the interactive
  prototype under `docs/design/`).
