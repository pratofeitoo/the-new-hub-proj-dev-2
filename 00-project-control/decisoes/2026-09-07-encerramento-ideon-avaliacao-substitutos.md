---
title: "Decisão 2026-09-07 — Encerramento do uso do Ideon"
date: "2026-09-07"
type: decision
status: stable
tags:
  - projeto/decisao
  - projeto/gestao
  - arquitetura
  - ideon
  - notegen
  - affine
author:
  - PF Rezende
supersedes:
  - "./2026-09-06-arquitetura-tres-softwares.md"
---

## Informações

- **Data:** 2026-09-07
- **Responsável pela decisão:** PF Rezende
- **Relacionado a:** Ferramenta visual para organização e execução do projeto

## Questão a decidir

Whether Ideon remains suitable as the project’s visual execution canvas.

## Contexto

Testing showed that Ideon depends on its cloud service to function and to load its interface. This dependency conflicts with the project’s requirement for dependable local access and makes the tool unsuitable as a core project surface. The finding is recorded in the local `.agents/ideon-capabilities.md` evaluation.

## Decisão

We will stop using Ideon. The project is evaluating possible replacements, with NoteGen and AFFiNE currently the two leading candidates. Neither replacement is selected yet; both remain in testing.

## Alternativas consideradas

| Alternativa | Motivo |
| --- | --- |
| Continue using Ideon | Rejected because its cloud dependency prevents dependable local use. |
| Adopt NoteGen | Candidate under evaluation; no final decision yet. |
| Adopt AFFiNE | Candidate under evaluation; no final decision yet. |

## Justificativa

Removing Ideon eliminates a known availability constraint without prematurely choosing a replacement. NoteGen and AFFiNE will be evaluated against the project’s actual canvas, local-access, persistence, and workflow requirements.

## Impactos

- **Benefícios esperados:** No further dependence on Ideon for project work; focused evaluation of viable replacements.
- **Riscos:** Temporary uncertainty and possible migration effort while NoteGen and AFFiNE are tested.
- **O que muda:** Ideon is no longer an active project tool.
- **O que não muda:** No replacement is adopted by this decision; evaluation remains open.

## Plano de ação

| Ação | Responsável | Prazo | Status |
| --- | --- | --- | --- |
| Test NoteGen against representative canvas workflows | PF Rezende | A definir | ☐ Pendente |
| Test AFFiNE against representative canvas workflows | PF Rezende | A definir | ☐ Pendente |
| Record the replacement decision after testing | PF Rezende | A definir | ☐ Pendente |

## Critérios de revisão

- **Data ou evento para revisão:** Após os testes comparativos de NoteGen e AFFiNE.
- **Evidências a acompanhar:** Local availability, canvas expressiveness, persistence, interoperability, and workflow fit.
- **Condição para reconsiderar a decisão:** Evidence that Ideon can provide dependable operation without the cloud dependency identified above.

## Referências

- Local evidence: `.agents/ideon-capabilities.md`
- [Earlier three-software architecture decision](./2026-09-06-arquitetura-tres-softwares.md)
- [Decision template](./template-decisao.md)
