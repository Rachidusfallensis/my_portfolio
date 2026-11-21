# Direction artistique — « Exigence satisfaite »

## Sujet, public, rôle de la page
- **Sujet :** un chercheur-ingénieur qui rend vérifiable le travail des agents IA en ingénierie système. Son vocabulaire de métier : exigences, syntaxe EARS, traçabilité, modèles ARCADIA/Capella, liens *satisfied by* / *verified by*.
- **Public :** responsables R&D industriels (aéro, défense, énergie, éditeurs MBSE) en priorité ; jurys et laboratoires ensuite.
- **Rôle de la page :** prouver en 10 secondes deux choses. Arona *mène* de la recherche appliquée. Chaque affirmation du site est adossée à une preuve.

## Idée centrale
**Le site est un dossier d'exigences dont toutes les exigences sont satisfaites.**
- Le hero énonce le positionnement d'Arona sous la forme d'une exigence en syntaxe **EARS**, la syntaxe qu'ARISE normalise. On utilise le modèle *state-driven* (« Pendant… »). Les trois parties de la phrase (état, système, réponse) sont annotées comme une analyse syntaxique.
- **Texte retenu (élargi à toute la thèse, et pas seulement aux exigences) :** « **Pendant** tout le cycle de vie d'un système cyber-physique, les agents IA que je conçois **doivent** rendre le MBSE adoptable, avec des méthodes aussi sûres que l'exige l'ingénierie système. » L'intégration de l'IA est le moyen, l'adoption du MBSE est le but, et la rigueur de l'ingénierie système est la contrainte non négociable. ARISE n'apparaît que comme *première contribution* parmi les preuves.
- Des **liens de traçabilité** orthogonaux, routés comme dans un diagramme Capella, partent de la réponse vers les **quatre domaines de recherche** (ingénierie système assistée par IA, modélisation ARCADIA/Capella, évolution contrôlée des modèles, agents IA et graphes de connaissances). Chaque domaine renvoie à la page Recherche. Sans annotations « état/système/réponse » ni identifiant REQ. Ni Alouette, ni le cours, ni Future 40 dans le hero : Future 40 n'apparaît que sur la page Expériences, dans l'entrée Alouette.
- Chaque section reprend ensuite ce schéma, une affirmation suivie de « satisfaite par » et de ses preuves. La traçabilité porte toute la mise en page : ce n'est pas un ornement.

C'est **le seul élément audacieux**. Tout le reste est calme et discipliné.

## Couleurs
| Jeton | Hex | Rôle |
|---|---|---|
| `paper` | `#F3F5F4` | Fond, papier calque légèrement froid (et non crème) |
| `ink` | `#16202C` | Texte, encre bleu-noir des plans |
| `graphite` | `#5A6472` | Texte secondaire et annotations |
| `rule` | `#CDD3D6` | Traits, cadres de composants |
| `trace` | `#A3195B` | **Seule couleur vive** : liens de traçabilité, survol, focus |
| Teintes des couches ARCADIA (aplats, jamais du texte) | OA `#F5D9B8` · SA `#D3E9C8` · LA `#CFE1F1` · PA `#F1E8B0` | Classent le contenu par couche, comme dans Capella : opérationnel = recherche, système = expérience, logique = projets, physique = stack |

Mode sombre : `paper #0F1722`, `ink #E6EAEF`, `graphite #98A2B0`, `rule #2A3442`, `trace #E2508F`. Les teintes de couches passent à 18 % d'opacité.

## Typographie
- **Schibsted Grotesk** (variable, 400–800), une seule famille pour le texte. C'est une grotesque de presse au dessin net, sans la neutralité d'Inter ni le côté à la mode de Bricolage. L'exigence du hero est composée en 500, très grande, avec une interlettre serrée (-0,02 em).
- **Spline Sans Mono**, réservée à ce qui est *réellement* du code ou un identifiant : `REQ-AF-001`, DOI, numéro de grant. Jamais pour décorer des libellés.
- Échelle modulaire de rapport 1,25 : 15 / 18,75 / 23,4 / 29,3 / 36,6 / 45,8 / 57,2 px. Corps de texte à 18 px, interligne de 1,55, lignes de 68 caractères au maximum.
- Ni CAPITALES espacées, ni mot isolé en couleur. Les mots-clés EARS (*Pendant*, *doivent*) sont en graisse 700 parce qu'ils portent la structure de la phrase.

## Mise en page
Alignement à gauche, grille de 12 colonnes, asymétrique.

```
┌──────────────────────────────────────────────────────────────────┐
│ Arona Fall                         Recherche  Projets  Parcours  FR/EN │
├──────────────────────────────────────────────────────────────────┤
│ REQ-AF-001                                                       │
│ Pendant tout le cycle de vie d'un CPS,         ┌ satisfaite par ─┐│
│ └──────── état ────────┘                       │ IEEE WETICE '26 ││
│ les agents IA que je conçois                ┌──┤ SAFE (EU)       ││
│ └──────── système ────────┘                 │  │ Alouette · F40  ││
│ doivent proposer des modifications ─────────┘  │ Cours CPS M2    ││
│ traçables jusqu'à leur source.                 └─────────────────┘│
│ └──────────── réponse ────────────┘                              │
│                                                                  │
│ ┌ Acteur ─────┐  Je suis Arona Fall, doctorant CIFRE…            │
│ │   [photo]   │  [Lire la thèse]  [Télécharger le CV]            │
│ └─────────────┘                                                  │
├──────────────────────────────────────────────────────────────────┤
│ Affiliations : logos en gris, couleur au survol                  │
├──────────────────────────────────────────────────────────────────┤
│ Parcours (vraie séquence → numérotée)                            │
│ 1 IREKIA ─ 2 SAFE ─ 3 ARISE publié ─ 4 CIFRE / Future 40 ─ 5 Enseignement │
└──────────────────────────────────────────────────────────────────┘
```
- La photo est présentée comme un **composant « Acteur » de Capella** : un cadre fin avec un bandeau de titre. Elle illustre le motif sans le surcharger.
- Sur mobile, les liens de traçabilité deviennent une liste « satisfaite par » bordée d'un trait vertical couleur `trace`.

## Mouvement
Un seul moment orchestré : **au chargement, les liens de traçabilité se tracent** (≈ 900 ms, ease-out, en décalé), puis les preuves apparaissent. Au survol d'une preuve, son lien passe en `trace` et s'épaissit. Avec `prefers-reduced-motion`, tout s'affiche directement.

## Revue contre les clichés
| Risque | Décision |
|---|---|
| Crème + serif + terracotta | Papier froid `#F3F5F4`, grotesque, magenta « trace » |
| Fond noir + vert acide | Fond clair par défaut ; le mode sombre est bleu nuit, avec le même magenta |
| Gros chiffre + petit libellé + dégradé | Aucun chiffre héros : le hero est une *phrase-exigence* |
| Grille de cartes SaaS identiques | Les projets suivent la logique « affirmation → preuve », chacun avec sa teinte de couche |
| Surtitres en capitales, meta à points médians, « → » | Exclus. Les seuls identifiants sont de vrais identifiants (REQ, DOI) |
| Mono pour tous les libellés | Mono limité au code et aux identifiants |
| Numérotation décorative | La numérotation n'apparaît que dans le parcours, qui est une vraie chronologie |

**Correction faite après la revue :** la v1 du plan reprenait la piste de la spec, avec une grille blueprint en fond et des sections numérotées `REQ-001`. Une grille de fond reste un décor. Une numérotation REQ sur toutes les sections crée un faux système, puisque les sections ne sont pas des exigences. Le motif est donc limité à **une** vraie exigence dans le hero, puis au vocabulaire « satisfaite par ». La grille de fond est supprimée.

## Système (généré via /ecc:design-system, 20/11/2026)
Fichiers : `docs/design/design-tokens.json` (source de vérité, format DTCG, à brancher dans `tailwind.config` lors du portage Astro) et `docs/design/design-preview.html` (référence visuelle interactive, clair/sombre).

### Identité → décisions visuelles
| Promesse | Ce qui la porte |
|---|---|
| Crédible | Filets 1 px, angles droits, aucune ombre ni dégradé : l'esthétique d'un document d'ingénierie. Chaque affirmation a sa preuve (DOI, 43 h, 9 partenaires). |
| Recherche appliquée | La phrase EARS et ses liens de traçabilité vers les quatre domaines. `trace` = un lien entre une affirmation et ce qui la satisfait, jamais un décor. |
| Accompagnement / méthode | Démarche en 4 étapes sur l'accueil (problème → question → expérience → solution), formulée de façon générique, sans nommer de projet : quatre colonnes, titre + une phrase. Chaque fiche projet s'ouvre sur le **Problème**, puis la **Réponse**. |

### Contrastes mesurés (WCAG 2.2)
Clair : ink 15.0:1, graphite 5.5:1, trace 6.7:1. Sombre : ink 14.9:1, graphite 7.0:1, trace 5.0:1. `rule` (1.4:1) reste décoratif : les champs de formulaire utilisent `graphite` comme bordure (≥ 3:1).

### Composants
Bouton (plein ink / contour), filtre de catégorie (`aria-pressed`), fiche projet dépliable (`<details>`, + qui pivote en `trace`), étape de démarche avec exemple, bloc publication, distinction (badge contour `trace`, réservé à Future 40 sur Expériences), champ de formulaire, lien de traçabilité SVG.

### Audit rapide du prototype
- **Bon :** palette tenue (aucun hex hors jetons), hiérarchie typographique nette, sombre complet, un seul mouvement orchestré, `prefers-reduced-motion` respecté, focus visible.
- **À reprendre au portage :** espacements hors échelle (18, 20, 72 px) à ramener sur la base 4 px ; bordure des champs à passer de `rule` à `graphite` ; boutons d'outils (langue, thème) à 36 px, à porter à 44 px de hauteur cible sur mobile.
- **Bug corrigé :** la ligne verticale des traces traversait la phrase quand une ligne intermédiaire était plus large que la dernière ; elle est maintenant placée entre la ligne la plus large et les domaines, et masquée si l'écart est inférieur à 24 px.

Recherche de sites concurrents (étape 3 du skill) non faite : la direction était déjà validée.

### Fond animé du hero (ajout du 20/11/2026)
Inspiré du réseau de points de joaomiguelrosa.com (canvas fait main : 60 points qui dérivent, reliés sous 140 px, en bleu). Adapté au système sans le modifier :
- **Sens :** c'est un graphe de connaissances. Ronds = sources (documents, exigences), carrés = éléments de modèle. Liens quand deux nœuds sont proches (< 165 px).
- **Couleurs :** `graphite` à faible opacité (points 0.6, liens 0.3 au maximum), aucune nouvelle couleur.
- **Signature :** toutes les ~4 s, un lien de traçabilité en `trace` parcourt 3 à 5 nœuds puis s'efface. Le pointeur se relie aux nœuds proches (une requête dans le graphe).
- **Étendue :** accueil uniquement, sur le premier écran (phrase, domaines, photo et présentation), avec un fondu vers le bas avant le bandeau des partenaires. Aucune autre page n'a de fond animé.
- **Lisibilité :** masque radial combiné à un fondu vertical ; les cartes des domaines et le cadre photo restent opaques au-dessus.
- **Sobriété :** 28 à 78 nœuds selon la surface, arrêt quand le hero sort de l'écran ou que l'onglet est masqué, image fixe avec `prefers-reduced-motion`. Pas de grille de fond (décision maintenue).

### Portrait et présentation (ajout du 20/11/2026)
- Portrait 4:5 (≈ 300 px) dans un cadre d'un filet avec marge intérieure de 10 px et deux coins en `trace` (repères de cadrage d'un plan). Angles droits conservés : pas de cercle, contrairement à la référence.
- Légende sous la photo : nom, rôle, lieux (Anglet et Paris, Station F).
- Repris des références : une ligne « Ouvert à » (R&D industrielle, accompagnement de projets, postes académiques) avec un point `trace`, et une ligne de faits vérifiables (IEEE premier auteur, 9 partenaires SAFE, 43 h de M2, 12 projets) en taille s2, pas en gros chiffres.
- Écartés : salutation « Hi, I'm » avec emoji, effet machine à écrire, bouton dégradé, photo ronde, flèche « Scroll ».

### Sections de l'accueil inspirées de jgsystemsconsulting.com (ajout du 20/11/2026)
- **Comment travaillent mes agents :** flux de 4 boîtes reliées par des flèches orthogonales (vertical sur mobile). Seule vraie séquence numérotée ; la dernière étape, « Traçabilité », est en `trace`.
- **Ce que je fais :** grille 2×2 à filets partagés, sans numéros (ce n'est pas une séquence). Chaque offre finit par son livrable.
- **Parcours :** registre en lignes, avec domaine, description et preuve chiffrée alignée à droite. Les chiffres quittent le bloc photo pour se retrouver ici, dans leur contexte.
- **Bloc photo :** portrait 260 px, légende réduite au nom et aux lieux, ligne « Ouvert à », présentation, boutons et liens. Plus de rangée de chiffres.

## Home intro and text alignment (Nov 2026)

- Intro comes first: portrait on the left with the name and place under it, the role as a headline on its right, then a one-sentence lede, a three-fact proof strip (IEEE first-author paper, 9 SAFE partners, 43 h of teaching), "Open to", actions and links. The EARS statement and research areas follow below.
- Mobile: a 112px portrait beside the role, name and place underneath, everything else stacked.
- Body paragraphs are justified with automatic hyphenation (`main p`, experience bullets). Display-size lines (EARS statement, research question, role) and short labels stay left-aligned so justification never opens wide gaps.
- Each fact appears once per page: the proof strip carries the figures, the Track record section carries the descriptions.
