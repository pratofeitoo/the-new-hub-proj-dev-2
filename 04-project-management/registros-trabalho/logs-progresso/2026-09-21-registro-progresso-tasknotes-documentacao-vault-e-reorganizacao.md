---
title: Registro de Progresso — TaskNotes, Documentação Oficial e Reorganização do Vault
description: Consolida todas as intervenções recentes no Obsidian vault — simplificação TaskNotes, 2 cards com checklists clicáveis, arquivamento, criação de projects-overview.base e reorganização física de documentos-oficiais.
type: log
status: stable
date: 2026-09-21
phase: P04-P05
tags:
  - gestao-projeto
  - tasknotes
  - documentacao-oficial
  - vault-isolado
  - bases
  - reorganizacao
  - GOV-001
related_notes:
  - "[[01-work/documentos-oficiais/_controle/HUB_Mapa_Documentos_Oficiais_v1]]"
  - "[[01-work/documentos-oficiais/_controle/HUB_Mapa_Documentos_Nao_Obrigatorios_v1]]"
  - "[[01-work/documentos-oficiais/_controle/HUB_Instrucao_Vault_Documentos_Oficiais]]"
  - "[[TaskNotes/Views/projects-overview.base]]"
  - "[[TaskNotes/Views/documentacao-oficial.base]]"
  - "[[TaskNotes/Tasks/Docs Oficiais - obrigatórios]]"
  - "[[TaskNotes/Tasks/Docs Não-Obrigatórios]]"
  - "[[04-project-management/04-project-management]]"
---

# Registro de Progresso — TaskNotes, Documentação e Reorganização (2026-09-21)

> [!abstract] Veredito executivo
> Vault passou de **5 cards dispersos + 6 views redundantes + path aninhado** para **2 cards com checklists clicáveis (42+32 docs) + 2 views minimalistas + path achatado**. Três tasks arquivadas, dois task cards reescritos, um `.base` novo criado e 40 arquivos com 194 wikilinks corrigidos após mover físico `documentos-oficiais`.

## 1. Contexto e diagnóstico inicial

**Tag `documentacao-oficial` tinha 5 tasks:**
- `GOV-001 — Decidir estrutura societária (quantos CNPJs)` — bloqueador 80% (`pendente`)
- `Docs Oficiais AGORA — 7 documentos críticos antes do CNPJ` — bloqueado por GOV-001
- `Docs Oficiais 01-08 — Validar obrigatórios com advogado e contador` — bloqueado por GOV-001 (32 docs)
- `Docs Não-Obrigatórios 09-14 — Planejar horizontes 0-6M e 6-18M` — bloqueado por AGORA (27 docs)
- `Documentação Oficial — Epic Vault Isolado HUB (01-14)` — epic container

`TaskNotes/Views/documentacao-oficial.base` tinha 6 views: `Kanban por Status`, `Kanban por Horizonte`, `Lista AGORA`, `Bloqueados`, `Epic + Subtasks`, `Canvas`. Horizonte = `priority+due` re-encodado (todo `due:2026-09-30` → mesma balde), `Epic + Subtasks` agrupava por `projects` patológico, `Canvas` duplicava Kanban com zona fantasma `bloqueado` (status nunca usado — bloqueio real é `blockedBy`). 10 colunas para 5 cards, `hideEmptyColumns:false`, statuses `pendente`/`open` duplicados.

TaskNotes projects canônicos (`fieldMapping.projects → type` + `projectAutosuggest.propertyValue=task-project`): apenas 3 notas com `type: task-project` — `Ajustes Jurídicos`, `Gestão de Projeto e Governança`, `arquitetura financeira` (ver `.obsidian/plugins/tasknotes/data.json`).

## 2. Intervenção 1 — `projects-overview.base`

**Arquivo criado:** `TaskNotes/Views/projects-overview.base` (11 → 4 views após correção).

- Versão inicial: 11 views (Overview + 9 wikilinks distintos + 3 canônicos). Filtro robusto `list(projects).contains(link) || list(type).contains(link)` para cobrir `fieldMapping.projects→type` + legado `projects:`.
- Correção solicitada: **usar apenas canônico `type: task-project`**. Reduzido para 4 views:
  - `Overview — Canonical Projects` (table, `groupBy: projects`, filtra OR dos 3)
  - `Ajustes Jurídicos` (4 tasks vinculados), `Gestão de Projeto e Governança` (3), `arquitetura financeira` (3) — cada `tasknotesTaskList`, `groupBy: status`, `sort: urgencyScore DESC`, fórmulas `priorityWeight`, `daysUntilDue`, `urgencyScore`, `dueIn`.

## 3. Intervenção 2 — Simplificação `documentacao-oficial` (5 → 2 cards)

**Decisão:** rejeitar `dependency` e `horizon` como filtros. Proposta aprovada: `Archive 3 + rewrite 2`.

**Arquivados → `TaskNotes/Archive/` (`status:done` + `completedDate:2026-09-21` + `tags:archived`):**
- `GOV-001 — Decidir estrutura societária (quantos CNPJs).md`
- `Docs Oficiais AGORA — 7 documentos críticos antes do CNPJ.md` (7 itens AGORA incorporados ao Card 2 com flag `⏰`)
- `Documentação Oficial — Epic Vault Isolado HUB (01-14).md`

**Reescritos — 2 cards com checklist clicável (Tier-1 inline `- [ ]`):**

**Card 1:** `Docs Oficiais - obrigatórios.md` (`OPS-009`, `priority:normal`, `due:2026-09-30`, `scheduled:2026-09-15`, `projects: [[01-work/documentos-oficiais/_controle/HUB_Mapa_Documentos_Oficiais_v1]]`, `blockedBy: []`) — **42 ☐**:
- 01 Atos (1.01-1.05), 02 Registros (2.01-2.05), 03 Licenças (3.01-3.05 — condicional/adiado/bloqueado GOV-003), 04 Contratos (4.01-4.08), 05 PI (5.01-5.05), 06 LGPD (6.01-6.05), 07 Fiscal IBS/CBS EC 132/2023 (7.01-7.05), 08 Trabalhista (8.01-8.04). Progresso via `file.tasks` (`12/42`).

**Card 2:** `Docs Não-Obrigatórios.md` (`OPS-008`, `due:2026-10-15`, `scheduled:2026-09-15`, `projects: [[01-work/documentos-oficiais/_controle/HUB_Mapa_Documentos_Nao_Obrigatorios_v1]]`, `blockedBy: []`) — **32 ☐**:
- 09 Governança (09.01 `⏰ AGORA`, 09.02 `⏰ AGORA`, 09.03-09.06), 10 Financeiro (10.01 `⏰`, 10.02 `⏰`, 10.03-10.06), 11 Pessoas (11.01 `⏰`, 11.04 `⏰` NDA, 11.02-11.06), 12 Comercial (12.01 `⏰`, 12.02-12.05), 13 Operações (13.01-13.04), 14 Tecnologia (14.01-14.05). Legenda `⏰ AGORA = antes do CNPJ` (7 itens).

Cada `- [ ]` é clicável no TaskNotes — não altera `status`, só `file.tasks`.

**Base reescrita:** `TaskNotes/Views/documentacao-oficial.base` 6 → 2 views:
```yaml
filters: file.hasTag("documentacao-oficial") && status!="done" && !hasTag("archived")
formulas: checklistProgress = file.tasks.filter(checked).length + "/" + file.tasks.length
views:
  - tasknotesTaskList "Documentação — 2 cards" (groupBy:status, hideEmptyColumns:true, order: status/priority/due/file.tasks)
  - table "Checklist — progresso" (order: file.name/status/priority/due/file.tasks/checklistProgress)
```
Sem `horizon`, `isBlocked`, `blockedByTitles`.

## 4. Intervenção 3 — Reorganização física

**Move:** `01-work/pesquisa-e-confianca/documentos-oficiais` → `01-work/documentos-oficiais`
- 15 pastas (`00-controle-drive`, `01-atos` … `14-tecnologia`, `_controle`, `01-…` docs) movidas via `mv`. Verificado: `01-work/documentos-oficiais/_controle/HUB_Mapa_Documentos_Oficiais_v1.md` existe, old path removido.
- `01-work/pesquisa-e-confianca/` agora contém apenas `pesquisa/`.

**Correção de links:** 2 task cards atualizados (`projects` + body `Fonte: [[01-work/documentos-oficiais/...]]`). `documentacao-oficial.base` sem path hard, mantido filtragem por tag.

**Bulk replace (confirmado):** `01-work/pesquisa-e-confianca/documentos-oficiais` → `01-work/documentos-oficiais` em **40 arquivos, 194 ocorrências** (TaskNotes tasks, `plataforma-de-marca/*`, `planos-fase/P03-P06`, `tarefas/P04-*` (79 refs), `HUB_Instrucao_*`, `HUB_Mapa_*`). Última ref histórica preservada em `01-work/README.md:4` como `(movido de pesquisa-e-confianca/documentos-oficiais/ em 2026-09-21)`, restante 0 old-path refs.

## 5. Estado atual e evidência

- `TaskNotes/Tasks` com `documentacao-oficial`: **2 ativos** (42+32 checkboxes), **3 arquivados** em `TaskNotes/Archive/`.
- `grep -r "pesquisa-e-confianca/documentos-oficiais" --include="*.md" → 1` (README histórico), `grep -r "01-work/documentos-oficiais" → 194`.
- `yaml.safe_load` em ambos `.base` → OK (4 views + 2 views).
- `file.hasTag("documentacao-oficial") && !archived && status!="done"` → retorna só os 2 cards.

## 6. Impacto e próximos passos

**Ganhos:** base menos clutter (6→2 views, 10→4 colunas), progresso granular por documento (não mais `open`/`done` binário), path achatado (`01-work/documentos-oficiais` acessível em 2 níveis vs 3), links íntegros em todo vault.

**Riscos residuais:** 7 docs `⏰ AGORA` ainda dependem de `GOV-001` (decisão CNPJs) — checklist permite marcar antes, mas juridicamente bloqueado até `00-controle/03-decisao-GOV-001-estrutura-societaria.md`. `Selo HUB` (3.05/4.08) permanece `bloqueado` até `GOV-003`.

**Próximos:** validar `ibs/cbs` com CRC (7.04), ROPA fluxo a fluxo (6.01), preencher `HUB_Documentos_Oficiais/00-controle/` com evidências, promover para `02-review/` quando `file.tasks` = `42/42` e `32/32`.

---
*Gerado em 2026-09-21T19:50-03:00 por Sisyphus — Obsidian vault The New HUB dev-2.*
