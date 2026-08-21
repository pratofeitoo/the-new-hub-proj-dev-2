---
title: "Pesquisa de produto e MVP do HUB v2"
subtitle: "Produto piloto, sequenciamento, escalabilidade e vantagem cumulativa"
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

# Pesquisa de produto e MVP do HUB v2

## Recomendação executiva

Construir um fluxo estreito, patrocinado por uma instituição, para uma coorte definida de pequenas empresas que enfrentam uma oportunidade real de comprador ou um processo de contratação. O produto comprova este ciclo:

> integrar -> diagnosticar prontidão -> coletar evidências básicas -> priorizar a menor ação para fechar a lacuna -> selecionar uma solução ou conexão com comprador -> acompanhar a execução -> reportar o resultado.

O piloto não é um marketplace nacional, uma plataforma de maturidade de uso geral, um consultor autônomo de IA nem um produto de certificação. É um serviço apoiado por software, com uma camada operacional deliberadamente manual. O investimento em produto deve acompanhar evidências de que o fluxo cria valor mensurável e pode ser repetido sem que o esforço manual cresça na mesma proporção da receita.

Esta recomendação é uma decisão de trabalho, não uma evidência de demanda de clientes, tração, disposição para pagar ou capacidade de engenharia. O comprador institucional, o orçamento, a oportunidade, a coorte e os limiares numéricos de sucesso selecionados ainda precisam ser validados antes do início de um piloto.

## Restrições de design fundamentadas nas fontes

A V1 define seis módulos centrais: HUB Intelligence, Journey, Solutions, Connections, Academy e Recognition. Ela também define a jornada mais ampla como diagnosticar, planejar, conectar, implementar, medir, reconhecer e evoluir. O plano v2 aprovado exige provar apenas a menor jornada completa e condiciona cada módulo adicional a demanda repetida, uso mensurável, contribuição para a receita, redução do esforço manual, funcionalidade central reutilizável e carga aceitável de dados/suporte.

A pesquisa de beachhead recomenda uma licença institucional para a prontidão de pequenas empresas orientada por oportunidades de demanda, com economia de piloto orientada por implementação e licenciamento anual do ecossistema como hipótese principal. O matching assistido por humanos é explicitamente preferido antes que exista liquidez de marketplace. Nenhuma instituição nomeada deve ser tratada como comprometida até que uma entrevista e um piloto pago ou formalmente financiado por escrito confirmem isso.

## A menor jornada que comprova valor

### Modelo de atores e objetos do piloto

- **Instituição:** é dona do programa, do acesso à coorte, do contexto do comprador/oportunidade e da revisão agregada dos resultados.
- **Empresa participante:** envia informações e evidências de prontidão, recebe um plano priorizado e conclui as ações acordadas.
- **Oportunidade/comprador:** fornece uma demanda definida ou um processo de contratação; não é um anúncio genérico de marketplace.
- **Operador do HUB:** configura o diagnóstico, revisa evidências, seleciona recomendações, realiza o matching, apoia exceções e produz o relatório.
- **Solução ou especialista:** recebe uma indicação qualificada e consentida somente quando ela trata de uma lacuna observada.

### Fluxo mínimo de ponta a ponta

1. **Configuração do programa:** criar uma instituição, um tema de oportunidade, uma coorte, um ciclo de relatório, papéis, texto de consentimento e definições de linha de base/resultado.
2. **Integração:** convidar ou cadastrar empresas, coletar somente os campos necessários para essa oportunidade e registrar o consentimento de participação.
3. **Diagnóstico de prontidão:** preencher um questionário configurável ligado à oportunidade; anexar evidências básicas quando necessário.
4. **Revisão e resultado:** calcular um resultado transparente de prontidão usando regras fixas e uma fila de revisão humana; mostrar evidências ausentes e confiança/limitações.
5. **Plano priorizado:** produzir um plano curto com o menor número de ações provavelmente capazes de melhorar a prontidão, um responsável, uma data de vencimento e as evidências necessárias.
6. **Intervenção selecionada:** recomendar um item de conteúdo específico, especialista, fornecedor, atividade de preparação ou introdução a comprador. As recomendações são selecionadas e explicáveis.
7. **Conexão assistida por humanos:** o operador verifica aderência, consentimento, disponibilidade e requisitos da oportunidade; registra a introdução e o status.
8. **Acompanhamento:** participante e operador registram ações, reuniões, propostas e bloqueios. Nenhuma alegação de conversão comercial é feita sem uma definição acordada e evidências.
9. **Relatório de resultados:** comparar medidas de linha de base e final, reportar o esforço de entrega e as exceções, documentar os limites de atribuição e apresentar uma decisão de renovação/expansão.

O piloto comprova valor se a instituição receber um programa e um relatório de resultados confiáveis, os participantes concluírem ações úteis de prontidão e pelo menos um sinal acordado de oportunidade/conversão melhorar em relação a uma linha de base pré-registrada. Os limiares exatos devem ser escritos no scorecard do piloto antes que os resultados sejam conhecidos.

## Escopo do MVP e fronteira entre manual e automatizado

### Construir agora

| Capacidade | Comportamento do MVP | Por que é suficiente |
|---|---|---|
| Acesso e papéis | Autenticação básica, papéis de instituição/operador/participante e acesso no nível da coorte | Protege os dados sem construir infraestrutura de identidade empresarial |
| Configuração do programa | Um tema de oportunidade, versão do questionário, lista de evidências, datas e campos de relatório | Torna o piloto repetível enquanto limita a superfície de customização |
| Diagnóstico | Questionário baseado em formulário, versionado, com evidências obrigatórias/opcionais | Testa se o diagnóstico é concluído e útil |
| Resultado | Visão de prontidão baseada em regras, com explicações, itens ausentes e status de revisão | Evita pontuação opaca e decisões autônomas de alto impacto |
| Jornada | Ações priorizadas, responsáveis, datas de vencimento, status e notas | Testa se o diagnóstico muda o comportamento |
| Seleção | Pequeno catálogo de soluções/conteúdos/especialistas aprovados, com critérios de aderência | Testa recomendações sem liquidez de marketplace |
| Conexões | Registros de introdução gerenciados pelo operador, consentimento, status e resultado de reunião/proposta | Testa matching orientado por demanda com julgamento humano |
| Progresso | Visões de status do participante e do operador; contagens agregadas da instituição | Apoia a entrega e a revisão de linha de base/final |
| Relatórios | Relatório exportável de resultados da coorte, com definições e ressalvas | Fornece o ativo para a decisão de renovação do comprador |
| Operações | Fila de revisão, notas de suporte, trilha de auditoria e fluxo de exportação/exclusão de dados | Torna o serviço manual seguro e mensurável |

### Manter manual no piloto

- Qualificação da oportunidade e confirmação da demanda do comprador.
- Design do questionário e alterações entre coortes.
- Revisão de evidências, exceções e substituições de pontuação com justificativas.
- Verificação de soluções/especialistas e seleção de recomendações.
- Classificação do matching, introduções aquecidas e escalonamento do acompanhamento.
- Recrutamento de participantes e gestão de incentivos.
- Interpretação de linha de base/final e julgamento de atribuição.
- Aprovação da configuração white-label e conteúdo específico do parceiro.
- Qualquer decisão de reconhecimento ou selo.

O trabalho manual não é uma falha oculta: é um instrumento para aprender as regras de decisão, as taxas de exceção, a carga de dados e o verdadeiro custo de atendimento. Cada ação do operador deve ser registrada por tipo e esforço decorrido para que os candidatos à automação sejam baseados em evidências.

### Explicitamente não construir para o primeiro piloto

- Recomendações, matching, pontuação ou reconhecimento generativos autônomos.
- Marketplace nacional aberto, divisão de pagamentos, escrow ou liquidação de transações.
- Benchmark público ou tabela classificativa antes de existir massa de dados, comparabilidade e governança.
- Integrações profundas com ERP, ATS, compras, CRM ou identidade sem demanda do cliente.
- Aplicativo móvel nativo, internacionalização ou templates amplos para múltiplos setores.
- Auditoria, certificação ou renovação de selo totalmente automatizadas.
- Todos os seis módulos da v1 como superfícies de produto separadas. Academy e Recognition permanecem capacidades de suporte/manuais até que os gates sejam atingidos.

## Gargalos de capacidade e entrega

Estes são riscos a validar, não afirmações sobre a capacidade atual da equipe.

| Gargalo | Modo de falha | Controle do piloto |
|---|---|---|
| Venda institucional e patrocínio | Interesse sem orçamento acessível ou autoridade decisória | Nomear o patrocinador e o responsável pelo orçamento; exigir um caminho pago/financiado por escrito |
| Qualidade da oportunidade | A ausência de demanda real do comprador torna o matching performático | Exigir demanda documentada ou processo de contratação antes do trabalho de conexão |
| Conclusão pelos participantes | Carga de evidências ou incentivo fraco causa baixa conclusão do diagnóstico | Minimizar campos, recrutar segundo critérios explícitos e predefinir o limiar de conclusão |
| Consistência da metodologia | Operadores diferentes produzem resultados incomparáveis | Versionar perguntas/regras, documentar substituições e manter trilha de revisão |
| Seleção e matching | Oferta escassa ou baixa aderência reduz a confiança | Usar uma categoria estreita, critérios explícitos de aderência e aceitação humana |
| Atribuição de resultados | Resultados comerciais são atrasados ou confundidos por outras variáveis | Definir indicadores antecedentes, linha de base/final, limites de atribuição e data de revisão |
| Carga de suporte | Exceções consomem tempo de entrega e eliminam a alavancagem do software | Registrar cada intervenção, categorizar repetições e definir um gatilho de encerramento/reconfiguração |
| Operações de dados/jurídicas | Consentimento, acesso, retenção ou uso entre partes não está claro | Minimizar dados, segmentar o acesso da instituição e documentar os papéis de controlador/processador |
| Pressão white-label | Uma solicitação específica de um parceiro cria um fork | Aplicar a política padrão/configurável/proibida e cobrar/recusar exceções |
| Conflito de reconhecimento | A entrega comercial é confundida com validação independente | Manter Recognition adiado e metodologicamente separado das alegações de sucesso do piloto |

## Gates de módulos baseados em evidências

Cada gate é um ponto de decisão, não uma promessa de construção. O scorecard do piloto deve registrar linha de base, limiar, período, responsável pela evidência e resposta antes que os resultados sejam conhecidos.

| Módulo ou expansão | Não adicionar até que as evidências mostrem | Pacote mínimo de evidências | Decisão |
|---|---|---|---|
| Diagnóstico configurável além de um tema | Um segundo programa comparável precisa de reutilização, não de um novo design sob medida | Solicitações repetidas de configuração, dados de conclusão/abandono, esforço do operador, problemas de qualidade dos dados | Criar template, simplificar ou adiar |
| Automação da jornada | Participantes e operadores usam status/ações repetidamente e as atualizações manuais são uma carga material | Uso por coorte, ações concluídas, padrões repetidos de atualização, minutos registrados evitados | Automatizar somente a transição estreita e repetida |
| Academy como módulo de produto | Participantes precisam de conteúdo estruturado para concluir planos e o uso do conteúdo prevê progresso | Participação/conclusão do conteúdo, conclusão de ações, associação com resultados, esforço de seleção | Vincular uma pequena biblioteca ou adiar |
| Catálogo mais amplo de Solutions | Vários programas solicitam as mesmas categorias e a seleção pode ser reutilizada | Demanda por categoria, aceitação de indicações, feedback sobre qualidade da solução, uso repetido | Padronizar o catálogo ou permanecer selecionado |
| Automação do matching | As regras são estáveis, a demanda é real e as decisões humanas são suficientemente repetíveis | Demanda qualificada, matchings concluídos, demanda repetida, taxas de aceitação/resultado, taxa de exceção | Apenas auxiliar a classificação; manter aprovação humana |
| Transações de marketplace | A liquidez e a necessidade de transação superam a carga operacional | Limiar pré-registrado de demanda qualificada, matchings concluídos e demanda repetida; prontidão de pagamentos/jurídica | Construir camada de transação ou adiar |
| Benchmark agregado | Dados comparáveis têm cobertura e aprovação de governança suficientes | Qualidade dos dados, representatividade, consentimento, comparabilidade, uso do benchmark pelo comprador | Primeiro benchmark privado ou adiar visão pública |
| Recognition/Selo | Método de evidência, independência, recursos e controles de conflito funcionam na prática | Critérios publicados, registro de decisão independente, registro de conflitos, amostra de auditoria, processo de renovação | Lançar reconhecimento limitado ou suspender |
| Escala white-label multi-tenant | O núcleo padrão consegue apoiar parceiros comparáveis sem trabalho customizado proporcional | Segundo e terceiro clientes comparáveis, reutilização de configuração, carga de suporte, evidências de renovação | Empacotar e escalar ou rejeitar negócio customizado |

A expansão só é permitida quando a linha relevante tiver evidências, carga aceitável de dados/suporte, contribuição para a receita ou um papel estratégico claramente documentado e funcionalidade central reutilizável. Caso contrário, o padrão é estreitar, simplificar ou adiar.

## Caminho de escalabilidade: de software apoiado por serviço a plataforma repetível

### Fase 1: Piloto de evidência e concierge (meses 0-2 de configuração; design do piloto antes da construção)

Validar a dor do comprador, o acesso ao orçamento, a demanda da oportunidade, o incentivo do participante, as permissões de dados, as definições de resultados e os direitos de referência. Construir somente o fluxo mínimo acima. Instrumentar todo o trabalho manual, incluindo seleção, revisão de evidências, matching e suporte.

### Fase 2: Piloto pago e linha de base operacional (meses 2-5)

Entregar uma coorte e um relatório de resultados sob um acordo por escrito. Separar defeitos do produto, lacunas metodológicas, solicitações específicas do cliente e exceções do operador. Propor renovação ou expansão somente após a revisão dos resultados. Se o valor não for mensurável ou o esforço não puder ser estimado, interromper a expansão e revisar a intervenção.

### Fase 3: Pacote repetível (meses 5-9)

Converter o trabalho repetido em uma configuração de programa padrão, playbook de implementação, permissões de papéis, template de relatório, regras de seleção e material de vendas. Automatizar somente transições frequentes, de baixo risco e com regras estáveis. Exigir uma renovação ou um segundo comprador comparável antes de afirmar que há repetibilidade.

### Fase 4: Escala controlada do ecossistema (meses 9-18)

Adicionar instituições comparáveis, configuração padrão de parceiros, visões agregadas privadas e integrações cuidadosamente selecionadas somente quando reduzirem a carga. Expandir para categorias adicionais de oportunidade somente depois que a categoria inicial tiver demanda repetida e evidência de resultados. A expansão deve ser sustentada por retenção, margem bruta, custo de atendimento, resultados de clientes e evidências de concentração de parceiros.

## Controles white-label

O white-label muda a experiência do parceiro, não as condições de verdade do produto. Cada ambiente de parceiro mantém uma relação visível de "powered by HUB" e uma metodologia versionada.

### Padrão para todos os parceiros

- Modelo central de dados, limites de papéis/acesso e controles de consentimento e privacidade.
- Versionamento de diagnóstico/evidências, registro de auditoria, explicação dos resultados e controles de exportação/exclusão.
- Estados comuns da jornada, definições de resultados, proveniência dos relatórios e padrões de qualidade.
- Procedimentos de segurança, incidentes, retenção e mudança de metodologia pertencentes ao HUB.
- Regras mínimas de integridade para qualquer futuro produto de reconhecimento.

### Configurável dentro dos limites aprovados

- Nome do parceiro, identidade visual, terminologia, idioma, datas da coorte e rótulos de navegação.
- Perguntas específicas da oportunidade, exemplos de evidências, templates de ações, links de conteúdo e marca do relatório.
- Papéis aprovados, etapas do fluxo do parceiro, catálogo local de soluções e filtros do dashboard agregado.
- Critérios adicionais somente quando mapeados à metodologia central e aprovados para comparabilidade/proteção de dados.

### Proibido

- Remover a divulgação de powered-by-HUB ou alterar a autoria/proveniência da metodologia.
- Pontuação exclusiva do parceiro que não possa ser explicada, versionada ou auditada.
- Vender ou garantir reconhecimento por meio de um pacote comercial.
- Exposição de dados entre parceiros, reutilização de participantes sem consentimento ou benchmark público sem governança.
- Forks customizados que criem uma base de código separada, modelo de dados incompatível ou promessa de serviço sem suporte.
- Solicitações que transfiram decisões de alto impacto para automação opaca.

## Riscos da transição de serviços para software

O primeiro produto pode parecer bem-sucedido porque operadores habilidosos compensam uma capacidade fraca do produto. Isso é aprendizado útil, mas não escala de software. Acompanhar separadamente:

- **Risco de resultado:** um resultado pode vir da experiência do operador, de um comprador forte ou de uma coorte favorável, e não do software HUB.
- **Risco de margem:** implementação, revisão de evidências, matching e suporte podem continuar intensivos em mão de obra.
- **Risco de customização:** cada instituição pode exigir uma metodologia, um relatório ou uma integração sob medida.
- **Risco de retenção:** uma coorte ou evento pontual pode ser confundido com valor recorrente de software.
- **Risco de dados:** planilhas manuais ou canais paralelos podem prejudicar auditabilidade, privacidade e portabilidade.
- **Risco de fundador/pessoa-chave:** vendas, seleção e interpretação podem depender dos relacionamentos ou do julgamento de uma pessoa.
- **Risco de automação:** IA prematura pode codificar metodologia inconsistente, viés ou decisões de alto impacto não revisadas.

Controles: precificar/contratar explicitamente a implementação, registrar todo o esforço de entrega, manter um livro-razão de produto versus serviço, versionar regras e conteúdo, documentar decisões dos operadores, testar um segundo cliente comparável e recusar chamar um fluxo de escalável até que resultados repetidos ocorram sem trabalho customizado proporcional.

## Plano de vantagem cumulativa

O moat deve se acumular a partir de dados confiáveis do fluxo e conhecimento operacional, não de uma contagem de funcionalidades não comprovadas.

1. **Dataset proprietário de resultados:** coletar vínculos consentidos e limitados à finalidade entre requisitos da oportunidade, evidências de prontidão, intervenções, conexões, acompanhamento e resultados. Manter separadas as camadas identificável, operacional e agregada.
2. **Ciclo de aprendizagem da metodologia:** versionar perguntas diagnósticas, padrões de evidência, padrões de ação e critérios de matching. Usar conclusão, aceitação e resultados observados para melhorá-los, preservando a explicabilidade.
3. **Qualidade da rede selecionada:** construir um conjunto verificado e avaliado de soluções, especialistas, fornecedores e compradores em torno de categorias estreitas de oportunidade. Qualidade e confiança devem importar mais do que a quantidade bruta de anúncios.
4. **Distribuição institucional:** usar pilotos bem-sucedidos, relatórios de resultados e direitos de referência para conquistar instituições comparáveis. Evitar dependência de um único parceiro; estabelecer um limite de concentração antes do piloto.
5. **Fluxo operacional incorporado:** tornar-se o sistema de registro para diagnósticos, planos, evidências, introduções e decisões de renovação. Integrações são justificadas quando aprofundam esse fluxo, não como amplitude de plataforma isolada.
6. **Confiança e integridade:** publicar limites da metodologia, manter revisão humana para decisões de alto impacto e manter o reconhecimento futuro independente. Confiança é pré-requisito para evidências sensíveis e renovação institucional.
7. **Eficiência de configuração:** transformar necessidades repetidas de parceiros em templates limitados e componentes reutilizáveis. A vantagem é uma implantação mais rápida e segura sem fork, não customização ilimitada.

A defensibilidade potencial é condicional. Ela existe somente se o HUB obtiver permissão para coletar dados úteis de resultados, produzir recomendações ou decisões de entrega melhores ao longo do tempo, mantiver relacionamentos institucionais confiáveis e reutilizar o núcleo entre clientes. Nenhuma dessas vantagens deve ser apresentada como já estabelecida.

## Critérios de encerramento e pivô do piloto

Escrever limiares numéricos no scorecard do piloto antes do lançamento para conclusão, demanda qualificada, conexões concluídas, demanda repetida, movimento de resultados, esforço de entrega, intenção de renovação e concentração de parceiros. Não alterá-los após um resultado negativo.

- Elogios sem financiamento: revisar comprador, problema ou prova; não construir mais software.
- Baixa conclusão do diagnóstico: simplificar entradas e reavaliar o incentivo do participante.
- Nenhuma demanda documentada: interromper a expansão do matching e voltar à qualificação da oportunidade.
- Esforço manual excessivo: estreitar o fluxo, redesenhar as operações ou rejeitar a escala.
- Nenhum resultado mensurável: interromper a expansão e revisar a hipótese da intervenção.
- Caminho fraco para renovação: tratar a oferta como não recorrente até que o valor contínuo seja comprovado.
- Abaixo do limiar de liquidez do marketplace: adiar o investimento no marketplace.
- Exceções white-label repetidas: aplicar os controles ou rejeitar o negócio.
- Independência do reconhecimento impossível de proteger: separar, redesenhar ou suspender o Selo HUB.
- Violação do limite de concentração: diversificar a distribuição antes de expandir esse canal.

## Principal risco de produto

**O principal risco é confundir um resultado de consultoria de alto contato com valor de produto escalável.** O HUB pode reduzir esse risco tornando o trabalho manual explícito, medindo-o desde o primeiro piloto, restringindo a oportunidade e a coorte e exigindo um segundo cliente comparável mais evidências de renovação antes da expansão da plataforma.

## Referências

- V1, seções 5.1-5.5: promessa da plataforma, seis módulos, papéis, jornada e arquitetura white-label.
- V1, seções 6.1-6.5: finalidade, maturidade, evidências, independência e integridade do reconhecimento.
- V1, seções 9.1-9.3: capacidades operacionais mínimas, fóruns de decisão e indicadores.
- V1, seções 10.1-10.3: escopo do MVP, exclusões e princípios de dados/IA.
- V1, seções 13.1-13.3 e 14: sequenciamento, priorização e respostas a riscos.
- Plano v2 aprovado, seções 5, 9, 12 e 13: plano de evidências, escopo do piloto, gates de módulos, roadmap e critérios de encerramento.
- Pesquisa de beachhead do HUB v2: recomendação da Candidate A e formato do piloto de prontidão institucional.
