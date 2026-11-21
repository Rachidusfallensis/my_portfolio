import type { L10n } from '../i18n/ui';

export const head = {
  title: { fr: 'Expériences', en: 'Experience' },
  lede: {
    fr: "Chaque étape a nourri la suivante : un prototype de stage est devenu une publication IEEE, puis une thèse.",
    en: 'Each step fed the next: an internship prototype became an IEEE publication, then a PhD.'
  },
  cv: { fr: 'Télécharger le CV (PDF)', en: 'Download CV (PDF)' }
};

type Logo = { src: string; alt: string };
export type Xp = {
  when: L10n | string;
  logos: Logo[];
  title: L10n;
  where: L10n | string;
  badge?: L10n;
  ctx?: L10n;
  acts: L10n[];
  partners?: { logos: Logo[]; eu: Logo };
};

export const xps: Xp[] = [
  {
    when: { fr: "déc. 2025 – aujourd'hui", en: 'Dec 2025 – present' },
    logos: [{ src: 'alouette-logo.png', alt: 'Alouette AI' }, { src: 'uppa-color.svg', alt: 'UPPA' }],
    title: { fr: 'Doctorant CIFRE, R&D en IA et ingénierie système', en: 'CIFRE PhD researcher, AI and systems engineering R&D' },
    where: 'LIUPPA × Alouette AI, Anglet et Paris (Station F)',
    badge: { fr: 'Alouette AI, sélectionnée au Future 40 de Station F (2026)', en: 'Alouette AI, selected for the STATION F Future 40 (2026)' },
    ctx: { fr: 'Thèse industrielle sur l\'intégration d\'agents IA dans l\'ingénierie système à base de modèles pour les systèmes cyber-physiques.', en: 'Industrial PhD on integrating AI agents into model-based systems engineering for cyber-physical systems.' },
    acts: [
      { fr: 'Pilote le programme de recherche, de la question à la publication.', en: 'Lead the research programme, from question to publication.' },
      { fr: "Conçu ARISE, une architecture multi-agents pour l'extraction et l'élicitation d'exigences traçables.", en: 'Designed ARISE, a multi-agent architecture for extracting and eliciting traceable requirements.' },
      { fr: 'Évalué ARISE avec des experts sur un work package du projet SAFE ; publié à IEEE WETICE 2026 en premier auteur.', en: 'Evaluated ARISE with experts on a SAFE work package; published at IEEE WETICE 2026 as first author.' },
      { fr: 'Fait passer les résultats de recherche dans la R&D produit.', en: 'Carry research results into product R&D.' }
    ]
  },
  {
    when: '2026 – 2027',
    logos: [{ src: 'uppa-color.svg', alt: 'UPPA' }],
    title: { fr: "Chargé d'enseignement", en: 'Lecturer' },
    where: { fr: 'UPPA, Master Informatique, M2 Industry 4.0, Anglet', en: 'UPPA, MSc Computer Science, M2 Industry 4.0, Anglet' },
    acts: [{ fr: 'Co-enseigne le cours Systèmes cyber-physiques (43 h) avec le Pr. Ernesto Exposito.', en: 'Co-teach the Cyber-Physical Systems course (43 hours) with Pr. Ernesto Exposito.' }]
  },
  {
    when: { fr: 'oct. – nov. 2025', en: 'Oct – Nov 2025' },
    logos: [{ src: 'safe.png', alt: 'SAFE' }],
    title: { fr: 'Ingénieur de recherche, projet européen SAFE', en: 'Research engineer, European SAFE project' },
    where: 'LIUPPA, Anglet',
    ctx: { fr: "SAFE (Security AI for Enhanced SOC) développe une plateforme d'IA pour les centres opérationnels de sécurité, avec un consortium d'industriels, d'universités et d'institutions de 5 pays.", en: 'SAFE (Security AI for Enhanced SOC) builds an AI platform for security operations centres, with a consortium of companies, universities and institutions from 5 countries.' },
    acts: [
      { fr: 'Préparé et animé les réunions avec les experts de chaque partenaire, avec comptes rendus et suivi des actions.', en: "Prepared and ran meetings with each partner's experts, with minutes and action follow-up." },
      { fr: 'Coordonné le recueil des besoins auprès d\'équipes aux profils variés : SOC, threat intelligence, architectes, chercheurs, institutions.', en: 'Coordinated requirements gathering across very different teams: SOC, threat intelligence, architects, researchers and institutions.' },
      { fr: 'Traduit ces besoins en modèles ARCADIA/Capella des composants, puis les ai fait valider par les équipes.', en: 'Turned those needs into ARCADIA/Capella models of the components and had the teams validate them.' }
    ],
    partners: {
      logos: [
        { src: 'eviden.svg', alt: 'Eviden' }, { src: 'atos.svg', alt: 'Atos' }, { src: 'isep.svg', alt: 'ISEP' },
        { src: 'netcompany-intrasoft.png', alt: 'Netcompany-Intrasoft' }, { src: 'infalia.png', alt: 'Infalia' },
        { src: 'hellenic-mod.png', alt: 'Hellenic Ministry of National Defence' }, { src: 'dnsc.png', alt: 'DNSC' },
        { src: 'acc.png', alt: 'ACC' }, { src: 'datasentics.svg', alt: 'DataSentics' }, { src: 'diadikasia.png', alt: 'DBC Diadikasia' }
      ],
      eu: { src: 'eu-cofunded.png', alt: 'Co-funded by the European Union' }
    }
  },
  {
    when: { fr: 'mars – août 2025', en: 'Mar – Aug 2025' },
    logos: [{ src: 'uppa-color.svg', alt: 'UPPA' }],
    title: { fr: 'Stage de M2, conception système guidée par l\'IA', en: 'MSc internship, AI-guided systems design' },
    where: 'LIUPPA / IREKIA, Anglet',
    acts: [
      { fr: "Modélisé le Fablab Ingénierie & Numérique avec ARCADIA, de l'analyse opérationnelle à l'architecture physique.", en: 'Modelled the Engineering & Digital Fablab with ARCADIA, from operational analysis to physical architecture.' },
      { fr: "Prototypé la première version d'ARISE, point de départ de la thèse.", en: 'Prototyped the first version of ARISE, the starting point of the PhD.' },
      { fr: 'Comparé plusieurs approches RAG et GraphRAG ; assuré le support technique des Fablabs.', en: 'Compared RAG and GraphRAG approaches; provided technical support to the Fablabs.' }
    ]
  },
  {
    when: { fr: 'févr. – juil. 2024', en: 'Feb – Jul 2024' },
    logos: [{ src: 'uadb.png', alt: 'Université Alioune Diop' }],
    title: { fr: 'Stagiaire de recherche', en: 'Research intern' },
    where: { fr: 'Université Alioune Diop, département informatique, Sénégal', en: 'Alioune Diop University, Computer Science, Senegal' },
    acts: [{ fr: "Optimisé l'énergie de plateformes HAPS par apprentissage par renforcement, en simulation.", en: 'Optimised the energy use of HAPS platforms with reinforcement learning, in simulation.' }]
  }
];

export const education = {
  title: { fr: 'Formation', en: 'Education' } as L10n,
  items: [
    { when: '2025 – 2028', t: { fr: 'Doctorat en informatique (CIFRE), UPPA', en: 'PhD in Computer Science (CIFRE), UPPA' } },
    { when: '2024 – 2025', t: { fr: 'Master Informatique, parcours Industry 4.0, UPPA', en: 'MSc Computer Science, Industry 4.0 track, UPPA' } },
    { when: '2022 – 2024', t: { fr: 'Master Systèmes et Réseaux, Université Alioune Diop', en: 'MSc Systems and Networks, Alioune Diop University' } },
    { when: '2021', t: { fr: 'Licence Systèmes, Réseaux et Télécoms, Université Alioune Diop', en: 'BSc Systems, Networks and Telecoms, Alioune Diop University' } }
  ] as { when: string; t: L10n }[]
};

export const skills = {
  title: { fr: 'Compétences', en: 'Skills' } as L10n,
  items: [
    { h: { fr: 'Agents et LLM', en: 'Agents and LLMs' }, p: 'Google ADK, LangGraph, AutoGen, GPT, Claude, Gemini, Ollama, Mistral, Llama, RAG, GraphRAG' },
    { h: { fr: 'Ingénierie système', en: 'Systems engineering' }, p: { fr: 'ARCADIA/Capella, ingénierie des exigences, métamodèles EMF, Design Science Research', en: 'ARCADIA/Capella, requirements engineering, EMF metamodels, Design Science Research' } },
    { h: { fr: 'Données et graphes', en: 'Data and graphs' }, p: 'Neo4j, PostgreSQL, MongoDB, RDF/OWL, ETL' },
    { h: { fr: 'Plateforme', en: 'Platform' }, p: 'Python, TypeScript, React, FastAPI, Docker, Kubernetes, AWS, GCP' }
  ] as { h: L10n; p: L10n | string }[]
};

export const certs = 'Oracle AI with Machine Learning, Cisco Python Essentials 2, Coursera DevOps on AWS, IBM Agile and Scrum, EF SET B2';
