# Specimen B Inventory — Deep Wiki (The New HUB / Branch 01)

> Source: `../The New HUB/Branch 01/run-01-source/` — 14 CSV tabs + 6 research docs + analysis layer
> Extracted: 2026-09-10 on `wip/meeting-2026-09-10` | Sprint 1B
> Each tab = 1 _analysis.md summary read; no raw CSV values invented

## 1. Tab Inventory (14 tabs → sitemap lane hypothesis)

| Tab | Title | Rows/Signals | What It Holds | Sitemap Lane Hypothesis |
|---|---|---|---|---|
| 00_Leia-me | README conceito | 1 index doc | Tese `pessoas → decisões → resultados → impacto financeiro` + navegação 01→14 | **Home** (thesis block) |
| 01_Mapa_Visual | Mapa neural | 25 lines, 7 stages | Fluxo `FONTES → IDENTIDADES → SINAIS → INTELIGÊNCIA → AÇÃO → RESULTADO → VALOR FINANCEIRO` | **Home → About Us** (concept map) |
| 02_Nos_de_Dados | Nós de Dados | 25 nodes N01-N25, 13 camadas | Entidades: Identidade(4), Estrutura, Demanda, Capacidade(2), Sinal(2), Ação(3), Execução(2), Negócio(2), Resultado(2), Contexto(2), Risco, Comunicação, Qualidade(2) | **Support → Glossary / Dicionário** |
| 03_Conexoes | Conexões | 20 edges E01-E20 | Relações pessoa↔empresa↔competência↔oportunidade↔programa↔indicador↔fornecedor; 32 node types, 20 verbs | **Shop → Intelligence Graph** (underlying) |
| 04_Indicadores_Master | Indicadores | 73 indicators, 8 vertentes | 20 in M0, 27 M1, 26 M2; 44 Resultado/Impacto; evidence mostly descriptive/quasi-exp | **Shop → Product List** (KPI catalog) |
| 05_Arvore_de_Valor | Árvore Valor | 12 alavancas × 8 dimensões | Cadeia causal + fórmula + atribuição + proteção dupla contagem (Produtividade, Retenção, Compras, Risco...) | **Shop → Product Detail** (value proof) |
| 06_Simulador_ROI | Simulador | 4 blocos: premissas, ROI 28.42%, sensibilidade, unit economics | Benefício bruto R$1.22M / Invest R$950k / Líquido R$270k / payback 9.34m (ilustrativo) | **Support → ROI / Return Policy** |
| 07_Visoes_Dashboard | Visões Dashboard | 10 visões | Executiva HUB, Executiva cliente, Pessoas/RH, Compras, Marketing/RevOps — per persona, pergunta, KPIs, cadência | **Home → My Account dashboards** (10 views) |
| 08_Dicionario_Dados | Dicionário | 41 campos, 16 tabelas | dim_person(4), dim_company(3), dim_skill(2) ... + keys, sensibilidade, base legal | **About → Glossary** (canonical FLD) |
| 09_Eventos_Produto | Eventos | 27 events | `Evento → Quando dispara → Objeto → Propriedades → Funil → Valor` — aquisição→ativação→conversão→impacto | **Shop/Sell → Cart/Checkout** (event stream) |
| 10_Integracoes | Integrações | 17 integrations | API/webhook/ELT: tempo real (ATS,LMS,CRM) vs lote diário/mensal (HRIS,ERP); CMP bidirecional, SLA 2s-1h | **Support → Shipping Policy** (integration SLAs) |
| 11_Governanca_LGPD | Governança | Gates M0/M1/M2 | Controles finalidade, base legal, minimização, pseudonimização, baseline, reprodutibilidade, fairness, atribuição | **Support → FAQs / Contact / Return** |
| 12_Roadmap | Roadmap | 3 gates | M0 fundação, M1 operacional, M2 financeiro-atribuição | **About → Testimonials/Glossary roadmap** |
| 13_Matriz_Integracao | Matriz Integração | Matrix | Cross between tabs (which indicator uses which node) | **Support → diagnostic** |
| 14_RACI | RACI | Roles | Owner per gate/indicator | **About → About Us / Roles** |

## 2. Research Docs (6 docs → narrative lanes)

| Doc | Focus | Sitemap clue |
|---|---|---|
| HUB_v2_beachhead_research | Onde começar (beachhead) | Shop → Entry segment |
| HUB_v2_product_mvp_research | O que cabe no MVP | Shop → MVP scope gate |
| HUB_v2_market_competitive_research | Quem mais faz | About → Testimonials / Glossary (competitive) |
| HUB_v2_gtm_partnerships_research | Como vender | Sell → Become a Seller |
| HUB_v2_governance_legal_research | Limites legais | Support → LGPD/Return |
| HUB_v2_financial_model_requirements | Requisitos financeiros | Support → ROI / Margem |

## 3. Flat candidate page list (for sitemap nodes — ~32 candidates, intentionally deeper than A)

```
Home (00_Leia-me thesis)
├─ My Account / Login / Create / Social (top bar)
├─ Shop (04_Indicadores_Master + 05_Arvore + 09_Eventos)
│  ├─ Mapa Visual (01) — neural flow
│  ├─ Indicadores Master (04) — 73 catalog
│  ├─ Árvore de Valor (05) — 12 levers
│  ├─ Produto/Simulador ROI (06)
│  └─ Auth gate (if N25 personal data)
├─ Classifieds (talent/supply discovery, thin in B)
│  └─ (orphan: B has weak classifieds lane — gap vs A MOD-03)
├─ Sell (10_Integracoes as sell infrastructure)
│  ├─ Sellers Account (supplier)
│  ├─ Demand Template (buyer)
│  └─ Approval flows (11_Governanca gates)
├─ About
│  ├─ About Us (beachhead + market research)
│  ├─ Nos de Dados (02) — 25 nodes
│  ├─ Dicionário (08) — 41 fields
│  ├─ Conexões (03) — 20 edges
│  ├─ Testimonials (case stories from research)
│  └─ Glossary / Roadmap (12)
├─ Customer Support
│  ├─ Contact / FAQs (11 Governança)
│  ├─ Visões Dashboard (07) — 10 views
│  ├─ Integrações (10) — 17 systems + SLAs
│  ├─ Eventos (09) — 27 events
│  ├─ Matriz Integração (13)
│  └─ RACI (14)
└─ Blog
   └─ (orphan: B has no community layer — gap vs A MOD-07)
```

**Key observation for toe-to-toe:** B is **data-deep** (25 nodes, 73 indicators, 41 fields, 27 events) but **lane-thin** on Classifieds/Blog (marketplace/community). A is **lane-complete** (8 modules covering all personas) but **shallow** on data dictionary depth. Business OS likely sits in the middle — that's the arbitrage.

**Next:** Map these into `mapping-B.csv` in Sprint 2. Orphans to track: Classifieds + Blog gaps.
