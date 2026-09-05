---
title: "Blueprint de Governança e Jurídico do HUB"
blueprint_id: BP-006
status: em-revisao
layer: blueprint
area: governance-legal
source_task: "[[04-project-management/tarefas/BP-006_HUB_Blueprint_Governanca_e_Juridico]]"
created: 2026-08-21
updated: 2026-08-21
gap_ids: [GOV-001, GOV-002, GOV-003, GOV-004, GOV-005, GOV-006, GOV-007, GOV-008, GOV-009]
---

# BP-006 — Blueprint de Governança e Jurídico do HUB

> [!warning] Status and legal boundary
> Este é um **blueprint** de governança e jurídico, não aconselhamento jurídico, aprovação jurídica, parecer jurídico, certificação de compliance ou autorização de lançamento. Ele registra controles propostos e questões não resolvidas para revisão por profissionais qualificados de jurídico, privacidade, tributos, contabilidade, riscos e Selo independente. Nenhuma entidade, papel, direito, alegação ou contrato descrito aqui deve ser tratado como fato estabelecido até que existam a aprovação profissional e as evidências pertinentes.

## 1. Responsibilities and boundaries of the four conceptual units

As quatro unidades são fronteiras conceituais, não evidência de que quatro entidades legais já existam. [[02-review/01-blueprint/estrategia/HUB_Fundacao_Blueprint_Projeto]] identifica seus papéis pretendidos, enquanto [[00-project-control/registro-lacunas/lacunas/GOV-001|GOV-001]] permanece aberto. O Refinamento deve decidir se cada unidade é uma entidade separada, uma marca, um centro de custo, um papel contratual ou outra estrutura.

| Conceptual unit | Governance responsibility | Boundary and prohibited assumption | Required interface |
|---|---|---|---|
| **HUB brand and strategy** | Possuir ou controlar posicionamento, padrões metodológicos, narrativa, direção do grupo, nomenclatura e política entre unidades. Manter os registros aprovados de alegações, metodologia e marca. | Não se torna silenciosamente o vendedor contratante, controlador de dados, operador de serviço ou avaliador do Selo. O uso da marca deve seguir licenças escritas e portões de aprovação. | Licenças de política e PI para [[HUB Negócios]], [[Instituto HUB]] e [[Plataforma HUB]]; fórum de alegações e escalonamento entre todas as unidades. |
| **HUB Negócios** | Contratar serviços comerciais, implementação, relacionamentos, soluções, marketplace ou outras ofertas empresariais aprovadas; assumir a entrega comercial e as obrigações com clientes. | Não pode prometer comportamento da plataforma, resultados de impacto, resultados financeiros ou reconhecimento além das evidências aprovadas e do escopo contratual. Não pode comprar, condicionar ou garantir reconhecimento pelo Selo. | Statements of work, níveis de serviço, termos de fornecedores, alocação de indenização/seguro e cronogramas de fluxo de dados. Coordenar com o BP-005: handoffs operacionais, pessoal, suporte e controles de entrega permanecem a ser especificados ali. |
| **Instituto HUB** | Conduzir atividade restrita de impacto, educação ou missão somente sob mandato, política de funding, modelo de reporte e arranjo de gestão aprovados separadamente. | Não deve ser presumido como instituição beneficente, entidade de interesse público, organização isenta de tributos ou recebedora de fundos restritos até confirmação jurídica e financeira. Recursos restritos e beneficiários não podem ser usados como subsídio informal para atividade comercial. | Acordos de funding, restrições de grants, termos intercompany em condições de mercado, salvaguardas e reporte de resultados. Coordenar com o BP-005: separação operacional e handoffs de serviço são pontos em aberto. |
| **Plataforma HUB** | Fornecer software, dados, fluxos de trabalho, serviços de inteligência, controles de acesso, auditabilidade, exportações, limites de suporte e controles técnicos de release. | Não deve ser presumida como proprietária de todo dataset, decisão, recomendação ou insight derivado de clientes. A disponibilidade da plataforma não equivale a precisão, adequação, qualidade do fornecedor ou garantia de resultado. | Termos de produto, DPA/cronogramas de dados, contratos de API e sistema de registro, processo de incidentes, exclusão/portabilidade e portões de release de modelos. |

Capacidades compartilhadas (identidade, taxonomia, C.A.O.S., evidências, finanças, segurança e governança) exigem proprietário e modelo de acesso explícitos. As fronteiras entre unidades devem se conectar à titularidade das ofertas, às fronteiras de capacidades do produto, à gestão de dados e à responsabilização operacional — e não apenas a um organograma. Nenhuma unidade pode usar o nome, dados, pessoal, PI, conta bancária ou autoridade de outra sem acordo aprovado. A estrutura final deve documentar constituição, titularidade, contas bancárias, autoridade de assinatura, tratamento tributário, preços intercompany, seguros e responsabilidades de registros (GOV-001).

## 2. Contracts, IP, data rights, controller/processor roles, retention and portability

### Arquitetura contratual

O conjunto contratual deve ser modular, com registro controlado de templates/versões e revisão jurídica antes do uso:

1. **Acordo-quadro com cliente e instituição:** escopo, partes, autoridade, taxas, prazo, uso aceitável, confidencialidade, garantias, limite de responsabilidade, seguros, auditoria, suspensão, rescisão e saída.
2. **Statement of work / ordem de jornada:** objetivos, entregáveis, fontes de dados, papéis, medidas, padrão de evidência, aprovações humanas, premissas, dependências, controle de mudanças e aceitação.
3. **Termos da plataforma e níveis de serviço:** permissões de usuários, isolamento de tenants, limite de disponibilidade/suporte, segurança, integrações, disclaimers de modelos/recomendações, exportação e exclusão.
4. **Aditivo de tratamento de dados e cronograma de fluxos:** categorias, titulares, finalidades, campos, base legal, instruções, suboperadores, transferências, segurança, incidentes, retenção e evidência de exclusão.
5. **Acordos com fornecedores, avaliadores e especialistas:** qualificação, confidencialidade, PI, conflitos, segurança, seguros, qualidade de serviço, não circunvenção quando apropriado e cooperação em incidentes.
6. **Acordos com parceiros, financiadores e Instituto:** papéis, marca, termos de uso restrito, reporte, alocação, salvaguardas de beneficiários e controles de independência.
7. **Termos de participação e reconhecimento do Selo:** critérios, evidências, independência do avaliador, taxas (se houver), conflitos, recursos, suspensão, retirada, publicação e restrições de alegações.

Os contratos devem alocar — e não obscurecer — a responsabilidade por recomendações, matches, fornecedores, incidentes de dados, alegações públicas, alegações financeiras e dependências de terceiros (GOV-004). Nenhum disclaimer substitui controles razoáveis ou faz desaparecer uma obrigação jurídica obrigatória. Os templates contratuais permanecem propostos até revisão profissional.

### PI e cadeia de titularidade

Criar um registro de PI cobrindo nomes e marcas HUB; materiais do método C.A.O.S.; questionários, taxonomias e rubricas; conteúdo e treinamento; software e configuração; schemas, definições de eventos e documentação; prompts de modelos, código, pesos e model cards; contribuições de clientes; datasets e produtos de dados; relatórios e dashboards; e obras derivadas. Cada item precisa de origem, criador/contribuidor, proprietário ou licenciado, uso permitido, território, prazo, exclusividade, atribuição, obrigações de terceiros/open source, restrições e tratamento na saída.

Os acordos com contribuidores, empregados, contratados, parceiros e clientes devem estabelecer direitos compatíveis com a lei aplicável sem presumir que a cessão é automática. Acesso aos dados do cliente não é propriedade dos dados do cliente; licença para tratar não é licença para reutilizar com outra finalidade. Derivados (agregados, scores, embeddings, benchmarks, features de modelos e relatórios) exigem análise explícita de direitos e confidencialidade, e não propriedade implícita da plataforma. A integridade da marca e do método deve sobreviver à implantação white-label (GOV-006).

### Papéis e direitos sobre dados

Os papéis devem ser atribuídos fluxo a fluxo, e não pelo rótulo do produto. Para cada fonte, finalidade e saída, registrar quem determina finalidade/meios, quem atua conforme instruções documentadas, quem determina decisões conjuntamente, quem recebe dados e quem é suboperador ou controlador independente. Os papéis potenciais incluem controlador cliente/instituição, uma unidade HUB operadora, um controlador HUB separado para suas próprias finalidades operacionais legítimas, controladores conjuntos, fornecedores e governança independente do Selo. Estas são hipóteses que exigem revisão à luz da LGPD; nenhum papel está definido aqui (GOV-002).

O registro de fluxos deve mapear titulares, risco de dados sensíveis, finalidade, campos mínimos, base legal, aviso/consentimento quando aplicável, oposição/revogação, acesso/correção/exclusão, destinatário, tratamento transfronteiriço, uso de dados derivados, treinamento/uso de modelos, gatilho de retenção e gestor responsável. Limitação de finalidade, minimização, segurança, transparência, precisão, prevenção, não discriminação e responsabilização se aplicam durante todo o ciclo de vida. O consentimento, quando usado, deve ser específico, demonstrável, revogável e propagado; não deve ser presumido pela participação.

### Retenção, exclusão e portabilidade

Os cronogramas de retenção devem ser baseados em finalidade e evento (por exemplo, fim do contrato, última atividade, retenção jurídica ou encerramento de recurso), com períodos separados para registros de origem, evidências, logs de auditoria, cobrança, artefatos de modelos, relatórios, backups, caches e registros de segurança. Retenções jurídicas e regulatórias devem ser documentadas e estritamente delimitadas. A exclusão ou anonimização deve se propagar por stores de produção, derivados, índices, exportações, suboperadores, backups e caches, com exceções registradas e limitadas no tempo.

Um runbook de saída deve identificar recebimento da solicitação, verificação de identidade, escopo, retenções, tenants afetados, avisos, formato de exportação, segurança da entrega, propagação da exclusão, confirmações de fornecedores, backups residuais e evidência de encerramento. A portabilidade deve distinguir os direitos de exportação de uma pessoa ou cliente da PI confidencial do HUB, direitos de terceiros, dados de segurança e agregados genuinamente anonimizados. Testar o caminho completo contra SLAs aprovados antes do lançamento (GOV-007); não prometer formato ou prazo até que sejam validados.

## 3. Accountability, decision rights, RACI, escalation and incident governance

### Modelo de direitos de decisão

Toda atividade crítica tem exatamente um proprietário **Accountable**, mesmo quando várias equipes executam ou aconselham. Os registros de decisão devem declarar a decisão, escopo, evidências, premissas, aprovador, dissenso, data de vigência, data de expiração/revisão e rota de rollback/recurso. Nenhuma aprovação pode ser inferida de participação, silêncio ou artefato em rascunho.

| Decisão/atividade | Accountable (um proprietário a atribuir) | Exemplos de Responsible | Consultado / informado | Portão ou escalonamento |
|---|---|---|---|---|
| Estrutura de unidade/entidade, tributária e intercompany | Governança do grupo/delegado do conselho (a atribuir) | Workstream jurídico e financeiro | As quatro unidades | Aprovação jurídica/financeira; estrutura não resolvida bloqueia lançamento (GOV-001). |
| Template contratual, responsabilidade, seguro e alocação de alegações | Responsável jurídico/riscos (a atribuir) | Responsáveis pelos contratos comerciais e da plataforma | Dados, operações, finanças, governança do Selo | Escalonar exposição fora do padrão antes da assinatura (GOV-004). |
| Finalidade dos dados, base legal, papel e fluxo de direitos | Responsável por privacidade/governança de dados (a atribuir) | Gestores de dados e plataforma | Cliente, segurança, jurídico, operações | Revisão de privacidade; interromper fluxo afetado se houver dúvida (GOV-002). |
| Gestão da fonte, correção de identidade e definição de métrica | Responsável por governança de dados (a atribuir) | Gestores de fontes, dados/analytics | Produto, finanças, cliente | Reconciliação e revisão de evidências; nenhuma sobrescrita silenciosa. |
| Release de produto, modelo/recomendação e revisão humana de alto impacto | Responsável por produto/risco de modelo (a atribuir) | Engenharia, analistas, revisores | Privacidade, segurança, operações, partes afetadas | Portão de release, rollback e recurso (GOV-009). |
| Critérios do Selo, nomeação de avaliadores e reconhecimento | Órgão/presidente independente do Selo (a nomear) | Avaliadores e secretaria | Jurídico, participante afetado, revisor de ética/conflitos | Recusa, recurso e revisão independente (GOV-003). |
| Resposta a incidentes de privacidade/segurança | Incident commander (a atribuir por evento) | Segurança, plataforma, privacidade, comunicações | Clientes afetados, jurídico, executivos | Relógio de severidade, contenção, decisão de notificação e post-mortem. |
| Alegações públicas, de impacto e financeiras | Aprovador de alegações (a atribuir) | Marca, comercial, dados/finanças | Jurídico, proprietário do método, órgão do Selo quando pertinente | Portão de publicação vinculado a evidências; retirada se contestada. |

Coordenar com o BP-005: o modelo operacional deve converter essas responsabilidades de governança em papéis nomeados, cobertura, runbooks, handoffs, níveis de serviço e pessoal. O BP-006 não inventa esses detalhes operacionais. O RACI final deve remover múltiplos accountables, identificar cada proprietário ausente, incluir gestão de fontes e resposta a incidentes, e ser aprovado antes do início de atividade crítica (GOV-008).

### Escalation and incident governance

Gatilhos de escalonamento incluem suspeita de tratamento ilícito, falha em solicitação de direitos, comprometimento de segurança, erro material de qualidade de dados ou identidade, recomendação discriminatória ou inexplicada, drift de modelo, alegação sem suporte, falha de fornecedor, conflito do Selo, intervenção insegura, violação contratual, distorção financeira ou perda de evidência exigida. Qualquer operador pode pausar publicação, ação automatizada, reconhecimento ou tratamento afetado quando um gatilho for crível; a própria pausa deve ser registrada e não pode ser punida como falha de entrega.

O ciclo de vida do incidente é: detectar e registrar → classificar severidade e unidades/titulares afetados → conter e preservar evidências → atribuir incident commander e proprietário accountable → avaliar notificação jurídica/contratual → comunicar por canais aprovados → remediar/recuperar ou fazer rollback → validar encerramento → documentar causa-raiz, risco residual e ações corretivas → revisar recorrência de forma independente. Manter registro de incidentes, log de decisões, retenção de evidências, comunicações com clientes/parceiros e aprendizados. Prazos de notificação, interação com reguladores e comunicações individuais permanecem decisões de revisão profissional, não premissas.

## 4. Conceptual independence requirements for Selo HUB

**O Selo HUB é uma capacidade controlada dedicada, não apenas outra funcionalidade do HUB Negócios ou da Plataforma HUB.** Pode compartilhar infraestrutura somente quando acesso, direitos de decisão, registros e incentivos preservarem a independência. O reconhecimento não está liberado para uso comercial enquanto GOV-003 estiver aberto.

Controles conceituais mínimos:

- **Mandato e estatuto:** publicar propósito, escopo, critérios, padrão de evidência, influência proibida, deveres dos avaliadores, periodicidade de revisão e autoridade para suspender ou retirar um selo.
- **Separação estrutural:** definir órgão ou comitê independente, nomeação, mandato, remoção, quórum e processo de decisão livre de conflitos. Equipes de implementação comercial não podem nomear, dirigir ou substituir avaliadores unilateralmente.
- **Independência do avaliador:** requisitos de competência e divulgação; nenhuma avaliação quando o avaliador tiver conflito comercial, financeiro, empregatício ou pessoal relevante; recusa e substituição documentadas.
- **Funding e incentivos:** a remuneração da avaliação não pode depender de resultado positivo, renovação do cliente, transação de marketplace ou receita comercial. Arranjos de funding e serviços compartilhados exigem transparência e controles contra dependência econômica.
- **Evidências e reprodutibilidade:** critérios, rubrica versionada, proveniência das evidências, registro de avaliação, raciocínio do revisor, dissenso e decisão devem ser retidos. Implementação paga pelo cliente não substitui evidências.
- **Devido processo:** aviso dos achados, oportunidade de resposta, recurso acessível, revisão independente do recurso, prazos, correção, suspensão e retirada; preservar registros públicos anteriores com status claro, em vez de reescrever a história silenciosamente.
- **Publicação e uso:** licença controlada da marca, diretório aprovado, período de validade, escopo e limitações. Um Selo não pode implicar qualidade universal, conformidade jurídica, desempenho financeiro ou impacto garantido.
- **Barreiras de informação:** dados e deliberações dos avaliadores são segregados da segmentação de vendas e dos incentivos de implementação; o acesso segue menor privilégio e é auditado.
- **Revisão externa:** uma revisão independente deve aprovar o modelo antes do lançamento e testar periodicamente conflitos, resultados, reclamações, retiradas e pressão comercial (GOV-003).

O blueprint deliberadamente não escolhe a forma jurídica final, o status de acreditação, a terminologia de certificação, o modelo de taxas ou o tratamento regulatório. Essas são decisões jurídicas e de governança em aberto, não fatos implícitos.

## 5. Publication, claims, fairness, explainability, human review and model-control principles

### Publicação e alegações

Usar um registro de alegações para cada declaração externa, dashboard, estudo de caso, benchmark, saída de modelo, resultado financeiro, referência ao Selo e endosso de parceiro. Cada alegação precisa de proprietário, público, escopo, data, links para evidências, definição da métrica, denominador, ressalvas, estado de maturidade/evidência, aprovador, expiração e caminho de retirada. Distinguir valor potencial, influenciado, validado e realizado; não apresentar ROI ilustrativo, correlação, pipeline, atividade ou saída de modelo como caixa realizado, impacto causal ou resultado garantido. As alegações devem ser consistentes nos materiais em português e inglês e nos contextos white-label.

Os portões de publicação devem bloquear o release quando faltar linhagem de evidências, definições tiverem mudado, amostras forem inadequadas, privacidade/confidencialidade estiverem não resolvidas, um modelo estiver fora de controle, houver conflito do Selo ou estiver pendente aprovação jurídica/contratual. GOV-005 exige testes de controles executáveis e aprovações retidas em dados, modelos, métricas e releases; uma declaração de política isolada é insuficiente. Erros materiais exigem correção, retirada destacada quando apropriado, avaliação de notificação ao cliente e trilha de auditoria preservada.

### Inteligência responsável

Antes do release de qualquer modelo, recomendação, ranking, match, sinal de risco ou decisão automatizada, classificar o impacto e documentar uso pretendido, uso proibido, populações afetadas, proveniência dos dados, limitações, papel humano, protocolo de avaliação e rollback. Model cards ou registros equivalentes devem incluir versão, proprietário, dados de treinamento/seleção, features ou lógica em nível apropriado, métricas, resultados por subgrupo, modos de falha conhecidos, indicadores de drift, data de revisão e status de aprovação.

Os controles de fairness devem definir grupos protegidos relevantes e proxies com tratamento compatível com a privacidade, regras de amostra mínima, populações de comparação, medidas de fairness escolhidas, limiares aceitáveis, tratamento da incerteza, remediação e aprovador de exceções. Não inferir atributos protegidos casualmente nem alegar fairness porque uma métrica agregada parece equilibrada. Testar erro díspar, exclusão, efeitos de proxy, acessibilidade e falhas de idioma/contexto. Os limiares devem ser definidos no Refinamento e revisados de forma independente (GOV-009).

A explicabilidade deve ser adequada à decisão e ao público: divulgar que assistência/modelagem foi usada quando material; fornecer fatores significativos, evidências, incerteza e limitações; permitir correção dos dados de origem; e evitar explicações causais fabricadas. Um revisor humano deve poder inspecionar evidências, contestar ou substituir um resultado, documentar o raciocínio, comunicar uma explicação compreensível e encaminhar um recurso. Decisões de alto impacto permanecem conduzidas por humanos até que controles aprovados demonstrem operação segura; automação não pode remover responsabilização.

Os controles incluem validação pré-release, implantação shadow ou limitada quando apropriado, monitoramento de qualidade/fairness/drift, limiares de alerta, revisão periódica, controle de acesso/versão, eventos de auditoria imutáveis, pausa por incidente, rollback para uma versão conhecida como boa e evidências pós-release. Treinamento com dados de clientes, reutilização de derivados, provedores externos de modelos e retenção de prompts/dados exigem finalidade explícita e revisão contratual. Nenhuma alegação de controle de modelo é aprovada apenas porque existe um model card; as evidências devem demonstrar que os controles operam.

## 6. Premissas Abertas e Decisões Não Resolvidas

| Premissa / decisão não resolvida | IDs de gap afetados | Ação de Refinamento |
|---|---|---|
| As quatro unidades conceituais podem se tornar coerentes jurídica, tributária e operacionalmente, com titularidade, autoridade de assinatura e economia intercompany claras. | GOV-001, GOV-008 | Encomendar arquitetura de entidades; decidir tratamento de entidade/marca/centro de custo; aprovar matriz de responsabilidade e autoridade com jurídico e finanças. |
| Uma análise da LGPD fluxo a fluxo determinará papéis de controlador, operador, controlador conjunto e suboperador, bases legais e direitos sobre dados derivados. | GOV-002, GOV-007 | Construir mapa de finalidade/campo/papel/ciclo de vida; obter revisão de privacidade; testar propagação de direitos, exclusão e portabilidade. |
| O Selo HUB pode operar de forma independente compartilhando infraestrutura HUB selecionada sem incentivos conflitantes ou vazamento de informações. | GOV-003, GOV-004, GOV-005 | Redigir estatuto, regras de avaliadores/conflitos/recursos, modelo de funding e barreiras de informação; obter revisão independente e executar testes de controle. |
| Contratos comerciais podem alocar risco de recomendação, match, fornecedor, alegação, incidente de dados e terceiros com exposição residual segurável. | GOV-004, GOV-001 | Construir matriz de responsabilidade/seguro/indenização; redigir templates e rota de aprovação fora do padrão; obter sign-off jurídico/de riscos. |
| Controles de governança podem produzir evidências executáveis e retidas em dados, métricas, modelos, publicação e releases. | GOV-005, GOV-009 | Definir catálogo de controles, casos de teste, repositório de evidências, fluxo de sign-off, model cards, limiares e exercícios de rollback. |
| Marca, C.A.O.S., conteúdo, software, schemas, produtos de dados e derivados possuem cadeia de titularidade completa, executável e com fronteira de licença. | GOV-006, GOV-001 | Criar registro de PI; obter acordos com contribuidores/contratados/clientes; auditar termos de terceiros e open source. |
| Retenção, DSAR, exclusão, anonimização e portabilidade podem se propagar por backups, caches, fornecedores e saídas de parceiros dentro dos SLAs aprovados. | GOV-007, GOV-002, GOV-005 | Implementar runbook de ciclo de vida; executar testes de propagação; reter confirmações e documentar exceções/retenções jurídicas. |
| Cada atividade crítica pode ter um proprietário accountable nomeado, incluindo gestão de fontes e resposta a incidentes, com handoffs operacionais que funcionem na prática. | GOV-008, GOV-005 | Reconstruir matriz de direitos de decisão/RACI; coordenar com BP-005 cobertura de papéis, runbooks, SLAs e exercícios de escalonamento. |
| Limiar de inteligência responsável, tratamento de grupos protegidos, explicabilidade, revisão humana e rollback são adequados para cada caso de uso e jurisdição. | GOV-009, GOV-002, GOV-005 | Estabelecer classificação de impacto e protocolo de revisão; validar resultados por subgrupo e rotas de recurso antes do release. |

Essas premissas são deliberadamente visíveis. Nenhuma é aprovação, conclusão jurídica, controle de produção ou autorização de lançamento. O encerramento exige a definição do gap register: elemento ausente definido/implementado, dependências conectadas, evidência rastreável, responsabilização aceita, condição de aprovação atendida e nenhuma contradição não resolvida.

## 7. Dependências entre Blueprints

- **[[02-review/01-blueprint/estrategia/HUB_Fundacao_Blueprint_Projeto]]:** fonte da arquitetura de quatro unidades, C.A.O.S., módulos da plataforma, maturidade de valor/evidências e sensibilidade do Selo; este blueprint adiciona controles sem converter conceitos em fatos.
- **BP-001 / arquitetura de negócios e ofertas:** deve especificar quem compra, contrata e recebe cada oferta, fronteiras de receita, promessas ao cliente e superfícies de alegações. As fronteiras de governança alimentam termos das ofertas e promessas proibidas.
- **BP-002 / blueprint de produto:** deve converter módulos da plataforma, permissões, revisão humana, eventos de auditoria, portões de publicação e comportamento de exportação/exclusão em requisitos de produto. A governança aprova fronteiras; não inventa UX ou detalhes de implementação.
- **BP-003 / blueprint de dados e inteligência:** deve fornecer entidades canônicas, linhagem de dados, mapa finalidade-para-campo, versões de modelos, estados de evidência e métricas de inteligência responsável necessários para GOV-002, GOV-005, GOV-007 e GOV-009.
- **BP-004 / arquitetura de tecnologia:** deve implementar tenancy, IAM, logs de auditoria, criptografia, propagação de retenção/exclusão, backups, controles de release, rollback, segredos e telemetria de incidentes exigidos por este blueprint.
- **BP-005 / modelo operacional:** coordenar cobertura de papéis, SOPs, handoffs de serviço/suporte, escalonamento, comando de incidentes, administração de avaliadores e RACI operacional. Itens de handoff em aberto explicitamente não são inventados aqui.
- **Workstream de finanças e valor:** deve separar a economia comercial da economia restrita do Instituto, validar alegações, definir métricas financeiras certificadas por evidências e apoiar decisões intercompany/de seguros.
- **Workstreams de marca, comunicações e GTM:** devem usar o registro de alegações, terminologia aprovada, estados de evidência, limites white-label e controles da marca Selo; nenhum deck ou campanha pode ultrapassar o status de aprovação.
- **Workstreams de lançamento e controle do projeto:** devem conectar cada gap GOV a um proprietário, pacote de evidências, registro de decisão, autoridade de aprovação e portão integrado de lançamento. Os controles GOV-005 devem ser bloqueadores de lançamento quando faltar evidência crítica.

A ordem das dependências é explícita: fronteiras de unidades e ofertas → produto e fluxos de dados → contratos/PI e controles técnicos → titularidade operacional → evidências e revisão independente → aprovação integrada de lançamento. Trabalho paralelo é permitido somente quando interfaces e decisões não resolvidas permanecerem visíveis.
