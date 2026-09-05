---
title: HUB Charter Piloto SEBRAE — Validação 28/10/2026 (1 página)
type: charter-piloto
status: rascunho
charter_id: CHARTER-PILOTO-SEBRAE-2026-10-28
evento_ancora: 2026-10-28
coorte: 30 fornecedores
versao: v1.0
created: 2026-09-05
updated: 2026-09-05
authors: [PF Rezende, Tamara Braga]
sponsor_sebrae: Bruno Brigida de Souza (SEBRAE-SP / Programa Ginga)
tech_owner: Marcos (Infra/Plataforma)
apoio_operacional: Pedro Naegele
audit_ref: "[[04-project-management/registros-trabalho/logs-progresso/auditoria-tarefas-executavel-2026-09-05.md]]"
plan_ref: "[[.omo/plans/framework-tarefas-executavel-piloto-vs-plataforma.md#task-3-charter-unico-do-piloto--spine-minimo-sebrae-2810]]"
spine_ref: "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md]]"
transcript_ref: "[[04-project-management/atas-reuniao/Transcript meeting SEBRAE 02-09-2026.md]]"
avaliacao_ref: "[[04-project-management/relatorios-status/Avaliacao_Honesta_Planos_Negocio_Projeto_2026-09-05.md]]"
tags: [charter, piloto, sebrae, ginga, validacao, 2026-10-28]
---

# HUB Charter Piloto SEBRAE — Validação 28/10/2026

> **Natureza do piloto:** **Piloto de validação operacional** (cooperação técnica + dados + validação conjunta). **Não é piloto pago** — não há instrumento financeiro, nota de contratação ou repasse SEBRAE→HUB para software neste ciclo. A expressão "piloto pago" só será usada quando houver instrumento formal assinado (contrato, termo de cooperação com cláusula financeira ou nota de serviço). Contrapartida SEBRAE = infraestrutura do evento (auditório, coffee até 100 pax), base anonimizada do evento para MVP e validação metodológica. Receita HUB neste ciclo, se houver, virá de **conteúdo/eventos remunerados via Ginga** (trilha/formação), não de licença de plataforma.
> **Referências normativas:** Auditoria `auditoria-tarefas-executavel-2026-09-05.md` (Task 2) + Plano `.omo/plans/framework-tarefas-executavel-piloto-vs-plataforma.md` Task 3. Spine mínimo em `spine-piloto-minimo-v1.md`.

| # | Campo (15) | Definição preenchida |
|---|---|---|
| **1** | **Patrocinador / Comprador — distinção explícita** | **Patrocinador da validação:** SEBRAE-SP / Programa Ginga, representado por **Bruno Brigida de Souza** — patrocina **validação** (evento 28/10 + base como MVP), sem orçamento de compra de software. **Comprador institucional (hipótese futura, NÃO deste piloto):** SEBRAE-comprador-institucional — somente com instrumento formal (licitação/cooperação financeira) e orçamento 2026+. **Este piloto = SEBRAE-piloto-validação**, não SEBRAE-comprador-institucional. |
| **2** | **Entidade que ASSINA** | **HUB (estrutura provisória) — PF Rezende como representante legal provisório**. Pendência `GOV-001` (arquitetura 4 unidades) mantém assinatura em entidade única até `DEC-GOV-001`. Nenhuma assinatura pelo Instituto isolado sem acordo intragrupo. |
| **3** | **Entidade que FATURA** | **Mesma entidade que assina (HUB provisório)**, via **nota de serviço de conteúdo/formação** se houver remuneração por trilha Ginga. Sem faturamento de licença SaaS neste piloto. Separação comercial vs. instituto restrito (`FIN-005`) documentada mas não operacionalizada — sem rateio neste ciclo. |
| **4** | **Entidade que ENTREGA (opera)** | **HUB/Divercidade — Tamara Braga (lead operacional) + Pedro Naegele (apoio) + Marcos (infra)**. Entrega = curadoria fornecedores, workshop pré-evento (online), operação do dia 28/10 (blocos 15 pitches), acompanhamento 30d pós-evento, relatório. SEBRAE/Ginga entrega logística (espaços, catering, comunidade). |
| **5** | **Entidade que RECEBE DADOS (controladoria LGPD)** | **Controlador conjunto provisório:** SEBRAE-SP (dados de inscritos no evento) + HUB (dados de diagnóstico/match). **Operador:** HUB (Marcos) para processamento MVP. Base legal: **consentimento** (inscrição) + **legítimo interesse / execução de cooperação técnica** (acompanhamento). Acordo de Cooperação Técnica + Matriz dados-finalidade (`P03-T08`) assinados **até 15/10/2026** antes de qualquer export. DPO provisório: **PF Rezende (interino)** até nomeação Jurídico/LGPD. |
| **6** | **Coorte** | **30 fornecedores** (reduzido de 50; formato 15+15 blocos, pitch 3 min) + **~30–50 compradores convidados** + **25 Ginga + 25 HUB** = até 100 pax no SEBRAE-SP (auditório + 2º andar). Critério inclusão fornecedor: MEI/MPE com produto/serviço validável, inscrição + diagnóstico Divercidade completo. Exclusão: sem consentimento LGPD ou sem pitch preparado no workshop pré-evento. |
| **7** | **Problema testado (hipótese falsificável)** | **Hipótese:** Centralizar dados hoje dispersos (inscrição → diagnóstico → match → reunião → proposta → contrato → receita) e operar curadoria humana + matching leve permite **converter ≥20% de fornecedores em reunião qualificada e ≥10% em proposta**, gerando receita reportada ou economia para comprador, com esforço operacional mensurável. **Falsificação:** se <10% reuniões ou 0 propostas/contratos em 30d, tese de valor não se sustenta neste formato. |
| **8** | **Escopo IN / OUT** | **IN:** inscrição, diagnóstico mínimo, match manual/curado, reunião no evento, follow-up 30d (proposta/contrato/receita reportada), medição funil + esforço + satisfação, relatório e decisão. **OUT (deferred para plataforma — ver spine):** Selo HUB, marketplace aberto, IA autônoma, benchmarks públicos, multi-ecossistema, 73-12 métricas restantes, white-label, integrações profundas, scoring automatizado, certificação formal. |
| **9** | **Dados usados + Base legal** | **Dados mínimos:** nome fantasia, CNPJ (opcional), contato, segmento, oferta, maturidade (diagnóstico), necessidade comprador, match, reunião, proposta, contrato, receita/economia reportada, consentimento, timestamp. **Não coletar:** dados sensíveis, bancários ou biométricos. **Base legal:** consentimento explícito na inscrição (LGPD art. 7º I) + cooperação técnica SEBRAE-HUB; retenção até **27/01/2027** (90d pós-evento) + exclusão/anonimização; direitos via DSAR manual (planilha). Matriz `P03-T08` em `matriz-dados-finalidade-P03-T08-v1.md` é evidência. |
| **10** | **Métricas mínimas (funil + esforço + satisfação)** | **Funil (7):** 1 inscrito → 2 qualificado (diagnóstico OK) → 3 match → 4 reunião realizada → 5 proposta enviada → 6 contrato fechado → 7 receita/economia reportada (R$). **Operação (2):** 8 esforço/h por fornecedor e por match/reunião; 9 custo infra (Hostinger VPS). **Qualitativo (2):** 10 satisfação fornecedor (NPS/CSAT) + 11 satisfação comprador; 12 intenção de repetir (sim/não + motivo). Todas com denominador, fonte primária e planilha auditável — sem "25% conversão" sem denominador. |
| **11** | **Orçamento / Custos** | **Custeio SEBRAE:** auditório + 2º andar + welcome coffee + almoço + coffee tarde até 100 pax (estimativa interna SEBRAE; sem repasse ao HUB). **Custo HUB:** horas Tamara/Pedro/PF Rezende (curadoria + workshop + dia do evento + follow-up), infra MVP Marcos (Hostinger VPS KVM-8 + storage; valor mínimo reportado até 04/09), materiais (PDFs, brindes se aplicável). **Sem CAPEX plataforma** neste ciclo. **Premissa financeira:** custo/hora e custo/match apurados no relatório 28/11 — sem projeção ARR/MRR neste piloto. |
| **12** | **Responsáveis nominais (sem papel genérico)** | **Accountable geral:** PF Rezende. **Lead operacional & relacionamento SEBRAE:** Tamara Braga. **Sponsor SEBRAE:** Bruno Brigida de Souza (Ginga). **Infra/Dados:** Marcos. **Apoio operacional:** Pedro Naegele. **Jurídico/LGPD (provisório):** PF Rezende (interino) + jurídico SEBRAE (Bruno aciona) até nomeação dedicada. **GTM/Speed/Cubo:** Tamara Braga + Bruno (ponte K9/Ricardo — Speed e Paloma/Ana — Cubo). Nenhum campo permanece com pendência nominal — fallback é interino com data-limite, não papel vago. |
| **13** | **Datas (âncoras operacionais)** | **Prep:** 03/09–27/10/2026 (proposta tempos-e-movimentos até 03/09; valor MVP até 04/09; acordo LGPD até 15/10; workshop pitch online até 21/10). **Evento:** **28/10/2026 (terça) 14h–18h+** SEBRAE-SP. **Follow-up 30d:** 29/10–27/11/2026 (ativação Comunidade Ginga + coleta proposta/contrato). **Relatório pós-piloto:** **28/11/2026** (owner Tamara Braga + PF Rezende). **Decisão continuidade:** **05/12/2026** (gate com SEBRAE + HUB). |
| **14** | **Definição de SUCESSO / FRACASSO (binária)** | **Sucesso (todos devem ocorrer):** ≥20% fornecedores (≥6/30) com reunião realizada + ≥10% (≥3/30) com proposta enviada + ≥1 contrato ou receita/economia reportada auditável + esforço/h por contrato documentado + NPS fornecedor ≥7 + intenção repetir ≥50% compradores. **Fracasso (qualquer um):** <10% reuniões OU 0 propostas em 30d OU 0 contrato/receita reportada OU esforço >40h por reunião sem queda projetável OU satisfação <6 OU LGPD/acordo não assinado até 15/10 (piloto não opera com dados). Sem zona cinza — relatório classifica binariamente. |
| **15** | **Decisão pós-piloto (gate 05/12)** | **Opções exclusivas:** (A) **Repetir piloto** com ajustes (novo coorte 30, mesmo escopo, custo marginal menor); (B) **Escalar para programa** (cofinanciamento via conteúdo/eventos + orçamento SEBRAE 2026, sem prometer licença SaaS); (C) **Pausar/encerrar** (sem tração — documentar aprendizado, não construir plataforma). **Critério de escolha:** evidência do relatório 28/11 (funil + custo + satisfação). **Quem decide:** PF Rezende + Tamara Braga (HUB) + Bruno Brigida (SEBRAE). **Registro:** ata em `04-project-management/atas-reuniao/` + `DEC-PILOTO-2026-12-05.md` em `00-project-control/decisoes/` (se opção A/B). Sem prorrogação tácita. |

**Notas de conformidade:**
- Auditoria base: `auditoria-tarefas-executavel-2026-09-05.md` §1 (60 ocorrências com pendência nominal), §4 top offenders (P04-T01 GOV-001, P03 spine), §10 próximos passos — Task 3 como pré-requisito de owners.
- Plano: `.omo/plans/framework-tarefas-executavel-piloto-vs-plataforma.md` Task 3 — charter 1-página + spine ≤12 entidades/métricas + deferred list.
- Transcript SEBRAE 02-09-2026: evento 28/10, 30 fornecedores, base como MVP validada por Bruno com acordo LGPD, sem verba direta por licitação, conexão Speed/Cubo.
- Avaliação honesta 2026-09-05 §3, §5, §12: distinção patrocinador vs comprador, 15 campos do charter, deferred Selo/marketplace/IA/benchmarks.
- Proibição: não tratar colaboração de validação como "piloto pago" sem instrumento — este charter cumpre a regra.

**Verificação:**
```bash
grep -n "a desi""gnar" 04-project-management/planos-mestres/HUB_Charter_Piloto_SEBRAE_2026-10-28.md  # deve == 0 (string quebrada para nao contar no grep literal)
grep -n "piloto pago" 04-project-management/planos-mestres/HUB_Charter_Piloto_SEBRAE_2026-10-28.md  # só ocorre com qualificador "Não é piloto pago / só com instrumento"
ls 04-project-management/planos-mestres/HUB_Charter_Piloto_SEBRAE_2026-10-28.md
```
