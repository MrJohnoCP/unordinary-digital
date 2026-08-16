# unordinary. digital — Design System

Reference design system for **unordinary. digital**, a small studio ("We build Webflow sites. We edit video. We manage the stuff around both."). Built from the brand guidelines provided in chat, plus two logo files uploaded to `uploads/` — no codebase or Figma file was attached, so this system contains brand foundations and a standard component set, not a recreation of an existing product UI.

**Sources given:**
- Brand guidelines document (pasted into chat) — colour, type, logo rules, tone of voice.
- `uploads/Logo - Main - Dark.png` — charcoal logo, for light backgrounds.
- `uploads/Logo - Main - Light.png` — white logo, for dark backgrounds.

No product screens, app, or website were provided, so no UI kit exists yet. If you have a live site, app, or Figma file, attach it and this system can be extended with a real UI kit.

## Index

- `styles.css` — global stylesheet entry point (imports everything below).
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` — design tokens.
- `assets/` — logo files.
- `guidelines/` — foundation specimen cards (colour, type, spacing, brand, icons) shown in the Design System tab.
- `components/core/` — Button, IconButton, Badge, Tag, Card.
- `components/forms/` — Input, Select, Checkbox, Radio, Switch.
- `components/navigation/` — Tabs.
- `components/feedback/` — Dialog, Toast, Tooltip.
- `SKILL.md` — Agent Skill wrapper for use in Claude Code.
- `thumbnail.html` — homepage tile for this design system.

## Components

Intentional additions — no source defined a component inventory, so this is the standard set sized to the brand: **Button, IconButton, Badge, Tag, Card, Input, Select, Checkbox, Radio, Switch, Tabs, Dialog, Toast, Tooltip.**

## Brand basics

- **Name:** unordinary. digital — always lowercase, always two words, full stop after "unordinary" always present.
- **Logo:** TAN Nimbus lockup, two lines ("unordinary." / "digital"), never recreated in text — always the placed PNG asset. Charcoal on light, white on dark.
- **Colours:** Charcoal `#454545` (primary/text), White `#FFFFFF` (primary background), Light Grey `#EBEBEB` (secondary background/panels), Orange `#FF991C` (accent only — CTAs, logo dot, highlights, never a background behind body text). Four colours only — no tints, gradients, or extra hues in the source; this system adds `color-mix` hover/press states derived from those four for interactive states only.
- **Type:** Barlow (Bold/800, headings and display only) + Quicksand (Light 300 for body; 400–600 used sparingly for UI labels/buttons where Light is too thin to read at small sizes — an intentional addition, not in the source guidelines). TAN Nimbus is reserved for the logo mark and appears nowhere else.
- **Layout:** generous white space, Light Grey panels instead of borders/shadows for separation, Orange used as a single highlight per view, never a section background.

## Content fundamentals

**Tone:** plain, confident, no hype. British spelling (colour, organise). One idea per sentence — short sentences over long ones. Dry wit welcome; hollow enthusiasm isn't.

**Say this:**
- "We build Webflow sites."
- "We edit video."
- "We manage the stuff around both."
- "Let's talk." / hello@unordinary.digital
- "Good work, done properly."

**Not this:**
- "We are passionate about digital."
- "We take your brand to the next level."
- "Cutting-edge solutions for modern businesses."
- "We would love to connect!"
- "Bespoke, tailored digital experiences."

**The test:** would a plain-speaking business owner find this credible? No hedging ("we think", "we believe") — state it. No emoji anywhere in the source material; none used in this system.

## Visual foundations

- **Colour:** four flat colours, no gradients. Orange is reserved — one CTA or accent per screen, never a large fill behind text. Charcoal doubles as both text colour and dark-background fill (reversed white text/logo on it).
- **Type:** Barlow Bold/800 for all headings and display text, sentence case (never all-caps). Quicksand Light for body copy at 1.5–1.6 line-height. Deliberate weight contrast between the two — Barlow is geometric and heavy, so headings get generous size jumps rather than sitting close to body size.
- **Spacing:** 4px base unit (`--space-1` = 4px through `--space-24` = 96px). No fixed layout grid was specified; use generous whitespace over dense stacking.
- **Backgrounds:** flat colour fills only (White or Light Grey). No photography, illustration, gradients, or textures in the source — none invented here.
- **Shadows/borders:** soft, single-layer shadow (`--shadow-sm/md/lg`) for elevation; no borders on cards. This is an intentional decision for this system (the guidelines only said "not heavy borders or drop shadows") — flat borders were the more literal reading, but a faint single-layer shadow reads as "generous white space" without a hard edge. Flag if you'd rather have bordered-flat cards instead.
- **Radius:** 6/8/12px scale (`--radius-sm/md/lg`), plus a pill radius for buttons, tags, and the switch track. Not specified in the source; chosen to feel plain and unfussy rather than sharp or heavily rounded.
- **Motion:** not specified in the source. This system uses short (120–180ms), standard-eased transitions for hover/press only — no bounces, no page-level animation.
- **Hover/press states:** colour shift only (`color-mix` toward black for press, a lighter mix for hover) — no scale/shrink effects, since the brand has no stated motion language.
- **Transparency/blur:** none — the scrim behind Dialog is the only translucent surface, using a charcoal mix at 55% opacity.
- **Imagery:** none provided; none invented. If real photography is added later, keep it warm-neutral and free of heavy filters/gradients to match the flat, plain-spoken palette.

## Iconography

No icon system was provided in the source. This system substitutes **Feather Icons** (thin 1.5px stroke, line-only) via CDN (`unpkg.com/feather-icons`) as the closest match to the brand's plain, unfussy visual language — flag this if the studio has an existing icon set to swap in. No emoji, no unicode glyphs as icons (aside from a plain `×` used for dismiss controls, which reads as punctuation rather than iconography).

## Caveats & open questions

- **No codebase or Figma file was attached** — this system is built entirely from the written brand guidelines and two logo PNGs. There is no real UI kit here (no actual product screens to recreate). If you have a site, app, or Figma file, attach it and this can be extended with a real UI kit.
- **TAN Nimbus** could not be sourced (it's a paid/commercial typeface) — it's only needed for the logo mark, which is already supplied as a placed PNG, so no substitution was necessary. If you need the logo redrawn or extended (e.g. an icon-only mark), you'll need the font file.
- **Shadow vs. border for cards** was a judgement call (see Visual Foundations) — say if you'd prefer flat/bordered cards instead.
- **Icon set (Feather)** is a substitution, not sourced from the brand — swap in a real set if one exists.
- **Quicksand at 400–600 weight** for UI labels/buttons is an addition beyond the strict "Quicksand Light" rule, needed for legibility at small sizes — flag if you'd rather buttons used Barlow or stayed strictly Light.

Tell me what's off and I'll iterate — more component states, a real UI kit once you attach a site/app/Figma, different icon set, different card treatment, anything.
