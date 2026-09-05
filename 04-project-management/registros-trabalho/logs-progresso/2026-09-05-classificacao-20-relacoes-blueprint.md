---
title: "Classificação das 20 Relações Blueprint — Plano de Solução"
description: Classificação de esforço, prioridade e sequência de ações para resolver as relações conceituais E01–E20.
type: log
status: ativo
date: 2026-09-05
tags:
  - gestao-projeto
  - blueprint
  - dados-canonicos
  - relacionamentos
  - planejamento
related_notes:
  - "[[02-review/02-reconciliacao-blueprint/mapeamento-identidade-relacoes-sequenciamento-v1]]"
  - "[[03-approved/nucleo-inteligencia/analises-processadas/Matriz_Convergencia_73_16_25_23_12_8]]"
  - "[[04-project-management/registros-trabalho/logs-progresso/P03-entregaveis-dados-canonicos-spine-2026-08-29]]"
---

# Classificação das 20 Relações Blueprint — Plano de Solução

> [!abstract] Decisão de esforço
> **Não é necessário reconstruir o backbone.** O inventário aprovado continua sendo a fonte de
> verdade e já contém as estruturas físicas principais (`FLD-001`–`FLD-047`, `N01`–`N26`,
> `REL-01`–`REL-12`). O problema é fechar a diferença entre relações conceituais e contratos
> técnicos. A estratégia correta é: **8 relações rápidas**, **11 incrementais** e **1 difícil**.

## 1. Problema que precisa ser resolvido

O blueprint contém 20 relações conceituais dirigidas (`E01`–`E20`). O inventário aprovado contém
relações refinadas (`REL-01`–`REL-12`) com níveis de evidência, mas não possui uma contraparte
direta para todas as relações conceituais. A ausência de contraparte é chamada `UNVERIFIED` no
[[02-review/02-reconciliacao-blueprint/mapeamento-identidade-relacoes-sequenciamento-v1|mapeamento V2]].

`UNVERIFIED` significa **não pareável sem inferência**; não significa automaticamente que a relação
esteja errada. Cada item precisa ser classificado como relação coberta, hipótese conceitual adiada,
ou contrato técnico que precisa ser desenhado e aprovado.

## 2. Legenda de esforço e prioridade

| Classe | Significado | Esforço de referência |
|---|---|---:|
| **Rápido** | Qualificação documental, ponteiro e aceite de hipótese; sem novo schema ou integração | 0,5–3 dias focados |
| **Incremental** | Contrato de entidade/relação, campos, eventos, permissões ou integração; executável por fatias | 3–10 dias focados por relação; 1–3 semanas de calendário por grupo |
| **Difícil** | Relação causal ou validação que exige baseline, cohort, evidência e piloto | 10–20 dias de desenho + 4–8 semanas de piloto |

- **P0:** bloqueador de fundação — identidade, distinção de entidades e consentimento.
- **P1:** cadeia operacional do MVP — decisão, competência, alocação, receita e integração.
- **P2:** expansão/fase futura — jornada, campanha, benchmark, cohort e causalidade avançada.

As estimativas são para uma relação isolada. Relações do mesmo grupo compartilham descoberta,
revisão e testes; executar o grupo não é a soma literal de todos os dias individuais.

## 3. Classificação completa: E01–E20

| ID | Relação conceitual | Classe | Prioridade | Esforço estimado | Problema atual | Sequência objetiva |
|---|---|---|---|---:|---|---|
| **E01** | Pessoa possui vínculo com Empresa | Rápido | P0 | 1–2 dias | `REL-03` cobre alocação/capacidade, mas não o vínculo laboral específico | A1 qualificar como parcial → A2 reservar `relationship_id` e temporalidade → A3 aceitar ou devolver no gate |
| **E02** | Empresa é associada a Entidade | Incremental | P0 | 3–5 dias | Não há `REL-*` para empresa→entidade; `company_id` e `entity_id` precisam ser distinguidos | B1 decidir Empresa≠Cliente≠Entidade → B2 definir cardinalidade/chaves → B3 propor REL/campos → B4 aprovar |
| **E03** | Pessoa demonstra Competência | Rápido | P1 | 1–2 dias | `REL-07` trata skills/mobilidade, mas evidência pessoa→competência não está explícita | A1 declarar `REL-07` parcial → A2 marcar `skill_id`/`evidence_id` como M1 → A3 não anunciar cobertura técnica |
| **E04** | Oportunidade requer Competência | Rápido | P1 | 1–2 dias | `REL-07` aproxima contratação, mas não formaliza `opportunity_id`→`skill_id` | A1 manter como hipótese M1 → A2 registrar dependência de N06/N07 → A3 definir aceite futuro |
| **E05** | Pessoa recebe Recomendação | Rápido | P1 | 1–2 dias | `REL-09` cobre alerta/reação, mas não o destinatário pessoa→recomendação | A1 qualificar `REL-09` parcial → A2 usar `recommendation_id`/`decision_id` → A3 não tratar alerta como recomendação completa |
| **E06** | Recomendação propõe Jornada | Incremental | P2 | 4–7 dias | Não há `REL-*` para recommendation→journey; N11 é futuro M1 | B1 definir estados → B2 ligar recomendação a jornada por evento → B3 definir replay/auditoria → B4 implementar após N11 |
| **E07** | Pessoa participa de Programa/projeto | Rápido | P1 | 1–2 dias | `REL-03` aproxima programa/alocação, mas não participação formal | A1 manter parcial/hipótese → A2 registrar `program_id` (`FLD-039`) → A3 excluir aceite de cobertura plena |
| **E08** | Programa/projeto altera Outcome individual | Difícil | P2 | 10–20 dias + piloto 4–8 semanas | É uma alegação causal; falta baseline, cohort e atribuição | C1 definir baseline → C2 selecionar cohort/período → C3 coletar evidência → C4 testar holdout/confundidores → C5 validar impacto |
| **E09** | Outcome individual contribui para Indicador de negócio | Rápido | P1 | 1–3 dias | `REL-02` aproxima atingimento→entrega→receita, mas contribuição formal é parcial | A1 declarar proxy → A2 apontar `business_metric_id`/`financial_kpi_id` → A3 exigir estado de evidência |
| **E10** | Fornecedor/solução responde a Oportunidade | Incremental | P1 | 3–5 dias | `REL-08` cobre preço/custo/margem, mas falta `supplier_id`→`opportunity_id` | B1 definir oportunidade/oferta → B2 criar score/TCO → B3 ligar ao `match_id` → B4 validar com Compras/Financeiro |
| **E11** | Match gera Contrato | Incremental | P1 | 3–7 dias | `match_id` (`FLD-047`) e `contract_id` (`FLD-038`) existem, mas não o ciclo match→contrato | B1 definir estados → B2 registrar decisão → B3 ligar match ao contrato → B4 auditar consentimento/rejeição |
| **E12** | Contrato gera Transação | Incremental | P1 | 3–7 dias | `REL-02` aproxima receita, mas falta vínculo canônico contrato→transação/ledger | B1 definir período/moeda → B2 usar `contract_id` + `transaction_id` → B3 ligar ledger → B4 impedir dupla contagem |
| **E13** | Conteúdo/campanha influencia Oportunidade | Incremental | P2 | 5–10 dias | Não há relação aprovada campanha→oportunidade; falta atribuição de marketing | B1 reservar `content_id` + `opportunity_id` → B2 definir janela/influência → B3 integrar CRM → B4 validar sem duplicação |
| **E14** | Diagnóstico identifica Risco/controle | Rápido | P1 | 1–3 dias | `REL-06` aproxima engajamento/custo, mas diagnóstico→risco não é direto | A1 declarar hipótese parcial → A2 manter `risk_id` futuro M2 → A3 não converter correlação em controle |
| **E15** | Risco/controle afeta Indicador de negócio | Rápido | P1 | 1–3 dias | `REL-06` é associativo; não prova risco→indicador | A1 registrar dependência de `risk_id` + métrica → A2 exigir evidência → A3 deixar causalidade para depois |
| **E16** | Empresa é comparada em Benchmark | Incremental | P2 | 5–10 dias | Não há `REL-*`; `benchmark_id` é futuro M2 e exige comparabilidade/anonimização | B1 definir cohort → B2 definir métrica/período → B3 proteger reidentificação → B4 aprovar antes de publicar |
| **E17** | Interação atualiza Recomendação | Incremental | P1 | 3–5 dias | `REL-09` aproxima reação, mas não atualização versionada | B1 usar envelope `event_id/event_type/schema_version` → B2 ligar evento à recomendação → B3 registrar versão/estado → B4 testar replay/idempotência |
| **E18** | Versão de modelo produz Match | Incremental | P2 | 5–10 dias | `model_version_id` é futuro; `match_id` não tem linhagem modelo→match | B1 definir versão/artefato → B2 registrar score/justificativa → B3 ligar a `match_id` → B4 validar em M1/M3 |
| **E19** | Cohort contém Pessoa | Incremental | P2 | 4–7 dias | `REL-07` valida por cohort, mas pertencimento cohort→pessoa não é contrato | B1 definir `cohort_id`/inclusão → B2 registrar período/consentimento → B3 testar fairness → B4 liberar em M1 |
| **E20** | Consentimento autoriza finalidade para Pessoa | Incremental | P0 | 5–10 dias de contrato + 3–6 semanas | N24/`FLD-024–026` existem, mas relação ternária, revogação e propagação precisam ser executáveis | B1 definir titular/finalidade/base legal → B2 bloquear sensíveis sem consentimento → B3 implementar revogação/propagação → B4 auditar → B5 aprovar gate LGPD |

## 4. Sequência de ações para montar a solução

### Fase 0 — fechar o gate documental (1–3 dias)

1. Manter `03-approved` imutável.
2. Classificar E01–E20 como `coberta`, `parcial`, `hipótese` ou `futura`.
3. Aplicar A1–A3 às relações rápidas.
4. Não criar `REL-*` fictício para preencher lacunas.
5. Emitir o veredito do gate V2 com hipóteses aceitas explicitamente.

### Fase 1 — fundação segura (2–4 semanas de calendário)

1. Resolver Empresa/Cliente/Entidade (E02).
2. Fechar Consentimento como bloqueador (E20).
3. Fechar identidade e vínculo temporal (E01).
4. Validar campos, cardinalidade, tenant, período e auditoria.
5. Liberar relações dependentes apenas depois desses contratos.

### Fase 2 — cadeia operacional (2–5 semanas)

1. Formalizar competência, oportunidade e recomendação (E03–E05).
2. Formalizar fornecedor→oportunidade (E10).
3. Implementar match→contrato e contrato→transação (E11–E12).
4. Implementar interação→recomendação com envelope versionado (E17).
5. Validar eventos reproduzíveis, idempotência e ledger.

### Fase 3 — expansão controlada (4–8 semanas)

1. Implementar jornada, campanhas, benchmarks e cohorts (E06, E13, E16, E19).
2. Fechar versão de modelo→match (E18) quando o matching existir.
3. Não transformar relações em compromisso de MVP sem contrato aprovado.

### Fase 4 — causalidade e valor (4–8+ semanas de piloto)

1. Definir baseline e cohort.
2. Registrar participação e exposição ao programa.
3. Medir outcome em janela explícita.
4. Aplicar holdout ou método equivalente.
5. Validar atribuição, deduplicação e ledger.
6. Só então afirmar que programa/projeto alterou outcome individual (E08).

## 5. Critérios de conclusão

- As 20 relações têm status explícito.
- Cada relação parcial aponta para seu `REL-*`, entidade ou campo aprovado.
- Cada hipótese/futura informa fase e não é apresentada como contrato.
- E02 e E20 têm contratos aprovados antes do uso operacional.
- E11, E12 e E17 têm eventos/relações reproduzíveis.
- E08 tem evidência causal, não apenas correlação.
- Nenhuma métrica financeira é promovida sem ledger, atribuição e deduplicação.
- A V2 pode ser aprovada sem afirmar que a ontologia completa já está implementada.

## 6. Arquivos conectados

- [[02-review/02-reconciliacao-blueprint/mapeamento-identidade-relacoes-sequenciamento-v1|Mapa V2 E→REL, canonical→FLD e M0×MVP]].
- [[03-approved/nucleo-inteligencia/analises-processadas/Matriz_Convergencia_73_16_25_23_12_8|Matriz de convergência aprovada]].
- [[03-approved/nucleo-inteligencia/analises-processadas/Relatorio_CrossReview_Blueprint_vs_Especificacao_Planilha_HUB|Cross-review aprovado]].
- [[03-approved/nucleo-inteligencia/analises-processadas/Relatorio_Consistencia_Especificacao_vs_Planilha_HUB|Relatório de consistência aprovado]].
- [[04-project-management/registros-trabalho/logs-progresso/P03-entregaveis-dados-canonicos-spine-2026-08-29|Log P03 — dados canônicos]].
- [[04-project-management/registros-trabalho/logs-progresso/P01-entregaveis-arquitetura-oferta-negocio-2026-08-29|Log P01 — oferta e negócio]].
- [[04-project-management/registros-trabalho/logs-progresso/P02-entregaveis-produto-operacao-2026-08-29|Log P02 — produto e operação]].
- [[04-project-management/registros-trabalho/logs-progresso/Sat 29 Aug 2026|Log de revisão de tasks]].
