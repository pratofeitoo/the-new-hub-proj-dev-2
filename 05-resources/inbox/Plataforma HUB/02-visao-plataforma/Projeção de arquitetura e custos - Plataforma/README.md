# HUB · Projeção de Arquitetura e Custos da Plataforma

> Primeiro dimensionamento funcional e econômico para transformar o escopo da HUB em esforço de produto, tecnologia, dados, segurança e operação.

Este diretório contém:

- `Arquitetura e Custos Totais.xlsx` — modelo editável de arquitetura, inventário de telas, integrações, cenários de implantação, premissas de custo, estimativa de build, CAPEX por módulo, OPEX mensal e dashboard executivo.

Este README apresenta uma síntese da planilha. O workbook continua sendo a fonte editável para recalcular horas, custos, reutilização, módulos e cenários.

---

## 1. Finalidade do modelo

A planilha transforma um escopo funcional inicial em uma primeira ordem de grandeza para:

- produto e UX/UI;
- front-end e back-end;
- dados, BI e pipelines;
- IA e matching;
- QA e releases;
- DevOps e SRE;
- segurança, compliance e LGPD;
- infraestrutura, suporte e operação técnica.

O modelo não é orçamento de fornecedor nem orçamento definitivo de desenvolvimento. Ele serve para orientar decisões de escopo, modularidade, reutilização do CORE, priorização do MVP e futura precificação.

O custo real deve ser calibrado com:

- arquitetura técnica escolhida;
- volume de usuários, dados e transações;
- integrações específicas de cada cliente;
- requisitos de segurança e disponibilidade;
- composição e custo da equipe;
- cotações de fornecedores;
- grau de operação humana necessário.

---

## 2. Princípio arquitetural

A HUB deve ser modular e construída sobre um **CORE compartilhado**. As verticais podem ser contratadas e implantadas de forma independente, sem criar dependências artificiais entre elas.

O CORE concentra capacidades transversais:

- autenticação e SSO;
- cadastro, perfis e organizações;
- papéis e permissões;
- consentimentos e LGPD;
- integrações;
- notificações;
- analytics de uso;
- administração;
- auditoria e logs.

As verticais reutilizam essa base, mas podem operar separadamente quando fizer sentido comercial ou operacional.

### Regra de modularidade

**Estratégia & Dados** pode funcionar usando dados já existentes do cliente — RHIS, ERP, BI, pesquisas ou outras plataformas — sem exigir Candidatos, Fornecedores, Acadêmico, Eventos ou Comunidades.

Da mesma forma:

- Candidatos pode usar um ATS externo;
- Eventos pode começar com uma base própria;
- Acadêmico pode iniciar isolado para uma universidade;
- Fornecedores pode operar como marketplace B2B independente;
- Comunidades não é pré-requisito para uma implantação B2B.

A integração aumenta a inteligência do ecossistema, mas não deve ser uma barreira artificial para a venda ou o lançamento de cada módulo.

---

## 3. Módulos da plataforma

| Código | Módulo | Público principal | Modelo | Autônomo? |
|---|---|---|---|---|
| **CORE** | Core / Plataforma | Transversal | Base comum | Sim |
| **ED** | Estratégia & Dados | Empresas | Produto independente | Sim |
| **COL** | Colaboradores / Meu Time | Empresas | Independente ou conectado a ED | Sim |
| **CAN** | Candidatos & Carreira | Pessoas e empresas | Marketplace / jornada | Sim |
| **FOR** | Fornecedores & Negócios | Fornecedores e compradores | Marketplace B2B | Sim |
| **ACA** | Acadêmico / Universidades | Alunos, universidades e empresas | Educação–mercado | Sim |
| **EVT** | Eventos | Organizadores, público e empresas | Orquestrador transversal | Parcial |
| **COM** | Comunidades / Eu & Eu / Cultura | Pessoas | Jornada individual | Sim |

### Papel de cada módulo

- **CORE:** infraestrutura transversal de identidade, permissões, consentimento, integrações, notificações, administração e rastreabilidade.
- **ED:** conecta dados de pessoas e negócio a diagnóstico, prioridades, planos de ação e ROI.
- **COL:** trata desempenho, competências, desenvolvimento, liderança, saúde do time e talentos internos.
- **CAN:** conecta perfil, competências, capacitação, oportunidades, candidatura, matching e acompanhamento.
- **FOR:** estrutura maturidade, demandas, desenvolvimento, matching, negociação e conversão.
- **ACA:** conecta universidades, alunos, pesquisadores, projetos, bolsas, estágios, formação e empresas.
- **EVT:** coordena talentos, fornecedores, pesquisa, patrocínios, acessibilidade, segurança e impacto financeiro.
- **COM:** oferece perfil, objetivos, preparação, mentoria, cuidado, eventos e conexões com consentimento.

---

## 4. Escopo funcional

O inventário identifica **96 telas** distribuídas entre oito módulos:

| Módulo | Total de telas | MVP | Fase 2 | Telas de alta ou muito alta complexidade |
|---|---:|---:|---:|---:|
| CORE | 12 | 10 | 2 | 6 |
| ED | 11 | 9 | 2 | 9 |
| COL | 11 | 7 | 4 | 4 |
| CAN | 13 | 9 | 4 | 5 |
| FOR | 14 | 10 | 4 | 9 |
| ACA | 12 | 8 | 4 | 6 |
| EVT | 14 | 10 | 4 | 10 |
| COM | 9 | 6 | 3 | 2 |
| **Total** | **96** | **69** | **27** | — |

### Exemplos de escopo do MVP

- **CORE:** login/SSO, onboarding, perfis e organizações, permissões, consentimentos, integrações, notificações, analytics, administração, auditoria e logs.
- **ED:** visão executiva, conectores, indicadores, diagnóstico, análises, prioridades, planos de ação, ROI e relatórios.
- **COL:** meu time, perfil, objetivos, competências, feedbacks, PDI e saúde do time.
- **CAN:** perfil, currículo/portfólio, competências, oportunidades, candidatura, matching, jornada e painel empresarial.
- **FOR:** perfil, compliance, maturidade, plano, demandas, matching, painel comprador, reuniões e indicadores.
- **ACA:** portal universitário, perfil acadêmico, oportunidades, projetos, matching, estágios, bolsas e indicadores.
- **EVT:** visão, metas, talentos, fornecedores, demandas, pesquisa, acessibilidade, segurança, ROI e relatório.
- **COM:** perfil, objetivos, plano, preparação, eventos e conexões com empresas.

A Fase 2 adiciona recursos como mensagens, busca global, simulações, alertas estratégicos, mentorias, aprendizagem, mobilidade, sucessão, negociação, contratos, pesquisa aplicada, operação em tempo real e recursos de cuidado.

---

## 5. Integrações entre módulos

A matriz de integração utiliza a seguinte escala:

- **3:** pertence ao mesmo módulo;
- **2:** integração direta ou forte;
- **1:** integração opcional ou troca de dados;
- **0:** não precisa conversar diretamente.

Integrações importantes:

- **ED ↔ COL:** KPIs, competências, desempenho e liderança;
- **ED ↔ EVT:** pesquisa, receita, custos, fornecedores, equipes e ROI;
- **CAN ↔ ACA:** perfil, skills, formação, projetos e estágios;
- **CAN ↔ EVT:** talentos temporários e vagas;
- **FOR ↔ EVT:** fornecedores, demandas, documentos e contratos;
- **ACA ↔ Empresas/CAN:** projetos, bolsas, estágios e pesquisa;
- **COM ↔ CAN:** perfil, objetivos e preparação, sempre com consentimento;
- **COM ↔ EVT:** interesses, presença e pesquisa, sempre com consentimento.

Não há necessidade de integração direta entre Candidatos e Fornecedores. Eventuais conexões podem ocorrer por meio do CORE ou de Eventos.

---

## 6. Cenários de implantação modular

A planilha apresenta cenários que permitem começar pequeno e expandir conforme a demanda:

| Cenário | Módulos principais | Leitura |
|---|---|---|
| Estratégia & Dados standalone | CORE + ED | Usa dados existentes do cliente; não exige marketplaces. |
| Gestão de pessoas completa | CORE + ED + COL | Combina estratégia, desempenho e jornada interna. |
| Empregabilidade / Firjan | CORE + CAN | Formação, candidatos e vagas; Comunidades é opcional. |
| Fornecedores / Sebrae-GINGA | CORE + FOR | Matching B2B; ED mede impacto e Eventos pode ativar a operação. |
| Universidade / Mackenzie | CORE + ACA | Acadêmico pode começar isolado; CAN amplia carreira e estágio. |
| HUB Eventos | CORE + EVT | Orquestra talentos, fornecedores, pesquisa e ROI. |
| Ecossistema completo | Todos os módulos | Máxima inteligência de rede, com consentimento e governança. |

Essa arquitetura permite vender um módulo sem obrigar o cliente a comprar toda a plataforma desde o início.

---

## 7. Premissas de estimativa de build

### Complexidade das telas

| Complexidade | Multiplicador |
|---|---:|
| Baixa | 0,65 |
| Média | 1,00 |
| Alta | 1,55 |
| Muito alta | 2,20 |

### Premissas gerais

- contingência de desenvolvimento: **15%**;
- gestão e arquitetura sobre o build: **12%**;
- meses de construção: **9**;
- meses de operação por ano: **12**;
- fator Fase 2 versus MVP: **0,90**;
- reuso parcial de tela: **55%**.

### Rates por disciplina

| Disciplina | Horas-base por tela média | Rate de referência |
|---|---:|---:|
| UX/UI | 22 h | R$ 180/h |
| Front-end | 48 h | R$ 220/h |
| Back-end | 54 h | R$ 240/h |
| Dados/BI | 18 h | R$ 260/h |
| IA/Matching | 10 h | R$ 320/h |
| QA | 20 h | R$ 170/h |
| DevOps | 8 h | R$ 260/h |
| Segurança | 6 h | R$ 320/h |

A estimativa por tela aplica os multiplicadores de complexidade e drivers de IA, dados, segurança e mobile. Quando um componente é compartilhado, a coluna de reuso reduz o custo líquido para evitar duplicação.

---

## 8. CAPEX estimado por módulo

O custo incremental exclui a cobrança duplicada do CORE compartilhado. O CAPEX total estimado para a plataforma é de aproximadamente **R$ 5.607.665,98**.

| Módulo | CAPEX total estimado | CAPEX MVP | CAPEX Fase 2 | Telas |
|---|---:|---:|---:|---:|
| CORE | R$ 160.722,26 | R$ 135.167,77 | R$ 25.554,49 | 12 |
| ED | R$ 970.690,59 | R$ 764.201,83 | R$ 206.488,76 | 11 |
| COL | R$ 581.572,08 | R$ 360.714,58 | R$ 220.857,51 | 11 |
| CAN | R$ 869.328,52 | R$ 571.622,77 | R$ 297.705,74 | 13 |
| FOR | R$ 847.878,92 | R$ 603.203,44 | R$ 244.675,47 | 14 |
| ACA | R$ 740.959,26 | R$ 469.950,71 | R$ 271.008,56 | 12 |
| EVT | R$ 939.004,03 | R$ 714.015,29 | R$ 224.988,73 | 14 |
| COM | R$ 497.510,32 | R$ 322.123,13 | R$ 175.387,19 | 9 |
| **Total** | **R$ 5.607.665,98** | — | — | **96** |

### Leitura comercial

- ED, EVT, CAN e FOR concentram grande parte do esforço por causa de dados, matching, integrações, operação e regras complexas.
- O CORE é relativamente menor em valor isolado, mas é obrigatório e sustenta todas as implantações.
- O custo de um módulo deve combinar custo incremental, parcela alocada do CORE, implantação e integrações específicas do cliente.
- O CORE não deve ser cobrado novamente como se fosse reconstruído em cada vertical.

---

## 9. OPEX mensal estimado

O modelo indica um OPEX técnico-base de aproximadamente **R$ 142.000 por mês**, antes de eventuais custos específicos de cliente, maior volume, operação ampliada ou expansão de equipe.

| Componente | Base mensal |
|---|---:|
| Cloud / infraestrutura | R$ 18.000 |
| Dados / pipelines / BI | R$ 14.000 |
| IA / modelos / APIs | R$ 12.000 |
| DevOps / SRE | R$ 22.000 |
| Segurança / compliance | R$ 14.000 |
| QA / releases | R$ 16.000 |
| Produto / operação técnica | R$ 28.000 |
| Suporte / CS técnico | R$ 18.000 |
| **Base total** | **R$ 142.000/mês** |

A distribuição do OPEX entre CORE e verticais permite estimar um custo fully-loaded por módulo. No modelo, o CORE é rateado entre as verticais, enquanto cada módulo mantém seu custo incremental de complexidade e operação.

Valores recorrentes devem ser recalibrados com base em:

- ambientes e banco de dados;
- volume de armazenamento e processamento;
- observabilidade;
- uso de modelos e APIs de IA;
- quantidade de clientes e usuários;
- nível de suporte;
- SLA e requisitos de segurança;
- operação manual e atendimento B2B.

---

## 10. Drivers que orientam a próxima precificação

A planilha deixa preparada a conversão do escopo em preço por módulo e cliente. Os principais drivers são:

- número e complexidade das telas;
- integrações diretas;
- presença de IA ou matching;
- dados e BI;
- mensageria;
- mobile;
- compliance e segurança;
- operação humana;
- reuso de componentes compartilhados;
- implantação e configuração específica.

A precificação não deve ser baseada apenas em horas de desenvolvimento. Ela deve considerar custo de servir, valor gerado ou protegido, risco, implantação, suporte, governança, dados e capacidade de pagamento do segmento.

---

## 11. Riscos e pontos de validação

Antes de transformar esta projeção em orçamento ou compromisso de investimento, validar:

1. se as 96 telas representam realmente produtos necessários ou se algumas devem permanecer fora do MVP;
2. quais telas podem ser substituídas por fluxos operacionais manuais durante a validação;
3. quais componentes de matching e IA precisam existir no primeiro momento;
4. quanto do reuso parcial de 55% será confirmado na implementação real;
5. se nove meses de construção são compatíveis com a equipe disponível;
6. se o OPEX técnico de R$ 142 mil/mês inclui toda a operação necessária;
7. quais integrações são obrigatórias por cliente e quais podem ser substituídas por importação;
8. qual volume de usuários e dados altera significativamente cloud, suporte e processamento;
9. quais módulos têm comprador, urgência e orçamento comprovados;
10. quais requisitos jurídicos, de LGPD, auditoria e segurança precisam ser tratados antes do piloto.

A visão completa de arquitetura não deve ser confundida com a ordem de construção. A sequência deve ser orientada por evidência de demanda, valor e capacidade de entrega.

---

## 12. Relação com o MVP

A planilha inclui um inventário amplo para preservar a visão de longo prazo, mas a estratégia de lançamento deve manter foco.

No MVP, a prioridade deve ser:

- CORE mínimo de identidade, permissões, consentimento, dados e auditoria;
- uma vertical com comprador e problema claramente definidos;
- fluxos de diagnóstico, evidência, priorização, matching e acompanhamento;
- operação humana onde a automação ainda não foi validada;
- registro do esforço operacional e dos resultados;
- reaproveitamento comprovado antes de expandir módulos.

Não é necessário construir todo o ecossistema para validar a tese da HUB. O inventário funciona como mapa de evolução, enquanto o MVP deve ser o menor conjunto de capacidades capaz de provar valor e repetibilidade.

---

## 13. Conclusão

A projeção descreve uma plataforma modular com oito módulos, 96 telas mapeadas, 69 telas previstas para o MVP e 27 para uma Fase 2. O desenho central é um CORE compartilhado que evita duplicação de identidade, dados, matching, integrações, dashboards e governança.

O cenário atual estima aproximadamente:

- **R$ 5,61 milhões de CAPEX** para a plataforma completa;
- **R$ 160,7 mil de CAPEX do CORE**;
- **R$ 142 mil de OPEX técnico-base mensal**;
- módulos com implantação standalone ou combinada;
- redução de custo por reutilização de componentes compartilhados.

Esses números são instrumentos de planejamento. A decisão de construir, priorizar ou precificar cada componente deve ser atualizada à medida que a HUB obtenha evidências de comprador, uso, custo de entrega, escala e resultado.

> **A arquitetura completa mostra onde a HUB pode chegar; o MVP deve provar, com o menor custo e risco possível, quais partes realmente precisam existir.**
