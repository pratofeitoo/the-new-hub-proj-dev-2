---
title: P05-T02 — Contratos de integração + matriz system-of-record
task_id: P05-T02
phase: P05
status:
  - on-hold
priority: critica
area: technology
layer: refining
owner:
  - PF Rezende // blocked: aguardando nomeação Tech até 2026-10-15
blocked_reason: aguardando nomeação Tech
blocked_until: 2026-10-15
accountable: PF Rezende
gap_ids:
  - TEC-001
dependencies:
  - P05-T01
  - P03-T01
target_file: 01-work/testes-experimentos/contratos-integracao-P05-T02-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P05_Tecnologia_Contratual]]"
  - "[[00-project-control/registro-lacunas/lacunas/TEC-001]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M05 — Tecnologia Contratual Aprovada]]"
evidence_required:
  - 01-work/testes-experimentos/contratos-integracao-P05-T02-v1.md
  - 01-work/testes-experimentos/matriz-system-of-record-P05-T02-v1.csv
  - 02-review/pacotes/P05-Tecnologia.md
created: 2026-08-26
tags:
  - task
  - fase-P05
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:06.651-03:00
---

# P05-T02 — Contratos de integração + matriz system-of-record

## Objetivo

Especificar payloads, endpoints, autenticação, propriedade, versionamento por integração M0 (CRM, plataforma, warehouse, consentimento) + matriz SoR — fecha TEC-001 (G05.2).

## Entregável

`01-work/testes-experimentos/contratos-integracao-P05-T02-v1.md` (§1 payloads + §2 endpoints + §3 auth + §4 versionamento/suporte) + `01-work/testes-experimentos/matriz-system-of-record-P05-T02-v1.csv` (integração × system-of-record × owner × classificação dados × finalidade consentimento). Paths idênticos a `target_file` e `evidence_required`.

## Acceptance criteria (G05.2 — TEC-001)

- [ ] Cada integração M0 (CRM, plataforma, warehouse, consentimento) com contrato completo em `target_file` §1–§4: payload (schema + exemplo), endpoint, auth (OAuth2/mTLS), owner nominal, versão semântica (v1.0) — `grep -c "payload\|endpoint\|auth\|owner\|v1\." 01-work/testes-experimentos/contratos-integracao-P05-T02-v1.md` ≥8 e zero "TBD/a definir"
- [ ] Matriz system-of-record publicada em `01-work/testes-experimentos/matriz-system-of-record-P05-T02-v1.csv` com colunas `integracao,system_of_record,owner,versao,classificacao_dados,finalidade_consentimento` — `wc -l` ≥5 (header + 4 M0) e `grep -c "system_of_record\|SoR" 01-work/testes-experimentos/contratos-integracao-P05-T02-v1.md` ≥2
- [ ] Review contrato+segurança registrado em `02-review/pacotes/P05-Tecnologia.md` §G05.2 com checklist Tech + Segurança (testes de contrato, validação payload, gateway/rate-limit, consentimento) — sem review, integração não é "aprovada"

## Evidence required

- `01-work/testes-experimentos/contratos-integracao-P05-T02-v1.md` (§1 payloads + §2 endpoints + §3 auth + §4 versionamento — 4 M0 mínimos)
- `01-work/testes-experimentos/matriz-system-of-record-P05-T02-v1.csv` (header + 4 linhas M0 com owner nominal e finalidade consentimento)
- `02-review/pacotes/P05-Tecnologia.md` §G05.2 (evidência review contrato+segurança — checklist assinado Tech+Segurança)
- Fixtures de teste de contrato: `01-work/testes-experimentos/schema-registry/fixtures/*.valid.json` (quando existirem — prova payload versionado)

## Verification

- [ ] `ls 01-work/testes-experimentos/contratos-integracao-P05-T02-v1.md && grep -c "payload\|endpoint\|auth" 01-work/testes-experimentos/contratos-integracao-P05-T02-v1.md | awk '{print ($1>=4)?"PASS contratos":"FAIL"}' && grep -q "owner.*PF Rezende\|owner.*Tech" 01-work/testes-experimentos/contratos-integracao-P05-T02-v1.md && echo "PASS owner nominal" || echo "FAIL owner"`
- [ ] `ls 01-work/testes-experimentos/matriz-system-of-record-P05-T02-v1.csv && head -1 01-work/testes-experimentos/matriz-system-of-record-P05-T02-v1.csv | grep -q "system_of_record\|owner" && echo "PASS SoR header" || echo "FAIL"; wc -l < 01-work/testes-experimentos/matriz-system-of-record-P05-T02-v1.csv | awk '{print ($1>=5)?"PASS 4 M0":"FAIL rows="$1}'`
- [ ] `grep -c "G05.2\|TEC-001" 02-review/pacotes/P05-Tecnologia.md && grep -E "review.*contrato|segurança" 02-review/pacotes/P05-Tecnologia.md | head -2`

## Dependências

- [[04-project-management/tarefas/P05-T01_Arquitetura_Solucao_Ambientes|P05-T01]] — arquitetura-alvo + NFRs (G05.1)
- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]] — modelo canônico 25 entidades + `canonical_id` (S3A)
- G05.2 (M05 — TEC-001) — `blocking: no` neste lote; piloto pode operar com mocks mas gate M05 exige review contrato+segurança real

## Registros

- [[00-project-control/registro-lacunas/lacunas/TEC-001]]
