---
title: P03-T06 — Templates de linhagem + registro de evidências
task_id: P03-T06
phase: P03
status:
  - em-revisao
priority: critica
area: data-intelligence
layer: refining
owner:
  - Dados (a designar)
gap_ids:
  - DAT-004
dependencies:
  - P03-T05
target_file: 02-refinement/refinamento-modelo-dados/modelo-indicadores/
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-004]]"
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-01T19:26:14.742-03:00
---

# P03-T06 — Templates de linhagem + registro de evidências

## Objetivo
Construir templates `origem→métrica→ação→resultado→valor` e registro de evidências conectando Árvore de Valor→Simulador ROI→Dashboard.

## Entregável
Templates + 1 caminho financeiro ponta a ponta demonstrado com evidência reproduzível, como insumo de refinamento e rastreabilidade.

## Dependências
- [[04-project-management/tarefas/P03-T05_Catalogo_Metricas_Grafo|P03-T05]]

## Critério de refinamento (G03.C2)
Linhagem reproduzível publicada para revisão; o registro de evidências não constitui aceite financeiro, aprovação final ou liberação para produção.

## Registros
- [[00-project-control/registro-lacunas/lacunas/DAT-004]]

## Execução

- **Entregável produzido:** [[02-refinement/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1|templates-linhagem-evidencias-P03-T06-v1.md]] — templates `origem→métrica→ação→resultado→valor` com campos `run_id`/`formula_version`/`evidence_id` + registro evidências (`origin/captured_at/consent/reviewer/quality`) + 1 caminho financeiro ponta a ponta `PES-02 (3.2→4.1) → PRO-05 → RH-06 (45d→32d) → FIN-01 R$ 18.500 influenciado` com pseudocódigo reprodutível e regra anti-dupla contagem.
- **Conexão:** Árvore `produtividade` → Simulador H8 (benefício bruto) → Dashboard `Operações → Produtividade` com `period/cohort/definition_version`.
- **Resultado:** linhagem `HRIS_001 → person_id=hub_p_001 → run_pes02_001 → run_rh06_001 → contract_id=c_001` auditável; valor permanece `influenciado` (não `realizado`).
- **Próximo:** promover para `validado` com protocolo holdout e aprovação Finanças+Gov Dados (G03.C3).

## Verificação G03.C2 — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| Templates com `run_id`/`formula_version` | ok | §1–2 do rascunho |
| 1 caminho financeiro reproduzível | ok | §3 tabela 5 passos + pseudocódigo |
| Sem aceite financeiro implícito | ok | estado `influenciado`, não `realizado` |

> **Status:** `em-revisao` — templates para validação; `DAT-004` aberto até `G03.C3`.
