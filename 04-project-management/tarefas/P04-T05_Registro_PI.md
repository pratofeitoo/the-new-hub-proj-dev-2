---
title: P04-T05 — Registro PI + acordos de contribuidores
task_id: P04-T05
phase: P04
status: pendente
priority: alta
area: governance-legal
layer: refining
owner:
  - PF Rezende (interino — Jurídico)
accountable: PF Rezende
blocked_reason: "aguardando nomeação Jurídico — GOV-006"
blocked_until: 2026-10-15
gap_ids:
  - GOV-006
dependencies:
  - P04-T01
target_file: 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/
related_notes:
  - "[[04-project-management/planos-fase/P04_Governanca_Confianca]]"
  - "[[00-project-control/registro-lacunas/lacunas/GOV-006]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M04 — Governança & Confiança Aprovada]]"
evidence_required:
  - 01-work/pesquisa-e-confianca/documentos-oficiais/05-propriedade-intelectual/05.01-marcas-INPI-HUB-CAOS-Selo.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/05-propriedade-intelectual/05.02-cessao-PI-empregados.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/05-propriedade-intelectual/05.03-registro-software.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/05-propriedade-intelectual/05.04-inventario-PI-open-source.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/05-propriedade-intelectual/05.05-dominios-registro-br.md
  - 01-work/pesquisa-e-confianca/documentos-oficiais/01-atos-constitutivos/01.04-licenca-marca-metodo-CAOS.md
created: 2026-08-26
tags:
  - task
  - fase-P04
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P04-T05 — Registro PI + acordos de contribuidores

## Objetivo
Mapear titularidade de marca, C.A.O.S., conteúdo, software, schemas, dados/derivados + acordos de contribuidores — com cadeia exigível (GOV-006).

## Entregável
Registro PI em `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` + inventário `05-propriedade-intelectual/` (05.01 marcas, 05.02 cessão, 05.03 software, 05.04 OSS, 05.05 domínios) + licença `01.04-CAOS` + cessão `04.07` e `08.04` como rascunho hipotese; cadeia completa é Camada 3.

## Acceptance criteria (G04.5 — GOV-006)

- [ ] Inventário PI 6 famílias publicado — registro em target com: (1) marca HUB/C.A.O.S./Selo (`05.01` INPI + classes + titular por CNPJ per GOV-001 + `01.04` licença CAOS), (2) conteúdo (metodologia, apostilas, dashboards), (3) software (código, schemas, `envelope-evento` + `dicionario-fisico` P03-T04), (4) dados/derivados (41 campos, 73 métricas, features, modelos), (5) domínios (`05.05` registro.br), (6) OSS (`05.04` inventário licença); cada item com `titular CNPJ` (hipotese até GOV-001) + `status INPI/registro` + `licença/cessão`
- [ ] Cadeia titularidade + acordos contribuidores mapeada — `05.02-cessao-PI-empregados.md` (cessão empregados/PJ `08.02`) + `04.07-termo-voluntariado-cessao.md` + `08.04-confidencialidade-nao-concorrencia.md` + `05.03-registro-software.md` (INPI software quando código existir) cobrindo criadores atuais; lacunas listadas (ex: conteúdo pré-HUB sem cessão) com `risco residual + plano mitigação`; nenhum gap de titularidade ocultado
- [ ] Cadeia exigível pendente — registro marca como rascunho `hipotese`; sem busca INPI + depósito + cessões assinadas + `DEC-P04-T05.md`, GOV-006 permanece aberto e nenhuma alegação de propriedade exclusiva pode ser feita além do inventário; `blocking: no` para piloto (uso interno) mas `blocking: yes` para licenciamento comercial/white-label (P06-T11) e captação

> **Pilot vs Full:** Piloto SEBRAE 28/10 — inventário PI piloto (marca HUB + C.A.O.S. em uso + schemas 12 campos piloto + dashboards piloto) com cessões piloto para Tamara/Marcos/PF Rezende; registro INPI/software deferred para pós-piloto. Plataforma full = 6 famílias completas + INPI depositado + software registrado + OSS auditado + cessões assinadas para todos contribuidores + titularidade por CNPJ definida + cadeia exigível. Este critério valida full; piloto pode operar com inventário hipotese + cessões piloto.

## Evidence required

- `01-work/pesquisa-e-confianca/documentos-oficiais/05-propriedade-intelectual/05.01-marcas-INPI-HUB-CAOS-Selo.md` (INPI — classes, titular por CNPJ hipotese, busca pendente)
- `01-work/pesquisa-e-confianca/documentos-oficiais/05-propriedade-intelectual/05.02-cessao-PI-empregados.md` + `08.02-contratos-PJ.md` + `04.07-termo-voluntariado-cessao.md` (cessão contribuidores)
- `01-work/pesquisa-e-confianca/documentos-oficiais/05-propriedade-intelectual/05.03-registro-software.md` + `05.04-inventario-PI-open-source.md` + `05.05-dominios-registro-br.md` (software + OSS + domínios)
- `01-work/pesquisa-e-confianca/documentos-oficiais/01-atos-constitutivos/01.04-licenca-marca-metodo-CAOS.md` (licença CAOS por CNPJ)
- `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` (registro PI consolidado — rascunho com lacunas)

## Verification

- [ ] `ls 01-work/pesquisa-e-confianca/documentos-oficiais/05-propriedade-intelectual/05.0*.md 01-work/pesquisa-e-confianca/documentos-oficiais/01-atos-constitutivos/01.04-licenca-marca-metodo-CAOS.md && grep -c "marca\|C.A.O.S.\|software\|dados.*derivados\|domínio" 01-work/pesquisa-e-confianca/documentos-oficiais/05-propriedade-intelectual/05.01-marcas-INPI-HUB-CAOS-Selo.md | awk '{print ($1>=2)?"PASS inventário PI":"FAIL"}' && grep -c "INPI\|registro.*software\|cessão" 01-work/pesquisa-e-confianca/documentos-oficiais/05-propriedade-intelectual/05.02-cessao-PI-empregados.md | awk '{print ($1>=1)?"PASS cadeia titularidade":"FAIL"}'`
- [ ] `grep -c "hipotese\|a desi""gnar\|pendente.*assinatura" 01-work/pesquisa-e-confianca/documentos-oficiais/05-propriedade-intelectual/05.01-marcas-INPI-HUB-CAOS-Selo.md | awk '{print ($1>=1)?"PASS rascunho não exigível (esperado)":"FAIL"}' && ls 01-work/pesquisa-e-confianca/documentos-oficiais/_controle/ 2>&1 | head -5`
- [ ] `grep -c "GOV-001\|titular.*CNPJ\|hipótese.*CNPJ" 01-work/pesquisa-e-confianca/documentos-oficiais/05-propriedade-intelectual/05.01-marcas-INPI-HUB-CAOS-Selo.md | awk '{print ($1>=1)?"PASS titularidade por CNPJ":"FAIL"}'`

## Dependências

- [[04-project-management/tarefas/P04-T01_Arquitetura_Entidades|P04-T01]] — CNPJ dono PI definido em `02-decisao-GOV-001`; sem GOV-001, titular PI permanece hipotese
- G04.5 (M04 — GOV-006) — `blocking: no` para piloto interno, `blocking: yes` para licenciamento comercial/white-label até cadeia exigível + `DEC-P04-T05.md` (ver `P04_Governanca_Confianca.md#6` G04.5)

## Registros

- [[00-project-control/registro-lacunas/lacunas/GOV-006]]
- `00-project-control/decisoes/DEC-P04-T05.md` (futura — cadeia exigível aprovada)

## Execução

- **Entregável produzido:** inventário 6 famílias + minutas cessão como rascunho hipotese; lacunas titularidade listadas com risco.
- **Status:** `refining` — proposta para Jurídico; GOV-006 aberto até busca INPI + cessões assinadas.
- **Próximo:** busca INPI HUB/C.A.O.S./Selo, registrar software piloto, coletar cessões faltantes, definir titular por CNPJ após GOV-001.
