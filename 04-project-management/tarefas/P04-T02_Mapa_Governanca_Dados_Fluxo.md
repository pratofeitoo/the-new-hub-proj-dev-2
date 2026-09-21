---
title: P04-T02 — Mapa governança de dados fluxo a fluxo (LGPD)
task_id: P04-T02
phase: P04
status: on-hold
priority: critica
area: governance-legal
layer: refining
owner:
  - PF Rezende (interino — Jurídico LGPD)
  - PF Rezende (interino — DPO)
accountable: PF Rezende
blocked_reason: aguardando nomeação Jurídico LGPD/DPO — LGPD
blocked_until: 2026-10-10
gap_ids:
  - GOV-002
dependencies:
  - P03-T08
  - P02-T03
target_file: 01-work/documentos-oficiais/_controle/
related_notes:
  - "[[04-project-management/planos-fase/P04_Governanca_Confianca]]"
  - "[[00-project-control/registro-lacunas/lacunas/GOV-002]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M04 — Governança & Confiança Aprovada]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1]]"
evidence_required:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md
  - 01-work/documentos-oficiais/06-conformidade-LGPD/06.01-ROPA-registro-operacoes.md
  - 01-work/documentos-oficiais/06-conformidade-LGPD/06.02-politica-privacidade-DPO.md
  - 01-work/documentos-oficiais/04-contratos-fundamentais/04.04-DPA-cronograma-fluxos.md
  - 01-work/documentos-oficiais/06-conformidade-LGPD/06.03-RIPD-impacto.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P04
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:44:39.863-03:00
---

# P04-T02 — Mapa governança de dados fluxo a fluxo (LGPD)

## Objetivo
Completar `fluxo → campo → finalidade → base legal → controller/processor → retenção → consentimento → exclusão` por fluxo de lançamento — com controller/processor, base legal e retenção documentados para liberação LGPD (GOV-002).

## Entregável
Mapa LGPD fluxo a fluxo em `01-work/documentos-oficiais/_controle/` + `06-conformidade-LGPD/` (ROPA 06.01, política 06.02, RIPD 06.03, DPA 04.04) reconciliado com `matriz-dados-finalidade-P03-T08-v1.md` (5 fluxos × 41 campos + 12 piloto) como rascunho refinamento; liberação LGPD é Camada 3.

## Acceptance criteria (G04.2 — GOV-002)

- [ ] Mapa 5 fluxos com controller/processor + base legal + retenção publicado — §1–2 do target: 5 fluxos lançamento (Onboarding+Consentimento, Diagnóstico+Jornada, Matching+Introdução, Medição+Dashboard, Comercial) × campos P03-T08 (41 full / 12 piloto) cada com `finalidade`, `base legal` (consentimento / execução contrato / legítimo interesse / obrigação legal), `controller vs processor` (HUB Negócios controller, SEBRAE/parceiro processor ou vice-versa por fluxo), `retenção` (60 meses vault / 36/24 analítico / TTL por finalidade), `propagação consentimento` e `exclusão` documentados; reconciliado com `matriz-dados-finalidade-P03-T08-v1.md` §1–§2 + famílias `08_Dicionario_Dados.csv`
- [ ] ROPA + DPA + RIPD alinhados — `06.01-ROPA-registro-operacoes.md` (art.37 LGPD) + `04.04-DPA-cronograma-fluxos.md` por fluxo (controller/processor, sub-processors, exports parceiros, quarentena) + `06.03-RIPD-impacto.md` para alto risco + `06.02-politica-privacidade-DPO.md` com DPO nomeado; todo campo Alta/Crítica exige `consent_id+purpose+version` + `consent.revoked→quarantine ≤5 min` (herdado P03-T08 §3) e sem `purpose` válido = bloqueado
- [ ] Liberação LGPD pendente (blocking) — parecer Jurídico LGPD/DPO `Refinar com condições` registrado; `GOV-002` permanece **blocking: yes** até revisão proteção dados liberar todos os fluxos de lançamento; sem liberação, nenhum fluxo com dado pessoal pode ser tratado como liberado e dados sensíveis sem `consent_id+purpose+version` válido permanecem bloqueados (ver P04_Governanca_Confianca §6 G04.2 + marcos G04.2)

> **Pilot vs Full:** Piloto SEBRAE 28/10 opera com subset piloto — 12 entidades/campos `spine-piloto-minimo-v1.md` §1 + matriz parcial só para campos piloto + ROPA parcial + DPA `acordo-cooperacao-SEBRAE-HUB-2026-10-15.md` (base legal piloto) + revogação ≤5 min + DSAR manual + `CMP log` rascunho. Plataforma full = 5 fluxos × 41 campos completa + ROPA/DPA/RIPD completos + DPO definitivo + propagação ≤5 min para `fact_person_skill`/`fact_event`/métricas/modelos/exports parceiros + `quarantine` automático + `CMP log` executado. Este critério valida full (5×41 + LGPD libera); piloto pode operar com subset mas evidência full permanece obrigatória para G04.2.

## Evidence required

- `01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md` (§1 5 fluxos + §2 41 campos + §3 propagação ≤5 min + §4 retenção/DSAR — fonte spine LGPD)
- `01-work/documentos-oficiais/06-conformidade-LGPD/06.01-ROPA-registro-operacoes.md` (art.37 — minuta hipotese v0.1 + checklist evidência)
- `01-work/documentos-oficiais/04-contratos-fundamentais/04.04-DPA-cronograma-fluxos.md` (controller/processor por fluxo + sub-processors + quarentena)
- `01-work/documentos-oficiais/06-conformidade-LGPD/06.02-politica-privacidade-DPO.md` + `06.03-RIPD-impacto.md` (DPO + impacto alto risco)
- `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §1/§3 (12 entidades + envelope mínimo + `consentimento_id` condicional — diferenciação pilot vs full)
- `01-work/documentos-oficiais/_controle/` / `00-controle-drive/` (cópia/controle matriz + `acordo-cooperacao-SEBRAE-HUB-2026-10-15.md` base legal piloto quando aplicável)

## Verification

- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md && grep -c "Onboarding\|Diagnóstico\|Matching\|Medição\|Comercial" 01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md | awk '{print ($1>=5)?"PASS 5 fluxos":"FAIL"}' && grep -c "controller\|processor\|base legal\|retenção\|purpose" 01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md | awk '{print ($1>=5)?"PASS LGPD campos":"FAIL"}'`
- [ ] `ls 01-work/documentos-oficiais/06-conformidade-LGPD/06.01-ROPA-registro-operacoes.md 01-work/documentos-oficiais/04-contratos-fundamentais/04.04-DPA-cronograma-fluxos.md && grep -c "ROPA\|DPA\|controller\|processor" 01-work/documentos-oficiais/04-contratos-fundamentais/04.04-DPA-cronograma-fluxos.md | awk '{print ($1>=2)?"PASS ROPA+DPA":"FAIL"}' && grep -c "≤5 min\|quarantine\|consent\.revoked" 01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md | awk '{print ($1>=2)?"PASS propagação":"FAIL"}'`
- [ ] `grep -c "hipotese\|Refinar com condições\|blocking.*yes" 01-work/documentos-oficiais/06-conformidade-LGPD/06.01-ROPA-registro-operacoes.md | awk '{print ($1>=1)?"CHECK rascunho LGPD (esperado bloqueado)":"FAIL"}' && ls 01-work/documentos-oficiais/06-conformidade-LGPD/06.03-RIPD-impacto.md 2>&1 | head -1`

## Dependências

- [[04-project-management/tarefas/P03-T08_Matriz_Dados_Finalidade|P03-T08]] — matriz 5 fluxos × 41 campos + retenção/propagação/DSAR (§1–§4) — base para G04.2
- [[04-project-management/tarefas/P02-T03_Matriz_Autorizacao_Tenancy|P02-T03]] — ator×permissão + tenancy (define quem vê qual campo por fluxo)
- G04.2 (M04 — LGPD libera) — `blocking: yes` até Jurídico LGPD/DPO liberar todos os fluxos lançamento; `GOV-002` aberto até `DEC-P04-T02.md` (ver `marcos-fases-v1.md#M04` G04.2 + `P04_Governanca_Confianca.md#6`); `P03-T08` em `em-revisao` é insumo, não liberação

## Registros

- [[00-project-control/registro-lacunas/lacunas/GOV-002]]
- `00-project-control/decisoes/DEC-P04-T02.md` (futura — após parecer LGPD liberar fluxos)

## Execução

- **Entregável produzido:** mapa preliminar fluxo→campo→finalidade→base legal→controller/processor→retenção→exclusão reconciliado com P03-T08; ROPA/DPA/RIPD como minutas `hipotese` v0.1.
- **Status:** `refining` — proposta para revisão LGPD; `GOV-002` **blocking: yes** até liberação formal; dados pessoais sem `purpose` válido permanecem bloqueados.
- **Próximo:** nomear Jurídico LGPD/DPO definitivo, completar ROPA por fluxo piloto, assinar DPA SEBRAE piloto, testar propagação ≤5 min (herda P03-T08).
