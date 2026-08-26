---
title: "HUB Blueprint de Produto e Capacidades"
blueprint_id: BP-002
status: draft
layer: blueprint
area: product
source_task: "[[04-project-management/tarefas/BP-002_HUB_Blueprint_Produto_e_Capacidades]]"
created: 2026-08-21
updated: 2026-08-21
gap_ids: [PRD-001, PRD-002, PRD-003, PRD-004, PRD-005, PRD-007]
---

# BP-002 — HUB Blueprint de Produto e Capacidades

> [!warning] Fronteira de maturidade e responsabilização
> Este é um blueprint de produto, não uma evidência de implementação em produção. Esboços, dashboards e fluxos de trabalho existentes são apenas referências de design. Qualquer interpretação, recomendação, match, decisão de elegibilidade, avaliação, declaração pública ou decisão de reconhecimento de alto impacto permanece sob a responsabilidade de um revisor humano identificado até que existam controles aprovados e evidências.

Este blueprint define a [[Plataforma HUB]] como um sistema conectado de capacidades que apoia o [[HUB Negócios]], o [[Instituto HUB]] e o ecossistema HUB mais amplo. Ele preserva a cadeia `diagnosticar → planejar → conectar → implementar → medir → reconhecer → evoluir` e o método C.A.O.S., mantendo explícitas as fronteiras de oferta, as permissões de dados e a entrega de serviços. **Depende do BP-001:** nomes de ofertas, empacotamento comercial, compromissos de compra e mecânicas de receita devem ser reconciliados com a arquitetura de ofertas quando o BP-001 for aprovado; este documento não os inventa.

## 1. Núcleo compartilhado da plataforma e fronteiras dos módulos

### 1.1 Núcleo compartilhado da plataforma

O núcleo é o substrato operacional reutilizável, não um sétimo módulo voltado ao cliente. Suas capacidades são:

| Capacidade do núcleo | Atores | Entradas | Saídas | Dependências | Premissa não resolvida |
|---|---|---|---|---|---|
| Gestão de tenants e workspaces | Administrador da plataforma HUB; administrador da instituição | Workspace contratado, entidade legal, marca, região, política | Tenant/workspace isolado, configuração, estado do ciclo de vida | Identidade, modelo jurídico/entidade, decisões de cobrança/oferta | Se uma instituição pode possuir múltiplos sub-tenants e como funcionam as fronteiras white-label (`PRD-001`, `PRD-003`). |
| Registro de identidades e entidades | Operadores; participantes; responsáveis por integrações | Registros de pessoas, empresas, entidades, fornecedores e relacionamentos; consentimento | IDs canônicos, aliases, vínculos, histórico de mesclagem/correção | Modelo de dados canônico, sistemas de origem, controles LGPD | Qual sistema é autoritativo para cada identidade e quem aprova mesclagens (`PRD-003`). |
| Taxonomia, configuração e versionamento | Responsável pelo método; product owner; analistas | Definições do C.A.O.S., questionários, habilidades, indicadores, etapas, políticas | Configurações versionadas com datas de vigência | Governança, contratos de dados, configuração de ofertas do BP-001 | Se as configurações são globais, específicas por tenant ou bifurcáveis sem deriva do método (`PRD-001`, `PRD-004`). |
| Orquestração de fluxos de trabalho e casos | Operadores; implementadores; suporte | Casos de jornada, tarefas, aprovações, prazos, eventos | Transições de estado, filas, notificações, escalonamentos e eventos de auditoria | Módulos de jornada, modelo de suporte, catálogo de eventos | Se um caso pode abranger unidades legais distintas e quem é responsável por casos entre tenants (`PRD-002`, `PRD-005`). |
| Ledger de evidências, consentimento e auditoria | Participantes; revisores; governança; suporte | Submissões, arquivos, fontes, consentimento, decisões e correções | Proveniência, status das evidências, histórico de acesso, ações de retenção/exclusão | LGPD, armazenamento, governança de dados, revisão humana | Períodos de retenção e tratamento de dados derivados ainda precisam ser aprovados (`PRD-004`, `PRD-007`). |
| Primitivas de busca, notificações e relatórios | Todos os usuários autorizados; operadores | Entidades, eventos, medidas e preferências autorizados | Resultados de busca, alertas, exportações e visões operacionais | Permissões, definições de métricas, integrações | Quais canais e níveis de serviço são suportados no lançamento (`PRD-002`, `PRD-005`). |

O núcleo estabelece IDs estáveis, isolamento de tenants, limitação de finalidade, definições versionadas, histórico de eventos, linhagem de evidências, correções reversíveis e visões sensíveis a papéis. Ele não decide o que um cliente compra, não certifica um resultado, não seleciona fornecedores autonomamente nem emite o [[Selo HUB]]. Isso é configurado ou operado por meio de capacidades delimitadas e processos de serviço com responsáveis definidos.

### 1.2 Contratos dos módulos

Cada módulo possui um contrato de capacidade distinto. Um módulo pode consumir a saída publicada de outro módulo, mas não deve alterar silenciosamente sua fonte da verdade nem ocultar uma dependência.

| Módulo e fronteira | Atores principais | Entradas | Saídas | Dependências | Premissas não resolvidas |
|---|---|---|---|---|---|
| **HUB Intelligence** — contexto, diagnóstico, evidências, indicadores, maturidade e insights. Interpreta evidências autorizadas; não toma decisões de alto impacto sem revisão. | Analista, líder da instituição, participante, revisor | Contexto, respostas de questionários, evidências, eventos, benchmarks, definições | Diagnóstico, visão de maturidade, status das evidências, visões de indicadores, insight explicável | Registro do núcleo, consentimento, catálogo de métricas, revisão humana | Quais escalas de maturidade e benchmarks são válidos por coorte e quais resultados podem ser publicados (`PRD-004`, `PRD-007`). |
| **HUB Journey** — planos, etapas, recomendações, ações, progresso e acompanhamento de resultados. Coordena o trabalho; não garante a entrega. | Responsável pela jornada, implementador, participante, operador de suporte | Diagnóstico aprovado, metas, ações, marcos, dependências, decisões | Plano de jornada, tarefas, status, lembretes, fila de exceções, registro de progresso e resultados | Intelligence, Solutions, Connections, fluxos de suporte | Se uma jornada é de propriedade do cliente, do HUB ou compartilhada, e qual é o compromisso mínimo de serviço (`PRD-001`, `PRD-005`). |
| **HUB Solutions** — fornecedores, especialistas, conteúdos e intervenções curados. Apresenta candidatos; a curadoria e a adequação permanecem sob responsabilidade humana. | Curador, fornecedor, especialista, comprador, participante | Necessidade, lacuna de capacidade, perfil do fornecedor, evidências, disponibilidade, conflitos | Conjunto de soluções curadas, justificativa, termos, status de adequação, feedback | Registry, Academy, governança, regras comerciais | Critérios de curadoria, conflitos comerciais, responsabilidade do fornecedor e se comportamento de marketplace está no escopo (`PRD-001`, `PRD-004`, `PRD-007`). |
| **HUB Connections** — oportunidades, matching, apresentações e acompanhamento. Facilita um relacionamento; não promete aderência, compra ou receita. | Responsável pela oportunidade, comprador, participante, revisor de matches, parceiro | Briefing da oportunidade, elegibilidade, habilidades, consentimento, restrições de relacionamento | Matches candidatos, justificativa, apresentação, aceitação, interação e status do resultado | Intelligence, Solutions, registro, permissões, suporte | Limiar de explicabilidade de matches, regras de opt-in, tratamento de conflitos e responsável por apresentações malsucedidas (`PRD-003`, `PRD-004`, `PRD-007`). |
| **HUB Academy** — aprendizagem, desenvolvimento de capacidades e habilitação. Registra atividade e evidências de aprendizagem; não equipara conclusão a impacto de negócio. | Aprendiz, facilitador, responsável por conteúdo, avaliador, operador | Lacuna de capacidade, currículo, conteúdo, inscrição, atividade e avaliação | Plano de aprendizagem, conclusão, evidências de avaliação, sinal de capacidade | Journey, Intelligence, governança de conteúdo, identidade | Quais credenciais são significativas e como evidências de aprendizagem podem ser usadas em reconhecimento ou recomendações (`PRD-004`, `PRD-007`). |
| **HUB Recognition** — reconhecimento baseado em evidências e [[Selo HUB]]. Administra um processo de revisão independente, não um direito decorrente de vendas. | Candidato, avaliador, governança independente, instituição, público | Elegibilidade, pacote de evidências, critérios de revisão, declarações de conflito, recursos | Decisão, justificativa, período de validade, alegação pública/privada, registro de retirada/recurso | Evidências do Intelligence, governança, auditoria, independência jurídica | Nomeação/pagamento de avaliadores, separação da entrega comercial, autoridade de recurso e alegações públicas (`PRD-004`, `PRD-007`). |

### 1.3 Regras de fronteira e sequenciamento

1. Um módulo pode ser lançado como um serviço conduzido por humanos usando o ledger do núcleo antes que sua experiência completa de software exista, mas a fronteira do serviço deve estar documentada e ser auditável.
2. Uma recomendação, match ou insight é uma saída proposta com proveniência e nível de confiança, nunca um direito garantido ou uma promessa.
3. Uma ação do Journey deve referenciar uma necessidade de origem aprovada, responsável, prazo e medida de sucesso; tarefas soltas são notas operacionais, não resultados de produto.
4. O Recognition consome evidências e revisão independente; a implementação comercial não pode criar automaticamente elegibilidade para reconhecimento.
5. Cada módulo publica contratos versionados para entradas, saídas, estados, permissões e eventos de auditoria. O refinement deve transformar esses contratos em critérios de aceite antes de qualquer alegação de implementação.

## 2. Atores, papéis, tenants, entidades, permissões e visibilidade de dados

### 2.1 Modelo de tenants e entidades

O produto distingue **tenant**, **workspace**, **entidade legal** e **pessoa**. Um tenant é uma fronteira de isolamento e política. Um workspace é um programa, conta, ecossistema ou contexto de implantação dentro de um tenant. Uma entidade legal é uma organização governada com responsabilidades contratuais e de dados. Uma pessoa pode participar de vários workspaces somente por meio de relacionamentos e permissões explícitos. Empresa, fornecedor, associação, programa, projeto, oportunidade, jornada, avaliação, recomendação, match, contrato, transação, métrica e caso de reconhecimento são entidades separadas com IDs estáveis e histórico temporal.

Hierarquia de tenancy proposta:

```text
HUB platform operator
└── tenant (institution / client / ecosystem owner)
    ├── workspace(s) / program(s)
    ├── legal entities and organizational units
    ├── participants, suppliers and partners
    └── journeys, opportunities, evidence, measures and cases
```

O HUB pode operar um tenant interno para administração da plataforma e um workspace de reconhecimento separado quando os controles de independência exigirem. Não se deve presumir que [[HUB Negócios]] e [[Instituto HUB]] compartilhem dados sem restrições. A troca entre tenants exige finalidade declarada, base legal/consentimento quando aplicável, um responsável receptor, campos mínimos, expiração e trilha de auditoria.

### 2.2 Matriz de atores e papéis

| Ator / papel | Permissões típicas | Visibilidade de dados | Responsabilização e limites |
|---|---|---|---|
| Administrador da plataforma HUB | Configurar tenants, integrações, impersonação de suporte com aprovação, gerenciar acesso técnico | Metadados e diagnósticos de suporte; sem acesso padrão a conteúdo sensível de participantes | Mantém disponibilidade e controles de acesso; não pode aprovar reconhecimento nem alterar evidências silenciosamente. |
| Administrador de tenant / instituição | Gerenciar membros de workspaces, políticas, programas, formulários e configuração local | Registros no escopo do tenant; visões agregadas de participantes conforme a finalidade | É responsável pela administração local e pelo uso lícito; não pode visualizar outro tenant nem sobrepor decisões independentes. |
| Patrocinador executivo / de decisões | Visualizar dashboards aprovados, decisões, resultados e riscos | Dados agregados ou limitados por finalidade do workspace | Decide investimentos/prioridades; não recebe dados pessoais desnecessários. |
| Responsável pela jornada / implementador | Criar e gerenciar planos, tarefas, marcos, acompanhamentos e escalonamentos | Casos atribuídos e evidências mínimas necessárias | Responsável pela qualidade das ações de entrega e dos status; não pode certificar o impacto de terceiros sem revisão. |
| Analista / avaliador | Revisar evidências, executar análises aprovadas, elaborar insights e avaliações | Evidências necessárias para o caso/coorte atribuído; campos protegidos mascarados sempre que possível | Produz trabalho reproduzível e explicável; saída de alto impacto exige aprovação de segundo nível. |
| Curador / revisor de matches | Revisar candidatos de soluções e matches, registrar justificativas e conflitos | Perfis de candidatos e restrições relevantes, não dados privados não relacionados | Responsabilização humana por curadoria/matching, recusas e reversibilidade. |
| Participante / aprendiz | Enviar perfil, evidências, consentimento, metas, progresso e feedback; solicitar correção/recurso | Próprios registros mais informações de oportunidade/jornada explicitamente compartilhadas | Controla consentimento e exatidão; não obtém acesso a dados confidenciais de pares. |
| Fornecedor / especialista / parceiro | Manter perfil aprovado, responder a oportunidades, entregar trabalho atribuído e submeter evidências | Próprio perfil, solicitações atribuídas e dados de relacionamentos aceitos | Responsável por submissões verídicas e termos de entrega; sem acesso a diagnósticos de todo o cliente. |
| Operador de suporte | Triar tickets, inspecionar metadados de auditoria, executar correções e escalonamentos aprovados | Dados mínimos necessários do caso; conteúdo sensível restrito | Restaura o serviço e registra ações; não pode alterar decisões nem suprimir histórico de auditoria. |
| Revisor de governança / privacidade / jurídico | Revisar acessos, consentimentos, incidentes, alegações, recursos e evidências de controles | Acesso completo apenas quando justificado, registrado e com prazo determinado | Aprova controles e resolve conflitos; preserva independência de pressões comerciais. |
| Avaliador de reconhecimento / governança do Selo | Revisar elegibilidade e evidências, conceder/retirar reconhecimento conforme carta de princípios | Somente o caso de reconhecimento, com controles de conflito e independência | Único responsável pela decisão de reconhecimento; deve declarar impedimento, explicar, ouvir recursos e manter a trilha. |

Os papéis são atribuíveis nos escopos de tenant, workspace, caso e entidade. O cargo de um usuário não é permissão. Toda ação privilegiada exige ator, escopo, motivo, carimbo de data/hora, estado anterior/posterior e versão aplicável da política.

### 2.3 Princípios de permissão e visibilidade

- **Negação por padrão:** o acesso começa sem visibilidade e é concedido por papel, tenant, workspace, relacionamento com a entidade, finalidade e tempo.
- **Menor privilégio:** expor os campos mínimos necessários para a tarefa; usar agregação, mascaramento e pseudonimização para análises.
- **Vinculação à finalidade:** o consentimento ou a base legal acompanha os dados por recomendações, matches, medições, reconhecimento e derivados; uma nova finalidade exige uma nova decisão.
- **Separação de funções:** quem submete, revisa, aprova, avalia e publica não deve ser a mesma pessoa para saídas de alto impacto.
- **Isolamento de tenants:** busca, exportações, notificações, caches e ferramentas de suporte devem fazer cumprir as fronteiras de tenant, inclusive caminhos indiretos de relacionamento.
- **Direitos dos participantes:** participantes podem visualizar registros relevantes, solicitar correção, retirar-se quando aplicável, recorrer de decisões e obter saídas portáveis, sujeitas a restrições legais.
- **Auditoria e reversibilidade:** exclusão, correção, concessão de acesso, sobreposições, publicações e retiradas são eventos append-only; saídas derivadas são reavaliadas em vez de silenciosamente reescritas.

A matriz de autorização permanece como entregável de refinement. O blueprint especifica as dimensões de decisão, mas não afirma que a aplicação existe. Isso trata diretamente de [[PRD-003]] e [[PRD-002]].

## 3. Jornada ponta a ponta: contexto, diagnóstico, ação, medição, reconhecimento e evolução

A jornada é um ciclo de vida de caso governado, não meramente uma sequência de telas. Pode começar com uma instituição, empresa, dono de ecossistema, participante ou dono de oportunidade, e pode retornar a etapas anteriores quando as evidências mudam.

| Etapa | Atividade sob responsabilidade humana | Capacidade do produto | Entradas | Saídas / critérios de saída | Dependências e premissas não resolvidas |
|---|---|---|---|---|---|
| **Contexto** | Patrocinador e responsável pela jornada definem propósito, escopo, stakeholders, restrições, base legal, hipótese de sucesso e direitos de decisão. | Criar tenant/workspace/caso; configurar contexto; checklist de consentimento e escopo. | Briefing da organização/contexto, oportunidade, participantes, contratos, finalidade. | Carta de caso aprovada com responsável, escopo, status de privacidade e plano de linha de base. | Depende do BP-001: gatilho exato da oferta e compromisso do comprador. Tenancy e base legal não resolvidos (`PRD-001`, `PRD-003`). |
| **Onboarding** | Operador verifica identidades, convites, papéis, acessibilidade e expectativas. | Resolução de identidade, convites, perfil, consentimento, rota de suporte. | Atributos de identidade, declarações de relacionamento, permissões, idioma/preferências. | Identidades reconciliadas, participantes ativos e consentimento registrado. | Identidade canônica, mesclagem e processo de suporte não resolvidos (`PRD-002`, `PRD-003`). |
| **Diagnóstico** | Analista seleciona/aprova versão do instrumento, revisa o contexto, interpreta respostas e sinaliza limitações. | Questionários versionados, entrada de evidências, completude/status e diagnóstico preliminar. | Respostas, documentos, dados de origem, taxonomia de habilidades/capacidades, métricas de linha de base. | Diagnóstico reproduzível com referências às evidências, confiança, lacunas e revisor designado. | Versionamento, padrões de evidência, atributos protegidos e limiares de revisor não resolvidos (`PRD-004`, `PRD-007`). |
| **Priorização / Arquitetura** | Patrocinador e responsável pela jornada escolhem metas, sequência, responsáveis, medidas e tratamento de riscos. | Workspace de priorização e plano de jornada. | Diagnóstico aprovado, restrições, orçamento/capacidade, resultados-alvo. | Plano formalmente aprovado com marcos, dependências, registro de decisões e regras de escalonamento. | Empacotamento de oferta e níveis de serviço dependem do BP-001; sem priorização automatizada de questões de alto impacto (`PRD-001`, `PRD-005`, `PRD-007`). |
| **Ação / Operação** | Implementadores entregam intervenções, recrutam participantes, curam soluções, fazem apresentações e registram decisões. | Tarefas, catálogo de soluções, fluxo de oportunidade/match, comunicações e notas do caso. | Plano, conjunto de candidatos, disponibilidade, termos, consentimento, justificativa e aprovações. | Ação aceita, responsável designado, prazo, evidência de entrega e exceções não resolvidas. | Curadoria, matching, responsabilidade do fornecedor e SOPs operacionais não resolvidos (`PRD-004`, `PRD-005`, `PRD-007`). |
| **Acompanhamento** | O responsável pela jornada verifica participação, remove bloqueios, escala e registra não entrega ou contexto alterado. | Progresso, lembretes, fila de exceções, escalonamento e controle de mudanças. | Eventos de atividade, feedback, status dos marcos, incidentes e contexto atualizado. | Status atual, registro de decisão/exceção, plano revisado ou recomendação de encerramento. | Autoridade de escalonamento e SLAs de suporte não resolvidos (`PRD-002`, `PRD-005`). |
| **Medição** | Analista e patrocinador acordam denominadores, comparam a linha de base, revisam atribuição e qualificam evidências de resultado. | Catálogo de indicadores, captura de resultados, linhagem de evidências e relatórios. | Linha de base, eventos, métricas de negócio, coorte/benchmark, exposição à intervenção. | Resultado descritivo/antecipatório/operacional/experimental/financeiro com estado das evidências; sem alegação causal automática. | Definições de métricas, fonte da verdade, atribuição e estados de valor dependem dos blueprints de dados/finanças; o produto não pode superestimar alegações (`PRD-004`, `PRD-007`). |
| **Reconhecimento** | Avaliador independente revisa elegibilidade, conflitos, evidências, recursos e alegação pública/privada. | Caso de reconhecimento, fila de revisão, decisão, validade e trilha de retirada. | Pacote de evidências aprovado, versão dos critérios, declaração do avaliador. | Decisão de reconhecimento ou não reconhecimento fundamentada, rota de recurso e alegação controlada. | Independência e governança do [[Selo HUB]] não resolvidas; a entrega comercial não pode garantir reconhecimento (`PRD-007`). |
| **Evolução** | Patrocinador, participante e HUB revisam aprendizados, atualizam método/conteúdo, renovam/encerram a jornada e decidem o próximo experimento. | Retrospectiva, feedback, liberação de versão, renovação/encerramento e ciclo de aprendizagem. | Resultados, feedback, incidentes, custos, adoção, reconhecimento e riscos abertos. | Registro de decisão, configuração atualizada, nova linha de base ou caso encerrado com segurança. | Portões de expansão de automação/módulos e modelo de renovação de oferta dependem do BP-001 e PRD-005; preservar versões antigas para auditoria. |

Em cada etapa, uma transição de estado só é válida quando campos obrigatórios, permissões, status das evidências e aprovações estão presentes. Uma transição falha cria um item visível na fila em vez de avançar silenciosamente. Um participante pode pausar, corrigir ou recorrer sem perder o histórico completo. Uma jornada pode ser encerrada como incompleta; encerramento não equivale a sucesso.

## 4. Console do operador, experiências de participantes, fluxos de suporte e tratamento de exceções

### 4.1 Console do operador

O console do operador é o plano de controle para entrega humana. Suas áreas conceituais mínimas são:

1. **Fila de trabalho:** casos por etapa, prioridade, SLA, risco, evidências faltantes e responsável; os filtros devem respeitar tenant e finalidade.
2. **Linha do tempo do caso:** contexto, submissões, decisões, ações, comunicações, exceções e eventos de auditoria imutáveis.
3. **Revisão de evidências:** instrumento versionado, referências de origem, completude, comentários do revisor, confiança, conflitos e controles de aprovação.
4. **Curadoria e matching:** comparação de candidatos, justificativa, exclusões, consentimento, conflitos, sobreposição humana e estado do acompanhamento.
5. **Operações de jornada:** marcos, dependências, bloqueios, escalonamentos, solicitações de mudança e captura de resultados.
6. **Medição e publicação:** definições de métricas, denominador, estado das evidências, validação do revisor e portão de alegações.
7. **Acesso e suporte:** concessão de papéis, aprovação de impersonação, links de tickets, solicitações de correção, estado de DSAR/exclusão e tratamento de incidentes.

Estas são áreas de capacidade, não uma interface implementada. Um esboço de dashboard ou um conceito mobile não pode ser usado como evidência de que qualquer fluxo de trabalho, permissão ou integração existe. [[PRD-002]] exige que o console seja convertido em comportamento de sistema e critérios de aceite.

### 4.2 Experiências de participantes e parceiros

Participantes precisam de uma experiência acessível e de baixa fricção para entender propósito, consentimento, perfil, solicitações, ações, progresso, evidências, feedback e direitos. Fornecedores e especialistas precisam de uma experiência separada para verificação de perfil, oportunidades, resposta, termos, entrega e status de pagamento/contrato quando no escopo. Patrocinadores precisam de uma visão orientada a decisões do progresso e riscos aprovados, não de dados pessoais brutos sem restrições. Avaliadores precisam de um workspace de reconhecimento segregado.

Todas as experiências devem mostrar status e próxima ação em linguagem simples, distinguir rascunhos de saídas aprovadas, identificar quem é o responsável e oferecer caminhos de correção/recurso/suporte. A configuração white-label pode mudar a apresentação e a terminologia do tenant, mas não pode remover a integridade metodológica do HUB, os rótulos de evidência, a auditabilidade, os avisos de privacidade nem as salvaguardas de reconhecimento independente.

### 4.3 Fluxo de suporte

O suporte segue um blueprint de serviço baseado em severidade:

1. **Abertura:** autenticar o solicitante, classificar tenant/caso, capturar impacto, urgência, sinalização de dados sensíveis e consentimento para investigar.
2. **Triagem:** determinar se é dúvida de uso, acesso, correção de dados, bloqueio de fluxo de trabalho, segurança/equidade, privacidade, segurança da informação ou incidente de serviço.
3. **Contenção:** preservar evidências, suspender publicação/acesso inseguros, prevenir ações duplicadas e notificar o responsável.
4. **Resolução:** fornecer resposta documentada, correção, reprocessamento, rollback, encaminhamento de recurso ou escalonamento jurídico/privacidade.
5. **Encerramento:** obter confirmação quando apropriado, registrar causa raiz, atualizar status e reter evidências de auditoria.
6. **Aprendizado:** converter problemas recorrentes em defeitos de produto, atualizações de SOP, mudanças de taxonomia ou uma decisão de não automatizar.

Operadores de suporte podem inspecionar apenas os dados mínimos necessários. A impersonação tem prazo determinado, código de motivo, aprovação e registro completo. Nenhuma ação de suporte pode apagar um evento de auditoria ou sobrepor uma decisão de avaliador/aprovação sem a autoridade designada.

### 4.4 Exceções e escalonamento

| Exceção | Controle imediato | Responsável pelo escalonamento | Registro exigido / resultado |
|---|---|---|---|
| Evidência ausente, conflitante ou de baixa qualidade | Marcar como incompleta; impedir aprovação/publicação; solicitar correção | Líder de analistas / responsável pela jornada | Origem, impacto, solicitação, resolução e versão da evidência. |
| Colisão de identidade ou duplicata suspeita | Colocar mesclagem em quarentena; preservar ambos os registros | Guardião de identidade/dados | Justificativa do match, decisão, derivados afetados e caminho de reversão. |
| Acesso indevido ou vazamento entre tenants | Revogar sessão/permissão; preservar logs; avaliar incidente | Responsável por segurança/privacidade | Escopo, contenção, notificação e remediação. |
| Recomendação/match inseguro, injusto ou inexplicável | Pausar liberação; revisão humana; oferecer alternativa | Revisor de inteligência responsável | Entradas, justificativa, verificação de impacto sobre grupos protegidos, sobreposição e recurso. |
| Reclamação de fornecedor/participante ou apresentação malsucedida | Pausar próxima ação; coletar ambas as versões; evitar retaliação | Responsável por relacionamento/jornada | Reclamação, verificação de conflito, resposta, reparação e aprendizado. |
| Marco perdido ou bloqueio de entrega | Sinalizar em risco; replanejar ou escalar, não encerrar silenciosamente | Responsável pela jornada / patrocinador | Causa, compromisso revisado, responsável e decisão. |
| Conflito de reconhecimento, contestação ou pedido de retirada | Declarar impedimento do avaliador; congelar alegação; abrir recurso | Governança independente do Selo | Declaração de conflito, painel de revisão, decisão e ação sobre alegação pública. |
| Anomalia de métrica ou alegação de valor disputada | Congelar publicação; marcar como provisória; reconciliar linhagem | Revisor de medição/finanças | Definição, origem, denominador, correção e status de aprovação. |

O tratamento de exceções é um requisito operacional central, não um recurso apenas para casos raros. O SOP completo, a titularidade das filas e os níveis de serviço permanecem em aberto sob [[PRD-005]].

## 5. Atividades conduzidas por humanos, assistidas e de automação futura

A classificação de automação é uma fronteira de governança. “Assistida” significa que um sistema pode propor, resumir, priorizar ou detectar, mas um humano qualificado verifica o resultado e detém a decisão. “Candidato futuro” significa que nenhuma automação deve ser liberada até que evidência, equidade, explicabilidade, reversibilidade, segurança, base legal e capacidade operacional estejam aprovadas.

| Atividade | Fronteira atual do blueprint | Entradas / saídas | Responsabilização humana | Dependências / portão |
|---|---|---|---|---|
| Configuração de tenant, atribuição de papéis e consentimento | Conduzida por humanos; validação assistida pode sinalizar campos faltantes | Contrato/contexto → tenant, papéis, consentimento | Administrador e responsável por privacidade aprovam | Revisão de autorização e LGPD (`PRD-002`, `PRD-003`). |
| Resolução de identidade e deduplicação | Sugestões assistidas de candidatos; aprovação humana da mesclagem | Registros de identidade → vínculo/mesclagem propostos | Guardião de dados detém a mesclagem e a reversão | Testar resolução, proveniência e correção (`PRD-003`). |
| Seleção de questionário e interpretação do diagnóstico | Conduzida por humanos; completude e comparação assistidas | Contexto/evidência → rascunho do diagnóstico | Analista assina a interpretação das evidências | Instrumentos versionados e reprodutibilidade (`PRD-004`). |
| Extração e sumarização de evidências | Somente assistida; links de origem e incerteza obrigatórios | Documentos/eventos → fatos preliminares | Revisor verifica cada fato material | Linhagem de evidências, privacidade, auditoria de modelo/versão (`PRD-004`, `PRD-007`). |
| Priorização e planejamento da jornada | Conduzida por humanos; sugestões assistidas de sequenciamento | Diagnóstico/metas → plano proposto | Patrocinador e responsável pela jornada aprovam prioridades | Fronteira oferta/serviço e revisão de impacto (`PRD-001`, `PRD-007`). |
| Curadoria de soluções | Conduzida por humanos; busca/filtro assistidos | Necessidade/catálogo → conjunto de candidatos | Curador decide inclusão e conflito/aderência | Governança de fornecedores, explicabilidade e responsabilidade (`PRD-004`, `PRD-007`). |
| Matching e apresentações | Conduzido por humanos; ranking assistido permitido apenas como rascunho | Oportunidade/perfis → justificativa e candidatos | Revisor de matches aprova, participante dá opt-in | Equidade, consentimento, recursos e liberação reversível (`PRD-003`, `PRD-007`). |
| Lembretes, roteamento de tarefas e alertas de SLA | Automação operacional assistida | Eventos/status → notificações/filas | Responsável pela jornada/suporte trata exceções | Preferências de notificação, SOP de escalonamento (`PRD-002`, `PRD-005`). |
| Agregação de progresso e relatórios descritivos | Assistida/automatizada após aprovação das métricas | Eventos → status e indicadores descritivos | Analista valida anomalias e publicação | Catálogo de métricas e linhagem de dados (`PRD-004`). |
| Atribuição de resultados, valor financeiro e alegações públicas | Conduzida por humanos; sem alegações causais ou financeiras autônomas | Medidas/evidências → resultado/alegação revisados | Responsáveis por medição, finanças e alegações validam | Metodologia certificada por evidências; controles relacionados de finanças/governança. |
| Elegibilidade de reconhecimento e decisão do Selo | Conduzida por humanos e independente | Evidências/critérios → decisão e alegação | Avaliador/governança independente decide | Independência, conflitos, recurso e retirada (`PRD-007`). |
| Classificação de suporte e respostas sugeridas | Assistida; casos de segurança/privacidade sempre escalados | Ticket → categoria/resposta sugerida | Operador de suporte valida e envia | SOP de incidente, privacidade e exceção (`PRD-002`, `PRD-005`, `PRD-007`). |
| Recomendações preditivas, uplift ou ação autônoma | Somente candidato futuro | Dados históricos/contextuais aprovados → proposta | Revisor responsável nomeado; sem execução silenciosa | Linhas de base, equidade, drift, rollback, model cards e aprovação. |

A automação futura precisa conquistar escopo por meio de desempenho medido contra linhas de base humanas, verificações por subgrupo, incerteza clara, versionamento, kill switch, rollback, recursos, resposta a incidentes e um registro de aprovação. Conveniência do fundador não é um portão de automação. Decisões de alto impacto permanecem conduzidas por humanos mesmo que um modelo tenha bom desempenho.

## 6. Premissas, decisões de produto não resolvidas e rastreabilidade de gaps

As seguintes premissas estão deliberadamente em aberto. Cada uma está vinculada a um ou mais gaps registrados e deve ser convertida em uma decisão de refinement, pacote de evidências ou exclusão explícita de escopo.

## Premissas Abertas e Decisões Não Resolvidas

| Premissa / decisão não resolvida | IDs de gaps afetados | Ação de refinement |
|---|---|---|
| As capacidades do núcleo compartilhado podem atender [[HUB Negócios]], [[Instituto HUB]] e [[Plataforma HUB]] sem violar fronteiras legais, financeiras, de dados ou de independência. | PRD-001, PRD-003, PRD-007 | Produzir matriz unidade-capacidade e de fluxos de dados; obter revisão jurídica, de governança e da arquitetura de ofertas. |
| O BP-001 definirá um comprador, oferta, ativação e fronteira de serviço coerentes para cada primeira release; o BP-002 não deve implicar um pacote comercial não aprovado. | PRD-001, PRD-005 | Reconciliar contratos de módulos com o BP-001; registrar cada capacidade como primitiva de plataforma, oferta configurada ou serviço humano. |
| Uma hierarquia de tenant/workspace pode suportar implantações institucionais, de clientes, de programas e white-label preservando o isolamento. | PRD-002, PRD-003 | Testar a matriz de autorização/tenancy em relacionamentos diretos, delegados e entre tenants; aprovar comportamento de exportação e saída. |
| Identidades, entidades e relacionamentos canônicos podem ser resolvidos com precisão aceitável e correções reversíveis. | PRD-003, PRD-004 | Definir guardião de identidade, chaves, limiares de mesclagem, quarentena, survivorship e dataset de teste. |
| Questionários, taxonomias, indicadores e critérios versionados podem tornar os resultados reproduzíveis entre tenants e ao longo do tempo. | PRD-001, PRD-004 | Especificar ciclo de vida de schema/versão, datas de vigência, regras de migração e testes de aceite. |
| Participantes fornecerão evidências e consentimento quando finalidade, benefício, visibilidade, retenção e retirada estiverem claros. | PRD-002, PRD-003, PRD-004 | Validar onboarding, linguagem de consentimento, minimização de dados, jornadas de correção e retirada. |
| Diagnóstico, curadoria e matching assistidos podem melhorar o throughput dos operadores sem deslocar julgamento responsável nem criar resultados injustos. | PRD-004, PRD-007 | Estabelecer linha de base humana, padrão de explicação, revisão de equidade, sobreposição e protocolo de incidentes antes da liberação. |
| A entrega operacional pode funcionar por meio de filas e SOPs documentados sem intervenção não documentada do fundador. | PRD-002, PRD-005 | Elaborar service blueprint de cada etapa, atribuir um único responsável, executar piloto controlado e registrar exceções. |
| Medidas de progresso e resultado podem permanecer distintas de impacto causal, caixa realizado, margem e reconhecimento. | PRD-004, PRD-007 | Conectar semântica de métrica/valor aos blueprints de dados e finanças; fazer cumprir rótulos de evidência e portões de publicação. |
| O [[Selo HUB]] pode permanecer independente enquanto usa evidências produzidas no ecossistema HUB mais amplo. | PRD-004, PRD-007 | Redigir carta do avaliador, regras de conflito, separação de pagamentos, recursos, retirada e controles de alegação pública. |
| Fluxos de suporte, correção, recurso e incidentes podem preservar a confiança do usuário sem expor dados confidenciais não relacionados. | PRD-002, PRD-003, PRD-005, PRD-007 | Definir matriz de severidade/SLA, acesso mínimo necessário, árvore de escalonamento, auditoria e casos de teste. |
| Expansão futura de módulos ou automação será condicionada por evidências, e não por pressão de roadmap. | PRD-001, PRD-004, PRD-005, PRD-007 | Criar registro de decisão de expansão com limiares de desempenho, segurança, equidade, capacidade, custo e reversibilidade. |

## Dependências Entre Blueprints

| Dependência | Impacto no produto | Regra de coordenação |
|---|---|---|
| **BP-001 — arquitetura de ofertas/receita do HUB** | Determina quem compra qual jornada, níveis de serviço exigidos, empacotamento, responsável comercial e movimento de renovação. | Depende do BP-001: reconciliar antes de aprovar escopo de módulo ou alegar uma oferta de lançamento; não inventar conteúdo do BP-001. |
| **BP-003 — blueprint de dados/inteligência** | Define entidades canônicas, contratos de eventos e métricas, linhagem, resolução de identidade, medição e controles de modelo. | Os contratos de produto devem consumir semântica aprovada; nenhum resultado de produto pode implicar um contrato de dados não aprovado. |
| **BP-004 — blueprint de tecnologia/arquitetura** | Define ambientes, integrações, IAM, aplicação de tenancy, confiabilidade, observabilidade, release e ferramentas de suporte. | Tratar todos os comportamentos técnicos aqui como requisitos, não evidências de implementação; vincular critérios de aceite ao BP-004. |
| **BP-005 — modelo operacional** | Define responsáveis, service blueprints, pessoal, RACI, filas, escalonamento e capacidade de entrega. | Fluxos de trabalho de produto devem ter responsáveis humanos nomeados e SOPs; o PRD-005 permanece aberto até que exista prova operacional. |
| **BP-006 — governança/jurídico/confiança** | Determina separação de entidades, papéis LGPD, PI, responsabilidade, alegações, independência do Selo, recursos e obrigações de auditoria. | Nenhuma capacidade de alto impacto ou voltada ao público passa pela aprovação de produto sem validação da governança. |
| **BP-007 — marca/mercado** | Determina nomenclatura, regras white-label, contextos-alvo, alegações aprovadas, linguagem do público e fronteiras de categoria. | Visuais e textos devem corresponder à maturidade das evidências; nenhum esboço de interface ou narrativa implica funcionalidade implementada. |
| **BP-008 — lançamento/evolução** | Define sequenciamento, portões de release, evidências de adoção, controle de mudanças e revisões de evolução. | A capacidade de produto está pronta para lançamento somente quando portões integrados, suporte e critérios de rollback passarem. |

A fronteira do produto, portanto, só é coerente como um sistema conectado: intenção de oferta → capacidade de produto → evidência de dados → aplicação técnica → responsabilização operacional → aprovação de governança → lançamento e aprendizado. Qualquer contradição descoberta a jusante reabre a premissa de produto afetada em vez de ficar oculta em um módulo local.
