---
title: "Decisão 2026-09-06 — Arquitetura de três softwares"
date: "2026-09-06"
type: decision
status: pending
tags:
  - projeto/decisao
  - projeto/gestao
  - arquitetura
  - obsidian
  - openknowledge
  - ideon
author:
  - PF Rezende
---

# Decisão 2026-09-06 — Arquitetura de três softwares

## Informações

- **Data:** 2026-09-06
- **Responsável pela decisão:** PF Rezende
- **Participantes ou consultados:** Agentes do projeto HUB
- **Relacionado a:** Organização do repositório, controle de caos informacional, papéis de Obsidian, OpenKnowledge e Ideon

## Questão a decidir

How do we stop the growth of data pollution and cross-linked chaos in a single ever-growing repository — a condition that index files and project-mapping notes no longer contain — before the project collapses under its own volume?

## Contexto

- The project accumulated extensive documentation of progress and challenges. That record became evidence that strict, clear rules alone could not contain the problem.
- A large volume of tightly connected files produced data pollution affecting dozens of agents.
- Index files and root mapping notes were insufficient. The repository kept growing, and cross-references kept crossing over one another.
- The author could no longer understand the project because the entanglement dated from the start.
- Structural attempts were exhausted: two repos, three repos, and one repo split into two parts. None held.
- OpenKnowledge and Ideon were evaluated in this session. Capability evidence is recorded in `.agents/openknowledge-capabilities.md` and `.agents/ideon-capabilities.md`.
- Premise: Obsidian is the most flexible of the three tools, but that flexibility overwhelmed a single large project with too many capabilities and too many ways of doing things.

## Decisão

From this date forward, the project is built with three distinct software roles:

1. **Obsidian — ideation and controlled chaos.** Big ideas are born here, with fragments flying side to side, within what the software can safely handle. Chaotic material is held and polished here until it becomes stable — chaos polished into a diamond.
2. **OpenKnowledge — stable, controlled production.** Once work is stable and shining, it transitions quickly from Obsidian to OpenKnowledge. OpenKnowledge keeps production on track: results that do not change shape every three days, data trusted for investors and potential buyers, and a coherent view of how project parts behave, relate, and affect each other.
3. **Ideon — focused execution whiteboard.** Work is deliberately made smaller, focused, and limited to what must be done. Ideon is the big whiteboard: easy to draw, easy to clean, for moments requiring simple, quick solutions with a few ugly drawings around them.

Obsidian is no longer used to pursue perfection. Perfection is produced downstream in OpenKnowledge; focus is produced in Ideon.

## Alternativas consideradas

| Alternativa | Vantagens | Desvantagens | Motivo da não escolha |
|---|---|---|---|
| Keep a single Obsidian-only project with stricter rules | No migration cost; keeps current habits | Flexibility keeps regenerating chaos; indexes already failed at scale | Does not solve the root cause |
| Split into two or three repositories again | Temporary separation of concerns | Previous attempts failed; cross-links and growth re-entangled the parts | Already tested without lasting effect |
| Move everything to OpenKnowledge | Maximum control and stability | Loses Obsidian's ideation power and Ideon's fast visual focus | Sacrifices the stage the project needs most |
| Move everything to Ideon | Fast, simple, visual execution | Not a durable knowledge base; wrong tool for stable production truth | Too limited for investor-grade stability |

## Justificativa

Each tool is assigned to the failure mode it best prevents: Obsidian absorbs open-ended ideation without forcing premature order; OpenKnowledge enforces stability, traceability, and investor-grade confidence; Ideon constrains execution to small, fast, erasable units. The separation matches the evaluated evidence: Obsidian is the most powerful and flexible, OpenKnowledge the most capable of keeping production on track, and Ideon the simplest surface for quick solutions.

## Impactos

- **Benefícios esperados:** Contained chaos; stable production data; faster investor/buyer-ready reporting; clearer agent responsibilities; smaller focused execution units.
- **Riscos:** Transition friction between tools; duplicated content during migration; unclear ownership of the Obsidian-to-OpenKnowledge promotion step.
- **Dependências:** Capability evidence in `.agents/`; lifecycle and borders framework in `00-project-control/framework/HUB_Framework_Fronteiras_Lifecycle.md`.
- **O que muda:** Obsidian becomes the ideation layer; OpenKnowledge becomes the stable production layer; Ideon becomes the fast execution whiteboard.
- **O que não muda:** The repository remains the source of truth; existing lifecycle borders and gates remain in force until explicitly revised.

## Plano de ação

| Ação | Responsável | Prazo | Status |
|---|---|---|---|
| Define the Obsidian-to-OpenKnowledge promotion criteria | PF Rezende | 2026-09-13 | ☐ Pendente |
| Define what belongs in Ideon vs. what stays out | PF Rezende | 2026-09-13 | ☐ Pendente |
| Record tool-ownership rules in the lifecycle framework | PF Rezende | 2026-09-20 | ☐ Pendente |
| Pilot one stable deliverable through Obsidian to OpenKnowledge | PF Rezende | 2026-09-20 | ☐ Pendente |

## Critérios de revisão

- **Data ou evento para revisão:** 2026-10-06, or earlier if promotion backlog grows or production data becomes unstable.
- **Evidências a acompanhar:** Promotion throughput, recurrence of cross-link pollution, agent confusion reports, investor-report confidence.
- **Condição para reconsiderar a decisão:** Evidence that chaos is leaking into OpenKnowledge production or that Ideon work is bypassing the stable layer.

## Referências

- `.agents/openknowledge-capabilities.md`
- `.agents/ideon-capabilities.md`
- `00-project-control/framework/HUB_Framework_Fronteiras_Lifecycle.md`
- `00-project-control/decisoes/template-decisao.md`
