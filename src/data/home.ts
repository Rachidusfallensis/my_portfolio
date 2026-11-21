import type { L10n } from '../i18n/ui';

export const hero = {
  lead: { fr: 'Pendant', en: 'While' },
  mid: {
    fr: " tout le cycle de vie d'un système cyber-physique, les agents IA que je conçois ",
    en: ' a cyber-physical system moves through its life cycle, the AI agents I design '
  },
  shall: { fr: 'doivent', en: 'shall' },
  resp: {
    fr: " rendre le MBSE adoptable, avec des méthodes aussi sûres que l'exige l'ingénierie système.",
    en: ' make MBSE adoptable, with methods as safe as systems engineering demands.'
  }
} satisfies Record<string, L10n>;

export const areasTitle: L10n = { fr: 'Domaines de recherche', en: 'Research areas' };

export const areas: { id: string; title: L10n; sub: L10n }[] = [
  { id: 'd-req', title: { fr: 'Ingénierie système assistée par IA', en: 'AI-assisted systems engineering' }, sub: { fr: 'Exigences, architecture, vérification : tout le cycle de vie', en: 'Requirements, architecture, verification: the whole life cycle' } },
  { id: 'd-model', title: { fr: 'Modélisation ARCADIA / Capella', en: 'ARCADIA / Capella modelling' }, sub: { fr: "Modéliser l'architecture d'un système avec la méthode ARCADIA", en: 'Modelling system architecture with the ARCADIA method' } },
  { id: 'd-evo', title: { fr: 'Évolution contrôlée des modèles', en: 'Controlled model evolution' }, sub: { fr: "L'IA propose, des mécanismes vérifiables décident", en: 'AI proposes, verifiable mechanisms decide' } },
  { id: 'd-agents', title: { fr: 'Agents IA et graphes de connaissances', en: 'AI agents and knowledge graphs' }, sub: { fr: 'Multi-agents, RAG, GraphRAG, modèles locaux', en: 'Multi-agent systems, RAG, GraphRAG, local models' } }
];

export const intro = {
  alt: { fr: "Portrait d'Arona Fall", en: 'Portrait of Arona Fall' } as L10n,
  place: { fr: 'Anglet et Paris (Station F)', en: 'Anglet and Paris (Station F)' } as L10n,
  openLabel: { fr: 'Ouvert à', en: 'Open to' } as L10n,
  open: {
    fr: "la R&D industrielle, l'accompagnement de projets et les postes académiques",
    en: 'industrial R&D, project support and academic positions'
  } as L10n,
  role: { fr: 'Chercheur en IA et ingénierie système', en: 'AI and systems engineering researcher' } as L10n,
  lede: {
    fr: "En thèse CIFRE entre Alouette AI et le LIUPPA, je conçois des agents IA qui rendent l'ingénierie système à base de modèles (MBSE) adoptable dans l'industrie.",
    en: 'CIFRE PhD between Alouette AI and LIUPPA: I design AI agents that make model-based systems engineering (MBSE) adoptable in industry.'
  } as L10n,
  proof: [
    { big: { fr: 'IEEE', en: 'IEEE' }, small: { fr: 'publication en premier auteur, 2026', en: 'first-author paper, 2026' } },
    { big: { fr: '9', en: '9' }, small: { fr: 'partenaires européens, projet SAFE', en: 'European partners, SAFE project' } },
    { big: { fr: '43 h', en: '43 h' }, small: { fr: "d'enseignement en M2 Industry 4.0", en: 'teaching in the M2 Industry 4.0' } }
  ] as { big: L10n; small: L10n }[],
  contact: { fr: 'Me contacter', en: 'Get in touch' } as L10n,
  research: { fr: 'Voir la recherche', en: 'See the research' } as L10n,
  cv: { fr: 'Télécharger le CV', en: 'Download CV' } as L10n
};

export const metaDescription: L10n = {
  fr: "Arona Fall, doctorant CIFRE (Alouette AI, LIUPPA) : agents IA pour l'adoption de l'ingénierie système à base de modèles (MBSE) dans l'industrie, de la spécification à l'évolution des systèmes cyber-physiques.",
  en: 'Arona Fall, CIFRE PhD researcher (Alouette AI, LIUPPA): AI agents for industrial adoption of model-based systems engineering (MBSE), from specification to the evolution of cyber-physical systems.'
};

export const affil = {
  with: { fr: 'Avec', en: 'With' } as L10n,
  uppaAlt: { fr: "Université de Pau et des Pays de l'Adour", en: 'University of Pau and Pays de l\'Adour' } as L10n,
  stationF: { fr: 'Alouette AI à Station F', en: 'Alouette AI at Station F' } as L10n
};

export const flow = {
  title: { fr: 'Comment travaillent mes agents', en: 'How my agents work' } as L10n,
  lede: {
    fr: "L'IA prend en charge le travail répétitif de modélisation. L'ingénieur garde chaque décision, et chaque modification reste traçable.",
    en: 'AI takes on the repetitive modelling work. The engineer keeps every decision, and every change stays traceable.'
  } as L10n,
  steps: [
    { who: { fr: 'Agent IA', en: 'AI agent' }, h: { fr: 'Propose seulement', en: 'Proposes only' }, p: { fr: 'Prépare des modifications du modèle ou des exigences, sans jamais les appliquer seul.', en: 'Drafts changes to the model or the requirements, never applies them alone.' } },
    { who: { fr: 'Méthode', en: 'Method' }, h: { fr: 'Contrôle automatique', en: 'Automatic checks' }, p: { fr: 'Chaque proposition est vérifiée contre les règles de la méthode et du métamodèle.', en: 'Each proposal is checked against the rules of the method and the metamodel.' } },
    { who: { fr: 'Ingénieur', en: 'Engineer' }, h: { fr: 'Décision humaine', en: 'Human decision' }, p: { fr: "Rien n'entre dans le modèle sans validation par une personne.", en: 'Nothing enters the model without a person approving it.' } },
    { who: { fr: 'Traçabilité', en: 'Traceability' }, h: { fr: 'Tout est justifié', en: 'Everything is justified' }, p: { fr: 'Chaque changement garde sa source, sa justification et son auteur, du document au modèle.', en: 'Every change keeps its source, rationale and author, from document to model.' } }
  ] as { who: L10n; h: L10n; p: L10n }[]
};

export const offer = {
  title: { fr: 'Ce que je fais', en: 'What I do' } as L10n,
  lede: { fr: "Pour des équipes d'ingénierie, des laboratoires et des porteurs de projets.", en: 'For engineering teams, research labs and project owners.' } as L10n,
  deliverable: { fr: 'Livrable', en: 'Deliverable' } as L10n,
  items: [
    { h: { fr: 'Agents IA pour le MBSE', en: 'AI agents for MBSE' }, p: { fr: 'Des agents intégrés à votre processus d\'ingénierie système, alignés sur votre méthode plutôt qu\'un assistant générique.', en: 'Agents built into your systems engineering process, aligned with your method rather than a generic assistant.' }, d: { fr: 'un flux d\'agents branché sur vos outils de modélisation', en: 'an agent workflow connected to your modelling tools' } },
    { h: { fr: 'Exigences et traçabilité', en: 'Requirements and traceability' }, p: { fr: 'Extraire et structurer les exigences depuis vos normes et documents, chacune reliée à sa source et rédigée pour être testable.', en: 'Extract and structure requirements from your standards and documents, each linked to its source and written to be testable.' }, d: { fr: 'un référentiel d\'exigences traçable', en: 'a traceable requirements baseline' } },
    { h: { fr: 'IA locale pour données sensibles', en: 'Local AI for sensitive data' }, p: { fr: 'Des modèles exécutés chez vous, pour les contextes industriels où les données ne peuvent pas sortir.', en: 'Models running on your premises, for industrial settings where data cannot leave.' }, d: { fr: 'un assistant sur vos documents et vos modèles, hors ligne', en: 'an offline assistant over your documents and models' } },
    { h: { fr: 'De la question au prototype', en: 'From question to prototype' }, p: { fr: 'Cadrer un problème, en faire une question de recherche appliquée, puis livrer un prototype évalué avec les personnes concernées.', en: 'Frame a problem, turn it into an applied research question, then deliver a prototype evaluated with the people concerned.' }, d: { fr: 'un prototype évalué et ses conclusions', en: 'an evaluated prototype and its findings' } }
  ] as { h: L10n; p: L10n; d: L10n }[]
};

export const record = {
  title: { fr: 'Parcours', en: 'Track record' } as L10n,
  lede: {
    fr: "Recherche industrielle, projets européens, enseignement et produits, avec des partenaires dont Eviden, Atos, NetCompany-Intrasoft, l'ISEP et l'UPPA.",
    en: 'Industrial research, European projects, teaching and products, with partners including Eviden, Atos, NetCompany-Intrasoft, ISEP and UPPA.'
  } as L10n,
  items: [
    { h: { fr: 'Recherche industrielle', en: 'Industrial research' }, p: { fr: "Thèse CIFRE entre un laboratoire et une startup : l'IA au service de l'ingénierie système à base de modèles pour les systèmes cyber-physiques.", en: 'CIFRE PhD between a research lab and a startup: AI for model-based systems engineering of cyber-physical systems.' } },
    { h: { fr: 'Projets européens', en: 'European projects' }, p: { fr: "Projet SAFE (programme Digital Europe) : réunions avec les experts de chaque partenaire, coordination entre équipes SOC, renseignement sur les menaces, architectes et chercheurs.", en: "SAFE project (Digital Europe programme): meetings with each partner's experts, coordination across SOC, threat intelligence, architecture and research teams." } },
    { h: { fr: 'Enseignement', en: 'Teaching' }, p: { fr: "Cours de systèmes cyber-physiques en M2 Industry 4.0 à l'UPPA, co-enseigné avec le Pr Ernesto Exposito.", en: 'Cyber-Physical Systems course in the M2 Industry 4.0 at UPPA, co-taught with Pr. Ernesto Exposito.' } },
    { h: { fr: 'Produits et plateformes', en: 'Products and platforms' }, p: { fr: 'Produits IA, applications sur mesure et sites web, conçus ou accompagnés pour des laboratoires, des associations et des entreprises.', en: 'AI products, custom applications and websites, built or supported for labs, associations and companies.' } }
  ] as { h: L10n; p: L10n }[]
};

export const pub = {
  venue: 'IEEE WETICE 2026',
  title: 'ARISE: A Multi-Agent Architecture for Requirements Specification in MBSE Workflows',
  authors: ['N. Evain', 'E. Exposito', 'P. Arnould', 'G. Jouffrai', 'A. Vidon'],
  more: { fr: 'Voir les projets annexes', en: 'See side projects' } as L10n
};
