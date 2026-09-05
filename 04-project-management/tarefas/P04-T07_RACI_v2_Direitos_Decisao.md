---
title: P04-T07 — RACI v2 + matriz direitos de decisão + incidentes
task_id: P04-T07
phase: P04
status: pendente
priority: critica
area: governance-legal
layer: refining
owner:
  - PF Rezende
  - PF Rezende (interino — Jurídico)
accountable: PF Rezende
blocked_reason: "aguardando nomeação Jurídico — GOV-008"
blocked_until: 2026-10-15
gap_ids:
  - GOV-008
  - STR-007
dependencies:
  - P02-T06
  - P04-T01
target_file: 99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md
related_notes:
  - "[[04-project-management/planos-fase/P04_Governanca_Confianca]]"
  - "[[00-project-control/registro-lacunas/lacunas/GOV-008]]"
  - "[[00-project-control/registro-lacunas/lacunas/STR-007]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M04 — Governança & Confiança Aprovada]]"
evidence_required:
  - 99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md
  - 00-project-control/registro-lacunas/lacunas/GOV-008.md
  - 00-project-control/registro-lacunas/lacunas/STR-007.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/09-governanca-corporativa/09.03-board-advisory-charter.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/09-governanca-corporativa/09.04-registro-decisoes-matriz-alcadas.md
  - 04-project-management/tarefas/P02-T06_RACI_Accountable_Unico.md
created: 2026-08-26
tags:
  - task
  - fase-P04
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P04-T07 — RACI v2 + matriz direitos de decisão + incidentes

## Objetivo
Consolidar RACI v2 sem ambiguidade (1 A por atividade crítica) + direitos de decisão + tratamento de incidentes + sucessão fundador (GOV-008 + STR-007).

## Entregável
RACI v2 proposto em `99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md` § RACI + `00-project-control/registro-lacunas/lacunas/GOV-008.md` + `09-governanca-corporativa/09.03-board` + `09.04-matriz-alcadas` como rascunho refining; RACI sem ambiguidade + dono não-fundador é Camada 3.

## Acceptance criteria (G04.7 — GOV-008 + STR-007)

- [ ] RACI v2 sem ambiguidade publicado — tabela em `HUB_Blueprint_Governanca_e_Juridico.md` § RACI com cada atividade crítica (constituição, conta bancária, tributo, contrato cliente/fornecedor, DSAR/retenção, Selo, PI, métrica, release) com 1 Accountable único (A), 1 Responsible (R), Consulted/Informed explícitos; zero atividade com 2×A ou A vazio; stewards de fonte nomeados (`dim_*` owner), resposta incidentes LGPD com dono+DPA SLA; validado por `grep -c " A "` vs `grep -c "accountable.*ausente\|2×A"` =0
- [ ] Matriz direitos decisão + sucessão fundador — `09.04-registro-decisoes-matriz-alcadas.md` com decisões críticas (orçamento >R$ X, contratação CNPJ, Selo, alegação pública, liberação dados sensíveis, release) mapeadas para dono não-fundador + escalonamento + fórum (board/advisory `09.03`) + quorum; nenhuma decisão crítica com dono = fundador exclusivo; STR-007 exige caminho sucessão e autoridade delegada documentada
- [ ] RACI aprovado pendente — rascunho registra ambiguidades tratadas + decisões críticas com dono não-fundador marcados; GOV-008+STR-007 permanecem abertos até Jurídico+Governança aprovarem RACI sem ambiguidade + `DEC-P04-T07.md`; sem aprovação, operações dependem de fundador = risco

> **Pilot vs Full:** Piloto SEBRAE 28/10 — RACI piloto mínimo: PF Rezende (interino A) + Tamara Braga (R curadoria) + Marcos (R dados) com A único por atividade piloto (inscrição, diagnóstico, match, reuniao, receita) + escalonamento = PF Rezende; decisões piloto delegáveis documentadas mas fundador ainda A interino. Plataforma full = RACI completo sem ambiguidade + donos não-fundadores definitivos por domínio (Dados, Jurídico LGPD, Tech, Finanças) + board charter operacional + sucessão testada. Este critério valida full; piloto pode operar com RACI interino + lacunas escalonamento.

## Evidence required

- `99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md` § RACI (§ RACI v2 — 1 A por atividade + stewards fonte + incidentes)
- `00-project-control/registro-lacunas/lacunas/GOV-008.md` (gap RACI — status open) + `00-project-control/registro-lacunas/lacunas/STR-007.md` (sucessão fundador)
- `01-work/pesquisa-e-confianca/documentos-oficiais/09-governanca-corporativa/09.03-board-advisory-charter.md` (board/advisory — fórum decisão)
- `01-work/pesquisa-e-confianca/documentos-oficiais/09-governanca-corporativa/09.04-registro-decisoes-matriz-alcadas.md` (matriz alcadas — dono não-fundador + escalonamento)
- `04-project-management/tarefas/P02-T06_RACI_Accountable_Unico.md` (RACI v1 P02 — base para v2)
- `01-work/pesquisa-e-confianca/documentos-oficiais/09-governanca-corporativa/09.01-cap-table-vesting-cliff.md` + `09.02-acordo-socios-completo.md` (cap table + acordo sócios — sucessão)

## Verification

- [ ] `ls 99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md && grep -c "RACI\|Accountable\|Responsible" 99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md | awk '{print ($1>=2)?"PASS RACI v2":"FAIL"}' && grep -c " A .*|" 99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md | awk '{print ($1>=5)?"PASS A único por atividade":"CHECK"}'`
- [ ] `ls 01-work/pesquisa-e-confianca/documentos-oficiais/09-governanca-corporativa/09.04-registro-decisoes-matriz-alcadas.md && grep -c "não-fundador\|não fundador\|PF Rezende.*interino\|escalonamento\|board" 01-work/pesquisa-e-confianca/documentos-oficiais/09-governanca-corporativa/09.04-registro-decisoes-matriz-alcadas.md | awk '{print ($1>=2)?"PASS direitos decisão":"FAIL"}' && grep -c "STR-007\|sucessão\|delegada" 01-work/pesquisa-e-confianca/documentos-oficiais/09-governanca-corporativa/09.04-registro-decisoes-matriz-alcadas.md | awk '{print ($1>=1)?"PASS STR-007":"FAIL"}'`
- [ ] `grep -c "a desi""gnar\|accountable.*ausente\|2×A" 99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md | awk '{print ($1==0)?"PASS sem ambiguidade":"FAIL ambiguidade " $1}' && ls 00-project-control/registro-lacunas/lacunas/GOV-008.md 00-project-control/registro-lacunas/lacunas/STR-007.md 2>&1 | head -3`

## Dependências

- [[04-project-management/tarefas/P02-T06_RACI_Accountable_Unico|P02-T06]] — RACI v1 com A único por atividade crítica (base)
- [[04-project-management/tarefas/P04-T01_Arquitetura_Entidades|P04-T01]] — CNPJs/entidades donas definem quem é A por CNPJ
- G04.7 (M04 — GOV-008+STR-007) — `blocking: no` para piloto interino, `blocking: yes` para escala até RACI sem ambiguidade + donos não-fundadores aprovados + `DEC-P04-T07.md` (ver `marcos-fases-v1.md#M04` G04.7)

## Registros

- [[00-project-control/registro-lacunas/lacunas/GOV-008]] · [[00-project-control/registro-lacunas/lacunas/STR-007]]
- `00-project-control/decisoes/DEC-P04-T07.md` (futura — RACI v2 aprovado)

## Execução

- **Entregável produzido:** RACI v2 rascunho + matriz alcadas com donos não-fundadores marcados + board charter esqueleto.
- **Status:** `refining` — proposta para Jurídico/Governança; GOV-008+STR-007 abertos até aprovação.
- **Próximo:** nomear Jurídico, preencher RACI v2 com 1 A único validado, definir alcadas não-fundador, registrar decisão sucessão.
