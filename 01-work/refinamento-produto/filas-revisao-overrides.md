---
title: Filas de Revisão + Overrides + Trilha Auditoria — P02-T05 (rascunho)
task_id: P02-T05
phase: P02
status: rascunho
gap_id: PRD-007
created: 2026-08-29
tags:
  - refinement
  - P02
---

# Filas de Revisão + Overrides + Trilha — rascunho P02-T05

> **G02.2 / G02.7** · Nenhum passo de alto impacto sem fila + dono. Sem promoção automática.

## 1. Filas (human-in-the-loop)

| Fila | Gatilho | Dono | SLA alvo | Entrada | Saída |
|---|---|---|---|---|---|
| Diagnóstico | questionário concluído / evidência enviada | Analista + Revisor | 2d confirmação / 10d revisão | respostas + evidências + versão instrumento | diagnóstico reproduzível com confiança/lacunas |
| Elegibilidade / Exclusão | regra não atendida | Governança | 2d | solicitação + evidência | deferido / indeferido com justificativa |
| Recomendação sensível | recomendação alto impacto | Revisor Responsável | 1d confirma / 5d decisão | entrada + justificativa + impacto em grupo protegido | aprovado / bloqueado / alternativa |
| Matching | candidato + oportunidade | Revisor Matches | 1d confirma / 5d match justificado | perfis + consentimento + restrições | match proposto + opt-in |
| Medição / Claim | cálculo métrica / claim público | Measurement Lead | por cadência reporting | denominador + lineage + status evidência | aprovado / restringido / retirado |
| Selo / Reconhecimento | pacote elegibilidade | Avaliador Independente | por janela Selo | pacote evidências + critérios + conflito | concedido / negado + validade + recurso |

## 2. Regra manual / assistido / automatizado

- **Assistido = propõe, humano decide.** Busca, ranking, sumarização, detecção podem sugerir; decisão final sempre humana qualificada.
- Nenhum alto impacto sem revisão; nenhuma publicação sem trilha.

## 3. Overrides

| Campo | Obrigatório |
|---|---|
| Resultado original | sim |
| Novo resultado | sim |
| Motivo + evidência | sim |
| Revisor + timestamp | sim |
| Expiração / revisão | sim |
| Impacto em derivados | reavaliar, não reescrever silenciosamente |

Overrides expiram; reincidência abre incidente.

## 4. Appeals

- Canal documentado; pausa publicação/execução se risco de dano.
- Encaminhado a reviewer independente / autorização diferente.
- Resultado por escrito; trilha preservada.

## 5. Trilha de auditoria (append-only)

Cada transição registra: `actor, scope (tenant/workspace/caso), reason, timestamp, prevState → nextState, evidenceRefs, policyVersion, correlationId`. Exclusão/correção/acesso/override/publicação/retirada são eventos imutáveis; derivados reavaliados.

## 6. Pendências G02.2/G02.7

- [ ] Nomear dono por fila + backup + canal on-call.
- [ ] Exercitar 1 fluxo completo por fila (papel).
- [ ] Teste de auditoria: replay de 1 caso com trilha completa.

## 7. Rastreabilidade

- Tarefa: [[04-project-management/tarefas/P02-T05_Filas_Revisao_Overrides|P02-T05]]
- Gaps: [[00-project-control/registro-lacunas/lacunas/PRD-007]]
- Referência: [[01-work/produto/HUB_Blueprint_Produto_e_Capacidades#5. Atividades conduzidas por humanos, assistidas e de automação futura|BP-002 §5]] e [[01-work/operacoes/HUB_Blueprint_Modelo_Operacional#2. Responsabilidades por vendas, onboarding, diagnóstico, curadoria, matching, implementação, medição, suporte e escalonamento|BP-005 §2]]
