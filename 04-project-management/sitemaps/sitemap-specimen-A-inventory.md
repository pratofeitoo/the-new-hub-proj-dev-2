# Specimen A Inventory — HUB dev-2 (Approved Concept)

> Source: `03-approved/nucleo-inteligencia/` — Especificação Mestra (20 caps) + Planilha Técnica 15 abas / 185 linhas
> Extracted: 2026-09-10 on `wip/meeting-2026-09-10` | Sprint 1A

## 1. Módulos (Aba 02_MODULOS — 8 rows)

| ID | Módulo | Lane (sitemap) | Parent candidate | Node Type | Phase |
|---|---|---|---|---|---|
| MOD-01 | HUB Core | Home + Intelligence | Home | hub page + engine | MVP |
| MOD-02 | Performance | Shop (teal) - main | Shop | transactional cockpit | MVP |
| MOD-03 | Pessoas e Talentos | Classifieds (blue) - talent marketplace | Classifieds | marketplace | MVP+1 |
| MOD-04 | Clientes e Receita | Shop (teal) - client workspace | Shop / Sell | workspace | MVP |
| MOD-05 | Fornecedores e Compras | Sell (olive) - supply | Sell | marketplace | MVP+1 |
| MOD-06 | Acadêmico | Blog (lavender) - academy | Blog | portal | Fase 2 |
| MOD-07 | Comunidades e Eventos | Blog (lavender) - community | Blog | community/agenda | Fase 2 |
| MOD-08 | HUB Impact | Support (salmon) - ROI | Customer Support | dashboard | MVP |

## 2. Telas / Outputs (Aba 10_TELAS — 9 screens)

| ID | Tela | Lane | Parent | Auth Gate? |
|---|---|---|---|---|
| SCR-01 | Cockpit executivo | Home | Home | No (role-filtered) |
| SCR-02 | Painel do gestor | Shop / Performance | Shop | Hierarchy gate |
| SCR-03 | Minha jornada | Shop / Performance | Shop | Own-data gate |
| SCR-04 | Governança KPI | Support (salmon) | Customer Support → FAQs | Admin gate |
| SCR-05 | Central alertas/decisões | Support | Customer Support | Gestor HUB gate |
| SCR-06 | ROI do HUB | Support | Customer Support → Return/ROI | Sponsor/Finance gate |
| SCR-07 | Diagnóstico de dados | Support | Customer Support → Shipping/Telemetry | Admin gate |
| SCR-08 | Marketplace fornecedor | Sell (olive) | Sell → Sellers Account | Supplier gate |
| SCR-09 | API de indicadores | Support → Technical | Customer Support | Service account |

## 3. Perfis / Gates (Aba 03_PERFIS — 13 personas → 5 auth decisions)

| Gate | Yellow node | Who hits it |
|---|---|---|
| Not Logged In → Log In/Register | Yellow diamond | All public Shop/Classifieds flows |
| Logged In → Role view | Yellow diamond | PER-01 Colaborador vs PER-02 Gestor vs PER-04 Executivo |
| HUB Admin gate | Yellow | PER-06 Gestor HUB (audit log) |
| Supplier/Candidate gate | Yellow | PER-07/08 isolated |
| Governance LGPD gate | Yellow | N24 consent check (FLD-024-026) |

## 4. KPIs (Aba 06_KPIs — 16 MVP-relevant for sitemap labels)

- KPI-PERF-01 Atingimento, KPI-PERF-02 Qualidade meta → shown on SCR-02
- KPI-ALO-01 Alocação faturável, KPI-ALO-02 Receita perdida → Shop value prop
- KPI-FIN-01 Margem → Product Detail economics
- KPI-HUB-01..04 Adoção, Ação, Tempo decisão, ROI → SCR-06 / Home

## 5. Flat candidate page list (for sitemap nodes — 27 candidates)

```
Home
├─ My Account / Login / Create Account / Social Media (top bar)
├─ Shop (MOD-02+MOD-04 lane)
│  ├─ Product List = Performance Scorecards list
│  ├─ Product Detail = KPI Detail + financial lineage
│  ├─ Cart = Action Cart (selected recommendations)
│  ├─ Checkout = Confirm Action Plan (HUB Action)
│  └─ Log In/Register gate
├─ Classifieds (MOD-03 lane)
│  ├─ Classifieds = Talent/Vaga listing
│  ├─ Success Stories = Cases de mobilidade
│  └─ Post a Classified = Publicar vaga / oferta
├─ Sell (MOD-05 lane)
│  ├─ Sellers Account = Supplier Account
│  ├─ Template = Demand/Offer Template
│  └─ Confirmation flows (Post Approved/Rejected → Email)
├─ About (MOD-01 narrative)
│  ├─ About Us
│  ├─ Testimonials
│  └─ Glossary (dicionário canônico FLD-001..047)
├─ Customer Support (MOD-08 + GOV)
│  ├─ Contact Us
│  ├─ FAQs = Governança KPI (SCR-04)
│  ├─ Become a Seller = Onboarding fornecedor
│  ├─ Return Policy = Política de contestação (GOV-08)
│  ├─ Shipping Policy = SLA Integração (INT-01..12)
│  └─ Central Alertas (SCR-05)
└─ Blog (MOD-06+07)
   └─ Blog = Comunidades e Academia feed
```

**Total:** 27 page/gate nodes → target sitemap depth 3-4 matches image-1.png.

**Next:** Map these into `mapping-A.csv` in Sprint 2.
