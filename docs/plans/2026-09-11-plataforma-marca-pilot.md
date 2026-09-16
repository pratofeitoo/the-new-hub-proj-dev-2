# Plataforma de Marca Pilot Implementation Plan

> **For agentic workers:** implement task-by-task with verification after each artifact.

**Goal:** Demonstrate how the six strategic Markdown files can be rendered through a shared Google-format `DESIGN.md` contract into HTML and PDF without changing the sources.

**Architecture:** A shared design contract defines visual tokens and rationale. A YAML manifest explicitly selects the six source files, the design contract, and the output artifacts. A self-contained HTML report renders one chapter per source; the PDF is generated from the same HTML/CSS.

**Tech Stack:** Markdown, YAML, HTML/CSS/JavaScript, Python standard library, Chromium/Playwright or available PDF renderer, `@google/design.md` CLI when available.

**Assumptions:** The pilot is documentation-only and remains in `01-work`; it does not require a production application or source-file changes.

## File structure

- Create `01-work/documentacao-tecnica/plataforma-de-marca/DESIGN.md` — shared visual contract.
- Create `01-work/documentacao-tecnica/plataforma-de-marca/render-manifest.yml` — explicit pipeline inputs and outputs.
- Create `04-sistema-de-apresentacoes/outputs/plataforma-estrategica/plataforma-estrategica-pilot.html` — rendered demonstration.
- Create `04-sistema-de-apresentacoes/outputs/plataforma-estrategica/plataforma-estrategica-pilot.pdf` — PDF counterpart.
- Create `docs/specs/2026-09-11-plataforma-marca-pilot-design.md` — approved design record.
- Create `docs/plans/2026-09-11-plataforma-marca-pilot.md` — this implementation plan.
- Do not modify the six files under `01-plataforma-estrategica/`.

### Task 1: Create the shared design contract

**Files:**
- Create: `01-work/documentacao-tecnica/plataforma-de-marca/DESIGN.md`

**Security flag:** none

- [x] Add YAML front matter with `version: alpha`, `name`, colors, typography, rounded, spacing, and component tokens.
- [x] Add the canonical ordered sections and explicitly mark all values as provisional.
- [x] Include accessibility, chart/table, and provisional-content rules in the prose.
- [x] Verify the file has balanced front-matter fences and no unresolved token references.

Verification:

```bash
npx @google/design.md lint 01-work/documentacao-tecnica/plataforma-de-marca/DESIGN.md
```

Expected: exit code 0, or a documented tool-unavailable result followed by structural validation.

### Task 2: Create the render manifest

**Files:**
- Create: `01-work/documentacao-tecnica/plataforma-de-marca/render-manifest.yml`

**Security flag:** none

- [x] List all six strategic Markdown sources with exact relative paths.
- [x] Reference the shared `DESIGN.md` explicitly.
- [x] Declare HTML and PDF output paths, renderer metadata, `design_version`, and provisional lifecycle status.
- [x] Validate YAML parsing and verify every listed source exists.

Verification:

```bash
python3 - <<'PY'
from pathlib import Path
import yaml
manifest = yaml.safe_load(Path('01-work/documentacao-tecnica/plataforma-de-marca/render-manifest.yml').read_text())
for source in manifest['sources']:
    assert Path(source).exists(), source
assert Path(manifest['design']).exists()
print('manifest sources and design: OK')
PY
```

Expected: `manifest sources and design: OK`.

### Task 3: Generate the HTML pilot

**Files:**
- Create: `04-sistema-de-apresentacoes/outputs/plataforma-estrategica/plataforma-estrategica-pilot.html`

**Security flag:** none

- [x] Render one navigable chapter per source file in manifest order.
- [x] Preserve headings, lists, tables, source paths, and provisional-status labels.
- [x] Apply DESIGN.md tokens through CSS variables rather than unrelated hard-coded styling.
- [x] Include print-safe page breaks and a visible provenance footer.
- [x] Keep the HTML self-contained with no external network dependency.

Verification:

```bash
python3 - <<'PY'
from pathlib import Path
html = Path('04-sistema-de-apresentacoes/outputs/plataforma-estrategica/plataforma-estrategica-pilot.html').read_text()
assert html.count('<article') == 6
assert 'provisório' in html or 'provisorio' in html
assert 'DESIGN.md' in html
print('HTML pilot structure: OK')
PY
```

Expected: `HTML pilot structure: OK`.

### Task 4: Generate and inspect the PDF

**Files:**
- Create: `04-sistema-de-apresentacoes/outputs/plataforma-estrategica/plataforma-estrategica-pilot.pdf`

**Security flag:** none

- [x] Generate the PDF from the pilot HTML, not from a separate manually maintained layout.
- [x] Confirm the PDF is non-empty and landscape.
- [x] Inspect representative first, middle, and final pages for clipping, contrast, and visible status/provenance.

Verification:

```bash
pdfinfo 04-sistema-de-apresentacoes/outputs/plataforma-estrategica/plataforma-estrategica-pilot.pdf
```

Expected: a non-zero page count, landscape page dimensions, and successful metadata output.

### Task 5: End-to-end validation

**Files:**
- Read-only validation of all created artifacts.

**Security flag:** none

- [x] Confirm `git diff --name-only` contains no source-file modifications.
- [x] Confirm all six source titles appear in HTML and PDF text extraction.
- [x] Open the HTML in a browser and inspect the rendered navigation and chapters.
- [x] Record any renderer limitation without changing source content.

Verification:

```bash
git diff --name-only -- 01-work/documentacao-tecnica/plataforma-de-marca/01-plataforma-estrategica
pdftotext 04-sistema-de-apresentacoes/outputs/plataforma-estrategica/plataforma-estrategica-pilot.pdf - | wc -l
```

Expected: no output from the first command and a positive line count from the second.
