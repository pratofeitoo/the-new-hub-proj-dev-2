---
version: alpha
name: HUB Brand Platform Pilot
description: Provisional visual token system for the HUB brand-platform pilot. It supports evidence-led, status-aware communication while the brand architecture, visual direction, and source-of-truth tokens remain under review.
colors:
  primary: "#6D28D9"
  primary-strong: "#4C1D95"
  primary-subtle: "#EDE9FE"
  background: "#F8F7FB"
  surface: "#FFFFFF"
  text: "#17151D"
  text-secondary: "#3B3745"
  text-muted: "#6B6675"
  border: "#E2DFEA"
  status-success: "#166534"
  status-warning: "#92400E"
  status-danger: "#B91C1C"
  status-info: "#075985"
typography:
  display:
    fontFamily: "Sora, Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.2
  heading:
    fontFamily: "Sora, Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.43
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  pill: "999px"
spacing:
  unit: "4px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  xxxl: "64px"
  huge: "96px"
components:
  button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: 8px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 16px
  badge:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.primary-strong}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 4px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 8px
  table:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 8px
  caption:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 4px
  divider:
    backgroundColor: "{colors.border}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
  status-success:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.status-success}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 4px
  status-warning:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.status-warning}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 4px
  status-danger:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.status-danger}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 4px
  status-info:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.status-info}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 4px
  feature-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: 32px
  page-section:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 48px
  hairline:
    backgroundColor: "{colors.border}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: 4px
---

# HUB Brand Platform Pilot

## Overview

This is an **alpha, provisional** design system for the HUB brand-platform pilot. It translates the current token recommendations into a shared visual vocabulary for strategy, product, presentation, and dashboard experiments.

The system uses a provisional violet action direction over neutral surfaces, while the broader visual baseline remains navy-led with teal, violet, coral/red, and orange/yellow accents under review. Sora for display/headings and Inter for body, controls, tables, and metrics are hypotheses subject to license and availability checks. The system uses a 4px base with recurring 8px intervals, accessible contrast, and explicit evidence/status labels. It does not establish approved brand, legal, certification, ownership, or product claims. Treat every token and component as a proposal until the relevant governance review approves it.

## Colors

- **Primary direction:** `colors.primary` for interactive emphasis and `colors.primary-strong` for high-contrast emphasis. Navy, teal, coral/red, and orange/yellow remain provisional visual directions and are not assigned fixed tokens here until a source palette is approved.
- **Surfaces:** `colors.surface` for content surfaces, `colors.background` for application backgrounds, and `colors.border` for borders and dividers.
- **Text:** `colors.text` for primary text, `colors.text-secondary` for secondary text, and `colors.text-muted` for supporting text only when contrast remains accessible.
- **Status:** `colors.status-success`, `colors.status-warning`, `colors.status-danger`, and `colors.status-info` are status cues, not decorative accents. Pair every color cue with text or an icon.
- **Contrast:** verify foreground/background pairs in the consuming product. Never use color as the sole indicator of evidence maturity or action state.

## Typography

Use `typography.display` and `typography.heading` for titles only when Sora is available; otherwise use their Inter fallback. Use `typography.body` for reading text and `typography.label` for controls and status labels. Confirm licenses, weights, Portuguese character support, numerals, and availability before distribution.

Suggested hierarchy:

- Display: `typography.display`.
- Heading: `typography.heading`.
- Body: `typography.body`.
- Label: `typography.label`.

## Layout

- Build spacing from `spacing.xs`; use `spacing.sm` as the default small gap and `spacing.md` as the default content gap.
- Use `spacing.lg`, `spacing.xl`, and `spacing.xxl` for section separation rather than arbitrary values.
- Use `spacing.xxxl` and `spacing.huge` for presentation margins or major page separation only when the consuming layout needs them.
- Use a 12-column desktop, 8-column tablet, and 4-column mobile grid as a starting point; use 16px mobile and 24px desktop gutters, and validate the container width with real content.
- Prefer a 44px minimum control height for interactive targets and do not fix card heights when text or errors can wrap.
- Prefer a clear reading column, generous whitespace, and one primary action per view.
- Keep evidence, owner, and status close to the claim or item they qualify. Do not separate caveats into inaccessible footnotes.
- Use responsive layouts that preserve hierarchy on narrow screens; avoid dense multi-column layouts when labels or evidence qualifiers would wrap ambiguously.

## Elevation & Depth

Depth is restrained and functional. Prefer borders using `colors.border` and surface changes using `colors.background` over heavy shadows. When elevation is necessary, use `0 1px 2px rgba(23,21,29,.08)` for low elevation or `0 8px 24px rgba(23,21,29,.12)` for an overlaid panel, and preserve visible focus states. Never use elevation to imply approval, authority, certification, or evidence quality.

## Shapes

- Use `rounded.sm` for fields, compact controls, and small containers.
- Use `rounded.md` for cards, panels, and primary controls.
- Use `rounded.lg` sparingly for feature panels or prominent surfaces.
- Use `rounded.pill` only for badges, filters, and status labels.
- Keep shape choices consistent within a surface; do not mix rounded and sharp treatments without a clear hierarchy.

## Components

### Actions

Primary actions use `colors.primary` with `colors.surface` text and `rounded.md`. Secondary actions use neutral surfaces and a `colors.border` border. Provide a visible focus ring of at least 2px using `colors.primary-strong` against both adjacent surfaces; include hover, pressed, disabled, loading, error, and success states where applicable. Never rely on color change alone.

### Evidence and status labels

Status labels must use explicit words such as **hipótese**, **ilustrativo**, **em revisão**, **observado**, **validado**, or **aprovado** only when the underlying workflow defines that state. Pair the label with a short source, period, owner, or limitation where applicable. Use `colors.primary-subtle` as a neutral informational tint with `colors.status-info`, and reserve the success, warning, and danger tokens for states whose meaning is defined by the consuming workflow.

### Cards and panels

Cards use `colors.surface` on `colors.background`, with `colors.border` borders and `rounded.md`. A card should communicate one decision, evidence item, or task. Avoid card grids that make unvalidated hypotheses look like equivalent approved products.

### Tables and dashboards

Tables use `colors.text` for headings, `colors.text-secondary` for supporting text, and `colors.border` separators. Include a status/evidence column where maturity affects interpretation. Dashboard metrics must show definition, period, source, and limitation when those details are material.

## Do's and Don'ts

### Do

- Do label the system and its tokens as provisional until governance approval.
- Do use `colors.primary` as a directional accent, not as proof of an approved identity.
- Do preserve accessible contrast and provide non-color status cues.
- Do use the 4px/8px rhythm through `spacing.xs`, `spacing.sm`, and `spacing.md`.
- Do use the current provisional visual baseline deliberately: navy as structure and teal, violet, coral/red, and orange/yellow as accents only when their semantics and contrast are defined.
- Do treat Sora/Inter, the expanded spacing scale, radii, shadows, and interaction states as provisional implementation guidance pending validation.
- Do distinguish observed evidence from hypotheses, illustrations, validation, and approval.
- Do keep claims scoped to their source, period, owner, and current status.

### Don't

- Don't invent legal, ownership, certification, accreditation, exclusivity, or performance claims.
- Don't present a prototype, MVP, blueprint, or recognition concept as a validated product or certification.
- Don't use violet, elevation, or a badge to imply approval or authority.
- Don't treat the navy/teal/coral/orange direction, Sora, or any unmeasured color pairing as an approved identity system.
- Don't use color alone to communicate status, priority, error, or evidence maturity.
- Don't substitute arbitrary spacing, typography, or color values when a token exists.
- Don't collapse HUB, Plataforma HUB, HUB Negócios, Instituto HUB, Método C.A.O.S., or Selo HUB into one undifferentiated claim.
