---
title: P03-T08 — Matriz dados-finalidade + ciclo de vida (LGPD)
task_id: P03-T08
phase: P03
status: em-revisao
priority: alta
area: data-intelligence
layer: refining
owner:
  - PF Rezende (interino — Dados)
  - PF Rezende (interino — Jurídico LGPD)
accountable: PF Rezende
blocked_reason: "aguardando nomeação Jurídico LGPD/DPO — LGPD"
blocked_until: 2026-10-10
gap_ids:
  - DAT-008
dependencies:
  - P03-T01
target_file: 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-008]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M03 — Dados Completos (libera P06)]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1]]"
evidence_required:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/
  - 01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P03-T08 — Matriz dados-finalidade + ciclo de vida (LGPD)

## Objetivo

Construir matriz `campo → finalidade → base legal → retenção → propagação consentimento → exclusão` por fluxo de lançamento (G03.C4 / DAT-008 — M03.C), cobrindo ciclo de vida LGPD ponta a ponta com revogação e DSAR.

## Entregável

`01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md` (§1 5 fluxos + §2 matriz 41 campos + §3 propagação + §4 retenção/DSAR) com cópia/controle em `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` para revisão LGPD/Gov Dados; eventual aprovação em `00-project-control/decisoes/DEC-P03-T08.md` fica para Camada 3. Paths idênticos a `target_file` e `evidence_required`.

## Acceptance criteria (G03.C4 — DAT-008)

- [ ] Matriz 5 fluxos × 41 campos publicada — §1–§2 do `target_file`: 5 fluxos (Onboarding+Consentimento, Diagnóstico+Jornada, Matching+Introdução, Medição+Dashboard, Comercial) × 41 campos (ex: `dim_person.consent_status`→`consent_status` por `purpose` com `valid_from/to`) com `finalidade`, `base legal` (consentimento/execução contrato/legítimo interesse/obrigação legal), `retenção` (60 meses vault / 36/24 meses analítico/TTL por finalidade) e `propagação/exclusão` por fluxo; família completa em `08_Dicionario_Dados.csv` + `governance-control-register.csv`
- [ ] Propagação revogação ≤5 min + quarentena + CMP log — §3 do `target_file`: todo campo `Alta/Crítica` exige `consent_id+purpose+version`; `consent.revoked` → evento `consent.revoked` → pipeline bloqueia novos `fact_person_skill`/`fact_event`/derivados com `purpose` revogado em ≤5 min + derivados já materializados entram em fila `quarantine` (métricas/modelos/caches/exports parceiros reavaliam `purpose`; sem `purpose` válido = `quarantined`); `CMP log` + `propagation test` (`propagation-test-E20-v1` + `CMP-log-E20-v1` em `06-relatorios-validacao/`) como SPEC/rascunho antes de G03.C4
- [ ] DSAR cobrindo aliases + evidência LGPD — §4–§6 do `target_file`: exclusão abrange `identity_alias`, `dim_*`, `fact_*`, features, caches, índices, backups, exports parceiros; DSAR `acesso` exporta `person_id`+aliases+`consent`+`participations` com `provenance`; quando agregado compartilhado não pode ser excluído documenta anonimização+risco residual; pareceres Jurídico/LGPD e Gov Dados `Refinar com condições` (§6) com `DAT-008` aberto até teste propagação ponta a ponta + `DEC-P03-T08.md`

> **Pilot vs Full:** Piloto SEBRAE 28/10 opera com subset piloto — 12 entidades/campos do spine (`spine-piloto-minimo-v1.md` §1 fornecedor→historico_alteracoes + §3 `consentimento_id` condicional por `purpose`) + matriz parcial validada só para campos piloto com revogação ≤5 min; DSAR manual + `CMP log` rascunho. Plataforma full = 5 fluxos × 41 campos completa + propagação ≤5 min para `fact_person_skill`/`fact_event`/métricas/modelos/exports parceiros + `quarantine` automático + `CMP log` executado + `propagation test` PASS + DSAR automatizado cobrindo aliases. Este critério valida full (5×41 + 2/3 LGPD); piloto pode operar com subset mas evidência full permanece obrigatória para G03.C4 (`blocking: no` para matriz definição, `blocking: yes` para dados sensíveis sem `purpose` válido).

## Evidence required

- `01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md` (§1 5 fluxos com finalidade/base legal + §2 tabela 10 famílias exemplares + 41 campos completos em `08_Dicionario_Dados.csv` + §3 regra propagação `consent_id+purpose+version` + §4 retenção/portabilidade + §6 pareceres LGPD)
- `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` (cópia/controle da matriz para revisão LGPD — `governance-control-register.csv` + eventual `acordo-cooperacao-SEBRAE-HUB-2026-10-15.md` com base legal piloto)
- `01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1.md` — 41 campos fonte + `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/propagation-test-E20-v1.md` + `CMP-log-E20-v1.md` (SPECs rascunho propagação ≤5 min / CMP log)
- `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §1/§3 (subset piloto 12 entidades + `consentimento_id` condicional — diferenciação pilot vs full)

## Verification

- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md && grep -c "Onboarding\|Diagnóstico\|Matching\|Medição\|Comercial" 01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md | awk '{print ($1>=5)?"PASS 5 fluxos":"FAIL"}' && grep -c "dim_person\|fact_person_skill\|fact_event\|consent_status\|purpose" 01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md`
- [ ] `grep -c "≤5 min\|<=5 min\|quarantine\|CMP log\|propagation test\|consent\.revoked\|purpose.*version" 01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md | awk '{print ($1>=3)?"PASS propagação ≤5min+quarentena+CMP":"FAIL"}' && ls 01-work/dados-tech-financas/refinamento-modelo-dados/06-relatorios-validacao/propagation-test-E20-v1.md 01-work/dados-tech-financas/refinamento-modelo-dados/06-relatorios-validacao/CMP-log-E20-v1.md 2>&1 | head -3`
- [ ] `grep -c "identity_alias\|DSAR\|portabilidade\|aliases" 01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md | awk '{print ($1>=2)?"PASS DSAR aliases":"FAIL"}' && grep -c "Jurídico.*Refinar\|Governança.*Refinar\|Refinar com condições" 01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md | awk '{print ($1>=2)?"PASS pareceres LGPD":"FAIL"}' && ls 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/ 2>&1 | head -5`

## Dependências

- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]] — 25 entidades canônicas (`dim_person.person_id` + `valid_from/to`) + `P03-T04` dicionário 41 campos
- G03.C4 (M03.C — LGPD) — `blocking: no` neste lote para matriz definição rascunho; `blocking: yes` para uso de dado pessoal sem `consent_id+purpose+version` válido ou sem propagação ≤5 min validada (ver `04-project-management/marcos/marcos-fases-v1.md#M03` e `04-project-management/planos-fase/P03_Dados_Canonicos.md#6` Gate G3; `DAT-008` aberto até teste ponta a ponta)

## Registros

- [[00-project-control/registro-lacunas/lacunas/DAT-008]]

## Execução

- **Entregável produzido:** [[01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1|matriz-dados-finalidade-P03-T08-v1.md]] — 5 fluxos (Onboarding, Diagnóstico, Matching, Medição, Comercial) × 41 campos (ex: `dim_person.consent_status` → `consent_status` por `purpose` com `valid_from/to`) com base legal, retenção (60/36/24 meses), propagação `revogação ≤5 min` para `fact_person_skill`/`fact_event`/derivados e exclusão DSAR por fluxo.
- **Propagação:** todo campo Alta/Crítica exige `consent_id+purpose+version`; `consent.revoked` → `quarantine` em métricas/modelos/caches/exports parceiros.
- **Pareceres:** Jurídico/LGPD e Gov Dados — ambos `Refinar com condições` — `DAT-008` aberto até teste propagação ponta a ponta.
- **Próximo:** teste `propagation test` e decisão `DEC-P03-T08.md` (G03.C4).

## Verificação G03.C4 parcial — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| Mapa campo→finalidade→base legal→retenção→propagação→exclusão | ok | §2 tabela 10 campos exemplares (41 total em `08_Dicionario_Dados.csv`) |
| 5 fluxos cobertos + propagação ≤5 min + `quarantine`/`CMP log` | ok | §1 fluxos + §3 revogação ≤5 min + `propagation-test-E20-v1`/`CMP-log-E20-v1` SPEC |
| Parecer LGPD registrado + DSAR aliases | ok | §6 ambos `Refinar com condições` + §4 `identity_alias` |

> **Status:** `em-revisao` — rascunho para validação LGPD/Gov Dados; `DAT-008` aberto.
