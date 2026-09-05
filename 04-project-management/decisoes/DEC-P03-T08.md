---
title: DEC-P03-T08 — Consentimento ternário e propagação E20
status: refinamento-com-condicoes
task_id: P03-T08
date: 2026-09-05
---

# DEC-P03-T08

## Parecer

**Refinar com condições — SPEC de propagação publicado, teste e aprovação
LGPD/DPO pendentes para aceite F1.**

## Condições de aceite

1. Executar o `propagation-test-E20-v1` ponta a ponta, demonstrando bloqueio e
   quarentena em até 5 minutos para todos os destinos definidos.
2. Preencher o `CMP-log-E20-v1` com correlação auditável por
   `consent_id + person_id + purpose + version`, `idempotency_key` e
   `quarantine_id`.
3. Obter parecer formal de LGPD/DPO e Governança Dados; até lá esta decisão não
   é aprovação e o aceite F1 permanece pendente.

## Rastreabilidade

- [[01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1|Matriz P03-T08 v1]]
- [[01-work/dados-tech-financas/refinamento-modelo-dados/06-relatorios-validacao/propagation-test-E20-v1|Propagation test E20 v1]]
- [[01-work/dados-tech-financas/refinamento-modelo-dados/06-relatorios-validacao/CMP-log-E20-v1|CMP log E20 v1]]
