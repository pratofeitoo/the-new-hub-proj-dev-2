# Análise — Nós de Dados

**Arquivo analisado:** `01-tabs-csv/02_Nos_de_Dados/02_Nos_de_Dados.csv`
**Escopo:** catálogo conceitual dos nós do mapa neural, sem inferir registros ou valores não presentes no CSV.

## 1. Estrutura do arquivo

- O arquivo contém um título, uma frase de enquadramento e uma tabela principal.
- A tabela possui **25 nós**, identificados de `N01` a `N25`.
- Colunas: `ID`, `Camada`, `Nó`, `Definição de negócio`, `Chave primária`, `Granularidade`, `Atributos mínimos`, `Origem`, `Sensibilidade`, `Atualização` e `Contribuição para valor`.
- Os nós estão distribuídos em **13 rótulos de camada**: Identidade (4), Estrutura (1), Demanda (1), Capacidade (2), Sinal (2), Ação (3), Execução (2), Negócio (2), Resultado (2), Contexto (2), Risco (1), Comunicação (1) e Qualidade (2). A contagem foi derivada dos valores da coluna `Camada`; o cabeçalho não explicita um total.
- A ordenação sugere um fluxo da identidade e dos sinais para ações, execução, negócio, resultado, contexto, risco, comunicação e qualidade; não há coluna de ordem, dependência ou direção de relacionamento.

## 2. Inventário de entidades e identidade

| ID | Entidade | Chave primária | Granularidade | Origem | Sensibilidade | Atualização |
|---|---|---|---|---|---|---|
| N01 | Pessoa | `person_id` | 1 pessoa | Cadastro / HRIS | Alta | Diária |
| N02 | Empresa | `company_id` | 1 empresa | CRM / ERP | Média | Diária |
| N03 | Entidade | `entity_id` | 1 entidade | CRM | Média | Semanal |
| N04 | Fornecedor / solução | `supplier_id` | 1 fornecedor | Compras / Marketplace | Média | Diária |
| N05 | Vínculo | `relationship_id` | 1 vínculo por período | HRIS / CRM | Alta | Diária |
| N06 | Oportunidade | `opportunity_id` | 1 oportunidade | ATS / CRM / Compras | Média | Tempo real |
| N07 | Competência | `skill_id` | 1 competência | Diagnóstico / LMS | Média | Mensal |
| N08 | Evidência de competência | `evidence_id` | 1 evidência | Upload / avaliação | Alta | Evento |
| N09 | Diagnóstico | `assessment_id` | 1 resposta/rodada | Plataforma | Alta | Evento |
| N10 | Interação | `event_id` | 1 evento | Tracking | Média | Tempo real |
| N11 | Jornada | `journey_id` | 1 jornada | Plataforma / LMS | Média | Diária |
| N12 | Recomendação | `recommendation_id` | 1 recomendação | Motor de inteligência | Média | Tempo real |
| N13 | Match | `match_id` | 1 par oportunidade-oferta | Motor de matching | Média | Tempo real |
| N14 | Participação | `participation_id` | 1 participante por ação | Eventos / LMS | Alta | Evento |
| N15 | Programa / projeto | `program_id` | 1 programa | PMO / CRM | Média | Semanal |
| N16 | Contrato | `contract_id` | 1 contrato | CRM / ERP | Alta | Diária |
| N17 | Transação | `transaction_id` | 1 lançamento | ERP / Financeiro | Alta | Diária |
| N18 | Indicador de negócio | `business_metric_id` | 1 indicador por período | BI / ERP | Alta | Mensal |
| N19 | Outcome individual | `outcome_id` | 1 pessoa-resultado-período | Pesquisa / HRIS | Alta | Mensal |
| N20 | Cohort | `cohort_id` | 1 definição de grupo | Camada analítica | Média | Mensal |
| N21 | Benchmark | `benchmark_id` | 1 métrica-segmento-período | Data mart | Média | Mensal |
| N22 | Risco / controle | `risk_id` | 1 risco por contexto | GRC / Jurídico | Alta | Mensal |
| N23 | Conteúdo / campanha | `content_id` | 1 ativo/campanha | Marketing | Baixa | Diária |
| N24 | Consentimento | `consent_id` | 1 finalidade por titular | CMP / cadastro | Crítica | Tempo real |
| N25 | Versão de modelo | `model_version_id` | 1 versão | MLOps | Média | Release |

As chaves são nomeadas e plausíveis, mas o arquivo não informa se são internas, globais, compostas, imutáveis ou sujeitas a deduplicação. Especialmente `business_metric_id`, `outcome_id`, `cohort_id` e `benchmark_id` parecem exigir dimensões de período, pessoa, segmento ou métrica além da chave indicada para evitar duplicidade.

## 3. Granularidade e atributos

O catálogo mistura entidades mestre (`Pessoa`, `Empresa`, `Competência`), relações temporais (`Vínculo`), fatos/eventos (`Interação`, `Transação`, `Participação`), objetos derivados (`Match`, `Recomendação`, `Benchmark`) e controles (`Consentimento`, `Versão de modelo`). Essa mistura é adequada para um mapa neural, mas exige uma separação posterior entre dimensões, fatos, eventos e artefatos derivados no modelo físico.

Os atributos mínimos são bons como vocabulário inicial e cobrem identidade, estado, tempo, valor e explicabilidade. Ainda faltam, em geral:

- `created_at`, `updated_at`, sistema de origem e identificador de ingestão;
- status de registro, vigência, versão do dado e indicador de exclusão;
- chaves estrangeiras para os nós relacionados;
- unidade, moeda, timezone e definição operacional para valores e scores;
- qualidade, completude, confiança e proveniência em atributos calculados;
- regras de retenção, acesso e mascaramento por campo sensível.

Pontos de granularidade que requerem decisão: `Vínculo` precisa de datas e regra para sobreposição; `Diagnóstico` distingue “resposta” de “rodada”, mas não explicita respondente e instrumento; `Interação` é evento por sessão/contexto, sem indicar identidade do ator; `Participação` declara “participante por ação”, mas não explicita a ação/programa; `Indicador de negócio`, `Outcome individual`, `Cohort` e `Benchmark` dependem fortemente de período/janela e versão.

## 4. Fontes e frequência de atualização

Há integração com Cadastro, HRIS, CRM, ERP, Compras, Marketplace, ATS, Diagnóstico, LMS, Upload/avaliação, Plataforma, Tracking, motor de inteligência/matching, Eventos, PMO, Financeiro, BI, Pesquisa, Data mart, GRC/Jurídico, Marketing, CMP e MLOps. O mapa cobre bem sistemas operacionais, analíticos e motores de decisão.

As frequências variam de evento/tempo real a mensal e release. Essa variedade é coerente, porém o CSV não define SLA, latência aceitável, janela de processamento, mecanismo de atualização, reconciliação ou proprietário por origem. “Evento”, “Tempo real” e “Release” precisam de definição técnica antes de virarem compromisso operacional.

## 5. Sensibilidade e implicações de governança

- **Crítica:** Consentimento. Deve ser bloqueador de tratamento e de ativação de usos, com finalidade, base legal, versão e revogação auditáveis.
- **Alta:** Pessoa, Vínculo, Evidência, Diagnóstico, Participação, Contrato, Transação, Indicador de negócio, Outcome e Risco. Contêm ou podem permitir inferir dados pessoais, trabalhistas, financeiros, de desempenho ou risco.
- **Média:** Empresa, Entidade, Fornecedor, Oportunidade, Competência, Jornada, Recomendação, Match, Programa, Cohort, Benchmark e Versão de modelo. Mesmo sem dado pessoal direto, alguns podem expor estratégia comercial, fairness ou lógica proprietária.
- **Baixa:** Conteúdo/campanha, embora custo, audiência e criativo possam elevar o risco conforme o conteúdo.

Recomenda-se classificar a sensibilidade também por atributo, não apenas por nó; aplicar controle de acesso por finalidade; registrar consentimento e revogação; manter trilha de auditoria; anonimizar ou agregar cohort/benchmark; e vincular `model_version_id` a cada recomendação, match e score que afete uma pessoa.

## 6. MVP versus estado futuro

### Núcleo recomendado para MVP

1. **Identidade e relacionamento:** Pessoa, Empresa, Vínculo e Fornecedor/solução.
2. **Demanda e capacidade:** Oportunidade, Competência e Evidência de competência.
3. **Sinal mínimo:** Diagnóstico e Interação.
4. **Execução e rastreabilidade:** Jornada, Participação e Programa/projeto.
5. **Governança mínima obrigatória:** Consentimento, além de identificadores de origem, auditoria e controles básicos.
6. **Resultado inicial:** Indicador de negócio e Outcome individual, desde que suas definições de período e baseline estejam fechadas.

Esse recorte permite provar matching, ativação, participação e resultado sem exigir toda a malha financeira, benchmarking ou MLOps. `Match` pode entrar no MVP se a proposta central for conexão oferta-demanda; nesse caso, sua explicação, critérios e versão precisam ser obrigatórios.

### Estado futuro

Contrato e Transação para economia unitária completa; Recomendação e Versão de modelo para inteligência adaptativa; Cohort e Benchmark para atribuição/fairness; Risco/controle para GRC integrado; Conteúdo/campanha para otimização de aquisição; e integração completa de sistemas com atualização em tempo real e reconciliação. Esses nós ampliam valor, mas aumentam dependências, requisitos de qualidade, segurança e governança.

## 7. Dependências e relações prováveis

O CSV não traz arestas, mas as dependências de negócio mais prováveis são:

- Pessoa/Empresa/Entidade/Fornecedor → Vínculo, Oportunidade e Participação;
- Oportunidade + Competência + Evidência → Match e Recomendação;
- Pessoa + Diagnóstico + Interação → Jornada e Outcome individual;
- Jornada/Programa + Participação → Indicador de negócio e Outcome;
- Contrato → Transação → Indicador de negócio;
- Indicador + segmento + período → Cohort e Benchmark;
- Consentimento → autorização de Interação, Diagnóstico, Participação, Outcome e uso de dados pessoais;
- Versão de modelo → Recomendação, Match e eventuais scores derivados;
- Risco/controle → processos, contratos, tratamento de dados e decisões automatizadas;
- Conteúdo/campanha → Interação, Oportunidade e atribuição de pipeline.

Essas relações devem ser formalizadas em uma aba de conexões ou dicionário relacional, com cardinalidade, direção, chave de origem, chave de destino, temporalidade e regra de atualização.

## 8. Achados de qualidade

**Pontos fortes:** cobertura ampla do ciclo identidade→demanda→capacidade→ação→resultado; chaves nomeadas consistentemente; granularidades legíveis; fonte, sensibilidade e atualização presentes para todos os nós; contribuição para valor explicita a hipótese de utilidade.

**Lacunas:** nenhuma tipagem de dados, domínio permitido, nulabilidade ou formato; ausência de owner/steward, SLA, retenção e linhagem; falta de chaves estrangeiras e arestas; termos potencialmente ambíguos (“Entidade”, “Diagnóstico”, “Interação”, “Outcome”); ausência de versão do esquema; nenhuma regra de deduplicação, reconciliação ou idempotência; sensibilidade apenas no nível do nó; e ausência de critério de aceite para “tempo real”, “evento” e scores.

## 9. Implicações, riscos e perguntas em aberto

### Implicações

- O modelo pode ser a espinha dorsal de uma camada semântica comum entre CRM, HRIS, ERP, LMS, tracking e BI.
- A combinação de fatos operacionais com resultados permite atribuição e cálculo de valor, mas somente com janelas temporais e vínculo causal bem definidos.
- A presença de Consentimento e Versão de modelo desde o desenho favorece auditabilidade, explicabilidade e evolução segura.

### Riscos

- Chaves insuficientes ou duplicadas podem corromper joins, cohorts, atribuição e indicadores financeiros.
- Mistura de snapshot, evento e entidade mestre pode gerar contagens duplicadas e resultados não comparáveis.
- Dados de alta/crítica sensibilidade podem ser usados sem finalidade, base legal ou segregação adequadas.
- Matches, recomendações e benchmarks sem versão, evidência ou controles de fairness criam decisões não reproduzíveis e risco regulatório.
- Frequências heterogêneas podem produzir dashboards com dados defasados sem sinalização de frescor.
- “Contribuição para valor” é uma hipótese de valor, não uma métrica validada; requer definição de baseline e experimento.

### Perguntas

1. Qual sistema é a fonte de verdade de cada nó e quem é seu data owner/steward?
2. As chaves são globais entre sistemas ou há uma camada de mapeamento de IDs?
3. Quais relações e cardinalidades devem existir entre pessoa, empresa, entidade, programa e oportunidade?
4. O que significa “tempo real” em latência, disponibilidade e reprocessamento?
5. Quais campos, finalidades e bases legais cobrem cada uso de Pessoa, Diagnóstico, Interação e Outcome?
6. Como serão calculados baseline, confiança, causalidade, fairness e anonimização?
7. Quais nós são obrigatórios no primeiro produto e quais são apenas visão futura?

## 10. Prontidão e recomendações

**Prontidão geral: conceitual/semântica — média.** O catálogo está pronto para orientar discovery, desenho de domínio e priorização do MVP, mas não para implementação direta de pipelines, banco ou contratos de API.

Recomendações priorizadas:

1. Classificar cada nó como mestre, dimensão, fato, evento, derivado ou controle e documentar a regra.
2. Criar dicionário de dados com tipo, formato, domínio, nulabilidade, exemplo, owner, retenção e classificação por atributo.
3. Adicionar arestas com cardinalidade, chaves estrangeiras, vigência, fonte e direção do fluxo.
4. Definir estratégia de identidade (ID canônico, mapeamento, deduplicação e idempotência).
5. Fechar o recorte MVP e critérios de aceite para valor, frescor, cobertura e qualidade.
6. Tornar Consentimento, auditoria, finalidade e revogação requisitos de entrada para qualquer nó pessoal/sensível.
7. Versionar esquema, taxonomias, instrumentos de diagnóstico e modelos; propagar `model_version_id` aos resultados derivados.
8. Definir SLAs por classe de atualização e expor frescor/qualidade nos produtos analíticos.

## 11. Conclusão

`02_Nos_de_Dados.csv` oferece um catálogo forte e abrangente para o mapa neural da HUB, com identidade, granularidade, fontes, sensibilidade, atualização e hipótese de valor. Seu principal limite é estar no nível de ontologia: faltam relações formalizadas, contratos físicos, regras de qualidade e governança operacional. O próximo passo recomendado é transformar o núcleo MVP em um modelo semântico versionado, com Consentimento e rastreabilidade como requisitos transversais, antes de conectar fontes ou prometer indicadores de negócio.
