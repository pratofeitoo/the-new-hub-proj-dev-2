---
doc_id: PM-GOV-003
titulo: Fluxo de aprovação de decks — HUB
status: rascunho / provisório / não aprovado
versao: v0.1
owner: Sistema de apresentações + Governança — a confirmar
fontes:
  - ../04-sistema-de-apresentacoes/checklist-de-publicacao.md
  - ../04-sistema-de-apresentacoes/regras-de-notas-de-evidencia.md
  - status-e-rotulos-de-maturidade.md
dependencias:
  - fluxo-de-aprovacao-de-claims.md
  - ../00-controle/registro-de-decisoes.md
---

# Fluxo de aprovação de decks — HUB

> Gate de trabalho para apresentações. Não aprova identidade, claims ou publicação por si só.

## Estados

`rascunho` → `checagem de conteúdo` → `checagem de design e acessibilidade` → `pronto para revisão` → `aprovado para contexto` → `publicado` → `expirado` ou `retirado`.

Qualquer falha relevante pode levar a `bloqueado` e retornar o deck ao estado anterior.

## Passos

1. Registrar deck ID, título, versão, público, canal, finalidade e owner.
2. Escolher template e registrar exceções ao sistema visual.
3. Inventariar cada claim, fonte, período, unidade, status e limitação.
4. Classificar imagens, logos, fontes, direitos e autorização de terceiros.
5. Verificar leitura, contraste, foco quando interativo, texto alternativo e notas de evidência.
6. Revisar conteúdo com owners de fonte e claims; revisar design e acessibilidade com responsáveis nomeados.
7. Registrar decisão, aprovadores, contexto permitido, validade e versão do arquivo publicado.
8. Publicar somente a versão aprovada e preservar pacote-fonte, exportação e registro.
9. Revalidar em mudança de fonte, claim, público, canal, período, identidade ou validade.

## Pacote mínimo

- deck editável e PDF/HTML exportado;
- deck ID, versão e checksum quando aplicável;
- template, renderer e exceções;
- fontes, claims e decisões vinculadas;
- checklist de acessibilidade e publicação;
- owners, revisores, aprovação e validade;
- limitações e instruções de retirada.

## Bloqueios

Fonte ausente, claim não aprovado, asset sem direito, status invisível, texto ilegível, exportação divergente, público não autorizado ou versão sem owner bloqueiam a publicação.
