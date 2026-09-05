---
title: P04-T03 — Charter independência do Selo HUB + controles operacionais
task_id: P04-T03
phase: P04
status: pendente
priority: critica
area: governance-legal
layer: refining
owner:
  - PF Rezende (interino — Jurídico)
accountable: PF Rezende
blocked_reason: "aguardando nomeação Jurídico — GOV-003"
blocked_until: 2026-10-15
gap_ids:
  - GOV-003
dependencies:
  - P04-T01
target_file: 99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md
related_notes:
  - "[[04-project-management/planos-fase/P04_Governanca_Confianca]]"
  - "[[00-project-control/registro-lacunas/lacunas/GOV-003]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M04 — Governança & Confiança Aprovada]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1]]"
evidence_required:
  - 01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.08-termos-Selo-HUB.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.05-contrato-fornecedores-avaliadores.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/03-licencas-autorizacoes/03.05-selo-certificacao-INMETRO.md
  - 99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P04
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P04-T03 — Charter independência do Selo HUB + controles operacionais

## Objetivo
Elaborar carta de governança independente: nomeação/pagamento avaliadores, conflitos, recursos, desligamento, regras de alegação pública, segregação receita comercial — com Selo permanecendo `bloqueado` até aprovação independente (GOV-003).

## Entregável
Rascunho de Charter em `01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.08-termos-Selo-HUB.md` + espelho em `99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md` § Selo, com controles operacionais (nomeação, pagamento, impedimentos, recursos, validade/renovação, comunicação); até aprovação Camada 3, Selo permanece bloqueado e não entra em GTM.

## Acceptance criteria (G04.3 — GOV-003)

- [ ] Charter publicado com 6 cláusulas testáveis — `04.08-termos-Selo-HUB.md` § charter contém: (1) nomeação/pagamento avaliadores (quem nomeia, quem paga, segregação vs vendas), (2) impedimentos/conflitos (critérios afastamento, quarentena comercial), (3) recursos/apelações (comitê independente, prazo, trilha), (4) desligamento/revogação (causas, vigência, renovação), (5) regras comunicação/alegação pública (o que pode/deve dizer, selo ≠ certificação INMETRO até `03.05`), (6) segregação receita comercial (Selo não é produto comercial liberado; fundos separados); avaliador não controlado por vendas — verificado por `grep -c "avaliador.*independente\|não controlado por vendas\|conflito.*interesse"`
- [ ] Controles operacionais documentados — `04.05-contrato-fornecedores-avaliadores.md` + `03.05-selo-certificacao-INMETRO.md` (hipotese) com pagamento desacoplado de vendas, trilha auditável nomeação→avaliação→decisão, amostragem/limiares, recurso com dono não-vendas; sem controle, Selo não opera
- [ ] Selo bloqueado até aprovação independente — sem charter aprovado por revisão independente (fora de vendas), Selo permanece `bloqueado` per `P04_Governanca_Confianca.md §3 Fora` ("qualquer afirmação de Selo como produto comercial liberado permanece blueprint até GOV-003 aprovado") + `marcos-fases-v1.md G04.3` ("ou Selo permanece bloqueado GOV-003"); nenhuma alegação GTM/comercial pode usar Selo como evidência até `DEC-P04-T03.md` + `02-decisao-GOV-001` definir CNPJ dono Selo; GOV-003 **blocking: yes** para GTM Selo

> **Pilot vs Full:** Piloto SEBRAE 28/10 — Selo **deferred** (`spine-piloto-minimo-v1.md` §4 "Selo HUB deferred — requer GOV-003 + independência + auditoria; sem valor no piloto 30 fornecedores"); nenhum fornecedor piloto recebe Selo; apenas curadoria manual. Plataforma full = charter aprovado + avaliadores independentes pagos fora de vendas + comitê recursos + INMETRO/OCP quando aplicável + segregação receita + alegações públicas só via biblioteca P06 (GOV-010). Este critério valida full charter; piloto mantém Selo bloqueado por definição.

## Evidence required

- `01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.08-termos-Selo-HUB.md` (charter rascunho — 6 cláusulas + status hipotese)
- `01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.05-contrato-fornecedores-avaliadores.md` (nomeação/pagamento avaliadores — desacoplado vendas)
- `01-work/pesquisa-e-confianca/documentos-oficiais/03-licencas-autorizacoes/03.05-selo-certificacao-INMETRO.md` (certificação — hipotese, não protocolar até GOV-003)
- `99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md` § Selo (espelho blueprint — não aprovação)
- `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §4 (Selo deferred piloto — diferenciação pilot vs full)

## Verification

- [ ] `ls 01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.08-termos-Selo-HUB.md && grep -c "Charter\|independência\|avaliador.*pagamento\|conflito\|recurso\|desligamento\|alegação pública" 01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.08-termos-Selo-HUB.md | awk '{print ($1>=4)?"PASS charter 6 cláusulas":"FAIL"}' && grep -c "não controlado por vendas\|independente.*vendas\|segregação.*receita" 01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.08-termos-Selo-HUB.md | awk '{print ($1>=1)?"PASS independência vendas":"FAIL"}'`
- [ ] `ls 01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.05-contrato-fornecedores-avaliadores.md && grep -c "avaliador\|nomeação\|pagamento" 01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.05-contrato-fornecedores-avaliadores.md | awk '{print ($1>=2)?"PASS controles operacionais":"FAIL"}'`
- [ ] `grep -c "bloqueado\|blueprint.*GOV-003\|não.*GTM.*Selo" 01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.08-termos-Selo-HUB.md | awk '{print ($1>=1)?"PASS Selo bloqueado preservado":"FAIL"}' && grep -c "deferred.*Selo\|Selo.*deferred" 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md | awk '{print ($1>=1)?"PASS pilot deferred":"FAIL"}'`

## Dependências

- [[04-project-management/tarefas/P04-T01_Arquitetura_Entidades|P04-T01]] — CNPJ dono Selo definido em `02-decisao-GOV-001` (opção D só após GOV-003)
- G04.3 (M04 — GOV-003) — `blocking: yes` para qualquer GTM/comercial de Selo; Selo permanece `bloqueado` até charter aprovado por revisão independente + `DEC-P04-T03.md`; sem aprovação, P06 não pode contar Selo como receita/produto (ver `P04_Governanca_Confianca.md#6` G04.3 + `marcos-fases-v1.md` G04.3)

## Registros

- [[00-project-control/registro-lacunas/lacunas/GOV-003]]
- `00-project-control/decisoes/DEC-P04-T03.md` (futura — revisão independente aprova modelo Selo)

## Execução

- **Entregável produzido:** rascunho charter 6 cláusulas + controles operacionais como insumo `hipotese`; Selo marcado `bloqueado`/`deferred`.
- **Status:** `refining` — proposta para revisão independente; GOV-003 **blocking: yes** para GTM até aprovação.
- **Próximo:** nomear Jurídico, contratar assessoria governança certificação, submeter charter a revisor independente (fora de vendas), definir CNPJ Selo após GOV-001.
