# Plan: Harmonize 2 Specimens into 1 Sitemap Grammar — 3h Sprint

> **Goal:** Both specimens sharing the **same physical form** (image-1.png grammar) toe-to-toe, so you can run a binary yes/no filter on common vs missing pieces before the meeting.

## 0. Diagnosis — What You Actually Have

| Specimen | Where | Form Today | Natual Sitemap Shape |
|---|---|---|---|
| **A — HUB dev-2 (approved concept)** | `03-approved/nucleo-inteligencia/` | Tables + 20-ch thesis | **MOD-01..08** (Especificação cap.9) + Planilha abas 02_MODULOS / 10_TELAS / 06_KPIs — already normalized, still tabular |
| **B — Deep wiki + Business OS trigger** | `../The New HUB/Branch 01/run-01-source/` | Deep dive wiki: 14 CSV tabs (01_Mapa_Visual → 14_RACI) + 6 research docs + Indicators Workbook (hybrid-correction) | Dense, data-first, not yet visual; Business OS app is the **existence proof** you want to mirror against |

**Problem:** A is conceptual/top-down, B is data-bottom-up. Different vocabularies, same domain. Without a shared visual grammar you can't compare.

**Decision in this plan:** Do **not** merge. Normalize **both into the same sitemap grammar** (the image-1.png language) as two parallel artifacts, then overlay.

---

## 1. Sitemap Grammar (Locked — clone image-1.png)

This is the filter. Both specimens must obey it or the comparison is useless.

```
Home (pink, single root)
 ├─ Shop [teal lane] — Product List → Detail → Cart → (Auth gate) → Checkout
 ├─ Classifieds [blue lane] — Success Stories / Post → (Auth gate) → Template → Confirmation → Reject/Approve
 ├─ Sell [grey/olive lane] — (Auth gate) → Sellers Account → Template → Confirmation → Reject/Approve
 ├─ About [purple lane] — About Us / Testimonials / Glossary
 ├─ Support [salmon lane] — Customer Support → Contact / FAQs / Become Seller / Return / Shipping
 └─ Blog [lavender lane]
Top bar (pink, disconnected): My Account / Login / Create Account / Social Media
Decision nodes (yellow): Not Logged In / Logged In, Post Rejected/Approved
Terminal nodes (darker): Email Sent / Checkout
```

**Rules for translation:**
1.  **Color = Domain lane.** Teal=Transactional, Blue=Content/Classified, Olive=Supply-side, Purple=Institutional, Salmon=Support, Yellow=Gate. Map every HUB module to a lane.
2.  **Hierarchy = Navigation, not org chart.** Every node must be a reachable page/screen, not a concept.
3.  **Yellow diamonds** only for auth or approval gates.
4.  **Arrows = user flow**, not data flow.
5.  Both sitemaps at **same depth (3-4 levels)** — if one is deeper, collapse.

**HUB lane mapping (proposed, validate in step 2.1):**
| Image lane | HUB Module(s) | Why |
|---|---|---|
| Shop (teal) | MOD-02 Performance + MOD-04 Clientes (buy) | Transactional core |
| Classifieds (blue) | MOD-05 Fornecedores + MOD-03 Talentos (discovery) | Marketplace matching |
| Sell (olive) | MOD-05 Supply side + MOD-04 Sell flow | Seller onboarding |
| About (purple) | MOD-01 HUB Core narrative | Institutional |
| Support (salmon) | MOD-08 HUB Impact + GOV-08/09 | Governance & help |
| Blog (lavender) | MOD-07 Comunidades | Content |
| Top bar (pink) | GOV-03/04 Auth + PER-01..13 | Identity |

---

## 2. Execution — 3 Hours, 4 Sprints

You are on `wip/meeting-2026-09-10` in both repos. All work is on that branch. Nothing touches `main`.

### Sprint 1 — Inventory Freeze (30 min) [NOW]

**Owner:** You + me (parallel)
- [ ] **A-freeze:** Extract A node list from `03-approved/nucleo-inteligencia/planilha-tecnica-completa-desenvolvimento/01-source/Planilha_Tecnica_Desenvolvimento_HUB.md` abas 02_MODULOS (8 rows), 10_TELAS (9 screens), 06_KPIs (16). Output: `sitemap-specimen-A-inventory.md` (flat list, 1 line per page candidate).
- [ ] **B-freeze:** Extract B node list from `../The New HUB/Branch 01/run-01-source/99-assets/Indicadores XLSX/01-tabs-csv/` (read each `*_analysis.md` summary line) + `run-01-source/02-research/` headlines. Output: `sitemap-specimen-B-inventory.md`.
- [ ] **Business OS snapshot:** Screenshot or URL of the Business OS app you saw — add as `BusinessOS-reference.md` with 5 bullets: why it felt like HUB. This is your oracle for lane validation.

**Done when:** Two flat lists of ~20-30 candidate pages each exist. No drawing yet.

### Sprint 2 — Normalization Map (45 min)

- [ ] Create `sitemap-grammar.md` — the table above, locked.
- [ ] Map **A** candidates → grammar nodes: e.g., `MOD-02 Performance → Performance Scorecard (under Shop)`, `SCR-01 Cockpit → Home dashboard`, `GOV-04 Consent → Create Account gate`.
- [ ] Map **B** candidates → same grammar: e.g., `01_Mapa_Visual → Home/Map`, `02_Nos_de_Dados → Dicionário (Support lane)`, `04_Indicadores_Master → KPI Catalog (Support)`.
- [ ] Mark **orphans**: candidates that don't map push to `Backlog/Not in grammar` — do not force.

**Done when:** `mapping-A.csv` + `mapping-B.csv` with columns: `source_id | candidate_name | grammar_lane | grammar_parent | node_type (page/gate/email) | status (mapped/orphan)`.

### Sprint 3 — Draw Two Sitemaps (60 min)

**Tool:** Single HTML preview file per specimen (`sitemap-A.html` + `sitemap-B.html`) using flexbox + color tokens from `palette` — renders in Obsidian preview and exports to PNG. No Figma needed; stays in repo.

- [ ] Clone image-1.png layout literally: pink Home top-center, 6 lanes below, yellow gates where auth/approval occurs, salmon Support vertical stack.
- [ ] **A-sitemap:** Render 8 modules as lanes. Prioritize MVP nodes (MOD-01,02,04,08) at full depth, MVP+1 at 2 levels, Fase 2 collapsed to one node.
- [ ] **B-sitemap:** Render deep wiki tabs as same lanes — will look *different* (more data nodes under Support/Shop). That's the point.
- [ ] Export both as PNG to `04-project-management/sitemaps/` for meeting.

**Done when:** Two PNGs open side-by-side and a non-technical person can say "that's the same kind of drawing."

### Sprint 4 — Toe-to-Toe Filter (30 min) + Buffer (15 min)

- [ ] Create `overlap-matrix.md` — simple 3-column table: `Page/Gate | In A? (yes/no) | In B? (yes/no)`. Color green=both, yellow=one, grey=neither.
- [ ] Write **5-line executive filter** for the meeting: (1) What Business OS proved is already built, (2) Where HUB is ahead, (3) Where HUB is behind, (4) Riskiest gap, (5) What you will decide today.
- [ ] Commit all on `wip/meeting-2026-09-10`, push branch. If asked live, you can `git diff main -- overlap-matrix.md`.

**Done when:** You can answer in the meeting without scrolling: "Do we have X? — Yes/No, and here's where it sits."

---

## 3. Out of Scope (Deliberately Not Today)

- No merging of repos. No schema migration. No code.
- No perfect fidelity to HUB Core engines (HUB Connect/Graph/Goals) — today is **navigation**, not architecture.
- No exhaustive Business OS reverse-engineering — just the sitemap you can see.

## 4. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| B wiki is too dense (185 lines + 14 tabs) | Timebox to analysis.md summaries only; details go to orphans backlog |
| Temptation to add a new color/lane | FORBIDDEN today — use the 6 lanes only; propose new lane in meeting, not now |
| Over-polish the drawing | 60 min hard stop. Better two coarse maps that match than one perfect map |
| Meeting wants detail | Each node links back to source file: click from sitemap → `Planilha ... MD#02-modulos` or `01_Mapa_Visual_analysis.md` |

## 5. Immediate Next Command (After Plan Approval)

```bash
git checkout wip/meeting-2026-09-10
mkdir -p 04-project-management/sitemaps
# Sprint 1 starts: I extract both inventories in parallel while you drop Business OS screenshot
```

**Verify:** `ls 04-project-management/sitemaps/` shows `sitemap-A.html`, `sitemap-B.html`, `overlap-matrix.md`, `BusinessOS-reference.md`.

---

Plan author: Sisyphus • Branch: `wip/meeting-2026-09-10` • For: 3h pre-meeting sprint
