import type { L10n } from '../i18n/ui';

export type Category = 'research' | 'ai' | 'apps' | 'web' | 'tools';
export type Tag = string | L10n;
export interface Project {
  key: Category;
  category: L10n;
  title: L10n;
  one: L10n;
  problem?: L10n;
  approach: L10n;
  role?: L10n;
  tags?: Tag[];
}

export const categories: { key: 'all' | Category; label: L10n }[] = [
  { key: 'all', label: { fr: 'Tous', en: 'All' } },
  { key: 'research', label: { fr: 'Recherche appliquée', en: 'Applied research' } },
  { key: 'ai', label: { fr: 'Produits IA', en: 'AI products' } },
  { key: 'apps', label: { fr: 'Applications sur mesure', en: 'Custom applications' } },
  { key: 'web', label: { fr: 'Sites web', en: 'Websites' } },
  { key: 'tools', label: { fr: 'Outils', en: 'Tools' } }
];

export const projects: Project[] = [
  {
    "key": "research",
    "category": {
      "fr": "Recherche appliquée, thèse",
      "en": "Applied research, PhD"
    },
    "title": {
      "fr": "ARISE",
      "en": "ARISE"
    },
    "one": {
      "fr": "Des agents IA qui transforment des documents d'ingénierie en exigences traçables, au format EARS.",
      "en": "AI agents that turn engineering documents into traceable requirements in EARS format."
    },
    "problem": {
      "fr": "Rédiger des exigences à partir de normes et de documents non structurés prend du temps et perd souvent le lien avec la source.",
      "en": "Writing requirements from standards and unstructured documents is slow and often loses the link to the source."
    },
    "approach": {
      "fr": "Une architecture multi-agents qui sépare extraction et élicitation, ancre chaque exigence à son passage source dans un graphe de connaissances, évaluée avec des experts sur SAFE et publiée à IEEE WETICE 2026.",
      "en": "A multi-agent architecture that separates extraction from elicitation and anchors each requirement to its source passage in a knowledge graph, evaluated with experts on SAFE and published at IEEE WETICE 2026."
    },
    "role": {
      "fr": "Rôle : concepteur, premier auteur",
      "en": "Role: designer, first author"
    },
    "tags": [
      "Google ADK",
      "Neo4j",
      "Ollama",
      "Mistral",
      "RAG"
    ]
  },
  {
    "key": "research",
    "category": {
      "fr": "Recherche appliquée",
      "en": "Applied research"
    },
    "title": {
      "fr": "Local RAG MBSE Assistant",
      "en": "Local RAG MBSE Assistant"
    },
    "one": {
      "fr": "Un assistant qui répond aux questions sur un modèle Capella sans que les données quittent la machine.",
      "en": "An assistant that answers questions about a Capella model without data leaving the machine."
    },
    "problem": {
      "fr": "Les modèles industriels sont confidentiels : impossible de les envoyer à un service d'IA en ligne.",
      "en": "Industrial models are confidential and cannot be sent to an online AI service."
    },
    "approach": {
      "fr": "Lecture des fichiers .aird et .capella et réponses dans le cadre de la méthode Arcadia, avec des modèles exécutés en local.",
      "en": "Reads .aird and .capella files and answers within the Arcadia method, with models running locally."
    },
    "role": {
      "fr": "Rôle : auteur",
      "en": "Role: author"
    },
    "tags": [
      "Ollama",
      "RAG",
      "Python",
      "Capella"
    ]
  },
  {
    "key": "research",
    "category": {
      "fr": "Recherche appliquée, 2024",
      "en": "Applied research, 2024"
    },
    "title": {
      "fr": "HAPS × RL",
      "en": "HAPS × RL"
    },
    "one": {
      "fr": "Réduire la consommation d'énergie de plateformes stratosphériques grâce à l'apprentissage par renforcement.",
      "en": "Cutting the energy use of high-altitude platforms with reinforcement learning."
    },
    "approach": {
      "fr": "Environnements de simulation, agents d'apprentissage par renforcement et analyses prédictives.",
      "en": "Simulation environments, reinforcement learning agents and predictive analyses."
    },
    "role": {
      "fr": "Rôle : stagiaire de recherche, Université Alioune Diop",
      "en": "Role: research intern, Alioune Diop University"
    },
    "tags": [
      "Python",
      {
        "fr": "Apprentissage par renforcement",
        "en": "Reinforcement learning"
      }
    ]
  },
  {
    "key": "ai",
    "category": {
      "fr": "Produit IA",
      "en": "AI product"
    },
    "title": {
      "fr": "Baṣīra",
      "en": "Baṣīra"
    },
    "one": {
      "fr": "Une veille scientifique pour les laboratoires, qui trie les nouveaux articles selon leurs axes de recherche.",
      "en": "Research monitoring for labs that sorts new papers against their research themes."
    },
    "problem": {
      "fr": "Une équipe ne peut pas lire tout ce qui paraît, et rate des travaux importants pour elle.",
      "en": "A team cannot read everything that is published and misses work that matters to it."
    },
    "approach": {
      "fr": "Un SaaS multi-équipes : chacune branche ses propres fournisseurs d'IA, le système note les articles, fait remonter ce qui aurait été manqué et synthétise l'état de l'art.",
      "en": "A multi-team SaaS: each team plugs in its own AI providers; the system scores papers, surfaces what would have been missed and summarises the state of the art."
    },
    "role": {
      "fr": "Rôle : auteur principal",
      "en": "Role: lead author"
    },
    "tags": [
      "FastAPI",
      "React",
      "SQLite",
      "Docker",
      "PWA"
    ]
  },
  {
    "key": "ai",
    "category": {
      "fr": "Produit IA",
      "en": "AI product"
    },
    "title": {
      "fr": "Transcript-Réécoute",
      "en": "Transcript-Réécoute"
    },
    "one": {
      "fr": "La transcription automatique de vidéos qui mélangent wolof, français et arabe, pour pouvoir y chercher.",
      "en": "Automatic transcription of videos mixing Wolof, French and Arabic, so they can be searched."
    },
    "problem": {
      "fr": "Les outils de transcription gèrent mal les contenus qui passent d'une langue à l'autre dans une même phrase.",
      "en": "Transcription tools handle content that switches language mid-sentence poorly."
    },
    "approach": {
      "fr": "Un pipeline qui découpe l'audio par détection de voix, transcrit, puis exporte un JSON synchronisé à la vidéo, prêt à être indexé et corrigé en équipe.",
      "en": "A pipeline that splits audio with voice activity detection, transcribes it and exports JSON synced to the video, ready for indexing and team correction."
    },
    "role": {
      "fr": "Rôle : auteur",
      "en": "Role: author"
    },
    "tags": [
      "faster-whisper",
      "CTranslate2",
      "Silero VAD",
      "Python"
    ]
  },
  {
    "key": "apps",
    "category": {
      "fr": "Application sur mesure",
      "en": "Custom application"
    },
    "title": {
      "fr": "KaayTabax",
      "en": "KaayTabax"
    },
    "one": {
      "fr": "Une plateforme qui permet à la diaspora de suivre et de financer à distance un chantier au Sénégal.",
      "en": "A platform that lets the diaspora follow and fund a construction project in Senegal remotely."
    },
    "approach": {
      "fr": "Vérification d'identité, validation foncière, preuves terrain, validation de chaque phase et déblocage progressif des fonds.",
      "en": "Identity checks, land validation, field evidence, approval of each phase and staged release of funds."
    },
    "role": {
      "fr": "Rôle : développeur dans une équipe",
      "en": "Role: developer in a team"
    },
    "tags": [
      "Node.js",
      "Express",
      "React",
      "MongoDB",
      "Keycloak",
      "Docker"
    ]
  },
  {
    "key": "apps",
    "category": {
      "fr": "Application sur mesure",
      "en": "Custom application"
    },
    "title": {
      "fr": "ProjectOS",
      "en": "ProjectOS"
    },
    "one": {
      "fr": "Un outil de gestion qui réunit projets clients, projets personnels, tâches et facturation d'un freelance.",
      "en": "A management tool that brings a freelancer's client projects, personal projects, tasks and invoicing together."
    },
    "problem": {
      "fr": "Des tâches et des factures éparpillées entre tableurs, notes et applications, sans vue d'ensemble.",
      "en": "Tasks and invoices scattered across spreadsheets, notes and apps, with no overview."
    },
    "approach": {
      "fr": "Une interface unique avec suivi budgétaire, alertes d'échéance et accès restreints pour un collaborateur.",
      "en": "A single interface with budget tracking, deadline alerts and restricted access for a collaborator."
    },
    "tags": [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma"
    ]
  },
  {
    "key": "apps",
    "category": {
      "fr": "Application sur mesure",
      "en": "Custom application"
    },
    "title": {
      "fr": "Mourchid TV",
      "en": "Mourchid TV"
    },
    "one": {
      "fr": "Une plateforme de diffusion vidéo, du site public à la gestion des médias.",
      "en": "A video broadcasting platform, from the public site to media management."
    },
    "approach": {
      "fr": "Site public, back-office de gestion des médias et supervision du système.",
      "en": "Public site, media management back office and system monitoring."
    },
    "role": {
      "fr": "Rôle : seul développeur, full stack",
      "en": "Role: sole full-stack developer"
    }
  },
  {
    "key": "apps",
    "category": {
      "fr": "Application sur mesure",
      "en": "Custom application"
    },
    "title": {
      "fr": "Plateforme CIU",
      "en": "CIU platform"
    },
    "one": {
      "fr": "Le portail d'une association étudiante inter-universitaire, pensé pour orienter les nouveaux bacheliers.",
      "en": "The portal of an inter-university student association, built to guide new students."
    },
    "approach": {
      "fr": "Actualités et événements, parcours d'orientation, carte et bibliothèque de ressources téléchargeables.",
      "en": "News and events, guidance paths, a map and a library of downloadable resources."
    },
    "role": {
      "fr": "Rôle : auteur principal",
      "en": "Role: lead author"
    },
    "tags": [
      "React 19",
      "Tailwind",
      "Framer Motion",
      "Leaflet"
    ]
  },
  {
    "key": "web",
    "category": {
      "fr": "Site web",
      "en": "Website"
    },
    "title": {
      "fr": "Corex",
      "en": "Corex"
    },
    "one": {
      "fr": "Le site bilingue d'une agence tech québécoise, avec prise de rendez-vous en ligne.",
      "en": "The bilingual website of a Quebec tech agency, with online appointment booking."
    },
    "approach": {
      "fr": "Deux parcours selon l'offre, réservation autonome et outil d'administration des disponibilités.",
      "en": "Two visitor paths, one per offer, self-service booking and an admin tool for availability."
    },
    "tags": [
      "Next.js",
      "TypeScript",
      "Supabase"
    ]
  },
  {
    "key": "web",
    "category": {
      "fr": "Site web",
      "en": "Website"
    },
    "title": {
      "fr": "Leadership Sécurité",
      "en": "Leadership Sécurité"
    },
    "one": {
      "fr": "Le site vitrine d'un centre de formation agréé aux métiers de la sécurité privée, à Dakar.",
      "en": "The website of an accredited private-security training centre in Dakar."
    },
    "approach": {
      "fr": "Présentation des formations et des agréments, et prise de contact.",
      "en": "Training courses, accreditations and contact."
    }
  },
  {
    "key": "tools",
    "category": {
      "fr": "Outil",
      "en": "Tool"
    },
    "title": {
      "fr": "agent-project-template",
      "en": "agent-project-template"
    },
    "one": {
      "fr": "Un modèle de projet pour travailler avec des agents IA de façon encadrée et reproductible.",
      "en": "A project template for working with AI agents in a controlled, repeatable way."
    },
    "approach": {
      "fr": "Consignes pour agents, garde-fous, workflows réutilisables et base de connaissances persistante, avec des profils logiciel, recherche et R&D.",
      "en": "Agent instructions, guardrails, reusable workflows and a persistent knowledge base, with software, research and R&D profiles."
    },
    "role": {
      "fr": "Rôle : auteur",
      "en": "Role: author"
    },
    "tags": [
      "Python",
      "Claude Code",
      "Markdown"
    ]
  }
];
