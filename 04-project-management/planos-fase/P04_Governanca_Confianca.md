---
title: P04 — Governança & Confiança
phase: P04
version: 1.0
status: rascunho
layer: blueprint
priority: critica
area: governance-legal
owner:
  - Jurídico (a designar)
  - PF Rezende (interino)
  - Dados (LGPD)
tags:
  - hub
  - fase-projeto
  - P04
  - governanca
  - juridico
  - lgpd
gap_ids:
  - GOV-001
  - GOV-002
  - GOV-003
  - GOV-004
  - GOV-005
  - GOV-006
  - GOV-007
  - GOV-008
  - GOV-009
  - STR-007
bp_tasks:
  - BP-006
related_notes:
  - "[[02-review/01-blueprint/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico]]"
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[04-project-management/planos-mestres/HUB_Plano_Fases_v1]]"
created: 2026-08-26
updated: 2026-08-26
---

# P04 — Governança & Confiança

> [!info] Papel no sequenciamento
> Transforma a arquitetura de negócio (P01) e a semântica de dados (P03 sub-gate A) em estrutura jurídica operável, direitos sobre dados e confiança verificável. Sem P04, P05 (tech) não tem quem seja `controller/operator` e P06 (finanças) não pode segregar receita comercial vs restrita.

## 1. Objetivo

Definir e validar a arquitetura de entidades, governança de dados, propriedade intelectual, responsabilidade civil, controles e independência do Selo HUB — com evidência testável de que os controles operam (não apenas listados).

## 2. Gaps que esta fase fecha

| ID | Gap | Tipo | Condição de aprovação |
|---|---|---|---|
| **GOV-001** | Estrutura 4 unidades: constituição, contas, tributos | governance | Jurídico+Finanças aprovam operação |
| **GOV-002** | Papéis controller/processor, base legal, direitos derivados | governance | LGPD libera todos os fluxos de lançamento |
| **GOV-003** | Independência Selo: carta governança, avaliadores, recursos | governance | Revisão independente aprova modelo Selo |
| **GOV-004** | Alocação responsabilidade (recomendações, matching, dados) | governance | Jurídico+risco aprovam exposição residual |
| **GOV-005** | Evidências de que controles operam | evidence | Portão governança sem lacuna crítica |
| **GOV-006** | Cadeia titularidade PI | definition | Cadeia completa e exigível |
| **GOV-007** | Retenção/DSAR/exclusão em derivados/backups | implementation | Testes passam nos SLAs |
| **GOV-008** | RACI com accountable único | governance | Nenhum crítico com ambiguidade |
| **GOV-009** | Fairness/explicabilidade/drift + human review | validation | Controles modelos aprovados |
| **STR-007** | Autoridade delegada vs fundador | governance | Decisões críticas com dono não-fundador |

> Fora: `GOV-010` (biblioteca alegações públicas — P06).

## 3. Escopo

### Dentro
1. Arquitetura de entidades: HUB marca/estratégia, negócios, instituto, plataforma — constituição, propriedade, contas, tributos, acordos intragrupo, transfer pricing preliminar (GOV-001).
2. Mapa `fluxo de dados → campo → finalidade → base legal → papel controller/processor → retenção → propagação consentimento → exclusão` por fluxo de lançamento (GOV-002).
3. Carta de independência do Selo HUB: nomeação/pagamento avaliadores, conflitos, recursos, desligamento, regras alegação pública, segregação receita comercial (GOV-003).
4. Matriz de responsabilidade civil + seguros + indenizações para recomendações, matching, fornecedores, incidentes dados (GOV-004).
5. Registro PI: marca, C.A.O.S., conteúdo, software, schemas, dados/derivados + acordos contribuidores (GOV-006).
6. Fluxos operacionais: retenção, DSAR, exclusão, portabilidade cobrindo derivados, backups, caches, fornecedores, saídas parceiros — com testes (GOV-007).
7. RACI reconstruído com A único + matriz direitos decisão + tratamento incidentes (GOV-008 + STR-007).
8. Processo inteligência responsável: model cards, fairness, explicabilidade, drift, amostragem, limiares (GOV-009).
9. Testes de controle: evidência de que bloqueios publicação, controles dados/modelos/métricas operam (GOV-005).

### Fora
- Payloads físicos, IAM, secrets, SLOs (P05)
- Biblioteca de alegações externas aprovadas (P06 — consome GOV-005)
- Qualquer afirmação de Selo como produto comercial liberado (permanece `blueprint` até GOV-003 aprovado)

## 4. Entradas

- Sub-gate **S3A** de P03 (entidades + identidade travadas)
- Saída de **P01** (oferta/unidades) + **P02** (papéis/permissões/RACI v1)
- [`HUB_Blueprint_Governanca_e_Juridico.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/02-review/01-blueprint/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md) + [`HUB_Escopo_Estrategico_Documento_Mae_v2_Pronta_Investidor_pt-BR.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/planos-mestres/HUB_Escopo_Estrategico_Documento_Mae_v2_Pronta_Investidor_pt-BR.md) §12 (questões jurídico/dados/PI)
- Gaps `GOV-*` + `STR-007`

## 5. Saídas

| Artefato | Onde vive | Camada |
|---|---|---|
| Matriz entidades + acordos intragrupo | `02-review/01-blueprint/governanca-juridico/` + `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` | blueprint→refining |
| Mapa governança dados fluxo a fluxo | mesmo | refining |
| Carta independência Selo + controles operacionais | mesmo + `02-review/01-blueprint/governanca-juridico/` | refining |
| Matriz responsabilidade + seguros | mesmo | refining |
| Registro PI + acordos | mesmo | refining |
| RACI v2 + matriz direitos decisão | `02-review/01-blueprint/governanca-juridico/` + `00-project-control/registro-lacunas/lacunas/GOV-008.md` | refining |
| Testes de controle (evidência operação) | `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` + `02-review/evidencias/` | refining→approval |
| Pacote revisão P04 | `02-review/pacotes/P04-Governanca-Confianca.md` | approval |

## 6. Critérios de saída (gate P04)

- [ ] **G04.1** — Estrutura 4 unidades aprovada por assessoria jurídica + finanças (evidência: parecer/contrato, não slide) (GOV-001).
- [ ] **G04.2** — Para cada fluxo de lançamento: papel controller/processor, base legal, campos necessários, propagação consentimento e retenção/exclusão documentados e liberados por LGPD (GOV-002).
- [ ] **G04.3** — Carta Selo publicada com: nomeação/pagamento avaliadores, impedimentos, conflitos, recursos, validade/renovação, regras comunicação; avaliador não controlado por vendas (GOV-003). Se não atendido, Selo permanece `bloqueado` e não entra em GTM.
- [ ] **G04.4** — Matriz responsabilidade com exposição residual aprovada por Jurídico+risco (GOV-004).
- [ ] **G04.5** — Registro PI completo; cadeia titularidade exigível (GOV-006).
- [ ] **G04.6** — Fluxos retenção/DSAR/exclusão testados ponta a ponta incluindo derivados/backups/caches; SLAs atendidos (GOV-007).
- [ ] **G04.7** — RACI sem ambiguidade + decisões críticas com dono não-fundador e escalonamento (GOV-008 + STR-007).
- [ ] **G04.8** — Processo inteligência responsável com model cards, grupos protegidos, limiares drift/fairness e trilha auditável (GOV-009).
- [ ] **G04.9** — Testes de controle passam e evidência retida — portão governança sem lacuna crítica (GOV-005).

## 7. Tarefas (backlog inicial)

| Tarefa | Gap |
|---|---|
| Contratar arquitetura jurídica/entidades + matriz responsabilidades | GOV-001 |
| Completar mapa governança dados fluxo a fluxo | GOV-002 |
| Elaborar charter independência Selo + controles | GOV-003 |
| Construir matriz responsabilidade + seguros | GOV-004 |
| Criar registro PI + acordos contribuidores | GOV-006 |
| Executar testes ciclo vida + propagação exclusão | GOV-007 |
| Reconstruir RACI + direitos decisão | GOV-008 |
| Estabelecer revisão inteligência responsável | GOV-009 |

## 8. Riscos

| Risco | Mitigação |
|---|---|
| Assessoria genérica sem especialização LGPD/entidades | Contratar assessoria qualificada brasileira antes de fechar G04.1/G04.2 |
| Selo comercializado antes da independência | Gate G04.3 bloqueia qualquer GTM de reconhecimento se não aprovado |
| Dono `unassigned` nos gaps | Atualizar `owner` em cada `lacunas/GOV-*.md` ao criar tarefas P04 |

## 9. Referências
- [`BP-006`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/tarefas/BP-006_HUB_Blueprint_Governanca_e_Juridico.md)
