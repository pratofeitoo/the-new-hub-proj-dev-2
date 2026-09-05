---
title: P07 — Portão de Lançamento
phase: P07
version: 1.0
status: rascunho
layer: cross-cutting
priority: critica
area: launch-vision
owner:
  - PF Rezende (controle projeto)
  - Jurídico + Tech + Dados + Finanças (co-aprovadores)
tags:
  - hub
  - fase-projeto
  - P07
  - lancamento
  - approval
gap_ids:
  - LCH-001
  - LCH-002
  - LCH-003
  - LCH-004
  - LCH-005
  - LCH-006
  - LCH-007
  - STR-003
bp_tasks:
  - BP-008
related_notes:
  - "[[01-work/visao-lancamento/HUB_Blueprint_Lancamento_e_Evolucao]]"
  - "[[04-project-management/planos-mestres/HUB_Plano_Fases_v1]]"
  - "[[02-review/portao-lancamento]]"
created: 2026-08-26
updated: 2026-08-26
---

# P07 — Portão de Lançamento

> [!info] Papel no sequenciamento
> **Fase final.** Consolida todas as anteriores em um checklist integrado e workflow de aprovação auditável. Não cria especificação nova — **verifica** que P01–P06 existem, estão conectadas e têm evidência. Só então libera `03-approved/`.

## 1. Objetivo

Construir e operar o portão mestre de lançamento do sistema completo — cobrindo negócio, produto, dados, tecnologia, jurídico, finanças, operações e comunicações — com critérios de release, evidências, responsáveis e regras de promoção/reentrada.

## 2. Gaps que esta fase fecha

| ID | Gap | Tipo | Condição de aprovação |
|---|---|---|---|
| **LCH-001** | Checklist integrado prontidão lançamento | launch | Todos críticos aprovados ou condicionalmente aprovados |
| **LCH-002** | Produto implantável + ambientes + suporte + rollback | launch | Revisão prontidão operacional passa |
| **LCH-003** | Autoridade aprovação + pacotes revisão + bloqueadores + reentrada | validation | Aprovação auditável independente |
| **LCH-004** | Rastreabilidade requisito→evidência→entregável | connection | Nenhum crítico órfão |
| **LCH-005** | Riscos/premissas/dependências com dono/data/limiar | governance | Críticos com tratamento ou bloqueiam |
| **LCH-006** | Onboarding cliente, contratos, preço, privacidade, suporte | launch | Checklist comercial+operacional passa |
| **LCH-007** | Ciclo vida artefatos (blocked/refining→aprovado) | validation · **blocking: yes** | Todo artefato lançamento com status e proveniência válidos antes de liberar P07 |
| **STR-003** | Roadmap coerente entre domínios | connection | Dependências + critérios saída aprovados |

## 3. Escopo

### Dentro
1. Portão mestre de lançamento: grafo dependências P01→P06 + checklist integrado (negócio, produto, dados, tech, jurídico, finanças, ops, comunicações) (LCH-001).
2. Plano operacional lançamento: produto implantável, ambientes, monitoramento, suporte, resposta incidentes, rollback (LCH-002 + TEC-007 + PRD-005).
3. Workflow aprovação: autoridade, pacote evidências, cadência review, bloqueadores, reentrada, trilha auditoria (LCH-003).
4. Matriz rastreabilidade requisitos→evidência→entregável (LCH-004).
5. Registro riscos/premissas/dependências operacionalizado com dono, data, limiar, escalonamento, decisão (LCH-005 + `00-project-control/riscos/` + `premissas/` + `dependencias/`).
6. Pacote lançamento por oferta/mercado: onboarding, contratos, precificação, aviso privacidade, suporte, alegações comerciais (LCH-006).
7. Ciclo vida artefatos + regras promoção: quando e como `blocked/refining` → `aprovado/condicionalmente-aprovado` → `03-approved/` (LCH-007 + framework § Regras).
8. Roadmap coerente final via gates P01→P07 (STR-003).

### Fora
- Qualquer liberação que ignore gate: `03-approved/` só recebe o que saiu de `02-review/aprovado/`
- Expansão M3/M4 (modelos, marketplace nacional) — fica pós-lançamento com novos gates

## 4. Entradas

- Gates **P01→P06** (todos aprovados ou condicionalmente aprovados com plano de remediação)
- [`HUB_Blueprint_Lancamento_e_Evolucao.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/01-work/visao-lancamento/HUB_Blueprint_Lancamento_e_Evolucao.md) + [`HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md) (portões ilustrativos §3)
- [`HUB_Escopo_Estrategico_Documento_Mae_v2_Pronta_Investidor_pt-BR.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/planos-mestres/HUB_Escopo_Estrategico_Documento_Mae_v2_Pronta_Investidor_pt-BR.md) §14 Marcos (gates meses 0-18)
- Gaps `LCH-*`

## 5. Saídas

| Artefato | Onde vive | Camada |
|---|---|---|
| Portão mestre + grafo dependências | `02-review/portao-lancamento/portao-mestre-v1.md` | approval |
| Plano operações lançamento + runbook release | `02-review/portao-lancamento/` + `04-project-management/planos-fase/` | approval→gestão |
| Workflow aprovação + templates pacote revisão | `02-review/criterios-aprovacao/` + `02-review/pacotes/` | approval |
| Matriz rastreabilidade requisitos→evidência | `02-review/evidencias/` | approval |
| Registro riscos/premissas/dependências operacionalizado | `00-project-control/riscos/` + `premissas/` + `dependencias/` + `registro-lacunas/` | controle |
| Checklist lançamento comercial por oferta | `02-review/portao-lancamento/` + `03-approved/lancamento/` (após aprovação) | approval→deliverable |
| Ciclo vida artefatos + regras promoção | `02-review/portao-lancamento/` | approval |
| Marcos fases v1 | `04-project-management/marcos/` | gestão |
| Cronograma fases v1 | `04-project-management/cronogramas/` | gestão |

## 6. Critérios de saída (gate P07 — Launch Approved)

- [ ] **G07.1** — Portão mestre cobre P01→P06; todo item tem dono, evidência e status `aprovado / condicional / bloqueado` (LCH-001). Nenhum crítico permanece `blueprint`.
- [ ] **G07.2** — Produto implantável + ambientes + monitoramento + suporte + resposta incidentes + rollback exercitados e aprovados em review operacional (LCH-002).
- [ ] **G07.3** — Workflow aprovação com autoridade nomeada, pacote evidências, cadência, bloqueadores, reentrada — auditável por terceiro (LCH-003).
- [ ] **G07.4** — Matriz rastreabilidade sem requisito crítico órfão (LCH-004).
- [ ] **G07.5** — Riscos/premissas/dependências críticas com dono, data, limiar e tratamento; sem risco crítico sem plano (LCH-005).
- [ ] **G07.6** — Checklist comercial: onboarding, contratos, preços com base P06, aviso privacidade P04, suporte e alegações limitadas a evidência P06 (LCH-006).
- [ ] **G07.7** — Todo artefato de lançamento tem status válido e proveniência; regra de promoção respeitada (**LCH-007; blocking: yes**). Retenção histórica ampliada e automações de ciclo de vida ficam pós-MVP.
- [ ] **G07.8** — Roadmap e gates P01→P07 sem contradição (STR-003).

> **Definição de lançamento pronto:** `P07 Launch Approved` = `P01..P06` aprovados + G07.1..G07.8 passam + sistema coerente como um todo (framework Definição de conclusão). Não basta 1 módulo.

## 7. Tarefas

| Tarefa | Gap |
|---|---|
| Construir portão mestre + grafo dependências | LCH-001 |
| Plano operações lançamento + runbook | LCH-002 |
| Workflow aprovação + templates | LCH-003 |
| Matriz rastreabilidade requisitos→evidência | LCH-004 |
| Popular registros riscos/premissas/dependências | LCH-005 |
| Checklist lançamento comercial por oferta | LCH-006 |
| Definir ciclo vida artefatos + regras promoção | LCH-007 |

## 8. Riscos

| Risco | Mitigação |
|---|---|
| Lançar com gate condicional sem plano | G07.1 exige plano remediação datado para todo `condicional` |
| Deliverable sem aprovação | G07.7: `03-approved/` bloqueado até `02-review/aprovado/` |
| Gate vira formalidade | G07.3: trilha auditável + aprovação por papel, não por pessoa |

## 9. Referências
- [`BP-008`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/tarefas/BP-008_HUB_Blueprint_Lancamento_e_Evolucao.md)
- [`HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md` §3 Aprovação](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md)
