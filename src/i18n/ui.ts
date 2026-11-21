// Bilingual helpers. Every user-facing string is a { fr, en } pair; pages pass `lang`.
export type Lang = 'fr' | 'en';
export type L10n = { fr: string; en: string };

export const t = (s: L10n, lang: Lang) => s[lang];

/** Prefix an internal path with the site base (GitHub Pages project path). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

/** Route table: one key per page, its FR and EN path (always with trailing slash). */
export const routes = {
  home:       { fr: '/',             en: '/en/' },
  research:   { fr: '/recherche/',   en: '/en/research/' },
  projects:   { fr: '/projets/',     en: '/en/projects/' },
  experience: { fr: '/experiences/', en: '/en/experience/' },
  blog:       { fr: '/blog/',        en: '/en/blog/' },
  contact:    { fr: '/contact/',     en: '/en/contact/' }
} as const;
export type RouteKey = keyof typeof routes;

export const nav: { key: RouteKey; label: L10n; soon?: boolean }[] = [
  { key: 'research',   label: { fr: 'Recherche',   en: 'Research' } },
  { key: 'projects',   label: { fr: 'Projets',     en: 'Projects' } },
  { key: 'experience', label: { fr: 'Expériences', en: 'Experience' } },
  { key: 'blog',       label: { fr: 'Blog',        en: 'Blog' }, soon: true },
  { key: 'contact',    label: { fr: 'Contact',     en: 'Contact' } }
];

export const links = {
  linkedin: 'https://www.linkedin.com/in/arona-fall/',
  scholar: 'https://scholar.google.com/citations?user=G_k_8-4AAAAJ&hl=en',
  orcid: 'https://orcid.org/0009-0002-9563-5326',
  github: 'https://github.com/Rachidusfallensis',
  cv: '/cv/arona-fall-cv.pdf',
  doiArise: 'https://doi.org/10.1109/WETICE70595.2026.11772344'
};

/** Formspree endpoint for the contact form. Replace FORM_ID once the form exists. */
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/FORM_ID';
