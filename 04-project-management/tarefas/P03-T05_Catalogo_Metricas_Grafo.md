---
title: P03-T05 — Catálogo canônico de métricas + grafo de dependências
task_id: P03-T05
phase: P03
status:
  - on-hold
priority: critica
area: data-intelligence
layer: refining
owner:
  - PF Rezende (interino)
accountable: PF Rezende
blocked_reason: aguardando nomeação Dados
blocked_until: 2026-10-15
gap_ids:
  - DAT-005
dependencies:
  - P03-T01
  - P03-T03
target_file: 01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-005]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M03 — Dados Completos (libera P06)]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1]]"
evidence_required:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas/
  - 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:43:21.661-03:00
---

# P03-T05 — Catálogo canônico de métricas + grafo de dependências

## Objetivo

Consolidar catálogo de 73 indicadores (G03.C1 / DAT-005 — M03.C) com fórmula, dimensão, owner e dependência; resolver 6 definições alternativas; publicar grafo `DAT-01/02/03→eventos→indicadores→fato financeiro→dashboards`; conectar Indicadores Master→dashboards.

## Entregável

`01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md` (§1 resumo 8 vertentes + §2 catálogo 73 linhas com fórmula/unidade/dimensões/owner/tipo/alavanca + §3 grafo Mermaid + §4 resolução 6 alternativas) + cópia/excertos em `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas/`. Paths idênticos a `target_file` e `evidence_required`.

## Acceptance criteria (G03.C1 — DAT-005)

- [ ] 73/73 indicadores com fórmula, unidade, dimensões/cortes, owner, tipo (Leading/Lagging) e alavanca financeira + 12 alavancas Árvore de Valor + 10 visões Dashboard — tabela §2 do `target_file` (8 vertentes: Pessoas 10, Empresas/RH 10, Produto 10, etc.); verificado por `grep -c "PES-\|RH-\|COM-\|ENT-\|MKT-\|PRO-\|FIN-\|DAT-"` ≥73
- [ ] Grafo dependências publicado e validado (Mermaid §3) — cadeia canônica `DAT-01/02/03 (completude/atualidade/identidade) → eventos/match → indicadores 73 → contrato/transação → fato financeiro deduplicado → dashboards/Simulador ROI` + 12 famílias Matriz Integração; `sintese-entre-abas/indicator-financial-consistency` linkada
- [ ] 6/6 definições alternativas críticas resolvidas — §4 do `target_file`: MRR/ARR/NRR (anualização vs variação), retenções (4 retenções por entidade), time-to-value vs time-to-productivity, produtividade vs receita, pipeline vs receita, risco evitado ex ante vs ex post — nenhuma métrica crítica mantém definição alternativa após §4

> **Pilot vs Full:** Piloto SEBRAE 28/10 requer apenas subset — 12 métricas mínimas (funil + operação + qualitativo: inscritos→receita_reportada + esforço + satisfação) — ver `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §2 (12/12 com fórmula/dimensão + taxas derivadas). Plataforma full = 73/73 indicadores + 12 alavancas + 10 dashboards + grafo completo. Este critério valida full (73/73 + 6/6); piloto pode operar com 12/12 mas evidência full permanece obrigatória para G03.C1. Catálogo é artefato de definição, sem certificação produção (`blocking: no` neste lote).

## Evidence required

- `01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md` (§1 resumo 73 em 8 vertentes + §2 catálogo completo fórmula/dimensão/owner/tipo/alavanca + §3 grafo Mermaid + §4 6 resoluções + §5 pendências)
- `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas/` (`indicator-financial-consistency` + `Matriz_Convergencia_73_16_25_23_12_8` — 73→16 KPIs, 12 alavancas, 10 visões)
- `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §2 (subset piloto 12 métricas + taxas derivadas — diferenciação pilot vs full)

## Verification

- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md && grep -c "PES-\|RH-\|COM-\|ENT-\|MKT-\|PRO-\|FIN-\|DAT-" 01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md | awk '{print ($1>=73)?"PASS 73/73":"FAIL count="$1}' && grep -c "Owner\|Alavanca\|Leading\|Lagging" 01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md`
- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas/ 2>&1 | head -5 && grep -c "flowchart\|DAT-01\|fato financeiro\|dashboards" 01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md | awk '{print ($1>=3)?"PASS grafo":"FAIL"}' && grep -E "MRR|ARR|NRR|retenção|time-to" 01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md | head -3`
- [ ] `grep -c "a desi""gnar" 01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md | grep -q "^0$" && echo "PASS sem placeholder (nenhuma definição alternativa pendente)" || echo "FAIL"; ls 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md && grep -c "inscritos\|receita_reportada" 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md`

## Dependências

- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]] — entidades canônicas + PK/FK (25 entidades)
- [[04-project-management/tarefas/P03-T03_Envelope_Evento_Schema|P03-T03]] — envelope evento + `DAT-01/02/03` (completude/atualidade/identidade resolvida)
- G03.C1 (M03.C — Métricas) — `blocking: no` neste lote; catálogo de definição sem certificação produção; validação `06_Simulador_ROI` H20 + chaves `08_Dicionario_Dados` pendente antes de G03.C2 (ver `04-project-management/marcos/marcos-fases-v1.md#M03` e `04-project-management/planos-fase/P03_Dados_Canonicos.md#6` Gate G3)

## Registros

- [[00-project-control/registro-lacunas/lacunas/DAT-005]]

## Execução

- **Entregável produzido:** [[01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1|catalogo-metricas-grafo-P03-T05-v1.md]] (73 indicadores) + cópia em `sintese-entre-abas/` — catálogo com fórmula/dimensão/owner/tipo/alavanca + grafo `DAT-01/02/03 → eventos → indicadores → contrato/transação → fato financeiro → dashboards` (Mermaid) + resolução 6 definições alternativas (MRR/ARR/NRR, retenções, etc.).
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
