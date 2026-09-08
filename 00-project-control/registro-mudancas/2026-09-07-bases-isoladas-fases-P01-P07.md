---
title: "Registro de Mudança — Bases Isoladas P01–P07 + Documentação Oficial"
date: 2026-09-07
type: registro-mudanca
status: rascunho
tags:
  - projeto/registro-mudanca
  - projeto/gestao
related_notes: []
author:
  - PF Rezende
commits: []
---

# Registro de Mudança — Bases Isoladas P01–P07 + Documentação Oficial

> [!info] Identificação
> - **Data:** 2026-09-07
> - **Tipo:** estrutural + técnico (Bases/Canvas — organização de views)
> - **Origem:** pedido do usuário em sessão assistida — replicar o padrão `documentacao-oficial.base` (single-topic DB + Canvas Bases) para todos os grandes grupos ligados por `dependencies`/`blockedBy`
> - **Antecessor:** `2026-09-05-reestruturacao-fronteiras-lifecycle.md` (fronteiras lifecycle) + `TaskNotes/REPORT-documentacao-oficial-engineering.md` (teardown do padrão que serviu de molde)

## 1. Resumo

Replicado o padrão "single-topic task database" — antes restrito a `TaskNotes/Views/documentacao-oficial.base` (5 tasks `documentacao-oficial` com 6 views + Canvas Bases `blockedBy`) — para todos os 7 grupos faseados P01–P07 e para o recorte `OPEN` da documentação. Movidos os reports para fora de `Views/` e consolidadas todas as bases isoladas em `TaskNotes/Views/` com seus `.canvas` co-localizados.

**Resultado:** `TaskNotes/Views/` passa a conter **9 bases isoladas** (master + 7 fases + 2 docs) com DAG vivo via `dependencies`/`blockedBy` e Canvas em `columns`; `04-project-management/tarefas/` volta a conter só as tarefas-fonte; `TaskNotes/REPORT-documentacao-oficial-engineering.md` documenta o molde.

## 2. Contexto e motivação

- **Antes:** só `documentacao-oficial.base` demonstrava o valor de agrupar tarefas por um `tag` único (partition key `documentacao-oficial`) com fórmulas de domínio (`horizon`, `isBlocked`, `urgencyScore`) e Canvas Bases (`blockedBy` → DAG). Os 60+ tasks faseados P01–P07 viviam só no monolito `04-project-management/tarefas/HUB_Tarefas_Projeto.base` (1 tabela + 1 Canvas global com 92 edges manuais). O report de engenharia (`REPORT-documentacao-oficial-engineering.md`) havia sido gerado dentro de `Views/`, poluindo a pasta que deve conter só `.base` + `.canvas`.
- **Problema ou oportunidade:** sem bases isoladas por fase, filtrar P03 ou P06 exigia filtro ad hoc no master; sem Canvas por fase, editar DAG exigia zoom e pan no Canvas global; report em `Views/` quebra a convenção "Views = DB layer".
- **Objetivo:** dar a cada grande grupo ligado (P01–P07 + docs OPEN) sua própria base isolada — 1 tag = 1 DB — com 4 views padrão (Work Queue / Dependency View / Cards / Canvas DAG) e Canvas `columns` com zones `pendente → em-revisao → concluido + ⛔ Bloqueado`, para que o usuário possa replicar o "tiny grouping more useful than I thought" em escala.

## 3. O que mudou

### 3.1 Artefatos criados ou atualizados

| Arquivo | Papel | Gaps / requisitos | Links |
|---|---|---|---|
| `TaskNotes/REPORT-documentacao-oficial-engineering.md` | Report de engenharia do padrão `documentacao-oficial.base` (movido de `Views/` para `TaskNotes/`) | — | [[TaskNotes/Views/documentacao-oficial.base]] |
| `TaskNotes/Views/documentacao-oficial-OPEN.base` | Recorte `OPEN` da documentação — `file.hasTag("documentacao-oficial") && status == "open"` — 5 tasks `open` com 6 views + Canvas `open`-only | GOV-001 / AGORA | [[TaskNotes/Views/documentacao-oficial.base]] |
| `TaskNotes/Views/P01-fase-oferta-negocio.base` | Base isolada P01 — `fase-P01` — 7 tasks `P01-T01..T07` — 4 views + Canvas `columns` edges `dependencies,gap_ids` | STR-001 | [[04-project-management/tarefas/P01-T01_Matriz_4_Unidades]] |
| `TaskNotes/Views/P02-fase-produto-operacoes.base` | Base isolada P02 — `fase-P02` — 6 tasks `P02-T01..T06` | — | [[04-project-management/tarefas/P02-T01_Taxonomia_Capacidades]] |
| `TaskNotes/Views/P03-fase-dados-inteligencia.base` | Base isolada P03 — `fase-P03` — 9 tasks `P03-T01..T09` | — | [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico]] |
| `TaskNotes/Views/P04-fase-governanca-juridica.base` | Base isolada P04 — `fase-P04` — 8 tasks `P04-T01..T08` | GOV-001..010 | [[04-project-management/tarefas/P04-T01_Arquitetura_Entidades]] |
| `TaskNotes/Views/P05-fase-tecnologia.base` | Base isolada P05 — `fase-P05` — 7 tasks `P05-T01..T07` | TEC-003 | [[04-project-management/tarefas/P05-T01_Arquitetura_Solucao_Ambientes]] |
| `TaskNotes/Views/P06-fase-economia-GTM.base` | Base isolada P06 — `fase-P06` — 12 tasks `P06-T01..T12` | FIN-001 | [[04-project-management/tarefas/P06-T01_Registro_Premissas]] |
| `TaskNotes/Views/P07-fase-lancamento-evolucao.base` | Base isolada P07 — `fase-P07` — 7 tasks `P07-T01..T07` | LCH-001 | [[04-project-management/tarefas/P07-T01_Portao_Mestre_Grafo]] |
| `04-project-management/tarefas/HUB_Tarefas_Projeto.base` | Master intacto — 60 tasks, sem alteração (referência) | — | [[04-project-management/tarefas/HUB_Tarefas_Projeto.canvas]] |

> **Nota de paths:** inicialmente as 7 bases P01–P07 foram criadas em `04-project-management/tarefas/` (co-localizadas com as tarefas, como o master). A pedido do usuário foram **movidas** para `TaskNotes/Views/` e seus `canvasBasesLinkedCanvasPath` re-escritos de `04-project-management/tarefas/*.canvas` → `TaskNotes/Views/*.canvas` (vault-relative). Os `.canvas` ainda não materializados — serão gerados no primeiro `open` da aba Canvas de cada base (Canvas Bases 0.1.4).

### 3.2 Decisões e regras afetadas

- `TaskNotes/Views/` passa a ser o **único diretório de bases isoladas** — todo `.base` por tópico vive ali; `04-project-management/tarefas/` contém só tarefas-fonte + master.
- Reports (`*.md`) não vivem em `Views/` — `REPORT-documentacao-oficial-engineering.md` movido para `TaskNotes/` como precedente.
- Cada base faseada filtra por `file.hasTag("fase-P0X") && file.hasTag("task")` e desenha DAG via `dependencies + gap_ids` (não `blockedBy` — que é o campo do TaskNotes). Documentação mantém `blockedBy` (TaskNotes DAG).
- Canvas por base: `columns` + `groupBy: status` + `edges: properties` + `zones: pendente/em-revisao/concluido + ⛔ Bloqueado (#ef4444)` — drag entre zones = `set-property: note.status`.

## 4. Impactos e rastreabilidade

- **Impacto no escopo:** nenhum escopo de produto criado ou cortado; mudança 100% organizacional/views.
- **Impacto operacional:** cada fase agora tem sua própria view isolada — filtrar P05 não exige mais filtro ad hoc no master; DAG por fase é navegável e editável sem pan no Canvas global de 60 nós.
- **Impacto técnico ou de dados:** 8 novos `.base` (7 fases + 1 docs-OPEN) + 1 report movido; 0 tarefas-fonte alteradas; `HUB_Tarefas_Projeto.base` intacto; `git status` mostra só adds/moves em `TaskNotes/Views/`.
- **Rastreabilidade:** requisito (replicar padrão single-topic DB) → `REPORT-documentacao-oficial-engineering.md` §9 (blueprint de replicação: 4 spots para trocar: tag, horizon, títulos, canvasPath) → 7 bases criadas via template + 2 docs bases → moves para `Views/` + repoint de canvas.

## 5. Validação e sincronização

- **Validação realizada:** `ls TaskNotes/Views/*.base` — 9 bases isoladas + 4 defaults; `grep -l "fase-P0" TaskNotes/Views/*.base` — 7/7 presentes; `grep canvasBasesLinkedCanvasPath TaskNotes/Views/P*.base` — todos apontam para `TaskNotes/Views/*.canvas` (repoint verificado); `file.hasTag("fase-P0X")` conferido contra `04-project-management/tarefas/P*-T*.md` (tags `fase-P0X` + `task` presentes); nenhum `status:` alterado nas tarefas-fonte.
- **Resultado:** verde. Canvases ainda não materializados em disco (esperado — Canvas Bases gera no primeiro open da aba Canvas); `documentacao-oficial.base` original permanece de 184 linhas inalterado (referência).
- **Arquivos vivos sincronizados:** `TaskNotes/Views/*.base` (9), `TaskNotes/REPORT-documentacao-oficial-engineering.md` (movido). `project-map.md`, `README.md` e `TaskNotes/Task Dashboard.md` ainda referenciam `![[TaskNotes/Views/documentacao-oficial.base]]` (válido; não quebrado pelo move).

## 6. Próximos passos

- [ ] Abrir cada nova base em Obsidian e alternar para a aba `Canvas (DAG)` para materializar os 7 `.canvas` em `TaskNotes/Views/` (verificar edges `dependencies → gap_ids` e zones drag-to-status)
- [ ] Validar contagens por fase contra `HUB_Tarefas_Projeto.base` (P01:7, P02:6, P03:9, P04:8, P05:7, P06:12, P07:7) — garantir que todo `fase-P0X` task aparece em sua base isolada e no master
- [ ] Atualizar `TaskNotes/Task Dashboard.md` se desejado — adicionar embeds `![[TaskNotes/Views/P05-fase-tecnologia.base]]` etc. para acesso rápido (opcional)
- [ ] Considerar bases para os outros tópicos candidatos do report §9.2 (`blueprint-oferta`, `mvp-*`, `gaps-por-dominio`) se o padrão se provar útil em uso

## 7. Referências

- [[TaskNotes/REPORT-documentacao-oficial-engineering.md]] — teardown do padrão e blueprint §9.1 (template 4-spot)
- [[TaskNotes/Views/documentacao-oficial.base]] — molde original (184 linhas, 8 fórmulas, 6 views, Canvas Bases `blockedBy`)
- [[TaskNotes/Views/documentacao-oficial-OPEN.base]] — recorte `open` (147 linhas)
- [[04-project-management/tarefas/HUB_Tarefas_Projeto.base]] — master (145 linhas, 60 tasks, `dependencies,gap_ids` edges)
- [[04-project-management/tarefas/HUB_Tarefas_Projeto.canvas]] — canvas global referência (92 edges `blocks`)
- `00-project-control/registro-lacunas/HUB_Gaps.canvas` — referência gaps por domínio
- `TaskNotes/Views/P01-fase-oferta-negocio.base` … `P07-fase-lancamento-evolucao.base` — 7 bases isoladas (este registro)
- Canvas Bases 0.1.4 + TaskNotes 4.12.5 + Bases core (Obsidian 1.10.2+)
