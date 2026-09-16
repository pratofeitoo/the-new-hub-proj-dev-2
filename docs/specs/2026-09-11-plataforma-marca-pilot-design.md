# Plataforma de Marca — Pilot Design

## Scope

Create a shared `DESIGN.md` contract for the six Markdown files in
`01-work/documentacao-tecnica/plataforma-de-marca/01-plataforma-estrategica/`,
plus a render manifest and a demonstration report in HTML and PDF.

The six source files remain unchanged. Their provisional status must remain
visible in the generated outputs.

## Data flow

```text
Six strategic Markdown files
  -> explicit source list in render-manifest.yml
  -> shared DESIGN.md tokens and rationale
  -> one navigable HTML report
  -> PDF rendered from the same HTML/CSS
  -> structural and visual verification
```

## Artifacts

- `01-work/documentacao-tecnica/plataforma-de-marca/DESIGN.md`: Google
  `DESIGN.md` alpha-compatible visual contract.
- `01-work/documentacao-tecnica/plataforma-de-marca/render-manifest.yml`:
  source, design, output, renderer, and status metadata.
- `04-sistema-de-apresentacoes/outputs/plataforma-estrategica/plataforma-estrategica-pilot.html`:
  self-contained browser demonstration with one chapter per source.
- `04-sistema-de-apresentacoes/outputs/plataforma-estrategica/plataforma-estrategica-pilot.pdf`:
  landscape PDF generated from the same presentation source.

## Design contract

The design file will use YAML front matter for colors, typography, spacing,
radii, and component roles, followed by ordered Markdown sections: Overview,
Colors, Typography, Layout, Elevation & Depth, Shapes, Components, and Do's
and Don'ts. All values are provisional and the file is not an approval of
brand identity or claims.

## Non-goals

- Do not edit the six source Markdown files.
- Do not promote content to `02-review` or `03-approved`.
- Do not create final logo, legal, claims, or product decisions.

## Verification

- Validate the DESIGN.md with `npx @google/design.md lint DESIGN.md` when the
  package is available.
- Check all six manifest sources exist.
- Check HTML contains all six source titles and provisional-status labels.
- Confirm PDF is generated, non-empty, and landscape.
- Open the HTML in a browser and inspect the rendered report.
