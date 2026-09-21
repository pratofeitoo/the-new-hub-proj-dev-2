---
title: P04-T08 — Revisão inteligência responsável (model cards/fairness/drift)
task_id: P04-T08
phase: P04
status:
  - on-hold
priority: alta
area: governance-legal
layer: refining
owner:
  - PF Rezende (interino — Dados)
  - PF Rezende (interino — Jurídico)
accountable: PF Rezende
blocked_reason: aguardando nomeação Dados/Jurídico — GOV-009/GOV-005
blocked_until: 2026-10-15
gap_ids:
  - GOV-009
  - GOV-005
dependencies:
  - P04-T02
target_file: 01-work/documentos-oficiais/_controle/
related_notes:
  - "[[04-project-management/planos-fase/P04_Governanca_Confianca]]"
  - "[[00-project-control/registro-lacunas/lacunas/GOV-009]]"
  - "[[00-project-control/registro-lacunas/lacunas/GOV-005]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M04 — Governança & Confiança Aprovada]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1]]"
evidence_required:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1.md
  - 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/
  - 01-work/documentos-oficiais/06-conformidade-LGPD/06.01-ROPA-registro-operacoes.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P04
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:04.016-03:00
---

# P04-T08 — Revisão inteligência responsável (model cards/fairness/drift)

## Objetivo
Definir processo com model cards, grupos protegidos, limiares drift/fairness, explicabilidade, amostragem e trilha auditável — com controles testáveis e portão governança sem lacuna crítica (GOV-009 + GOV-005).

## Entregável
Processo proposto + model cards rascunho + testes controle evidência em `01-work/documentos-oficiais/_controle/` + `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/` (ou `02-review/evidencias/` quando criado) como insumo refining; controles aprovados + portão sem lacuna é Camada 3.

## Acceptance criteria (G04.8 / G04.9 — GOV-009 / GOV-005)

- [ ] Processo inteligência responsável publicado com model cards + fairness/drift — documento em target com: (1) model cards por modelo/recomendação (uso pretendido, dados treino, métrica, limiar, `grupos protegidos` listados, explicabilidade SHAP/LIME ou regra, amostragem, rollback), (2) limiares drift (PSI/KS + threshold) + fairness (disparate impact, equal opportunity diff) por grupo protegido, (3) human review (fila revisão, override, recurso), (4) trilha auditável (`run_id` + `model_version` + `actor` + `decision`); reconciliado com `catalogo-metricas-grafo-P03-T05-v1.md` (73 métricas) + `taxonomia-estados-valor-P03-T07-v1.md` (estados valor) + P04-T02 base legal por campo
- [ ] Testes controle de governança PASS com evidência retida — 3 testes: (a) bloqueio publicação sem `evidence_required` (alegação sem linhagem bloqueada), (b) controle dados (campo sem `purpose` válido não alimenta modelo), (c) controle modelo/métrica (drift > limiar dispara quarentena+alerta+rollback); cada teste com `PASS/FAIL` + `run_id` + `evidence` em `06-relatorios-validacao/`; sem testes, GOV-005 permanece aberto e portão governança com lacuna crítica não libera P06 (claims) nem P07 (launch)
- [ ] Portão governança sem lacuna crítica pendente — rascunho registra controles aprovados pendentes + `GOV-005` (controles operam) e `GOV-009` (modelos aprovados) abertos até Dados+Jurídico aprovarem model cards + testes + `DEC-P04-T08.md`; `blocking: no` para piloto curadoria manual (IA deferred), `blocking: yes` para IA autônoma/matching automático/modelos produtivos

> **Pilot vs Full:** Piloto SEBRAE 28/10 — IA **deferred** (`spine-piloto-minimo-v1.md` §4 "IA autônoma deferred — piloto usa match manual/curado; IA só com dataset validado"); processo inteligência responsável piloto = checklist manual (código conduta curadoria + amostragem manual 10% matches + trilha `historico_alteracoes` + sem modelo produtivo); model cards = template vazio; testes controle = manual. Plataforma full = matching automático/modelos com model cards preenchidos + grupos protegidos validados + drift/fairness com limiares + testes 3/3 PASS + human review com SLA + rollback evidenciado. Este critério valida full; piloto pode operar com IA deferred + checklist manual.

## Evidence required

- `01-work/documentos-oficiais/_controle/` (processo inteligência responsável — rascunho com model cards template + limiares drift/fairness)
- `01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md` (73 métricas — base fairness por métrica)
- `01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1.md` (estados `potencial/influenciado/validado/realizado` + atribuição)
- `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/` (testes controle — rascunho manual piloto + SPECs automáticos plataforma)
- `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §4 (IA deferred piloto — diferenciação pilot vs full) + `01-work/documentos-oficiais/06-conformidade-LGPD/06.01-ROPA-registro-operacoes.md` (base legal dados modelo)

## Verification

- [ ] `ls 01-work/documentos-oficiais/_controle/ 2>&1 | head -5 && grep -c "model card\|fairness\|drift\|grupos protegidos\|explicabilidade" 01-work/documentos-oficiais/_controle/*.md 2>/dev/null | awk -F: '{s+=$2} END {print (s>=3)?"PASS processo inteligência":"CHECK "s}' && grep -c "human review\|override\|rollback\|trilha auditável\|run_id" 01-work/documentos-oficiais/_controle/*.md 2>/dev/null | awk -F: '{s+=$2} END {print (s>=2)?"PASS controles":"CHECK"}'`
- [ ] `ls 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/ | wc -l | awk '{print ($1>=3)?"PASS evidências retidas":"CHECK"}' && grep -c "deferred.*IA\|IA.*deferred\|match manual" 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md | awk '{print ($1>=1)?"PASS pilot IA deferred":"FAIL"}'`
- [ ] `grep -c "hipotese\|rascunho\|Refinar com condições" 01-work/documentos-oficiais/_controle/*.md 2>/dev/null | awk -F: '{s+=$2} END {print (s>=1)?"PASS rascunho não aprovado (esperado)":"CHECK"}'`

## Dependências

- [[04-project-management/tarefas/P04-T02_Mapa_Governanca_Dados_Fluxo|P04-T02]] — base legal + finalidade + retenção por campo (sem LGPD sem modelo)
- G04.8 (GOV-009) — `blocking: no` piloto (IA deferred), `blocking: yes` para modelos produtivos até model cards+fairness/drift aprovados
- G04.9 (GOV-005) — `blocking: no` piloto, `blocking: yes` para P06/P07 até testes controle PASS + portão sem lacuna crítica + `DEC-P04-T08.md` (ver `marcos-fases-v1.md#M04` G04.8-9)

## Registros

- [[00-project-control/registro-lacunas/lacunas/GOV-009]] · [[00-project-control/registro-lacunas/lacunas/GOV-005]]
- `00-project-control/decisoes/DEC-P04-T08.md` (futura — Dados+Jurídico aprovam controles modelos)

## Execução

- **Entregável produzido:** processo template + model cards rascunho + checklist curadoria manual piloto + testes SPEC.
- **Status:** `refining` — proposta para Dados/Jurídico; GOV-009/GOV-005 abertos até testes PASS.
- **Próximo:** preencher model cards piloto (vazio), definir grupos protegidos + limiares drift/fairness com Jurídico, prototipar teste bloqueio publicação sem evidência.
