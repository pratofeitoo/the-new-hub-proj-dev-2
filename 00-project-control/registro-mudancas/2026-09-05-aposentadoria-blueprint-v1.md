---
title: "Registro de Mudança — Aposentadoria da submissão blueprint v1"
date: 2026-09-05
type: registro-mudanca
status: rascunho
tags:
  - projeto/registro-mudanca
  - projeto/gate
related_notes: []
author:
  - PF Rezende
gate_owner: PF Rezende (dono do projeto)
commits: []
---

# Registro de Mudança — Aposentadoria da submissão blueprint v1

> [!info] Identificação
> - **Data:** 2026-09-05
> - **Tipo:** governança (aposentadoria de pacote superado)
> - **Origem:** decisão direta do usuário: aposentar a v1 e manter a v2 em espera.
> - **Antecessor:** `2026-09-05-submissao-blueprint-review.md` (v1),
>   `2026-09-05-submissao-reconciliacao-blueprint.md` (v2).

## 1. Resumo

O pacote `02-review/01-blueprint/` (v1, 9 domínios, 34 arquivos com números pré-reconciliação) foi
movido para `99-archive/superado/01-blueprint-v1-submissao-superada/`. O pacote
`02-review/02-reconciliacao-blueprint/` (v2) permanece **em espera dentro de `02-review/`**,
congelado em `em-revisao`, intocado — sem promoção e sem devolução.

**Resultado:** nenhuma versão com números obsoletos permanece legível como verdade atual; a v2
aguarda um passe futuro do gate.

## 2. Contexto e motivação

- **Antes:** v1 e v2 coexistiam em `02-review/` com 6 arquivos sobrepostos e números conflitantes
  (ex.: ROI ilustrativo na v1 vs. baseline zerada na v2).
- **Problema ou oportunidade:** manter as duas legíveis lado a lado era uma armadilha para
  leitores futuros; a v1 já cumpriu seu papel como evidência da submissão original.
- **Objetivo:** uma única versão de referência em revisão (v2), com a v1 preservada como
  testemunha fora do caminho.

## 3. O que mudou

### 3.1 Artefatos criados ou atualizados

| Arquivo | Papel | Gaps / requisitos | Links |
|---|---|---|---|
| `99-archive/superado/01-blueprint-v1-submissao-superada/` (34 arquivos, via `git mv`) | Testemunha da submissão original, fora do caminho | — | `2026-09-05-submissao-blueprint-review.md` |
| `02-review/02-reconciliacao-blueprint/` (intocado) | Única versão em revisão, em espera por passe futuro | UNVERIFIED abertos na revisão humana | `2026-09-05-submissao-reconciliacao-blueprint.md` |

### 3.2 Decisões e regras afetadas

- v2 **não** foi aprovada nem devolvida: status segue `em-revisao`, sem edição, até o passe futuro.
- Os 6 domínios da v1 sem contraparte na v2 (marca, modelo-negócio, operações, produto,
  visão-lançamento, governança) acompanham a v1 para o archive como testemunha; eventual promoção
  deles exigirá decisão explícita do gate.

## 4. Impactos e rastreabilidade

- **Impacto no escopo:** nenhum.
- **Impacto operacional:** `02-review/` volta a ter um único pacote blueprint legível.
- **Impacto técnico ou de dados:** histórico preservado via `git mv`; nenhum conteúdo alterado.
- **Rastreabilidade:** este registro → decisão do usuário → v2 pendente.

## 5. Validação e sincronização

- **Validação realizada:** `ls` pós-movimento (v1 no archive, v2 intacta em review); `project-map.md` atualizado.
- **Resultado:** verde.
- **Arquivos vivos sincronizados:** `project-map.md` (tabela + árvore).

## 6. Próximos passos

- [ ] Passe futuro do gate sobre a v2 (dono: usuário) — aprovar, devolver ou exigir contrato nos UNVERIFIED.
- [ ] Decisão explícita sobre os 6 domínios sem contraparte na v2, quando o passe ocorrer.

## 7. Referências

- `2026-09-05-submissao-blueprint-review.md`
- `2026-09-05-submissao-reconciliacao-blueprint.md`
- `2026-09-05-consolidado-diario.md`
