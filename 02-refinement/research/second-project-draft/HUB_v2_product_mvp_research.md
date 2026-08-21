---
title: "Pesquisa de produto e MVP do HUB v2"
subtitle: "Produto do piloto, sequenciamento, escalabilidade e vantagem composta"
date: 2026-08
status: research artifact
source_documents:
  - "HUB_Escopo_Estrategico_Documento_Mae_v1.md"
  - "HUB_Escopo_Estrategico_Documento_Mae_v2_Investor_Readiness_Plan.md"
  - "HUB_v2_beachhead_research.md"
tags:
  - hub
  - investor-readiness
  - product
  - mvp
  - scalability
---

# Pesquisa de Produto e MVP do HUB v2

## Recomendação executiva

Construir um fluxo de trabalho estreito, patrocinado por uma instituição, para uma coorte definida de pequenas empresas enfrentando uma oportunidade real de comprador ou caminho de contratação. O produto prova este ciclo:

> onboard -> diagnosticar prontidão -> coletar evidências básicas -> priorizar a menor ação de fechamento de lacuna -> curar uma solução ou conexão com comprador -> acompanhar a execução -> reportar o resultado.

O piloto não é um marketplace nacional, uma plataforma de maturidade de propósito geral, um conselheiro autônomo de IA ou um produto de certificação. É um serviço apoiado por software com uma camada operacional deliberadamente manual. O investimento em produto deve seguir evidências de que o fluxo de trabalho cria valor mensurável e pode ser repetido sem que o esforço manual cresça em proporção direta à receita.

Esta recomendação é uma decisão de trabalho, não evidência de demanda de clientes, tração, disposição a pagar ou capacidade de engenharia. O comprador institucional selecionado, orçamento, oportunidade, coorte e limiares numéricos de sucesso ainda precisam ser validados antes do início de um piloto.

## Restrições de design fundamentadas nas fontes

A V1 define seis módulos centrais: HUB Intelligence, Journey, Solutions, Connections, Academy e Recognition. Também define a jornada mais ampla como diagnosticar, planejar, conectar, implementar, medir, reconhecer e evoluir. O plano aprovado da v2 exige provar apenas a menor jornada completa e condiciona cada módulo adicional a demanda repetida, uso mensurável, contribuição de receita, esforço manual reduzido, funcionalidade central reutilizável e ônus aceitável de dados/suporte.

A pesquisa de beachhead recomenda uma licença institucional para prontidão de oportunidades de pequenas empresas orientada pela demanda, com economia de piloto conduzida por implementação e licenciamento anual de ecossistema como hipótese primária. O pareamento com assistência humana é explicitamente preferido antes que exista liquidez de marketplace. Nenhuma instituição nomeada deve ser tratada como comprometida até que uma entrevista e um piloto pago por escrito ou formalmente financiado o confirmem.

## A menor jornada que prova valor

### Modelo de atores e objetos do piloto

- **Instituição:** possui o programa, acesso da coorte, contexto de comprador/oportunidade e revisão agregada de resultados.
- **Empresa participante:** envia informações de prontidão e evidências, recebe um plano priorizado e completa as ações acordadas.
- **Oportunidade/comprador:** fornece uma demanda definida ou caminho de contratação; não é uma listagem genérica de marketplace.
- **Operador HUB:** configura o diagnóstico, revisa evidências, cura recomendações, executa pareamento, apoia exceções e produz o relatório.
- **Solução ou especialista:** recebe um encaminhamento qualificado e consentido apenas quando endereça uma lacuna observada.

### Fluxo mínimo ponta a ponta

1. **Configuração do programa:** criar uma instituição, um tema de oportunidade, uma coorte, um ciclo de relatório, papéis, linguagem de consentimento e definições de linha de base/resultado.
2. **Onboarding:** convidar ou registrar empresas, capturar apenas os campos exigidos para esta oportunidade e registrar o consentimento de participação.
3. **Diagnóstico de prontidão:** completar um questionário configurável vinculado à oportunidade; anexar evidências básicas quando necessário.
4. **Revisão e resultado:** calcular um resultado de prontidão transparente usando regras fixas e uma fila de revisão humana; mostrar evidências faltantes e confiança/limitações.
5. **Plano priorizado:** produzir um plano curto com as poucas ações com maior probabilidade de melhorar a prontidão, um responsável, prazo e evidências necessárias.
6. **Intervenção curada:** recomendar um item específico de conteúdo, especialista, fornecedor, atividade de preparação ou apresentação a comprador. As recomendações são curadas e explicáveis.
7. **Conexão com assistência humana:** o operador verifica adequação, consentimento, disponibilidade e requisitos da oportunidade; registra a apresentação e o status.
8. **Acompanhamento:** participante e operador registram ações, reuniões, propostas e bloqueios. Nenhuma alegação de conversão de negócio é feita sem uma definição acordada e evidências.
9. **Relatório de resultados:** comparar medidas de linha de base e finais, reportar esforço de entrega e exceções, documentar limites de atribuição e apresentar uma decisão de renovação/expansão.

O piloto prova valor se a instituição receber um programa e relatório de resultados críveis, os participantes completarem ações úteis de prontidão e pelo menos um sinal acordado de oportunidade/conversão melhorar contra uma linha de base pré-registrada. Os limiares exatos devem ser escritos no scorecard do piloto antes que os resultados sejam conhecidos.

## Escopo do MVP e fronteira manual-versus-automatizado

### Construir agora

| Capacidade | Comportamento no MVP | Por que é suficiente |
|---|---|---|
| Acesso e papéis | Autenticação básica, papéis de instituição/operador/participante e acesso em nível de coorte | Protege dados sem construir infraestrutura de identidade empresarial |
| Configuração do programa | Um tema de oportunidade, versão do questionário, lista de evidências, datas e campos de relatório | Torna o piloto repetível enquanto limita a superfície customizável |
| Diagnóstico | Questionário baseado em formulário, versionado, com evidências obrigatórias/opcionais | Testa se o diagnóstico é completado e útil |
| Resultado | Visão de prontidão baseada em regras com explicações, itens faltantes e status de revisão | Evita pontuação opaca e decisões autônomas de alto impacto |
| Jornada | Ações priorizadas, responsáveis, prazos, status e notas | Testa se o diagnóstico muda comportamento |
| Curadoria | Pequeno catálogo de soluções/conteúdos/especialistas aprovados com critérios de adequação | Testa recomendações sem liquidez de marketplace |
| Conexões | Registros de apresentação gerenciados pelo operador, consentimento, status, resultado de reunião/proposta | Testa pareamento orientado pela demanda com julgamento humano |
| Progresso | Visualizações de status de participante e operador; contagens agregadas da instituição | Suporta entrega e revisão de linha de base/medida final |
| Relatórios | Relatório exportável de resultados da coorte com definições e ressalvas | Fornece o ativo para a decisão de renovação do comprador |
| Operações | Fila de revisão, notas de suporte, trilha de auditoria e fluxo de exportação/exclusão de dados | Torna o serviço manual seguro e mensurável |

### Manter manual no piloto

- Qualificação de oportunidades e confirmação de demanda do comprador.
- Design do questionário e mudanças entre coortes.
- Revisão de evidências, exceções e sobreposições de pontuação com justificativas.
- Verificação de soluções/especialistas e seleção de recomendações.
- Ranking de matches, apresentações personalizadas e escalonamento de follow-up.
- Recrutamento de participantes e gestão de incentivos.
- Interpretação de linha de base/medida final e julgamento de atribuição.
- Aprovação de configuração white-label e conteúdo específico de parceiro.
- Qualquer decisão de reconhecimento ou selo.

Trabalho manual não é uma falha oculta: é um instrumento para aprender as regras de decisão, taxas de exceção, ônus de dados e custo real de serviço. Cada ação do operador deve ser registrada por tipo e esforço decorrido para que os candidatos à automação sejam baseados em evidências.

### Explicitamente não construir para o primeiro piloto

- Recomendações generativas autônomas, pareamento, pontuação ou reconhecimento.
- Marketplace nacional aberto, divisão de pagamentos, escrow ou liquidação de transações.
- Benchmark público ou ranking antes que existam massa de dados, comparabilidade e governança.
- Integrações profundas de ERP, ATS, procurement, CRM ou identidade sem tração de clientes.
- Aplicativo móvel nativo, internacionalização ou templates amplos multissetoriais.
- Auditoria, certificação ou renovação de selo totalmente automatizadas.
- Todos os seis módulos da v1 como superfícies separadas de produto. Academy e Recognition permanecem capacidades de apoio/manuais até que os portões sejam atendidos.

## Gargalos de capacidade e entrega

Estes são riscos a validar, não alegações sobre a capacidade atual da equipe.

| Gargalo | Modo de falha | Controle no piloto |
|---|---|---|
| Venda institucional e patrocínio | Interesse sem orçamento acessível ou autoridade de decisão | Nomear o patrocinador e o proprietário do orçamento; exigir caminho pago/financiado por escrito |
| Qualidade da oportunidade | Sem demanda real de comprador, o pareamento torna-se performático | Exigir demanda documentada ou caminho de contratação antes do trabalho de conexão |
| Conclusão dos participantes | Ônus de evidências ou incentivo fraco causa baixa conclusão do diagnóstico | Minimizar campos, recrutar segundo critérios explícitos, pré-definir limiar de conclusão |
| Consistência metodológica | Operadores diferentes produzem resultados incomparáveis | Versionar perguntas/regras, documentar sobreposições, reter trilha de revisão |
| Curadoria e pareamento | Oferta rasa ou má adequação reduz confiança | Usar categoria estreita, critérios explícitos de adequação e aceitação humana |
| Atribuição de resultados | Resultados de negócio são tardios ou confundidos por outros fatores | Definir indicadores antecedentes, linha de base/medida final, limites de atribuição e data de revisão |
| Carga de suporte | Exceções consomem tempo de entrega e anulam a alavancagem do software | Registrar cada intervenção, categorizar repetições e definir gatilho de parada/reshape |
| Operações de dados/jurídico | Consentimento, acesso, retenção ou uso entre partes pouco claros | Minimizar dados, segmentar acesso da instituição, documentar papéis de controlador/operador |
| Pressão white-label | Uma solicitação específica de parceiro cria um fork | Aplicar política padrão/configurável/proibido e cobrar/recusar exceções |
| Conflito de reconhecimento | Entrega comercial é confundida com validação independente | Manter Recognition adiado e metodologicamente separado das alegações de sucesso do piloto |

## Portões de módulos baseados em evidências

Cada portão é um ponto de decisão, não uma promessa de construção. O scorecard do piloto deve registrar linha de base, limiar, período, responsável pela evidência e resposta antes que os resultados sejam conhecidos.

| Módulo ou expansão | Não adicionar até que evidências mostrem | Pacote mínimo de evidências | Decisão |
|---|---|---|---|
| Diagnóstico configurável além de um tema | Um segundo programa comparável precisa de reuso, não de redesign sob medida | Solicitações repetidas de configuração, dados de conclusão/abandono, esforço do operador, problemas de qualidade de dados | Criar template, simplificar ou adiar |
| Automação da jornada | Participantes e operadores usam status/ações repetidamente e atualizações manuais são um ônus material | Uso por coorte, ações concluídas, padrões repetidos de atualização, minutos registrados economizados | Automatizar apenas a transição repetida estreita |
| Academy como módulo de produto | Participantes precisam de conteúdo estruturado para completar planos e uso de conteúdo prevê progresso | Presença/conclusão de conteúdo, conclusão de ações, associação com resultados, esforço de curadoria | Vincular biblioteca pequena ou adiar |
| Catálogo de Solutions mais amplo | Múltiplos programas solicitam as mesmas categorias e a curadoria pode ser reutilizada | Demanda por categoria, aceitação de encaminhamentos, feedback de qualidade de soluções, uso repetido | Padronizar catálogo ou permanecer curado |
| Automação do pareamento | Regras são estáveis, demanda é real e decisões humanas são suficientemente repetíveis | Demanda qualificada, matches concluídos, demanda repetida, taxas de aceitação/resultado, taxa de exceção | Apenas auxiliar o ranking; reter aprovação humana |
| Transações de marketplace | Liquidez e necessidade de transação superam o ônus operacional | Limiares pré-registrados de demanda qualificada, match concluído, demanda repetida; prontidão de pagamento/jurídica | Construir camada de transações ou adiar |
| Benchmark agregado | Dados comparáveis têm cobertura e aprovação de governança suficientes | Qualidade de dados, representatividade, consentimento, comparabilidade, uso do benchmark pelo comprador | Benchmark privado primeiro ou adiar visão pública |
| Recognition/Selo | Método de evidência, independência, recursos e controles de conflito operam na prática | Critérios publicados, registro independente de decisões, registro de conflitos, amostra de auditoria, processo de renovação | Lançar reconhecimento delimitado ou suspender |
| Escala multi-tenant white-label | O núcleo padrão pode suportar parceiros comparáveis sem trabalho customizado proporcional | Segundo e terceiro clientes comparáveis, reuso de configuração, ônus de suporte, evidências de renovação | Empacotar e escalar ou rejeitar acordo customizado |

Expansão é permitida apenas quando a linha relevante tem evidências mais ônus aceitável de dados/suporte, contribuição de receita ou papel estratégico claramente documentado, e funcionalidade central reutilizável. Caso contrário, o padrão é estreitar, simplificar ou adiar.

## Caminho de escalabilidade: software com suporte de serviço para plataforma repetível

### Fase 1: Evidências e piloto concierge (meses 0-2 de setup; design do piloto antes da construção)

Validar dor do comprador, acesso ao orçamento, demanda da oportunidade, incentivo dos participantes, permissões de dados, definições de resultados e direitos de referência. Construir apenas o fluxo mínimo acima. Instrumentar todo trabalho manual, incluindo curadoria, revisão de evidências, pareamento e suporte.

### Fase 2: Piloto pago e linha de base operacional (meses 2-5)

Entregar uma coorte e um relatório de resultados sob um acordo escrito. Separar defeitos de produto, lacunas metodológicas, solicitações específicas de clientes e exceções de operadores. Propor renovação ou expansão apenas após a revisão de resultados. Se o valor não for mensurável ou o esforço não puder ser estimado, parar a expansão e revisar a intervenção.

### Fase 3: Pacote repetível (meses 5-9)

Converter trabalho repetido em uma configuração padrão de programa, playbook de implementação, permissões de papéis, template de relatório, regras de curadoria e material de vendas. Automatizar apenas transições de alta frequência e baixo risco com regras estáveis. Exigir uma renovação ou um segundo comprador comparável antes de alegar repetibilidade.

### Fase 4: Escala controlada de ecossistema (meses 9-18)

Adicionar instituições comparáveis, configuração padrão de parceiros, visualizações agregadas privadas e integrações cuidadosamente selecionadas apenas onde reduzem ônus. Expandir para categorias adicionais de oportunidade apenas após a categoria inicial ter demanda repetida e evidências de resultados. A expansão deve ser sustentada por evidências de retenção, margem bruta, custo de serviço, resultados de clientes e concentração de parceiros.

## Controles white-label

White-labeling muda a experiência do parceiro, não as condições de verdade do produto. Todo ambiente de parceiro retém uma relação visível "powered by HUB" e metodologia versionada.

### Padrão para todo parceiro

- Modelo de dados central, fronteiras de papel/acesso, controles de consentimento e privacidade.
- Versionamento de diagnóstico/evidências, log de auditoria, explicação de resultados e controles de exportação/exclusão.
- Estados comuns de jornada, definições de resultados, proveniência de relatórios e padrões de qualidade.
- Procedimentos de segurança, incidentes, retenção e mudança metodológica de propriedade do HUB.
- Regras mínimas de integridade para qualquer produto futuro de reconhecimento.

### Configurável dentro de limites aprovados

- Nome do parceiro, identidade visual, terminologia, idioma, datas de coorte e rótulos de navegação.
- Perguntas específicas da oportunidade, exemplos de evidências, templates de ações, links de conteúdo e branding de relatórios.
- Papéis aprovados, etapas do fluxo do parceiro, catálogo local de soluções e filtros de dashboard agregado.
- Critérios adicionais apenas quando mapeados à metodologia central e aprovados para comparabilidade/proteção de dados.

### Proibido

- Remover a divulgação powered-by-HUB ou alterar autoria/proveniência da metodologia.
- Pontuação exclusiva do parceiro que não possa ser explicada, versionada ou auditada.
- Vender ou garantir reconhecimento por meio de um pacote comercial.
- Exposição de dados entre parceiros, reuso não consentido de participantes ou benchmarking público sem governança.
- Forks customizados que criem uma base de código separada, modelo de dados incompatível ou promessa de serviço sem suporte.
- Solicitações que transfiram decisões de alto impacto para automação opaca.

## Riscos da transição de serviços para software

O primeiro produto pode parecer bem-sucedido porque operadores habilidosos compensam capacidade fraca do produto. Isso é aprendizado útil, mas não escala de software. Acompanhar separadamente:

- **Risco de resultado:** um resultado pode vir da expertise do operador, de um comprador forte ou de uma coorte favorável, e não do software HUB.
- **Risco de margem:** implementação, revisão de evidências, pareamento e suporte podem permanecer intensivos em mão de obra.
- **Risco de customização:** cada instituição pode exigir metodologia, relatório ou integração sob medida.
- **Risco de retenção:** uma coorte ou evento único pode ser confundido com valor recorrente de software.
- **Risco de dados:** planilhas manuais ou canais paralelos podem minar auditabilidade, privacidade e portabilidade.
- **Risco de fundador/pessoa-chave:** vendas, curadoria e interpretação podem depender dos relacionamentos ou julgamento de uma pessoa.
- **Risco de automação:** IA prematura pode codificar metodologia inconsistente, viés ou decisões de alto impacto não revisadas.

Controles: precificar/contratar a implementação explicitamente, registrar todo esforço de entrega, manter um ledger produto-versus-serviço, versionar regras e conteúdo, documentar decisões de operadores, testar um segundo cliente comparável e recusar-se a chamar um fluxo de trabalho de escalável até que resultados repetidos ocorram sem trabalho customizado proporcional.

## Plano de vantagem composta

O moat deve compor a partir de dados confiáveis de fluxo de trabalho e conhecimento operacional, não de uma contagem de funcionalidades não comprovada.

1. **Dataset proprietário de resultados:** coletar vínculos consentidos e com propósito limitado entre requisitos da oportunidade, evidências de prontidão, intervenções, conexões, acompanhamento e resultados. Manter camadas identificáveis, operacionais e agregadas separadas.
2. **Loop de aprendizado metodológico:** versionar perguntas de diagnóstico, padrões de evidência, padrões de ação e critérios de pareamento. Usar conclusão, aceitação e resultados observados para melhorá-los preservando explicabilidade.
3. **Qualidade de rede curada:** construir um conjunto verificado e avaliado de soluções, especialistas, fornecedores e compradores em torno de categorias estreitas de oportunidade. Qualidade e confiança devem importar mais que contagem bruta de listagens.
4. **Distribuição institucional:** usar pilotos bem-sucedidos, relatórios de resultados e direitos de referência para vencer instituições comparáveis. Evitar dependência de um único parceiro; definir limite de concentração antes do piloto.
5. **Fluxo de trabalho operacional embutido:** tornar-se o sistema de registro para diagnósticos, planos, evidências, apresentações e decisões de renovação. Integrações são justificadas quando aprofundam este fluxo, não como amplitude isolada de plataforma.
6. **Confiança e integridade:** publicar fronteiras metodológicas, reter revisão humana para decisões de alto impacto e manter o reconhecimento futuro independente. Confiança é pré-requisito para evidências sensíveis e renovação institucional.
7. **Eficiência de configuração:** transformar necessidades repetidas de parceiros em templates delimitados e componentes reutilizáveis. A vantagem é implantação mais rápida e segura sem fork, não customização ilimitada.

A defensibilidade potencial é condicional. Ela existe apenas se o HUB ganhar permissão para coletar dados úteis de resultados, produzir melhores recomendações ou decisões de entrega ao longo do tempo, reter relacionamentos institucionais confiáveis e reutilizar o núcleo entre clientes. Nenhuma dessas vantagens deve ser apresentada como já estabelecida.

## Critérios de eliminação e pivô do piloto

Escrever limiares numéricos no scorecard do piloto antes do lançamento para conclusão, demanda qualificada, conexões concluídas, demanda repetida, movimento de resultados, esforço de entrega, intenção de renovação e concentração de parceiros. Não alterá-los após um resultado negativo.

- Elogio sem financiamento: revisitar comprador, problema ou prova; não construir mais software.
- Baixa conclusão de diagnóstico: simplificar insumos e reavaliar o incentivo dos participantes.
- Sem demanda documentada: parar a expansão do pareamento e retornar à qualificação de oportunidades.
- Esforço manual excessivo: estreitar o fluxo de trabalho, redesenhar operações ou rejeitar a escala.
- Sem resultado mensurável: parar a expansão e revisar a hipótese de intervenção.
- Caminho de renovação fraco: tratar a oferta como não recorrente até que valor contínuo seja provado.
- Abaixo do limiar de liquidez de marketplace: adiar investimento em marketplace.
- Exceções white-label repetidas: aplicar os controles ou rejeitar o acordo.
- Independência de reconhecimento não protegível: separar, redesenhar ou suspender o Selo HUB.
- Violação do limite de concentração: diversificar distribuição antes de expandir aquele canal.

## Principal risco de produto

**O principal risco é confundir um resultado de consultoria high-touch com valor escalável de produto.** O HUB pode reduzir esse risco tornando o trabalho manual explícito, medindo-o desde o primeiro piloto, restringindo a oportunidade e a coorte, e exigindo um segundo cliente comparável mais evidências de renovação antes da expansão da plataforma.

## Referências

- V1, seções 5.1-5.5: promessa da plataforma, seis módulos, papéis, jornada e arquitetura white-label.
- V1, seções 6.1-6.5: propósito do reconhecimento, maturidade, evidências, independência e integridade.
- V1, seções 9.1-9.3: capacidades operacionais mínimas, fóruns de decisão e indicadores.
- V1, seções 10.1-10.3: escopo do MVP, exclusões e princípios de dados/IA.
- V1, seções 13.1-13.3 e 14: sequenciamento, priorização e respostas a riscos.
- Plano aprovado da v2, seções 5, 9, 12 e 13: plano de evidências, escopo do piloto, portões de módulos, roadmap e critérios de eliminação.
- Pesquisa de beachhead do HUB v2: recomendação do Candidato A e formato do piloto de prontidão institucional.
