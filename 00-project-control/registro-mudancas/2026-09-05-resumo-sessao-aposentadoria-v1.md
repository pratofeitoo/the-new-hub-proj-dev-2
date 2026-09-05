---
title: "Resumo de Sessão — Aposentadoria Blueprint V1 e espera da V2"
date: 2026-09-05
type: registro-mudanca
status: rascunho
tags:
  - projeto/registro-mudanca
  - projeto/gate
related_notes: []
author:
  - PF Rezende
commits:
  - b026a81
---

# Resumo de Sessão — Aposentadoria Blueprint V1 e espera da V2

## Objetivo

Executar a decisão do usuário de aposentar o pacote blueprint V1 e manter o pacote reconciliado
V2 em espera dentro de `02-review`, sem promoção nem novas edições.

## Tarefas executadas

- Retirar a V1 da faixa ativa de revisão sem apagar seu histórico.
- Preservar a V2 reconciliada como o único pacote blueprint ativo em revisão.
- Registrar a decisão de lifecycle e atualizar a navegação do projeto.
- Versionar e sincronizar a mudança com o GitHub.

## Resultados

- `02-review/01-blueprint/` foi movido por `git mv` para
  `99-archive/superado/01-blueprint-v1-submissao-superada/`; o conteúdo não foi editado nem apagado.
- `02-review/02-reconciliacao-blueprint/` permaneceu no lugar e intocado; seus 7 arquivos Markdown
  continuam com `status: em-revisao` e em espera.
- Criado `00-project-control/registro-mudancas/2026-09-05-aposentadoria-blueprint-v1.md`, registrando
  decisão, proveniência, escopo e opções do próximo gate.
- `project-map.md` atualizado para exibir a V2 como pacote ativo e a V1 como superada/arquivada.
- Estado de diretórios e os 7 carimbos de status da V2 verificados.
- Commit `b026a81` enviado para `main` no GitHub.

## Status atual

- V1: arquivada, superada e recuperável.
- V2: congelada em `02-review/02-reconciliacao-blueprint/`, aguardando revisão humana futura.
- Nenhum pacote blueprint foi aprovado ou promovido nesta sessão.
- P03 continua em espera.
- Alterações locais não relacionadas em `.obsidian/workspace.json` não devem ser incluídas em commits.

## Próximos passos recomendados

1. Fazer a revisão humana da V2, começando pelos mapeamentos `UNVERIFIED` em
   `mapeamento-identidade-relacoes-sequenciamento-v1.md`.
2. Registrar um veredito explícito: promover a `03-approved`, devolver a `01-work` ou exigir contratos.
3. Decidir separadamente o destino dos domínios exclusivos da V1 no próximo passe.
4. Manter o inventário aprovado imutável e P03 em espera até o gate terminar.
