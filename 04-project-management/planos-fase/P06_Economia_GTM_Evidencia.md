---
title: P06 — Economia & GTM com Evidência
phase: P06
version: 1.0
status: rascunho
layer: blueprint
priority: critica
area: business-model
owner:
  - Finanças (a designar)
  - GTM/Mercado (a designar)
  - PF Rezende (interino)
tags:
  - hub
  - fase-projeto
  - P06
  - financas
  - gtm
  - marca
gap_ids:
  - FIN-001
  - FIN-003
  - FIN-004
  - FIN-005
  - FIN-006
  - FIN-007
  - GTM-002
  - GTM-003
  - GTM-004
  - GTM-005
  - GTM-006
  - GTM-007
  - BRD-001
  - BRD-002
  - BRD-003
  - STR-004
  - STR-005
  - STR-006
bp_tasks:
  - BP-001
  - BP-007
related_notes:
  - "[[01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita]]"
  - "[[01-blueprint/marca-mercado/HUB_Blueprint_Marca_e_Mercado]]"
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[04-project-management/planos-fase/P04_Governanca_Confianca]]"
  - "[[04-project-management/planos-fase/P05_Tecnologia_Contratual]]"
  - "[[04-project-management/planos-mestres/HUB_Plano_Fases_v1]]"
created: 2026-08-26
updated: 2026-08-26
---

# P06 — Economia & GTM com Evidência

> [!info] Papel no sequenciamento
> Reconstrói o modelo financeiro, mercado e alegações externas **a partir** das definições travadas em P01/P03/P04/P05. É aqui que ROI ilustrativo (FIN-001) vira registro de premissas com confiança, e GTM hipotético vira rota com evidência. Sem P03+P04+P05, qualquer FIN/GTM é `Hipótese` — não `Comprovado`.

## 1. Objetivo

Produzir economia verificável, modelo de mercado bottom-up, estratégia GTM sequenciada e governança de marca/alegações — todos rastreáveis a definições canônicas e sem contradição com oferta/produto/dados/governança/tech.

## 2. Gaps que esta fase fecha

| ID | Gap | Tipo | Condição de aprovação |
|---|---|---|---|
| **FIN-001** | Premissas ROI ilustrativas→evidência | evidence | Nenhuma ilustrativa apresentada como validada |
| **FIN-003** | Metodologia timing/ramp/payback/atribuição | validation | Modelo passa em reconciliação+review |
| **FIN-004** | Ponte produto→valor→receita | connection | Todo caminho valor tem padrão evidência aceito |
| **FIN-005** | Separação comercial vs instituto restrito | governance | Jurídico+Finanças+Gov aprovam separação |
| **FIN-006** | Capital: tranches, runway, downside | validation | Plano capital casa com roadmap+capacidade |
| **FIN-007** | Definições KPIs ARR/MRR/NRR | launch | Finanças certificam liberação KPIs |
| **GTM-002** | Demanda documentada por rota | evidence | Nenhuma rota = tração sem evidência |
| **GTM-003** | Sequência canais sem concentração | connection | GTM diversificado e mensurável |
| **GTM-004** | Comparação vs alternativas (buyer-ranked) | validation | Posicionamento sobrevive a review comparativa |
| **GTM-005** | Modelo mercado bottom-up | evidence | Transparente e testado por cenários |
| **GTM-006** | Limites concentração parceiros | governance | Governança aprova exposição |
| **GTM-007** | Materiais vendas alinhados a evidência | launch | GTM passa em review evidência+jurídico |
| **BRD-001** | Arquitetura marca entre unidades | connection | Governança marca aprova |
| **BRD-002** | Matriz afirmação-evidência | evidence | Nenhuma afirmação excede estado evidência |
| **BRD-003** | Limites white-label | definition | Produto+Marca+Jurídico aprovam |
| **STR-004/005/006** | Moat, parceiros, categorias | mixed | Alegação moat sustentada ou rebaixada |

## 3. Escopo

### Dentro
1. Registro de premissas com proveniência, fonte, data, confiança, dono (FIN-001) — consome dados P03 + baseline técnico P05.
2. Modelo financeiro reconstruído: cenários conservador/base/otimista, timing, ramp, payback benefício líquido, atribuição sem dupla contagem (FIN-003).
3. Ponte `atividade produto → valor → receita HUB` via árvore valor + estados valor P03 (FIN-004).
4. Separação financeira entidade + transfer pricing + controles fundos restritos (FIN-005).
5. Modelo capital: necessidade, uso recursos, tranches, runway, instrumento, downside (FIN-006).
6. Dicionário KPIs financeiros: ARR/MRR/NRR, coortes, timing, ledger fonte verdade (FIN-007).
7. Modelo mercado bottom-up: contas nomeadas, alcançabilidade, ACV, ativação/renovação (GTM-005).
8. Log evidências por rota GTM (GTM-002) + análise alternativas buyer-ranked (GTM-004) + estratégia canais sequenciada com fallback (GTM-003) + limites concentração (GTM-006).
9. Arquitetura marca + hierarquia + regras white-label (BRD-001/003) + matriz afirmação-evidência + glossário controlado (BRD-002, GTM-007). A governança de idioma/localização (BRD-004) permanece backlog pós-MVP.
10. Teste defensibilidade moat (STR-004) + portfólio parceiros refinado (STR-005) + posicionamento categoria (STR-006).

### Fora
- Novos payloads/integrações (P05)
- Novos controles jurídicos (P04)
- Qualquer afirmação pública de tamanho mercado/preço/tração sem evidência citada (bloqueado até gate P06)

## 4. Entradas

- Gates **P01+P03(S3C)+P04+P05** aprovados (P06 sem eles = hipótese)
- [`HUB_Blueprint_Marca_e_Mercado.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/01-blueprint/marca-mercado/HUB_Blueprint_Marca_e_Mercado.md) + [`HUB_Blueprint_Oferta_e_Arquitetura_Receita.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita.md)
- [`02-refinement/pesquisa/segundo-rascunho-projeto/`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/02-refinement/pesquisa/segundo-rascunho-projeto) (6 pesquisas v2) — tratar como `Observado/Hipótese`, não `Comprovado`
- [`HUB_Mapa_Financeiro_Patrocinadores_Investidores.xlsx`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/05-resources/planilhas) + pitch decks ([`05-resources/apresentacoes/pitch-decks/`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/05-resources/apresentacoes/pitch-decks)) — reconciliar com registro premissas

## 5. Saídas

| Artefato | Onde vive | Camada |
|---|---|---|
| Registro premissas (com confiança + proveniência) | `02-refinement/modelos-financeiros/` + `05-resources/planilhas/` | refining |
| Modelo financeiro reconciliado (3 cenários) | mesmo + `02-refinement/modelos-financeiros/` | refining |
| Modelo mercado bottom-up + testes cenários | `02-refinement/pesquisa/` + `05-resources/conjuntos-dados/` | refining |
| Log evidências GTM por rota | `02-refinement/pesquisa/` | refining |
| Matriz alternativa buyer-ranked | mesmo | refining |
| Arquitetura marca + matriz afirmação-evidência + glossário | `01-blueprint/marca-mercado/` + `02-refinement/refinamento-governanca/` | blueprint→refining |
| Decks/pitch reconciliados com evidência | `05-resources/apresentacoes/` → `03-approval/pacotes-revisao/` | approval |
| Pacote revisão P06 | `03-approval/pacotes-revisao/P06-Economia-GTM.md` | approval |

## 6. Critérios de saída (gate P06)

- [ ] **G06.1** — Registro premissas sem campo `TBD` em premissa crítica; cada premissa tem fonte+data+confiança+dono+próxima evidência (FIN-001).
- [ ] **G06.2** — Modelo financeiro reconciliado (conservador/base/otimista) com metodologia timing/ramp/payback/atribuição aprovada e sem dupla contagem (FIN-003).
- [ ] **G06.3** — Ponte produto→valor→receita demonstrada para pelo menos 1 oferta de lançamento com padrão evidência aceito (FIN-004).
- [ ] **G06.4** — Separação comercial vs instituto restrito aprovada por Jurídico+Finanças+Governança (FIN-005).
- [ ] **G06.5** — Plano capital (tranches+runway+downside) casa com roadmap P01→P07 e capacidade entrega (FIN-006).
- [ ] **G06.6** — KPIs ARR/MRR/NRR com definições, denominadores, coortes, timing e ledger aprovados (FIN-007).
- [ ] **G06.7** — Modelo mercado bottom-up transparente, com contas nomeadas e testes sensibilidade (GTM-005).
- [ ] **G06.8** — Nenhuma rota GTM contada como tração sem log evidência; canais com diversificação mensurável e limites concentração aprovados (GTM-002/003/006).
- [ ] **G06.9** — Posicionamento vs alternativas sobrevive a review comparativa buyer-ranked (GTM-004).
- [ ] **G06.10** — Decks/materiais GTM passam em review evidência+jurídico; nenhuma afirmação excede estado evidência na matriz (GTM-007, BRD-002).
- [ ] **G06.11** — Arquitetura marca + regras white-label aprovadas (BRD-001/003).
- [ ] **G06.12** — Moat ou rebaixado para `Hipótese` ou sustentado com fontes/ciclos aprendizado (STR-004).

## 7. Tarefas

| Tarefa | Gap |
|---|---|
| **P06-T01** — Registro premissas com proveniência | FIN-001 |
| **P06-T02** — Reconstruir modelo financeiro 3 cenários | FIN-003 |
| **P06-T03** — Ponte valor (árvore valor ↔ indicadores) | FIN-004 |
| **P06-T04** — Definir separação comercial vs restrito | FIN-005 |
| **P06-T05** — Modelo capital + tranches | FIN-006 |
| **P06-T06** — Dicionário KPIs financeiros | FIN-007 |
| **P06-T07** — Modelo mercado bottom-up | GTM-005 |
| **P06-T08** — Log evidências rota + análise alternativas | GTM-002, GTM-004 |
| **P06-T09** — Estratégia canais + limites concentração | GTM-003, GTM-006 |
| **P06-T10** — Matriz afirmação-evidência + glossário | BRD-002, GTM-007 |
| **P06-T11** — Arquitetura de marca + regras white-label | BRD-001, BRD-003 |
| **P06-T12** — Teste de defensibilidade (moat institucional + evidência) | STR-004, STR-005, STR-006 |

> **Nota de escopo:** `BRD-004` (governança de idioma, localização e terminologia) é backlog pós-MVP e não compõe o conjunto de gaps/tarefas do gate P06.

## 8. Riscos

| Risco | Mitigação |
|---|---|
| ROI 28,42% tratado como tração investidor | G06.1/G06.2 bloqueiam qualquer deck externo até premissas validadas |
| TAM top-down inflado | Exigir bottom-up com contas nomeadas (GTM-005) |
| Parceiro contado como pipeline | Gate GTM-002: sem acordo escrito, é hipótese |

## 9. Referências
- [`BP-007`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/tarefas/BP-007_HUB_Blueprint_Marca_e_Mercado.md) · [`BP-001`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/tarefas/BP-001_HUB_Blueprint_Oferta_e_Arquitetura_Receita.md)
- [`HUB_Escopo_Estrategico_Documento_Mae_v2_Pronta_Investidor_pt-BR`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/planos-mestres/HUB_Escopo_Estrategico_Documento_Mae_v2_Pronta_Investidor_pt-BR.md) §8, §9, §13
