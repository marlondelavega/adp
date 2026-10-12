# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

SvelteKit 3 + Svelte 5 (runes), TypeScript, Tailwind CSS v4, DaisyUI v5, `@lucide/svelte`. Deployed as a single static page via `adapter-static`; no backend. Already installed in this repo.

## Users

Private homeowners (particuliers), property managers (régies immobilières) and building/construction companies in Geneva and surroundings who need roofing work done and want a trustworthy local firm to quote it. Secondary audience: the reviewers of the applicant's part-time job application, who judge the page as a work sample.

## Product Purpose

Marketing site for ADP Toiture SA, a Geneva roofing company (ferblanterie, couverture, étanchéité). The page's job is to earn a quote request (devis) or a phone call. Source of truth for content and layout: the supplied design comp (single page, French).

## Positioning

Local, human-scale firm with its own workshop: roofing, metalwork and waterproofing under one roof, with custom sheet-metal fabrication done in-house.

## Operating Context

- Company: ADP Toiture SA, Chem. Frank-Thomas 24B, 1208 Genève (quartier des Acacias / Les Vives).
- Phone: 078 760 96 36. Email: info@adp-toiture.ch.
- Team of 7 to 8 collaborators; works for individuals, companies, and alongside large players of the sector.
- Services: Couverture, Ferblanterie, Étanchéité, Fabrication sur mesure.
- Language: French (fr-CH).

## Capabilities and Constraints

- Static single page; no backend, database or forms processing. Contact actions are `tel:` and `mailto:` links.
- In-page navigation only (Accueil, Nos services, Nos réalisations, À propos, Contact).
- Copy is taken from the supplied comp. Testimonials, partner logos, team count and "2024" copyright come from the comp and must be confirmed by the owner before real use.

## Brand Commitments

- Name: ADP Toiture SA, with the red-and-black "adp" roof-mark logo from the comp.
- Red + near-black + white palette; photography-led (roofs, workshop, team, Lake Geneva).
- Visual authority: the supplied design comp (`images/1.jpg` in the session) is pinned; fidelity to it outranks stylistic preference.

## Evidence on Hand

- Design comp only. No photography, logo files or partner logo files in the repo yet; the build uses clearly labeled placeholder artwork in `static/images/` to be replaced with real photos.
- Testimonials (M. Dupont, Mme Martin, M. Rossi) and partner names (Implenia, Losinger Marazzi, Racines Carrées, De Gand Paysage, M Étanchéité Sàrl) are as written in the comp; do not add further proof.

## Product Principles

- Make the next step obvious: a quote or a phone call is never more than one tap away.
- Show the real work: roofs, workshop and team beat abstraction.
- Local and human: Geneva, a small named team, plain French.
- Static-first and fast: everything works without a server.

## Accessibility & Inclusion

WCAG AA (contrast, keyboard operability, semantic landmarks, reduced-motion respect). Content in French, `lang="fr"`.
