# Análise — Dicionário de Dados

**Arquivo analisado:** `01-tabs-csv/08_Dicionario_Dados/08_Dicionario_Dados.csv`
**Escopo:** somente o CSV do dicionário de dados mínimo.
**Idioma:** pt-BR.

## 1. Estrutura

O arquivo começa com duas linhas de contexto textual (título e descrição), seguidas por uma linha vazia e pelo cabeçalho tabular. O cabeçalho possui 12 colunas:

`Tabela`, `Campo`, `Tipo`, `Definição`, `Chave`, `Obrigatório`, `Exemplo`, `Sensibilidade`, `Base legal / finalidade`, `Origem`, `Frequência`, `Regra de qualidade`.

Há **41 registros de campos**, distribuídos em 16 tabelas dimensionais e fato:

- Dimensões: `dim_person` (4), `dim_company` (3), `dim_entity` (1), `dim_skill` (2), `dim_cohort` (1), `dim_model_version` (1).
- Fatos: `fact_person_skill` (3), `fact_assessment` (3), `fact_event` (5), `fact_opportunity` (3), `fact_match` (3), `fact_participation` (2), `fact_contract` (2), `fact_transaction` (1), `fact_business_metric` (3), `fact_financial_value` (4).

Os tipos declarados cobrem `UUID`, `string`, `enum`, `decimal`, `timestamp` e `json`. O modelo combina entidades de cadastro, avaliações, eventos, funil comercial, contratos/transações, métricas de negócio, valor financeiro, coortes e versões de modelos.

## 2. Achados por aspecto

### Tipos e semântica

- IDs são predominantemente `UUID`, com exemplos pseudônimos (`p_01...`, `c_01...`) e identificadores prefixados; convém padronizar se o exemplo representa UUID real ou apenas alias ilustrativo.
- `enum` é usado para status, segmentos, estágio, alavanca financeira e nível de evidência. O dicionário exige vocabulários controlados/versionados, mas não os lista.
- `decimal` aparece para níveis, confiança, scores, valores, dose, baseline/observado, valor bruto e taxa de atribuição. As escalas 0–1 e 0–5 estão explícitas apenas em alguns campos.
- `timestamp` está representado por `occurred_at`, com requisito UTC e proibição de datas futuras.
- `json` aparece em `cohort_definition`, descrito como imutável, versionado e reproduzível, mas sem schema formal.

### Chaves e integridade

- Chaves primárias explícitas: `person_id`, `company_id`, `entity_id`, `skill_id`, `assessment_id`, `event_id`, `opportunity_id`, `match_id`, `participation_id`, `contract_id`, `metric_id` e `lever` (este último marcado como campo de alavanca, não como ID convencional).
- Chaves estrangeiras explícitas: `dim_person.company_id`, `dim_person`/`fact_person_skill.person_id`, `fact_person_skill.skill_id`, `fact_event.object_id`, `fact_match.model_version_id` e `fact_contract.origin_touchpoint`; há relações descritas semanticamente que não estão formalizadas como FK, como `dim_company.entity_id` e `fact_participation` para pessoa/ação.
- `fact_business_metric.metric_id` é “PK parcial”, sinalizando necessidade de chave composta (provavelmente métrica + população/período/cliente), ainda não especificada.
- `fact_match.match_id` deve ser único “por versão”, mas a composição exata (oferta, demanda, versão, janela) não está definida.
- `fact_participation.participation_id` é único por pessoa-ação, mas a chave natural e a política para reexposição não estão detalhadas.

### Obrigatoriedade e exemplos

- Muitos campos obrigatórios não possuem exemplo: sobretudo todos os `decimal` (`level`, `confidence`, `dimension_score`, scores, valores e taxas) e alguns atributos financeiros.
- Campos opcionais com exemplo: `dim_person.company_id`, `profile_segment`, `dim_company.entity_id`, `fact_event.object_id`, `fact_contract.origin_touchpoint`.
- Campos obrigatórios com exemplos qualitativos suficientes: IDs, status, taxonomias, versões, nomes de eventos, timestamp, estágio, alavanca, nível de evidência, definição de coorte e hash.
- A ausência de exemplos numéricos dificulta validar escala, precisão, arredondamento, unidade monetária e tratamento de nulos.

### Fontes e frequência

- Fontes principais: cadastro/HRIS, CRM, CMP, taxonomia, diagnóstico, plataforma, SDK, ATS/Compras, Motor, Eventos/LMS, CRM/ERP, ERP, BI cliente, Data mart, Metodologia, camada analítica e MLOps.
- Frequências: tempo real, evento, diária, mensal, trimestral e release. O catálogo não define SLA, latência máxima, atraso aceitável, janela de reprocessamento ou comportamento de atualização retroativa.
- A coexistência de `Evento` e `Tempo real` requer uma convenção operacional: evento parece frequência de captura, enquanto tempo real parece latência de disponibilização.

### Base legal, finalidade e sensibilidade

- Bases/finalidades cobrem execução de contrato/serviço, consentimento, obrigação legal, personalização, inteligência, analytics, recomendação, auditabilidade, transparência, mensuração financeira, atribuição e prova de valor.
- Dados classificados como **Crítica**: `dim_person.consent_status`.
- Dados classificados como **Alta**: IDs de pessoa e seus atributos de vínculo/avaliação, scores de avaliação, oportunidades/valores, contratos, transações, métricas de negócio, coortes e valores financeiros.
- Dados **Média** e **Baixa** incluem dados operacionais, taxonomias e eventos menos sensíveis.
- A classificação é por campo, mas não há política de retenção, acesso, mascaramento, criptografia, anonimização, transferência ou trilha de auditoria. Também falta explicitar a finalidade específica para cada tratamento e o vínculo entre consentimento e linhas derivadas.

### Regras de qualidade

As regras cobrem unicidade/não nulo, existência referencial, vocabulário/taxonomia válida, vigência de versões, imutabilidade, faixas numéricas, idempotência, UTC, transições válidas, conciliação, consistência de população/janela, fórmula e evidência. São boas regras de intenção, porém ainda não são testes executáveis: faltam owner, severidade, limiar, ação de rejeição/quarentena e indicador de monitoramento.

## 3. Dependências identificadas

1. `dim_person.company_id` depende de `dim_company.company_id`; `dim_company.entity_id` depende de `dim_entity.entity_id`.
2. `fact_person_skill` depende de pessoa, skill e versão da taxonomia (`dim_skill.skill_version`).
3. `fact_assessment` depende da existência de `instrument_version` e de uma definição de dimensão/score.
4. `fact_event` depende do catálogo de eventos e do domínio do `object_id`; exige idempotência por `event_id`.
5. `fact_match` depende de oferta-demanda, versão de modelo registrada e score explicável.
6. `fact_contract` e `fact_transaction` dependem de CRM/ERP e de conciliação financeira; a atribuição pode depender de `origin_touchpoint`/match.
7. `fact_business_metric`, `fact_financial_value` e `dim_cohort` dependem de definições estáveis de população, janela, baseline, fórmula, taxonomia e evidência.
8. `dim_model_version.features_hash` depende do artefato de features e pesos no MLOps.

## 4. Implicações

- O dicionário já suporta um núcleo analítico ponta a ponta: cadastro → capacidade/diagnóstico → recomendação/match → participação → contrato/transação → métrica e prova de valor.
- As versões de taxonomia, instrumento, modelo e coorte são essenciais para reprodutibilidade e auditoria; devem ser tratadas como dimensões imutáveis ou registros versionados.
- A presença de base legal e sensibilidade permite iniciar governança de dados, mas não substitui um catálogo de tratamento, controles de acesso e política de retenção.
- A estrutura favorece validações automatizadas, desde que regras textuais sejam convertidas em contratos de dados e checks no pipeline.

## 5. Riscos

- **Alto:** tratar `person_id`, scores, consentimento, coortes e dados financeiros sem política de acesso/retensão pode gerar exposição de dados pessoais, decisões não auditáveis ou descumprimento da LGPD.
- **Alto:** ausência de escala/unidade nos valores e decimals pode produzir comparações ou ROI incorretos.
- **Alto:** chave parcial e chaves “por versão” não formalizadas podem duplicar métricas, matches e participações.
- **Médio:** vocabulários (`enum`) e taxonomias são referenciados, mas não há catálogo de valores nem versionamento explícito para todos.
- **Médio:** regra de `object_id` “existir no domínio” não define domínio por tipo de evento, favorecendo referências ambíguas.
- **Médio:** fontes e frequências heterogêneas, sem SLA/linhagem/atraso, podem quebrar atualizações e reconciliações.
- **Médio:** o CSV contém preâmbulo textual antes do cabeçalho, o que pode quebrar importadores que esperam uma tabela na primeira linha.

## 6. Campos e especificações ausentes

- Chave composta e granularidade de cada fato (especialmente `fact_business_metric`, `fact_match`, `fact_participation` e `fact_financial_value`).
- Chaves temporais, período de referência, data de validade/início/fim e política de late-arriving data.
- Moeda, unidade, escala, precisão e regras de arredondamento para valores financeiros e `decimal`.
- Schema formal para `cohort_definition` e convenção de serialização/campos obrigatórios do JSON.
- Catálogos de enum, taxonomias versionadas e dicionários de dimensões (`dimension_score`, `lever`, `evidence_level`, `stage`, `event_name`).
- Owner técnico e de negócio, SLA de atualização, classificação de severidade, limiar de qualidade, processo de quarentena e contato para cada campo/fonte.
- Linhagem detalhada: dataset/tabela de origem, transformação, fórmula e versão do pipeline.
- Política LGPD: titular/finalidade específica, retenção, descarte, anonimização/pseudonimização, controle de acesso, criptografia e auditoria.
- Definição do vínculo de consentimento com eventos, avaliações, recomendações, scores derivados e retenção histórica.
- Campos de auditoria operacional: `created_at`, `updated_at`, `ingested_at`, `source_system`, `record_version`, `deleted_at`/indicador de exclusão e motivo de correção.
- Campos para qualidade de evidência e explicabilidade do match além do score e da versão do modelo.

## 7. Perguntas para validação

1. Qual é a granularidade e a chave natural de cada fato? Quais dimensões compõem a PK efetiva?
2. `lever` é uma dimensão com identificador próprio ou pode repetir entre períodos/clientes?
3. `metric_id` representa apenas o indicador ou indicador + cliente + período + coorte?
4. Quais são as unidades e moedas de `value`, `amount`, `baseline_value`, `observed_value` e `gross_value`?
5. Quais campos são considerados dado pessoal, dado pessoal sensível ou dado financeiro restrito para fins de acesso?
6. Como o sistema revoga ou reprocessa dados quando o consentimento expira ou é retirado?
7. Qual catálogo oficial controla eventos, estágios, evidência, alavancas, segmentos e skills?
8. Como `object_id` identifica tipos de objeto diferentes sem colisão ou ambiguidade?
9. Quais são os owners, SLAs, tolerâncias e ações quando uma regra de qualidade falha?
10. O preâmbulo textual deve permanecer no CSV ou deve ser separado da tabela para consumo automatizado?

## 8. Prontidão

**Prontidão conceitual: média-alta.** O arquivo cobre os campos mínimos e registra tipo, definição, obrigatoriedade, sensibilidade, base legal, origem, frequência e regra de qualidade.

**Prontidão para implementação: média-baixa.** Ainda faltam chaves compostas/granularidade, catálogos, schemas, unidades, metadados temporais, owners/SLA e controles executáveis de LGPD e qualidade. Não é recomendável usar o dicionário como contrato de produção sem esses complementos.

## 9. Recomendações

1. Separar o preâmbulo do CSV ou registrar metadados em arquivo próprio, mantendo a primeira linha como cabeçalho para ingestão.
2. Adicionar colunas `Granularidade`, `PK composta`, `Unidade`, `Moeda`, `Precisão/escala`, `Owner`, `SLA`, `Retenção`, `Classificação LGPD`, `Linhagem` e `Schema/Enum ref`.
3. Formalizar PK/FK e cardinalidades por tabela, incluindo chaves temporais e política de versionamento.
4. Criar catálogos versionados para enums, eventos, skills, instrumentos, modelos, alavancas e níveis de evidência.
5. Transformar cada regra de qualidade em teste automatizado com severidade, limiar, owner, ação de falha e métricas de observabilidade.
6. Definir contrato financeiro (moeda, unidade, período, reconhecimento, fórmula, reconciliação e arredondamento) antes de calcular ROI/prova de valor.
7. Documentar controles de privacidade por finalidade: minimização, pseudonimização, acesso por perfil, retenção, revogação de consentimento e auditoria.
8. Acrescentar exemplos válidos e inválidos para todos os tipos, especialmente campos numéricos, JSON, chaves compostas e timestamps.

## 10. Verificação

- Fonte lida integralmente: 46 linhas, incluindo 41 registros de campos.
- Cabeçalho confirmado com 12 colunas.
- Análise criada somente neste arquivo:
  `01-tabs-csv/08_Dicionario_Dados/08_Dicionario_Dados_analysis.md`
- Nenhum outro arquivo foi modificado.
