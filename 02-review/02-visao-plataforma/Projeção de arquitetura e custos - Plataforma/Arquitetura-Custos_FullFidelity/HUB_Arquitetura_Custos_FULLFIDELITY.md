---
title: HUB — Arquitetura e Custos Totais — Full-Fidelity Archive
type: archive
source: Arquitetura e Custos Totais.xlsx
sheets: 12
telas: 96
generated: 2026-08-30
tags: [hub, arquitetura, custos, archive, full-fidelity]
status: em-revisao
---

# HUB — Arquitetura e Custos Totais — Full-Fidelity Archive

> **Arquivo fiel ao Excel.** Cada aba abaixo é transcrição literal — mesma ordem, mesmos headers, mesmos valores, sem resumos nem agregações. Para versão legível/dashboard ver `[[../Arquitetura-Custos/00_HUB_Arquitetura_Custos_Dashboard|B+D — Dashboard]]`.
>
> **Fonte:** `Plataforma Completa/Projeção de arquitetura e custos - Plataforma/Arquitetura e Custos Totais.xlsx` — 12 abas · `A1` até última célula preenchida · merged cells anotadas.
>
> **CSV fiel:** `_data/<NomeDaAba>.csv` — 12 arquivos, importáveis em Excel/Sheets/Bases sem perda.

## Índice

| # | Aba | Dimensão | Linhas de dados | Descrição |
|---|-----|----------|-----------------|-----------|
| 01 | `01_Visao_Geral` | `A1:H19` | 13 | ARQUITETURA INICIAL DA PLATAFORMA HUB |
| 02 | `02_Inventario_Paginas` | `A1:J101` | 98 | INVENTÁRIO DE PÁGINAS / TELAS |
| 03 | `03_Resumo_Modulos` | `A1:H13` | 10 | RESUMO DE ESCOPO POR MÓDULO |
| 04 | `04_Matriz_Integracoes` | `A1:J13` | 11 | MATRIZ DE INTEGRAÇÃO ENTRE FRENTES |
| 05 | `05_Fluxos_Diretos` | `A1:H16` | 13 | O QUE CONVERSA DIRETAMENTE — E O QUE NÃO PRECISA |
| 06 | `06_Cenarios_Implantacao` | `A1:J12` | 9 | CENÁRIOS DE IMPLANTAÇÃO MODULAR |
| 07 | `07_Base_Para_Precificacao` | `A1:L13` | 11 | BASE PARA A PRÓXIMA ETAPA DE PRECIFICAÇÃO |
| 08 | `08_Premissas_Custos` | `A1:H35` | 27 | PREMISSAS PARA DIMENSIONAMENTO DE CUSTO |
| 09 | `09_Estimativa_96_Telas` | `A1:AB101` | 99 | ESTIMATIVA DE BUILD POR TELA — 96 TELAS |
| 10 | `10_CAPEX_por_Modulo` | `A1:N15` | 12 | CAPEX E CUSTO INCREMENTAL POR MÓDULO |
| 11 | `11_OPEX_Mensal` | `A1:O15` | 11 | OPEX MENSAL — PLATAFORMA E MÓDULOS |
| 12 | `12_Dashboard_Custos` | `A1:J17` | 12 | HUB — VISÃO EXECUTIVA DE CUSTO DA PLATAFORMA |

> [!warning] Tabelas largas
> `09_Estimativa_96_Telas` tem **28 colunas** e 96 linhas — vai exigir scroll horizontal em Obsidian e quebra em mobile. É proposital: fidelidade > legibilidade neste arquivo. Use `_data/09_Estimativa_96_Telas.csv` para filtrar.

---


---

## 01_Visao_Geral

> **Dimensão Excel:** `A1:H19` · **Merged:** `A1:H2, A3:H3, A16:H19, A15:H15`

**Título:** ARQUITETURA INICIAL DA PLATAFORMA HUB

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

---

## 02_Inventario_Paginas

> **Dimensão Excel:** `A1:J101` · **Merged:** `A1:J2`

**Título:** INVENTÁRIO DE PÁGINAS / TELAS

| ID | Código | Frente | Página / tela | Canal | Fase | Complexidade | Compartilhável? | Dependência | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | CORE | Core / Plataforma | Login / SSO | Web | MVP | Baixa | Sim | - | Autenticação |
| 2 | CORE | Core / Plataforma | Cadastro / onboarding | Web/Mobile | MVP | Média | Sim | - | Entrada por tipo |
| 3 | CORE | Core / Plataforma | Perfis e organizações | Web | MVP | Média | Sim | - | Entidades |
| 4 | CORE | Core / Plataforma | Papéis e permissões | Admin | MVP | Alta | Sim | - | RBAC |
| 5 | CORE | Core / Plataforma | Consentimentos / LGPD | Web/Admin | MVP | Alta | Sim | - | Privacidade |
| 6 | CORE | Core / Plataforma | Central de integrações | Admin | MVP | Alta | Sim | - | APIs/RHIS/ERP/CRM/LMS |
| 7 | CORE | Core / Plataforma | Notificações | Web/Mobile | MVP | Média | Sim | - | Gatilhos |
| 8 | CORE | Core / Plataforma | Mensagens | Web/Mobile | Fase 2 | Alta | Sim | - | Conversas |
| 9 | CORE | Core / Plataforma | Busca global | Web | Fase 2 | Média | Sim | - | Busca |
| 10 | CORE | Core / Plataforma | Analytics de uso | Admin | MVP | Média | Sim | - | Adoção |
| 11 | CORE | Core / Plataforma | Administração | Admin | MVP | Alta | Sim | - | Configurações |
| 12 | CORE | Core / Plataforma | Auditoria e logs | Admin | MVP | Alta | Sim | - | Rastreabilidade |
| 13 | ED | Estratégia & Dados | Visão executiva | Web | MVP | Alta | Não | CORE | KPIs pessoas x negócio |
| 14 | ED | Estratégia & Dados | Conectores de dados | Admin | MVP | Alta | Não | CORE | Dados existentes |
| 15 | ED | Estratégia & Dados | Mapeamento de indicadores | Admin | MVP | Alta | Não | CORE | Dicionário |
| 16 | ED | Estratégia & Dados | Diagnóstico | Web | MVP | Alta | Não | CORE | Contexto |
| 17 | ED | Estratégia & Dados | Análises e correlações | Web | MVP | Muito alta | Não | CORE | Padrões |
| 18 | ED | Estratégia & Dados | Prioridades | Web | MVP | Alta | Não | CORE | Riscos/oportunidades |
| 19 | ED | Estratégia & Dados | Planos de ação | Web | MVP | Média | Não | CORE | Ações |
| 20 | ED | Estratégia & Dados | Cenários / simulações | Web | Fase 2 | Muito alta | Não | CORE | Projeções |
| 21 | ED | Estratégia & Dados | ROI / valor capturado | Web | MVP | Alta | Não | CORE | Financeiro |
| 22 | ED | Estratégia & Dados | Relatórios executivos | Web | MVP | Média | Não | CORE | Exportação |
| 23 | ED | Estratégia & Dados | Alertas estratégicos | Web | Fase 2 | Alta | Não | CORE | Sinais |
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
| 88 | COM | Comunidades / Eu & Eu / Cultura | Meu perfil | Web/Mobile | MVP | Baixa | Não | CORE | Preferências |
| 89 | COM | Comunidades / Eu & Eu / Cultura | Objetivos | Web/Mobile | MVP | Média | Não | CORE | Metas |
| 90 | COM | Comunidades / Eu & Eu / Cultura | Plano de ação | Web/Mobile | MVP | Média | Não | CORE | Passos |
| 91 | COM | Comunidades / Eu & Eu / Cultura | Preparação / conteúdos | Web/Mobile | MVP | Média | Não | CORE | Trilhas |
| 92 | COM | Comunidades / Eu & Eu / Cultura | Mentoria | Web/Mobile | Fase 2 | Média | Não | CORE | Conexões |
| 93 | COM | Comunidades / Eu & Eu / Cultura | Saúde & cuidado | Web/Mobile | Fase 2 | Alta | Não | CORE | Recursos |
| 94 | COM | Comunidades / Eu & Eu / Cultura | Eventos da comunidade | Web/Mobile | MVP | Média | Não | CORE | Agenda |
| 95 | COM | Comunidades / Eu & Eu / Cultura | Conexões com empresas | Web/Mobile | MVP | Alta | Não | CORE | Oportunidades |
| 96 | COM | Comunidades / Eu & Eu / Cultura | Acadêmico | Web/Mobile | Fase 2 | Média | Não | CORE | Formação |

---

## 03_Resumo_Modulos

> **Dimensão Excel:** `A1:H13` · **Merged:** `A1:H2`

**Título:** RESUMO DE ESCOPO POR MÓDULO

| Código | Módulo | Total telas | MVP | Fase 2 | Alta/Muito alta | Standalone? | Leitura |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CORE | Core / Plataforma | 12 | 10 | 2 | 6 | Sim | Obrigatório para qualquer implantação. |
| ED | Estratégia & Dados | 11 | 9 | 2 | 9 | Sim | Pode ser vendido sozinho. |
| COL | Colaboradores / Meu Time | 11 | 7 | 4 | 4 | Sim | Pode operar sem marketplace externo. |
| CAN | Candidatos & Carreira | 13 | 9 | 4 | 5 | Sim | Vertical de empregabilidade. |
| FOR | Fornecedores & Negócios | 14 | 10 | 4 | 9 | Sim | Pode operar sozinho para acesso a mercado. |
| ACA | Acadêmico / Universidades | 12 | 8 | 4 | 6 | Sim | Pode ser vendido sozinho para universidade. |
| EVT | Eventos | 14 | 10 | 4 | 10 | Parcial | Pode começar standalone, mas ganha valor com outros módulos. |
| COM | Comunidades / Eu & Eu / Cultura | 9 | 6 | 3 | 2 | Sim | Camada B2C; não é pré-requisito B2B. |

---

## 04_Matriz_Integracoes

> **Dimensão Excel:** `A1:J13` · **Merged:** `A1:J2, A3:J3`

**Título:** MATRIZ DE INTEGRAÇÃO ENTRE FRENTES

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

---

## 05_Fluxos_Diretos

> **Dimensão Excel:** `A1:H16` · **Merged:** `A1:H2`

**Título:** O QUE CONVERSA DIRETAMENTE — E O QUE NÃO PRECISA

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

---

## 06_Cenarios_Implantacao

> **Dimensão Excel:** `A1:J12` · **Merged:** `A1:J2`

**Título:** CENÁRIOS DE IMPLANTAÇÃO MODULAR

| Cenário | CORE | ED | COL | CAN | FOR | ACA | EVT | COM | Leitura |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Estratégia & Dados standalone | ✓ | ✓ |  |  |  |  |  |  | Dados do cliente entram por integrações; não exige marketplaces. |
| Gestão de pessoas completa | ✓ | ✓ | ✓ |  |  |  |  |  | ED + jornada interna. |
| Empregabilidade / Firjan | ✓ |  |  | ✓ |  |  |  | Opcional | Formação + candidatos + vagas; COM pode apoiar preparação. |
| Fornecedores / Sebrae-GINGA | ✓ | Opcional |  |  | ✓ |  | Opcional |  | Match B2B; ED mede impacto e EVT pode ativar GINGA. |
| Universidade / Mackenzie | ✓ | Opcional |  | ✓ |  | ✓ | Opcional |  | ACA standalone; CAN amplia carreira/estágio. |
| HUB Eventos | ✓ | Opcional |  | ✓ | ✓ |  | ✓ | Opcional | Orquestra talentos, fornecedores, pesquisa e ROI. |
| Ecossistema completo | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Máxima inteligência de rede, com consentimento e governança. |

---

## 07_Base_Para_Precificacao

> **Dimensão Excel:** `A1:L13` · **Merged:** `A3:L3, A1:L2`

**Título:** BASE PARA A PRÓXIMA ETAPA DE PRECIFICAÇÃO

> Sem valores ainda: drivers que serão convertidos em horas, equipe, infraestrutura, licenças e custos recorrentes.

| Código | Módulo | Telas | Complexas | Integrações diretas | IA/matching | Dados/BI | Mensageria | Mobile | Compliance | Operação humana | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CORE | Core / Plataforma | 12 | 6 | 7 | Não | Média | Alta | Sim | Muito alta | Média | Infraestrutura transversal |
| ED | Estratégia & Dados | 11 | 9 | 3 | Alta | Muito alta | Baixa | Não | Alta | Baixa | Peso em dados, integrações e analytics |
| COL | Colaboradores / Meu Time | 11 | 4 | 2 | Média | Alta | Média | Sim | Alta | Média | Dados sensíveis e ciclos internos |
| CAN | Candidatos & Carreira | 13 | 5 | 4 | Muito alta | Alta | Alta | Sim | Alta | Alta | Marketplace, matching e alto volume |
| FOR | Fornecedores & Negócios | 14 | 9 | 2 | Muito alta | Alta | Alta | Responsivo | Alta | Alta | B2B, documentos e negociação |
| ACA | Acadêmico / Universidades | 12 | 6 | 3 | Alta | Alta | Média | Sim | Alta | Média | Entidades acadêmicas e matching |
| EVT | Eventos | 14 | 10 | 5 | Alta | Muito alta | Alta | Sim | Muito alta | Muito alta | Tempo real, pesquisa e operação |
| COM | Comunidades / Eu & Eu / Cultura | 9 | 2 | 4 | Média | Média | Alta | Sim | Alta | Alta | B2C e engajamento |

---

## 08_Premissas_Custos

> **Dimensão Excel:** `A1:H35` · **Merged:** `A3:F3, A1:F2`

**Título:** PREMISSAS PARA DIMENSIONAMENTO DE CUSTO

> Premissas iniciais editáveis. Não são orçamento de fornecedor: servem para transformar as 96 telas do escopo em uma primeira ordem de grandeza e depois calibrar com cotações reais.

| Complexidade da tela | Multiplicador | Uso |  | Premissa geral | Valor |
| --- | --- | --- | --- | --- | --- |
| Baixa | 0.65 | Tela simples / leitura / formulário básico |  | Contingência desenvolvimento | 0.15 |
| Média | 1 | Fluxo padrão |  | Gestão/arquitetura sobre build | 0.12 |
| Alta | 1.55 | Regras, integrações ou visualizações complexas |  | Meses de construção | 9 |
| Muito alta | 2.2 | Matching, analytics avançado, simulação ou lógica intensa |  | Meses de operação/ano | 12 |
|  |  |  |  | Fator Fase 2 vs. MVP | 0.9 |
|  |  |  |  | Reuso parcial de tela | 0.55 |
| Disciplina | Horas base / tela média | Rate R$/h | Mensalidade base R$ | Driver mensal | Observação |
| UX/UI | 22 | 180 | 0 | Build | Pesquisa, fluxo, wireframe, design e handoff |
| Front-end | 48 | 220 | 0 | Build | Web responsivo; mobile dedicado é driver adicional |
| Back-end | 54 | 240 | 0 | Build | APIs, regras e persistência |
| Dados/BI | 18 | 260 | 0 | Build | Modelagem, indicadores e pipelines leves |
| IA/Matching | 10 | 320 | 0 | Build | Aplicado apenas quando a tela tem driver de IA |
| QA | 20 | 170 | 0 | Build | Testes funcionais, regressão e automação gradual |
| DevOps | 8 | 260 | 0 | Build | CI/CD, ambientes e observabilidade |
| Segurança | 6 | 320 | 0 | Build | Threat modeling, hardening e revisão |
| Custo mensal recorrente | Base R$/mês | Escala | Observação |  |  |
| Cloud / infraestrutura | 18000 | 1 | Ambientes, banco, storage, observabilidade; recalibrar por volume |  |  |
| Dados / pipelines / BI | 14000 | 1 | Orquestração, processamento e monitoramento |  |  |
| IA / modelos / APIs | 12000 | 1 | Uso variável; depende de volume e arquitetura |  |  |
| DevOps / SRE | 22000 | 1 | Sustentação de plataforma |  |  |
| Segurança / compliance | 14000 | 1 | Monitoramento, scans, LGPD e auditoria |  |  |
| QA / releases | 16000 | 1 | Regressão e qualidade contínua |  |  |
| Produto / operação técnica | 28000 | 1 | Gestão de backlog, incidentes e evolução |  |  |
| Suporte / CS técnico | 18000 | 1 | Atendimento B2B e operação |  |  |

> **Nota:** Esta aba contém 3 blocos no Excel — `Multiplicadores` (A5:C9), `Premissas gerais` (E5:F11), `Disciplinas` (A12:F20) e `OPEX base` (A21:D29) — acima transcritos como tabelas sequenciais. Ver `_data/08_Premissas_Custos.csv` para layout original com linhas vazias preservadas.

---

## 09_Estimativa_96_Telas

> **Dimensão Excel:** `A1:AB101` · **Merged:** `A3:AB3, A1:AB2`

**Título:** ESTIMATIVA DE BUILD POR TELA — 96 TELAS

> Horas são calculadas a partir da complexidade, disciplina e drivers específicos. A coluna 'Componente compartilhado' evita duplicar custo quando a mesma capacidade é reutilizada entre verticais.

| ID | Código | Frente | Tela | Fase | Complexidade | Componente compartilhado | Reuso % | Driver IA | Driver Dados | Driver Segurança | Driver Mobile | Mult. complex. | UX h | Front h | Back h | Dados h | IA h | QA h | DevOps h | Segurança h | Horas brutas | Horas líquidas | Custo build R$ | Gestão/arquitetura R$ | Contingência R$ | CAPEX tela R$ | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | CORE | Core / Plataforma | Login / SSO | MVP | Baixa | CORE compartilhado | 0.8 | Não | Não | Sim | Não | 0.65 | 14.3 | 31.2 | 40.37 | 6.44 | 0.97 | 13 | 5.2 | 7.02 | 118.5 | 23.7 | 5383.82 | 646.06 | 904.48 | 6934.36 | Autenticação |
| 2 | CORE | Core / Plataforma | Cadastro / onboarding | MVP | Média | CORE compartilhado | 0.8 | Não | Não | Sim | Sim | 1 | 22 | 60 | 62.1 | 9.9 | 1.5 | 22 | 8 | 10.8 | 196.3 | 39.26 | 8878.8 | 1065.46 | 1491.64 | 11435.89 | Entrada por tipo |
| 3 | CORE | Core / Plataforma | Perfis e organizações | MVP | Média | CORE compartilhado | 0.8 | Não | Não | Sim | Não | 1 | 22 | 48 | 62.1 | 9.9 | 1.5 | 20 | 8 | 10.8 | 182.3 | 36.46 | 8282.8 | 993.94 | 1391.51 | 10668.25 | Entidades |
| 4 | CORE | Core / Plataforma | Papéis e permissões | MVP | Alta | CORE compartilhado | 0.8 | Não | Não | Sim | Não | 1.55 | 34.1 | 74.4 | 96.25 | 15.35 | 2.32 | 31 | 12.4 | 16.74 | 282.56 | 56.51 | 12838.34 | 1540.6 | 2156.84 | 16535.78 | RBAC |
| 5 | CORE | Core / Plataforma | Consentimentos / LGPD | MVP | Alta | CORE compartilhado | 0.8 | Não | Não | Sim | Não | 1.55 | 34.1 | 74.4 | 96.25 | 15.35 | 2.32 | 31 | 12.4 | 16.74 | 282.56 | 56.51 | 12838.34 | 1540.6 | 2156.84 | 16535.78 | Privacidade |
| 6 | CORE | Core / Plataforma | Central de integrações | MVP | Alta | CORE compartilhado | 0.8 | Não | Não | Sim | Não | 1.55 | 34.1 | 74.4 | 96.25 | 15.35 | 2.32 | 31 | 12.4 | 16.74 | 282.56 | 56.51 | 12838.34 | 1540.6 | 2156.84 | 16535.78 | APIs/RHIS/ERP/CRM/LMS |
| 7 | CORE | Core / Plataforma | Notificações | MVP | Média | CORE compartilhado | 0.8 | Não | Não | Sim | Sim | 1 | 22 | 60 | 62.1 | 9.9 | 1.5 | 22 | 8 | 10.8 | 196.3 | 39.26 | 8878.8 | 1065.46 | 1491.64 | 11435.89 | Gatilhos |
| 8 | CORE | Core / Plataforma | Mensagens | Fase 2 | Alta | CORE compartilhado | 0.8 | Não | Não | Sim | Sim | 1.55 | 34.1 | 93 | 96.25 | 15.35 | 2.32 | 34.1 | 12.4 | 16.74 | 304.26 | 54.77 | 12385.93 | 1486.31 | 2080.84 | 15953.07 | Conversas |
| 9 | CORE | Core / Plataforma | Busca global | Fase 2 | Média | CORE compartilhado | 0.8 | Não | Não | Sim | Não | 1 | 22 | 48 | 62.1 | 9.9 | 1.5 | 20 | 8 | 10.8 | 182.3 | 32.81 | 7454.52 | 894.54 | 1252.36 | 9601.42 | Busca |
| 10 | CORE | Core / Plataforma | Analytics de uso | MVP | Média | CORE compartilhado | 0.8 | Não | Sim | Sim | Não | 1 | 22 | 48 | 62.1 | 28.8 | 1.5 | 20 | 9.2 | 10.8 | 202.4 | 40.48 | 9328 | 1119.36 | 1567.1 | 12014.46 | Adoção |
| 11 | CORE | Core / Plataforma | Administração | MVP | Alta | CORE compartilhado | 0.8 | Não | Não | Sim | Não | 1.55 | 34.1 | 74.4 | 96.25 | 15.35 | 2.32 | 31 | 12.4 | 16.74 | 282.56 | 56.51 | 12838.34 | 1540.6 | 2156.84 | 16535.78 | Configurações |
| 12 | CORE | Core / Plataforma | Auditoria e logs | MVP | Alta | CORE compartilhado | 0.8 | Não | Não | Sim | Não | 1.55 | 34.1 | 74.4 | 96.25 | 15.35 | 2.32 | 31 | 12.4 | 16.74 | 282.56 | 56.51 | 12838.34 | 1540.6 | 2156.84 | 16535.78 | Rastreabilidade |
| 13 | ED | Estratégia & Dados | Visão executiva | MVP | Alta |  | 0 | Não | Sim | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 44.64 | 2.32 | 31 | 14.26 | 6.51 | 290.93 | 290.93 | 66005.2 | 7920.62 | 11088.87 | 85014.7 | KPIs pessoas x negócio |
| 14 | ED | Estratégia & Dados | Conectores de dados | MVP | Alta |  | 0 | Não | Sim | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 44.64 | 2.32 | 31 | 14.26 | 6.51 | 290.93 | 290.93 | 66005.2 | 7920.62 | 11088.87 | 85014.7 | Dados existentes |
| 15 | ED | Estratégia & Dados | Mapeamento de indicadores | MVP | Alta |  | 0 | Não | Sim | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 44.64 | 2.32 | 31 | 14.26 | 6.51 | 290.93 | 290.93 | 66005.2 | 7920.62 | 11088.87 | 85014.7 | Dicionário |
| 16 | ED | Estratégia & Dados | Diagnóstico | MVP | Alta |  | 0 | Não | Sim | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 44.64 | 2.32 | 31 | 14.26 | 6.51 | 290.93 | 290.93 | 66005.2 | 7920.62 | 11088.87 | 85014.7 | Contexto |
| 17 | ED | Estratégia & Dados | Análises e correlações | MVP | Muito alta |  | 0 | Sim | Sim | Não | Não | 2.2 | 48.4 | 105.6 | 142.56 | 63.36 | 39.6 | 50.6 | 20.24 | 9.24 | 479.6 | 479.6 | 112125.2 | 13455.02 | 18837.03 | 144417.26 | Padrões |
| 18 | ED | Estratégia & Dados | Prioridades | MVP | Alta |  | 0 | Não | Sim | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 44.64 | 2.32 | 31 | 14.26 | 6.51 | 290.93 | 290.93 | 66005.2 | 7920.62 | 11088.87 | 85014.7 | Riscos/oportunidades |
| 19 | ED | Estratégia & Dados | Planos de ação | MVP | Média |  | 0 | Não | Sim | Não | Não | 1 | 22 | 48 | 54 | 28.8 | 1.5 | 20 | 9.2 | 4.2 | 187.7 | 187.7 | 42584 | 5110.08 | 7154.11 | 54848.19 | Ações |
| 20 | ED | Estratégia & Dados | Cenários / simulações | Fase 2 | Muito alta |  | 0 | Sim | Sim | Não | Não | 2.2 | 48.4 | 105.6 | 142.56 | 63.36 | 39.6 | 50.6 | 20.24 | 9.24 | 479.6 | 431.64 | 100912.68 | 12109.52 | 16953.33 | 129975.53 | Projeções |
| 21 | ED | Estratégia & Dados | ROI / valor capturado | MVP | Alta |  | 0 | Não | Sim | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 44.64 | 2.32 | 31 | 14.26 | 6.51 | 290.93 | 290.93 | 66005.2 | 7920.62 | 11088.87 | 85014.7 | Financeiro |
| 22 | ED | Estratégia & Dados | Relatórios executivos | MVP | Média |  | 0 | Não | Sim | Não | Não | 1 | 22 | 48 | 54 | 28.8 | 1.5 | 20 | 9.2 | 4.2 | 187.7 | 187.7 | 42584 | 5110.08 | 7154.11 | 54848.19 | Exportação |
| 23 | ED | Estratégia & Dados | Alertas estratégicos | Fase 2 | Alta |  | 0 | Não | Sim | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 44.64 | 2.32 | 31 | 14.26 | 6.51 | 290.93 | 261.84 | 59404.68 | 7128.56 | 9979.99 | 76513.23 | Sinais |
| 24 | COL | Colaboradores / Meu Time | Meu time | MVP | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 259.78 | 57904.9 | 6948.59 | 9728.02 | 74581.51 | Mapa |
| 25 | COL | Colaboradores / Meu Time | Perfil do colaborador | MVP | Média | Perfil do colaborador | 0.45 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 92.18 | 20546.9 | 2465.63 | 3451.88 | 26464.41 | 360 |
| 26 | COL | Colaboradores / Meu Time | Objetivos e combinados | MVP | Média |  | 0 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 167.6 | 37358 | 4482.96 | 6276.14 | 48117.1 | Metas |
| 27 | COL | Colaboradores / Meu Time | Competências | MVP | Média |  | 0 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 167.6 | 37358 | 4482.96 | 6276.14 | 48117.1 | Skills |
| 28 | COL | Colaboradores / Meu Time | Feedbacks / check-ins | MVP | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 181.6 | 40338 | 4840.56 | 6776.78 | 51955.34 | Ciclo |
| 29 | COL | Colaboradores / Meu Time | Plano de desenvolvimento | MVP | Média | Plano de desenvolvimento | 0.45 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 92.18 | 20546.9 | 2465.63 | 3451.88 | 26464.41 | PDI |
| 30 | COL | Colaboradores / Meu Time | Mentorias | Fase 2 | Média |  | 0 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 150.84 | 33622.2 | 4034.66 | 5648.53 | 43305.39 | Matching |
| 31 | COL | Colaboradores / Meu Time | Aprendizagem / trilhas | Fase 2 | Média |  | 0 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 150.84 | 33622.2 | 4034.66 | 5648.53 | 43305.39 | Conteúdo |
| 32 | COL | Colaboradores / Meu Time | Talentos internos / mobilidade | Fase 2 | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 233.8 | 52114.41 | 6253.73 | 8755.22 | 67123.36 | Oportunidades |
| 33 | COL | Colaboradores / Meu Time | Sucessão | Fase 2 | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 233.8 | 52114.41 | 6253.73 | 8755.22 | 67123.36 | Prontidão |
| 34 | COL | Colaboradores / Meu Time | Saúde do time / alertas | MVP | Alta |  | 0 | Não | Sim | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 44.64 | 2.32 | 31 | 14.26 | 6.51 | 290.93 | 290.93 | 66005.2 | 7920.62 | 11088.87 | 85014.7 | Risco |
| 35 | CAN | Candidatos & Carreira | Perfil do candidato | MVP | Média | Perfil do candidato | 0.45 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 99.88 | 22185.9 | 2662.31 | 3727.23 | 28575.44 | Perfil |
| 36 | CAN | Candidatos & Carreira | Currículo / portfólio | MVP | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 181.6 | 40338 | 4840.56 | 6776.78 | 51955.34 | Evidências |
| 37 | CAN | Candidatos & Carreira | Competências e interesses | MVP | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 181.6 | 40338 | 4840.56 | 6776.78 | 51955.34 | Skills |
| 38 | CAN | Candidatos & Carreira | Oportunidades recomendadas | MVP | Alta |  | 0 | Sim | Não | Não | Sim | 1.55 | 34.1 | 93 | 100.44 | 15.35 | 27.9 | 38.75 | 12.4 | 6.51 | 328.44 | 328.44 | 75516 | 9061.92 | 12686.69 | 97264.61 | Feed |
| 39 | CAN | Candidatos & Carreira | Detalhe da oportunidade | MVP | Baixa |  | 0 | Não | Não | Não | Sim | 0.65 | 14.3 | 39 | 35.1 | 6.44 | 0.97 | 14.3 | 5.2 | 2.73 | 118.04 | 118.04 | 26219.7 | 3146.36 | 4404.91 | 33770.97 | Vaga/projeto |
| 40 | CAN | Candidatos & Carreira | Candidatura | MVP | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 181.6 | 40338 | 4840.56 | 6776.78 | 51955.34 | Aplicação |
| 41 | CAN | Candidatos & Carreira | Match candidato-vaga | MVP | Muito alta |  | 0 | Sim | Não | Não | Não | 2.2 | 48.4 | 105.6 | 142.56 | 21.78 | 39.6 | 50.6 | 17.6 | 9.24 | 435.38 | 435.38 | 100628 | 12075.36 | 16905.5 | 129608.86 | Aderência |
| 42 | CAN | Candidatos & Carreira | Minha jornada | MVP | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 181.6 | 40338 | 4840.56 | 6776.78 | 51955.34 | Progresso |
| 43 | CAN | Candidatos & Carreira | Capacitação recomendada | Fase 2 | Alta |  | 0 | Sim | Não | Não | Sim | 1.55 | 34.1 | 93 | 100.44 | 15.35 | 27.9 | 38.75 | 12.4 | 6.51 | 328.44 | 295.6 | 67964.4 | 8155.73 | 11418.02 | 87538.15 | Gap->trilha |
| 44 | CAN | Candidatos & Carreira | Mentoria / preparação | Fase 2 | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 163.44 | 36304.2 | 4356.5 | 6099.11 | 46759.81 | Carreira |
| 45 | CAN | Candidatos & Carreira | Feedbacks do processo | Fase 2 | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 163.44 | 36304.2 | 4356.5 | 6099.11 | 46759.81 | Retorno |
| 46 | CAN | Candidatos & Carreira | Painel empresa - talentos | MVP | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 259.78 | 57904.9 | 6948.59 | 9728.02 | 74581.51 | Shortlist |
| 47 | CAN | Candidatos & Carreira | Inteligência de vagas | Fase 2 | Muito alta |  | 0 | Sim | Não | Não | Não | 2.2 | 48.4 | 105.6 | 142.56 | 21.78 | 39.6 | 50.6 | 17.6 | 9.24 | 435.38 | 391.84 | 90565.2 | 10867.82 | 15214.95 | 116647.98 | Requisitos por evidência |
| 48 | FOR | Fornecedores & Negócios | Perfil do fornecedor | MVP | Média | Perfil do fornecedor | 0.45 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 92.18 | 20546.9 | 2465.63 | 3451.88 | 26464.41 | Capacidades |
| 49 | FOR | Fornecedores & Negócios | Documentos e compliance | MVP | Alta |  | 0 | Não | Não | Sim | Não | 1.55 | 34.1 | 74.4 | 96.25 | 15.35 | 2.32 | 31 | 12.4 | 16.74 | 282.56 | 282.56 | 64191.7 | 7703 | 10784.21 | 82678.91 | Certificações |
| 50 | FOR | Fornecedores & Negócios | Maturidade | MVP | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 259.78 | 57904.9 | 6948.59 | 9728.02 | 74581.51 | Diagnóstico |
| 51 | FOR | Fornecedores & Negócios | Plano de desenvolvimento | MVP | Alta | Plano de desenvolvimento | 0.45 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 142.88 | 31847.69 | 3821.72 | 5350.41 | 41019.83 | Gaps |
| 52 | FOR | Fornecedores & Negócios | Trilhas / apoio | Fase 2 | Média |  | 0 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 150.84 | 33622.2 | 4034.66 | 5648.53 | 43305.39 | Cursos/crédito |
| 53 | FOR | Fornecedores & Negócios | Oportunidades / demandas | MVP | Média |  | 0 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 167.6 | 37358 | 4482.96 | 6276.14 | 48117.1 | Compras |
| 54 | FOR | Fornecedores & Negócios | Detalhe da demanda | MVP | Baixa |  | 0 | Não | Não | Não | Não | 0.65 | 14.3 | 31.2 | 35.1 | 6.44 | 0.97 | 13 | 5.2 | 2.73 | 108.94 | 108.94 | 24282.7 | 2913.92 | 4079.49 | 31276.12 | Critérios |
| 55 | FOR | Fornecedores & Negócios | Match fornecedor-demanda | MVP | Muito alta |  | 0 | Sim | Não | Não | Não | 2.2 | 48.4 | 105.6 | 142.56 | 21.78 | 39.6 | 50.6 | 17.6 | 9.24 | 435.38 | 435.38 | 100628 | 12075.36 | 16905.5 | 129608.86 | Aderência |
| 56 | FOR | Fornecedores & Negócios | Painel empresa compradora | MVP | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 259.78 | 57904.9 | 6948.59 | 9728.02 | 74581.51 | Criar demanda |
| 57 | FOR | Fornecedores & Negócios | Reuniões / conexões | MVP | Média |  | 0 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 167.6 | 37358 | 4482.96 | 6276.14 | 48117.1 | Agenda |
| 58 | FOR | Fornecedores & Negócios | Propostas | Fase 2 | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 233.8 | 52114.41 | 6253.73 | 8755.22 | 67123.36 | Pipeline |
| 59 | FOR | Fornecedores & Negócios | Negociações | Fase 2 | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 233.8 | 52114.41 | 6253.73 | 8755.22 | 67123.36 | Pipeline |
| 60 | FOR | Fornecedores & Negócios | Contratos / negócios | Fase 2 | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 233.8 | 52114.41 | 6253.73 | 8755.22 | 67123.36 | Conversão |
| 61 | FOR | Fornecedores & Negócios | Indicadores do ecossistema | MVP | Alta | Indicadores do ecossistema | 0.45 | Não | Sim | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 44.64 | 2.32 | 31 | 14.26 | 6.51 | 290.93 | 160.01 | 36302.86 | 4356.34 | 6098.88 | 46758.08 | Impacto |
| 62 | ACA | Acadêmico / Universidades | Portal da universidade | MVP | Média |  | 0 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 167.6 | 37358 | 4482.96 | 6276.14 | 48117.1 | Institucional |
| 63 | ACA | Acadêmico / Universidades | Perfil acadêmico do aluno | MVP | Média | Perfil acadêmico do aluno | 0.45 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 99.88 | 22185.9 | 2662.31 | 3727.23 | 28575.44 | Formação |
| 64 | ACA | Acadêmico / Universidades | Perfil pesquisador/docente | Fase 2 | Média | Perfil pesquisador/docente | 0.45 | Não | Sim | Não | Não | 1 | 22 | 48 | 54 | 28.8 | 1.5 | 20 | 9.2 | 4.2 | 187.7 | 92.91 | 21079.08 | 2529.49 | 3541.29 | 27149.86 | Linhas |
| 65 | ACA | Acadêmico / Universidades | Oportunidades acadêmicas | MVP | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 181.6 | 40338 | 4840.56 | 6776.78 | 51955.34 | Bolsas/projetos |
| 66 | ACA | Acadêmico / Universidades | Projetos empresa-universidade | MVP | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 259.78 | 57904.9 | 6948.59 | 9728.02 | 74581.51 | Desafios |
| 67 | ACA | Acadêmico / Universidades | Match aluno-projeto | MVP | Alta |  | 0 | Sim | Não | Não | Não | 1.55 | 34.1 | 74.4 | 100.44 | 15.35 | 27.9 | 35.65 | 12.4 | 6.51 | 306.74 | 306.74 | 70897 | 8507.64 | 11910.7 | 91315.34 | Aderência |
| 68 | ACA | Acadêmico / Universidades | Match pesquisador-empresa | Fase 2 | Muito alta |  | 0 | Sim | Sim | Não | Não | 2.2 | 48.4 | 105.6 | 142.56 | 63.36 | 39.6 | 50.6 | 20.24 | 9.24 | 479.6 | 431.64 | 100912.68 | 12109.52 | 16953.33 | 129975.53 | Pesquisa aplicada |
| 69 | ACA | Acadêmico / Universidades | Estágios e carreira | MVP | Alta |  | 0 | Não | Não | Não | Sim | 1.55 | 34.1 | 93 | 83.7 | 15.35 | 2.32 | 34.1 | 12.4 | 6.51 | 281.48 | 281.48 | 62523.9 | 7502.87 | 10504.02 | 80530.78 | Integra CAN |
| 70 | ACA | Acadêmico / Universidades | Bolsas corporativas | MVP | Média |  | 0 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 167.6 | 37358 | 4482.96 | 6276.14 | 48117.1 | Empresa->aluno |
| 71 | ACA | Acadêmico / Universidades | Formação / trilhas | Fase 2 | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 163.44 | 36304.2 | 4356.5 | 6099.11 | 46759.81 | Desenvolvimento |
| 72 | ACA | Acadêmico / Universidades | Acompanhamento de projeto | Fase 2 | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 233.8 | 52114.41 | 6253.73 | 8755.22 | 67123.36 | Entregas |
| 73 | ACA | Acadêmico / Universidades | Indicadores universidade-mercado | MVP | Alta | Indicadores universidade-mercado | 0.45 | Não | Sim | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 44.64 | 2.32 | 31 | 14.26 | 6.51 | 290.93 | 160.01 | 36302.86 | 4356.34 | 6098.88 | 46758.08 | Impacto |
| 74 | EVT | Eventos | Visão geral do evento | MVP | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 259.78 | 57904.9 | 6948.59 | 9728.02 | 74581.51 | Dashboard |
| 75 | EVT | Eventos | Planejamento / metas | MVP | Média |  | 0 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 167.6 | 37358 | 4482.96 | 6276.14 | 48117.1 | KPIs |
| 76 | EVT | Eventos | Talentos / equipes | MVP | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 259.78 | 57904.9 | 6948.59 | 9728.02 | 74581.51 | CAN |
| 77 | EVT | Eventos | Fornecedores do evento | MVP | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 259.78 | 57904.9 | 6948.59 | 9728.02 | 74581.51 | FOR |
| 78 | EVT | Eventos | Demandas e contratações | MVP | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 259.78 | 57904.9 | 6948.59 | 9728.02 | 74581.51 | Compras |
| 79 | EVT | Eventos | Patrocínios / marcas | Fase 2 | Alta |  | 0 | Não | Não | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 15.35 | 2.32 | 31 | 12.4 | 6.51 | 259.78 | 233.8 | 52114.41 | 6253.73 | 8755.22 | 67123.36 | Retorno |
| 80 | EVT | Eventos | Artistas / criadores | Fase 2 | Média |  | 0 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 150.84 | 33622.2 | 4034.66 | 5648.53 | 43305.39 | Conexões |
| 81 | EVT | Eventos | Pesquisa de público / mercado | MVP | Alta |  | 0 | Não | Sim | Não | Sim | 1.55 | 34.1 | 93 | 83.7 | 44.64 | 2.32 | 34.1 | 14.26 | 6.51 | 312.64 | 312.64 | 70624.2 | 8474.9 | 11864.87 | 90963.97 | Insights |
| 82 | EVT | Eventos | Acessibilidade | MVP | Média |  | 0 | Não | Não | Não | Não | 1 | 22 | 48 | 54 | 9.9 | 1.5 | 20 | 8 | 4.2 | 167.6 | 167.6 | 37358 | 4482.96 | 6276.14 | 48117.1 | Plano |
| 83 | EVT | Eventos | Segurança / combate ao assédio | MVP | Alta |  | 0 | Não | Não | Sim | Sim | 1.55 | 34.1 | 93 | 96.25 | 15.35 | 2.32 | 34.1 | 12.4 | 16.74 | 304.26 | 304.26 | 68810.7 | 8257.28 | 11560.2 | 88628.18 | Protocolos |
| 84 | EVT | Eventos | Operação / checklists | Fase 2 | Alta |  | 0 | Não | Não | Não | Sim | 1.55 | 34.1 | 93 | 83.7 | 15.35 | 2.32 | 34.1 | 12.4 | 6.51 | 281.48 | 253.33 | 56271.51 | 6752.58 | 9453.61 | 72477.7 | Execução |
| 85 | EVT | Eventos | Indicadores em tempo real | Fase 2 | Alta | Indicadores em tempo real | 0.45 | Não | Sim | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 44.64 | 2.32 | 31 | 14.26 | 6.51 | 290.93 | 144.01 | 32672.57 | 3920.71 | 5488.99 | 42082.28 | Operação |
| 86 | EVT | Eventos | ROI / impacto financeiro | MVP | Alta |  | 0 | Não | Sim | Não | Não | 1.55 | 34.1 | 74.4 | 83.7 | 44.64 | 2.32 | 31 | 14.26 | 6.51 | 290.93 | 290.93 | 66005.2 | 7920.62 | 11088.87 | 85014.7 | Retorno |
| 87 | EVT | Eventos | Relatório pós-evento | MVP | Média |  | 0 | Não | Sim | Não | Não | 1 | 22 | 48 | 54 | 28.8 | 1.5 | 20 | 9.2 | 4.2 | 187.7 | 187.7 | 42584 | 5110.08 | 7154.11 | 54848.19 | Resultados |
| 88 | COM | Comunidades / Eu & Eu / Cultura | Meu perfil | MVP | Baixa |  | 0 | Não | Não | Não | Sim | 0.65 | 14.3 | 39 | 35.1 | 6.44 | 0.97 | 14.3 | 5.2 | 2.73 | 118.04 | 118.04 | 26219.7 | 3146.36 | 4404.91 | 33770.97 | Preferências |
| 89 | COM | Comunidades / Eu & Eu / Cultura | Objetivos | MVP | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 181.6 | 40338 | 4840.56 | 6776.78 | 51955.34 | Metas |
| 90 | COM | Comunidades / Eu & Eu / Cultura | Plano de ação | MVP | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 181.6 | 40338 | 4840.56 | 6776.78 | 51955.34 | Passos |
| 91 | COM | Comunidades / Eu & Eu / Cultura | Preparação / conteúdos | MVP | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 181.6 | 40338 | 4840.56 | 6776.78 | 51955.34 | Trilhas |
| 92 | COM | Comunidades / Eu & Eu / Cultura | Mentoria | Fase 2 | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 163.44 | 36304.2 | 4356.5 | 6099.11 | 46759.81 | Conexões |
| 93 | COM | Comunidades / Eu & Eu / Cultura | Saúde & cuidado | Fase 2 | Alta |  | 0 | Não | Sim | Não | Sim | 1.55 | 34.1 | 93 | 83.7 | 44.64 | 2.32 | 34.1 | 14.26 | 6.51 | 312.64 | 281.37 | 63561.78 | 7627.41 | 10678.38 | 81867.57 | Recursos |
| 94 | COM | Comunidades / Eu & Eu / Cultura | Eventos da comunidade | MVP | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 181.6 | 40338 | 4840.56 | 6776.78 | 51955.34 | Agenda |
| 95 | COM | Comunidades / Eu & Eu / Cultura | Conexões com empresas | MVP | Alta |  | 0 | Não | Não | Não | Sim | 1.55 | 34.1 | 93 | 83.7 | 15.35 | 2.32 | 34.1 | 12.4 | 6.51 | 281.48 | 281.48 | 62523.9 | 7502.87 | 10504.02 | 80530.78 | Oportunidades |
| 96 | COM | Comunidades / Eu & Eu / Cultura | Acadêmico | Fase 2 | Média |  | 0 | Não | Não | Não | Sim | 1 | 22 | 60 | 54 | 9.9 | 1.5 | 22 | 8 | 4.2 | 181.6 | 163.44 | 36304.2 | 4356.5 | 6099.11 | 46759.81 | Formação |

> **28 colunas:** `ID | Código | Frente | Tela | Fase | Complexidade | Componente compartilhado | Reuso % | Driver IA | Driver Dados | Driver Segurança | Driver Mobile | Mult | UX h | Front h | Back h | Dados h | IA h | QA h | DevOps h | Seg h | Horas brutas | Horas líquidas | Custo build | Gestão | Contingência | CAPEX tela | Observação` — tabela acima já contém todas. Para análise, importe o CSV em Bases/Sheets e filtre por `Fase`, `Complexidade` ou `Driver`.

---

## 10_CAPEX_por_Modulo

> **Dimensão Excel:** `A1:N15` · **Merged:** `A1:N2, A3:N3, A15:F15`

**Título:** CAPEX E CUSTO INCREMENTAL POR MÓDULO

> O custo incremental exclui o Core compartilhado. Isso permite precificar cada vertical sem cobrar novamente a infraestrutura-base já construída.

| Código | Módulo | Telas | MVP | Fase 2 | Horas líquidas | CAPEX total | CAPEX MVP | CAPEX Fase 2 | Core alocado | Custo incremental | % do CAPEX | Complexas | Leitura comercial |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CORE | Core / Plataforma | 12 | 10 | 2 | 549.31 | 160722.26 | 135167.77 | 25554.49 | 160722.26 | 160722.26 | 0.03 | 6 | Base compartilhada |
| ED | Estratégia & Dados | 11 | 9 | 2 | 3294.09 | 970690.59 | 764201.83 | 206488.76 | 22960.32 | 970690.59 | 0.17 | 9 | Preço do módulo = incremental + parcela de Core + implantação/integrações específicas do cliente |
| COL | Colaboradores / Meu Time | 11 | 7 | 4 | 2021.16 | 581572.08 | 360714.58 | 220857.51 | 22960.32 | 581572.08 | 0.1 | 4 | Preço do módulo = incremental + parcela de Core + implantação/integrações específicas do cliente |
| CAN | Candidatos & Carreira | 13 | 9 | 4 | 2982.25 | 869328.52 | 571622.77 | 297705.74 | 22960.32 | 869328.52 | 0.16 | 5 | Preço do módulo = incremental + parcela de Core + implantação/integrações específicas do cliente |
| FOR | Fornecedores & Negócios | 14 | 10 | 4 | 2928.96 | 847878.92 | 603203.44 | 244675.47 | 22960.32 | 847878.92 | 0.15 | 9 | Preço do módulo = incremental + parcela de Core + implantação/integrações específicas do cliente |
| ACA | Acadêmico / Universidades | 12 | 8 | 4 | 2546.49 | 740959.26 | 469950.71 | 271008.56 | 22960.32 | 740959.26 | 0.13 | 6 | Preço do módulo = incremental + parcela de Core + implantação/integrações específicas do cliente |
| EVT | Eventos | 14 | 10 | 4 | 3251.84 | 939004.03 | 714015.29 | 224988.73 | 22960.32 | 939004.03 | 0.17 | 10 | Preço do módulo = incremental + parcela de Core + implantação/integrações específicas do cliente |
| COM | Comunidades | 9 | 6 | 3 | 1734.17 | 497510.32 | 322123.13 | 175387.19 | 22960.32 | 497510.32 | 0.09 | 2 | Preço do módulo = incremental + parcela de Core + implantação/integrações específicas do cliente |
| CAPEX TOTAL DA PLATAFORMA (sem duplicação de telas compartilhadas) |  |  |  |  |  | 5607665.98 |  |  |  |  |  |  |  |

---

## 11_OPEX_Mensal

> **Dimensão Excel:** `A1:O15` · **Merged:** `A1:H2, A15:D15`

**Título:** OPEX MENSAL — PLATAFORMA E MÓDULOS

| Componente | Base mensal R$ | Core % | Vertical % | Core mensal | Pool verticais | Observação | Premissa |  | Código | Módulo | Peso de complexidade | OPEX incremental/mês | Core rateado/mês | OPEX fully-loaded/mês |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cloud / infraestrutura | 18000 | 0.75 | 0.25 | 13500 | 4500 | Ambientes, banco, storage, observabilidade; recalibrar por volume | Editável |  | ED | Estratégia & Dados | 0.18 | 13811.14 | 9214.29 | 23025.43 |
| Dados / pipelines / BI | 14000 | 0.55 | 0.45 | 7700 | 6300 | Orquestração, processamento e monitoramento | Editável |  | COL | Colaboradores / Meu Time | 0.11 | 8274.7 | 9214.29 | 17488.99 |
| IA / modelos / APIs | 12000 | 0.35 | 0.65 | 4200 | 7800 | Uso variável; depende de volume e arquitetura | Editável |  | CAN | Candidatos & Carreira | 0.16 | 12368.95 | 9214.29 | 21583.23 |
| DevOps / SRE | 22000 | 0.3 | 0.7 | 6600 | 15400 | Sustentação de plataforma | Editável |  | FOR | Fornecedores & Negócios | 0.16 | 12063.76 | 9214.29 | 21278.04 |
| Segurança / compliance | 14000 | 0.7 | 0.3 | 9800 | 4200 | Monitoramento, scans, LGPD e auditoria | Editável |  | ACA | Acadêmico / Universidades | 0.14 | 10542.49 | 9214.29 | 19756.77 |
| QA / releases | 16000 | 0.35 | 0.65 | 5600 | 10400 | Regressão e qualidade contínua | Editável |  | EVT | Eventos | 0.17 | 13360.3 | 9214.29 | 22574.59 |
| Produto / operação técnica | 28000 | 0.45 | 0.55 | 12600 | 15400 | Gestão de backlog, incidentes e evolução | Editável |  | COM | Comunidades | 0.09 | 7078.66 | 9214.29 | 16292.94 |
| Suporte / CS técnico | 18000 | 0.25 | 0.75 | 4500 | 13500 | Atendimento B2B e operação | Editável |  |  |  |  |  |  |  |
| OPEX BASE TOTAL / MÊS |  |  |  | 142000 |  |  |  |  |  |  |  |  |  |  |

> **Duas tabelas lado a lado no Excel:** à esquerda `Componente × Base/Core%/Vertical%` e à direita `Código × Peso × OPEX incremental/rateado/fully-loaded` — acima unificadas em uma única grade por limitação do markdown. O CSV preserva as duas grades com colunas vazias de separação.

---

## 12_Dashboard_Custos

> **Dimensão Excel:** `A1:J17` · **Merged:** `A1:J2, I6:J7, G6:H7, A3:J3, D5:E5, A6:B7, A5:B5, D6:E7, G5:H5, I5:J5`

**Título:** HUB — VISÃO EXECUTIVA DE CUSTO DA PLATAFORMA

> Modelo inicial para decisão: o valor final deve ser calibrado com arquitetura técnica escolhida, volume de usuários/dados, integrações por cliente e cotações de equipe/fornecedores.

| Código | Módulo | CAPEX incremental | OPEX fully-loaded/mês | Telas | Observação |
| --- | --- | --- | --- | --- | --- |
| ED | Estratégia & Dados | 970690.59 | 23025.43 | 11 | Core não é cobrado novamente; alocar implantação e integrações específicas à parte. |
| COL | Colaboradores / Meu Time | 581572.08 | 17488.99 | 11 | Core não é cobrado novamente; alocar implantação e integrações específicas à parte. |
| CAN | Candidatos & Carreira | 869328.52 | 21583.23 | 13 | Core não é cobrado novamente; alocar implantação e integrações específicas à parte. |
| FOR | Fornecedores & Negócios | 847878.92 | 21278.04 | 14 | Core não é cobrado novamente; alocar implantação e integrações específicas à parte. |
| ACA | Acadêmico / Universidades | 740959.26 | 19756.77 | 12 | Core não é cobrado novamente; alocar implantação e integrações específicas à parte. |
| EVT | Eventos | 939004.03 | 22574.59 | 14 | Core não é cobrado novamente; alocar implantação e integrações específicas à parte. |
| COM | Comunidades | 497510.32 | 16292.94 | 9 | Core não é cobrado novamente; alocar implantação e integrações específicas à parte. |

> **KPIs do topo:** CAPEX Total R$ 5.607.665,98 · CAPEX Core R$ 160.722,26 · OPEX Base R$ 142.000/mês · 96 telas. Tabela de módulos abaixo é a mesma de `10_CAPEX` + OPEX fully-loaded.

---

## Validação — Checksums

| Checagem | Esperado | Status |
|----------|----------|--------|
| CAPEX total (10_CAPEX G15) | R$ 5.607.665,98 | `=SOMA(G6:G13)` |
| OPEX base (11_OPEX E15) | R$ 142.000/mês | `=SOMA(E6:E13)` |
| Telas (02 + 09) | 96 | 69 MVP + 27 Fase 2 |
| CSVs gerados | 12 | `_data/*.csv` |

## Diferença para B+D

| Aspecto | B+D (Dashboard) | C Full-Fidelity (este arquivo) |
|---------|-----------------|--------------------------------|
| Leitura | Otimizada, charts, resumos | Literal, sem agregação |
| 09_Estimativa | Amostra 15 + CSV | 96 linhas × 28 cols completas em markdown |
| Tabelas largas | Evitadas / fatiadas | Preservadas (scroll horizontal) |
| Uso | Decisão, venda modular, Bases | Auditoria, reimporte, prova de origem |

## Fonte & Re-geração

- **Excel origem:** `Arquitetura e Custos Totais.xlsx` (63.555 bytes, 12 abas)
- **Gerador:** `openpyxl` (`data_only=True`) — valores calculados, não fórmulas
- **Re-gerar:** `python3 /tmp/build_fullfidelity.py` ou `python3 _scripts/extract.py --fidelity`
- **Versão B+D:** `[[../Arquitetura-Custos/README|README B+D]]`

