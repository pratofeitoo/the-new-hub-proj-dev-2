---
title: Spine Piloto Mínimo v1 — SEBRAE 28/10 (≤12 entidades / ≤12 métricas)
type: spine-piloto-minimo
status: rascunho
spine_id: SPINE-PILOTO-MINIMO-v1
charter_ref: "[[04-project-management/planos-mestres/HUB_Charter_Piloto_SEBRAE_2026-10-28.md]]"
audit_ref: "[[04-project-management/registros-trabalho/logs-progresso/auditoria-tarefas-executavel-2026-09-05.md]]"
plan_ref: "[[.omo/plans/framework-tarefas-executavel-piloto-vs-plataforma.md#task-3-charter-unico-do-piloto--spine-minimo-sebrae-2810]]"
evento_ancora: 2026-10-28
versao: v1.0
created: 2026-09-05
updated: 2026-09-05
owners: [PF Rezende, Tamara Braga, Marcos]
tags: [spine, piloto, sebrae, dados, mvp, p03]
---

# Spine Piloto Mínimo v1 — SEBRAE 28/10

> **Propósito:** Congelar o **mínimo viável de dados** para operar, medir e decidir o piloto SEBRAE 28/10 sem construir a plataforma completa (25 entidades / 73 métricas / 41 campos). Qualquer entidade/métrica fora desta lista é **deferred para plataforma** e exige PR + justificativa. Base: Auditoria `auditoria-tarefas-executavel-2026-09-05.md` §3 P03 spine + Plano Task 3 + Charter `HUB_Charter_Piloto_SEBRAE_2026-10-28.md`.
> **Regra:** Este piloto **não é piloto pago** — sem instrumento financeiro SEBRAE→HUB para software. Só chamar "piloto pago" com instrumento formal (ver Charter campo 1).

## 1) Entidades mínimas — 12/12 (limite do charter)

| # | Entidade | Definição mínima piloto | PK / chave estável | target_file | evidence_required |
|---|---|---|---|---|---|
| 1 | **fornecedor** | MPE/MEI inscrito no evento; oferta e maturidade via diagnóstico | `fornecedor_id` (UUID HUB) + `cnpj` opcional | `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` §1 | `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` tabela fornecedor + `catalogo-metricas-grafo-P03-T05-v1.md` grafo |
| 2 | **comprador** | Empresa/convidado com demanda de compra; decisor identificado | `comprador_id` (UUID) | `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` §1 | `modelo-logico-fisico-P03-T01-v1.md` tabela comprador |
| 3 | **oportunidade** | Demanda concreta do comprador (ex: brindes, serviço) com janela e orçamento estimado | `oportunidade_id` (UUID) + FK `comprador_id` | `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` §2 | `modelo-logico-fisico-P03-T01-v1.md` §2 relacionamentos 1:N comprador→oportunidade |
| 4 | **inscricao** | Ato de inscrição do fornecedor no evento (consentimento incluso) | `inscricao_id` + FK `fornecedor_id` + `evento_id=SEBRAE-2026-10-28` | `01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md` § inscricao | `envelope-evento-schema-P03-T03-v1.md` schema + `matriz-dados-finalidade-P03-T08-v1.md` linha inscricao/consentimento |
| 5 | **diagnostico** | Avaliação Divercidade mínima (maturidade, prontidão, lacuna) | `diagnostico_id` + FK `fornecedor_id` + `valid_from/to` | `01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md` + `modelo-logico-fisico-P03-T01-v1.md` § diagnostico | `taxonomia-estados-valor-P03-T07-v1.md` + `modelo-logico-fisico-P03-T01-v1.md` § diagnostico |
| 6 | **match** | Par fornecedor↔oportunidade qualificado por curadoria (manual no piloto) | `match_id` + FK `fornecedor_id` + FK `oportunidade_id` + `responsavel_curadoria` | `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` §3 | `templates-linhagem-evidencias-P03-T06-v1.md` template match + log `06-relatorios-validacao/match-log-2026-10-28.csv` |
| 7 | **reuniao** | Encontro fornecedor–comprador no evento (ou virtual follow-up) | `reuniao_id` + FK `match_id` + `occurred_at` | `01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md` § reuniao | `envelope-evento-schema-P03-T03-v1.md` + `06-relatorios-validacao/reuniao-log-2026-10-28.csv` |
| 8 | **proposta** | Proposta comercial enviada pós-reunião | `proposta_id` + FK `reuniao_id` + `valor_proposto` | `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` §4 | `dicionario-fisico-mapping-P03-T04-v1.md` linha proposta + `06-relatorios-validacao/proposta-contrato-log.csv` |
| 9 | **contrato** | Contrato fechado (ou pedido de compra) | `contrato_id` + FK `proposta_id` | `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` §4 | `taxonomia-estados-valor-P03-T07-v1.md` estado `realizado` + `06-relatorios-validacao/proposta-contrato-log.csv` |
| 10 | **receita_reportada** | Valor financeiro reportado (receita fornecedor ou economia comprador) | `receita_id` + FK `contrato_id` + `valor_reportado` + `moeda=BRL` | `01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1.md` § receita | `taxonomia-estados-valor-P03-T07-v1.md` + `catalogo-metricas-grafo-P03-T05-v1.md` métrica receita |
| 11 | **consentimento** | Registro LGPD por finalidade (inscrição, diagnóstico, match, relatório) | `consentimento_id` + FK `fornecedor_id` + `finalidade` + `base_legal=consentimento` | `01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md` | `matriz-dados-finalidade-P03-T08-v1.md` § matriz + `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/acordo-cooperacao-SEBRAE-HUB-2026-10-15.md` |
| 12 | **historico_alteracoes** | Trilha de auditoria mínima (quem, quando, o que mudou) | `alteracao_id` + `entity_ref` + `actor` + `occurred_at/recorded_at` | `01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md` | `templates-linhagem-evidencias-P03-T06-v1.md` + `fluxos-linhagem-replay-dsar-P03-T09-v1.md` § auditoria |

> **Envelope mínimo:** Toda mutação acima gera evento canônico em `envelope-evento-schema-P03-T03-v1.md` com `event_id`, `event_type`, `occurred_at` (UTC), `recorded_at` (UTC), `source_system`, `actor`, `entity_ref`, `payload_minimo`, `consentimento_id`. Replay = reprocessar envelope ordenado por `occurred_at`.

## 2) Métricas mínimas — 12/12 (funil + operação + qualitativo)

| # | Métrica | Fórmula / definição | target_file | evidence_required |
|---|---|---|---|---|
| 1 | **inscritos** | `count(inscricao where evento=2026-10-28)` | `01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md` § inscritos | `06-relatorios-validacao/metrica-inscritos-2026-10-28.csv` + `envelope-evento-schema-P03-T03-v1.md` |
| 2 | **qualificados** | `count(fornecedor where diagnostico.maturidade >= threshold)` | `catalogo-metricas-grafo-P03-T05-v1.md` § qualificados | `modelo-logico-fisico-P03-T01-v1.md` + `taxonomia-estados-valor-P03-T07-v1.md` |
| 3 | **matches** | `count(match where evento=2026-10-28)` | `catalogo-metricas-grafo-P03-T05-v1.md` § matches | `06-relatorios-validacao/match-log-2026-10-28.csv` |
| 4 | **reunioes_realizadas** | `count(reuniao where status=realizada)` | `catalogo-metricas-grafo-P03-T05-v1.md` § reunioes | `06-relatorios-validacao/reuniao-log-2026-10-28.csv` |
| 5 | **propostas_enviadas** | `count(proposta where enviada=true)` | `catalogo-metricas-grafo-P03-T05-v1.md` § propostas | `06-relatorios-validacao/proposta-contrato-log.csv` |
| 6 | **contratos_fechados** | `count(contrato where assinado=true)` | `catalogo-metricas-grafo-P03-T05-v1.md` § contratos | `taxonomia-estados-valor-P03-T07-v1.md` + `proposta-contrato-log.csv` |
| 7 | **receita_reportada_total** | `sum(receita_reportada.valor_reportado)` | `catalogo-metricas-grafo-P03-T05-v1.md` § receita | `06-relatorios-validacao/receita-reportada-2026-11-28.csv` |
| 8 | **esforco_h_por_fornecedor** | `sum(horas_operacao) / count(inscritos)` | `01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md` § esforço | `06-relatorios-validacao/esforco-h-2026-11-28.csv` (log Tamara/Pedro/Marcos) |
| 9 | **esforco_h_por_reuniao** | `sum(horas_curadoria+evento+followup) / count(reunioes)` | `templates-linhagem-evidencias-P03-T06-v1.md` § esforço | `esforco-h-2026-11-28.csv` |
| 10 | **satisfacao_fornecedor** | `avg(CSAT 1-10 fornecedor) + NPS` | `catalogo-metricas-grafo-P03-T05-v1.md` § satisfacao | `06-relatorios-validacao/pesquisa-satisfacao-fornecedor-2026-11-28.csv` |
| 11 | **satisfacao_comprador** | `avg(CSAT 1-10 comprador)` | `catalogo-metricas-grafo-P03-T05-v1.md` § satisfacao | `06-relatorios-validacao/pesquisa-satisfacao-comprador-2026-11-28.csv` |
| 12 | **intencao_repetir** | `count(resposta=sim)/count(respostas)` fornecedor e comprador | `catalogo-metricas-grafo-P03-T05-v1.md` § intencao | `pesquisa-satisfacao-*.csv` campo `intencao_repetir` |

> **Taxas derivadas (sem métrica extra):** `taxa_match = matches/qualificados`, `taxa_reuniao = reunioes/matches`, `taxa_proposta = propostas/reunioes`, `taxa_contrato = contratos/propostas`, `taxa_conversao_ponta_a_ponta = contratos/inscritos`. Reportadas no relatório 28/11 mas não contam no limite 12.

## 3) Envelope mínimo — campos obrigatórios por evento

| Campo | Tipo | Obrigatório | target_file | evidence_required |
|---|---|---|---|---|
| `event_id` | UUID | sim | `envelope-evento-schema-P03-T03-v1.md` § envelope | `envelope-evento-schema-P03-T03-v1.md` schema validado |
| `event_type` | enum (inscricao/diagnostico/match/reuniao/proposta/contrato/receita/consentimento) | sim | `envelope-evento-schema-P03-T03-v1.md` | `envelope-evento-schema-P03-T03-v1.md` testes contrato+replay |
| `occurred_at` | ISO8601 UTC | sim | `envelope-evento-schema-P03-T03-v1.md` | `fluxos-linhagem-replay-dsar-P03-T09-v1.md` § replay |
| `recorded_at` | ISO8601 UTC | sim | `envelope-evento-schema-P03-T03-v1.md` | `templates-linhagem-evidencias-P03-T06-v1.md` |
| `source_system` | string (hub-mvp / sebrae-inscricao / manual) | sim | `envelope-evento-schema-P03-T03-v1.md` | `dicionario-fisico-mapping-P03-T04-v1.md` |
| `actor` | pessoa nominal (Tamara/Marcos/PF Rezende/Bruno/sistema) | sim | `templates-linhagem-evidencias-P03-T06-v1.md` | `fluxos-linhagem-replay-dsar-P03-T09-v1.md` |
| `entity_ref` | FK para entidade afetada | sim | `modelo-logico-fisico-P03-T01-v1.md` | `modelo-logico-fisico-P03-T01-v1.md` cardinalidade |
| `consentimento_id` | UUID (quando dado pessoal) | condicional | `matriz-dados-finalidade-P03-T08-v1.md` | `matriz-dados-finalidade-P03-T08-v1.md` |
| `payload_minimo` | JSON com campos da entidade (sem PII desnecessário) | sim | `dicionario-fisico-mapping-P03-T04-v1.md` | `dicionario-fisico-mapping-P03-T04-v1.md` mapping 41→12 campos piloto |

## 4) Deferred para Plataforma — o que NÃO entra no piloto

> **Regra de congelamento:** Itens abaixo permanecem em `99-archive/superado/` ou `02-review/bloqueado/` até decisão pós-piloto 05/12/2026. Adicionar ao piloto exige PR com justificativa + `evidence_required` + aprovação PF Rezende + Tamara Braga.

| Item deferred | Por que não entra agora | Onde vive (plataforma futura) |
|---|---|---|
| **Selo HUB** (certificação, Charter independência, auditoria externa) | Requer `GOV-003` + independência jurídica + auditoria; sem valor no piloto de 30 fornecedores | `P04-T03` + `HUB_Blueprint_Governanca_e_Juridico.md` (99-archive) |
| **Marketplace aberto** (liquidez, busca pública, ranking) | Piloto é curadoria manual fechada; marketplace exige escala e governança | `P02` + `P05` + `HUB_Blueprint_Produto_e_Capacidades.md` |
| **IA autônoma** (matching automático, scoring, recomendação, survivorship ML) | Piloto usa match manual/curado; IA só com dataset validado pós-piloto | `P03-T02` identidade + `P05-T03` mapa identidade |
| **Benchmarks públicos** (comparativos anonimizados, ranking setorial) | Sem base histórica; publicar sem N estatístico induz erro | `P03-T05` catálogo 73 métricas (completo) |
| **Multi-ecossistema** (vários SEBRAEs, federações, white-label multi-tenant) | Piloto é single-tenant SEBRAE-SP/Ginga; multi-tenant exige tenancy/IAM completo | `P02-T03` tenancy + `P05-T05` threat model |
| **73-12 = 61 métricas restantes** (NRR, ARR, MRR, churn, LTV, CAC, etc.) | Métricas SaaS só com recorrência comprovada; piloto mede funil + esforço | `P03-T05` + `P06-T06` dicionário KPIs financeiros |
| **White-label** (marca própria por ecossistema) | Requer `BRD-001/BRD-003` + arquitetura de marca; sem demanda validada | `P06-T11` arquitetura marca |
| **41-12 campos físicos restantes** + linhagem ponta a ponta completa + DSAR automatizado + replay total + reconciliação multi-fonte | Piloto usa 12 campos + envelope mínimo + DSAR manual + XLSX reconstruído manualmente | `P03-T04` dicionário físico + `P03-T09` fluxos completos + `P04-T06` testes retenção |
| **Integrações profundas** (SAP, Gupy, Qulture, Petronect) + **SLOs/on-call/runbooks** + **threat model completo** | Sem contrato de integração assinado; infra piloto = Hostinger single VPS | `P05-T02` contratos + `P05-T06` SLOs + `P05-T05` threat model |
| **Modelo financeiro 3 cenários / tranches / runway** (FIN-003/006) | Sem custo unitário real; só após relatório 28/11 com esforço/h auditado | `P06-T02` + `P06-T05` |

**Referências cruzadas:**
- Charter: `HUB_Charter_Piloto_SEBRAE_2026-10-28.md` campos 6–10 definem coorte, problema, IN/OUT, dados e métricas acima.
- Auditoria: `auditoria-tarefas-executavel-2026-09-05.md` §2 P03 25 entidades/73 métricas/41 campos como spine completo da plataforma (deferred); §4 top offenders P03-T01/T04/T08/T09 como spine piloto.
- Plano Task 3: `.omo/plans/framework-tarefas-executavel-piloto-vs-plataforma.md` Task 3 AC2 — lista entidades/campos/métricas mínimas com `target_file` e `evidence_required`; AC3 — deferred list explícita.
- Transcript SEBRAE 02-09-2026 §3–§4: base como MVP, LGPD/acordo cooperação, sem verba direta por licitação (não é piloto pago).

**Verificação:**
```bash
grep -n "a desi""gnar" 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md  # == 0 (quebrada)
grep -c "^| [0-9]" 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md  # entidades 12 + métricas 12
ls 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
```
