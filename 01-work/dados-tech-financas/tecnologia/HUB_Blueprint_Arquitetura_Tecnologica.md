---
title: "Blueprint de Arquitetura de Tecnologia do HUB"
blueprint_id: BP-004
status: em-elaboracao
layer: blueprint
area: technology
source_task: "[[04-project-management/tarefas/BP-004_HUB_Blueprint_Arquitetura_Tecnologica]]"
created: 2026-08-21
updated: 2026-08-21
gap_ids: [TEC-001, TEC-002, TEC-003, TEC-004, TEC-005, TEC-006, TEC-007]
---

# BP-004 — Blueprint de Arquitetura de Tecnologia do HUB

> [!warning] Limite de maturidade
> Este é um blueprint de arquitetura-alvo. Ele descreve fronteiras, responsabilidades e requisitos para refinamento; não descreve um sistema implantado, fornecedores selecionados, um compromisso de implementação ou prontidão para produção. A evidência atual afirma explicitamente que nenhuma implementação de produção está evidenciada em [[01-work/mercado-e-direcao/estrategia/HUB_Fundacao_Blueprint_Projeto]].

## 1. Fronteiras de plataforma, warehouse/lakehouse, inteligência, consentimento e integração

### Fronteira da plataforma-alvo

A **Plataforma HUB** é a fronteira de produto e fluxo de trabalho para configuração multi-tenant, onboarding, diagnóstico, revisão de evidências, jornadas, recomendações, soluções, conexões, aprendizado e fluxos de reconhecimento. Ela deve expor serviços de domínio estáveis em vez de transformar cada oferta em uma integração sob medida. Os seis módulos conceituais são [[HUB Intelligence]], [[HUB Journey]], [[HUB Solutions]], [[HUB Connections]], [[HUB Academy]] e [[HUB Recognition]], com os estágios C.A.O.S. representados como estados de fluxo de trabalho rastreáveis.

A plataforma é dona dos comandos operacionais e do estado voltado ao usuário: configuração de tenant/contexto, atribuição de atores e papéis, estado do fluxo de questionários e evidências, ações de jornada, recomendações curadas, estado de match e introdução, decisões de revisão, eventos de auditoria e filas de operadores. Interpretação, matching, curadoria e reconhecimento de alto impacto permanecem sob controle humano até que seus portões de evidência e aprovação existam. Um registro na plataforma não é automaticamente uma alegação financeira ou causal.

A plataforma-alvo é uma fronteira de aplicação modular, não um compromisso com microsserviços. O refinamento deve escolher a forma implantável mais simples que preserve a propriedade de domínio, o isolamento por tenant, a auditabilidade e a evolução independente das cargas de trabalho intensivas em integração. APIs síncronas atendem comandos e consultas interativas; processamento assíncrono atende importações, processamento de evidências, cálculo de métricas, notificações e propagação downstream.

### Fronteira warehouse/lakehouse

O warehouse/lakehouse é a fronteira analítica e de evidências. Ele recebe extrações governadas das fontes e eventos da plataforma via ELT, preserva dados imutáveis de landing/raw e produz camadas padronizadas, curadas e de serving. Ele é dono do histórico analítico, joins entre fontes, cálculo de métricas, linhagem, snapshots reproduzíveis e marts de valor/evidência; ele não se torna a fonte operacional da verdade para o estado dos fluxos de trabalho.

As camadas-alvo são:

1. **Landing/raw** — payloads fiéis às fontes, metadados de ingestão, contexto de consentimento/finalidade e identificadores imutáveis de chegada.
2. **Padronizada** — registros tipados, normalizados e deduplicados com chaves de origem, chaves canônicas, versão de schema e status de qualidade.
3. **Semântica curada** — entidades canônicas, relacionamentos, eventos, indicadores, coortes, versões de modelo e validade temporal alinhados a [[HUB_Fundacao_Blueprint_Projeto]].
4. **Marts de serving** — visões aprovadas de operações, produto, finanças e impacto, cada uma com dono, denominador, linhagem e status de evidência.

O design físico permanece sujeito ao refinamento de [[DAT-001 — Canonical entity model]] e [[DAT-003 — Canonical event envelope]]. Registros corrigidos devem reter a proveniência da fonte; métricas derivadas nunca devem sobrescrever evidências da fonte. O lakehouse pode suportar cargas de trabalho de grafos ou feature serving, mas essas são projeções downstream, não autoridades alternativas sem uma decisão explícita de propriedade.

### Fronteira de inteligência

HUB Intelligence é uma capacidade governada através das camadas de plataforma e dados. Diagnósticos descritivos, checagens de qualidade de evidência, cohorting, recomendações e matching podem ser progressivamente automatizados; resultados de alto impacto exigem revisão humana responsável, explicabilidade, caminhos de override e apelação. Saídas de modelos ou regras devem carregar versão de modelo/regra, snapshot de entradas, finalidade, confiança ou status de qualidade, estado de revisão e metadados de expiração/reevalidação.

A fronteira de inteligência separa valor potencial, influenciado, validado e realizado. Ela não pode alegar impacto financeiro realizado apenas a partir de atividade, adoção, pipeline ou um match. A linhagem de métricas e modelos exigida por [[DAT-004 — Traceable value lineage]] e [[DAT-007 — Measurement and model validation]] é pré-requisito para alegações públicas ou financeiras. Capacidades preditivas, de uplift e benchmarks anônimos são estágios-alvo, não capacidades atualmente disponíveis.

### Fronteira de consentimento e privacidade

Gestão de consentimento é uma fronteira de política e propagação, não meramente uma caixa de seleção na plataforma. Todo fluxo de dados deve carregar finalidade, status de base legal, escopo, ator/tenant, fonte de coleta, classe de retenção e timestamps de vigência/revogação. Decisões de consentimento e finalidade devem ser aplicadas na ingestão, acesso operacional, transformação analítica, uso de modelos, exportações, notificações e entrega a parceiros.

O design-alvo suporta limitação de finalidade, minimização, DSAR/exclusão, portabilidade, correção, tratamento de dados derivados e propagação de saída através de plataforma, lakehouse, caches, backups e fornecedores. Papéis de controlador/operador e tratamento LGPD permanecem decisões de governança por fluxo. Atividade restrita do Instituto HUB, atividade comercial do HUB Negócios e avaliação relacionada a reconhecimento não devem ser conflacionadas por um caminho de dados compartilhado sem base legal e operacional aprovada.

### Fronteira de integração e sequenciamento

A fronteira de integração contém adaptadores, validação de contratos, mapeamento de identidade, aplicação de consentimento, controles de taxa, retries, quarentena e telemetria de entrega. Ela isola a volatilidade externa da lógica central de domínio. Integrações candidatas de M0 são CRM, plataforma, consentimento, entidade/identidade e backbone do warehouse; M1 adiciona HRIS, ATS, LMS, finanças, procurement, inteligência e marketing; M2 adiciona finanças do cliente, BI do cliente e sistemas de risco/controle. Esta é lógica de sequenciamento, não um compromisso com fornecedores ou datas.

Contratos de integração devem definir payloads, endpoints/tópicos, autenticação, propriedade, versionamento, idempotência, semântica de erro, limites de taxa, classificação de dados e descontinuação. Nenhum parceiro nomeado ou sistema externo é assumido como disponível. Um caminho crítico de lançamento não pode depender de um parceiro não confirmado; cada adaptador precisa de um fallback ou de uma exclusão explícita do lançamento.

## 2. Sistemas de registro, produtores, consumidores, interfaces e propriedade

O seguinte é um mapa-alvo de propriedade para refinamento. “Sistema de registro” significa o dono autoritativo de um fato de negócio, não necessariamente o sistema onde uma cópia é mais fácil de consultar. Os donos são papéis de capacidade pendentes de atribuição a equipes ou pessoas jurídicas nomeadas.

| Fato de domínio | Sistema de registro-alvo | Produtores | Consumidores | Interface | Dono responsável (a atribuir) |
|---|---|---|---|---|---|
| Tenant, contexto, papéis e estado de fluxo de trabalho | Plataforma HUB | Operadores HUB, admins aprovados, serviços da plataforma | UI da plataforma, operações, auditoria, analytics | API versionada + eventos de domínio | Dono de plataforma/produto |
| Identidade canônica de pessoa, empresa, entidade e relacionamento | Serviço de identidade/master data com projeção governada no warehouse | Plataforma, CRM, HRIS/ATS, importações de parceiros | Todos os módulos, integrações, analytics | API de identidade + eventos de identidade + arquivos de reconciliação | Dono de dados |
| Consentimento, finalidade e decisões de privacidade | Serviço de consentimento/política | Participantes, admins, operações de privacidade, integrações | Gateway, plataforma, ELT, exportações, serviços de modelo | API de política + eventos de consentimento | Dono de privacidade/governança de dados |
| Respostas de diagnóstico e evidências | Serviço de evidências da plataforma; evidência de origem retida no landing | Participantes, operadores, conectores de documento/importação | Inteligência, jornada, reconhecimento, auditoria | API + eventos de evidência + referências de object storage | Dono de produto/operações |
| Oportunidades, soluções, matches e introduções | Plataforma HUB | Compradores, curadores, operadores, feeds de parceiros | Participantes, CRM, jornada, analytics | API de comando/consulta + eventos/webhooks | Dono de conexões/soluções |
| Conteúdo de aprendizado e conclusão | Serviço Academy/conteúdo ou LMS aprovado | HUB Academy, conector LMS, participantes | Jornada, inteligência, relatórios | Contrato xAPI/eventos + API | Dono de Academy/produto |
| Contratos, faturas, transações e fatos de ledger financeiro | ERP/sistema financeiro de cada entidade relevante | Equipe financeira, ERP, conectores de pagamento/fornecedor | Marts financeiros, resumos da plataforma, relatórios | API autenticada + ELT controlado | Dono de finanças |
| Fatos de procurement e fornecedores | Sistema de procurement/SRM ou módulo de plataforma aprovado | Procurement, fornecedores, sistemas do cliente | Soluções, finanças, risco, analytics | API/webhook + ELT | Dono de procurement/negócio |
| Fatos de RH, recrutamento e talento | HRIS/ATS do cliente; o HUB retém projeções permitidas | RH/ATS do cliente, conectores aprovados | Academy, inteligência, jornada, relatórios | API/webhook/SFTP + ELT | Steward do cliente/fonte |
| Métricas, coortes, modelos e linhagem | Camada semântica governada do warehouse/lakehouse | Jobs de ELT, pipelines de métricas, serviços de modelo | Dashboards, plataforma, finanças, revisão de alegações | API de consulta/exportações + metadados de linhagem | Dono de dados/inteligência |
| Auditoria, segurança e telemetria de entrega | Store central de observabilidade/auditoria | Cada serviço, gateway, IAM e pipeline | Segurança, operações, governança, resposta a incidentes | Logs/eventos estruturados + consultas restritas | Dono de segurança/operações |
| Decisões de reconhecimento e evidências do Selo | Fronteira independente de fluxo de reconhecimento | Avaliadores, serviço de evidências, operadores | Saída pública aprovada, apelações, auditoria | API restrita + eventos de decisão imutáveis | Governança independente de reconhecimento |

As interfaces devem ser catalogadas em um único registro vinculado às definições canônicas de entidades e eventos. Cada entrada de interface deve identificar produtor, consumidor, fato do sistema de registro, classificação de dados, finalidade de consentimento, dono, versão do contrato, nível de suporte, suíte de testes e data de descontinuação. Isso endereça diretamente TEC-001 e TEC-006; o mapa é um artefato de blueprint, não uma afirmação de que esses serviços existem.

## 3. Requisitos conceituais para APIs, eventos, webhooks, ELT, replay, reconciliação e rollback

### APIs

APIs devem ser contract-first e orientadas a recursos/domínios. Elas exigem escopos explícitos de autenticação e autorização, escopo de tenant/contexto, identificadores estáveis, IDs de correlação/requisição, versão de schema, chaves de idempotência para comandos, limites de paginação/filtro, erros de validação, metadados de auditoria e comportamento de timeout documentado. Leituras não devem cruzar silenciosamente fronteiras de tenant ou finalidade. Escritas devem retornar um status de operação/resultado que distingue aceito, concluído, rejeitado e pendente de revisão.

APIs externas devem estar atrás de um gateway de integração ou camada de adaptadores que aplique tratamento de segredos, limitação de taxa, validação de payload, checagens de consentimento, retries e telemetria. Mudanças disruptivas exigem contrato versionado, aviso aos consumidores e janela de migração. Aprovação de interface exige testes de contrato, revisão de segurança, aceite do dono e evidência de que a direção do sistema de registro é inequívoca (TEC-001).

### Eventos

Eventos devem usar um envelope canônico contendo ID do evento, tipo do evento, versão do schema, timestamps de ocorrência e observação, produtor, tenant/contexto, ator ou principal de serviço, chave de sujeito/entidade, IDs de correlação/causação, classificação de consentimento/finalidade, payload e referência de linhagem/fonte. Produtores devem publicar apenas eventos que possuem; consumidores devem ser idempotentes e registrar o resultado do processamento.

O catálogo de eventos e o registry de schemas devem governar compatibilidade, retenção, elegibilidade de replay e tratamento de campos sensíveis. Eventos representam fatos ou transições de estado, não afirmações de valor não aprovadas. Versionamento de eventos e testes de replay dependem de [[DAT-003 — Canonical event envelope]].

### Webhooks e entrega externa

Webhooks são mecanismos de entrega, não sistemas de registro. Eles exigem requisições assinadas, proteção contra timestamp/replay, propriedade do endpoint, allow-listing quando apropriado, idempotência, retries limitados, backoff exponencial, tratamento de dead-letter e um log de entrega. Consumidores devem reconhecer rapidamente e processar assincronamente. Um receptor de webhook deve tolerar duplicatas, reordenação e entrega atrasada; o ID do evento de origem permanece a chave de deduplicação.

### ELT e qualidade de dados

Pipelines de ELT devem aterrissar registros fiéis às fontes antes da transformação, capturar watermark de extração e cursor da fonte, preservar payload bruto e versão de schema, e tornar cada transformação rastreável a um job/versão. Portões de qualidade devem cobrir completude, frescor, unicidade, integridade referencial, validade, status de consentimento e confiança de match de identidade. Registros com falha vão para quarentena com motivo, dono e estado de remediação, em vez de desaparecerem ou contaminarem marts curados.

Cada pipeline precisa de um modo de carga explícito (snapshot, incremental, CDC ou orientado a eventos), política de chegada tardia, política de exclusão/correção, baseline de custo e volume, comportamento de limite de taxa e cadência de reconciliação. Esses requisitos permanecem não validados até que baselines técnicas existam (TEC-005).

### Replay e reconciliação

Replay deve ser delimitado, autorizado e observável. Uma solicitação de replay identifica faixa de fonte/IDs de eventos, motivo, solicitante, projeção-alvo, política de consentimento, impacto esperado e plano de rollback. Consumidores devem ser idempotentes; efeitos colaterais como notificações, escritas externas ou decisões de reconhecimento exigem uma política de supressão de replay ou ação compensatória.

Reconciliação compara contagens da fonte, checksums ou totais de negócio, mapeamentos de identidade, offsets de eventos, registros com falha/em quarentena e saídas curadas. Ela produz um resultado de reconciliação assinado, classificação de variância, dono e disposição. Merges de identidade, correções e survivorship devem ser reversíveis e preservar aliases e proveniência, conforme exigido por [[DAT-002 — Identity resolution]].

### Rollback e recuperação

Rollback é definido por tipo de mudança: release de código, schema, configuração, correção de dados, versão de modelo/regra e entrega externa. Prefira forward-fix ou eventos compensatórios para fatos append-only; restauração ou rebuild de projeção é permitido apenas com evidência de consistência e fronteiras de perda de dados aprovadas. Um rollback não deve apagar histórico de auditoria nem ocultar uma saída anterior.

Todo fluxo crítico precisa de um runbook para indisponibilidade de dependência, payload malformado, falha de credencial, backlog de fila, violação de qualidade de dados, suspeita de vazamento entre tenants e divulgação acidental. SLOs, RTO/RPO, limiares de alerta, propriedade de falhas, cobertura de on-call e drills de recuperação são condições futuras de aprovação, não NFRs aprovados hoje (TEC-002). Aprovação de recuperação exige drills que atendam limiares aprovados de serviço e integridade de dados.

## 4. Isolamento por tenant, IAM, segredos, ambientes, observabilidade e premissas de segurança

### Isolamento por tenant

Tenant/contexto deve ser uma fronteira de segurança obrigatória em tokens, requisições de API, envelopes de eventos, chaves de armazenamento, políticas de consulta e projeções analíticas. O modelo-alvo deve usar defesa em profundidade: autorização de serviço, política em nível de linha/objeto, fronteiras de criptografia/chaves conscientes de tenant quando justificado, filas ou namespaces isolados para cargas sensíveis e testes automatizados de acesso entre tenants. Taxonomias compartilhadas podem ser globais apenas quando explicitamente classificadas como dados não pertencentes a tenant; dados de participante, evidência, contrato e resultado têm como padrão escopo de tenant.

Agregação entre tenants requer finalidade aprovada, anonimização ou regras de célula mínima, supressão de risco de reidentificação e um dono definido. Configuração white-label pode alterar apresentação e branding, mas não pode contornar controles de identidade, consentimento, metodologia, auditoria ou reconhecimento.

### IAM e acesso privilegiado

IAM deve usar federação centralizada de identidade quando disponível, privilégio mínimo, identidades de serviço com escopo, autorização baseada em papel/atributo, credenciais de vida curta, MFA para acesso privilegiado e de operadores, segregação de funções e recertificação periódica de acessos. Papéis devem distinguir participante, admin do cliente, operador, analista, avaliador, serviço de integração, suporte e investigador de segurança. Acesso break-glass exige aprovação com prazo, logging reforçado e revisão pós-incidente.

Decisões de autorização devem ser testáveis contra a matriz de papel/tenant do produto de [[PRD-003 — Role, permission and tenancy model]]. Nenhuma saída automatizada de inteligência pode conceder a si mesma autoridade para publicar, dar match, reconhecer, excluir ou alterar fatos financeiros.

### Segredos e criptografia

Segredos pertencem a um store gerenciado de segredos, nunca a código-fonte, logs, payloads ou configuração ordinária. O design de refinamento deve especificar emissão, rotação, revogação, propriedade, substituição de emergência, fronteiras de credenciais de parceiros e evidência de auditoria. Criptografia em trânsito e em repouso é esperada como controle-alvo; decisões de gestão de chaves, regionalidade e criptografia em nível de campo exigem evidência de threat model. Testes de rotação de segredos e procedimentos de incidente fazem parte da aprovação de TEC-004.

### Ambientes e controles de release

O ciclo de vida-alvo separa ambientes local/desenvolvimento, teste/contrato, staging/UAT e produção; dados de produção não são copiados para ambientes inferiores sem mascaramento e finalidade aprovados. Configuração de ambiente, schemas, feature flags, migrações e infraestrutura são versionados e promovidos através de revisão. Acesso à produção e deployments são restritos, observáveis e reversíveis. Nenhum ambiente existe hoje apenas porque este blueprint o nomeia.

Portões de release devem incluir testes unitários/integração/contrato, ensaio de migração, checagens de segurança, checagens de qualidade de dados, validação de observabilidade, evidência de backup/restauração, dono da mudança e plano de rollback. Propriedade de release, suporte e operações permanecem não resolvidas até que o ciclo de vida de entrega e o runbook de lançamento sejam aprovados (TEC-007).

### Observabilidade e resposta a incidentes

Toda requisição, evento, execução de pipeline e job de modelo deve emitir telemetria estruturada com ID de correlação, tenant/contexto (protegido), ator/serviço, versão, latência, status, contagem de retries e referência de linhagem. Métricas devem cobrir disponibilidade, latência, taxa de erro, lag de fila, frescor, variância de qualidade de dados, resultados de match de identidade, custo, uso de limite de taxa e eventos de segurança. Traces devem evitar payloads sensíveis; logs exigem classificação, retenção e controles de acesso.

Alertas precisam de limiares, severidade, dono, escalonamento e links de runbook. Incidentes de segurança exigem triagem, contenção, preservação de evidências, decisão de notificação, remediação e lições aprendidas. Evidências de observabilidade e segurança devem ser retidas suficientemente para obrigações LGPD, contratuais e de auditoria, sujeitas à retenção aprovada. TEC-002 e TEC-004 permanecem abertos até que existam testes operacionais e evidência de remediação de segurança.

### Requisitos não funcionais aprovados versus premissas

Na maturidade de blueprint, os seguintes itens são **expectativas que exigem aprovação**, não requisitos aprovados: metas de disponibilidade/SLO, orçamentos de latência, tetos de throughput e volume, RTO/RPO, ponto de recuperação, envelope de custo, limites de taxa, regiões suportadas, períodos de retenção, padrões de criptografia/chaves, tempos de remediação de vulnerabilidades e cobertura de staffing/on-call. A revisão de arquitetura deve aprovar esses valores com evidências de produto, dados, operações, finanças, privacidade e segurança (TEC-003 e TEC-005).

## 5. Escolhas de arquitetura conectadas a dependências de produto, dados, operações, finanças e lançamento

A arquitetura segue a cadeia de projeto `diagnosticar → planejar → conectar → implementar → medir → reconhecer → evoluir` e a cadeia de dados `fontes → identidades → sinais → inteligência → ação → resultado → valor financeiro`. As escolhas acima preservam um núcleo operacional estável, histórico analítico governado e controles humanos explícitos, em vez de permitir que integrações ou modelos definam implicitamente o comportamento do produto.

| Dependência | Consequência de arquitetura | Coordenação / portão necessário |
|---|---|---|
| Módulos de produto e C.A.O.S. | APIs de domínio/fluxo de trabalho devem representar fronteiras de módulos, estados, filas de revisão e responsabilidade de operadores. | Depende de BP-002: confirmar taxonomia de capacidades, fronteira de MVP, matriz de papel/tenant e decisões humanas/automatizadas antes dos contratos de interface. |
| Contratos de dados e inteligência | IDs canônicos, eventos, métricas, linhagem e versões de modelo são primitivos compartilhados; projeções analíticas não podem redefinir fatos operacionais. | Depende de BP-003: confirmar entidades lógicas/físicas, chaves, envelope de eventos, definições de métricas, regras de identidade e semântica de estado de valor. |
| Operações e suporte | Toda integração e pipeline tem dono, runbook, alerta, escalonamento e caminho de recuperação; automação é limitada pela capacidade operacional. | Produto/operações devem aprovar blueprints de serviço, cobertura de on-call e tratamento de exceções antes do lançamento. |
| Finanças e valor | Fatos de ledger financeiro permanecem autoritativos nos sistemas financeiros das entidades; marts de valor expõem status de evidência e nunca convertem atividade em valor realizado automaticamente. | Finanças devem aprovar envelope de custo, dicionário de KPIs, atribuição e padrões de evidência antes de alegações financeiras. |
| Governança, LGPD e Selo HUB | Consentimento, fronteiras de entidade, auditoria, exclusão, portabilidade, independência de avaliadores e controles de alegação pública são aplicados nas interfaces e saídas. | Governança jurídica/privacidade/reconhecimento independente deve liberar cada fluxo relevante; [[GOV-002 — Data roles and rights]] e [[GOV-003 — Selo independence]] permanecem dependências. |
| Parcerias e distribuição | Sistemas externos são adaptadores com fallbacks; nenhum parceiro hipotético é tratado como dependência disponível. | Compromissos de parceiros, acesso, limites e obrigações de dados devem ser evidenciados antes de tornar uma integração crítica para o lançamento. |
| Lançamento e prontidão | Release, monitoramento, suporte, rollback, segurança e testes de contrato formam um portão integrado único, não checklists técnicos separados. | [[LCH-001 — Integrated launch gate]] e [[LCH-002 — Operational readiness]] devem aprovar o pacote completo de evidências. |

Estágios de arquitetura M0–M4 são hipóteses de sequenciamento: M0 estabelece IDs, taxonomia, catálogos de eventos/indicadores e dashboards operacionais; M1 adiciona conexões de fontes, grafos/coortes/matching; M2 adiciona mart de valor e atribuição; M3 adiciona inteligência preditiva controlada; M4 adiciona benchmarks anônimos e escala multi-ecossistema. Critérios de saída, donos, denominadores, evidências e decisões de aprovação devem ser definidos antes de tratar um estágio como entregue.

## 6. Separação entre arquitetura-alvo, tecnologia implementada e requisitos não funcionais aprovados

Este documento usa intencionalmente três rótulos de maturidade:

- **Arquitetura-alvo** — as fronteiras, responsabilidades, fluxos e intenção de controle descritos aqui. É uma hipótese de design para refinamento.
- **Tecnologia implementada** — código, infraestrutura, configuração, integrações, testes, runbooks e evidência operacional que foram de fato construídos e verificados. Nenhuma implementação de produção assim é evidenciada pela fundação; este blueprint não afirma que existe.
- **Requisitos não funcionais aprovados** — compromissos numéricos ou aplicáveis aceitos por donos responsáveis de produto, operações, finanças, segurança, privacidade e governança. O blueprint propõe categorias e condições de aprovação, mas não aprova valores.

Consequentemente, “deve” e “alvo” descrevem intenção de arquitetura; eles não significam implantado. Um componente se torna condicionalmente aprovado apenas quando seu contrato, dono, evidência e dependências estão registrados. Ele se torna pronto para lançamento somente após passar pelos portões de release, segurança, recuperação, suporte, direitos de dados e lançamento integrado. Seleções de fornecedores, nuvem, frameworks e bancos de dados são deliberadamente adiadas até que evidências de capacidade, custo, privacidade, manutenibilidade e operação estejam disponíveis.

## Premissas Abertas e Decisões Não Resolvidas

| Premissa / decisão não resolvida | IDs de gaps afetados | Ação de refinamento |
|---|---|---|
| A fronteira de produto entre núcleo de plataforma compartilhado, configuração de oferta e operações de serviço ainda não está assentada. | TEC-003, TEC-007 | Depende de BP-002: aprovar taxonomia de capacidades, contratos de módulos, estados de fluxo de trabalho e propriedade operacional. |
| Entidades canônicas, chaves, envelope de eventos e semântica de métrica/valor podem suportar todos os módulos-alvo sem autoridades alternativas ocultas. | TEC-001, TEC-003, TEC-006 | Depende de BP-003: aprovar modelo lógico/físico, registry de eventos, resolução de identidade e contratos de linhagem. |
| CRM, consentimento, identidade e warehouse são as prioridades corretas de integração de M0 e podem ser acessados em termos aceitáveis. | TEC-001, TEC-005, TEC-006 | Validar acesso às fontes, compromissos de parceiros, payloads, volumes, limites de taxa, custo e fallback antes do sequenciamento. |
| Metas necessárias de disponibilidade, latência, throughput, RTO/RPO, retenção e custo são alcançáveis com o modelo operacional pretendido. | TEC-002, TEC-003, TEC-005 | Estabelecer baselines, modelo de capacidade, proposta de SLO e drills de recuperação; obter aprovação de arquitetura, finanças e operações. |
| Uma única fronteira de identidade/master data pode resolver aliases, merges e survivorship entre tenants e sistemas de fonte de forma reversível. | TEC-001, TEC-005, TEC-006 | Definir limiares de matching, stewardship, fluxo de correção e datasets de teste representativos. |
| Isolamento por tenant, agregação entre tenants e fronteiras white-label podem satisfazer restrições LGPD, contratuais e de metodologia. | TEC-003, TEC-004 | Completar threat model, matriz de autorização, mapa de fluxos de privacidade e testes de isolamento. |
| Fronteiras de pessoa jurídica/controlador-operador para HUB Negócios, Instituto HUB, Plataforma HUB e Selo HUB podem ser refletidas em sistemas e fluxos de dados. | TEC-004, TEC-006 | Depende de refinamento jurídico/governança: aprovar decisões de entidade, papel de dados, PI, retenção e saída antes de serviços compartilhados. |
| Capacidade de revisão humana e governança independente de avaliadores são suficientes para recomendações, matching e reconhecimento antes da expansão da automação. | TEC-002, TEC-004, TEC-007 | Definir filas de revisão, SLAs, controles de override/apelação, independência de avaliadores e escalonamento de incidentes. |
| APIs de parceiros externos, sistemas de HRIS/ATS/LMS/ERP/procurement/risco fornecerão interfaces estáveis e suportáveis. | TEC-001, TEC-005, TEC-007 | Criar inventário de parceiros/interfaces, testes de contrato, política de descontinuação e caminho de fallback; não tratar hipóteses como dependências. |
| Replay, reconciliação e rollback podem preservar auditabilidade enquanto compensam efeitos colaterais e correções tardias. | TEC-002, TEC-003, TEC-006 | Prototipar drills de falha/recuperação com casos de teste de eventos, ELT, identidade e entrega externa. |
| Finanças podem distinguir fatos de ledger, valor potencial/influenciado/validado/realizado e receita do HUB sem dupla contagem. | TEC-003, TEC-005 | Depende de BP-003 e refinamento financeiro: aprovar linhagem de métricas, atribuição, ledger fonte-da-verdade e status de evidência. |
| Uma estratégia de ambientes implantável, modelo de suporte e propriedade de on-call podem ser equipados antes do lançamento. | TEC-002, TEC-003, TEC-007 | Definir controles de ambiente, runbook de release, níveis de suporte, escalonamento e evidência de prontidão operacional. |

Todas as premissas permanecem abertas até que o elemento faltante, a dependência, a evidência, o dono responsável e a condição de aprovação do gap vinculado sejam satisfeitos. Este blueprint não fecha TEC-001 a TEC-007.

## Dependências Entre Blueprints

- **Depende de BP-002:** o blueprint de produto e operação deve estabelecer a taxonomia de capacidades, fronteira de MVP, modelo de ator/papel, comportamento de tenant, rastreabilidade C.A.O.S., decisões human-in-the-loop e propriedade de serviços. Até lá, as fronteiras da plataforma e a superfície de API permanecem pontos de coordenação.
- **Depende de BP-003:** o blueprint de dados e inteligência deve estabelecer entidades canônicas, chaves, contratos de eventos, semântica de métrica/valor, resolução de identidade, linhagem, propagação de consentimento e governança de modelos. Até lá, este documento não pode afirmar schemas ou NFRs aprovados.
- **Depende do trabalho de blueprint de governança/jurídico:** papéis de controlador/operador, separação de entidades, PI, retenção/exclusão, portabilidade, responsabilidade e independência do Selo HUB devem restringir interfaces e armazenamento antes da aprovação de integração crítica para o lançamento.
- **Depende do trabalho de finanças e arquitetura de oferta:** motor de receita, envelope de custo, autoridade do ledger financeiro, atribuição e economia técnica devem ser aprovados antes que metas de capacidade ou disponibilidade se tornem compromissos.
- **Depende do trabalho de operações e lançamento:** donos nomeados, níveis de suporte, on-call, runbooks, resposta a incidentes, controles de release e o portão de lançamento integrado devem existir antes que qualquer componente-alvo seja representado como implantável ou pronto para produção.

## Rastreabilidade aos Gaps TEC

- [[TEC-001]] — endereçado através de registro de interfaces, matriz de sistema de registro, APIs/eventos/webhooks contract-first e condições de revisão de segurança.
- [[TEC-002]] — endereçado através de condições de aprovação de SLO, propriedade de falhas, runbooks, alertas, replay/rollback e drills de recuperação.
- [[TEC-003]] — endereçado através de fronteiras-alvo, ambientes e separação explícita de tecnologia implementada e NFRs aprovados.
- [[TEC-004]] — endereçado através de isolamento por tenant, IAM, gestão de segredos, observabilidade, auditoria e premissas de processo de incidentes.
- [[TEC-005]] — endereçado através de baselines de custo/latência/volume/limite de taxa/disponibilidade e condições de aprovação de capacidade.
- [[TEC-006]] — endereçado através de identidade entre sistemas, propriedade e mapeamento de sistema de registro.
- [[TEC-007]] — endereçado através de ciclo de vida de release, controles de ambiente, modelo de suporte e dependências de prontidão operacional.
