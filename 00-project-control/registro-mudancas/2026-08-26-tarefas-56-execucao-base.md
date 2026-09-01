---
title: Registro de Mudança — 56 tarefas P01→P07 + base de execução
date: 2026-08-26
type: registro-mudanca
status: registrado
tags:
  - projeto/registro-mudanca
  - projeto/gestao
  - fase-projeto
  - hub
related_notes:
  - "[[04-project-management/registros-trabalho/HUB_Tarefas_Fases_Execucao.base]]"
  - "[[04-project-management/tarefas/HUB_Tarefas_Projeto.base]]"
  - "[[04-project-management/planos-mestres/HUB_Plano_Fases_v1]]"
  - "[[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio]]"
  - "[[04-project-management/planos-fase/P02_Produto_Operacao]]"
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[04-project-management/planos-fase/P04_Governanca_Confianca]]"
  - "[[04-project-management/planos-fase/P05_Tecnologia_Contratual]]"
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[04-project-management/planos-fase/P07_Portao_Lancamento]]"
  - "[[04-project-management/marcos/marcos-fases-v1]]"
  - "[[04-project-management/cronogramas/cronograma-fases-v1.base]]"
  - "[[00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto]]"
  - "[[project-map]]"
  - "[[00-project-control/registro-mudancas/2026-08-26-faseamento-P01-P07-cronograma-marcos]]"
author:
  - PF Rezende
  - Sisyphus
commits:
  - 30afd23
---

# Registro de Mudança — 56 tarefas P01→P07 + base de execução

> [!info] Identificação
> - **Data:** 2026-08-26
> - **Tipo:** decomposição de gestão — transforma gates P01→P07 em trabalho executável e rastreável
> - **Origem:** backlog de cada `[[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio|P01_Arquitetura_Oferta_Negocio]]` … `[[04-project-management/planos-fase/P07_Portao_Lancamento|P07_Portao_Lancamento]]` + gaps `[[00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto|HUB_Registro_Lacunas_Projeto]]` (68 gaps)
> - **Antecessor:** [[00-project-control/registro-mudancas/2026-08-26-faseamento-P01-P07-cronograma-marcos|2026-08-26-faseamento-P01-P07-cronograma-marcos]] (plano diretor, cronograma, marcos)

## 1. Resumo

A estrutura de fases (P01→P07) ganhou **trabalho granular**. Foram criadas **56 tarefas de execução** em `[[04-project-management/tarefas|04-project-management/tarefas]]` — cada uma com `task_id`, `phase`, `gap_ids`, `dependencies`, `target_file` e wikilinks — e uma **base de execução** em `[[04-project-management/registros-trabalho/HUB_Tarefas_Fases_Execucao.base|HUB_Tarefas_Fases_Execucao.base]]` com 9 views para operar o dia a dia sem perder a visão de dependência.

**Resultado:** de “fases com gates” para “fases com tarefas verificáveis + base operável”.

## 2. Contexto e motivação

- **Antes:** cada `P0x_*.md` trazia §7 “Tarefas (backlog inicial)” como tabela estática — não executável, sem `status`, sem rastreio em `[[04-project-management/registros-trabalho/HUB_Tarefas_Fases_Execucao.base|base]]` e sem ligação com `[[00-project-control/registro-lacunas/lacunas|lacunas]]`.
- **Problema:** risco de perder sequência — ex: alguém iniciar `FIN-003` (P06) antes de `DAT-005` (P03) ou `GOV-001` (P04) sem `P02-T01`.
- **Objetivo:** materializar o backlog em notas com `phase`, `priority`, `owner`, `gap_ids` e `dependencies` navegáveis, organizadas por `[[04-project-management/registros-trabalho/HUB_Tarefas_Fases_Execucao.base|HUB_Tarefas_Fases_Execucao.base]]` (obsidian-bases).

## 3. O que mudou

### 3.1 Base de execução (1 arquivo)

| Arquivo | Papel | Filtro | Views |
|---|---|---|---|
| [[04-project-management/registros-trabalho/HUB_Tarefas_Fases_Execucao.base|HUB_Tarefas_Fases_Execucao.base]] | Organiza as 56 tarefas por fase, status, prioridade, dono e gaps | `file.hasTag("task")` + `file.inFolder("04-project-management/tarefas")` + `phase != ""` | Execução por Fase (groupBy `phase`) · Caminho Crítico `★` (P01→P02→P03→P06→P07) · Paralelizáveis P04+P05 · Kanban por Status (`pendente→em-execucao→em-revisao→concluido→bloqueado`) · Por Prioridade (`critica→alta`) · Por Dono (RACI) · Portfolio (cards) · Bloqueadas & Em Revisão · Gaps por Fase (sum) |

> Fórmulas: `status_icon` (`⬜🔄🔍✅⛔`), `priority_rank`, `phase_rank`, `is_critical` (`★`), `gap_count`/`dep_count`. Propriedades `task_id`, `phase`, `gap_ids[]`, `dependencies[]`, `target_file`.

### 3.2 Tarefas criadas (56 notas em `[[04-project-management/tarefas|tarefas]]`)

Cada nota segue o mesmo frontmatter (ex: `P03-T01`):

```
task_id: P03-T01
phase: P03
status: pendente
priority: critica
area: data-intelligence
layer: blueprint/refining
owner: [Dados]
gap_ids: [DAT-001]
dependencies: [P02-T01]
target_file: "01-blueprint/..."
tags: [task, fase-P03]
related_notes: [[P03_Dados_Canonicos]] · [[lacunas/DAT-001]]
```

| Fase | Qtd | Tarefas | Gaps principais | BP |
|---|---|---|---|---|
| [[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio|P01 Oferta & Negócio]] | 7 | `P01-T01` Matriz 4 Unidades · `P01-T02` Matriz oferta×comprador · `P01-T03` Taxonomia receita · `P01-T04` Segmentos compradores · `P01-T05` Log evidências GTM · `P01-T06` Limites concentração · `P01-T07` Roadmap gates | `STR-001/002/003`, `FIN-002`, `GTM-001/002/006` | `BP-001` |
| [[04-project-management/planos-fase/P02_Produto_Operacao|P02 Produto & Operação]] | 6 | `P02-T01` Taxonomia capacidades · `P02-T02` Jornada estados · `P02-T03` Matriz autorização · `P02-T04` SOPs C.A.O.S. · `P02-T05` Filas revisão · `P02-T06` RACI A único | `PRD-001..007`, `STR-007/008`, `GOV-008` | `BP-002`+`BP-005` |
| [[04-project-management/planos-fase/P03_Dados_Canonicos|P03 Dados (spine)]] | 9 | `P03-T01` Modelo lógico/físico (M03.A) · `P03-T02` Serviço identidade · `P03-T03` Envelope evento (M03.B) · `P03-T04` Dicionário físico · `P03-T05` Catálogo métricas · `P03-T06` Linhagem · `P03-T07` Taxonomia valor · `P03-T08` Matriz dados-finalidade · `P03-T09` Fluxos replay/DSAR + XLSX | `DAT-001..010` | `BP-003` |
| [[04-project-management/planos-fase/P04_Governanca_Confianca|P04 Governança]] | 8 | `P04-T01` Arquitetura entidades · `P04-T02` Mapa LGPD fluxo · `P04-T03` Charter Selo · `P04-T04` Responsabilidade+seguros · `P04-T05` Registro PI · `P04-T06` Testes DSAR · `P04-T07` RACI v2 · `P04-T08` Inteligência responsável | `GOV-001..009`, `STR-007` | `BP-006` |
| [[04-project-management/planos-fase/P05_Tecnologia_Contratual|P05 Tecnologia]] | 7 | `P05-T01` Arquitetura+NFRs · `P05-T02` Contratos integração · `P05-T03` Mapa identidade · `P05-T04` Baseline técnico · `P05-T05` Threat model · `P05-T06` SLOs/runbooks · `P05-T07` Release/rollback | `TEC-001..007` | `BP-004` |
| [[04-project-management/planos-fase/P06_Economia_GTM_Evidencia|P06 Economia & GTM]] | 12 | `P06-T01` Registro premissas · `P06-T02` Modelo 3 cenários · `P06-T03` Ponte valor · `P06-T04` Separação comercial/restrito · `P06-T05` Capital · `P06-T06` KPIs ARR/MRR/NRR · `P06-T07` Mercado bottom-up · `P06-T08` Log+alternativas · `P06-T09` Canais · `P06-T10` Matriz afirmação · `P06-T11` Marca white-label · `P06-T12` Moat | `FIN-001..007`, `GTM-002..007`, `BRD-001..003`, `STR-004/005/006` | `BP-007` |
| [[04-project-management/planos-fase/P07_Portao_Lancamento|P07 Portão]] | 7 | `P07-T01` Portão mestre · `P07-T02` Runbook · `P07-T03` Workflow aprovação · `P07-T04` Rastreabilidade · `P07-T05` Riscos/premissas · `P07-T06` Checklist comercial · `P07-T07` Ciclo vida artefatos | `LCH-001..007`, `STR-003` | `BP-008` |

> Todas as notas linkam `[[00-project-control/registro-lacunas/lacunas/STR-001|STR-001]]` … `[[00-project-control/registro-lacunas/lacunas/LCH-007|LCH-007]]` e `dependencies` cruzadas (ex: `P04-T01` depende de `P03-T01`, `P06-T01` depende de `P05-T04`).

### 3.3 Infra

- `[[TaskNotes/Tasks]]` permanece para tarefas operacionais diárias (`Start Here.md`); as 56 tarefas de fase ficam em `[[04-project-management/tarefas|tarefas]]` e também aparecem em `[[04-project-management/registros-trabalho/HUB_Tarefas_Fases_Execucao.base|base de execução]]` — separação consciente entre “tarefa de gestão de fase” e “tarefa do dia”.
- `[[project-map|project-map]]` e `[[README|README]]` não precisaram mudar nesta etapa (já refletiam `HUB_Tarefas_Fases_Execucao.base` como conceito); próxima sincronização levará as 56 notas para o `project-map.md` § “Anexo para agentes”.

## 4. Como operar (sequencial + eficiente)

1. **Abrir** `[[04-project-management/registros-trabalho/HUB_Tarefas_Fases_Execucao.base|HUB_Tarefas_Fases_Execucao.base]]` → view **Execução por Fase** (P01→P07) ou **Caminho Crítico**.
2. **Filtrar** `status == "pendente"` + `phase == "P01"` para iniciar; `status_icon` muda ao alterar `status: pendente → em-execucao → em-revisao → concluido`.
3. **Respeitar `dependencies`:** não iniciar `P03-T01` sem `P02-T01`; `P06-T02` sem `P06-T01`; `P07-T01` sem `P06-T02`.
4. **Registrar trabalho** em `[[04-project-management/registros-trabalho|registros-trabalho]]` linkando a `task_id` (ex: `P03-T02` → log de teste de matching).
5. **Fechar fase** quando todos os `gap_ids` da view **Gaps por Fase** estiverem `concluido` e `[[04-project-management/marcos/marcos-fases-v1|marcos-fases-v1]]` (M00→M07, critérios `G01.x→G07.x`) for aprovado.

## 5. Commits e sincronização

| Commit | Mensagem | Conteúdo |
|---|---|---|
| `30afd23` | `feat(tarefas): 56 tarefas P01-P07 + base execucao registros-trabalho` | 58 files, +2544/-30 — 56 notas `P01-T01`…`P07-T07` + `HUB_Tarefas_Fases_Execucao.base` (9 views) + `.obsidian/workspace.json` |

Push para `origin/main` (`github.com/pratofeitoo/the-new-hub-proj-dev-2.git`).

## 6. Próximos passos

- Atribuir `owner` reais por tarefa (hoje `PF Rezende` / `a designar`) e atualizar `[[04-project-management/tarefas/HUB_Tarefas_Projeto.base|HUB_Tarefas_Projeto.base]]` se necessário.
- Usar view **Por Dono** da base para distribuir carga e view **Bloqueadas** para desbloquear `M03.A/B`.
- Sincronizar `[[project-map]]` para listar as 56 notas em `04-project-management/tarefas/` (próximo `docs(map)` commit).

## 7. Referências

- [[04-project-management/planos-mestres/HUB_Plano_Fases_v1|HUB_Plano_Fases_v1]] + `[[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio|P01]]` … `[[04-project-management/planos-fase/P07_Portao_Lancamento|P07]]`
- [[04-project-management/registros-trabalho/HUB_Tarefas_Fases_Execucao.base|HUB_Tarefas_Fases_Execucao.base]] + [[04-project-management/cronogramas/cronograma-fases-v1.base|cronograma-fases-v1.base]] + [[04-project-management/marcos/marcos-fases-v1|marcos-fases-v1]]
- [[00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto|Registro de Lacunas]] — 68 gaps, `STR/PRD/DAT/GOV/TEC/FIN/GTM/BRD/LCH`
- [[00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas|Framework de Três Camadas]]
- Antecessor: [[00-project-control/registro-mudancas/2026-08-26-faseamento-P01-P07-cronograma-marcos|2026-08-26-faseamento-P01-P07-cronograma-marcos]]
- Commit `30afd23`
