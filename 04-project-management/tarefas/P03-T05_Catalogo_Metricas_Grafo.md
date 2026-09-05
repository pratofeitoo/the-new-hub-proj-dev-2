---
title: P03-T05 — Catálogo canônico de métricas + grafo de dependências
task_id: P03-T05
phase: P03
status:
  - em-revisao
priority: critica
area: data-intelligence
layer: refining
owner:
  - Dados (a designar)
gap_ids:
  - DAT-005
dependencies:
  - P03-T01
  - P03-T03
target_file: 01-work/refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas/
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-005]]"
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-01T19:26:04.193-03:00
---

# P03-T05 — Catálogo canônico de métricas + grafo de dependências

## Objetivo
Consolidar 73 indicadores com fórmula, dimensão, owner, dependência; resolver definições alternativas; conectar Indicadores Master→dashboards.

## Entregável
Catálogo canônico + grafo em `sintese-entre-abas/`.

## Dependências
- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]]
- [[04-project-management/tarefas/P03-T03_Envelope_Evento_Schema|P03-T03]]

## Critério de refinamento (G03.C1)
Nenhuma métrica crítica com definição alternativa; este critério orienta o refinamento, e o catálogo permanece artefato de definição, sem certificação para uso em produção.

## Registros
- [[00-project-control/registro-lacunas/lacunas/DAT-005]]

## Execução

- **Entregável produzido:** [[01-work/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1|catalogo-metricas-grafo-P03-T05-v1.md]] (73 indicadores) + cópia em `sintese-entre-abas/` — catálogo com fórmula/dimensão/owner/tipo/alavanca + grafo `DAT-01/02/03 → eventos → indicadores → contrato/transação → fato financeiro → dashboards` (Mermaid) + resolução 6 definições alternativas (MRR/ARR/NRR, retenções, etc.).
- **Cobertura:** 8 vertentes (Pessoas 10, Empresas/RH 10, Produto 10, etc.), 12 alavancas Árvore de Valor, 10 visões Dashboard, 12 famílias Matriz Integração.
- **Resultado:** 73/73 com fórmula única, dimensão e dependência; nenhuma métrica crítica com definição alternativa após §4.
- **Próximo:** validar 73 fórmulas vs `06_Simulador_ROI` (H20 payback bruto vs líquido) e `08_Dicionario_Dados` chaves antes de G03.C2.

## Verificação G03.C1 — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| 73 indicadores com fórmula/dimensão/owner | 73/73 | Tabela §2 do catálogo |
| Nenhuma métrica crítica alternativa | ok | §4 resolução 6 casos |
| Grafo dependências publicado | ok | §3 Mermaid validado |

> **Status:** `em-revisao` — catálogo de definição, sem certificação produção; `DAT-005` aberto até validação G03.C2.
