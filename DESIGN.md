---
name: Desiray's Lights of Joy
description: A pink-by-day, neon-by-night nonprofit site, with chunky ink-and-paper borders around soft rose surfaces and LED glow where the mission lives.
colors:
  rose-primary: "#d6336f"
  rose-hover: "#b3215a"
  rose-soft: "#fdeaf1"
  rose-tint: "#fbd9e7"
  rose-border: "#e59bbb"
  rose-text: "#b3215a"
  filament-amber: "#ffb020"
  neon-pink: "#ff4fa0"
  neon-pink-hot: "#ff77b6"
  page-blush: "#fff8fb"
  surface-white: "#ffffff"
  card-blush: "#fff2f7"
  warm-tint: "#fde3ee"
  plum-ink: "#2a1620"
  body-mauve: "#4f3340"
  muted-mauve: "#74566a"
  hairline-rose: "#ecc9db"
  night-page: "#140d16"
  night-surface: "#1e1320"
  night-card: "#221625"
  night-text: "#fff3f8"
  night-body: "#dfcfd8"
  night-muted: "#b59ea9"
  footer-plum: "#1e131d"
typography:
  display:
    fontFamily: "Calistoga, Iowan Old Style, Georgia, serif"
    fontSize: "3.3rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.5px"
  headline:
    fontFamily: "Calistoga, Iowan Old Style, Georgia, serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "Calistoga, Iowan Old Style, Georgia, serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Libre Franklin, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Libre Franklin, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    letterSpacing: "1.5px"
  handwriting:
    fontFamily: "Caveat, Segoe Print, Bradley Hand, cursive"
    fontWeight: 600
rounded:
  sm: "6px"
  md: "9px"
  pill: "999px"
spacing:
  gutter: "28px"
  gap-card: "28px"
  gap-hero: "60px"
  section-y: "84px"
components:
  button-primary:
    backgroundColor: "{colors.rose-primary}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.sm}"
    padding: "11px 24px"
  button-primary-hover:
    backgroundColor: "{colors.rose-hover}"
  button-secondary:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.plum-ink}"
    rounded: "{rounded.sm}"
    padding: "11px 24px"
  button-donate:
    backgroundColor: "{colors.rose-primary}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.pill}"
    padding: "11px 24px"
  button-header-donate:
    backgroundColor: "{colors.rose-hover}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.pill}"
    padding: "9px 26px"
  field-control:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.plum-ink}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  amount-tile:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.plum-ink}"
    rounded: "{rounded.sm}"
    padding: "16px 6px"
  amount-tile-active:
    backgroundColor: "{colors.rose-soft}"
    textColor: "{colors.rose-primary}"
  light-card:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.md}"
---

# Design System: Desiray's Lights of Joy

## Overview

**Creative North Star: "The Nightlight Scrapbook"**

This is a children's-hospital nonprofit that gives sick kids a glowing neon light with their name on it, in memory of a girl whose favorite color was pink. The system holds two ideas together. By day it is a warm, hand-made scrapbook: blush paper, plum ink, thick outlines, and offset shadows that sit like cut-out paper. By night, the "Lights Off" mode, the room goes dark and the same pink becomes a lit LED tube. Pink is the brand's memory of Desiray, not a trend color, so it is used with love and conviction rather than as a SaaS accent.

Density is airy and editorial: a 1200px container, generous section padding, large serif headlines, one sentence of lead copy before any action. Personality is tender, a little handmade, never clinical and never corporate. Glow is reserved for things that are literally lights (the donate CTA, the hero garland, the neon sign). Everything else stays on paper.

The system explicitly rejects soft-blur SaaS shadows and hairline borders (the stylesheet says so in its own comments), and it avoids hospital-blue clinical coldness and sad-charity imagery. The kids are called Young Warriors, and the design should read as joyful and strong.

**Key Characteristics:**
- Pink-on-blush by day, neon-on-plum by night, with the same token names in both themes.
- Chunky 3px outlines in plum ink with hard, un-blurred offset shadows.
- Calistoga display serif, Libre Franklin body, Caveat for the handwritten voice.
- Real LED behavior (flicker on, breathe while lit) on exactly the elements that are lights.
- Photography of real donated lights and real children leads; ornament follows.

## Colors

A single saturated rose carried across warm blush neutrals, with a plum-black ink for text and outlines. The dark theme swaps the rose for a brighter neon pink and the paper for deep aubergine.

### Primary
- **Desiray Rose** (#d6336f): Primary buttons, links, eyebrows, active nav underline, italic emphasis inside headlines, card borders on hover.
- **Deep Rose** (#b3215a): Hover and pressed state of Desiray Rose, and the dark end of the donate gradients.
- **Neon Pink** (#ff4fa0): The dark-theme primary and the color of all glow halos. In light mode it appears only inside glow effects.
- **Hot Neon** (#ff77b6): Dark-theme hover.

### Tertiary
- **Filament Amber** (#ffb020): Used only as the glass color of some bulbs in the hero string lights, one bulb in three. Real string lights are warm, and a few amber bulbs keep the garland from reading as a flat pink pattern. It never appears on text, buttons, borders, backgrounds, or any other UI.
- **Deep Rose** and **Neon Pink** supply the other two bulb colors; no further bulb colors are allowed.

### Secondary
- **Rose Tint** (#fbd9e7), **Rose Soft** (#fdeaf1), **Rose Border** (#e59bbb): Pink wash used for hero gradients, selected tiles, eyebrow chips, tinted borders, and the single wash behind the hero photo.
- **Rose Text** (#b3215a): The AA-safe pink for small text (4.9:1 or better on every blush band). In Lights Off it is Neon Pink. Use it for links, eyebrows, labels, and dates; keep Desiray Rose for fills, borders, and large display emphasis.

### Neutral
- **Blush Page** (#fff8fb): Page background by day.
- **Paper White** (#ffffff): Raised surfaces (header, cards, fields).
- **Card Blush** (#fff2f7) and **Warm Tint** (#fde3ee): Alternating section bands.
- **Plum Ink** (#2a1620): Headlines, outlines, and hard shadows. Replaces black everywhere.
- **Body Mauve** (#4f3340) and **Muted Mauve** (#74566a): Running text and secondary text.
- **Hairline Rose** (#ecc9db): Quiet borders and dividers.
- **Night Page** (#140d16), **Night Surface** (#1e1320), **Night Card** (#221625): Lights Off backgrounds.
- **Night Text** (#fff3f8), **Night Body** (#dfcfd8), **Night Muted** (#b59ea9): Lights Off text.
- **Footer Plum** (#1e131d): The footer is dark in both themes and capped with a 6px rose rule.

### Named Rules
**The Pink Is Memory Rule.** Pink is the one chromatic hue of the interface. Do not introduce a second brand color to "balance" it. The single exception is Filament Amber, which belongs to bulb glass in the hero garland and nowhere else.

**The Plum, Never Black Rule.** Outlines, shadows, and text use Plum Ink (#2a1620), never #000. The only black is the mat behind photographed neon lights, where it makes the real glow readable.

**The Literal Light Rule.** Glow, flicker, and breathing animation belong only to things that are lights: the donate CTAs, the garland around the hero photo, the neon sign. A glowing card or glowing heading dilutes the metaphor.

## Typography

**Display Font:** Calistoga (with Iowan Old Style, Georgia)
**Body Font:** Libre Franklin (with system sans)
**Accent Font:** Caveat (handwriting)

**Character:** Calistoga is a warm, chunky, friendly serif that reads as a storybook rather than a law firm. Libre Franklin keeps body copy sturdy and readable for parents and donors. Caveat is a handwritten voice used sparingly for notes from Desiray's family and guestbook messages.

### Hierarchy
- **Display** (700, 3.3rem desktop / 2.7rem tablet, 1.15, -0.5px): Hero title only. Italic (weight 400) in Desiray Rose for the emphasized phrase.
- **Headline** (700, 2.5rem, 1.25): Section headings, centered by default.
- **Title** (700, ~1.35rem, 1.3): Card names, amount values, subsection heads.
- **Body** (400, 1rem, 1.65): Paragraphs. Hero description steps up to 1.15rem / 1.75; cap line length near 540–680px.
- **Label** (700, 0.82rem, 1.5px tracking, uppercase): The `.eyebrow`, flanked by 20px rose hairlines.
- **Handwriting** (Caveat 600): Family notes and Wall of Hope messages.

### Named Rules
**The Italic Pink Rule.** Inside a serif headline, one emphasized phrase goes italic, regular weight, in Desiray Rose. One per heading.

## Layout

A centered 1200px container with 28px side gutters. Pages are stacked full-width bands that alternate between blush, tint, and surface backgrounds. The hero is a two-column grid (1.1fr / 0.9fr, 60px gap) with copy left and the framed photo right; it collapses to one column at 1024px. Light galleries are three-column grids with 28px gaps, dropping to two and then one. The mobile breakpoints are 1024px and 768px; the header shrinks from 80px to 70px and the nav becomes a full-screen slide-in panel at 768px. Rhythm is generous: hero section padding is 64px top and 84px bottom.

## Elevation & Depth

Depth is printed, not blurred. Cards and buttons sit on hard, zero-blur offset shadows in translucent plum, as if cut from paper and stacked. Hover moves the element up and left by 1px and enlarges the offset, or flips the shadow to rose. Soft blur appears only as light: glows in Neon Pink on literal lights, and in dark mode on hovered cards.

### Shadow Vocabulary
- **Paper small** (`2px 2px 0 rgba(42,22,32,.08)`): Resting cards and toggles.
- **Paper card** (`4px 4px 0 rgba(42,22,32,.10)`): Raised cards.
- **Paper photo** (`5px 5px 0 rgba(42,22,32,.12)`): Framed photographs.
- **Rose hover** (`6px 6px 0 rgba(214,51,111,.35)`): Hovered cards; in dark mode adds an 18px neon halo.
- **Neon tube** (`0 0 10px rgba(255,64,150,.75), 0 0 22px rgba(214,51,111,.45), 0 0 38px rgba(214,51,111,.22)`): Text and tube glow on literal lights.
- **Neon button** (`0 0 14px rgba(255,64,150,.55), 0 0 28px rgba(214,51,111,.3)`), peak adds a 64px outer halo: Donate CTA hover and breathing.

### Named Rules
**The Hard Shadow Rule.** Resting shadows have zero blur. A blurred, low-opacity gray shadow is a bug.

## Shapes

Small, honest corners: 6px on buttons, fields, and tiles, 9px on cards. Outlines are thick (3px standard, 6px for hero-weight frames like the real-light cards and the footer rule). Pill (999px) shapes are reserved for donate CTAs and the theme switch, which signals "this is the lit thing." The hero photo is cropped by an ink-brush mask (SVG) with painted washes behind it and a string of LED lights following its edge.

## Components

### Buttons
- **Shape:** 6px corners, 3px plum outline (standard); full pill for donate.
- **Primary:** Desiray Rose fill, white bold label, 3px plum outline, `3px 3px 0` plum offset shadow. Hover shifts -1px/-1px, darkens to Deep Rose, shadow grows to 4px.
- **Secondary:** Paper White fill, plum outline; hover tints to Rose Soft with rose text and border.
- **Outline:** Transparent with rose outline; hover Rose Soft.
- **Donate (`.btn-donate`):** Rose gradient pill with a small glass "bulb" bead that is dim at rest. On hover it lifts 2px, the bead flickers on and breathes, and the pill glows in Neon Pink. Respects `prefers-reduced-motion`.
- **Header Donate:** Plum-to-rose neon sign board, already softly glowing; hover brightens the border and flickers the label to a vivid glow.

### Cards
- **Bedside light card:** Paper White, 3px hairline-rose border, 9px radius, small paper shadow; hover lifts 6px, border turns rose, shadow flips to Rose hover.
- **Real light card:** Black photo mat (#050505), 6px rose border, 6px radius, 16:9 image, name strip beneath in bold; this is the one place pure black is allowed.

### Inputs / Fields
- **Style:** 3px hairline-rose border, 6px radius, Paper White, 12px 16px padding.
- **Focus:** Border turns Desiray Rose; no outline ring. (Keyboard focus visibility here is thin; see Don'ts.)

### Amount Tiles
Donation presets. Paper White with hairline border; hover/active turn Rose Soft with a rose border and a `3px 3px 0` rose offset shadow, and the amount in Calistoga turns rose. A small "recommended" badge sits on the top edge.

### Navigation
Sticky white header, 80px, 1px hairline underneath. Logo left, links in 0.94rem semi-bold Plum Ink with a 2px rose underline that grows on hover/active, then the theme switch and the Header Donate button. At 768px it becomes a full-screen slide-in panel.

### Theme Switch (signature)
A 46×26 pill with a sun/moon thumb that slides 20px. It turns Rose Soft with a rose border when Lights Off is on. It is the control that makes the day/night idea explicit.

### Hero Photo with LED Garland (signature)
The hero photograph is ink-masked with painted washes behind it and a string of animated LEDs along its frame. The LEDs draw in, pop on one by one, and pause when offscreen.

## Do's and Don'ts

### Do:
- **Do** use the existing CSS custom properties; both themes depend on them. Never hard-code a hex in a component.
- **Do** keep 3px plum outlines with zero-blur offset shadows on raised UI.
- **Do** reserve glow and flicker for literal lights, and honor `prefers-reduced-motion`.
- **Do** keep the shared header, footer, and theme toggle identical across every HTML page.
- **Do** run every new piece of user text through `escapeHTML`.
- **Do** verify a new component in both Lights On and Lights Off.

### Don't:
- **Don't** use soft gray blur shadows or 1px hairline cards as the primary container style.
- **Don't** add a second brand hue or spread Filament Amber beyond bulb glass. Tan, peach, and terracotta (the old `--gold`, `--blush`, `--terracotta`) were removed from the hero and must not come back.
- **Don't** use more than three bulb colors in the garland (Neon Pink, Filament Amber, Deep Rose) or more than about ten bulbs.
- **Don't** use pure black for outlines or text; the exception is the photo mat behind neon-light photos.
- **Don't** use clinical hospital blue, stock-photo smiles, or pity-driven imagery. The children are Young Warriors.
- **Don't** put glow on headings, cards, or decorative blobs.
- **Don't** rely on border color alone for focus on form fields; add a visible focus treatment when touching them.
