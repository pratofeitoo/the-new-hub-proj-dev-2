---
title: "Blueprint do Modelo Operacional HUB"
blueprint_id: BP-005
status: em-revisao
layer: blueprint
area: operations
source_task: "[[04-project-management/tarefas/BP-005_HUB_Blueprint_Modelo_Operacional]]"
created: 2026-08-21
updated: 2026-08-21
gap_ids: [STR-007, PRD-005, PRD-007, GOV-008, LCH-002]
---

# BP-005 — Blueprint do Modelo Operacional HUB

> [!warning] Limite de maturidade
> Este é um blueprint operacional e um desenho do estado-alvo. Ele descreve o sistema mínimo com responsabilidades definidas que deve ser refinado, dimensionado, instrumentado e aprovado; não afirma que a [[Plataforma HUB]] ou qualquer nível de serviço esteja atualmente em produção.

Este modelo transforma a cadeia HUB — **diagnosticar → planejar → conectar → implementar → medir → reconhecer → evoluir** — em um sistema repetível de entrega para a marca e estratégia HUB, [[HUB Negócios]], [[Instituto HUB]] e [[Plataforma HUB]]. Ele preserva a responsabilidade humana por interpretação, curadoria, matching, decisões de alto impacto e reconhecimento, distinguindo trabalho manual, trabalho de parceiros e automação futura.

## 1. Etapas C.A.O.S. mapeadas para funções operacionais, atividades, artefatos e decisões

As etapas abaixo são estados de operação do serviço, não apenas telas voltadas ao cliente. Cada etapa tem um único owner operacional responsável, contribuidores nomeados, um artefato que comprova a transição e uma decisão que permite o avanço. Os títulos das funções são placeholders de capacidade até que o mapa de autoridade encerre [[STR-007]] e [[GOV-008]].

| Etapa C.A.O.S. | Função responsável | Atividades principais | Artefatos / evidências necessários | Decisão de gate |
|---|---|---|---|---|
| **Contexto** | Engagement Lead | Qualificar a instituição ou empresa, definir sponsor e escopo, mapear atores, consentimento e restrições, estabelecer baseline e pergunta de sucesso. | Opportunity brief; mapa de stakeholders/tenants; registro de consentimento e finalidade; inventário de dados do baseline; log de riscos e dependências. | Aceitar, redefinir o escopo ou rejeitar o engagement; confirmar sponsor, base legal de operação e escopo do diagnóstico. |
| **Arquitetura** | Solution Architect / Method Lead | Traduzir o diagnóstico em estado-alvo, jornada, portfólio de intervenções, medidas, service blueprint, responsabilidades e limite comercial. | Plano C.A.O.S.; mapa de capacidades e gaps; backlog priorizado; contrato de métricas; rascunho de RACI/direitos de decisão; statement of work. | Aprovar o plano, orçamento, medidas, direitos de decisão e pré-requisitos de prontidão antes da execução. |
| **Operação** | Delivery Lead | Conduzir recrutamento/onboarding, coleta de evidências, curadoria, matching, implementação e acompanhamento; gerenciar filas, trabalho de parceiros e exceções. | Checklist de onboarding; registro de evidências; shortlist curada; justificativa do match; plano de ação; log de implementação; registros de problemas e escalonamentos. | Continuar, pausar, sobrescrever, substituir ou escalar uma intervenção com base em evidências, risco e capacidade. |
| **Sustentação** | Outcomes & Trust Lead | Medir adoção e resultados, reconciliar evidências, apoiar usuários, gerenciar incidentes, reconhecer somente por meio de controles independentes, capturar aprendizados e renovar ou encerrar. | Relatório de resultados; pacote de lineage e reconciliação; log de suporte/incidentes; pacote de revisão do Selo HUB quando aplicável; registro de lições aprendidas; decisão de renovação/encerramento. | Publicar, restringir ou retirar um resultado; renovar, redesenhar, graduar ou encerrar a jornada. |

### Transições entre etapas e modos operacionais

1. **Baseline manual (entrega inicial):** operadores usam templates controlados, filas e checklists de revisão. Uma segunda pessoa revisa outputs de alto impacto. Nenhuma planilha ou conversa é o único sistema de registro depois que um workflow de produção é aprovado.
2. **Entrega assistida por parceiros:** parceiros podem recrutar participantes, fornecer capacidade especializada, implementar uma intervenção ou fornecer dados de origem. O owner responsável do HUB mantém a responsabilidade por aceitação, evidências, conflitos e escalonamento; parceiros não podem alterar silenciosamente definições, claims ou gates de decisão.
3. **Automação futura:** [[HUB Intelligence]], [[HUB Journey]], [[HUB Solutions]], [[HUB Connections]], [[HUB Academy]] e [[HUB Recognition]] podem automatizar roteamento, lembretes, validação e recomendações de baixo risco somente após um gate documentado demonstrar qualidade, reversibilidade, auditabilidade, conformidade com a LGPD e override humano. A automação propõe; humanos responsáveis aprovam decisões de alto impacto.

### Registro operacional e estados de decisão

Cada case, programa ou oportunidade tem um identificador estável, owner, etapa atual, próxima ação, data de vencimento, status de evidências, status de risco e histórico de decisões. Os estados válidos são **draft, ready, active, blocked, under-review, approved, rejected, paused, withdrawn, completed** e **closed**. Uma transição exige ator, timestamp, motivo, referências de evidência e, quando relevante, reviewer. Isso dá à plataforma e aos operadores um vocabulário comum de eventos sem implicar que a implementação dos eventos já exista.

## 2. Responsabilidades por vendas, onboarding, diagnóstico, curadoria, matching, implementação, medição, suporte e escalonamento

O service blueprint a seguir torna visíveis as transições críticas. “Manual” é o alvo padrão para as operações iniciais; “partner” identifica trabalho entregue externamente; “future automation” identifica uma assistência elegível, não uma promessa atual.

| Capacidade | Owner responsável no HUB | Responsabilidades manuais | Responsabilidades do parceiro | Limite da automação futura | Transição / evidência |
|---|---|---|---|---|---|
| Vendas e qualificação | Commercial Lead | Qualificar comprador, orçamento, caso de uso, sponsor, rota e claims; evitar prometer ROI ou resultados do Selo sem suporte. | Apresentar oportunidades qualificadas e divulgar relacionamento ou dependência comercial. | Lead scoring e lembretes podem priorizar o trabalho; não há aceitação ou claim automáticos. | Qualified opportunity brief → owner de Contexto. |
| Onboarding e recrutamento | Client Success / Onboarding Lead | Confirmar contrato, funções, consentimento, acesso, cohort, treinamento e canal de suporte; recrutar participantes de forma justa e documentar não resposta. | Fornecer acesso dos participantes ou facilitação local sob scripts e termos de dados aprovados. | Convites, verificações de elegibilidade e lembretes podem ser automatizados com opt-out e auditoria. | Registro de conclusão do onboarding; mapa de consentimento/finalidade; fila de acessos não resolvidos. |
| Diagnóstico | Diagnosis Lead | Conduzir questionários/entrevistas, validar evidências, interpretar o contexto e registrar incerteza ou ausência de dados. | Fornecer expertise de domínio ou evidência de origem, não um diagnóstico sem revisão. | Detecção de anomalias e sumarização podem auxiliar; diagnóstico e inferência sensível exigem revisão. | Relatório diagnóstico e registro de evidências → gate de Arquitetura. |
| Curadoria | Solutions / Curation Lead | Definir critérios de seleção, avaliar fornecedores/especialistas/conteúdo, verificar conflitos, disponibilidade, preço e aderência; manter justificativa de aprovação/rejeição. | Enviar capacidades, evidências, termos e capacidade de entrega; cumprir controles de qualidade e conflito. | Busca, sugestões de taxonomia e detecção de duplicatas podem auxiliar; ranking não substitui aprovação do curador. | Shortlist versionada, proveniência e declaração de conflito → Matching. |
| Matching e conexão | Connections Lead | Confirmar demanda, capacidade, consentimento e aderência; explicar a recomendação; fazer a introdução e acompanhar aceitação, recusa e conflito. | Responder no prazo acordado, divulgar conflitos, respeitar o escopo acordado e reportar o resultado. | Recuperação de candidatos e fit scoring podem auxiliar; reviewer responsável aprova matches de alto impacto ou consequenciais. | Registro do match, justificativa, consentimento, resposta e tarefa de acompanhamento. |
| Implementação | Delivery / Implementation Lead | Traduzir o plano em milestones, atribuir owners, gerenciar dependências, verificar conclusão e intervir quando a adoção atrasar. | Entregar o trabalho contratado, fornecer status/evidências e escalar prontamente o risco de entrega. | Roteamento de workflow, lembretes e alertas de progresso podem ser automatizados; mudança de escopo continua aprovada por humanos. | Statement of work, log de milestones, evidência de aceitação e registro de mudanças. |
| Medição e valor | Outcomes & Measurement Lead | Definir denominador e baseline, coletar evidências, reconciliar a lineage de origem, separar valor potencial/influenciado/validado/realizado e reportar ressalvas. | Fornecer dados de origem e atestar entrega/resultados sob restrições de finalidade dos dados. | Verificações de qualidade de dados, cálculos de métricas e alertas podem ser automatizados quando as definições estiverem versionadas. | Execução da métrica, pacote de lineage, status de evidências, aprovação e registro de publicação. |
| Suporte | Support Lead | Operar intake, triagem, base de conhecimento, comunicações com usuários, atualizações de status e confirmação de encerramento. | Suporte de primeira linha apenas quando atribuído contratualmente; encaminhar questões de plataforma, privacidade e segurança ao HUB. | Categorização, detecção de duplicatas e notificações de status podem ser automatizadas; usuários mantêm um canal humano. | Ticket, severidade, owner, timestamps, resolução e confirmação do usuário. |
| Escalonamento e resposta a incidentes | Incident Commander (por incidente) | Declarar severidade, proteger participantes/dados, coordenar responsáveis técnicos, jurídicos, do cliente e de comunicações, preservar evidências e conduzir revisão pós-incidente. | Conter o impacto do lado do parceiro, preservar logs e notificar o HUB no prazo acordado; nunca investigar seu próprio conflito sem revisão independente. | Monitoramento e alertas podem detectar; contenção automatizada limita-se a ações reversíveis pré-aprovadas. | Registro do incidente, timeline, decisões, notificações, causa-raiz, ação corretiva e aprovação de encerramento. |

### Human-in-the-loop, overrides e appeals

A fila de revisão deve incluir conclusões de diagnóstico, exclusões de elegibilidade, recomendações sensíveis ou de alto impacto, matches que afetem acesso ou oportunidade, claims de medição, claims públicos e toda decisão do [[Selo HUB]]. O reviewer é responsável pela decisão, não apenas por clicar em aprovação. Um reviewer deve ser competente, livre de conflitos, capaz de inspecionar evidências de origem e registrar a justificativa.

Um operador pode fazer **override** de uma recomendação quando evidências, contexto ou segurança exigirem. O override registra resultado original, novo resultado, motivo, evidência, reviewer e data de expiração/revisão. Um participante, cliente ou parceiro pode fazer **appeal** de uma decisão de exclusão, match, métrica ou reconhecimento por um canal documentado. Appeals pausam publicação ou execução quando houver possibilidade de dano, são encaminhados a um reviewer independente ou com autorização diferente e produzem um resultado por escrito. Coordenar com BP-006: definir autoridade final, independência, retenção e tratamento jurídico dessas filas sem pressupor seu blueprint de governança.

## 3. Responsabilidades do Founder versus capacidades delegadas

O envolvimento do Founder é uma restrição de design a ser gerenciada, não um controle operacional. Founders definem a intenção e protegem a coerência; não devem permanecer como caminho de aprovação não documentado para a entrega rotineira. O mapa de capacidades abaixo é o limite-alvo de delegação.

| Decisão / capacidade | Responsabilidade do Founder | Owner delegado e evidência da delegação | Escalar ao founder somente quando |
|---|---|---|---|
| Propósito, posicionamento e integridade do método | Definir a promessa, os princípios C.A.O.S. e os padrões inegociáveis. | Strategy/Method Lead mantém método versionado, change log e treinamento. | Uma mudança proposta altera a promessa central, o método ou a arquitetura do grupo. |
| Portfólio e prioridades comerciais | Escolher o foco estratégico e aprovar apetite excepcional de risco. | Commercial e Portfolio Leads mantêm decisões sobre oferta, capacidade e pipeline. | Uma decisão altera materialmente unit economics, risco de marca ou uma rota crítica para o lançamento. |
| Entrega ao cliente | Patrocinar relacionamentos estratégicos e desbloquear questões institucionais excepcionais. | Engagement e Delivery Leads são owners de cases, milestones, qualidade e evidências de renovação. | Exposição contratual, reputacional ou de relacionamento excede o limite delegado. |
| Produto e automação | Definir resultados e guardrails; patrocinar investimento. | Product/Platform Lead é owner do backlog, gates de release, acesso e evidências de rollback. | Um release altera decisões de alto impacto, finalidade dos dados, limites de tenant ou claims públicos. |
| Dados, inteligência e medição | Exigir disciplina de evidências e proibir valor superestimado. | Data/Measurement Lead é owner de definições, lineage, exceções de qualidade e pacote de publicação. | Um claim é contestado, causal/financeiro, materialmente incerto ou está fora da política aprovada. |
| Trust, jurídico e reconhecimento | Proteger independência e limites éticos. | Trust/Governance Lead e avaliador independente são owners de revisões, recusas, appeals e testes de controle. | Um conflito, breach, decisão do Selo ou exposição jurídica não pode ser resolvido no fórum aprovado. Coordenar com BP-006. |
| Pessoas, sucessão e capacidade | Identificar sucessores e financiar o desenvolvimento de capacidades. | Owners de capacidade mantêm mapa de cobertura, runbooks, cross-training e designação de backup. | Não existe delegado qualificado para uma atividade crítica ou um evento de sucessão ameaça a continuidade. |

A delegação só é válida quando autoridade, competência, capacidade, acesso ao sistema, limite orçamentário, backup e rota de escalonamento estão registrados. Toda atividade crítica tem exatamente um owner responsável, mesmo quando muitos contribuidores participam. Isso aborda diretamente [[STR-007]] e [[GOV-008]]; os nomes e limites permanecem como trabalho de refinamento até serem aceitos pelo fórum de governança relevante.

## 4. Níveis de serviço, caminhos de exceção, responsabilidades por incidentes e evidências operacionais

### Níveis de serviço-alvo (a calibrar durante o refinamento)

Estas são metas de planejamento para um primeiro serviço controlado, não claims de desempenho atual. Os valores finais devem ser acordados por oferta, tier de cliente, fuso horário e contrato do parceiro.

| Serviço | Resposta / conclusão-alvo | Medição | Tratamento de breach |
|---|---|---|---|
| Confirmação de qualificação de vendas | 1 dia útil; decisão de qualificação em até 5 dias úteis após informação suficiente. | Timestamps e disposition do CRM. | Commercial Lead revisa a fila e informa o comprador; breach recorrente aciona revisão de capacidade. |
| Acesso ou problema de onboarding | Confirmar em até 1 dia útil; resolver ou fornecer plano em até 3 dias úteis. | Eventos de onboarding e suporte. | Pausar avanço da etapa; Client Success Lead é owner da recuperação. |
| Revisão de evidências / esclarecimento do diagnóstico | Confirmar em até 2 dias úteis; revisão padrão em até 10 dias úteis. | Idade da fila de revisão e completude das evidências. | Marcar blocked/under-review; nenhuma recomendação é liberada sem evidências adequadas. |
| Solicitação de curadoria ou matching | Confirmar em até 1 dia útil; shortlist ou no-match justificado em até 5 dias úteis. | Timestamps da fila, versão da shortlist e motivo da recusa. | Escalar capacidade/conflito; nunca substituir silenciosamente um fornecedor não avaliado. |
| Status da implementação | Status semanal para trabalho ativo; risco material comunicado em até 1 dia útil. | Logs de milestones e problemas. | Delivery Lead aciona mudança, pausa ou plano de recuperação. |
| Suporte | Confirmação de questão urgente/de segurança/privacidade com meta de até 1 hora; alta prioridade em até 4 horas úteis; normal em até 1 dia útil. | Severidade e timestamps do ticket. | Incident Commander ou Trust Lead assume com base na severidade. |
| Contenção de incidente | Declarar severidade e commander imediatamente na detecção; conter impacto crítico dentro da meta de recuperação aprovada. | Timeline do incidente, monitoramento e etapas do runbook. | Notificar partes afetadas conforme regras jurídicas/contratuais aprovadas; iniciar revisão pós-incidente. |
| Publicação da medição | Relatório preliminar dentro da cadência de reporting acordada; aprovação antes da divulgação externa. | Execução da métrica, lineage e registros de sign-off. | Restringir ou retirar claim; abrir exceção de dados/medição. |

### Caminhos de exceção

- **Evidência insuficiente:** marcar o case como blocked, declarar a evidência e o owner ausentes, oferecer uma atividade de discovery delimitada e proibir um diagnóstico, match ou claim de valor definitivo.
- **Falta de capacidade:** colocar na fila segundo prioridade e regra de equidade acordadas, oferecer um parceiro ou intervenção alternativa somente após avaliação, ou redefinir o escopo com aprovação do cliente. Sem substituição silenciosa.
- **Conflito de interesses:** declarar e remover a pessoa/parceiro em conflito; designar um reviewer independente; preservar o registro da decisão. O trabalho do Selo não pode ser condicionado comercialmente.
- **Falha de consentimento, privacidade ou acesso:** interromper o fluxo de dados afetado, minimizar a exposição, registrar o caminho de incidente/DSAR e retomar somente após uma decisão autorizada. Coordenar com BP-006 sobre autoridade jurídica e controles.
- **Resultado inseguro, discriminatório ou materialmente prejudicial:** suprimir o release, notificar o Incident Commander e o Trust Lead, investigar, permitir appeal e manter a trilha de auditoria completa.
- **Falha do parceiro:** ativar um fornecedor de fallback ou operador interno, preservar a continuidade do cliente, registrar o impacto contratual e revisar o risco de concentração.
- **Divergência de métrica:** congelar a publicação, comparar definições e lineage, rotular a incerteza, obter revisão de medição e versionar o resultado corrigido.
- **Indisponibilidade do sistema ou release incorreto:** usar o release runbook para isolar, fazer rollback ou acionar fallback manual; reconciliar eventos após a recuperação. Esta é uma meta exigida por [[LCH-002]], não evidência de deployability atual.

### Responsabilidades por incidentes

A primeira pessoa que detectar um incidente crível o registra e alerta o Support Lead ou o canal on-call. O Incident Commander é owner da coordenação e da timeline; o owner de Platform/Technology é owner da contenção e restauração; o Data Steward é owner da integridade da origem, replay e reconciliação; o owner de Trust/Governance avalia implicações de LGPD, contratuais e de notificação; o Client Lead se comunica com a instituição afetada; Communications divulga somente declarações aprovadas; o executivo responsável aceita o risco residual e o encerramento. Nenhum parceiro ou operador pode encerrar um incidente que afete sua própria responsabilidade sem revisão independente. Coordenar com BP-006: finalizar composição do fórum, autoridade de notificação e requisitos de retenção.

### Pacote de evidências operacionais

As evidências de readiness devem ser inspecionáveis de forma independente e vinculadas ao case ou release: matriz de owner/backup; versão de SOP e runbook; registro de treinamento/competência; registro de consentimento e acesso; lineage de origem e evidências; timestamps de fila e SLA; log de decisões, overrides e appeals; avaliação do parceiro e verificação de conflitos; aceitação da implementação; cálculo e aprovação da métrica; tickets de suporte; timeline do incidente; resultados de release, rollback e reconciliação; ações retrospectivas. Retenção, acesso e exclusão de evidências seguem as regras aprovadas de finalidade e ciclo de vida da [[LGPD]]. Um dashboard verde, sozinho, não é evidência de impacto causal, valor financeiro ou readiness operacional.

## 5. Conexões com capacidades de produto, eventos de dados, premissas financeiras e controles de governança

### Rastreabilidade de produto e dados

Cada ação operacional deve mapear para uma capacidade da plataforma e um evento canônico, mesmo enquanto o workflow inicial é manual. No mínimo: `case_created`, `consent_recorded`, `participant_onboarded`, `diagnosis_submitted`, `evidence_reviewed`, `plan_approved`, `solution_curated`, `match_proposed`, `match_accepted`, `implementation_milestone_updated`, `support_ticket_opened`, `incident_declared`, `metric_calculated`, `claim_approved`, `recognition_reviewed` e `journey_closed`. Eventos exigem identidade estável, ator, tenant/entity, timestamp, versão, finalidade, origem, status da decisão e correlation ID. Contratos DAT-*, chaves canônicas e lineage são dependências do refinamento; este blueprint não inventa seu schema.

O console do operador deve expor filas, ownership, completude das evidências, próxima ação, risco, idade do SLA, status de revisão, overrides, appeals e histórico de auditoria. As experiências de participante e cliente devem expor somente os dados e decisões apropriados à sua função. A automação futura é admitida por meio de um capability gate: input/output definido, baseline de qualidade, owner humano, fallback, monitoramento, rollback, auditoria e revisão da finalidade dos dados.

### Conexão financeira

Registros operacionais alimentam a lógica comercial e financeira sem confundir atividade com valor. Vendas e contratos identificam o tipo de receita (subscription, implementation, marketplace, media/experience ou funding restrito do [[Instituto HUB]]); o esforço de implementação fornece premissas de cost-to-serve e capacidade; a medição fornece evidências de valor potencial, influenciado, validado e realizado. O modelo operacional não deve converter um match, recomendação, evento de adoção ou ROI ilustrativo em caixa realizado ou impacto causal sem o método financeiro e de medição aprovado. Finance recebe um pacote mensal de reconciliação: escopo contratado, status de entrega, receita reconhecida, esforço direto, custo de parceiro, créditos não resolvidos, status de evidências e confiança da previsão. Coordenar com BP-001 e o blueprint financeiro sobre limites e regras de reconhecimento.

### Conexão com a governança

Owners operacionais executam controles; a governança aprova as regras e o challenge independente. Controles críticos incluem limitação de finalidade e propagação de consentimento, acesso por tenant e função, stewardship da origem, correção/replay, retenção/exclusão, conflito/recusal, revisão humana, publicação de claims, notificação de incidentes, responsabilidade do parceiro e independência do Selo. Cada controle tem owner, teste, frequência, localização da evidência, tratamento de exceção e estado de aprovação. Coordenar com BP-006: itens de limite de governança nesta seção são pontos explícitos de transição, não política de governança definida.

## 6. Premissas abertas e decisões não resolvidas

Todas as premissas abaixo permanecem abertas e estão vinculadas aos gap IDs fornecidos. São hipóteses operacionais para refinamento, não claims de capacidade.

| Premissa / decisão não resolvida | Gap IDs afetados | Ação de refinamento |
|---|---|---|
| Um owner responsável e um backup qualificado podem ser atribuídos a toda atividade crítica. | [[STR-007]], [[GOV-008]] | Criar e aprovar o mapa de capacidades, autoridade, cobertura e sucessão; testar uma transição sem Founder. |
| A entrega inicial pode ser dimensionada com operadores treinados antes da automação estar disponível. | [[PRD-005]], [[LCH-002]] | Modelar custo e capacidade do serviço manual; escrever SOPs, verificações de treinamento e metas de cobertura das filas. |
| Critérios exatos de saída das etapas C.A.O.S. e limites de evidência podem ser padronizados entre ofertas. | [[PRD-005]], [[PRD-007]] | Executar pelo menos um service blueprint por oferta de lançamento e aprovar transições de estado e exceções comuns. |
| Decisões de alto impacto de diagnóstico, matching, medição e reconhecimento podem ser revisadas sem conflitos. | [[PRD-007]], [[GOV-008]] | Definir filas de revisão, regras de competência, recusas, política de override/appeal e testes de auditoria; coordenar com BP-006. |
| Capacidade e contribuições de dados dos parceiros podem ser governadas com rotas de fallback e limites de concentração. | [[PRD-005]], [[GOV-008]] | Criar acordos operacionais de parceiros, checklist de avaliação, SLA, contrato de evidências, playbook de saída e fallback. |
| Níveis de serviço-alvo são economicamente viáveis e podem ser medidos a partir de timestamps confiáveis. | [[PRD-005]], [[LCH-002]] | Estabelecer baseline de demanda, volume de filas, staffing, resposta dos parceiros, carga de suporte e metas de recuperação antes de assumir compromissos externos. |
| A plataforma pode expor as filas, trilha de auditoria, eventos, permissões e rollback necessários aos operadores. | [[PRD-007]], [[LCH-002]] | Converter o blueprint operacional em critérios de aceitação do produto, contratos de eventos, controles de ambiente e um release runbook. |
| Comando de incidentes, notificação jurídica, stewardship de dados e comunicação com clientes podem operar em um único fórum. | [[GOV-008]], [[LCH-002]] | Definir escala on-call, matriz de severidade, direitos de decisão de notificação, drills, retenção de evidências e revisão pós-incidente. Coordenar com BP-006. |
| Evidências de medição e financeiras serão suficientes para sustentar claims de valor aprovados sem dupla contagem. | [[PRD-005]], [[PRD-007]] | Vincular evidências operacionais à lineage das métricas, regras de estados de valor e sign-off de Finance; rotular a incerteza em todo relatório. |
| A avaliação do Selo HUB pode permanecer independente da implementação comercial e dos incentivos de vendas. | [[PRD-007]], [[GOV-008]] | Produzir com BP-006 os controles do avaliador independente, conflito, appeal, retirada, pagamento e publicação. |

## 7. Dependências entre blueprints

| Dependência | Impacto operacional | Regra de coordenação |
|---|---|---|
| [[02-review/01-blueprint/estrategia/HUB_Fundacao_Blueprint_Projeto]] | Fornece C.A.O.S., unidades, módulos, atores, limite de maturidade e princípios de evidência. | Este documento operacionaliza a fundação; decisões de estratégia aprovadas posteriormente substituem as premissas aqui. |
| BP-001 — offer/revenue blueprint | Define comprador, oferta, tipo de receita, pricing e economia da entrega. | Alinhar qualificação, escopo, cost-to-serve, renovação e evidências financeiras; não inventar preços finais ou regras de reconhecimento. |
| BP-002 — product/journey blueprint | Define jornadas de usuário, limites do produto e comportamento dos módulos. | Traduzir estados da jornada em filas, SOPs, critérios de aceitação e limites humano/automação; resolver [[PRD-005]] e [[PRD-007]] conjuntamente. |
| BP-003 — data/intelligence blueprint | Define entidades canônicas, eventos, métricas, lineage e controles de modelo. | Alinhar evidências operacionais e vocabulário de eventos; não tratar eventos conceituais como capacidade implementada. |
| BP-004 — technology architecture blueprint | Define ambientes, integrações, confiabilidade, segurança e observabilidade. | Usar seus contratos para release, monitoramento, replay, rollback e suporte; [[LCH-002]] permanece aberto até ser testado. |
| BP-006 — governance/legal/trust blueprint | Define autoridade, limites de entidades, LGPD, responsabilidade, IP, revisão humana e independência do Selo. | **Coordenar com BP-006:** todos os direitos de decisão, notificação de incidentes, appeals, recusal, retenção e limites do Selo são pontos abertos aqui; este modelo atribui apenas pontos de contato operacionais. |
| BP-008 — launch/readiness blueprint | Define gates integrados de lançamento, pacote de evidências e workflow de aprovação. | Alimentar a revisão de readiness com SOP, staffing, SLA, suporte, incidentes, rollback e evidências operacionais. |
| [[00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto]] e gaps individuais | Fornece condições de encerramento e rastreabilidade. | Manter [[STR-007]], [[PRD-005]], [[PRD-007]], [[GOV-008]] e [[LCH-002]] abertos até que evidências, aceitação do owner e condições de aprovação sejam atendidas. |

### Condição de saída do blueprint

BP-005 estará pronto para passar de blueprint a refinamento quando cada atividade crítica tiver um owner responsável e backup, cada transição C.A.O.S. tiver um service blueprint e contrato de evidências, os caminhos de exceção e incidentes tiverem sido exercitados no papel, os limites manual/parceiro/automação estiverem aprovados e as operações de lançamento puderem demonstrar um workflow deployable, supportable, monitorable e reversible. Até lá, o modelo operacional HUB é um alvo a ser testado — não uma afirmação de que a capacidade atual existe.
