# Síntese cross-sheet — entidades e chaves

**Escopo.** Síntese de `02_Nos_de_Dados`, `03_Conexoes`, `08_Dicionario_Dados`, `09_Eventos_Produto` e `10_Integracoes`. Esta nota consolida as interfaces de identidade e relacionamento sem alterar workbook, CSVs ou análises individuais.

## 1. Veredito executivo

O modelo é **forte como inventário conceitual**, mas **não está pronto para implementação confiável** porque entidades, chaves, cardinalidades e regras temporais ainda não formam um contrato canônico executável.

**Classificação geral: AMARELO/VERMELHO.**

- **Verde conceitual:** cobertura de Pessoa, Empresa, Entidade, Fornecedor, Oportunidade, Competência, Jornada, Evento, Outcome, Risco e Qualidade.
- **Amarelo de desenho:** chaves primárias, fontes, granularidades e relações estão descritas, mas vários mapeamentos são apenas nominais.
- **Vermelho operacional:** resolução de identidade, integridade referencial, temporalidade e reconciliação entre sistemas não estão demonstradas.

## 2. Nomes canônicos

Há inconsistências que precisam ser resolvidas antes de criar tabelas ou APIs:

- `Interação` versus `Evento`;
- `Conteúdo / campanha` versus `Campanha`;
- `Versão de modelo` versus `Modelo`;
- `Fornecedor / solução` versus `Fornecedor`;
- `Programa / projeto` versus `Jornada`.

Cada conceito deve ter um nome canônico, alias controlado, definição, owner e regra de migração para evitar que a mesma entidade receba múltiplos IDs.

## 3. Chaves e crosswalk mínimo

| Domínio | Chave interna | Chaves externas necessárias | Lacuna principal |
|---|---|---|---|
| Pessoa | `person_id` | HRIS, CRM, ATS, LMS | serviço/tabela de resolução e regra de merge |
| Empresa | `company_id` | CRM, ERP, HRIS | autoridade e regra para fusões |
| Oportunidade | `opportunity_id` | ATS, CRM, SRM | sistema mestre e ciclo de vida |
| Competência | `skill_id` | LMS, diagnóstico, oportunidade | taxonomia e versão do crosswalk |
| Jornada | `journey_id` | plataforma, LMS, eventos | versão e estado temporal |
| Fornecedor | `supplier_id` | SRM, marketplace, ERP | business key e homologação |
| Evento | `event_id` | origem + idempotency key | schema, ocorrência e replay |
| Modelo | `model_version_id` | motor de inteligência | versão, input hash e explicação |

As integrações referenciam `person_external_id`, `supplier_id`, `category_id`, `journey_id`, `transaction_id`, `risk_id`, `campaign_id`, `model_version`, `purpose`, `period` e `cohort` sem um mapeamento interno completo no dicionário.

## 4. Relações, cardinalidade e temporalidade

`03_Conexoes` define origem, destino, direção, peso, janela e evidência, mas não define:

- `source_id` e `target_id`;
- cardinalidade permitida;
- chave composta temporal;
- data de início e fim da vigência;
- comportamento para eventos atrasados ou corrigidos;
- timezone e ordenação de eventos;
- regra de deduplicação e reconciliação.

Exemplos de regras que precisam ser formalizadas:

- Pessoa → Empresa: múltiplos vínculos históricos, sem sobreposição incompatível.
- Pessoa → Competência: nível, evidência, validade e versão da taxonomia.
- Oportunidade → Competência: requisitos ponderados e versão do requisito.
- Pessoa → Jornada: exposição, dose, participação e período.
- Evento → Outcome: janela de atribuição e evidência de causalidade.

## 5. Dependências críticas

1. Glossário e nomenclatura canônicos.
2. Tabela de identidade e crosswalk externo-interno.
3. Modelo temporal comum com `occurred_at`, `ingested_at`, `effective_at` e `valid_to` quando aplicável.
4. Contrato de eventos com versão, idempotência e replay.
5. Taxonomias versionadas de competências, segmentos, categorias e papéis.
6. Regras de unicidade, merge, quarentena, reconciliação e integridade referencial.
7. Proveniência da evidência: registro-fonte, timestamp, versão, ator e processo.
8. Classificação campo a campo de sensibilidade, finalidade, base legal, retenção e acesso.

## 6. Riscos

### Alta severidade

- Duplicidade de pessoas, empresas, fornecedores e oportunidades entre sistemas.
- Relações sem chaves que não podem ser auditadas ou reprocessadas.
- Atribuição de outcomes ao objeto errado por ausência de janela temporal.
- Perda de histórico por reutilização ou alteração de IDs.

### Média severidade

- Taxonomias incompatíveis entre diagnóstico, LMS, oportunidade e matching.
- Eventos obrigatórios não representados como propriedades estruturadas no dicionário.
- Sensibilidade definida por nó, mas não por campo e finalidade.

## 7. Perguntas abertas

1. Qual sistema é mestre para cada entidade?
2. Como conflitos entre IDs externos serão resolvidos?
3. Qual cardinalidade é permitida em cada relação?
4. Quais campos compõem cada chave temporal?
5. Qual timestamp prevalece: ocorrência, ingestão, atualização ou reconhecimento financeiro?
6. `Interação`, `Evento` e `Conteúdo / campanha` são entidades distintas?
7. Qual é o schema oficial dos eventos e sua política de versionamento?
8. Como revogação, expurgo e correção afetam relações históricas?

## 8. Recomendações

### P0

- Aprovar o glossário canônico.
- Criar o crosswalk de identidade externo-interno.
- Definir chaves, cardinalidade e temporalidade antes de construir integrações.

### P1

- Versionar taxonomias e contratos de eventos.
- Adicionar proveniência e trilha de auditoria às relações.
- Criar testes de unicidade, completude, integridade referencial e deduplicação.

### P2

- Expandir para benchmarks, modelos preditivos e múltiplos ecossistemas apenas depois da estabilização da identidade.

## 9. Classificação de incorporação

Preservar como arquitetura de referência. Incorporar ao MVP somente após fechar nomes canônicos, crosswalks, chaves, cardinalidades e regras temporais.

## 10. Mapeamento PK/FK e cardinalidade por relação

| Relação | PK/FK mínima | Cardinalidade esperada | Situação |
|---|---|---|---|
| Pessoa–Empresa (E01) | `relationship_id`; `person_id` → `dim_person`; `company_id` → `dim_company` | N:N temporal, sem sobreposição incompatível | `dim_person.company_id` só cobre o vínculo vigente e perde histórico. |
| Empresa–Entidade (E02) | bridge `company_entity_id`; `company_id` + `entity_id` | N:N contratual por vigência | `dim_company.entity_id` suporta apenas uma associação. |
| Pessoa–Competência (E03) | `person_id` + `skill_id` + avaliação/validade; `evidence_id` | N:N com score | `fact_person_skill` não tem `evidence_id` nem data de validade. |
| Oportunidade–Competência (E04) | `opportunity_requirement_id`; `opportunity_id` + `skill_id` | 1:N requisitos | peso/obrigatoriedade não estão no dicionário. |
| Pessoa–Recomendação (E05/E17) | `recommendation_id`; `person_id`; `model_version_id` | pessoa 0:N | recomendação não tem tabela/PK; E17 alterna Interação/Evento. |
| Recomendação–Jornada (E06) | bridge com ambos IDs, rank e expiração | N:N ranqueada | `journey_id` não possui dimensão física. |
| Pessoa–Programa (E07) | `participation_id`; `person_id` + `program_id` | N:N temporal | `fact_participation` não declara as FKs. |
| Programa–Outcome (E08) | bridge `program_id` + `outcome_id` + janela/método | N:N | outcome/programa não têm tabelas no dicionário. |
| Outcome–Métrica (E09) | bridge `outcome_id` + `metric_id` + período/coorte | N:N | `metric_id` é PK parcial; contribuição não prova causalidade. |
| Match–Contrato (E11) | `contract_id` + bridge de `match_id`/touchpoint | contrato 0:N touchpoints | `origin_touchpoint` único não cobre multi-touch. |
| Contrato–Transação (E12) | `transaction_id`; `contract_id` FK + competência/tipo | 1:N | transação não tem PK nem `contract_id` descritos no dicionário. |
| Modelo–Match (E18) | `model_version_id` → dimensão; `match_id` → fato | 1:N | falta ID formal de versão e feature set. |
| Cohort–Pessoa (E19) | `cohort_membership_id`; `cohort_id` + `person_id` + janela | N:N temporal | `dim_cohort` não explicita `cohort_id`. |
| Consentimento–Pessoa (E20) | `consent_id`; `person_id` + `purpose` + versão | pessoa 1:N | `consent_status` não preserva histórico por finalidade. |

As cardinalidades são hipóteses derivadas da semântica de `03_Conexoes`; devem virar constraints e testes após confirmação com os sistemas fonte.

## 11. Entidades órfãs e desalinhamentos

### Órfãs físicas (presentes no mapa/eventos/integrações, ausentes de 08)

- `Fornecedor / solução` (`supplier_id`), `Vínculo` (`relationship_id`) e `Evidência de competência` (`evidence_id`);
- `Jornada` (`journey_id`), `Programa / projeto` (`program_id`) e `Recomendação` (`recommendation_id`);
- `Outcome individual` (`outcome_id`), `Benchmark` (`benchmark_id`) e `Risco / controle` (`risk_id`);
- `Conteúdo / campanha` (`content_id`/`campaign_id`) e `Consentimento` (`consent_id`);
- `Transação` (`transaction_id`) e `Versão de modelo` (`model_version_id`) estão apenas parcialmente representados.

### Referências com risco de órfão

- eventos com `object_id` sem tipo: o alvo pode não existir ou pertencer a domínio errado;
- `contract_signed` sem `opportunity_id`, `match_id` ou touchpoint rastreável;
- `transaction_recognized` sem contrato ou sem reconciliação de competência;
- `business_metric_received` sem métrica, período, coorte e definição versionada;
- participações sem pessoa/programa, outcomes sem exposição e recomendações sem modelo;
- IDs externos sem alias HUB vigente ou com mais de um pai ativo;
- consentimento revogado que ainda gera tracking, scoring, export ou feature.

## 12. Chaves internas, externas e temporais

IDs canônicos (`person_id`, `company_id`, `entity_id`, `supplier_id`, `opportunity_id`, `contract_id` etc.) devem ser estáveis e internos ao HUB. As integrações usam também `person_external_id`, IDs de CRM/ATS/LMS e chaves compostas. Criar `identity_alias` com `hub_id`, `external_id`, `source_system`, método de match, confiança, vigência e `is_current`; não fazer join direto entre IDs de origem.

O warehouse menciona `surrogate keys + business keys`; formalizar ambas. Nas integrações, `+` é composição candidata, enquanto `/` é ambíguo (alternativa, OR ou fallback) e não pode permanecer como sintaxe de contrato. Exemplos críticos: HRIS `person_external_id + company_id`; ERP cliente `company_id + metric_id + period`; BI `metric_id + period + cohort`; Motor `model_version + object_id`; Plataforma `event_id / person_id`; CMP `person_id + purpose`.

Campos temporais mínimos:

- vínculos, associações e consentimento: `valid_from`, `valid_to`, `observed_at`, `status`, `version`;
- skills/diagnósticos: `assessed_at`, validade, `skill_version`, `instrument_version`, `evidence_id`;
- recomendações/matches: `generated_at`, `expires_at`, `model_version_id`, janela;
- participação/outcome: exposição, conclusão, pré/pós, período de mensuração e `cohort_id`;
- contratos/transações: assinatura, reconhecimento, competência, touchpoint, janela de atribuição;
- todo evento: `event_id`, `occurred_at` UTC, `received_at`, `event_version`, `source_system`, `correlation_id`, `object_type/object_id`.

## 13. Severidade consolidada

- **Crítica:** consentimento modelado só como status; revogação e finalidade não são historicamente auditáveis. Bloquear processamento pessoal sem registro válido.
- **Alta:** duplicidade/perda de identidade entre fontes; FKs ausentes; PK parcial de métricas, matches, participações e financeiro; eventos sem idempotência; transações sem chave/reconciliação; entidades órfãs usadas por integrações.
- **Média:** aliases (`Interação`/`Evento`, `Modelo`/`Versão de modelo`, conteúdo/campanha), taxonomias sem catálogo e temporalidade apenas textual.

## 14. Perguntas abertas e recomendações finais

1. Qual sistema é mestre de pessoa, empresa, oportunidade, contrato, fornecedor, métrica, risco e consentimento?
2. Haverá MDM/tabela de aliases? Como resolver merges, conflitos e reutilização de IDs?
3. `Interação` é o mesmo domínio de `fact_event`? `object_id` terá `object_type` obrigatório?
4. Quais entidades órfãs entram no MVP e quais serão explicitamente adiadas?
5. Qual PK efetiva de métricas, matches, participações e valor financeiro, incluindo período/coorte/versão?
6. Um contrato pode ter vários matches/touchpoints? Como evitar dupla contagem?
7. Como revogação de consentimento interrompe fila, cache, features, exports e derivados?
8. Quais limites de atraso, replay, correção, timezone e validade serão usados em cada família?

**P0:** aprovar glossário/aliases; criar crosswalk externo–interno; modelar consentimento como titular–finalidade–versão–vigência; publicar PK/FK/cardinalidades; padronizar envelope de eventos e idempotência.

**P1:** criar tabelas/bridges para as entidades órfãs ou retirá-las do escopo; formalizar chaves temporais; substituir `object_id` sem tipo; definir atribuição multi-touch e replay/reversão; converter QA em testes de órfãos, unicidade, validade e reconciliação.

**P2:** versionar schemas, taxonomias, instrumentos, modelos, jornadas e fórmulas; publicar linhagem e classificação PII por campo; executar carga piloto por família de integração e liberar indicadores apenas com zero órfãos críticos e exceções aprovadas.
