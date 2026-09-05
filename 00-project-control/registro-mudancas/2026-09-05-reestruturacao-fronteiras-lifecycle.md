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

- **Validação realizada (2026-09-05, Fase 7):** sweep de links — zero refs a paths antigos fora de stubs/histórico/arquivo (as 2 ocorrências restantes em `README.md`/`project-map.md` são prosa intencional sobre pastas aposentadas); histograma `status:` por fronteira — `03-approved/` 100% `aprovado`, `02-review/pacotes/` `em-revisao`, `01-work/` em `rascunho|em-elaboracao` exceto o vocabulário próprio herdado de `documentos-oficiais/` (`hipotese|...`, sempre abaixo de aprovado); espelho Drive `03-approved/` idêntico ao iCloud (`diff -rq` limpo).
- **Resultado:** concluído, exceto aposentadorias no Drive (pendentes de confirmação — deletes em shared drive).
- **Arquivos vivos sincronizados:** `README.md`, `project-map.md`, `05-resources/README.md`, READMEs de fronteira, este registro.

## 6. Próximos passos

- [x] Fases 1–5: esqueleto, moves `01-work`/`02-review`/`03-approved`, ponteiros, carimbos
- [x] Fase 6 (parcial): import shell documentos-oficiais, espelho Drive; **falta: aposentar `Obsidian Inventory/`, `Reviewed and Approved Files/`, fonte `Documentações Oficiais/` no Drive (confirmar cada delete — shared drive, irreversível)**
- [x] Fase 7: README + project-map reescritos, sweep de links, verificação por fronteira
- [ ] Decisão futura: remover stubs `01-blueprint/`, `02-refinement/`, `04-project-management/cenarios/README.md` (próximo ciclo)
- [ ] Decisão futura: normalizar campo legado `layer:` (`blueprint|refinement|approval` → `work|review|approved`) e tipos `hypothesis` em cenários aprovados

## 7. Referências

- Censo: `2026-09-05-lifecycle-census-filelist.txt`, `2026-09-05-lifecycle-census-status.txt`
- Branch `restructure/lifecycle-borders`, tag `pre-lifecycle-2026-09-05`
