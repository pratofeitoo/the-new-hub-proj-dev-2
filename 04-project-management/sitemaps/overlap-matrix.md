# Matriz de Comparação — HUB × Business in a Box (live IA)

> **Scope correction v2:** A = approved HUB concept (`03-approved`, 8 modules). B = live authenticated IA of Business in a Box, extracted read-only 2026-09-10 (83 observed routes + 13 switcher apps whose inner nav is not yet dumped).
> Previous sketch-based comparison (WhatsApp concept images, six-lane Shop/Classifieds/Sell grammar) is **retired** — it compared two concept diagrams, neither of which was a sitemap. Row traceability: `mapping-A.csv` × `mapping-B.csv` (B-01…B-99).
> Branch: `wip/meeting-2026-09-10`

## Regra de evidência

- **Definido (A):** exists in the HUB technical spec. Means specified, not built.
- **observed-live (B):** route/label dumped from the logged-in session. Means the page exists in the product, not that it is validated or at scale.
- **not_dumped (B):** listed in the app switcher but inner nav not yet opened. Means unknown — never a gap, never absent.
- **Sobreposição:** only when a HUB module and a BIB app/section do the same job for the same persona. Shared words are not enough.

## Resumo honesto

| HUB module (A) | Business in a Box (B, live) | Leitura segura |
| --- | --- | --- |
| MOD-01 HUB Core + Cockpit (SCR-01) | Dashboard app: Home, Insights, Classic, Activity, Team overview, 10 departments, reports | Strong overlap on executive home + insights + activity; BIB departments are operational units, not KPI scorecards |
| MOD-02 Performance | Work app: projects, sprints, goals, tasks, workload, accountability, costs, alignment | Strong overlap on execution; BIB has no HUB-style KPI lineage, keep as functional not metric equivalence |
| MOD-03 Pessoas e Talentos | Team app: directory, performance, compensation, assets, offboarding + departments HR | Strongest overlap in the whole comparison; hiring/talent ops both sides |
| MOD-04 Clientes e Receita | Departments Sales/Service + Work costs; no dedicated Clients/Revenue module observed | Partial at best; do not claim coverage |
| MOD-05 Fornecedores e Compras | Templates library (contracts, policies) + docs; no supplier marketplace observed | Partial; procurement workflow not evidenced |
| MOD-06 Acadêmico | No Academy app observed; Templates library is the closest surface (3,000+ docs) | Conceptual only; do not equate library with academy |
| MOD-07 Comunidades e Eventos | Chat, Connect, Calendar, Meetings (Create menu) exist as surfaces; inner nav not dumped | Unknown until dump; promising but unverified |
| MOD-08 HUB Impact + ROI (SCR-06) | Insights, Team pulse, Priorities, Progress, All reports, Workload | Functional overlap on reporting; attribution method not compared |
| Personas, perfis, consentimento (N24, GOV) | PF profile, My Profile, Invite Teammate, Time clock, My Timesheet | Overlap on identity/presence; LGPD posture not audited |
| Eventos/ações (Create model) | Create menu: 16 actions (Task, Project, Goal, Dream, Document, Meeting, Event…) | Strong overlap on action vocabulary; Goals/Dreams have no HUB equivalent named |
| Jornada (planos, evidências, selo) | Open the box / Set up your box checklists; Departments with open tasks; reports | Overlap on guided setup + task tracking; no Selo equivalent observed |

## Matriz detalhada com rastreabilidade

| Capability | HUB A | BIB B (live) | Status | Evidência |
| --- | --- | --- | --- | --- |
| Executive home | HUB Core + SCR-01 Cockpit | Dashboard Home, greeting, Company pulse | 🟢 Strong | A: Planilha #10; B: B-10 |
| Insights / analytics | KPI catalog, scorecards | Insights, Classic, Activity | 🟡 Functional | A: MOD-01; B: B-11…B-13 |
| Departments / business units | Personas per area | 10 departments with open-task cards | 🟢 Strong | B: B-15…B-25 |
| Task / project execution | Performance, action plans | Work: tasks, projects, sprints, goals, dreams | 🟢 Strong | B: B-30…B-49 |
| People / talent | MOD-03 | Team: directory, performance, compensation, offboarding | 🟢 Strongest | B: B-50…B-69 |
| Time tracking | (implied in performance) | Time clock, My Timesheet, team Timesheet | 🟢 B concrete | B: B-06, B-54, B-61 |
| Templates / documents | Glossary, dictionary (FLD) | Templates library, 16 sections, doc pages | 🟡 Adjacent | B: B-71…B-86 |
| Reports | ROI, HUB-04 | Pulse, Priorities, Progress, All reports, Workload | 🟡 Functional | B: B-26…B-29, B-43…B-45 |
| Goals / dreams vocabulary | (no equivalent named) | Goals, Dreams as first-class nav | 🟡 B-only concept | B: B-37, B-38 |
| Community / events | MOD-07 | Chat, Connect, Calendar, New Meeting/Event/Channel | ⚪ Unknown | B: B-87, B-88, B-90, B-03 |
| Clients / revenue | MOD-04 | Sales/Service departments, Costs | 🟡 Partial | B: B-23, B-24, B-47 |
| Suppliers / procurement | MOD-05, SCR-08 | Templates contracts; no marketplace observed | 🟡 Partial | B: B-72…B-78 |
| Academy / learning | MOD-06 | No Academy surface; library closest | ⚪ Not observed | B: B-71 (closest) |
| Account / billing | Personas/permissions | Account app, Upgrade, Invite (inner nav not dumped) | ⚪ Unknown | B: B-98, B-06 |
| BI layer (Drive/Docs/Sheets) | Dicionário, integrações | Drive, Docs, Sheets apps (inner nav not dumped) | ⚪ Unknown | B: B-92…B-94 |

## O que mudou nesta versão

1. B is no longer concept art. Every B claim resolves to a route in `mapping-B.csv`.
2. The six comparison lanes are gone. Apps are the structure.
3. Shared routes (`/work/reports/*` under Dashboard and Work) are real cross-links, not mapping errors.
4. Route/label mismatches are recorded, not hidden: Administration → `management`, Products → `product`.
5. Thirteen apps remain `not_dumped`. The honest next step is a second 20-minute dump pass, not a verdict.

## O que não dizer na reunião

- Não dizer que os produtos são iguais — sobreposição funcional não é equivalência.
- Não dizer que o BIB não tem algo que está apenas `not_dumped` (Calendar, Chat, Connect, BizAI, Drive, Docs, Sheets, Notes, Links, Contacts, Account, Plan, Inbox).
- Não apresentar especificação HUB como funcionalidade construída.
- Não tratar este sitemap como auditoria de escala, usuários, receita ou maturidade LGPD — é IA de navegação, nada além disso.

## Próximo passo proposto

1. Dump pass 2 (20 min, same read-only method): Calendar, Chat, Inbox, Connect, BizAI, Drive, Docs, Sheets, Notes, Links, Contacts, Account, Plan + Search-palette results + Team Settings.
2. Then map HUB screens (SCR-01…SCR-09) 1:1 against BIB routes and mark build/buy/adapt per screen.
3. Only then estimate effort. No timeline claim until step 2 is done.
