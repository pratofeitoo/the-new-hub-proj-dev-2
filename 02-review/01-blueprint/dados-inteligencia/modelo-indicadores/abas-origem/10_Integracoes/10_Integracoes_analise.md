---
status: em-revisao
---

# Análise — 10_Integracoes

> Fonte analisada: `10_Integracoes.csv`
> Escopo: mapa de integrações do HUB, com foco em sistemas de origem, direção, método, frequência, autenticação, chaves, SLA, tratamento de erros, owners e fase de roadmap.
> Idioma: pt-BR

## 1. Resumo executivo

A aba define uma malha de **17 integrações** que conecta pessoas, recrutamento, desenvolvimento, comercial, finanças, fornecedores, riscos, indicadores, produto, IA, privacidade, marketing, ecossistema e camada analítica. A arquitetura é predominantemente orientada a APIs, webhooks, arquivos seguros, event stream e ELT/data share.

O desenho tem três características fortes:

- **Tempo real nos fluxos decisórios e de produto:** ATS, LMS, CRM HUB, Plataforma HUB, Motor de inteligência e CMP têm frequência em tempo real, com SLAs de 2 segundos a 1 hora.
- **Lotes controlados para domínios administrativos e de impacto:** HRIS, ERP, compras, GRC, BI cliente e mídia usam cargas diárias ou mensais, com reconciliação, quarentena, validação ou aprovação especializada.
- **Privacidade e linhagem como princípios explícitos:** o cabeçalho afirma que as integrações devem preservar identidade, consentimento, linhagem e SLA de decisão; CMP é uma integração bidirecional de primeira classe, e o warehouse/lakehouse centraliza dimensões, fatos e marts.

O mapa está **pronto como visão conceitual e de priorização**, mas ainda não como especificação executável. Faltam contratos de dados, versionamento, volumes, limites, ownership técnico, critérios de observabilidade, matriz de dependências e definição operacional de cada SLA.

## 2. Estrutura da fonte

### 2.1 Formato

- Título: `Mapa de integrações`.
- Princípio declarado: preservação de identidade, consentimento, linhagem e SLA de decisão.
- Colunas: `Sistema / fonte`, `Domínio`, `Direção`, `Método`, `Frequência`, `Dados principais`, `Chave de integração`, `Autenticação`, `SLA`, `Tratamento de erro`, `Owner`, `Fase`.
- Registros: 17 sistemas/fontes, sem linhas vazias de dados após o cabeçalho.
- Fases utilizadas: M0, M1 e M2.

### 2.2 Inventário por fase

| Fase | Integrações | Leitura do papel |
|---|---:|---|
| M0 | 6 | Núcleo operacional: CRM, plataforma, CMP, entidade/associados e data warehouse/lakehouse. |
| M1 | 8 | Expansão de pessoas, talentos, aprendizagem, finanças HUB, compras, IA e marketing. |
| M2 | 3 | Integrações de impacto externo e risco/indicadores dependentes de maturidade de governança. |

### 2.3 Inventário por direção

| Direção | Quantidade | Registros |
|---|---:|---|
| Entrada | 6 | HRIS, ERP HUB, ERP cliente, GRC, BI cliente e mídia. |
| Bidirecional | 8 | ATS, LMS, CRM HUB, compras, motor de inteligência, CMP, entidade e warehouse/lakehouse. |
| Saída | 1 | Plataforma HUB → consumidores por event stream. |

> Observação: a contagem acima evidencia uma pequena ambiguidade de classificação: `Data warehouse / lakehouse` aparece como bidirecional, embora a descrição de dados (“dimensões, fatos, marts”) possa representar principalmente ingestão e disponibilização. É necessário definir se há escrita de volta para fontes ou apenas publicação para consumidores.

## 3. Mapa detalhado das integrações

| Sistema/fonte | Direção e método | Frequência / SLA | Chave | Autenticação | Erro | Owner | Fase |
|---|---|---|---|---|---|---|---|
| HRIS / folha | Entrada; API / arquivo seguro | Diária; D+1 | `person_external_id + company_id` | OAuth2 / SFTP | Quarentena + reconciliação | Data cliente | M1 |
| ATS | Bidirecional; API / webhook | Tempo real; 15 min | `opportunity_id / person_id` | OAuth2 | Retry idempotente | Talent Acquisition | M1 |
| LMS | Bidirecional; API / xAPI | Tempo real; 1 h | `person_id + journey_id` | OAuth2 | Dead-letter queue | L&D | M1 |
| CRM HUB | Bidirecional; API / webhook | Tempo real; 15 min | `company_id / opportunity_id` | OAuth2 | Retry + conciliação | RevOps | M0 |
| ERP / financeiro HUB | Entrada; API / arquivo | Diária; D+1 | `contract_id / transaction_id` | OAuth2 / SFTP | Conciliação contábil | Financeiro HUB | M1 |
| ERP / financeiro cliente | Entrada; data share / API | Mensal; D+5 | `company_id + metric_id + period` | Private link | Aprovação da controladoria | Financeiro cliente | M2 |
| Compras / SRM | Bidirecional; API / arquivo | Diária; D+1 | `supplier_id / category_id` | OAuth2 / SFTP | Quarentena por categoria | Compras | M1 |
| GRC / riscos | Entrada; API / arquivo | Mensal; D+3 | `risk_id` | OAuth2 / SFTP | Revisão de especialista | Riscos | M2 |
| BI cliente | Entrada; data share / arquivo | Mensal; D+5 | `metric_id + period + cohort` | Private link | Validação semântica | People Analytics / BI | M2 |
| Plataforma HUB | Saída; event stream | Tempo real; <5 min | `event_id / person_id` | Token / mTLS | Fila + replay | Produto | M0 |
| Motor de inteligência | Bidirecional; API | Tempo real; <2 s | `model_version + object_id` | mTLS | Fallback por regra | Data Science | M1 |
| CMP / consentimento | Bidirecional; API / webhook | Tempo real; <5 min | `person_id + purpose` | OAuth2 | Bloqueio preventivo | DPO | M0 |
| Mídia / analytics | Entrada; API | Diária; D+1 | `campaign_id / UTM` | OAuth2 | Deduplicação cross-channel | Marketing | M1 |
| Entidade / associados | Bidirecional; API / arquivo | Diária; D+1 | `entity_id + company_id` | OAuth2 / SFTP | Reconciliação de vigência | Entidade | M0 |
| Data warehouse / lakehouse | Bidirecional; ELT / data share | Horária/diária; 1 h | Surrogate keys + business keys | IAM / private link | Observabilidade e rollback | Data Engineering | M0 |

## 4. Principais achados

### 4.1 Sistemas de origem e criticidade

- **Sistemas mestres de identidade:** HRIS/folha fornece vínculo, função, custo e status; CMP governa finalidade, status, versão e revogação. A combinação deve impedir que dados de pessoa sejam processados sem consentimento válido.
- **Sistemas de relacionamento e receita:** CRM HUB e ERP/financeiro HUB formam o núcleo de empresa, oportunidade, contrato, receita, custo e margem.
- **Sistemas de jornada e resultado:** ATS, LMS e Plataforma HUB cobrem o ciclo do candidato/participante, enquanto BI cliente e ERP cliente fornecem evidências de impacto externo.
- **Sistemas de controle:** GRC/riscos, compras/SRM e CMP agregam controles de risco, fornecedores e privacidade.
- **Camada analítica:** data warehouse/lakehouse é explicitamente transversal (“Todos”) e tem responsabilidade de observabilidade e rollback, indicando papel de backbone de dados.

### 4.2 Direção e método

- Webhooks e event stream são adequados para acontecimentos que exigem baixa latência (ATS, CRM, Plataforma, CMP).
- APIs síncronas aparecem no motor de inteligência, com SLA de `<2 s`; a integração precisa de limites de tempo, circuit breaker e degradação segura.
- Arquivos seguros/SFTP são usados para legados ou cargas reguladas, mas exigem manifesto, checksum, criptografia, retenção e reconciliação de arquivos.
- xAPI no LMS sugere eventos de aprendizagem ricos, porém o mapa não informa versão do perfil xAPI, endpoint, esquema de eventos ou política de reprocessamento.
- ELT/data share no warehouse/lakehouse suporta escala analítica, mas `horária/diária` e SLA de `1 h` precisam ser separados por dataset e janela de carga.

### 4.3 Frequência e SLA

- Os SLAs de 15 minutos do ATS e CRM e de menos de 5 minutos da Plataforma e CMP estão alinhados a decisões e eventos operacionais.
- O SLA de menos de 2 segundos do motor de inteligência é o mais rigoroso e pode ser uma dependência crítica para a experiência do produto.
- D+1, D+3 e D+5 definem prazos de disponibilidade, mas não deixam claro se são dias corridos ou úteis, hora de corte, timezone, percentual de atendimento ou janela de indisponibilidade.
- Nos lotes mensais, o prazo D+5 (ERP cliente e BI cliente) acomoda aprovação/validação, mas pode atrasar a comprovação de impacto e o fechamento de indicadores.

### 4.4 Autenticação e segurança

- OAuth2 é o padrão dominante para APIs; mTLS aparece no motor de inteligência e na plataforma, e token/mTLS na saída de eventos.
- SFTP e private link cobrem transferência de arquivos e compartilhamentos com clientes, porém “private link” não especifica autorização, expiração, escopo ou auditoria.
- IAM/private link no warehouse/lakehouse indica controles de infraestrutura, mas não substitui autorização por domínio, mascaramento, segregação de tenant e trilha de acesso.
- Não há indicação de rotação de segredos/certificados, escopos OAuth, audience, revogação, gestão de chaves, criptografia em repouso ou classificação de dados.

### 4.5 Chaves e identidade

- Há boa intenção de usar identificadores externos e chaves compostas: `person_external_id + company_id`, `company_id + metric_id + period`, `metric_id + period + cohort`.
- Chaves operacionais ainda estão em formato alternativo (`/`), sem declarar se representam chave primária, chave de correlação, combinação OR ou possibilidades de fallback.
- `model_version + object_id` é apropriada para reprodutibilidade de inferência, mas precisa de versão de feature set, timestamp e identificador de explicação.
- O uso de surrogate keys + business keys no warehouse sugere separação entre identidade técnica e identidade de negócio, que deve ser formalizada no dicionário de dados.
- Não está explícita a estratégia de resolução de identidade entre pessoas, empresas, entidades, oportunidades e contratos; este é o maior risco de duplicidade e perda de linhagem.

### 4.6 Erros e resiliência

- O mapa contempla padrões maduros: retry idempotente, dead-letter queue, fila + replay, fallback por regra, quarentena, conciliação, rollback e bloqueio preventivo.
- Os tratamentos não definem limites: número de retries, backoff, TTL, critérios de poison message, janela de replay, quem aprova a liberação de quarentena ou como registrar a causa-raiz.
- “Deduplicação cross-channel” e “validação semântica” são controles de qualidade, mas precisam de regras determinísticas e amostras de exceção.
- O bloqueio preventivo do CMP é o controle mais importante: em dúvida sobre consentimento, o comportamento padrão deve ser negar processamento/entrega e registrar o evento.

## 5. Qualidade da fonte

### Pontos fortes

1. Cobertura ampla do ecossistema, incluindo integrações externas e internas.
2. Cada registro traz os campos essenciais de uma visão inicial de arquitetura.
3. Fases M0/M1/M2 dão uma priorização clara para roadmap.
4. SLAs e padrões de erro já estão associados às integrações, o que facilita transformar o mapa em contratos operacionais.
5. Privacidade, identidade, linhagem e consentimento aparecem como preocupações estruturais, não como pós-processamento.

### Lacunas e inconsistências

1. Não há `integration_id`, versão do registro, versão do contrato ou data de atualização.
2. Direção usa termos conceituais sem indicar sistema produtor e consumidor em cada sentido.
3. “Tempo real”, “diária”, “mensal” e “horária/diária” não têm janela de processamento nem timezone.
4. SLA não define métrica (latência p95, disponibilidade, freshness, completude), janela e escalonamento.
5. Owners são majoritariamente funcionais; falta owner técnico, suporte 24x7/on-call e aprovador de mudanças.
6. Autenticação está resumida; faltam escopos, certificados, rotação, validade e segregação de ambientes.
7. Chaves compostas e alternativas não têm cardinalidade, unicidade, nulabilidade ou regra de resolução.
8. Não há volume esperado, tamanho de payload, rate limit, limite de arquivo, throughput ou retenção.
9. Não há classificação LGPD, finalidade, base legal, residência, mascaramento ou política de minimização por campo.
10. Não há dependências explícitas entre as fases; por exemplo, o motor de inteligência depende de dados, consentimento e contratos de identidade.

## 6. Dependências e implicações

### Dependências críticas

- **CMP → todas as integrações com dados pessoais:** consentimento deve ser consultado antes de ingestão, enriquecimento, scoring, exportação e retenção.
- **Identity/MDM → HRIS, ATS, LMS, CRM, entidade e warehouse:** sem resolução de identidade, person/company IDs podem gerar duplicidades e atribuições incorretas.
- **Data warehouse/lakehouse → indicadores e decisões:** qualidade de freshness e linhagem impacta relatórios, ROI e explicações.
- **CRM HUB ↔ ERP HUB → receita e oportunidades:** contratos e transações precisam de reconciliação temporal e chave de negócio consistente.
- **Motor de inteligência → Plataforma HUB:** a latência de `<2 s` pode determinar a responsividade percebida do produto.
- **Dicionário de dados/eventos → APIs, xAPI e ELT:** contratos semânticos devem anteceder implementação e monitoramento.

### Implicações de produto e operação

- M0 precisa priorizar o backbone (CRM, Plataforma, CMP, warehouse e entidade) para evitar construir integrações isoladas sem governança.
- M1 amplia valor operacional, mas adiciona grande superfície de sincronização e qualidade; deve incluir observabilidade e catálogo de contratos.
- M2 depende de confiança dos clientes e aprovação de controladoria; sua cadência mensal e o private link exigem processo de fechamento e evidência auditável.
- O modelo bidirecional exige prevenção de loops, controle de origem, idempotência e correlation IDs.

## 7. Riscos

| Risco | Impacto | Sinal de alerta | Mitigação recomendada |
|---|---|---|---|
| Identidade duplicada ou incorreta | Alto | divergência de `person_id`/`company_id`, contagens incompatíveis | MDM, regras de matching, tabela de aliases e reconciliação periódica |
| Processamento sem consentimento | Crítico | CMP atrasado, revogação não propagada em até 5 min | deny-by-default, cache curto, bloqueio preventivo e auditoria |
| Loop em integração bidirecional | Alto | aumento de eventos/retries sem alteração de negócio | `event_id`, `source_system`, idempotency key e detecção de eco |
| SLA impossível no motor de IA | Alto | p95 > 2 s, timeout e fallback frequentes | cache, circuit breaker, limites de payload, fallback testado e SLO realista |
| Carga mensal desatualizada | Médio/alto | ERP/BI cliente vencido após D+5 | calendário de fechamento, alertas de freshness e aceite formal de atraso |
| Falha silenciosa de arquivo/SFTP | Alto | arquivo ausente, parcial ou duplicado | manifesto, checksum, tamanho esperado, confirmação e quarentena |
| Semântica divergente no BI | Alto | métricas de produtividade/receita não reconciliam | contrato semântico, dicionário versionado e testes de dados |
| Excesso de privilégio em compartilhamentos | Alto | links persistentes, acesso além do tenant | private link com escopo mínimo, expiração, IAM e revisão periódica |
| Replay causando duplicidade | Médio/alto | eventos antigos reaparecem após recuperação | replay por janela, idempotência e auditoria de reprocessamento |

## 8. Perguntas em aberto

1. Quem é o produtor e quem é o consumidor em cada direção bidirecional?
2. Qual é o sistema mestre para pessoa, empresa, oportunidade, contrato, fornecedor, métrica e consentimento?
3. `/` nas chaves significa alternativa, composição ou relacionamento entre duas entidades?
4. Os SLAs D+N são em dias úteis ou corridos? Qual é a hora de corte e o timezone?
5. Qual é a meta de p95/p99 e disponibilidade para os SLAs de tempo real?
6. Quais campos são pessoais, sensíveis, financeiros ou derivados de modelo em cada payload?
7. Como revogação de consentimento interrompe jobs já enfileirados, dados em cache, features e exports?
8. Qual é o contrato de versão dos eventos, APIs, xAPI, arquivos e marts?
9. Quem é o owner técnico/on-call de cada integração e qual canal de escalonamento?
10. Quais são volumes, limites, throughput e janelas de manutenção por sistema?
11. Como são aprovadas e auditadas liberações de quarentena, dead-letter e fallback?
12. Quais integrações de M0 são pré-requisitos formais para iniciar M1 e M2?
13. O warehouse/lakehouse recebe dados de volta nas fontes ou apenas publica dados para consumidores?
14. Quais evidências comprovam a linhagem de um indicador até sua fonte original?

## 9. Prontidão

### Avaliação geral: **Pronto para desenho de arquitetura; não pronto para implementação produtiva**

| Dimensão | Status | Justificativa |
|---|---|---|
| Cobertura de sistemas | Verde | Domínios estratégicos e operacionais estão representados. |
| Priorização de roadmap | Verde | M0/M1/M2 oferece uma sequência inicial coerente. |
| Padrões de integração | Amarelo | Métodos e resiliência estão indicados, sem contratos detalhados. |
| Identidade e chaves | Amarelo/vermelho | Há chaves candidatas, mas não há MDM, unicidade ou mapeamento formal. |
| Segurança/autenticação | Amarelo | Protocolos existem, mas faltam escopos, rotação e classificação de dados. |
| SLAs/SLOs | Amarelo | Há números úteis, porém sem definição operacional e observabilidade. |
| LGPD/consentimento | Amarelo | CMP está no núcleo, mas falta fluxo de revogação e retenção ponta a ponta. |
| Operação e suporte | Amarelo/vermelho | Owners funcionais existem; falta operação técnica, on-call e runbooks. |
| Prontidão de build | Vermelho | Faltam schemas, ambientes, volumes, testes de contrato e critérios de aceite. |

## 10. Recomendações priorizadas

### Antes de iniciar M0

1. Criar um `integration_id` único e um registro versionado por integração.
2. Transformar a aba em catálogo de contratos: produtor, consumidor, payload/schema, versão, eventos, campos, classificação e dependências.
3. Definir MDM/resolução de identidade para `person`, `company`, `opportunity`, `contract`, `entity`, `metric` e `event`.
4. Formalizar CMP como gate: consentimento válido antes de qualquer uso de dado pessoal, com revogação propagada e auditoria.
5. Definir SLOs mensuráveis: freshness, latência p95/p99, disponibilidade, completude, duplicidade e taxa de erro.
6. Nomear owner funcional, owner técnico, on-call e aprovador para cada integração.
7. Padronizar `correlation_id`, `event_id`, `idempotency_key`, `source_system`, `schema_version` e `occurred_at`.
8. Definir observabilidade mínima: métricas, logs estruturados, traces, alertas, DLQ, replay, quarentena e rollback.

### Durante M0/M1

1. Implementar testes de contrato e testes de idempotência para APIs, webhooks, event stream e arquivos.
2. Para SFTP/arquivos, exigir manifesto, checksum, criptografia, confirmação, retenção e reconciliação.
3. Para bidirecionais, implementar prevenção de loops e reconciliação de estado.
4. Para o motor de inteligência, medir p95/p99, timeout, fallback, versão de modelo e explicabilidade.
5. Versionar schemas com compatibilidade backward/forward e processo de depreciação.
6. Usar ambientes separados, segredos gerenciados, rotação automática e permissões de menor privilégio.

### Antes de M2

1. Obter aceite formal de controladoria para ERP financeiro cliente e BI cliente.
2. Definir fechamento mensal, calendário D+5, validação semântica e fluxo de exceção.
3. Implementar trilha de evidência que permita reproduzir cada KPI, saving, margem e resultado publicado.
4. Validar private links com expiração, tenant isolation, auditoria e revogação.
5. Executar exercício de falha/reprocessamento e comprovar que nenhum replay gera duplicidade ou violação de consentimento.

## 11. Conclusão

`10_Integracoes.csv` oferece um mapa estratégico consistente e especialmente valioso por explicitar direção, frequência, SLA e tratamento de erro desde a fase de concepção. O núcleo M0 está bem identificado, e os padrões de resiliência indicam preocupação com operação real. O próximo passo não é adicionar mais sistemas, mas **converter o mapa em contratos verificáveis**, com identidade, semântica, consentimento, observabilidade, ownership técnico e critérios de aceite. Sem esse detalhamento, M1/M2 podem produzir integrações funcionando tecnicamente, porém divergentes em identidade, métricas ou autorização.

## 12. Verificação

- Arquivo de origem lido integralmente: `01-tabs-csv/10_Integracoes/10_Integracoes.csv` (20 linhas).
- Registros analisados: 17 integrações.
- Saída criada exclusivamente em:
  `01-tabs-csv/10_Integracoes/10_Integracoes_analise.md`
- Nenhum outro arquivo foi alterado nesta tarefa.
