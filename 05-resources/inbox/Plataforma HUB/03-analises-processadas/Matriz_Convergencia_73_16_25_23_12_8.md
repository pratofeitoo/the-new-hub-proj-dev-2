---
title: Matriz de Convergência — 73→16 + 25→23 + 12→8 + M0-M4→F0-MVP4
tipo: matriz_convergencia
versao: 1.0
data: 2026-09-02
fonte: Relatorio_CrossReview_Blueprint_vs_Especificacao_Planilha_HUB.md Anexos A e C
tags: [hub, convergencia, matriz, m0, blueprint]
---

# Matriz de Convergência

Matriz auditável entre [[01-work/dados-inteligencia/modelo-indicadores/abas-origem/04_Indicadores_Master/04_Indicadores_Master_analise|04 Indicadores Master]], [[01-work/dados-inteligencia/modelo-indicadores/abas-origem/02_Nos_de_Dados/02_Nos_de_Dados_analise|02 Nós de Dados]], BP-002, BP-008 e `06_KPIS`.

## 1. 73→16 KPIs

`Futuro` é sequenciamento (M1/M2), não perda de requisito. A coluna Planilha registra o KPI- da implementação tática quando existente.

|#|Blueprint 04_Indicadores_Master|M|Planilha 06_KPIS|Status|
|-:|---|---|---|---|
|1|**PES-01** Completude do perfil|M0|—|Futuro|
|2|**PES-02** Índice de prontidão|M0|—|Futuro (PERF-01 proxy)|
|3|PES-03 Gap crítico de capacidade|M1|—|Futuro|
|4|**PES-04** Aceitação de recomendação|M0|KPI-HUB-02 Ação sobre alertas|Coberto|
|5|**PES-05** Conclusão de jornada|M0|—|Parcial|
|6|PES-06 Evolução de capacidade|M1|—|Futuro|
|7|PES-07 Tempo até oportunidade|M1|—|Futuro|
|8|**PES-08** Mobilidade/conexão efetiva|M1|KPI-PEO-03 Mobilidade|Coberto|
|9|PES-09 NPS da jornada|M1|—|Futuro|
|10|PES-10 Valor gerado por pessoa|M2|—|Futuro (M2)|
|11|**RH-01** Cobertura de capacidades|M0|—|Parcial|
|12|RH-02 Risco de lacuna crítica|M1|—|Futuro|
|13|RH-03 Time-to-fill|M1|—|Futuro|
|14|RH-04 Custo por contratação|M1|KPI-PEO-02 Custo de turnover|Parcial|
|15|RH-05 Qualidade da contratação|M2|—|Futuro (M2)|
|16|RH-06 Time-to-productivity|M2|—|Futuro|
|17|**RH-07** Turnover evitável|M2|KPI-PEO-01 + PEO-02|Coberto (M0 proxy)|
|18|RH-08 Absenteísmo evitado|M2|—|Futuro|
|19|RH-09 Ganho de produtividade|M2|KPI-ALO-01 Alocação|Parcial|
|20|RH-10 ROI de desenvolvimento|M2|—|Futuro (M2)|
|21|**COM-01** Cobertura de categorias|M0|—|Parcial|
|22|COM-02 Tempo de homologação|M1|—|Futuro|
|23|**COM-03** Taxa de match elegível|M0|KPI-SUP-02 Competitividade|Coberto|
|24|COM-04 Ciclo de contratação|M1|—|Futuro|
|25|COM-05 Conversão match→contrato|M1|—|Futuro|
|26|**COM-06** Saving comprovado|M2|KPI-SUP-01 Savings realizado|Coberto|
|27|COM-07 Desempenho do fornecedor|M2|—|Futuro|
|28|COM-08 Spend influenciado pela HUB|M1|—|Futuro; não somar FIN-08|
|29|COM-09 Risco de fornecimento evitado|M2|—|Futuro (M2)|
|30|**ENT-01** Cobertura de associados|M0|—|Futuro|
|31|**ENT-02** Ativação de associados|M0|KPI-HUB-01 Adoção ativa|Parcial|
|32|ENT-03 Densidade da rede|M1|—|Futuro|
|33|ENT-04 Valor por associado|M2|—|Futuro|
|34|ENT-05 Renovação de associados|M2|—|Futuro|
|35|ENT-06 Receita de novos serviços|M1|—|Futuro|
|36|ENT-07 Adoção de benchmark|M2|—|Futuro|
|37|ENT-08 Impacto econômico do ecossistema|M2|—|Futuro (M2)|
|38|**MKT-01** Alcance qualificado|M0|—|Futuro|
|39|**MKT-02** Custo por lead qualificado|M0|—|Futuro|
|40|**MKT-03** Conversão lead→oportunidade|M0|—|Futuro|
|41|MKT-04 Pipeline influenciado|M1|—|Futuro|
|42|MKT-05 Margem incremental de campanha|M2|—|Futuro|
|43|MKT-06 ROAS de margem|M2|—|Futuro|
|44|MKT-07 CAC por produto|M1|—|Futuro|
|45|MKT-08 Conteúdo→ação|M1|—|Futuro|
|46|**PRO-01** Ativação|M0|KPI-HUB-01 Adoção ativa|Coberto|
|47|**PRO-02** WAU/MAU|M0|—|Parcial|
|48|**PRO-03** Adoção por módulo|M0|KPI-HUB-01|Parcial|
|49|PRO-04 Time-to-value|M1|KPI-HUB-03 Tempo até decisão|Parcial|
|50|PRO-05 Retenção de cohort|M1|—|Futuro|
|51|**PRO-06** Churn de clientes|M1|KPI-CLI-01 Risco de churn|Coberto (antecipado)|
|52|PRO-07 Precisão do match|M1|—|Futuro|
|53|PRO-08 Uplift da recomendação|M2|—|Futuro (M2)|
|54|**PRO-09** ARR|M0|—|Parcial|
|55|PRO-10 LTV/CAC|M2|—|Futuro|
|56|**FIN-01** Benefício bruto atribuído|M2|—|Futuro (M2)|
|57|FIN-02 Benefício líquido|M2|—|Futuro (M2)|
|58|**FIN-03** ROI do cliente|M2|KPI-HUB-04 ROI plataforma|Coberto (M0 proxy)|
|59|FIN-04 Payback|M2|—|Futuro|
|60|FIN-05 Margem incremental|M2|KPI-FIN-01 Margem bruta|Coberto|
|61|FIN-06 Custo evitado|M2|KPI-ALO-02 Receita potencial perdida|Parcial|
|62|FIN-07 Risco evitado|M2|—|Futuro (M2)|
|63|**FIN-08** Receita HUB por vertente|M0|KPI-FIN-02 Receita/FTE|Parcial|
|64|FIN-09 Margem de contribuição HUB|M1|—|Futuro|
|65|FIN-10 Receita recorrente líquida (NRR)|M1|—|Futuro|
|66|**DAT-01** Completude de dados críticos|M0|—|Parcial|
|67|**DAT-02** Atualidade dos dados|M0|—|Parcial|
|68|**DAT-03** Taxa de identidade resolvida|M0|—|Parcial|
|69|DAT-04 Cobertura de score|M1|—|Futuro|
|70|DAT-05 Acurácia/calibração|M1|—|Futuro|
|71|DAT-06 Fairness|M1|—|Futuro|
|72|DAT-07 Drift|M1|—|Futuro|
|73|DAT-08 Confiança do impacto|M2|—|Futuro (M2; haircut)|

### KPIs sem equivalente direto (promovidos a M0)

|KPI|Blueprint próximo|Fórmula/decisão|
|---|---|---|
|**KPI-PERF-01** Atingimento|PES-02/RH-09|`Σ progresso×peso / Σ peso`; proxy operacional Qulture/Workday|
|**KPI-PERF-02** Qualidade da meta|DAT-01/GOV|`pontos / pontos possíveis`; qualidade de meta|
|**KPI-ALO-01** Alocação faturável|RH-09|`billable / available`; proxy de produtividade|
|**KPI-ALO-02** Receita potencial perdida|FIN-06|`horas ociosas × taxa`; proxy de capacidade|

## 2. 25→23 nós (C.2/C.3/C.4)

|Nó|Chave canônica|FLD/representação|Status|
|---|---|---|---|
|**N01** Pessoa|person_id|FLD-001/002/003/004 + FLD-027→035/037|Parcial; fechar núcleo F0|
|**N02** Empresa|company_id|FLD-019 client_id|Parcial; empresa ≠ cliente|
|N03 Entidade|entity_id|—|Futuro M1|
|**N04** Fornecedor/solução|supplier_id|FLD-020|Coberto MVP|
|N05 Vínculo|relationship_id|FLD-003 manager_id|Parcial temporal|
|N06 Oportunidade|opportunity_id|—|Futuro M1|
|N07 Competência|skill_id|—|Futuro M1|
|N08 Evidência|evidence_id|—|Futuro M1|
|**N09** Diagnóstico|assessment_id|FLD-008→013|Coberto MVP|
|**N10** Interação|event_id|SRC-12 + FLD-042→045|Parcial; envelope|
|N11 Jornada|journey_id|check-ins/planos|Futuro M1|
|N12 Recomendação|recommendation_id|FLD-021 + FLD-046|Parcial; reservar ID|
|N13 Match|match_id|FLD-047 reservado|Futuro M1|
|N14 Participação|participation_id|—|Futuro M1|
|N15 Programa/projeto|program_id|FLD-039|Parcial; canônico F0|
|N16 Contrato|contract_id|FLD-016/017/019 + FLD-038|Parcial; canônico F0|
|N17 Transação|transaction_id|FLD-016→018/023|Parcial; ledger|
|**N18** Indicador de negócio|business_metric_id|FLD-013 + 06_KPIS|Coberto MVP|
|N19 Outcome individual|outcome_id|FLD-008/009/012 proxy|Parcial; M1|
|N20 Cohort|cohort_id|—|Futuro M1|
|N21 Benchmark|benchmark_id|—|Futuro M2|
|N22 Risco/controle|risk_id|—|Futuro M2|
|N23 Conteúdo/campanha|content_id|—|Futuro M1/M2|
|**N24** Consentimento|consent_id|FLD-005→007 + FLD-024→026/040/041|Parcial crítico; bloqueador LGPD|
|N25 Versão de modelo|model_version_id|—|Futuro M1/M3|
|**N26** Decisão (adição)|decision_id|FLD-021→023|Novo canônico|

### C.3 — FLD sem nó direto

`FLD-002 workday_id` é alias `(source_system=Workday, source_id)` anexo ao `canonical_id`; `FLD-014/015 available/billable_hours` são proxy M0 dos KPI-ALO; `FLD-021/022/023` operacionalizam ALT→Decisão→Valor e promovem N26.

### C.4 — gaps antes de F0/MVP1

|Prioridade|Campos|Nó/bloqueio|
|---|---|---|
|P0 F0|FLD-024 consent_id, FLD-025 purpose, FLD-026 legal_basis|N24, gate LGPD|
|P0 F0|FLD-027→033 nome, contato, localização, idioma, disponibilidade|N01, núcleo comum|
|P0 F0|FLD-034→041 nível, área, centro_custo, admissão, contract_id, program_id, tenant_id, valid_from/to|N01/N02/N15/N16|
|P1 MVP1|FLD-042→045 event_id, event_type, schema_version, occurred_at|N10, envelope SRC-12|
|P1 MVP1|FLD-046 recommendation_id, FLD-047 match_id|N12/N13, BL-018/019|

## 3. 12→8 módulos

Fontes: BP-002 e [[01-work/visao-lancamento/HUB_Blueprint_Lancamento_e_Evolucao|BP-008]].

|Especificação (12 entregas)|BP-002 (6 módulos + núcleo)|Planilha 8 MOD|Decisão|
|---|---|---|---|
|Início Executivo|HUB Core|MOD-01 HUB Core|Coberto|
|Estratégia e Resultados|HUB Intelligence|MOD-08 HUB Impact (parte)|Mapeado|
|Performance|HUB Intelligence|MOD-02 Performance|Coberto|
|Pessoas e Identidade|HUB Core + Journey|MOD-03 Pessoas|Coberto|
|Compras e Fornecedores|HUB Solutions|MOD-04 Suprimentos|Coberto|
|Matching e Oportunidades|HUB Connections|MOD-05 Matching|Coberto parcial|
|Academia|HUB Academy|MOD-06 Acadêmico|Coberto|
|Comunidades e Eventos|Connections + Recognition|MOD-07 Comunidades|Parcial; falta Selo|
|Governança|Core + Recognition|MOD-08 HUB Impact|Parcial|
|Operações e Projetos|HUB Journey (diluído)|—|**Decidir MOD-09 Operações ou subdomínio Performance**|
|Dados e Inteligência|HUB Intelligence|MOD-08 HUB Impact|Mapeado|
|Financeiro e Valor|Core/Impact|MOD-08 HUB Impact|Ledger único|

## 4. M0-M4 → F0-MVP4

|Blueprint|Planilha|Critério|
|---|---|---|
|**M0 fundação**|**F0 4–6 semanas + MVP1 8–12 semanas**|>80% FLD M0, >60% KPIs conectados, envelope + N24 passando|
|M1 segunda onda|MVP2 5–8 meses|matching/jornadas com IDs e eventos confiáveis|
|M2 maturidade|MVP3 9–14 meses|atribuição financeira, baseline, deduplicação, Controladoria|
|M3–M4 escala|MVP4 12–18 meses|previsão, ecossistema, fairness/drift e governança|

## 5. Rastreabilidade

[[01-work/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1|Catálogo P03-T05]] · [[01-work/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1|Taxonomia de estados de valor]] · gaps `DAT-006`, `DAT-010`, `PRD-001`. Os 57 indicadores restantes permanecem M1/M2; a matriz é insumo do gate M0.
