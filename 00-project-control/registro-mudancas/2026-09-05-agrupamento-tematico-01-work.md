---
title: "Registro de Mudança — Agrupamento Temático de 01-work"
date: 2026-09-05
type: registro-mudanca
status: aprovado
tags:
  - projeto/registro-mudanca
  - projeto/gestao
related_notes:
  - "[[00-project-control/registro-mudancas/2026-09-05-reestruturacao-fronteiras-lifecycle|Reestruturação Fronteiras Lifecycle]]"
author:
  - PF Rezende
commits: []
---

# Registro de Mudança — Agrupamento Temático de 01-work

> [!info] Identificação
> - **Data:** 2026-09-05
> - **Tipo:** estrutural (organização interna de fronteira, sem mudança de lifecycle)
> - **Origem:** pedido do usuário — 14 pastas flat em `01-work/` ilegíveis; labels de seção necessários
> - **Antecessor:** [[00-project-control/registro-mudancas/2026-09-05-reestruturacao-fronteiras-lifecycle|2026-09-05-reestruturacao-fronteiras-lifecycle]]

## 1. Resumo

`01-work/` reorganizado em 4 temas com README próprio; nomes de domínio preservados 1:1, um nível abaixo.
Nenhum `status:` alterado, nenhuma fronteira tocada.

**Resultado:** `mercado-e-direcao/`, `produto-e-operacao/`, `dados-tech-financas/`, `pesquisa-e-confianca/`.

## 2. Mapeamento

| Tema | Domínios |
|---|---|
| `mercado-e-direcao/` | `estrategia/`, `modelo-negocio/`, `marca-mercado/`, `visao-lancamento/` |
| `produto-e-operacao/` | `produto/`, `operacoes/`, `refinamento-produto/` |
| `dados-tech-financas/` | `dados-inteligencia/`, `tecnologia/`, `modelos-financeiros/`, `refinamento-modelo-dados/` |
| `pesquisa-e-confianca/` | `pesquisa/`, `governanca-juridico/`, `documentos-oficiais/` |

`02-review/` e `03-approved/` permanecem flat (2 pastas cada, com README próprio) — decisão do usuário.

## 3. Validação

- Moves via `git mv` (histórico preservado).
- Sweep de links: zero refs aos paths pré-tema fora de `99-archive/` e `registro-mudancas/`.
- Docs sincronizados: framework §4, `project-map.md`, `01-work/README.md`, 4 READMEs de tema.
