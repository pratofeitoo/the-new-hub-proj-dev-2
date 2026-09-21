---
title: P05-T05 — Threat model + controles tenancy/IAM/secrets/auditoria
task_id: P05-T05
phase: P05
status:
  - on-hold
priority: critica
area: technology
layer: refining
owner:
  - PF Rezende // blocked: aguardando nomeação Tech até 2026-10-15
  - PF Rezende // blocked: aguardando nomeação Jurídico até 2026-10-15
blocked_reason: aguardando nomeação Tech e Jurídico
blocked_until: 2026-10-15
accountable: PF Rezende
gap_ids:
  - TEC-004
dependencies:
  - P04-T02
  - P02-T03
target_file: 01-work/documentos-oficiais/_controle/threat-model-controles-P05-T05-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P05_Tecnologia_Contratual]]"
  - "[[00-project-control/registro-lacunas/lacunas/TEC-004]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M05 — Tecnologia Contratual Aprovada]]"
evidence_required:
  - 01-work/documentos-oficiais/_controle/threat-model-controles-P05-T05-v1.md
  - 01-work/documentos-oficiais/_controle/matriz-controles-seguranca-P05-T05-v1.csv
  - 02-review/pacotes/P05-Tecnologia.md
created: 2026-08-26
tags:
  - task
  - fase-P05
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:56:10.368-03:00
---

# P05-T05 — Threat model + controles tenancy/IAM/secrets/auditoria

## Objetivo

Completar threat model, tenancy isolation, IAM, secrets rotation, logs auditoria e plano de incidentes — fecha TEC-004 (G05.5).

## Entregável

`01-work/documentos-oficiais/_controle/threat-model-controles-P05-T05-v1.md` (§1 threat model STRIDE + §2 tenancy/IAM + §3 secrets rotation + §4 auditoria/incidentes) + `01-work/documentos-oficiais/_controle/matriz-controles-seguranca-P05-T05-v1.csv` (controle × risco × dono × status × evidência remediação). Paths idênticos a `target_file` e `evidence_required`.

## Acceptance criteria (G05.5 — TEC-004)

- [ ] Threat model publicado em `target_file` §1 com metodologia STRIDE (ou equivalente) cobrindo 6 categorias + top 5 ameaças por componente (plataforma/warehouse/consentimento/integrações) — `grep -c "STRIDE\|spoofing\|tampering\|repudiation\|information disclosure\|DoS\|elevation" threat-model-controles-P05-T05-v1.md` ≥6 e `grep -c "ameaça\|risco.*crítico" target_file` ≥5
- [ ] Controles tenancy/IAM/secrets/auditoria especificados em §2–§4: tenancy isolation (row-level/tenant_id), IAM (RBAC + P02-T03 matriz permissão), secrets rotation (vault + rotação ≤90d), logs auditoria (quem/quando/o que + retenção LGPD) — `grep -c "tenancy\|tenant_id\|IAM\|RBAC\|secrets\|vault\|rotação\|auditoria" target_file` ≥8 e matriz CSV com `wc -l` ≥6 (header + 5 controles críticos)
- [ ] Remediações críticas evidenciadas e aprovação segurança registrada em `02-review/pacotes/P05-Tecnologia.md` §G05.5 com parecer Segurança/Jurídico — cada controle crítico com `status: implementado|mitigado|aceito` + evidência (ex: `teste isolamento tenant`, `log auditoria`, `rotação secrets`) — sem remediação, gate não fecha

## Evidence required

- `01-work/documentos-oficiais/_controle/threat-model-controles-P05-T05-v1.md` (§1 STRIDE + §2 tenancy/IAM + §3 secrets + §4 auditoria/incidentes + plano remediação)
- `01-work/documentos-oficiais/_controle/matriz-controles-seguranca-P05-T05-v1.csv` (header `controle,risco,dono,status,evidencia_remediacao` + ≥5 linhas críticas com status preenchido)
- `02-review/pacotes/P05-Tecnologia.md` §G05.5 (parecer Segurança/Jurídico — aprovação threat model + remediações)
- `01-work/documentos-oficiais/_controle/` — logs evidência remediação (`teste-isolamento-tenant-P05-T05.log`, `rotação-secrets-P05-T05.log` quando existirem)

## Verification

- [ ] `ls 01-work/documentos-oficiais/_controle/threat-model-controles-P05-T05-v1.md && grep -c "STRIDE\|tenancy\|IAM\|secrets\|auditoria" 01-work/documentos-oficiais/_controle/threat-model-controles-P05-T05-v1.md | awk '{print ($1>=4)?"PASS controles":"FAIL"}' && grep -c "tenant_id\|RBAC\|vault\|rotação" 01-work/documentos-oficiais/_controle/threat-model-controles-P05-T05-v1.md`
- [ ] `ls 01-work/documentos-oficiais/_controle/matriz-controles-seguranca-P05-T05-v1.csv && head -1 01-work/documentos-oficiais/_controle/matriz-controles-seguranca-P05-T05-v1.csv | grep -q "controle.*risco.*dono.*status" && echo "PASS matriz header" || echo "FAIL"; grep -c "implementado\|mitigado\|aceito" 01-work/documentos-oficiais/_controle/matriz-controles-seguranca-P05-T05-v1.csv | awk '{print ($1>=3)?"PASS remediações":"FAIL"}'`
- [ ] `grep -c "G05.5\|TEC-004" 02-review/pacotes/P05-Tecnologia.md && grep -E "Segurança|Jurídico|aprova" 02-review/pacotes/P05-Tecnologia.md | head -2`

## Dependências

- [[04-project-management/tarefas/P04-T02_Mapa_Governanca_Dados_Fluxo|P04-T02]] — mapa fluxo→campo→finalidade→base legal→controller/processor (GOV-002/LGPD)
- [[04-project-management/tarefas/P02-T03_Matriz_Autorizacao_Tenancy|P02-T03]] — matriz ator×permissão aprovada por Segurança+Governança (G02.3)
- G05.5 (M05 — TEC-004) — `blocking: no` neste lote; remediações críticas devem estar evidenciadas antes de M05, extensões pós-MVP quando aplicável

## Registros

- [[00-project-control/registro-lacunas/lacunas/TEC-004]]
