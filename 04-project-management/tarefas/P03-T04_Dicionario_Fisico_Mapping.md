---
title: P03-T04 — Dicionário físico (≈41 campos) mapeado para entidades canônicas
task_id: P03-T04
phase: P03
status:
  - em-revisao
priority: alta
area: data-intelligence
layer: refining
owner:
  - Dados (a designar)
gap_ids:
  - DAT-010
dependencies:
  - P03-T01
  - P03-T03
target_file: 02-refinement/refinamento-modelo-dados/modelo-indicadores/
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-010]]"
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-01T19:25:55.227-03:00
---

# P03-T04 — Dicionário físico (≈41 campos) mapeado para entidades canônicas

## Objetivo
Mapear dicionário de 41 campos em 16 tabelas para entidades canônicas; resolver contradições `abas-origem/` vs `03-csv-corrigido/` em `04-registro-correcoes/`.

## Entregável
Tabela de mapeamento + registro de correções auditável.

## Dependências
- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]]
- [[04-project-management/tarefas/P03-T03_Envelope_Evento_Schema|P03-T03]]

## Critério de refinamento (G03.B2)
Contradições registradas; linhagem dos artefatos inequívoca para revisão. Este critério orienta o refinamento e não constitui aprovação final nem prontidão de produção.

## Registros
- [[00-project-control/registro-lacunas/lacunas/DAT-010]]

## Execução

- **Entregável produzido:** [[02-refinement/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1|dicionario-fisico-mapping-P03-T04-v1.md]] — 41 campos em 16 tabelas físicas mapeados para 25 entidades canônicas (P03-T01 v1), com PK/FK, entidade.atributo e temporalidade; diagrama físico simplificado.
- **Contradições resolvidas:** `abas-origem` (12 cols) vs `03-csv-corrigido` (16 cols) — 4 colunas **Retenção, Controle de acesso, Consentimento/revogação, Evidência** adicionadas como mínimo bloqueador G03.B2; registradas em [[03-approval/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/04-registro-correcoes/corrections.csv|corrections.csv]] como `DAT010-001` a `DAT010-004` (`proposed`).
- **Resultado:** nenhum campo sem entidade canônica; linhagem `origem → corrigido → canônico` inequívoca para revisão.
- **Próximo:** aprovação Dados+Tech das 4 correções e `06-relatorios-validacao/entity-key-validation` antes de promover XLSX.

## Verificação G03.B2 — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| 41 campos mapeados | 41/41 | Tabela §2 do rascunho |
| 16 tabelas → entidades | ok | §1 resumo |
| Contradições registradas | 4/4 | DAT010-001..004 em `corrections.csv` |
| Linhagem inequívoca | ok | `abas-origem` (espelho) vs `03-csv-corrigido` (fonte) |

> **Status:** `em-revisao` — rascunho para revisão Dados+Tech; `DAT-010` blocking permanece até aprovação.
