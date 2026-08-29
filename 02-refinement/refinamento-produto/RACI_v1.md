---
title: RACI v1 — P02-T06 (rascunho)
task_id: P02-T06
phase: P02
status: rascunho
gap_ids:
  - GOV-008
  - STR-007
created: 2026-08-29
tags:
  - refinement
  - P02
---

# RACI v1 — Accountable único + autoridade delegada (rascunho)

> **G02.6 / G02.7** · Nenhuma atividade crítica com >1 A ou sem dono. Decisões críticas têm dono não-fundador + escalonamento.

## 1. Regra

- Cada atividade crítica tem **exatamente 1 Accountable**.
- Founder define intenção; não é caminho de aprovação não documentado.
- Delegação válida = autoridade + competência + capacidade + acesso + limite orçamentário + backup + rota escalonamento registrados.

## 2. Matriz (mínimo)

| Atividade crítica | Responsible | **Accountable** | Consulted | Informed | Direito de decisão | Escalar ao founder quando |
|---|---|---|---|---|---|---|
| Definir propósito/método | Strategy/Method Lead | **Strategy Lead** | Produto, Ops, Jurídico | Todos | Strategy Lead | altera promessa/método/arquitetura grupo |
| Portfólio e prioridades | Portfolio Lead | **Commercial Lead** | Produto, Dados, Governança | Founder | Commercial Lead | altera unit economics/risco marca/rota crítica |
| Entrega cliente (case) | Delivery Lead + Implementadores | **Delivery Lead** | Cliente, Parceiro, Suporte | Sponsor | Delivery Lead | exposição contratual/reputacional > limite |
| Produto e release | Product/Platform Lead | **Product Lead** | Tech, Dados, Suporte | Founder | Product Lead | altera alto impacto/finalidade dados/claim público |
| Dados, inteligência, medição | Data/Measurement Lead | **Measurement Lead** | Produto, Finanças, Governança | Sponsor | Measurement Lead | claim contestado/causal/financeiro/incerto |
| Trust, jurídico, Selo | Governança | **Trust Lead** | Jurídico, Avaliador Independente | Founder | Avaliador Independente | conflito/breach/Selo/exposição jurídica sem fórum |
| Pessoas, sucessão | Capability Owners | **People Lead** | Founder, Ops | Todos | People Lead | sem delegado qualificado / risco continuidade |

## 3. Mapa founder → delegado

Founder patrocina e desbloqueia excepcional; owners delegados mantêm backlog, gates, evidências e escalonamento.

## 4. Pendências G02.6/G02.7

- [ ] Nomear pessoa física por A + backup; registrar em `00-project-control/`.
- [ ] Exercitar transição sem founder (simulação).
- [ ] Aprovação Governança do RACI antes de atividade crítica.

## 5. Localização artefato aprovado

- Rascunho: este arquivo (`02-refinement/refinamento-produto/RACI_v1.md`)
- Proposta bloqueada: `03-approval/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/14_RACI/RACI_v1.md` (cópia para pacote revisão)

## 6. Rastreabilidade

- Tarefa: [[04-project-management/tarefas/P02-T06_RACI_Accountable_Unico|P02-T06]]
- Gaps: [[00-project-control/registro-lacunas/lacunas/GOV-008]], [[00-project-control/registro-lacunas/lacunas/STR-007]]
