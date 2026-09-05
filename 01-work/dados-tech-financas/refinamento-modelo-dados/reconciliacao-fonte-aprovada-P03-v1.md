---
title: Reconciliação da Fonte Aprovada — Dados, Tech e Finanças P03 v1
type: reconciliation-crosswalk
status: rascunho
updated: 2026-09-05
authority: 03-approved/nucleo-inteligencia
---

# Reconciliação da Fonte Aprovada — P03

> **Função:** crosswalk único de trabalho entre `01-work/dados-tech-financas` e `03-approved/nucleo-inteligencia`.
>
> **Autoridade:** os arquivos em `03-approved/` permanecem imutáveis e são a fonte de verdade. Este documento não aprova, promove ou certifica os artefatos de trabalho.

## Tabela única de reconciliação

| Tema | Regra na fonte aprovada | Regra/estado encontrado em `01-work` | Decisão canônica de trabalho | Arquivos afetados | Verificação |
|---|---|---|---|---|---|
| Vocabulário de oportunidade | O KPI técnico é **Receita disponível perdida**; valor potencial é oportunidade não realizada. | Alguns documentos usam `Receita potencial perdida`. | Usar `Receita disponível perdida` em KPI, glossário, premissas e referências; manter o termo antigo apenas como alias histórico. | `HUB_Glossario_Financeiro_Congelado_v1.md`, `registro-premissas-v0.md`, `taxonomia-estados-valor-P03-T07-v1.md` | Alinhado após atualização |
| Estados de valor | A especificação conceitual possui oito status: `identificado`, `estimado`, `aprovado`, `em realização`, `realizado`, `validado`, `expirado`, `rejeitado`. | O técnico e o trabalho usam quatro estados: `Potencial → Influenciado → Validado → Realizado`. | Os quatro estados são o enum operacional do ledger. O mapeamento conceitual é: `identificado/estimado → Potencial`; `aprovado/em realização → Influenciado`; `validado → Validado`; `realizado → Realizado`; `expirado/rejeitado → terminal não promovível`. Nenhum salto de estado é permitido. | `taxonomia-estados-valor-P03-T07-v1.md`, `HUB_Glossario_Financeiro_Congelado_v1.md`, `registro-premissas-v0.md` | Alinhado após atualização |
| Indicadores | A matriz aprovada documenta a convergência **73 indicadores de blueprint → 16 KPIs técnicos**. | P03-T05 chama os 73 de “Catálogo Canônico + Grafo”. | Nomear os 73 como inventário de blueprint e os 16 como catálogo técnico governado; usar o crosswalk aprovado para qualquer correspondência. | `catalogo-metricas-grafo-P03-T05-v1.md` | Alinhado após atualização |
| Entidades | A matriz aprovada documenta **25 → 23 nós**; N26 Decision é uma adição operacional. | P03-T01 lista 25 entidades e descreve N26 fora da lista. | Preservar 25 entidades canônicas e declarar N26 como entidade operacional adicional, sem alterar a contagem canônica. | `modelo-logico-fisico-P03-T01-v1.md` | Alinhado após atualização |
| Person–Company | O vínculo Pessoa–Empresa é temporal e deve ser materializado em `rel_person_company`. | P03-T04 ainda descreve `dim_person.company_id` como FK direta e o diagrama mostra ligação direta. | `rel_person_company` é a única relação autoritativa. `dim_person.company_id`, se mantido por compatibilidade, é projeção legada/derivada sem FK canônica. | `dicionario-fisico-mapping-P03-T04-v1.md`, `contratos-fundacao-F1-E02-E20-E01-v1.md`, `matriz-dados-finalidade-P03-T08-v1.md` | Alinhado após atualização |
| Campos | A planilha aprovada define 47 FLDs canônicos (`FLD-001`–`FLD-047`). | P03-T04 usa 54 campos no resumo, 48 no detalhamento e 41 linhas-base. | Não misturar camadas: 47 = contrato canônico; 54 = escopo físico auditado; 48 = mapeamentos detalhados; 41 = linhas-base CSV. Toda diferença deve indicar camada e origem. | `dicionario-fisico-mapping-P03-T04-v1.md`, `matriz-dados-finalidade-P03-T08-v1.md` | Alinhado após atualização |
| IDs e namespaces | A planilha usa IDs `KPI-*`; a matriz explicita a correspondência com IDs `PES-*`, `RH-*`, `FIN-*` etc. | P03-T05 e premissas misturam IDs de blueprint com IDs técnicos como se fossem equivalentes. | IDs de blueprint e IDs técnicos permanecem distintos; correspondências só valem quando registradas no crosswalk aprovado. | `catalogo-metricas-grafo-P03-T05-v1.md`, `registro-premissas-v0.md` | Alinhado após atualização |
| Retenção | A fonte exige política de retenção, finalidade e exclusão, mas não fixa os prazos globais propostos no trabalho. | P03-T08 e contratos usam 60 meses, 24–36 meses e 36 meses como regras fechadas. | Manter os prazos como proposta sujeita a LGPD/Finanças; não apresentá-los como regra aprovada até decisão formal. | `matriz-dados-finalidade-P03-T08-v1.md`, `contratos-fundacao-F1-E02-E20-E01-v1.md` | Marcado como não aprovado |
| Matching | A fonte exige identidade, explicabilidade, consentimento e revisão humana. | P03-T02 acrescenta limiares, FP ≤2%, FN ≤5% e dataset sintético. | Manter como desenho/critério proposto; não declarar threshold ou métrica validada pela fonte aprovada. | `especificacao-identidade-P03-T02-v1.md` | Marcado como não verificado |
| Valores financeiros | A fonte aprovada mantém ROI zero/ilustrativo até baseline e validação. | Premissas registram R$ 1.220.000, R$ 270.000, 28,42%, 9,34 meses e 5,33x como hipóteses de baixa confiança. | Preservar somente como hipótese rastreada; proibir uso como resultado validado ou evidência operacional. | `registro-premissas-v0.md`, `fluxos-linhagem-replay-dsar-P03-T09-v1.md` | Marcado como hipótese |
| Propagação E20 | Consentimento, finalidade, quarentena e auditoria são requisitos de governança; execução precisa de evidência. | P03-T09 afirma teste/PASS, enquanto o SPEC e CMP log dizem que não foram executados. | SPEC/CMP permanecem documentos de desenho; sem PASS até logs executados e aprovação LGPD/Gov Dados existirem. | `fluxos-linhagem-replay-dsar-P03-T09-v1.md`, `propagation-test-E20-v1.md`, `CMP-log-E20-v1.md`, `matriz-dados-finalidade-P03-T08-v1.md` | Corrigido para pendente |
| E01 temporal | O aceite exige vínculo temporal, tenant, FKs, replay e validação física. | E01 está `SPEC READY / NOT EXECUTED`; P03-T09 contém referências de validação inexistentes. | Manter A3 e F2 como pendentes; não converter fixture documental em execução física. | `E01-temporal-acceptance-v1.md`, `contratos-fundacao-F1-E02-E20-E01-v1.md`, `fluxos-linhagem-replay-dsar-P03-T09-v1.md` | Corrigido para pendente |
| Promoção | A fronteira aprovada exige nova versão em `01-work → 02-review → nova aprovação`. | Gate P03 está bloqueado até evidências do piloto e validações. | Manter o gate bloqueado; esta reconciliação não muda status de promoção. | `promocao-M0-gate-P03-v1.md`, `01-work/dados-tech-financas/README.md` | Alinhado |

## Regras de aplicação

1. Em caso de conflito, prevalece a fonte em `03-approved`; este crosswalk apenas registra como o trabalho deve convergir.
2. `Potencial`, `Influenciado`, `Validado` e `Realizado` são estados operacionais; status conceitual não pode ser usado como enum alternativo sem o mapeamento acima.
3. `Realizado` exige `contract_id`, `transaction_id`, ledger, reconciliação e aprovação Financeiro.
4. Um documento `SPEC`, fixture ou template não é evidência de execução.
5. Nenhum número ilustrativo entra no ROI realizado ou em demonstrativo financeiro.

## Referências aprovadas

- [[03-approved/nucleo-inteligencia/README|Núcleo de Inteligência — fronteira aprovada]]
- [[03-approved/nucleo-inteligencia/especificacao-conceitual-inteligencia-plataforma/Especificacao_Mestra_Inteligencia_HUB 3|Especificação Mestra de Inteligência HUB]]
- [[03-approved/nucleo-inteligencia/planilha-tecnica-completa-desenvolvimento/01-source/Planilha_Tecnica_Desenvolvimento_HUB|Planilha Técnica de Desenvolvimento HUB]]
- [[03-approved/nucleo-inteligencia/analises-processadas/Matriz_Convergencia_73_16_25_23_12_8|Matriz de Convergência 73→16 / 25→23]]
