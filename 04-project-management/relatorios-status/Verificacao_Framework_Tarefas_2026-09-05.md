---
title: Verificação Framework Tarefas Executável — Piloto Mínimo vs Plataforma
type: relatorio-status
status: em-revisao
project: The New HUB
created: 2026-09-05
updated: 2026-09-05
author: Hermes Agent
gate: Task 10 — Gate de verificação do framework (PR gate)
owner: PF Rezende
evidence_required:
  - 00-project-control/framework/Tarefa_Executavel_Definicao.md
  - 04-project-management/registro-mestre/matriz-fases-tarefas-v1.md
  - 04-project-management/HUB_Log_Tarefas_Progresso.md
  - 04-project-management/planos-mestres/HUB_Charter_Piloto_SEBRAE_2026-10-28.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
  - 04-project-management/cronogramas/cronograma-fases-v1.base
tags:
  - hub
  - verificacao
  - framework-tarefas
  - piloto-minimo
  - gate
---

# Verificação Framework Tarefas Executável — 2026-09-05

> Gate de verificação do framework antes de liberar P04/P05. Verifica: owners, critérios, evidência, lifecycle, gates, cronogramas. Próximo passo: sprint piloto (3 tarefas que abrem).

## Resultado: 6/6 PASS

| # | Check | Comando | Esperado | Resultado | Evidência |
|---|---|---|---|---|---|
| 1 | **Owners nominais** | `grep -R "^owner:" 04-project-management/tarefas/P01* P02* P03* P04* P05* P06* P07* \| grep "a designar" \| wc -l` | 0 | **0 PASS** | P01 7 + P02 6 + P03 9 + P04 8 + P05 7 + P06 12 + P07 7 todos `PF Rezende // blocked: aguardando nomeação <Papel> até YYYY-MM-DD` ou `Ana Silva`/`Tamara`; nenhum bare "a designar" (ver `auditoria-tarefas-executavel-2026-09-05.md` baseline 60 → 0) |
| 2 | **Critérios testáveis** | `grep -L "Acceptance criteria" 04-project-management/tarefas/P03* P04* P05* P06* P07* \| wc -l` | 0 | **0 PASS** | P03 9/9 + P04 8/8 + P05 7/7 + P06 12/12 + P07 7/7 têm 2-3 bullets testáveis + `Evidence required` + `Verification` (ex P03-T01 25/25 PK, P03-T04 41/41 DAT010 blocking, P05-T04 TEC-005 blocking, P07-T07 LCH-007 blocking) |
| 3 | **Lifecycle == pasta** | `grep -R "^status: concluido" 04-project-management/tarefas/ \| wc -l` | 0 | **0 PASS** | P01 7 em-revisao, P02 6 em-revisao, P03 9 em-revisao, P04 8 pendente, P05 7 pendente, P06 12 pendente, P07 7 pendente; nenhum `concluido` sem `DEC-M01/M02` (Task 7 reclassificou 13, `project-map.md` § Faseamento reflete M01/M02 não aprovados) |
| 4 | **Gates bloqueadores preservados** | `grep -R "blocking: yes" 04-project-management/tarefas/ \| wc -l` | ≥5 | **5 PASS** | `DAT-010/G03.B2` P03-T04, `TEC-005/G05.4` P05-T04, `TEC-007/G05.7` P05-T07, `LCH-007/G07.7` P07-T07, `BRD-002/GTM-007/G06.10` P06-T10 — todos `blocking: yes` com `evidence_required` e `Verification` que falha até evidência existir |
| 5 | **Piloto vs Plataforma separados** | `ls HUB_Charter_Piloto_SEBRAE_2026-10-28.md && ls spine-piloto-minimo-v1.md && grep -c "Deferred" spine` | 2 files + ≥1 | **PASS** | Charter 1-página 15 campos (patrocinador SEBRAE-piloto-validação vs comprador institucional, coorte 30, métricas 12, datas 28/10/28/11/05/12) + spine 12 entidades/12 métricas/9 campos envelope mínimo + Deferred 10 itens (Selo, marketplace, IA, benchmarks, multi-ecossistema, 61 métricas, white-label) |
| 6 | **Cronogramas dual** | `grep -c "28/10" cronograma-fases-v1.base` | >0 | **8 PASS** | `cronograma-fases-v1.base` 8 views (6 originais + View A Estratégico P00→P07 + View B Operacional Piloto 28/10) + `HUB_Plano_Fases_v1.md` §12 anexo com 9 must-have checkboxes, 12 métricas, template relatório 28/11; YAML valid, `git diff --check` limpo (exceto pre-existing TaskNotes whitespace) |

## Verificações locais reproduzíveis

```bash
# 1 Owners
grep -R "^owner:" 04-project-management/tarefas/P01* P02* P03* P04* P05* P06* P07* | grep "a designar" | wc -l  # → 0
# 2 Criteria
grep -L "Acceptance criteria" 04-project-management/tarefas/P03* P04* P05* P06* P07* | wc -l  # → 0
# 3 Lifecycle
grep -R "^status: concluido" 04-project-management/tarefas/ | wc -l  # → 0
grep -c "^| P0" 04-project-management/registro-mestre/matriz-fases-tarefas-v1.md  # → 56 (P01=7 P02=6 P03=9 P04=8 P05=7 P06=12 P07=7)
# 4 Gates
grep -R "blocking: yes" 04-project-management/tarefas/ | wc -l  # → 5
# 5 Pilot
ls 04-project-management/planos-mestres/HUB_Charter_Piloto_SEBRAE_2026-10-28.md 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
# 6 Cronogramas
grep -n "28/10" 04-project-management/cronogramas/cronograma-fases-v1.base 04-project-management/planos-mestres/HUB_Plano_Fases_v1.md
# Matriz
grep -c "Não especificad" 04-project-management/registro-mestre/matriz-fases-tarefas-v1.md  # → 0 for P03-P07 (filled)
# Bases
python3 -c "import yaml; yaml.safe_load(open('04-project-management/tarefas/HUB_Tarefas_Projeto.base')); yaml.safe_load(open('04-project-management/registros-trabalho/HUB_Tarefas_Fases_Execucao.base')); print('YAML valid')"
```

## PR contém apenas correções de framework

`git diff --stat -- 00-project-control/framework/Tarefa_Executavel_Definicao.md 04-project-management/ 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md 04-project-management/planos-mestres/HUB_Charter* 04-project-management/cronogramas/ 04-project-management/registro-mestre/ 04-project-management/relatorios-status/Verificacao*` — sem alteração em `03-approved/` (ver `git diff --name-only -- 03-approved | wc -l ==0`).

`git diff --check` — limpo para arquivos do framework (1 pre-existing whitespace em `TaskNotes/Tasks/Refinar os dados do Blueprint.md:22` não relacionado).

## Próximo passo operacional — sprint piloto (3 tarefas que abrem)

| # | Tarefa | Owner | Evidence | Due | Gate |
|---|---|---|---|---|---|
| 1 | **P03-T01 spine mínimo 12 entidades** | Ana Silva (A) + PF Rezende (interino) | `spine-piloto-minimo-v1.md §1` + `modelo-logico-fisico-P03-T01-v1.md` 12/12 entidades piloto | 10/10 | G03.A1 |
| 2 | **P03-T08 LGPD mínimo** | PF Rezende (DPO provisório) + Bruno Brigida | `matriz-dados-finalidade-P03-T08-v1.md` subset 12 campos + `acordo-cooperacao-SEBRAE-HUB-2026-10-15.md` assinado | **15/10 — gate bloqueante** | G03.C4/DAT-008 |
| 3 | **P03-T09 medição + fluxo** | PF Rezende (Tech) | `fluxos-linhagem-replay-dsar-P03-T09-v1.md` + `match-log-2026-10-28.csv` template + `reuniao-log` | 20/10 | G03.C4/C5 |

Must-have completo em `HUB_Plano_Fases_v1.md` §12 (9 itens: P03-T01/T03-T05/T08/T09 + Infra MVP + Workshop match + Fluxo medição).

**Decisão gate:** Aguardar revisão humana deste relatório antes de abrir `P04-T01` (GOV-001). `P04/P05` permanecem `pendente` até `P03` spine mínimo + LGPD 15/10 PASS.

## Artefatos entregues

- `00-project-control/framework/Tarefa_Executavel_Definicao.md` (422 linhas, DoD D1-D10, lifecycle-first, proibição "a designar")
- `04-project-management/tarefas/README.md` (396 linhas, template normativo)
- `04-project-management/registros-trabalho/logs-progresso/auditoria-tarefas-executavel-2026-09-05.md` (449 linhas, 64 tarefas, 60→0)
- `04-project-management/planos-mestres/HUB_Charter_Piloto_SEBRAE_2026-10-28.md` (58 linhas) + `01-work/.../spine-piloto-minimo-v1.md` (102 linhas)
- 43 tarefas P03-P07 com `Acceptance criteria` 2-3 bullets + `evidence_required` + `Verification` + `blocking: yes` preservado
- 13 tarefas P01/P02 reclassificadas `concluido→em-revisao`, 9 tarefas P01/P02 + 2 P07 com owners nominalizados
- `04-project-management/registro-mestre/matriz-fases-tarefas-v1.md` (56 linhas, 0 "Não especificado" P03-P07, 0 "a designar" P03-P07)
- `04-project-management/HUB_Log_Tarefas_Progresso.md` + templates `_template-ata.md` + `template-relatorio-status.md`
- `04-project-management/tarefas/HUB_Tarefas_Projeto.base` + `04-project-management/registros-trabalho/HUB_Tarefas_Fases_Execucao.base` + `00-project-control/registro-lacunas/HUB_Lacunas_Projeto.base` (pilot notes, YAML valid)
- `04-project-management/cronogramas/cronograma-fases-v1.base` (8 views) + `04-project-management/planos-mestres/HUB_Plano_Fases_v1.md` §12 anexo
- Este relatório `Verificacao_Framework_Tarefas_2026-09-05.md`

## Riscos residuais

- `P07-T02/T06` etc. com `blocked_until 2026-10-15` — nomeação Operações/Tech/Finanças ainda pendente; se não nomear até 15/10, sprint piloto mantém PF Rezende interino como A (founder dependency risco médio).
- `TEC-005/G05.4` e `TEC-007/G05.7` continuam `blocking: yes` — P06/M05 não liberam sem baseline/integração; piloto opera com infra mínima Hostinger sem baseline completo (aceitável para MVP).
- `BRD-002/GTM-007/G06.10` — claims illustrativo permanecem bloqueados até `P06-T10` matriz passar evidência+jurídico; decks não podem afirmar tração.
