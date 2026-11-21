import type { L10n } from '../i18n/ui';

export const head = {
  title: { fr: 'Recherche', en: 'Research' },
  lede: {
    fr: "Intégrer l'IA dans l'ingénierie système à base de modèles, avec la rigueur qu'exige le domaine.",
    en: 'Bringing AI into model-based systems engineering, with the rigour the field requires.'
  }
};

export const question: L10n = {
  fr: 'Comment des agents IA peuvent-ils permettre une adoption effective du MBSE tout au long du cycle de vie des systèmes cyber-physiques industriels ?',
  en: 'How can AI agents enable the effective adoption of MBSE throughout the life cycle of industrial cyber-physical systems?'
};

export const meta: { dt: L10n; dd: L10n }[] = [
  { dt: { fr: 'Cadre', en: 'Setting' }, dd: { fr: "Thèse CIFRE, LIUPPA (Université de Pau et des Pays de l'Adour) et Alouette AI", en: 'CIFRE industrial PhD, LIUPPA (University of Pau and Pays de l\'Adour) and Alouette AI' } },
  { dt: { fr: 'Direction', en: 'Supervisor' }, dd: { fr: 'Pr. Ernesto Exposito', en: 'Pr. Ernesto Exposito' } },
  { dt: { fr: 'École doctorale', en: 'Doctoral school' }, dd: { fr: 'ED 211, Sciences exactes et leurs applications', en: 'ED 211, Exact Sciences and their Applications' } },
  { dt: { fr: 'Période', en: 'Period' }, dd: { fr: 'Décembre 2025 à novembre 2028', en: 'December 2025 to November 2028' } }
];

export const stepsTitle: L10n = { fr: 'Trajectoire', en: 'How the work evolved' };
export const steps: { h: L10n; p: L10n; now?: boolean }[] = [
  { h: { fr: 'Cadrage', en: 'Framing' }, p: { fr: "Où insérer l'IA dans le cycle de vie pour réduire l'effort de modélisation et l'écart entre le modèle et le système réel.", en: 'Where AI fits in the life cycle to reduce modelling effort and the drift between the model and the real system.' } },
  { h: { fr: 'ARISE', en: 'ARISE' }, p: { fr: "Produire et structurer des exigences à partir de documents d'ingénierie. Évaluation avec des experts sur le projet européen SAFE.", en: 'Producing and structuring requirements from engineering documents, evaluated with domain experts on the European SAFE project.' } },
  { h: { fr: 'Constat', en: 'Finding' }, p: { fr: 'Une exigence bien rédigée peut être fausse : la qualité structurelle et l\'exactitude factuelle sont deux dimensions distinctes, qui demandent une validation humaine.', en: 'A well-written requirement can still be wrong: structural quality and factual correctness are separate dimensions that need human validation.' } },
  { now: true, h: { fr: "Aujourd'hui", en: 'Now' }, p: { fr: "Faire évoluer les modèles d'ingénierie de façon contrôlée : l'IA propose, des mécanismes vérifiables décident, et chaque décision garde sa justification. Un premier socle exécutable fonctionne sur Capella.", en: 'Evolving engineering models under control: AI proposes, verifiable mechanisms decide, and every decision keeps its justification. A first executable foundation runs on Capella.' } }
];

export const domainsTitle: L10n = { fr: 'Domaines', en: 'Research areas' };
export const domains: { id: string; h: L10n; p: L10n }[] = [
  { id: 'd-req', h: { fr: 'Ingénierie système assistée par IA', en: 'AI-assisted systems engineering' }, p: { fr: "Intégrer l'IA aux activités de l'ingénierie système, des exigences à l'architecture et à la vérification, en gardant chaque résultat relié à ses sources et vérifiable. Les exigences en sont la première application.", en: 'Bringing AI into systems engineering activities, from requirements to architecture and verification, with every result linked to its sources and checkable. Requirements were the first application.' } },
  { id: 'd-model', h: { fr: 'Modélisation ARCADIA / Capella', en: 'ARCADIA / Capella modelling' }, p: { fr: "Modéliser des systèmes réels sur les niveaux opérationnel, système, logique et physique, et comprendre où l'IA peut aider sans dénaturer la méthode.", en: 'Modelling real systems across operational, system, logical and physical levels, and finding where AI can help without bending the method.' } },
  { id: 'd-evo', h: { fr: 'Évolution contrôlée des modèles', en: 'Controlled model evolution' }, p: { fr: "Faire évoluer un modèle sans perdre son sens : propositions de l'IA, contrôles par le métamodèle, revue humaine et historique des justifications.", en: 'Changing a model without losing its meaning: AI proposals, metamodel checks, human review and a history of justifications.' } },
  { id: 'd-agents', h: { fr: 'Agents IA et graphes de connaissances', en: 'AI agents and knowledge graphs' }, p: { fr: 'Architectures multi-agents, RAG et GraphRAG, modèles locaux pour les contextes industriels où les données ne sortent pas.', en: 'Multi-agent architectures, RAG and GraphRAG, and local models for industrial settings where data cannot leave the premises.' } }
];

export const pub = {
  venue: 'IEEE WETICE 2026',
  title: 'ARISE: A Multi-Agent Architecture for Requirements Specification in MBSE Workflows',
  authors: ['N. Evain', 'E. Exposito', 'P. Arnould', 'G. Jouffrai', 'A. Vidon'],
  read: { fr: 'Lire sur IEEE Xplore', en: 'Read on IEEE Xplore' },
  copy: { fr: 'Copier le BibTeX', en: 'Copy BibTeX' },
  copied: { fr: 'Copié', en: 'Copied' },
  bib: `@inproceedings{fall2026arise,
  title     = {ARISE: A Multi-Agent Architecture for Requirements
               Specification in MBSE Workflows},
  author    = {Fall, Arona and Evain, Nicolas and Exposito, Ernesto
               and Arnould, Philippe and Jouffrai, G. and Vidon, A.},
  booktitle = {34th IEEE International Conference on Enabling
               Technologies: Infrastructure for Collaborative
               Enterprises (WETICE 2026)},
  publisher = {IEEE},
  year      = {2026},
  doi       = {10.1109/WETICE70595.2026.11772344}
}`
};

export const teachingTitle: L10n = { fr: 'Enseignement', en: 'Teaching' };
export const teaching: { dt: L10n; dd: L10n; href?: string }[] = [
  { dt: { fr: 'Cours', en: 'Course' }, dd: { fr: 'Systèmes cyber-physiques, co-enseigné avec le Pr. Ernesto Exposito', en: 'Cyber-Physical Systems, co-taught with Pr. Ernesto Exposito' } },
  { dt: { fr: 'Formation', en: 'Programme' }, dd: { fr: 'Master Informatique, M2 Industry 4.0, UPPA', en: 'MSc Computer Science, M2 Industry 4.0, UPPA' }, href: 'https://formation.univ-pau.fr/en/programs/science-technology-health-STS/master-degree-XB/master-computer-science-L7EMC9TO/m2-industry-4-0-L7EMCSH1.html' },
  { dt: { fr: 'Volume', en: 'Hours' }, dd: { fr: '43 h en 2026–2027', en: '43 hours in 2026–2027' } }
];
