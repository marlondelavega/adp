---
name: ADP Toiture SA
description: A Geneva roofer's page in a hard-edged sheet-metal register, near-black slate, signal red, photography first.
colors:
  signal-red: "#d1111c"
  signal-red-bright: "#ff4a52"
  slate-ink: "#13171d"
  steel: "#5b6470"
  sheet: "#f3f4f6"
  hairline: "#e3e5e9"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw + 0.5rem, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.125rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.55
rounded:
  box: "4px"
  focus: "2px"
spacing:
  band-sm: "56px"
  band-md: "64px"
  gutter: "20px"
  stack: "32px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.white}"
    rounded: "{rounded.box}"
    height: "48px"
    padding: "0 24px"
  button-outline-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.slate-ink}"
    rounded: "{rounded.box}"
    height: "40px"
    padding: "0 16px"
  button-outline-light-hover:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.white}"
  button-outline-dark:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.box}"
    height: "48px"
    padding: "0 24px"
  button-outline-dark-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.slate-ink}"
  review-sheet:
    backgroundColor: "{colors.white}"
    textColor: "{colors.slate-ink}"
    padding: "24px"
  footer:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.slate-ink}"
---

# Design System: ADP Toiture SA

## Overview

**Creative North Star: "The Standing Seam"**

The page looks like the work: cut and folded sheet metal. Near-black slate bands alternate with plain white sheets; signal red appears only where the visitor should act or where one word carries the claim. Photographs are the content, so they bleed to the band edges and dissolve into the slate rather than sitting in framed cards. Corners are square (4px) like cut metal; nothing is pillowy.

Density is moderate and editorial: one heading, a short promise, one action per band. Hierarchy comes from weight and tracking in a single grotesque family, not from decoration. The brand commitment from the product record is a red, near-black and white palette with photography-led pages and the red-and-black "adp" roof-mark logo.

**Key Characteristics:**
- Alternating slate (dark) and white (light) full-bleed bands; a pale sheet-grey footer closes the page.
- One action colour (signal red); one red word per dark band at most.
- Photography bleeds to edges and dissolves into slate through a left-to-right gradient.
- Square 4px corners, 1px hairlines, almost no shadow.
- Single family, Hanken Grotesk, bold headings at tight tracking.

## Colors

A restrained slate, red and white palette with cool steel greys; red is rare and always means "act" or "this word".

### Primary
- **Signal Red** (#d1111c): the one action colour. Solid devis buttons, active nav underline, hover state of links and outline buttons, focus ring, text selection, icon accents (phone, map pin, review stars), the roof-mark in the logo.
- **Signal Red Bright** (#ff4a52): the same red lifted for legibility on slate; used only for the emphasised word in the hero headline.

### Neutral
- **Slate Ink** (#13171d): text on white, and the ground of dark bands (hero, company, reviews).
- **Steel** (#5b6470): secondary copy, captions, locations on white.
- **Sheet** (#f3f4f6): footer ground.
- **Hairline** (#e3e5e9): 1px borders under the header, between partners, above the footer legal line; also the decorative quote mark inside review sheets.
- **White** (#ffffff): content bands, header, review sheets set on slate.

### Named Rules
**The One Red Rule.** Red is the action and one emphasised word per band. It is never a background wash, a decorative border or a section tint.

**The Sheet-on-Slate Rule.** Content that must be read closely (reviews) sits on white sheets over the slate band, not as translucent panels.

## Typography

**Display / Body Font:** Hanken Grotesk Variable (with ui-sans-serif, system-ui, sans-serif)

**Character:** One confident grotesque. Headings are bold with -0.02em tracking and balanced wrapping; body is regular at a generous 1.55 line height. Copy is French.

### Hierarchy
- **Display** (700, clamp(2.25rem, 4.4vw + 0.5rem, 3.5rem), 1.1): hero headline only.
- **Headline** (700, 1.875rem, rising to 2.125rem at sm, 1.1): section headings, each a full sentence ending in a period.
- **Title** (700, 1.0625rem for services, 1rem for project cards and reviewer names, 1.1): service and project names, reviewer names.
- **Body** (400, 1rem, 1.55 / snug 1.375): paragraphs; hero promise at 1.125rem on slate in white at 90%. Keep measure near 30-34rem.
- **Label** (500-600, 0.8125rem): nav links, button text, footer links and contact lines; phone number uses tabular figures.

### Named Rules
**The Full Stop Rule.** Section headings are declarative sentences ending in a period, with no kicker or eyebrow above them.

## Layout

A single centred container (`wrap`): width of 76rem maximum with a fluid side gutter of clamp(1rem, 4vw, 2rem). Bands are stacked full-bleed with vertical padding of 3.5rem (sm: 4rem) for white bands and 3rem to 5rem for photographic dark bands. Card grids are 1 / 2 / 4 columns (reviews 1 / 3, partners 2 / 3 / 5) with 1.25rem column gaps and 2rem row gaps; a heading sits 2rem above its grid.

Hero and company bands are split compositions at lg: copy at left in a 31-34rem column, photograph occupying the right 62-68% and bleeding to the edge, a gradient from slate (solid to 35-40%) fading over it. Below lg the photo stacks under the copy at 16:10. The header is sticky, 4rem tall, white at 95% with a 1px hairline, and collapses to a menu button below lg.

## Elevation & Depth

Flat by default; depth comes from tonal bands, not shadow. One interaction glow exists: on hover, service and project images gain a soft red-tinted halo (14px offset, 34px blur, red at 40%, plus a 1px red ring at 30%). Two resting shadows exist, both small: a soft drop under the white icon tab on service images and a larger diffuse drop under review sheets on slate.

### Shadow Vocabulary
- **Icon tab** (`box-shadow: 0 4px 14px -6px rgb(19 23 29 / 0.35)`): white tab overlapping a service photo's bottom-left corner.
- **Review sheet** (`box-shadow: 0 10px 30px -18px rgb(0 0 0 / 0.6)`): lifts a white sheet off the slate band.

### Named Rules
## Shapes

Square-cut. Buttons, fields and boxes use a 4px radius; the focus outline carries a 2px radius. Images, review sheets, icon tabs and the logo roof-mark are hard-cornered rectangles or a single skewed parallelogram. Borders are 1px hairlines; the only thicker stroke is the 2px active-nav underline and the 3px focus ring. Photographs are cropped at 19:10 (services) and 2:1 (projects).

## Components

### Buttons
- **Shape:** 4px radius, semibold, text with a trailing 16-18px arrow icon.
- **Primary:** signal red fill, white text, 48px tall in the hero (44px in footer and menu, 40px in the header), 24px side padding in the hero.
- **Outline on white:** white fill, red 1px border, ink text, red phone icon; hover fills red with white text.
- **Outline on slate:** transparent, white 60% border and white text; hover fills white with ink text.

### Navigation
Sticky white header. Five anchors in 13px medium ink, hover and current in red, with a 2px red underline that scales in from the left over 300ms for the current section. Phone outline button and red devis button sit right; below md the phone becomes an icon-only 44px square, below lg a ghost menu button opens a bordered list with red arrows.

### Photo Band (signature)
Slate band, split copy and photograph, gradient dissolve at the photo's left edge. Images are currently stand-in crops (see static/images/PROVENANCE.md).

### Service and Project Cards
Unframed: image, then title and steel copy. Services overlay a white icon tab (21% by 33% of the image) that turns red on hover; projects zoom the image 5% over 700ms and list a red map-pin with "Genève".

### Review Sheet
White sheet, 24px padding, five red stars, quote in 15px, bold name over steel role, a large hairline-grey quote mark anchored bottom-right.

### Partners Row
Names as bold 20px text separated by hairline rules; no logos, no cards.

### Motion
Entrances rise 14px with fade over 0.9s on an expo-out curve (cubic-bezier(0.16, 1, 0.3, 1)), staggered by 120ms; the hero photo settles from 1.06 scale over 1.6s. All of it is disabled under prefers-reduced-motion.

## Do's and Don'ts

### Do:
- **Do** use signal red (#d1111c) for the primary action and at most one emphasised word per dark band; use #ff4a52 for that word on slate.
- **Do** keep corners at 4px and borders at 1px hairline (#e3e5e9).
- **Do** let photographs bleed to the band edge and dissolve into slate with the left-to-right gradient.
- **Do** write section headings as full sentences ending in a period.
- **Do** flip the focus ring to white inside `.on-dark` and keep the 3px red outline elsewhere.

### Don't:
- **Don't** wash a section in red or use red as a decorative border.
- **Don't** round corners beyond 4px or float content in soft, shadowed cards; the review sheet's drop is the ceiling.
- **Don't** add kickers, eyebrows or labels above headings.
- **Don't** use a second typeface or a display face outside Hanken Grotesk.
- **Don't** reintroduce partner logos or testimonials beyond the supplied content without the owner confirming them.
