---
doc_id: PM-GOV-007
titulo: Controle de versões e changelog — HUB
status: rascunho / provisório / não aprovado
versao: v0.1
owner: Coordenação do projeto + owners dos documentos — a confirmar
fontes:
  - ../00-controle/README.md
  - ../00-controle/registro-de-progresso.md
  - status-e-rotulos-de-maturidade.md
dependencias:
  - ../00-controle/registro-de-decisoes.md
---

# Controle de versões e changelog — HUB

> Convenção provisória para preservar rastreabilidade de documentos, decks, protótipos, dashboards e decisões.

## 1. Identificação

Cada artefato deve possuir ID estável, versão, status, owner, data de revisão, validade, fontes, dependências e próximo gate. Usar versões semânticas quando houver mudança operacional:

- `0.x`: rascunho ou hipótese;
- `1.0`: primeira versão aprovada para um contexto;
- `1.x`: mudança compatível de conteúdo ou aplicação;
- `2.0`: mudança que altera interpretação, escopo, contrato ou aprovação.

## 2. O que exige nova versão

- mudança de claim, número, fonte, definição ou fórmula;
- mudança de público, canal, período, owner ou validade;
- mudança de token que afete componentes ou artefatos;
- alteração visual que mude interpretação ou acessibilidade;
- promoção, reversão, expiração ou retirada;
- correção de erro, mesmo sem mudança de aparência.

## 3. Changelog mínimo

| Data | ID/versão | Tipo | Mudança | Motivo/fonte | Impacto | Autor | Revisor/gate |
|---|---|---|---|---|---|---|---|
| AAAA-MM-DD | PM-XXX v0.1 | criado | descrição curta | fonte ou decisão | artefatos afetados | nome | pendente |

Tipos: `criado`, `alterado`, `corrigido`, `promovido`, `revertido`, `expirado`, `retirado`.

## 4. Regras de publicação

- preservar versão anterior e motivo da mudança;
- gerar exports a partir de fonte identificada;
- registrar renderer quando afetar reprodução;
- não sobrescrever uma versão aprovada sem nova versão e gate;
- manter checksum ou identificador do arquivo publicado quando aplicável;
- vincular cada mudança relevante ao registro de decisão, claim ou teste correspondente.

## 5. Reversão

Em caso de erro, retirar ou marcar a versão afetada, publicar correção com nova versão e registrar canais impactados. Reverter conteúdo não apaga o histórico nem restaura automaticamente uma aprovação vencida.
