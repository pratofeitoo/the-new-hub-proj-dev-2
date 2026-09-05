---
title: Gate M0 → Refinement P03 v1
status: rascunho
gate: G03.B2 blocking
updated: 2026-09-02
---

# Gate M0 → P03

> **Estado: BLOQUEADO.** A promoção para P03 exige que todos os itens abaixo estejam concluídos e tenham evidência rastreável. Os artefatos de convergência já foram publicados; a validação formal do gate permanece pendente até a evidência do piloto Monks.

- [ ] **FLD-024→041** criados e validados: `consent_id`, `purpose`, `legal_basis`, núcleo Pessoa, IDs canônicos, `tenant_id` e temporalidade.
- [ ] **FLD-042→047 + `canonical_id`/alias** validados: envelope, `recommendation_id`, `match_id` e `workday_id` como alias namespaced.
- [ ] **N24 bloqueador + N26 Decision**, incluindo N24+N26 e propagação de revogação até 5 min, validados.
- [ ] **Envelope canônico + quatro estados financeiros** (`Potencial → Influenciado → Validado → Realizado`) com ledger e anti-dupla contagem validados.
- [ ] **Matriz de convergência** publicada e referenciada: [[../../05-resources/inbox/Plataforma HUB/03-analises-processadas/Matriz_Convergencia_73_16_25_23_12_8|Matriz_Convergencia]].
- [ ] **Glossário financeiro congelado + KPIs táticos M0** publicados e referenciados: [[../modelos-financeiros/HUB_Glossario_Financeiro_Congelado_v1|HUB_Glossario_Financeiro]].
- [ ] **Evidências piloto Monks**: >80% cobertura de FLD M0, >60% KPIs M0 conectados, 5–10 recomendações e ≥2 casos financeiros validados (execução P03).

## Critérios de promoção

**G03.B2 libera P03 somente quando todos os sete itens = done.** M0 é aproximadamente F0 (4–6s) + MVP1 (8–12s); M1–M4 permanecem blueprint draft até nova revisão.

## Dependências e referências

- Camada semântica: FLD-024→047, envelope e consentimento (Fix1).
- Correspondências e termos: [[../../05-resources/inbox/Plataforma HUB/03-analises-processadas/Matriz_Convergencia_73_16_25_23_12_8|Matriz_Convergencia]] e [[../modelos-financeiros/HUB_Glossario_Financeiro_Congelado_v1|HUB_Glossario_Financeiro]] (Fix2).
- Lacunas bloqueadoras: [[../../00-project-control/registro-lacunas/lacunas/DAT-006|DAT-006]], [[../../00-project-control/registro-lacunas/lacunas/DAT-010|DAT-010]], [[../../00-project-control/registro-lacunas/lacunas/PRD-001|PRD-001]], [[../../00-project-control/registro-lacunas/lacunas/TEC-001|TEC-001]], [[../../00-project-control/registro-lacunas/lacunas/GOV-004|GOV-004]].
