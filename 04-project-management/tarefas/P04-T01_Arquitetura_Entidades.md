---
title: P04-T01 — Arquitetura de entidades (4 unidades) + acordos intragrupo
task_id: P04-T01
phase: P04
status: pendente
priority: critica
area: governance-legal
layer: refining
owner:
  - PF Rezende (interino)
accountable: PF Rezende
blocked_reason: "aguardando nomeação Jurídico — GOV-001"
blocked_until: 2026-10-15
gap_ids:
  - GOV-001
dependencies:
  - P03-T01
  - P01-T01
target_file: 99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md
related_notes:
  - "[[04-project-management/planos-fase/P04_Governanca_Confianca]]"
  - "[[00-project-control/registro-lacunas/lacunas/GOV-001]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M04 — Governança & Confiança Aprovada]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1]]"
evidence_required:
  - 01-work/pesquisa-e-confianca/documentos-oficiais/00-controle-drive/02-decisao-GOV-001-estrutura-societaria.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/00-controle-drive/03-matriz-CNPJ-oferta-receita.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.06-contrato-intercompany.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/01-atos-constitutivos/01.01-contrato-social-HUB-Negocios.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/07-fiscal-contabil/07.01-regime-tributario.md
  - 99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md
created: 2026-08-26
tags:
  - task
  - fase-P04
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P04-T01 — Arquitetura de entidades (4 unidades) + acordos intragrupo

## Objetivo
Definir, como proposta para refinamento, constituição, propriedade, contas, tributos e acordos intragrupo (HUB marca, Negócios, Instituto, Plataforma), para posterior revisão jurídica e financeira — desbloqueia GOV-001.

## Entregável
Matriz de entidades + minutas de acordos em `01-work/pesquisa-e-confianca/documentos-oficiais/00-controle-drive/` (02-decisao-GOV-001 + 03-matriz-CNPJ) + `01-atos-constitutivos/01.01` + `04-contratos-fundamentais/04.06` + `07-fiscal-contabil/07.01`, com espelho em `99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md` como insumo Blueprint→Refining. Parecer jurídico/financeiro é evidência para Camada 3, não aprovação nesta tarefa.

## Acceptance criteria (G04.1 — GOV-001)

- [ ] Matriz 4 unidades publicada — `03-matriz-CNPJ-oferta-receita.md` § matriz com cada oferta BP-001 §2.1 mapeada para CNPJ dono (HUB Negócios/Instituto/Editora/Selo), natureza receita (ARR/pontual/restrita per `07.05`), regime tributário por CNPJ (`07.01` Lucro Presumido/Real/Simples + `07.04` IBS/CBS EC132), conta bancária segregada, + decisão `02-decisao-GOV-001-estrutura-societaria.md` preenchida com opção A/B/C/D + data/ata/responsáveis; sem decisão, matriz permanece `hipotese`
- [ ] Minutas intragrupo + titularidade PI preliminar — `04.06-contrato-intercompany.md` com transfer pricing preliminar, alocação tributos, repasse entre CNPJs + `01.01-contrato-social-HUB-Negocios.md` + `01.04-licenca-marca-metodo-CAOS.md` (titularidade HUB/C.A.O.S. por CNPJ) + `09.06-politica-partes-relacionadas-intercompany.md`; todo repasse inter-CNPJ com contrato + preço; validação Jurídico+Finanças documentada como rascunho refinamento, não aprovação
- [ ] Parecer jurídico/financeiro externo pendente — rascunho registra pontos para revisão (natureza jurídica por CNPJ, contas, autoridade, tributos); parecer assinado OAB/contábil + protocolo Junta/Cartório/Receita são exigidos para G04.1 aprovado em Camada 3; sem parecer, GOV-001 permanece **blocking: yes** e 80% docs (`01.*`, `02.*`, `04.06`, `07.*`) permanecem `hipotese` — não protocolar antes da decisão (ver `02-decisao-GOV-001` danger)

> **Pilot vs Full:** Piloto SEBRAE 28/10 opera com subset mínimo — 1 CNPJ (`HUB Negócios Ltda.` hipotese) + matriz parcial só para ofertas piloto (Jornada/Plataforma) com `consentimento_id` condicional por `purpose` (`spine-piloto-minimo-v1.md` §3) + `acordo-cooperacao-SEBRAE-HUB-2026-10-15.md` (base legal piloto); DSAR manual. Plataforma full = 2-4 CNPJs constituídos + contas segregadas + parecer Jurídico+Finanças aprovado + contratos intragrupo assinados + regime tributário validado + titularidade PI por CNPJ. Este critério valida full (4 unidades + parecer); piloto pode operar com 1 CNPJ hipotese mas evidência full permanece obrigatória para G04.1.

## Evidence required

- `01-work/pesquisa-e-confianca/documentos-oficiais/00-controle-drive/02-decisao-GOV-001-estrutura-societaria.md` (opção A/B/C/D + critérios decisão + ata — bloqueador; ver danger 80% docs)
- `01-work/pesquisa-e-confianca/documentos-oficiais/00-controle-drive/03-matriz-CNPJ-oferta-receita.md` (§ matriz oferta→CNPJ→receita + cenários A/B + pendências GOV-001)
- `01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.06-contrato-intercompany.md` (transfer pricing preliminar + política partes relacionadas `09.06`)
- `01-work/pesquisa-e-confianca/documentos-oficiais/01-atos-constitutivos/01.01-contrato-social-HUB-Negocios.md` + `01.04-licenca-marca-metodo-CAOS.md` + `07-fiscal-contabil/07.01-regime-tributario.md` (constituição, PI, tributos por CNPJ)
- `99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md` (espelho blueprint — não constitui aprovação)
- `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §1/§3 (subset piloto 12 entidades + consentimento condicional — diferenciação pilot vs full)

## Verification

- [ ] `ls 01-work/pesquisa-e-confianca/documentos-oficiais/00-controle-drive/02-decisao-GOV-001-estrutura-societaria.md 01-work/pesquisa-e-confianca/documentos-oficiais/00-controle-drive/03-matriz-CNPJ-oferta-receita.md && grep -c "GOV-001\|hipotese\|CNPJ" 01-work/pesquisa-e-confianca/documentos-oficiais/00-controle-drive/02-decisao-GOV-001-estrutura-societaria.md | awk '{print ($1>=3)?"PASS matriz GOV-001":"FAIL"}' && grep -c "CNPJ faturador\|HUB Negócios.*Instituto\|Cenário A.*Cenário B" 01-work/pesquisa-e-confianca/documentos-oficiais/00-controle-drive/03-matriz-CNPJ-oferta-receita.md | awk '{print ($1>=2)?"PASS 4 unidades matriz":"FAIL"}'`
- [ ] `ls 01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.06-contrato-intercompany.md 01-work/pesquisa-e-confianca/documentos-oficiais/01-atos-constitutivos/01.01-contrato-social-HUB-Negocios.md 01-work/pesquisa-e-confianca/documentos-oficiais/07-fiscal-contabil/07.01-regime-tributario.md && grep -c "hipotese\|a desi""gnar\|revisado por advogado" 01-work/pesquisa-e-confianca/documentos-oficiais/04-contratos-fundamentais/04.06-contrato-intercompany.md | awk '{print ($1>=1)?"CHECK rascunho hipotese (esperado)":"FAIL"}'`
- [ ] `grep -c "BLOQUEADOR\|não protocolar\|80%.*hipotese" 01-work/pesquisa-e-confianca/documentos-oficiais/00-controle-drive/02-decisao-GOV-001-estrutura-societaria.md | awk '{print ($1>=1)?"PASS blocking preservado":"FAIL"}' && ls 99-archive/superado/01-blueprint-v1-submissao-superada/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md 2>&1 | head -1`

## Dependências

- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]] — 25 entidades canônicas + 12 piloto `spine-piloto-minimo-v1` (entidades travadas liberam P04)
- [[04-project-management/tarefas/P01-T01_Matriz_4_Unidades|P01-T01]] — 4 unidades conceituais P01 (oferta→unidade)
- G04.1 (M04 — GOV-001) — `blocking: yes` até parecer Jurídico+Finanças aprovado + decisão societária registrada em `02-decisao-GOV-001` + `DEC-P04-T01.md`; rascunho refinamento não libera P06 financeiro restrito nem protocolo Junta (ver `04-project-management/marcos/marcos-fases-v1.md#M04` e `P04_Governanca_Confianca.md#6` G04.1)

## Registros

- [[00-project-control/registro-lacunas/lacunas/GOV-001]]
- `00-project-control/decisoes/DEC-P04-T01.md` (futura — Camada 3, após parecer)

## Execução

- **Entregável produzido:** matriz `03-matriz-CNPJ-oferta-receita.md` hipotese + decisão GOV-001 esqueleto v0.1 + minutas intercompany/atos constitutivos como insumos `hipotese`.
- **Status:** `refining` — proposta para revisão Jurídico/Finanças; GOV-001 **blocking: yes** permanece aberto até parecer + decisão formal.
- **Próximo:** consultar contador+advogado OAB com `02-decisao-GOV-001` em mãos, preencher matriz com faturamento ano 1 por oferta, registrar ata.
