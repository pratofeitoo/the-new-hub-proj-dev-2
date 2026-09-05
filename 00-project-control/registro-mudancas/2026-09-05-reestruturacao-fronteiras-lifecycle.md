---
title: "Registro de Mudança — Reestruturação Fronteiras Lifecycle"
date: 2026-09-05
type: registro-mudanca
status: em-elaboracao
tags:
  - projeto/registro-mudanca
  - projeto/gestao
related_notes: []
author:
  - PF Rezende
commits: []
---

# Registro de Mudança — Reestruturação Fronteiras Lifecycle

> [!info] Identificação
> - **Data:** 2026-09-05
> - **Tipo:** estrutural
> - **Origem:** pedido do usuário + investigação de vaults duplicados
> - **Antecessor:** `00-project-control/registro-mudancas/2026-09-02-poda-estrutura-repositorio-fases-1-3.md`
> - **Branch:** `restructure/lifecycle-borders` · **Tag backup:** `pre-lifecycle-2026-09-05`

## 1. Resumo

Migração de organização por domínio para lifecycle-first com 3 fronteiras (`01-work` → `02-review` → `03-approved`), vault único no iCloud como fonte de verdade e Google Drive como espelho somente-leitura de `03-approved/`.

**Resultado:** em andamento (Fase 0 concluída).

## 2. Contexto e motivação

- **Antes:** pastas por domínio (`01-blueprint/`, `02-refinement/`) misturavam rascunho, em-revisão e aprovado no mesmo endereço. `06-deliverables/` vazio. Drive com 4 raízes paralelas (`Obsidian Inventory/`, `Reviewed and Approved Files/`, `Documentações Oficiais/`, `_SYSTEM/`).
- **Problema ou oportunidade:** drafts convivendo com finais; `primeiro-rascunho-projeto/` ainda em `01-blueprint/`; P03 9x `rascunho` descritos como "em revisão"; `cenarios/` P01-S01…S06 duplicados iCloud↔Drive com drift real (tag `task` adicionada só no Drive, ver censo).
- **Objetivo:** um arquivo, um status, um lugar. Vocabulário controlado por pasta. Promoção = mover + carimbar, nunca editar no lugar.

## 3. O que mudou

### 3.1 Artefatos criados ou atualizados

| Arquivo | Papel | Gaps / requisitos | Links |
|---|---|---|---|
| `00-project-control/registro-mudancas/2026-09-05-lifecycle-census-filelist.txt` | censo pré-move (592 arquivos rastreados) | — | — |
| `00-project-control/registro-mudancas/2026-09-05-lifecycle-census-status.txt` | histograma `status:` (prova do caos vocabular) | — | — |
| `01-work/README.md`, `02-review/README.md`, `03-approved/README.md` | guardas de fronteira | — | — |

### 3.2 Decisões e regras afetadas

- P03 9x → `01-work/` (rascunho, decisão do usuário 2026-09-05).
- `P01-S01…S06` iCloud → `03-approved/cenarios/` (finais assinadas P01/P02, decisão do usuário 2026-09-05; Drive dissolve).
- `HUB_Documentos_Oficiais/` (shell aspiracional) → `01-work/documentos-oficiais/` com aviso "nada aqui é oficial, ver GOV-001".
- `Obsidian Inventory/` e `Reviewed and Approved Files/` aposentados; Drive espelha só `03-approved/` com paths idênticos.

## 4. Impactos e rastreabilidade

- **Impacto no escopo:** nenhum no conteúdo; só endereços + `status:`.
- **Impacto operacional:** links `[[...]]` entre fronteiras ganham nota-ponteiro no path antigo por um ciclo.
- **Impacto técnico ou de dados:** `git mv` preserva histórico; rollback = `git reset --hard pre-lifecycle-2026-09-05`.
- **Rastreabilidade:** requisito (separar draft de aprovado) → censo → entregável (`03-approved/` + espelho Drive).

## 5. Validação e sincronização

- **Validação realizada:** branch + tag + censo (Fase 0).
- **Resultado:** em andamento.
- **Arquivos vivos sincronizados:** este registro; `project-map.md` e `README.md` na Fase 7.

## 6. Próximos passos

- [ ] Fases 1–5: esqueleto, moves `01-work`/`02-review`/`03-approved`, ponteiros, carimbos
- [ ] Fase 6: import shell documentos-oficiais, espelho Drive, aposentar Inventory/Reviewed (confirmar cada delete)
- [ ] Fase 7: reescrever README + project-map, sweep de links, histograma final zerado

## 7. Referências

- Censo: `2026-09-05-lifecycle-census-filelist.txt`, `2026-09-05-lifecycle-census-status.txt`
- Branch `restructure/lifecycle-borders`, tag `pre-lifecycle-2026-09-05`
