---
title: "Registro de Mudança — Retorno de 6 domínios blueprint para 01-work"
date: 2026-09-29
type: registro-mudanca
status: registrado
tags:
  - projeto/registro-mudanca
  - projeto/gestao
  - lifecycle
related_notes:
  - "[[00-project-control/registro-mudancas/2026-09-05-aposentadoria-blueprint-v1]]"
  - "[[00-project-control/registro-mudancas/2026-09-05-submissao-reconciliacao-blueprint]]"
author:
  - PF Rezende
commits: []
---

# Registro de Mudança — Retorno de 6 domínios blueprint para 01-work

> [!info] Identificação
> - **Data:** 2026-09-29
> - **Tipo:** governança (retorno de domínios à fronteira de elaboração)
> - **Origem:** decisão direta do usuário — retornar os 6 domínios sem contrapartida aprovada para `01-work/`
> - **Antecessor:** [[00-project-control/registro-mudancas/2026-09-05-aposentadoria-blueprint-v1|2026-09-05-aposentadoria-blueprint-v1]]

## 1. Resumo

Os 6 domínios blueprint que foram arquivados como testemunha na aposentadoria da v1 (por não terem contrapartida aprovada na reconciliação v2) retornaram para `01-work/` com status `rascunho`. Cada domínio foi realocado para seu tema correspondente na estrutura de 01-work.

**Resultado:** 6 domínios (12 arquivos) movidos de `99-archive/superado/` para `01-work/`, status `em-revisao` → `rascunho`.

## 2. Contexto e motivação

- **Antes:** os 6 domínios estavam em `99-archive/superado/01-blueprint-v1-submissao-superada/` como testemunha, sem contrapartida na reconciliação v2.
- **Problema ou oportunidade:** domínios fundamentais do blueprint estavam fora da fronteira de elaboração, impedindo evolução e refinamento.
- **Objeto:** retornar os domínios para `01-work/` para que possam ser refinados e preparados para futura submissão ao gate.

## 3. O que mudou

### 3.1 Domínios movidos

| Domínio | Destino em `01-work/` | Tema |
|---|---|---|
| `modelo-negocio/` | `01-work/mercado-e-direcao/modelo-negocio/` | Mercado e Direção |
| `marca-mercado/` | `01-work/mercado-e-direcao/marca-mercado/` | Mercado e Direção |
| `visao-lancamento/` | `01-work/mercado-e-direcao/visao-lancamento/` | Mercado e Direção |
| `produto/` | `01-work/produto-e-operacao/produto/` | Produto e Operação |
| `operacoes/` | `01-work/produto-e-operacao/operacoes/` | Produto e Operação |
| `governanca-juridico/` | `01-work/pesquisa-e-confianca/governanca-juridico/` | Pesquisa e Confiança |

### 3.2 Status atualizado

- `status: em-revisao` → `status: rascunho` em todos os 6 arquivos de blueprint
- READMEs de domínio permanecem sem status (conforme convenção)

### 3.3 Decisões e regras afetadas

- Os 6 domínios ficam livres para edição em `01-work/` (fronteira de elaboração)
- Promoção futura exige novo ciclo `01-work → 02-review → gate`
- A v2 reconciliada (`03-approved/reconciliacao-blueprint/`) permanece inalterada

## 4. Impactos e rastreabilidade

- **Impacto no escopo:** nenhum — os domínios já faziam parte do blueprint original
- **Impacto operacional:** os domínios voltam a ser editáveis e refináveis
- **Impacto técnico ou de dados:** nenhum
- **Rastreabilidade:** decisão do usuário → este registro → moves via `mv` + `git add`

## 5. Validação e sincronização

- **Validação realizada:** `git status` confirma 12 renames (6 domínios × 2 arquivos cada)
- **Resultado:** verde
- **Arquivos vivos sincronizados:** pendente — `project-map.md` precisa ser atualizado para refletir os novos caminhos

## 6. Próximos passos

- [ ] Atualizar `project-map.md` com os novos caminhos dos 6 domínios
- [ ] Refinar os 6 domínios em `01-work/` (eliminar `em-revisao` residual, completar lacunas)
- [ ] Preparar nova submissão ao gate quando os domínios estiverem prontos

## 7. Referências

- [[00-project-control/registro-mudancas/2026-09-05-aposentadoria-blueprint-v1|Aposentadoria Blueprint v1]]
- [[00-project-control/registro-mudancas/2026-09-05-submissao-reconciliacao-blueprint|Submissão Reconciliação v2]]
- [[00-project-control/registro-mudancas/2026-09-05-reestruturacao-fronteiras-lifecycle|Reestruturação Fronteiras Lifecycle]]
