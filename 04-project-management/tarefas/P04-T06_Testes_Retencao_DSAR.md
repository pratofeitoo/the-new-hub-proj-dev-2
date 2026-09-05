---
title: P04-T06 — Testes retenção/DSAR/exclusão (derivados/backups)
task_id: P04-T06
phase: P04
status: pendente
priority: alta
area: governance-legal
layer: refining
owner:
  - PF Rezende (interino — Jurídico)
  - PF Rezende (interino — Tech)
accountable: PF Rezende
blocked_reason: "aguardando nomeação Jurídico/Tech — GOV-007"
blocked_until: 2026-10-15
gap_ids:
  - GOV-007
dependencies:
  - P03-T09
  - P04-T02
target_file: 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/
related_notes:
  - "[[04-project-management/planos-fase/P04_Governanca_Confianca]]"
  - "[[00-project-control/registro-lacunas/lacunas/GOV-007]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M04 — Governança & Confiança Aprovada]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1]]"
evidence_required:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md
  - 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/entity-key-validation-P03-T09.md
  - 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/corrected-csv-validation-P03-T09.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/06-conformidade-LGPD/06.01-ROPA-registro-operacoes.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/06-conformidade-LGPD/06.04-politica-seguranca-incidentes.md
  - 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/
created: 2026-08-26
tags:
  - task
  - fase-P04
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P04-T06 — Testes retenção/DSAR/exclusão (derivados/backups)

## Objetivo
Executar testes ponta a ponta de retenção, DSAR, exclusão, portabilidade cobrindo derivados, backups, caches, fornecedores e saídas de parceiros — com SLA testado (GOV-007).

## Entregável
Relatórios de teste em `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` + `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/` (ou `02-review/evidencias/` quando criado) como rascunho refinamento; testes PASS com SLA é Camada 3.

## Acceptance criteria (G04.6 — GOV-007)

- [ ] Fluxos retenção/DSAR/exclusão testados ponta a ponta incluindo derivados/backups/caches — teste cobre: `dim_*`/`fact_*` + `identity_alias` + features/métricas/modelos + caches/índices + backups/exports parceiros (`04.04-DPA`); DSAR `acesso` exporta `person_id`+aliases+`consent`+`participations` com provenance, `exclusão` propaga para `identity_alias` + `fact_person_skill`/`fact_event` + derivados com `quarantine ≤5 min` (herda P03-T08 §3), `portabilidade` em formato estruturado; retenção por finalidade (60m vault / 36/24 analítico / TTL) validada com `run_id` + `valid_from/to`
- [ ] SLAs atendidos e evidência retida — DSAR `acesso` ≤15 dias, `exclusão` ≤15 dias (LGPD), retenção TTL ±1 dia, `consent.revoked→quarantine` ≤5 min; 3 relatórios `06-relatorios-validacao/` (entity-key + corrected-csv + retenção/DSAR) com PASS reproduzível (`counts/keys/totals/duplicates/late events`) + quarentena reavalia `purpose` sem válido = `quarantined`; quando agregado anonimizado não pode ser excluído documenta anonimização+risco residual
- [ ] Testes com lacunas para aprovação futura — resultado registra PASS/FAIL por cenário + exceções (backup offline, export parceiro fora SLA) com dono+mitigação; sem testes, GOV-007 permanece `blocking: no` para piloto (DSAR manual) mas `blocking: yes` para dados sensíveis sem propagação ≤5 min validada; `P03-T09` em `em-revisao` é insumo, não aprovação LGPD

> **Pilot vs Full:** Piloto SEBRAE 28/10 — DSAR manual (planilha + `identity_alias` manual) + retenção mínima (60m vault piloto / TTL por finalidade piloto) + `CMP log` rascunho + `propagation-test-E20-v1` SPEC + replay `run_001→run_002` manual com reconciliação `counts/keys/totals` (`P03-T09` §3); quarentena manual. Plataforma full = DSAR automatizado cobrindo aliases+backups+caches+parceiros + `quarantine` automático + `CMP log` executado + `propagation test` PASS + 3/3 relatórios `06-relatorios-validacao/` PASS + SLAs LGPD atendidos. Este critério valida full; piloto pode operar com DSAR manual + retenção mínima.

## Evidence required

- `01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md` (§1 linhagem `origem→correção→alias→evento→métrica` + §4–5 DSAR `dsar.access/delete/portability` + §3 replay `run_001→run_002`)
- `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/entity-key-validation-P03-T09.md` (**PASS** 45 entidades 0 órfão) + `corrected-csv-validation-P03-T09.md` (**PASS** 15/15 CSVs 16 cols) — herda P03-T09
- `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/roi-recalculation-P03-T09.md` (reconciliação com `run_id` — insumo) + `01-work/pesquisa-e-confianca/documentos-oficiais/06-conformidade-LGPD/06.04-politica-seguranca-incidentes.md` (SLA incidentes)
- `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` (relatórios retenção/DSAR piloto — rascunho) + `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §1/§3 (§1 12 entidades piloto + §3 envelope mínimo `consentimento_id` condicional — diferenciação pilot vs full)
- `01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md` §3–§4 (propagação ≤5 min + DSAR aliases) — base LGPD

## Verification

- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md && grep -c "dsar\.access\|dsar\.delete\|dsar\.portability\|identity_alias.*dim_\|quarantine.*≤5 min" 01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md | awk '{print ($1>=2)?"PASS fluxos DSAR+quarantine":"FAIL"}' && grep -c "replay.*run_001.*run_002\|counts.*keys.*totals" 01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md | awk '{print ($1>=1)?"PASS replay":"FAIL"}'`
- [ ] `ls 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/entity-key-validation-P03-T09.md 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/corrected-csv-validation-P03-T09.md && grep -c "PASS" 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/*.md | awk -F: '{s+=$2} END {print (s>=2)?"PASS 2+/3 relatórios PASS":"FAIL s="s}' && ls 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/ | wc -l | awk '{print ($1>=3)?"PASS evidências retidas":"CHECK"}'`
- [ ] `grep -c "SLA\|15 dias\|≤5 min\|quarantine" 01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md | awk '{print ($1>=1)?"PASS SLA documentado":"FAIL"}' && ls 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/ 2>&1 | head -5`

## Dependências

- [[04-project-management/tarefas/P03-T09_Fluxos_Linhagem_Replay_DSAR|P03-T09]] — fluxos linhagem/correção/replay/DSAR + XLSX 41/15/73 + 3/3 relatórios PASS (insumo `em-revisao`)
- [[04-project-management/tarefas/P04-T02_Mapa_Governanca_Dados_Fluxo|P04-T02]] — mapa 5 fluxos × 41 campos + ROPA/DPA/RIPD (define retenção/base legal por campo)
- G04.6 (M04 — GOV-007) — `blocking: no` para piloto DSAR manual, `blocking: yes` para dados sensíveis sem `purpose` válido ou sem propagação ≤5 min validada até testes PASS + `DEC-P04-T06.md` (ver `marcos-fases-v1.md#M04` G04.6 + `P04_Governanca_Confianca.md#6`)

## Registros

- [[00-project-control/registro-lacunas/lacunas/GOV-007]]
- `00-project-control/decisoes/DEC-P04-T06.md` (futura — após testes SLAs)

## Execução

- **Entregável produzido:** fluxos prototipados + XLSX reconstruído + 3/3 PASS `06-relatorios-validacao/` como insumo `em-revisao` (P03-T09); testes retenção/DSAR piloto como rascunho.
- **Status:** `refining` — testes planejados/rascunho; GOV-007 aberto até testes ponta a ponta + SLAs.
- **Próximo:** executar teste DSAR manual piloto (15 dias), validar `quarantine ≤5 min` com `propagation-test-E20-v1`, testar exclusão backups/caches.
