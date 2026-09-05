---
status: em-revisao
---

# Análise — Eventos de Produto

**Fonte analisada:** `09_Eventos_Produto.csv`
**Escopo:** somente o arquivo CSV desta aba; 27 eventos, da linha 6 à linha 32.

## Estrutura

- O arquivo começa com um título e uma frase de propósito nas linhas 1 e 3, seguidos por linhas vazias (` ,`).
- O cabeçalho operacional está na linha 5, com 11 colunas: `Evento`, `Quando dispara`, `Objeto`, `Propriedades obrigatórias`, `Pessoa/empresa`, `Etapa do funil`, `Indicadores`, `Valor esperado`, `PII`, `Retenção` e `Regra de QA`.
- Os eventos cobrem aquisição, ativação, engajamento, conversão, resultado, impacto, inteligência e governança.
- Há uma mistura de entidades de pessoa, empresa e relacionamento (`person_id`, `company_id`, `supplier_id`, `match_id`, `contract_id`), permitindo medir a jornada, mas exigindo um contrato de identidade e de cardinalidade.

## Achados

### 1. Naming e taxonomia

- Os nomes são consistentes em `snake_case`, orientados a fato passado (`account_created`, `assessment_completed`, `contract_signed`). Isso favorece busca, documentação e consumo analítico.
- Há verbos de visualização/ação (`*_viewed`, `*_accepted`, `*_action_taken`) misturados a estados de negócio (`contract_signed`, `transaction_recognized`, `outcome_confirmed`). A diferença semântica deve ser explícita: evento comportamental, evento de estado ou evento financeiro.
- `content_action` agrega “clique, cadastro ou pedido” em um único evento. Isso reduz granularidade e torna o indicador dependente de uma propriedade `action` corretamente preenchida; idealmente, definir enum fechado ou separar eventos quando as métricas tiverem regras distintas.
- `model_prediction` é um evento técnico de produção de score, enquanto `recommendation_viewed` e `match_generated` são eventos de produto. A fronteira entre telemetria de modelo e evento de negócio precisa ser documentada para evitar dupla contagem.

### 2. Clareza dos triggers

- Os triggers são curtos e compreensíveis, porém alguns não são operacionalmente testáveis: “cadastro concluído”, “campos mínimos válidos”, “critério de conclusão”, “motor conclui ranking” e “KPI importado”. Faltam critérios objetivos, serviço emissor e ponto de confirmação.
- `assessment_started` dispara na “primeira resposta”, mas não define se rascunhos, respostas inválidas ou reabertura contam. `assessment_completed` exige “última resposta validada”, sem indicar versão do schema de respostas.
- `connection_completed` usa “duas partes conectadas”, mas não define a fonte da verdade (aceite bilateral, criação de canal ou primeiro contato).
- `transaction_recognized` e `business_metric_received` dependem de sistemas externos e precisam de janela de ingestão, timezone e comportamento para reprocessamento.

### 3. Propriedades obrigatórias e versionamento

- A lista de propriedades é um bom mínimo inicial e inclui versões importantes em `consent_version`, `instrument_version`, `model_version`, `version` e versão da fórmula em `financial_value_approved`.
- O schema não define tipo, formato, enum, unidade, moeda, timezone, limite, nulabilidade ou identificador de correlação. “score”, “value”, “amount”, “duration” e “rank” são ambíguos sem unidade e escala.
- Versionamento é desigual: `journey` tem `version`, mas `journey_step` depende de `journey_id`/`step_id` sem `journey_version`; `contract_signed` tem `origin`, porém não versão de integração; `content` usa `campaign` e `UTM/campaign_id` na QA sem um campo canônico claramente obrigatório.
- Recomenda-se envelope comum (`event_id`, `event_name`, `event_version`, `occurred_at`, `received_at`, `source`, `environment`, `actor_id`, `correlation_id`) e versionamento semântico do contrato de cada evento.

### 4. Idempotência e ordenação

- Apenas `account_created` declara explicitamente “idempotente”. Para ingestão confiável, todos os eventos devem ser deduplicáveis por `event_id` ou chave natural documentada.
- Eventos de jornada, avaliação, contrato e transação são especialmente suscetíveis a retries e reprocessamentos. Sem `event_id`, `source_event_id`, `sequence` e regra de deduplicação, os indicadores de conclusão, GMV, receita e tempo podem inflar.
- `journey_step_completed` já menciona ordem e timestamp na QA, mas falta uma política para eventos atrasados, fora de ordem, duplicados e correções.
- Eventos financeiros precisam de chave de negócio (`contract_id`/`transaction_id` + competência + tipo), versão do registro e mecanismo de reversão/ajuste, não apenas append cego.

### 5. PII, retenção e governança

- 19 eventos marcam `Sim` ou `Possível` em PII (incluindo avaliações, recomendações, outcomes e consentimento). A classificação é qualitativa e não informa quais campos são pessoais, sensíveis, derivados ou anonimizáveis.
- `assessment_*`, `outcome_confirmed`, `consent_updated` e `model_prediction` podem carregar dados sensíveis ou inferências. O CSV não explicita base legal, finalidade, controle de acesso, criptografia, anonimização ou atendimento a direitos do titular.
- Retenção varia de 24 a 120 meses; `consent_updated` é “permanente enquanto necessário”. A justificativa por evento, início do prazo, legal hold, expurgo e agregação pós-expurgo não estão definidos.
- `data_quality_incident` pode conter amostras de registros e, portanto, PII indireta. A QA deve exigir redaction e acesso restrito.

### 6. QA e qualidade do contrato

- As regras de QA são úteis como testes de presença/validade, por exemplo `score dentro da faixa`, “moeda e valor”, “conciliado com CRM/ERP” e “ticket obrigatório”.
- Elas ainda não constituem uma especificação executável: não há valores válidos, tolerâncias, SLA, responsável, severidade, comportamento de rejeição nem destino da quarentena.
- Alguns controles são vagos: “instrumento existente”, “recomendação válida”, “partes válidas”, “amostra mínima” e “mesma definição e período”. Devem apontar para catálogo, regra SQL ou teste automatizado versionado.
- Deve haver testes de contrato produtor/consumidor, esquema compatível, timestamps, identidade, enum, duplicidade, completude e reconciliação com CRM/ERP/financeiro.

### 7. Mapeamento para indicadores

- Aquisição: `account_created`, `opportunity_created`, `content_exposed` e `content_action` sustentam novos cadastros, CAC, pipeline, alcance e demanda.
- Ativação/engajamento: `profile_completed`, `assessment_started`, `assessment_completed`, `recommendation_viewed`, `journey_started`, `journey_step_completed`, `match_generated`, `match_viewed` e `benchmark_viewed` sustentam completude, prontidão, CTR, progresso, cobertura e adoção.
- Conversão: `recommendation_accepted`, `journey_completed`, `match_accepted`, `connection_completed`, `proposal_submitted`, `benchmark_action_taken` e `content_action` sustentam aceitação, conexões, propostas e transição para ação.
- Resultado/impacto: `contract_signed`, `transaction_recognized`, `business_metric_received`, `outcome_confirmed` e `financial_value_approved` sustentam conversão, receita, GMV, margem, saving, ROI, MRR e ARR.
- Governança/inteligência: `consent_updated`, `data_quality_incident` e `model_prediction` sustentam cobertura de consentimento, SLA/qualidade, performance, drift e auditabilidade.
- O mapeamento é declarativo, mas não define numerador, denominador, janela, coorte, atribuição, deduplicação ou fonte oficial. Portanto ainda não é suficiente para cálculo reproduzível.

## Qualidade

**Avaliação geral: média, com boa cobertura conceitual e baixa precisão operacional.**

- **Pontos fortes:** 27 eventos cobrem o funil ponta a ponta; objetos e entidades estão explicitados; propriedades mínimas incluem várias versões; retenção e PII foram ao menos sinalizadas; há tentativa de QA por evento.
- **Lacunas críticas:** ausência de envelope comum; idempotência quase não especificada; triggers e QA não executáveis; tipos/unidades/enums ausentes; classificação de PII não granular; indicadores sem definição matemática; dependências externas não nomeadas.
- **Risco de dados:** alto para métricas financeiras, outcomes, avaliações e modelos; médio para comportamento de aquisição/engajamento.

## Dependências

- Catálogo de identidade e resolução de `person_id`, `company_id` e `supplier_id`.
- Serviços de conta, perfil, avaliação, recomendação, jornada, match e conteúdo.
- CRM/ERP/contabilidade para contratos, transações, receita, margem e conciliação.
- Catálogo de instrumentos, modelos, versões, benchmarks, campanhas e fórmulas financeiras.
- Plataforma de eventos/streaming ou warehouse com schema registry, deduplicação, DLQ/quarentena e auditoria.
- Política de privacidade/consentimento, classificação de dados, RBAC, criptografia e jobs de retenção.
- Camada semântica de indicadores com definições, coortes, janelas e regras de atribuição.

## Implicações

- A taxonomia pode servir como catálogo inicial de instrumentação e como mapa de cobertura do funil.
- Sem um contrato de evento comum, diferentes produtores provavelmente emitirão payloads incompatíveis e os painéis não serão comparáveis.
- Eventos de negócio e eventos técnicos devem ter tratamentos distintos de custo, retenção, qualidade e ownership.
- A retenção longa de eventos financeiros e de outcomes aumenta valor de auditoria, mas também aumenta superfície de risco e custo de armazenamento.
- A presença de versões de instrumento/modelo/fórmula permite análises históricas, desde que as versões sejam imutáveis e vinculadas aos indicadores.

## Riscos

1. **Dupla contagem/inchaço de funil:** retries sem chave idempotente podem inflar conclusões, aceites, GMV e receita.
2. **Indicadores não reproduzíveis:** falta de definição de janela, coorte, atribuição, timezone e denominadores.
3. **Vazamento ou uso indevido de PII:** `person_id`, avaliações, outcomes e explicações de modelo permanecem retidos sem classificação de campo.
4. **Inconsistência de versão:** score, recomendação, jornada ou fórmula podem ser comparados entre versões incompatíveis.
5. **Conciliação financeira incorreta:** `transaction_recognized` pode divergir de CRM/ERP por competência, moeda, ajustes ou reversões.
6. **Trigger ambíguo:** diferentes equipes podem disparar o mesmo evento em momentos diferentes.
7. **Atribuição de marketing frágil:** `content_exposed`/`content_action` não fixam janela, UTM canônico, sessão e regra de custo.
8. **Expurgo incompleto:** retenção declarada sem regra operacional pode violar política ou manter dados além do necessário.

## Perguntas em aberto

- Qual é o owner e o produtor oficial de cada evento? Existe catálogo de schemas?
- Qual o `event_version` vigente por evento e como ocorrerá compatibilidade retroativa?
- Qual a chave idempotente e a política de replay para cada classe de evento?
- Quais propriedades são PII, dados sensíveis, inferências ou apenas IDs pseudonimizados?
- “Sim”, “Não” e “Possível” significam o quê exatamente na coluna `PII`?
- O prazo de retenção começa em `occurred_at`, `received_at`, encerramento da relação ou outro marco?
- Quais são os enums e unidades para `type`, `side`, `rank`, `score`, `amount`, `value`, `duration`, `period` e `severity`?
- Como são tratados consentimento revogado, exclusão do titular, correções, reversões e legal hold?
- Qual a fonte da verdade para conexão, contrato, transação, KPI e outcome?
- Como cada indicador será calculado: numerador, denominador, janela, coorte, atribuição e regra de deduplicação?
- `content_action` permanecerá agregado ou será decomposto em eventos com semântica própria?

## Readiness

**Pronto para:** revisão de produto, desenho de instrumentação, inventário de indicadores e priorização de contratos.
**Não pronto para:** implementação direta em produção, auditoria de dados, cálculo financeiro oficial ou tratamento de dados pessoais sem especificação adicional.

### Critérios para elevar a prontidão

- Schema registry com envelope comum e contrato versionado por evento.
- Dicionário de tipos, enums, unidades, timezone, nulabilidade e exemplos válidos.
- Chave idempotente/replay definida para 100% dos eventos.
- Trigger objetivo, owner, produtor, consumidor e SLA documentados.
- Matriz de PII por campo, finalidade, base legal, acesso e retenção operacional.
- Testes automatizados de contrato, qualidade, duplicidade, ordenação e reconciliação.
- Definição matemática e fonte oficial para cada indicador listado.

## Recomendações

1. **Padronizar o envelope:** adicionar `event_id`, `event_name`, `event_version`, `occurred_at`, `received_at`, `source`, `environment`, `actor_id`, `entity_id`, `correlation_id` e `schema_ref`.
2. **Transformar triggers em critérios verificáveis:** descrever condição, transição de estado, produtor e momento de emissão; distinguir `occurred_at` de ingestão.
3. **Definir idempotência por evento:** usar `event_id` global e chave natural específica para contratos/transações; registrar deduplicação, replay e reversão.
4. **Criar contratos tipados:** publicar enums, escalas, moeda, unidades, timezone, limites, exemplos e política de evolução.
5. **Fortalecer versionamento:** tornar explícitos `event_version`, `journey_version`, `instrument_version`, `model_version`, `formula_version` e versão de integração.
6. **Separar telemetria técnica de negócio:** manter `model_prediction` em trilha técnica correlacionada, sem confundi-la com exposição/aceite de recomendação.
7. **Refinar PII e retenção:** classificar cada propriedade, aplicar minimização/pseudonimização, justificar prazo e automatizar expurgo/anonimização.
8. **Operacionalizar QA:** converter cada regra em teste executável, com owner, severidade, SLA, DLQ e evidência; incluir testes de contrato e reconciliação.
9. **Publicar catálogo de indicadores:** para cada indicador, registrar fórmula, coorte, janela, atribuição, fonte, unidade, timezone e regra de deduplicação.
10. **Tratar eventos financeiros como ledger:** suportar moeda, competência, ajustes, reversões, conciliação e trilha de auditoria imutável.
11. **Resolver granularidade de conteúdo:** definir enums para `action` ou separar clique, cadastro e pedido se tiverem funis e janelas diferentes.
12. **Fazer piloto controlado:** instrumentar primeiro `account_created`, `profile_completed`, `assessment_completed`, `recommendation_accepted`, `contract_signed` e `transaction_recognized`, validando ponta a ponta antes de expandir.

## Verificação

- Arquivo de origem lido integralmente: 32 linhas, incluindo cabeçalho na linha 5 e 27 eventos nas linhas 6–32.
- Arquivo criado exclusivamente no caminho solicitado:
  `01-tabs-csv/09_Eventos_Produto/09_Eventos_Produto_analise.md`
- Nenhum outro arquivo foi modificado.
