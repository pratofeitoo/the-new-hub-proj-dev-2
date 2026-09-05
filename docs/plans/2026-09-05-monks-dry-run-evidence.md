# Monks Synthetic Dry-run Evidence Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers-optimized:subagent-driven-development (recommended) or superpowers-optimized:executing-plans to implement this plan task-by-task.

**Goal:** Produce deterministic synthetic evidence for the four M0→P03 pilot thresholds while keeping the gate blocked for real promotion.

**Architecture:** A self-contained evidence directory stores synthetic inputs, two synthetic financial cases, five recommendations, a report, and a Python standard-library validator. The validator recomputes all thresholds from the inputs and rejects missing synthetic markers. The gate links the report as rehearsal evidence without checking any promotion criterion.

**Tech Stack:** Markdown, JSON, CSV, Python 3 standard library.

**Assumptions:** The available Monks workbook is planning-only — this plan must not claim real Monks usage, consent, revenue, ROI, recommendation adoption, or approval. It excludes promotion to `03-approved` and excludes changing gate checkboxes.

## Files

- Create `01-work/dados-tech-financas/refinamento-modelo-dados/evidencias-piloto-monks-dry-run/inputs.synthetic.json`: deterministic synthetic counts and IDs.
- Create `01-work/dados-tech-financas/refinamento-modelo-dados/evidencias-piloto-monks-dry-run/financial-cases.synthetic.csv`: two synthetic ledger cases.
- Create `01-work/dados-tech-financas/refinamento-modelo-dados/evidencias-piloto-monks-dry-run/recommendations.synthetic.csv`: five synthetic recommendations.
- Create `01-work/dados-tech-financas/refinamento-modelo-dados/evidencias-piloto-monks-dry-run/validate_dry_run.py`: deterministic validator.
- Create `01-work/dados-tech-financas/refinamento-modelo-dados/evidencias-piloto-monks-dry-run/evidence-report.md`: calculated results and limitations.
- Modify `01-work/dados-tech-financas/refinamento-modelo-dados/promocao-M0-gate-P03-v1.md`: link rehearsal evidence and explicitly preserve blocked status.

### Task 1: Create deterministic synthetic inputs

**Security flag:** none.

**Does NOT cover:** Real Monks data, real consent, production execution, or financial validation.

- [ ] Write `inputs.synthetic.json` with `synthetic: true`, `source_type: "synthetic"`, `fld_m0_total: 24`, `fld_m0_connected: 24`, `kpi_m0_total: 16`, `kpi_m0_connected: 10`, and IDs for five recommendations and two cases.
- [ ] Write the two CSVs with matching IDs, explicit `source_type=synthetic`, ledger totals, and no duplicate case IDs.
- [ ] Write the recommendation CSV with exactly five unique recommendation IDs and KPI references.

### Task 2: Implement and run the validator

**Security flag:** none.

**Does NOT cover:** It validates only synthetic fixture integrity and threshold arithmetic; it cannot establish real-world pilot evidence.

- [ ] Implement `validate_dry_run.py` using `json`, `csv`, and `pathlib` only.
- [ ] Assert the synthetic marker, exact ID joins, uniqueness, 24/24 FLD coverage, 10/16 KPI connectivity, 5 recommendations, and 2 financial cases.
- [ ] Run `python3 01-work/dados-tech-financas/refinamento-modelo-dados/evidencias-piloto-monks-dry-run/validate_dry_run.py`.
- [ ] Expect exit code 0 and `DRY-RUN VALIDATION: PASS`.

### Task 3: Publish report and link it without promotion

**Security flag:** none.

**Does NOT cover:** Checking any of the seven gate criteria or moving anything to `03-approved`.

- [ ] Write `evidence-report.md` with validator command, computed percentages, source classification, run timestamp, and an explicit statement that synthetic cases are not Monks evidence.
- [ ] Add a gate note linking the report under a heading such as `Evidência de ensaio sintético`, while retaining `status: rascunho`, `Estado: BLOQUEADO`, and all seven unchecked criteria.

### Task 4: Verify the evidence boundary

**Security flag:** none.

- [ ] Re-run the validator.
- [ ] Run `git diff --check -- 01-work/dados-tech-financas/refinamento-modelo-dados docs`.
- [ ] Assert the gate still contains `**Estado: BLOQUEADO.**`, seven unchecked criteria, and the synthetic disclaimer.
- [ ] Confirm no files under `03-approved` changed.
