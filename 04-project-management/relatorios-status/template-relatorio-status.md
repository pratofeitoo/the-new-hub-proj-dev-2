---
title: "Relatório de status — {{date:YYYY-MM-DD}}"
date: "{{date:YYYY-MM-DD}}"
type: status-report
status: active
owner: PF Rezende # Task 9B: dono nominal (sem "a designar"; se bloqueado, usar blocked_reason + blocked_until)
evidence_required: [] # Task 9B: ex: ["01-work/.../modelo-logico-P03-T01-v1.md", "02-review/pacotes/P03-Dados-Canonicos.md"]
gate: "" # Task 9B: ex: "G03.B2/DAT-010 blocking: yes", "G05.4/TEC-005 blocking: yes", "G07.7/LCH-007 blocking: yes"
dec_link: "" # Task 9B: ex: "[[00-project-control/decisoes/DEC-M03-2026-10-15]]" — vazio até gate aprovado
blocked_until: "" # Task 9B: YYYY-MM-DD se aguardando nomeação
blocked_reason: "" # Task 9B: ex: "aguardando nomeação Tech — TEC-005"
tags:
  - projeto/status
  - projeto/gestao
---

# Relatório de status — {{date:YYYY-MM-DD}}

## Informações

- **Período de referência:**
- **Projeto ou fase:**
- **Responsável:**
- **Última atualização:** {{date:YYYY-MM-DD}}

## Resumo executivo

<!-- Resuma o estado atual, os principais avanços e os pontos de atenção em até cinco linhas. -->

## Status geral

- **Saúde do projeto:** 🟢 No prazo | 🟡 Atenção | 🔴 Em risco
- **Escopo:** 🟢 Estável | 🟡 Em revisão | 🔴 Comprometido
- **Cronograma:** 🟢 No prazo | 🟡 Atraso previsto | 🔴 Atrasado
- **Recursos:** 🟢 Adequados | 🟡 Restritos | 🔴 Insuficientes

## Progresso no período

### Concluído

- [ ]

### Em andamento

- [ ]

### Não iniciado ou adiado

- [ ]

## Indicadores

| Indicador | Atual | Meta | Tendência | Observações |
|---|---:|---:|---|---|
| | | | ↗️ ↔️ ↘️ | |

## Riscos e impedimentos

| Item | Impacto | Probabilidade | Responsável | Mitigação | Status |
|---|---|---|---|---|---|
| | | | | | ☐ Aberto |

## Decisões necessárias

| Decisão | Contexto | Responsável pela decisão | Prazo | Status |
|---|---|---|---|---|
| | | | | ☐ Pendente |

## Próximos passos

| Ação | Responsável | Prazo | Prioridade | Status |
|---|---|---|---|---|
| | | | Alta / Média / Baixa | ☐ Pendente |

## Dependências

- **Dependência:**
  - Responsável:
  - Prazo:
  - Impacto se não atendida:

## Rastreabilidade Gate / Evidência / DEC-* (Task 9B — retry, no network)

> Hierarquia lifecycle: `task frontmatter (owner, evidence_required, gate, DEC-*, blocked_until) → plano fase → marcos (marcos-fases-v1.md M01→M07) → HUB_Log_Tarefas_Progresso.md → matriz-fases-tarefas-v1.md → cronogramas (cronograma-fases-v1.base View A Estratégico / View B Operacional Piloto SEBRAE 28/10)`. Nenhum gate sai de `em-revisao` sem `DEC-M*` + pacote `02-review/pacotes/P0X-*.md`. Gates `DAT-010/G03.B2`, `TEC-005/G05.4`, `TEC-007/G05.7`, `LCH-007/G07.7`, `BRD-002/GTM-007` permanecem `blocking: yes` até evidência + revisão + DEC.

| Tarefa / Gate | Owner (nominal, sem "a designar") | evidence_required | Gate (lacuna + blocking) | DEC-* link | blocked_until | Status |
|---|---|---|---|---|---|---|
| <!-- ex: P03-T04 / G03.B2 --> | <!-- ex: Ana Silva / PF Rezende (interino) --> | <!-- ex: `01-work/.../dicionario-fisico-P03-T04-v1.md`, `04-registro-correcoes/corrections.csv` --> | <!-- ex: `G03.B2/DAT-010 blocking: yes` --> | <!-- ex: `[[00-project-control/decisoes/DEC-M03-2026-10-15]]` ou vazio --> | <!-- ex: 2026-10-15 --> | ☐ Pendente / 🔍 em-revisao / ✅ aprovado |
| <!-- ex: P05-T04 / G05.4 --> | <!-- ex: PF Rezende // Tech interino --> | <!-- ex: `01-work/.../baseline-tecnico-P05-T04-v1.{md,csv}` + `02-review/pacotes/P05-Tecnologia.md §G05.4` --> | <!-- ex: `G05.4/TEC-005 blocking: yes` --> | <!-- ex: `[[00-project-control/decisoes/DEC-M05-2026-11-15]]` --> | <!-- ex: 2026-10-15 --> | ☐ Pendente |
| <!-- ex: P05-T07 / G05.7 --> | <!-- ex: PF Rezende --> | <!-- ex: `02-review/01-blueprint/tecnologia/HUB_Blueprint_Arquitetura_Tecnologica.md` + runbook --> | <!-- ex: `G05.7/TEC-007 blocking: yes` --> |  | 2026-10-15 | ☐ Pendente |
| <!-- ex: P07-T07 / G07.7 --> | <!-- ex: PF Rezende --> | <!-- ex: `02-review/portao-lancamento/ciclo-vida-artefatos-v1.md` + `03-approved/lancamento/` --> | <!-- ex: `G07.7/LCH-007 blocking: yes` --> | <!-- ex: `[[00-project-control/decisoes/DEC-M07-2026-12-05]]` --> |  | ☐ Pendente |
| <!-- ex: P06-T10 / G06.10 --> | <!-- ex: Tamara + PF Rezende --> | <!-- ex: `01-work/.../matriz-afirmacao-P06-T10-v1.md` + `RECONCILIADO_P06-T10/` --> | <!-- ex: `G06.10/BRD-002/GTM-007 blocking: yes` --> |  | 2026-10-15 | ☐ Pendente |

**Cronograma dual (Task 8):** View A — **Estratégico** `P00→P07 Gates & Dependências` (`M00→M01→M02→M03.A→M03.B→M03→M04+M05→M06→M07`; datas-âncora `15/10 Acordo LGPD go/no-go`, `28/10 Evento SEBRAE-SP`, `28/11 Relatório`, `05/12 Decisão gate`) | View B — **Operacional** `Piloto SEBRAE 28/10` (`Prep 03/09–27/10 → Evento 28/10 → Follow-up 29/10–27/11 → Relatório 28/11 → Decisão 05/12`; refs `HUB_Charter_Piloto_SEBRAE_2026-10-28.md c13` + `spine-piloto-minimo-v1.md §1–§2`) — ambos em `04-project-management/cronogramas/cronograma-fases-v1.base`.

**Verificação (local, sem rede):** `grep -R "a designar" 04-project-management/tarefas/P03*.md P04*.md P05*.md P06*.md P07*.md | wc -l` == 0; `grep -c "evidence_required" 04-project-management/tarefas/P*.md` == 56; `ls <evidence_required> && grep -c "G03\.\|G05\.\|G07\.\|BRD-\|GTM-" <evidência>`; `ls 00-project-control/decisoes/DEC-M*.md` == 0 até gate aprovado.

## Referências

- `04-project-management/HUB_Log_Tarefas_Progresso.md` — log cronológico Tasks 4–8 (owners P03–P06 0 a designar, P07 0 após fix; critérios P03/P04-P07; dual cronograma) + Bloqueios com gates blocking preservados.
- `04-project-management/marcos/marcos-fases-v1.md` — M01→M07, G03.B2/DAT-010, G05.4/TEC-005, G05.7/TEC-007, G07.7/LCH-007, G06.10/BRD-002/GTM-007.
- `00-project-control/framework/Tarefa_Executavel_Definicao.md §9` — proibição "a designar".
