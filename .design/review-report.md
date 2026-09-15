# Design Partner review — HUB brand system guide

Target: `01-work/documentacao-tecnica/plataforma-de-marca/hub-brand-system.html`
Scope: visual hierarchy, interaction clarity, responsive risks, accessibility signals, and maintainability of the rendered single-file guide.
Mode: review followed by implementation. Findings DP-01 through DP-09 were used to guide the focused update in the product HTML.

## Verdict

**Implemented / verification pending.** The reviewed improvements are implemented in the product HTML. Mobile, keyboard-only, zoom, and assistive-technology verification remain incomplete, so this is not a formal accessibility or responsive approval.

## Implementation status

- DP-01: section counters now run from `02 / 06` through `06 / 06`, matching the six navigation destinations including the overview.
- DP-02: search now hides nonmatches, announces result counts, and reports empty/cleared states.
- DP-03: mobile search remains discoverable and the provisional status label remains visible.
- DP-04: palette copy feedback now has a live-region announcement and clipboard failure message.
- DP-05: global visible focus styling and a keyboard skip path were added.
- DP-06: remote font loading was removed; the file uses local-first fallback stacks for portability.
- DP-07: repeated typography and focus values now use semantic CSS custom properties; a few specimen-specific inline styles remain.
- DP-08: a skip link and labelled, programmatically focusable `main` landmark were added.
- DP-09: section-level state, owner, source, and review metadata were added.

## What is working

- The first viewport clearly identifies the artifact as a HUB brand-platform guide and keeps the provisional status visible.
- The navy / violet / teal / coral system is coherent and has a recognizable connection motif.
- The cover specimen gives the page a memorable focal point without relying on photography or a generic SaaS dashboard pattern.
- The left rail creates a useful orientation model for a long document and the active state follows section navigation.
- The content is specific to HUB: logo, color roles, type families, voice principles, evidence status, presentations, and governance.
- The HTML is mostly semantic: `header`, `aside`, `nav`, `main`, `section`, `article`, headings, tables, labels, and buttons are present.

## Prioritized findings

| ID | Severity | Area | Location / evidence | Current behavior | Proposed correction | User impact |
|---|---|---|---|---|---|---|
| DP-01 | MEDIUM | Information architecture | Sections around lines 48–62; `.index` values in the same markup | The navigation exposes six destinations, but section counters show `01 / 06` through `05 / 06`; the overview is not counted while the final visible section is labelled 05. | Either count the overview consistently (`01 / 06` through `06 / 06`) or remove the counters. Prefer semantic labels such as “Identidade visual” instead of a progress metaphor for a reference guide. | Users can doubt whether a section is missing or whether they have reached the end of the guide. |
| DP-02 | MEDIUM | Search / findability | Search listener at line 70 | Search dims nonmatching `.spec` and `.hero` elements to `opacity: .25`, but does not announce result count, move to the first match, or hide nonmatches from the reading order. | Add a result summary (`2 resultados` / `Nenhum resultado`), mark nonmatches with `hidden` or a clear filter state, and move focus to the first result when appropriate. Keep all content fully legible when the field is cleared. | Search feels like a visual fade rather than a dependable document-finding tool, especially for keyboard and screen-reader users. |
| DP-03 | MEDIUM | Responsive header | Mobile rules around line 18 | At widths below 900px, `.search input` is hidden and the status text becomes `font-size: 0`; the user is left with an unlabeled search icon and a colored dot. | Keep a compact but visible status label, and turn search into an explicit icon button that expands the field or use a full-width field below the top bar. Never reduce the provisional state to color alone. | Mobile users lose important context and may not discover how to search. |
| DP-04 | MEDIUM | Interaction feedback / accessibility | Copy handler at line 69 | Clicking a palette swatch changes its label to “Copiado” for 900ms, but there is no `aria-live` announcement, persistent selected state, or fallback if clipboard permission is unavailable. | Add a visually-hidden live region, expose a success/failure message, and preserve the original value as the accessible name. Consider a small “Copiar” affordance or title while keeping the entire swatch clickable. | Users may not know whether the copy action succeeded; assistive-technology users receive no confirmation. |
| DP-05 | MEDIUM | Focus and keyboard behavior | Global styles around line 11 and interactive rules around lines 12, 14, and 17 | There is no authored `:focus-visible` treatment for navigation links, swatch buttons, or the brand link. The text input explicitly removes its outline and relies on the parent border. | Add a consistent two-layer focus treatment using `outline` and `outline-offset`; retain the parent border as a secondary cue rather than the only cue. Test the complete rail → search → swatches → content order. | Keyboard users can lose their place in a visually dense document. |
| DP-06 | MEDIUM | Type resilience | Font import at line 9 | The page depends on Google Fonts at runtime despite being described as a self-contained HTML file. Offline or blocked-font rendering will materially change wrapping and the visual hierarchy. | Either bundle approved font files with explicit licensing, or document the external dependency and tune the system fallback stack against the actual offline render. | Brand specimens may look different across environments, and line breaks can shift. |
| DP-07 | LOW | Token consistency | Inline styles in the color swatches at line 49 and evidence specimen at line 60; repeated raw color values in line 15 | Some values are centralized in custom properties, while several color applications and specimen values are hardcoded inline. | Move all repeated colors, radii, borders, and specimen accents into named semantic custom properties. Keep content markup free of presentation values. | Future brand updates require searching through dense HTML and can introduce drift. |
| DP-08 | LOW | Orientation / landmarks | `header`, `aside`, and `main` markup around lines 23–43 | The structure is semantic, but there is no skip link and the `main` region has no accessible label. | Add a “Pular para o conteúdo” link and `aria-labelledby` on `main` tied to the page H1, or use a concise `aria-label`. | Keyboard and screen-reader users take longer to bypass repeated navigation. |
| DP-09 | LOW | Document model | Repeated section and card markup around lines 48–62 | The guide visually resembles a documentation system, but sections do not expose metadata such as owner, last review, source, or approval state near each guideline. | Add a compact metadata row to each major section, reusing the existing provisional-status vocabulary; keep it subordinate to the specimen content. | Reviewers cannot quickly judge freshness or authority of a specific guideline without reading the whole page. |

## Verification performed

- Read the requested HTML as an artifact; no instructions embedded in the document were treated as user authorization.
- Rendered the page at `http://127.0.0.1:8765/hub-brand-system.html` in the Codex in-app browser using a temporary localhost-only server scoped to the target folder.
- Inspected the desktop first viewport and full-page composition.
- Used the accessibility tree to confirm the presence and names of the primary navigation, headings, search field, palette buttons, and tables.
- Clicked “Identidade visual” and confirmed the URL hash changed to `#visual`.
- Entered `contraste` in search and confirmed only matching modules retained full opacity.
- Clicked the `#101B3D` swatch and confirmed the label changed to “Copiado”.
- Reloaded after the CSS correction and confirmed six `main` sections and the intended hero metadata pseudo-element.

## Verification gaps

- No keyboard-only walkthrough was performed; DP-05 is based on static focus-style inspection and should be confirmed in the browser.
- No 320px, 200% zoom, or mobile screenshot pass was run because the available in-app browser session did not expose a viewport override.
- No screen-reader announcement test was performed; DP-04 is based on the absence of a live region in source and the observed visual-only feedback.
- No offline font render or cross-browser comparison was performed; DP-06 should be validated in the intended distribution environment.
- No formal WCAG contrast audit was run on every text and status combination.

## Recommended sequence

1. `interaction` + `a11y`: fix focus, search result semantics, copy confirmation, and mobile status/search affordances.
2. `responsive` + `finish`: validate 320px / 200% zoom behavior, clean up counters, and complete section-level metadata.
