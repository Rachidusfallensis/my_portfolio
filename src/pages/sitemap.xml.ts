import type { APIRoute } from 'astro';
import { routes, url, type Lang } from '../i18n/ui';

export const prerender = true;

const langs: Lang[] = ['fr', 'en'];

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(url(p), site).href;

  const entries = Object.values(routes).flatMap((byLang) =>
    langs.map((lang) => {
      const alternates = langs
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(byLang[l])}" />`)
        .join('\n');
      return `  <url>
    <loc>${abs(byLang[lang])}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(byLang.fr)}" />
  </url>`;
    })
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
