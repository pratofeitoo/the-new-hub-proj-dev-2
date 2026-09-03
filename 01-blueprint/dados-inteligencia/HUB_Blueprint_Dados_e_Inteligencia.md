---
title: Blueprint de Dados e Inteligência do HUB
blueprint_id: BP-003
status: draft
layer: blueprint
area: data-intelligence
source_task: "[[04-project-management/tarefas/BP-003_HUB_Blueprint_Dados_e_Inteligencia]]"
created: 2026-08-21
updated: 2026-08-21
gap_ids: [DAT-001, DAT-002, DAT-003, DAT-004, DAT-005, DAT-006, DAT-008, DAT-010]
---

# Blueprint de Dados e Inteligência do HUB

> [!info] Limite de maturidade e evidências
> Este é um blueprint semântico, não um schema de produção, um sistema de medição certificado, uma determinação legal ou uma aprovação financeira. Uma métrica, um modelo ou uma trajetória de ROI catalogados são definições pretendidas até que seu caminho de evidências, responsável, testes e estado de aprovação sejam registrados. O blueprint preserva a intenção semântica, deixando as escolhas de tecnologia física para o refinamento.

## 1. Entidades canônicas, nós, relacionamentos, chaves, tipos de objeto e regras temporais

O sistema de dados representa a cadeia `fontes → identidades → sinais → inteligência → ação → resultado → valor financeiro` nos seis módulos conceituais de [[01-blueprint/estrategia/HUB_Fundacao_Blueprint_Projeto|HUB Intelligence, HUB Journey, HUB Solutions, HUB Connections, HUB Academy and HUB Recognition]]. Os objetos canônicos são governados por significado e propriedade, não por um banco de dados, fornecedor ou padrão de armazenamento específico.

### Famílias de objetos canônicos

| Família | Objetos canônicos | Propósito semântico |
|---|---|---|
| Identidade e organização | Person, Company, Entity, Institution, Supplier, Specialist, Relationship | Atores estáveis e os relacionamentos tipados entre eles. `Entity` é um tipo de objeto controlado, não um substituto para todo ator. |
| Capacidade e evidência | Skill, Skill Evidence, Assessment, Credential, Cohort | O que um ator consegue fazer, o que sustenta essa afirmação, como foi avaliado e qual população de comparação se aplica. |
| Oportunidade e interação | Opportunity, Need, Match, Introduction, Interaction, Participation | Demanda, conexão proposta e engajamento observável; uma recomendação ou correspondência não é um resultado. |
| Entrega de trabalho e oferta | Journey, Recommendation, Action, Program, Project, Content/Campaign, Solution | Intervenções configuradas e ações realizadas por meio de C.A.O.S. (`Contexto → Arquitetura → Operação → Sustentação`). |
| Comercial e resultados | Contract, Transaction, Business Metric, Individual Outcome, Ecosystem Outcome, Financial Value | Fatos comerciais, resultados operacionais e alegações de valor com estados explícitos de evidência. |
| Governança e inteligência | Consent, Purpose, Data Source, Event, Indicator, Taxonomy, Formula, Model Version, Evidence Record, Risk/Control, Change/Correction | Permissão, proveniência, definições de medição, controles de decisão e histórico reversível de mudanças. |

### Semântica de chaves e relacionamentos

Todo objeto canônico possui um `canonical_id` globalmente único e imutável, um `object_type`, `tenant_id` ou escopo do ecossistema quando aplicável, `created_at`, `updated_at`, `valid_from`, `valid_to`, `record_status` e uma referência de proveniência. Os identificadores de origem permanecem anexados como aliases com namespace (`source_system`, `source_object_type`, `source_id`) e nunca são promovidos silenciosamente a identidade canônica. Um relacionamento é, por si só, um objeto de primeira classe quando possui uma função, evidência, status, datas de vigência ou permissões.

As regras de chave lógica são:

* **Chave primária:** `canonical_id` identifica o objeto semântico e não muda com correção, fusão ou migração de origem.
* **Chave estrangeira:** um relacionamento referencia os IDs canônicos de seu sujeito e objeto, com `relationship_type`, cardinalidade, confiança, proveniência e validade temporal.
* **Chave natural/de negócio:** valores como registro fiscal, e-mail ou número de contrato podem auxiliar a correspondência, mas não são chaves universais; são sensíveis, mutáveis e limitados ao escopo.
* **Chave de evento:** `event_id` é único para uma ocorrência; `event_type`, `schema_version`, `occurred_at`, `recorded_at`, produtor e sujeito identificam sua interpretação.
* **Chave de métrica:** `indicator_id` mais a versão identificam uma definição; um valor também exige período de observação, dimensões, população/denominador, versão da fórmula e estado de evidência.
* **Chave de evidência:** `evidence_id` identifica uma afirmação ou artefato de origem, com hash/referência, coletor, autorização, qualidade e status de revisão.

As cardinalidades centrais são deliberadamente explícitas: uma Person ou Company pode ter muitos aliases, skills, interações, oportunidades, contratos e resultados; uma Skill pode ter muitos registros de evidência e avaliações; uma Journey contém ações ordenadas e pode receber muitas recomendações; um Match conecta uma oportunidade a um ou mais sujeitos candidatos por meio de uma decisão versionada; um Outcome pode ser sustentado por muitos registros de evidência e vinculado a muitas ações, mas a atribuição deve impedir a duplicação de valor; um Consent pode autorizar muitos campos para uma finalidade e deve propagar-se a todo uso derivado.

### Regras temporais

O modelo separa **tempo de validade** (quando um fato é verdadeiro no mundo representado), **tempo do evento** (quando uma atividade ocorreu) e **tempo do sistema** (quando o HUB recebeu ou alterou o registro). Os intervalos usam convenções explícitas de inclusão/exclusão e fuso horário. Eventos que chegam atrasados mantêm o tempo original de ocorrência; correções acrescentam uma versão sucessora em vez de sobrescrever o histórico. Relacionamentos como emprego, associação, consentimento, recomendação, contrato e participação exigem intervalos de vigência. As métricas usam uma janela de observação, corte, fuso horário, definição de coorte e snapshot de denominador declarados. O reprocessamento pode criar um novo resultado derivado, preservando o resultado anterior e as entradas do cálculo.

Este contrato lógico aborda [[00-project-control/registro-lacunas/lacunas/DAT-001|DAT-001]], mas não afirma que chaves primárias, chaves estrangeiras, índices ou tabelas de armazenamento físicas estejam aprovados. O entregável de refinamento é um modelo lógico e físico aprovado; a aprovação da arquitetura de dados continua pendente.

> **Refinamento P03-T01 (M03.A):** proposta detalhada com 25 entidades (PK estável), 12 relacionamentos com cardinalidade/temporalidade, tipos de objeto e diagrama ER em [[02-refinement/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|modelo-logico-fisico-P03-T01-v1.md]] — atende G03.A1 para revisão Dados+Tech.

## 2. Arquitetura de indicadores de origem conectada às capacidades do produto e aos resultados de negócio

O catálogo de aproximadamente 73 indicadores e a árvore de valor com 12 alavancas são tratados como um grafo de dependências semânticas, não como um backlog de dashboards. Cada indicador deve conectar quatro camadas:

1. **Origem e sinal:** sistema de origem, evento ou evidência submetida; finalidade de coleta, qualidade e permissão.
2. **Medida semântica:** definição canônica, população, dimensões, fórmula e versão.
3. **Capacidade do produto:** o módulo e o workflow que podem observar, influenciar ou agir sobre o sinal.
4. **Resultado e decisão:** a etapa de C.A.O.S., responsável pela decisão, resultado esperado e caminho de evidências até uma alavanca de valor financeiro ou do ecossistema.

| Capacidade do produto | Família representativa de origem/indicador | Resultado pretendido para o negócio ou ecossistema | Caminho de evidências necessário |
|---|---|---|---|
| HUB Intelligence: diagnóstico e maturidade | Assessments, skills, evidence, cohort benchmarks, risk/control signals | Lacunas de capacidade priorizadas e baseline defensável | Instrumento de avaliação versionado → evidência revisada → snapshot do baseline → registro de decisão. |
| HUB Journey: planos e progresso | Journey stages, actions, participation, completion and adoption events | Progresso de implementação, tempo até produtividade, retenção ou desenvolvimento de capacidade | Fluxo de eventos de ação → regra de denominador/coorte → registro de progresso → acompanhamento do resultado. |
| HUB Solutions: curadoria | Supplier, specialist, content, intervention quality and utilization | Intervenções mais adequadas, eficiência de compras e menor fricção de busca | Decisão do curador → registro de elegibilidade/evidência → revisão de uso/adequação → resultado downstream. |
| HUB Connections: matching | Opportunity, profile, skills, match, introduction, interaction and conversion | Relacionamentos qualificados, contratos, receita ou acesso ao ecossistema | Versão do Match → revisão/aceitação humana → introdução/interações → contrato/transação ou não conversão documentada. |
| HUB Academy: aprendizagem | Enrollment, attendance, learning events, assessment and credential evidence | Aquisição de capacidade e tempo até produtividade | Evento de aprendizagem autorizado → evidência de avaliação → aplicação no workflow → comparação de resultados. |
| HUB Recognition: Selo HUB | Criteria, submissions, evaluator decisions, controls and appeals | Reconhecimento confiável, sinalização e participação no ecossistema | Versão dos critérios → evidência de avaliador independente → registro de aprovação/recurso → alegação pública controlada. |
| Operações comerciais e de impacto | Contract, transaction, finance, procurement, HR, campaign and program data | Produtividade, compras, risco, receita incremental, receita recorrente do HUB e impacto | Livro de origem → linhagem da métrica → vínculo com intervenção/ação → política de atribuição → revisão financeira/de governança. |

A ponte pretendida para as ofertas é: [[HUB Negócios]] é responsável pelos serviços comerciais e pela implementação; [[Instituto HUB]] cuida da atividade de impacto restrita ou missionária, sujeita à separação; [[Plataforma HUB]] fornece software, dados e workflows compartilhados; a marca HUB governa o método e os padrões. Esses links são apenas dependências semânticas. **Depende de BP-001:** limites exatos entre oferta, comprador e unidade. **Depende de BP-002:** capacidade do produto e contratos operacionais. Nenhum dos dois é inferido aqui.

Indicadores antecedentes (atividade, adoção, conclusão), indicadores operacionais (tempo de ciclo, saúde da fila), indicadores descritivos (contagens e taxas), indicadores experimentais (efeitos baseados em comparação) e indicadores financeiros (valores reconciliados com o livro contábil) devem ser tipados separadamente. Um dashboard de produto pode exibir todos os tipos, mas seus rótulos, denominador, atualidade e estado de evidência devem tornar a distinção visível. Uma métrica se torna uma alegação de negócio somente quando seu registro de evidência e gate de aprovação permitem esse uso; pertencer ao catálogo nunca certifica ROI, impacto ou causalidade. Isso fecha a conexão semântica exigida por [[00-project-control/registro-lacunas/lacunas/DAT-005|DAT-005]] em termos de blueprint, deixando a implementação e a aprovação em aberto.

## 3. Versionamento de eventos, indicadores, taxonomias, fórmulas, modelos e evidências

> **M0 táticos promovidos do recorte Monks (P03-T05):** `KPI-PERF-01 Atingimento (PES-02 proxy)`, `KPI-PERF-02 Qualidade meta (DAT-01 proxy)`, `KPI-ALO-01 Alocação (RH-09 proxy)`, `KPI-ALO-02 Receita perdida (FIN-06 proxy)` — definições congeladas em [[02-refinement/modelos-financeiros/HUB_Glossario_Financeiro_Congelado_v1|Glossário Financeiro Congelado v1]].

O versionamento faz parte do significado. Nenhum produtor, dashboard, decisão ou alegação pública pode depender de um schema de evento, definição de indicador, taxonomia, fórmula, modelo ou interpretação de evidência sem versão.

### Envelope canônico de evento

Todo evento deve carregar: `event_id`; `event_type`; `schema_version`; `producer`; `tenant/ecosystem`; `subject_canonical_id` e referências de objeto; `occurred_at`; `recorded_at`; `valid_from/to` quando aplicável; payload; referência de origem; referência de consentimento/finalidade; chave de idempotência; IDs de correlação/causalidade; status de qualidade; e classificação de segurança. Os produtores devem publicar metadados de contrato. Os consumidores devem rejeitar, colocar em quarentena ou adaptar explicitamente versões desconhecidas, em vez de fazer suposições.

A identidade do evento é idempotente no namespace do produtor mais a chave de idempotência (ou um hash determinístico documentado). A entrega duplicada não cria atividade de negócio duplicada. Os contratos de evento distinguem fatos imutáveis de correções e retiradas. Mudanças de schema são classificadas como compatíveis, aditivas, breaking ou semânticas; mudanças breaking e semânticas exigem uma nova versão major, migração/adaptador e aprovação dos consumidores. O replay usa as versões originais dos eventos e um snapshot declarado de código/configuração, gerando um novo identificador de execução derivada.

### Artefatos semânticos versionados

| Artefato | Conteúdo obrigatório da versão | Regra de promoção e rollback |
|---|---|---|
| Taxonomia | Termos, hierarquia, aliases, tipos de objeto, inclusão/exclusão, localidade e datas de vigência | A nova versão preserva os mapeamentos anteriores; o backfill é explícito e reversível. |
| Indicador | Nome, intenção, população, numerador, denominador, dimensões, granularidade, unidade, atualidade, responsável e classe de evidência | A versão muda quando o significado ou a população mudam; os valores anteriores continuam atribuíveis à definição antiga. |
| Fórmula | Expressão, dependências, arredondamento, política de nulo/zero, moeda/fuso horário, hash de código/configuração e fixtures de teste | O recálculo produz uma nova execução/versão; valores publicados não podem ser reescritos silenciosamente. |
| Modelo | Janela dos dados de treinamento, features, target, método, hash do artefato do modelo, limiar, testes de fairness/drift, limitações e aprovador | A liberação exige model card e gate; o rollback seleciona uma versão aprovada anterior e preserva as decisões já tomadas. |
| Registro de evidência | Origem, horário da captura, consentimento/finalidade, hash do artefato, revisor, qualidade, confiança, vínculo e expiração | Correções substituem ou invalidam o registro com justificativa; o original permanece auditável. |

Um grafo de dependências de indicadores deve expor quais eventos, dimensões, fórmulas, modelos, dashboards, decisões e alegações dependem de cada versão. Cada valor publicado possui `definition_version`, `formula_version`, `run_id`, snapshot da origem, estado de evidência e estado de revisão/aprovação. Esta é a resposta semântica pretendida a [[00-project-control/registro-lacunas/lacunas/DAT-003|DAT-003]] e apoia o requisito de evidência de [[00-project-control/registro-lacunas/lacunas/DAT-004|DAT-004]]; testes de contrato, testes de replay e controles de publicação continuam sendo trabalho de refinamento.

## 4. Valor potencial, influenciado, validado e realizado

Os estados de valor descrevem confiança e proximidade causal, não uma classificação de qualidade. Eles nunca devem ser colapsados em um único número de “impacto” ou ROI.

| Estado | Significado | Uso permitido | Caminho mínimo de evidências |
|---|---|---|---|
| **Potencial** | Uma oportunidade ou capacidade modelada caso uma intervenção seja bem-sucedida sob as premissas declaradas. | Priorização, planejamento de cenários e formação de hipóteses. | Premissas explícitas → baseline/denominador → fórmula do cenário → sensibilidade e responsável. |
| **Influenciado** | Uma mudança observada temporalmente associada à atividade do HUB, sem contrafactual ou prova de atribuição suficientes. | Aprendizado operacional e reporte interno qualificado. | Métrica de origem → vínculo com intervenção/ação → janela temporal → confundidores e limitações de atribuição. |
| **Validado** | Um resultado que passou por um protocolo de medição, comparação ou revisão acordado, com qualidade da evidência e limites de atribuição documentados. | Reporte condicional ao cliente ou à governança; não é automaticamente uma certificação financeira. | Protocolo predefinido → baseline/comparação ou desenho justificado → cálculo reproduzível → revisão independente. |
| **Realizado** | Um valor validado reconhecido em um registro operacional ou financeiro oficial, líquido de custos, timing e alegações duplicadas. | Reporte aprovado pela área financeira, sujeito às regras de entidade e contabilidade. | Resultado validado → contrato/livro contábil/registro operacional aprovado → reconciliação → aprovação financeira. |

A atribuição deve declarar unidade de análise, janela de tratamento/ação, baseline, método contrafactual ou de comparação, parcela atribuída, confiança/incerteza, defasagem, exclusões e regras de parada. A deduplicação usa um registro de alegações de valor indexado por beneficiário, alavanca, período, intervenção e origem; alegações sobrepostas exigem alocação ou são rejeitadas. O valor não pode ser contabilizado simultaneamente como receita incremental e valor de marketplace sem uma regra explícita de não sobreposição. As regras temporais impedem que resultados pós-período sejam alegados antes do encerramento da janela de observação.

As alavancas da árvore de valor (produtividade, tempo até produtividade, retenção, recrutamento, compras, risco, receita incremental, receita recorrente do HUB, marketplace, entidade/associação, marketing e inovação/novos mercados) são hipóteses até que cada uma tenha uma origem e um caminho de evidências definidos. Os valores ilustrativos de ROI na fundação continuam ilustrativos e não certificados. Este blueprint não converte receita influenciada, matches, adoção ou fórmulas catalogadas em caixa ou margem. Políticas formais de cálculo e aprovação de governança de finanças/dados são os requisitos em aberto de [[00-project-control/registro-lacunas/lacunas/DAT-006|DAT-006]].

## 5. Resolução de identidade, linhagem, consentimento, retenção, exclusão, replay e conceitos de correção

### Resolução de identidade

A resolução de identidade mapeia registros de origem para objetos canônicos, preservando incerteza e reversibilidade. A correspondência usa chaves determinísticas quando forem lícitas e confiáveis, seguida de revisão probabilística explicável ou humana quando necessário. Cada correspondência candidata armazena evidência, pontuação/confiança, versão da regra/modelo, revisor, timestamp e decisão. A fusão cria uma identidade canônica sobrevivente mais um evento de fusão; aliases e links de origem continuam consultáveis. Divisões e desfusões são correções de primeira classe. A sobrevivência é específica por campo, autorizada pela origem e sensível ao tempo; não deve apagar fatos conflitantes da origem. Os testes de resolução devem medir fusões falsas, correspondências perdidas, taxa de revisão manual e reversibilidade em datasets representativos, conforme exigido por [[00-project-control/registro-lacunas/lacunas/DAT-002|DAT-002]].

### Linhagem e autoridade da origem

A linhagem é uma cadeia direcionada: registro/evento de origem → registro normalizado → identidade/objeto canônico → evidência/observação → execução de indicador/fórmula/modelo → dashboard/decisão → ação → resultado → alegação de valor. Cada aresta registra transformação, versão, ator/serviço, tempo, qualidade e autorização. Artefatos brutos da origem são retidos como proveniência imutável quando permitido; artefatos corrigidos são separados, justificados e vinculados; artefatos derivados declaram entradas e IDs de execução. A política lógica de source of truth é: os sistemas de origem permanecem autoritativos para seus próprios fatos operacionais, a camada canônica do HUB é autoritativa para identidades resolvidas e semântica entre sistemas, e data marts/dashboards derivados são autoritativos apenas para seu escopo de apresentação declarado. Nenhuma camada sobrescreve outra silenciosamente. [[00-project-control/registro-lacunas/lacunas/DAT-010|DAT-010]] continua em aberto até que as contradições do registro de correções e o status de proveniência sejam resolvidos.

### Consentimento, finalidade e dados derivados

Cada aresta de campo/uso mapeia finalidade, base legal, função de controlador/operador, escopo do titular dos dados, sensibilidade, destinatários, classe de retenção e derivados permitidos. O consentimento (quando a base legal é consentimento) é versionado, granular, limitado no tempo quando aplicável e revogável. As restrições de finalidade propagam-se para artefatos normalizados, canônicos, de features, métricas, modelos, exportações, caches e alegações públicas. Não se presume que agregação ou anonimização remova obrigações; a transformação e o risco de reidentificação são registrados. As decisões de acesso e publicação avaliam tanto as permissões do objeto quanto as permissões de finalidade. Este contrato semântico está sujeito à confirmação da LGPD/jurídica e aborda [[00-project-control/registro-lacunas/lacunas/DAT-008|DAT-008]].

### Retenção, exclusão e portabilidade

As classes de retenção definem períodos mínimo e máximo, eventos de disparo, retenções legais e responsável. Solicitações de exclusão ou expiração criam um job de ciclo de vida rastreável que abrange registros vinculados à origem, aliases, objetos canônicos, evidências, features, caches, índices de busca, backups, exportações e cópias de parceiros, sujeito a exceções lícitas. Quando não for possível excluir um agregado compartilhado, o sistema documenta a anonimização, o risco residual e a base da política. A exclusão não reescreve evidências de auditoria além do permitido pela lei; os registros de auditoria retêm o tipo de evento, a autorização e referências minimizadas de forma irreversível. As exportações de portabilidade usam um schema declarado e incluem metadados de proveniência e interpretação sem expor os dados de outro titular.

### Replay, reconciliação e correção

Replay é o reprocessamento determinístico de um snapshot imutável de evento/origem com versões declaradas dos artefatos. Ele deve ser isolado da publicação em produção até que a reconciliação compare contagens, chaves, totais, duplicatas, eventos atrasados e deltas esperados. Uma correção registra justificativa, solicitante, aprovador, objetos afetados, interpretação antiga/nova, tempo de vigência e artefatos downstream. Correções não excluem a alegação original; elas a substituem, invalidam ou alteram. Um registro de correções vincula-se a execuções de reprocessamento e retiradas de publicação. Isso permite que artefatos de origem, corrigidos e derivados permaneçam distinguíveis, fornecendo ao mesmo tempo um caminho autoritativo de linhagem; controles executáveis, testes de DSAR e testes de replay são trabalho de refinamento/aprovação sob as lacunas relacionadas.

## Premissas em aberto e decisões não resolvidas

| Premissa | IDs de lacunas afetados | Ação de refinamento |
|---|---|---|
| Uma identidade canônica compartilhada pode abranger ofertas do HUB e sistemas de parceiros sem violar limites de tenant, finalidade ou legais. | DAT-001, DAT-002, DAT-008 | Aprovar o modelo lógico de entidade/tenancy, executar testes de correspondência representativos e obter revisão da LGPD/jurídica. |
| Os sistemas de origem, a camada canônica do HUB e a camada corrigida podem ter autoridade explicitamente delimitada sem dashboards contraditórios. | DAT-001, DAT-004, DAT-010 | Produzir matriz de source of truth, política de correção, testes de proveniência e aprovação do responsável. |
| Um envelope comum de eventos pode suportar workflows de CRM, plataforma, HRIS, ATS, LMS, ERP/finanças, compras, mídia e impacto. | DAT-003, DAT-005 | Inventariar produtores/consumidores, especificar contratos e passar nos testes de compatibilidade, idempotência e replay. |
| O catálogo de indicadores existente pode ser reduzido a uma única camada semântica canônica sem perder o contexto específico da oferta. | DAT-005 | Construir grafo de dependências de métricas, identificar definições duplicadas e aprovar convenções de responsável/denominador. |
| A atribuição de resultados pode separar associação de causalidade e impedir dupla contagem entre as alavancas de valor. | DAT-004, DAT-006 | Definir protocolos, regras de comparação/contrafactual, registro de alegações e aprovação de governança de finanças/dados. |
| Consentimento, restrições de finalidade e exclusão podem propagar-se para métricas, modelos, caches, backups e exportações de parceiros derivados. | DAT-008 | Construir matriz finalidade-para-campo/ciclo de vida e executar testes de propagação, exclusão e portabilidade. |
| Fórmulas e modelos versionados podem ser reproduzidos de forma consistente apesar de eventos atrasados, dados corrigidos e dependências mutáveis. | DAT-003, DAT-004, DAT-010 | Definir contratos de snapshot/execução, controles de registro, limiares de reconciliação e procedimentos de rollback. |
| Os limites de produto e oferta fornecerão responsáveis estáveis pelas capacidades e contextos de decisão para os indicadores. | DAT-005, DAT-006 | **Depende de BP-001/BP-002:** publicar o mapeamento de oferta para capacidade e responsável antes da aprovação da métrica. |

Todas as premissas permanecem em aberto até que a definição, dependência, evidência, responsável accountable e condição de aprovação da lacuna vinculada sejam satisfeitas. Nenhuma premissa acima é um fato certificado.

## Dependências entre blueprints

* **Depende de BP-001:** arquitetura de ofertas, comprador/troca de valor, limites de unidade e propriedade comercial. A semântica de dados não deve inventar qual oferta é proprietária de uma métrica ou valor realizado.
* **Depende de BP-002:** taxonomia de capacidades do produto, estados da jornada, funções, permissões, comportamento de tenant e limites entre humano/automação. Eventos e indicadores exigem esses contextos estáveis.
* **Depende do blueprint de governança/jurídico:** funções de controlador/operador, bases legais, avisos da LGPD, independência do Selo HUB, exceções de retenção, IP e autoridade sobre alegações públicas.
* **Depende do blueprint de finanças/valor:** autoridade do livro contábil, classificação de receita, tratamento contábil, alocação de custos, reconhecimento de benefícios e aprovação do valor realizado.
* **Depende do blueprint de tecnologia/integração:** atribuições de system of record, contratos de interface, limites de implantação, controles de segurança, metas de confiabilidade e mecanismos físicos de replay.
* **Alimenta os blueprints de lançamento e aprovação:** pacotes de evidências, gates de publicação de métricas/modelos, testes de direitos sobre dados, dashboards operacionais e critérios integrados de prontidão.

Até que essas dependências sejam resolvidas, esta nota define apenas o contrato semântico e os caminhos de evidência pretendidos. Ela não autoriza implementação em produção, alegações públicas, decisões do Selo HUB, certificação financeira ou lançamento.
