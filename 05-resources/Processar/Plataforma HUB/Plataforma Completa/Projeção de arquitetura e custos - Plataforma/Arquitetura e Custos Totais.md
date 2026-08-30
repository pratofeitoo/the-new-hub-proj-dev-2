# HUB · Projeção de Arquitetura e Custos da Plataforma — extração estruturada

> Versão reorganizada para leitura: as planilhas grandes foram quebradas em subtabelas por módulo/seção.

## Metadados

- Arquivo-fonte: `Arquitetura e Custos Totais.xlsx`
- Local: `/Users/paulorezende/Downloads/Plataforma HUB/Plataforma Completa/Projeção de arquitetura e custos - Plataforma`
- Planilhas: 12

## Sumário

- `01_Visao_Geral`
- `02_Inventario_Paginas`
- `03_Resumo_Modulos`
- `04_Matriz_Integracoes`
- `05_Fluxos_Diretos`
- `06_Cenarios_Implantacao`
- `07_Base_Para_Precificacao`
- `08_Premissas_Custos`
- `09_Estimativa_96_Telas`
- `10_CAPEX_por_Modulo`
- `11_OPEX_Mensal`
- `12_Dashboard_Custos`

## 1. 01_Visao_Geral

- Referência: `(não informada)`

> ARQUITETURA INICIAL DA PLATAFORMA HUB
> Primeiro dimensionamento funcional para, no segundo momento, transformar escopo em custo real de produto, tecnologia, dados e operação.
| Código | Frente / módulo | Público | Modelo | Standalone? | O que resolve | Integrações | Leitura |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CORE | Core / Plataforma | Transversal | Base comum | Sim | Autenticação, perfis, permissões, consentimentos, integrações, notificações, analytics e administração. | Todas as frentes usam o Core. | Obrigatório para qualquer implantação. |
| ED | Estratégia & Dados | Empresas | Produto independente | Sim | Conecta dados internos de pessoas e negócio para diagnóstico, prioridades, planos de ação e ROI. | Pode receber dados de RH/ERP/BI sem usar candidatos, fornecedores, acadêmico ou eventos. | Pode ser vendido sozinho. |
| COL | Colaboradores / Meu Time | Empresas | Independente ou conectado a ED | Sim | Desempenho, competências, desenvolvimento, liderança, saúde do time e talentos internos. | Alimenta ED com sinais de pessoas e recebe prioridades/planos. | Pode operar sem marketplace externo. |
| CAN | Candidatos & Carreira | Pessoas + Empresas | Marketplace / jornada | Sim | Perfil, competências, capacitação, oportunidades, candidatura, match e acompanhamento. | Conversa com Acadêmico, Empresas, Eventos e Core. | Vertical de empregabilidade. |
| FOR | Fornecedores & Negócios | Fornecedores + Compradores | Marketplace B2B | Sim | Maturidade, demandas, desenvolvimento, match, negociação e conversão. | Conversa com Eventos, ED e Core. | Pode operar sozinho para acesso a mercado. |
| ACA | Acadêmico / Universidades | Alunos + Universidades + Empresas | Educação-mercado | Sim | Projetos, bolsas, pesquisa aplicada, estágio, carreira, formação e conexão com empresas. | Conversa fortemente com Candidatos e Empresas; opcionalmente Eventos. | Pode ser vendido sozinho para universidade. |
| EVT | Eventos | Organizadores + Público + Empresas | Orquestrador transversal | Parcial | Talentos, fornecedores, pesquisa, patrocínios, acessibilidade, segurança/assédio e ROI. | Consome Candidatos, Fornecedores e Dados; pode ativar Acadêmico. | Pode começar standalone, mas ganha valor com outros módulos. |
| COM | Comunidades / Eu & Eu / Cultura | Pessoas | Jornada individual | Sim | Perfil, objetivos, plano, preparação, mentoria, cuidado, eventos e conexões. | Pode alimentar Candidatos, Acadêmico e Eventos com consentimento. | Camada B2C; não é pré-requisito B2B. |
| PRINCÍPIO DE ARQUITETURA |  |  |  |  |  |  |  |
| A plataforma deve ser modular. Estratégia & Dados pode funcionar somente com dados já existentes do cliente (RHIS, ERP, BI, pesquisas e outras plataformas), sem exigir Candidatos, Fornecedores, Acadêmico, Eventos ou Comunidades. As outras frentes ampliam a inteligência do ecossistema, mas não devem virar dependências artificiais. |  |  |  |  |  |  |  |

## 2. 02_Inventario_Paginas

- Referência: `(não informada)`

### Visão geral do inventário

> 13 ED Estratégia & Dados Visão executiva Web MVP Alta Não CORE KPIs pessoas x negócio
> 15 ED Estratégia & Dados Mapeamento de indicadores Admin MVP Alta Não CORE Dicionário

#### ED
| ID | Código | Frente | Página / tela | Canal | Fase | Complexidade | Compartilhável? | Dependência | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | ED | Estratégia & Dados | Diagnóstico | Web | MVP | Alta | Não | CORE | Contexto |
| 17 | ED | Estratégia & Dados | Análises e correlações | Web | MVP | Muito alta | Não | CORE | Padrões |
| 18 | ED | Estratégia & Dados | Prioridades | Web | MVP | Alta | Não | CORE | Riscos/oportunidades |
| 19 | ED | Estratégia & Dados | Planos de ação | Web | MVP | Média | Não | CORE | Ações |
| 20 | ED | Estratégia & Dados | Cenários / simulações | Web | Fase 2 | Muito alta | Não | CORE | Projeções |
| 21 | ED | Estratégia & Dados | ROI / valor capturado | Web | MVP | Alta | Não | CORE | Financeiro |
| 22 | ED | Estratégia & Dados | Relatórios executivos | Web | MVP | Média | Não | CORE | Exportação |
| 23 | ED | Estratégia & Dados | Alertas estratégicos | Web | Fase 2 | Alta | Não | CORE | Sinais |

#### COL
| ID | Código | Frente | Página / tela | Canal | Fase | Complexidade | Compartilhável? | Dependência | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 24 | COL | Colaboradores / Meu Time | Meu time | Web | MVP | Alta | Não | CORE | Mapa |
| 25 | COL | Colaboradores / Meu Time | Perfil do colaborador | Web | MVP | Média | Parcial | CORE | 360 |
| 26 | COL | Colaboradores / Meu Time | Objetivos e combinados | Web | MVP | Média | Não | CORE | Metas |
| 27 | COL | Colaboradores / Meu Time | Competências | Web | MVP | Média | Não | CORE | Skills |
| 28 | COL | Colaboradores / Meu Time | Feedbacks / check-ins | Web/Mobile | MVP | Média | Não | CORE | Ciclo |
| 29 | COL | Colaboradores / Meu Time | Plano de desenvolvimento | Web | MVP | Média | Parcial | CORE | PDI |
| 30 | COL | Colaboradores / Meu Time | Mentorias | Web | Fase 2 | Média | Não | CORE | Matching |
| 31 | COL | Colaboradores / Meu Time | Aprendizagem / trilhas | Web | Fase 2 | Média | Não | CORE | Conteúdo |
| 32 | COL | Colaboradores / Meu Time | Talentos internos / mobilidade | Web | Fase 2 | Alta | Não | CORE | Oportunidades |
| 33 | COL | Colaboradores / Meu Time | Sucessão | Web | Fase 2 | Alta | Não | CORE | Prontidão |
| 34 | COL | Colaboradores / Meu Time | Saúde do time / alertas | Web | MVP | Alta | Não | CORE | Risco |

#### CAN
| ID | Código | Frente | Página / tela | Canal | Fase | Complexidade | Compartilhável? | Dependência | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 35 | CAN | Candidatos & Carreira | Perfil do candidato | Web/Mobile | MVP | Média | Parcial | CORE | Perfil |
| 36 | CAN | Candidatos & Carreira | Currículo / portfólio | Web/Mobile | MVP | Média | Não | CORE | Evidências |
| 37 | CAN | Candidatos & Carreira | Competências e interesses | Web/Mobile | MVP | Média | Não | CORE | Skills |
| 38 | CAN | Candidatos & Carreira | Oportunidades recomendadas | Web/Mobile | MVP | Alta | Não | CORE | Feed |
| 39 | CAN | Candidatos & Carreira | Detalhe da oportunidade | Web/Mobile | MVP | Baixa | Não | CORE | Vaga/projeto |
| 40 | CAN | Candidatos & Carreira | Candidatura | Web/Mobile | MVP | Média | Não | CORE | Aplicação |
| 41 | CAN | Candidatos & Carreira | Match candidato-vaga | Web | MVP | Muito alta | Não | CORE | Aderência |
| 42 | CAN | Candidatos & Carreira | Minha jornada | Web/Mobile | MVP | Média | Não | CORE | Progresso |
| 43 | CAN | Candidatos & Carreira | Capacitação recomendada | Web/Mobile | Fase 2 | Alta | Não | CORE | Gap->trilha |
| 44 | CAN | Candidatos & Carreira | Mentoria / preparação | Web/Mobile | Fase 2 | Média | Não | CORE | Carreira |
| 45 | CAN | Candidatos & Carreira | Feedbacks do processo | Web/Mobile | Fase 2 | Média | Não | CORE | Retorno |
| 46 | CAN | Candidatos & Carreira | Painel empresa - talentos | Web | MVP | Alta | Não | CORE | Shortlist |
| 47 | CAN | Candidatos & Carreira | Inteligência de vagas | Web | Fase 2 | Muito alta | Não | CORE | Requisitos por evidência |

#### FOR
| ID | Código | Frente | Página / tela | Canal | Fase | Complexidade | Compartilhável? | Dependência | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 48 | FOR | Fornecedores & Negócios | Perfil do fornecedor | Web | MVP | Média | Parcial | CORE | Capacidades |
| 49 | FOR | Fornecedores & Negócios | Documentos e compliance | Web | MVP | Alta | Não | CORE | Certificações |
| 50 | FOR | Fornecedores & Negócios | Maturidade | Web | MVP | Alta | Não | CORE | Diagnóstico |
| 51 | FOR | Fornecedores & Negócios | Plano de desenvolvimento | Web | MVP | Alta | Parcial | CORE | Gaps |
| 52 | FOR | Fornecedores & Negócios | Trilhas / apoio | Web | Fase 2 | Média | Não | CORE | Cursos/crédito |
| 53 | FOR | Fornecedores & Negócios | Oportunidades / demandas | Web | MVP | Média | Não | CORE | Compras |
| 54 | FOR | Fornecedores & Negócios | Detalhe da demanda | Web | MVP | Baixa | Não | CORE | Critérios |
| 55 | FOR | Fornecedores & Negócios | Match fornecedor-demanda | Web | MVP | Muito alta | Não | CORE | Aderência |
| 56 | FOR | Fornecedores & Negócios | Painel empresa compradora | Web | MVP | Alta | Não | CORE | Criar demanda |
| 57 | FOR | Fornecedores & Negócios | Reuniões / conexões | Web | MVP | Média | Não | CORE | Agenda |
| 58 | FOR | Fornecedores & Negócios | Propostas | Web | Fase 2 | Alta | Não | CORE | Pipeline |
| 59 | FOR | Fornecedores & Negócios | Negociações | Web | Fase 2 | Alta | Não | CORE | Pipeline |
| 60 | FOR | Fornecedores & Negócios | Contratos / negócios | Web | Fase 2 | Alta | Não | CORE | Conversão |
| 61 | FOR | Fornecedores & Negócios | Indicadores do ecossistema | Web | MVP | Alta | Parcial | CORE | Impacto |

#### ACA
| ID | Código | Frente | Página / tela | Canal | Fase | Complexidade | Compartilhável? | Dependência | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 62 | ACA | Acadêmico / Universidades | Portal da universidade | Web | MVP | Média | Não | CORE | Institucional |
| 63 | ACA | Acadêmico / Universidades | Perfil acadêmico do aluno | Web/Mobile | MVP | Média | Parcial | CORE | Formação |
| 64 | ACA | Acadêmico / Universidades | Perfil pesquisador/docente | Web | Fase 2 | Média | Parcial | CORE | Linhas |
| 65 | ACA | Acadêmico / Universidades | Oportunidades acadêmicas | Web/Mobile | MVP | Média | Não | CORE | Bolsas/projetos |
| 66 | ACA | Acadêmico / Universidades | Projetos empresa-universidade | Web | MVP | Alta | Não | CORE | Desafios |
| 67 | ACA | Acadêmico / Universidades | Match aluno-projeto | Web | MVP | Alta | Não | CORE | Aderência |
| 68 | ACA | Acadêmico / Universidades | Match pesquisador-empresa | Web | Fase 2 | Muito alta | Não | CORE | Pesquisa aplicada |
| 69 | ACA | Acadêmico / Universidades | Estágios e carreira | Web/Mobile | MVP | Alta | Não | CORE | Integra CAN |
| 70 | ACA | Acadêmico / Universidades | Bolsas corporativas | Web | MVP | Média | Não | CORE | Empresa->aluno |
| 71 | ACA | Acadêmico / Universidades | Formação / trilhas | Web/Mobile | Fase 2 | Média | Não | CORE | Desenvolvimento |
| 72 | ACA | Acadêmico / Universidades | Acompanhamento de projeto | Web | Fase 2 | Alta | Não | CORE | Entregas |
| 73 | ACA | Acadêmico / Universidades | Indicadores universidade-mercado | Web | MVP | Alta | Parcial | CORE | Impacto |

#### EVT
| ID | Código | Frente | Página / tela | Canal | Fase | Complexidade | Compartilhável? | Dependência | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 74 | EVT | Eventos | Visão geral do evento | Web | MVP | Alta | Não | CORE | Dashboard |
| 75 | EVT | Eventos | Planejamento / metas | Web | MVP | Média | Não | CORE | KPIs |
| 76 | EVT | Eventos | Talentos / equipes | Web | MVP | Alta | Não | CORE | CAN |
| 77 | EVT | Eventos | Fornecedores do evento | Web | MVP | Alta | Não | CORE | FOR |
| 78 | EVT | Eventos | Demandas e contratações | Web | MVP | Alta | Não | CORE | Compras |
| 79 | EVT | Eventos | Patrocínios / marcas | Web | Fase 2 | Alta | Não | CORE | Retorno |
| 80 | EVT | Eventos | Artistas / criadores | Web | Fase 2 | Média | Não | CORE | Conexões |
| 81 | EVT | Eventos | Pesquisa de público / mercado | Web/Mobile | MVP | Alta | Não | CORE | Insights |
| 82 | EVT | Eventos | Acessibilidade | Web | MVP | Média | Não | CORE | Plano |
| 83 | EVT | Eventos | Segurança / combate ao assédio | Web/Mobile | MVP | Alta | Não | CORE | Protocolos |
| 84 | EVT | Eventos | Operação / checklists | Web/Mobile | Fase 2 | Alta | Não | CORE | Execução |
| 85 | EVT | Eventos | Indicadores em tempo real | Web | Fase 2 | Alta | Parcial | CORE | Operação |
| 86 | EVT | Eventos | ROI / impacto financeiro | Web | MVP | Alta | Não | CORE | Retorno |
| 87 | EVT | Eventos | Relatório pós-evento | Web | MVP | Média | Não | CORE | Resultados |

#### COM
| ID | Código | Frente | Página / tela | Canal | Fase | Complexidade | Compartilhável? | Dependência | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 88 | COM | Comunidades / Eu & Eu / Cultura | Meu perfil | Web/Mobile | MVP | Baixa | Não | CORE | Preferências |
| 89 | COM | Comunidades / Eu & Eu / Cultura | Objetivos | Web/Mobile | MVP | Média | Não | CORE | Metas |
| 90 | COM | Comunidades / Eu & Eu / Cultura | Plano de ação | Web/Mobile | MVP | Média | Não | CORE | Passos |
| 91 | COM | Comunidades / Eu & Eu / Cultura | Preparação / conteúdos | Web/Mobile | MVP | Média | Não | CORE | Trilhas |
| 92 | COM | Comunidades / Eu & Eu / Cultura | Mentoria | Web/Mobile | Fase 2 | Média | Não | CORE | Conexões |
| 93 | COM | Comunidades / Eu & Eu / Cultura | Saúde & cuidado | Web/Mobile | Fase 2 | Alta | Não | CORE | Recursos |
| 94 | COM | Comunidades / Eu & Eu / Cultura | Eventos da comunidade | Web/Mobile | MVP | Média | Não | CORE | Agenda |
| 95 | COM | Comunidades / Eu & Eu / Cultura | Conexões com empresas | Web/Mobile | MVP | Alta | Não | CORE | Oportunidades |
| 96 | COM | Comunidades / Eu & Eu / Cultura | Acadêmico | Web/Mobile | Fase 2 | Média | Não | CORE | Formação |

## 3. 03_Resumo_Modulos

- Referência: `(não informada)`

> RESUMO DE ESCOPO POR MÓDULO
| Código | Módulo | Total telas | MVP | Fase 2 | Alta/Muito alta | Standalone? | Leitura |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CORE | Core / Plataforma | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A6) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A6,'02_Inventario_Paginas'!$F$6:$F$101,"MVP") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A6,'02_Inventario_Paginas'!$F$6:$F$101,"Fase 2") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A6,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A6,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | Sim | Obrigatório para qualquer implantação. |
| ED | Estratégia & Dados | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A7) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A7,'02_Inventario_Paginas'!$F$6:$F$101,"MVP") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A7,'02_Inventario_Paginas'!$F$6:$F$101,"Fase 2") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A7,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A7,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | Sim | Pode ser vendido sozinho. |
| COL | Colaboradores / Meu Time | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A8) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A8,'02_Inventario_Paginas'!$F$6:$F$101,"MVP") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A8,'02_Inventario_Paginas'!$F$6:$F$101,"Fase 2") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A8,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A8,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | Sim | Pode operar sem marketplace externo. |
| CAN | Candidatos & Carreira | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A9) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A9,'02_Inventario_Paginas'!$F$6:$F$101,"MVP") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A9,'02_Inventario_Paginas'!$F$6:$F$101,"Fase 2") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A9,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A9,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | Sim | Vertical de empregabilidade. |
| FOR | Fornecedores & Negócios | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A10) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A10,'02_Inventario_Paginas'!$F$6:$F$101,"MVP") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A10,'02_Inventario_Paginas'!$F$6:$F$101,"Fase 2") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A10,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A10,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | Sim | Pode operar sozinho para acesso a mercado. |
| ACA | Acadêmico / Universidades | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A11) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A11,'02_Inventario_Paginas'!$F$6:$F$101,"MVP") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A11,'02_Inventario_Paginas'!$F$6:$F$101,"Fase 2") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A11,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A11,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | Sim | Pode ser vendido sozinho para universidade. |
| EVT | Eventos | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A12) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A12,'02_Inventario_Paginas'!$F$6:$F$101,"MVP") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A12,'02_Inventario_Paginas'!$F$6:$F$101,"Fase 2") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A12,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A12,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | Parcial | Pode começar standalone, mas ganha valor com outros módulos. |
| COM | Comunidades / Eu & Eu / Cultura | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A13) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A13,'02_Inventario_Paginas'!$F$6:$F$101,"MVP") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A13,'02_Inventario_Paginas'!$F$6:$F$101,"Fase 2") | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A13,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A13,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | Sim | Camada B2C; não é pré-requisito B2B. |

## 4. 04_Matriz_Integracoes

- Referência: `(não informada)`

> MATRIZ DE INTEGRAÇÃO ENTRE FRENTES
> 3 = mesmo módulo \| 2 = integração direta/forte \| 1 = opcional/troca de dados \| 0 = não precisa conversar diretamente
| Código | Módulo | CORE | ED | COL | CAN | FOR | ACA | EVT | COM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CORE | Core / Plataforma | 3 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| ED | Estratégia & Dados | 2 | 3 | 2 | 1 | 1 | 1 | 2 | 1 |
| COL | Colaboradores / Meu Time | 2 | 2 | 3 | 1 | 0 | 1 | 1 | 1 |
| CAN | Candidatos & Carreira | 2 | 1 | 1 | 3 | 0 | 2 | 2 | 2 |
| FOR | Fornecedores & Negócios | 2 | 1 | 0 | 0 | 3 | 1 | 2 | 1 |
| ACA | Acadêmico / Universidades | 2 | 1 | 1 | 2 | 1 | 3 | 1 | 2 |
| EVT | Eventos | 2 | 2 | 1 | 2 | 2 | 1 | 3 | 2 |
| COM | Comunidades / Eu & Eu / Cultura | 2 | 1 | 1 | 2 | 1 | 2 | 2 | 3 |

## 5. 05_Fluxos_Diretos

- Referência: `(não informada)`

> O QUE CONVERSA DIRETAMENTE — E O QUE NÃO PRECISA
| Origem | Destino | Tipo | Dado compartilhado | Por que integrar | Obrigatória? | Funciona sem? | Exemplo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Estratégia & Dados | Colaboradores | Direta | KPIs, skills, desempenho, liderança | Enriquece pessoas x negócio | Não | Sim | ED pode usar RHIS/ERP/BI sem COL. |
| Estratégia & Dados | Eventos | Direta | Pesquisa, receita, custos, fornecedores, equipes | Conecta operação ao ROI | Não | Sim | EVT pode enviar dados agregados. |
| Estratégia & Dados | Fornecedores | Opcional | Spend, conversão, impacto | Analisa cadeia e negócios | Não | Sim | ED não depende do marketplace B2B. |
| Estratégia & Dados | Candidatos | Opcional | Funil, contratação, skills | Relaciona atração e performance | Não | Sim | Pode usar ATS existente. |
| Candidatos | Acadêmico | Direta | Perfil, skills, formação, projetos, estágio | Formação -> empregabilidade | Não | Sim | ACA pode ter oportunidades próprias. |
| Candidatos | Eventos | Direta | Talentos temporários e vagas | Contratação para eventos | Não | Sim | EVT pode integrar ATS externo. |
| Fornecedores | Eventos | Direta | Fornecedores, demandas, docs, contratos | Compras do evento | Não | Sim | EVT pode cadastrar base própria. |
| Acadêmico | Empresas/Candidatos | Direta | Projetos, bolsas, estágios, pesquisa | Universidade -> mercado | Não | Sim | ACA pode começar isolado. |
| Comunidades | Candidatos | Direta c/ consentimento | Perfil, objetivos, preparação | Evita recadastro | Não | Sim | CAN pode ter onboarding próprio. |
| Comunidades | Eventos | Direta c/ consentimento | Interesses, presença, pesquisa | Personaliza experiência | Não | Sim | EVT pode operar com base própria. |
| Candidatos | Fornecedores | Sem integração direta | - | Marketplaces diferentes | Não | Sim | Cruza apenas em casos via Core/Eventos. |

## 6. 06_Cenarios_Implantacao

- Referência: `(não informada)`

> CENÁRIOS DE IMPLANTAÇÃO MODULAR
| Cenário | CORE | ED | COL | CAN | FOR | ACA | EVT | COM | Leitura |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Estratégia & Dados standalone | ✓ | ✓ |  |  |  |  |  |  | Dados do cliente entram por integrações; não exige marketplaces. |
| Gestão de pessoas completa | ✓ | ✓ | ✓ |  |  |  |  |  | ED + jornada interna. |
| Empregabilidade / Firjan | ✓ |  |  | ✓ |  |  |  | Opcional | Formação + candidatos + vagas; COM pode apoiar preparação. |
| Fornecedores / Sebrae-GINGA | ✓ | Opcional |  |  | ✓ |  | Opcional |  | Match B2B; ED mede impacto e EVT pode ativar GINGA. |
| Universidade / Mackenzie | ✓ | Opcional |  | ✓ |  | ✓ | Opcional |  | ACA standalone; CAN amplia carreira/estágio. |
| HUB Eventos | ✓ | Opcional |  | ✓ | ✓ |  | ✓ | Opcional | Orquestra talentos, fornecedores, pesquisa e ROI. |
| Ecossistema completo | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Máxima inteligência de rede, com consentimento e governança. |

## 7. 07_Base_Para_Precificacao

- Referência: `(não informada)`

> BASE PARA A PRÓXIMA ETAPA DE PRECIFICAÇÃO
> Sem valores ainda: drivers que serão convertidos em horas, equipe, infraestrutura, licenças e custos recorrentes.
| Código | Módulo | Telas | Complexas | Integrações diretas | IA/matching | Dados/BI | Mensageria | Mobile | Compliance | Operação humana | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CORE | Core / Plataforma | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A6) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A6,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A6,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | 7 | Não | Média | Alta | Sim | Muito alta | Média | Infraestrutura transversal |
| ED | Estratégia & Dados | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A7) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A7,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A7,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | 3 | Alta | Muito alta | Baixa | Não | Alta | Baixa | Peso em dados, integrações e analytics |
| COL | Colaboradores / Meu Time | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A8) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A8,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A8,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | 2 | Média | Alta | Média | Sim | Alta | Média | Dados sensíveis e ciclos internos |
| CAN | Candidatos & Carreira | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A9) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A9,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A9,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | 4 | Muito alta | Alta | Alta | Sim | Alta | Alta | Marketplace, matching e alto volume |
| FOR | Fornecedores & Negócios | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A10) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A10,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A10,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | 2 | Muito alta | Alta | Alta | Responsivo | Alta | Alta | B2B, documentos e negociação |
| ACA | Acadêmico / Universidades | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A11) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A11,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A11,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | 3 | Alta | Alta | Média | Sim | Alta | Média | Entidades acadêmicas e matching |
| EVT | Eventos | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A12) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A12,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A12,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | 5 | Alta | Muito alta | Alta | Sim | Muito alta | Muito alta | Tempo real, pesquisa e operação |
| COM | Comunidades / Eu & Eu / Cultura | =COUNTIF('02_Inventario_Paginas'!$B$6:$B$101,A13) | =COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A13,'02_Inventario_Paginas'!$G$6:$G$101,"Alta")+COUNTIFS('02_Inventario_Paginas'!$B$6:$B$101,A13,'02_Inventario_Paginas'!$G$6:$G$101,"Muito alta") | 4 | Média | Média | Alta | Sim | Alta | Alta | B2C e engajamento |

## 8. 08_Premissas_Custos

- Referência: `(não informada)`

> PREMISSAS PARA DIMENSIONAMENTO DE CUSTO
> Premissas iniciais editáveis. Não são orçamento de fornecedor: servem para transformar as 96 telas do escopo em uma primeira ordem de grandeza e depois calibrar com cotações reais.
| Complexidade da tela | Multiplicador | Uso |  | Premissa geral | Valor |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Baixa | 0.65 | Tela simples / leitura / formulário básico |  | Contingência desenvolvimento | 0.15 |  |  |
| Média | 1 | Fluxo padrão |  | Gestão/arquitetura sobre build | 0.12 |  |  |
| Alta | 1.55 | Regras, integrações ou visualizações complexas |  | Meses de construção | 9 |  |  |
| Muito alta | 2.2 | Matching, analytics avançado, simulação ou lógica intensa |  | Meses de operação/ano | 12 |  |  |
|  |  |  |  | Fator Fase 2 vs. MVP | 0.9 |  |  |
|  |  |  |  | Reuso parcial de tela | 0.55 |  |  |
| Disciplina | Horas base / tela média | Rate R$/h | Mensalidade base R$ | Driver mensal | Observação |  |  |
| UX/UI | 22 | 180 | 0 | Build | Pesquisa, fluxo, wireframe, design e handoff |  |  |
| Front-end | 48 | 220 | 0 | Build | Web responsivo; mobile dedicado é driver adicional |  |  |
| Back-end | 54 | 240 | 0 | Build | APIs, regras e persistência |  |  |
| Dados/BI | 18 | 260 | 0 | Build | Modelagem, indicadores e pipelines leves |  |  |
| IA/Matching | 10 | 320 | 0 | Build | Aplicado apenas quando a tela tem driver de IA |  |  |
| QA | 20 | 170 | 0 | Build | Testes funcionais, regressão e automação gradual |  |  |
| DevOps | 8 | 260 | 0 | Build | CI/CD, ambientes e observabilidade |  |  |
| Segurança | 6 | 320 | 0 | Build | Threat modeling, hardening e revisão |  |  |
| Custo mensal recorrente | Base R$/mês | Escala | Observação |  |  |  |  |
| Cloud / infraestrutura | 18000 | 1 | Ambientes, banco, storage, observabilidade; recalibrar por volume |  |  |  |  |
| Dados / pipelines / BI | 14000 | 1 | Orquestração, processamento e monitoramento |  |  |  |  |
| IA / modelos / APIs | 12000 | 1 | Uso variável; depende de volume e arquitetura |  |  |  |  |
| DevOps / SRE | 22000 | 1 | Sustentação de plataforma |  |  |  |  |
| Segurança / compliance | 14000 | 1 | Monitoramento, scans, LGPD e auditoria |  |  |  |  |
| QA / releases | 16000 | 1 | Regressão e qualidade contínua |  |  |  |  |
| Produto / operação técnica | 28000 | 1 | Gestão de backlog, incidentes e evolução |  |  |  |  |
| Suporte / CS técnico | 18000 | 1 | Atendimento B2B e operação |  |  |  |  |

## 9. 09_Estimativa_96_Telas

- Referência: `(não informada)`

### Estimativa de build por tela, agrupada por módulo

## 10. 10_CAPEX_por_Modulo

- Referência: `(não informada)`

### CAPEX e custo incremental por módulo





## 11. 11_OPEX_Mensal

- Referência: `(não informada)`

### OPEX mensal da plataforma




## 12. 12_Dashboard_Custos

- Referência: `(não informada)`

### Dashboard executivo de custos
