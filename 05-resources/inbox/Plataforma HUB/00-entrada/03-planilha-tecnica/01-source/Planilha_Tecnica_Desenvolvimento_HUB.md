---
title: Planilha Técnica — Desenvolvimento HUB
source: Planilha_Tecnica_Desenvolvimento_HUB.xlsx
source_path: 05-resources/Processar/Plataforma HUB/00-entrada/03-planilha-tecnica/Planilha_Tecnica_Desenvolvimento_HUB.xlsx
sheets: 15
linhas_dados: 185
idioma: pt-BR
extraido_em: 2026-09-02
tags:
  - hub
  - especificacao-tecnica
  - planilha
  - mvp
  - pt-br
aliases:
  - Planilha Técnica HUB
  - Planilha Tecnica Desenvolvimento HUB
---

# Planilha Técnica — Desenvolvimento HUB

> **HUB — Planilha Técnica para Desenvolvimento** — versão completa e prática.
> Produto, dados, tecnologia, RH, financeiro e piloto Monks. Correlação não implica causalidade — toda recomendação exige explicação, revisão humana e auditoria.

> Fonte: `Planilha_Tecnica_Desenvolvimento_HUB.xlsx` · 15 abas · 185 linhas tabulares · extração fiel ao formato tabular original em pt-BR.

## Índice
- [00 — LEIA-ME · Orientação e Mapa das Abas](#00-leia-me)
- [01 — PAINEL · Entrega e Decisões](#01-painel)
- [02 — MÓDULOS · Arquitetura Funcional](#02-modulos)
- [03 — PERFIS · Personas e Permissões](#03-perfis)
- [04 — FONTES DE DADOS · Inventário de Sistemas](#04-fontes-dados)
- [05 — DICIONÁRIO · Campos Canônicos](#05-dicionario)
- [06 — KPIs · Catálogo Governado](#06-kpis)
- [07 — RELAÇÕES · Hipóteses e Validação](#07-relacoes)
- [08 — INTEGRAÇÕES · Contratos e SLAs](#08-integracoes)
- [09 — REGRAS E ALERTAS · Motor de Regras](#09-regras-alertas)
- [10 — TELAS E OUTPUTS · Interfaces e APIs](#10-telas-outputs)
- [11 — SEGURANÇA E LGPD · Governança](#11-seguranca-lgpd)
- [12 — BACKLOG · Requisitos de Desenvolvimento](#12-backlog)
- [13 — PILOTO MONKS · Escopo de Validação](#13-piloto-monks)
- [14 — ROI HUB · Custos, Benefícios e Retorno](#14-roi-hub)

---

> [!tip] Como ler as tabelas
> Tabelas com mais de 10 colunas possuem rolagem horizontal no Obsidian. No celular, arraste lateralmente. Todas as colunas, cabeçalhos e valores foram preservados integralmente do `.xlsx` original — sem tradução, sem resumo.

## 00 — LEIA-ME · Orientação e Mapa das Abas

> Versão completa e prática | Produto, dados, tecnologia, RH, financeiro e piloto Monks


---

### Metadados do Documento

| Campo | Conteúdo |
| --- | --- |
| Objetivo | Traduzir a inteligência HUB em requisitos rastreáveis para arquitetura, desenvolvimento e validação. |
| Escopo | Motor de dados + opção de plataforma completa de performance, pessoas, negócio, fornecedores, acadêmico e comunidades. |
| Uso | Refinar com o desenvolvedor; preservar IDs; atualizar status, responsáveis, sprints e decisões. |
| Prioridade | Monks: performance×receita; alocação×margem; liderança×performance; qualidade KPI; ROI HUB. |
| Valores | Metas e números ilustrativos devem ser validados com o cliente. |
| Regra central | Correlação não implica causalidade. Recomendação relevante exige explicação, revisão humana e auditoria. |

### Mapa das Abas

| Aba | Propósito |
| --- | --- |
| 00_LEIA-ME | Orientação |
| 01_PAINEL | Resumo automático |
| 02_MODULOS | Arquitetura funcional |
| 03_PERFIS | Usuários e acessos |
| 04_FONTES_DADOS | Sistemas |
| 05_DICIONARIO | Contrato de dados |
| 06_KPIS | Definições |
| 07_RELACOES | Hipóteses |
| 08_INTEGRACOES | APIs e cargas |
| 09_REGRAS_ALERTAS | Motor de regras |
| 10_TELAS_OUTPUTS | Interfaces |
| 11_SEGURANCA_LGPD | Governança |
| 12_BACKLOG | Desenvolvimento |
| 13_PILOTO_MONKS | Validação |
| 14_ROI_HUB | Valor |

---

## 01 — PAINEL · Entrega e Decisões

> Resumo automático do backlog e da cobertura da especificação


---

### Indicadores de Entrega

| Indicador | Valor |
| --- | --- |
| Itens backlog | 20 |
| Concluídos | 0 |
| Críticos | 13 |
| % no MVP | 85,0% |

### Cobertura da Especificação

| Componente | Quantidade | Situação | Próxima Decisão |
| --- | --- | --- | --- |
| Módulos | 8 | Estruturado | Validar MVP |
| Perfis | 12 | Estruturado | Validar acessos |
| Fontes | 12 | Inicial | Confirmar Monks |
| Campos | 47 | Inicial | Dicionário semântico único (P0-F0 + P1-MVP1) |
| KPIs | 16 | Inicial | Aprovar fórmulas |
| Relações | 9 | Hipóteses | Testar piloto |

### Decisões Antes do Desenvolvimento

- 1. Confirmar fontes/amostras Monks.
- 2. Aprovar alocação, receita, custo, margem e qualidade da meta.
- 3. Escolher motor de dados, plataforma de performance ou híbrido.
- 4. Validar papéis, finalidade, retenção e grupos mínimos.
- 5. Selecionar 3–5 alertas, responsáveis e SLAs.
- 6. Definir evidência para atribuir ROI ao HUB.

## 02 — MÓDULOS · Arquitetura Funcional

> Arquitetura funcional e alternativas de implantação.

> [!tip] Tabela larga — role horizontalmente para ver todas as colunas.

| ID | Domínio | Módulo | Objetivo | Usuários | Inputs | Outputs | Motor de dados | Plataforma completa | Fase | Prioridade |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MOD-01 | Produto | HUB Core | Unificar dados, relações, alertas, previsões e recomendações. | Admin; Dados; RH; Liderança | Cadastros, eventos, KPIs, finanças | Data graph, scores, alertas, simulações | Obrigatório | Obrigatório | MVP | Crítica |
| MOD-02 | Produto | Performance | Conectar metas individuais/equipe aos financeiros. | Colaborador; Gestor; RH; Diretoria | Metas, avaliações, projetos, receita, custos | Scorecards, desvios, planos, impacto financeiro | Integra Qulture Rocks/Workday | Metas, ciclos e feedback próprios | MVP | Crítica |
| MOD-03 | Produto | Pessoas e Talentos | Skills, carreira, mobilidade, contratação e retenção. | RH; Gestor; Colaborador; Candidato | Perfil, skills, seleção, engajamento, diversidade | Matching, sucessão, risco, gaps | Integra ATS/HCM/LMS | Portal e fluxos próprios | MVP+1 | Alta |
| MOD-04 | Produto | Clientes e Receita | Relacionar times e entregas à experiência e receita. | Comercial; CS; Operações | CRM, NPS, contratos, receita, margem, times | Churn, expansão, rentabilidade | Integra CRM/ERP | Workspace opcional | MVP | Crítica |
| MOD-05 | Produto | Fornecedores e Compras | Conectar oferta, custo, qualidade, risco e impacto. | Compras; ESG; Fornecedor | Cadastro, preço, SLA, risco, pagamentos | Matching, savings, desempenho | Integra ERP/e-procurement | Marketplace próprio | MVP+1 | Alta |
| MOD-06 | Produto | Acadêmico | Conectar formação, skills futuras e oportunidades. | Aluno; Universidade; Empresa | Cursos, skills, projetos, vagas, bolsas | Matching, trilhas, skills emergentes | Integra sistemas acadêmicos | Portal acadêmico | Fase 2 | Média |
| MOD-07 | Produto | Comunidades e Eventos | Converter participação e conteúdo em oportunidades. | Pessoa; Empresa; Comunidade | Eventos, presença, conexões, oportunidades | Conversão, negócios, empregabilidade | Integra plataformas | Comunidade e agenda próprias | Fase 2 | Média |
| MOD-08 | Produto | HUB Impact | Medir ROI e qualidade da atuação da pessoa gestora. | Gestor HUB; Sponsor; Financeiro | Uso, alertas, decisões, custos, benefícios | Adoção, decisões, ROI, payback | Obrigatório | Obrigatório | MVP | Crítica |

### Correspondência 12 → 8

| Especificação mestra | Técnica |
|---|---|
| Início executivo | MOD-01 · HUB Core |
| Estratégia e resultados | MOD-01 · HUB Core |
| Performance | MOD-02 · Performance |
| Pessoas e talentos | MOD-03 · Pessoas e Talentos |
| Clientes e receita | MOD-04 · Clientes e Receita |
| Fornecedores e compras | MOD-05 · Fornecedores e Compras |
| Operações e projetos | MOD-02 · Performance (subdomínio operacional) |
| Academia | MOD-06 · Acadêmico |
| Comunidades e eventos | MOD-07 · Comunidades e Eventos |
| Inteligência | MOD-01 · HUB Core |
| Planos de ação | MOD-02 · Performance |
| Governança | MOD-01 · HUB Core + MOD-08 · HUB Impact |

---

## 03 — PERFIS · Personas e Permissões

> Personas, objetivos, permissões e restrições.

| ID | Domínio | Perfil | Objetivo | Fornece | Visualiza | Ações | Restrições | Fase |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PER-01 | Acesso | Colaborador | Acompanhar metas, desenvolvimento e oportunidades. | Autoavaliação, check-ins, skills | Próprios dados e recomendações | Atualizar; comentar; contestar | Sem dados individuais de terceiros | MVP |
| PER-02 | Acesso | Gestor | Gerir time e agir rapidamente. | Avaliações, feedbacks, decisões | Time, metas, capacidade, riscos | Criar meta; decidir; aprovar ação | Acesso apenas à hierarquia | MVP |
| PER-03 | Acesso | RH/People Analytics | Governar pessoas, performance e equidade. | Políticas, ciclos, benchmarks | Organização e grupos autorizados | Configurar; analisar; auditar | Finalidade e grupo mínimo | MVP |
| PER-04 | Acesso | Executivo | Conduzir o negócio com sinais de pessoas. | Prioridades e decisões | KPIs, riscos, cenários e ROI | Aprovar ações/cenários | Preferência por agregados | MVP |
| PER-05 | Acesso | Financeiro | Validar relações e benefícios financeiros. | Receita, custos, margem, orçamento | Impactos e premissas | Validar fórmula/benefício | Sem feedback individual | MVP |
| PER-06 | Acesso | Gestor HUB | Administrar qualidade, adoção e valor. | Configurações, decisões e ações | Dados, uso, alertas, decisões, ROI | Configurar; cobrar; encaminhar | Tudo auditável; decisão humana | MVP |
| PER-07 | Acesso | Candidato | Encontrar vaga compatível. | Perfil, skills, experiência | Vagas, matching e status | Candidatar; atualizar; contestar | Sensíveis protegidos | MVP+1 |
| PER-08 | Acesso | Fornecedor | Apresentar oferta e acessar demandas. | Produtos, preços, capacidade | Demandas e matching | Propor; atualizar catálogo | Segregação entre concorrentes | MVP+1 |
| PER-09 | Acesso | Comprador | Comparar ofertas e reduzir custo com qualidade. | Demanda, critérios e decisão | Ofertas, TCO, risco, savings | Publicar; comparar; selecionar | Critérios transparentes | MVP+1 |
| PER-10 | Acesso | Cliente/CS | Acompanhar valor, entrega e risco da conta. | NPS, feedback, resultados | Entregas e planos autorizados | Avaliar; validar ação | Isolamento por conta | MVP+1 |
| PER-11 | Acesso | Aluno | Construir carreira e acessar oportunidades. | Formação, skills, projetos | Trilhas, bolsas, eventos, vagas | Participar; candidatar | Consentimento reforçado | Fase 2 |
| PER-12 | Acesso | Universidade | Alinhar formação às demandas. | Cursos, projetos, indicadores | Gaps e empregabilidade | Publicar; analisar; conectar | Dados estudantis agregados | Fase 2 |
| PER-13 | Acesso | Parceiro/Especialista/Mentor | Conectar expertise a oportunidades e desenvolvimento. | Mentorias, trilhas, avaliações de especialista | Oportunidades compatíveis e feedback agregado | Mentorar; avaliar; propor trilha | Sem dados individuais de terceiros; consentimento | MVP+1 |

---

## 04 — FONTES DE DADOS · Inventário de Sistemas

> Inventário inicial de sistemas e conjuntos de dados.

> [!tip] Tabela larga — role horizontalmente para ver todas as colunas.

| ID | Domínio | Fonte | Dados | Campos-chave | Chaves de conexão | Cadência | Método | Dono | Sensibilidade | Qualidade | Retenção | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SRC-01 | Pessoas | Workday/HCM | Cadastro e hierarquia | ID Workday; nome; nome social; e-mail; telefone; localização; idioma; disponibilidade; cargo; área; level; admissão; gestor; HRBP; diretoria; VP | ID Workday; e-mail; centro de custo | Diária | API/SFTP | RHIS | Pessoal | ≥99% IDs válidos | Política | Disponível piloto |
| SRC-02 | Performance | Qulture Rocks/Workday | Metas, avaliações, 9-box, PIP e check-ins | ID avaliação; meta; peso; progresso; auto/gestor | Pessoa; ciclo; gestor | Evento/diária | API/CSV | RH Performance | Confidencial | ≥95% ciclos completos | 3 ciclos | Parcial |
| SRC-03 | Engajamento | Qualtrics/CultureAmp | Clima, liderança, eNPS e segurança psicológica | ID anonimizado; área; período | Área; gestor; grupo | Mensal/trimestral | API/CSV | People Analytics | Sensível agregado | Grupo mínimo | 24 meses | A confirmar |
| SRC-04 | Saúde/Risco | NR1/Canal interno | Carga, estresse, assédio e afastamento agregado | Registro; área; período | Área; centro de custo | Mensal | Arquivo seguro | Saúde/RH | Sensível especial | Sem identificação indevida | Legal | A confirmar |
| SRC-05 | Financeiro | ERP/FP&A | Receita, custo, margem, orçamento e realizado | Lançamento; projeto; cliente; período | Cliente; projeto; contrato; centro de custo | Mensal | API/DW | Financeiro | Financeiro | Conciliado ao fechamento | 7 anos | Prioridade piloto |
| SRC-06 | Alocação | PSA/Timesheet | Horas disponíveis, totais e faturáveis | Apontamento; pessoa; projeto; taxa | Pessoa; projeto; cliente; centro de custo; período | Diária/semanal | API/CSV | Operações | Confidencial | ≥98% conciliado | 36 meses | Prioridade piloto |
| SRC-07 | Clientes | CRM | Conta, contrato, pipeline, renovação e churn | Account ID; contract ID; owner; stakeholder_ids | Cliente; contrato; projeto; centro de custo | Diária | API | Comercial/CS | Comercial | IDs únicos | 5 anos | Prioridade piloto |
| SRC-08 | Folha | Payroll | Salário, encargos, benefícios e custo total | Pessoa; período | ID Workday; CC | Mensal | SFTP seguro | Folha/Financeiro | Altamente confidencial | Conciliado à folha | Legal | Prioridade piloto |
| SRC-09 | Recrutamento | Gupy/InHire/Vagas | Vagas, candidatos, etapas e contratação | Candidatura; vaga; origem | E-mail; vaga; requisitante | Diária | API/CSV | Talent Acquisition | Pessoal/sensível | Deduplicação ≥98% | 24 meses | Fase seguinte |
| SRC-10 | Fornecedores | ERP/planilhas/e-mail | Cadastro, cotação, SLA, risco e pagamento | CNPJ; proposta; categoria | Fornecedor; contrato; comprador | Semanal/mensal | API/CSV/Form | Compras | Comercial | CNPJ válido | 5 anos | Fase seguinte |
| SRC-11 | Aprendizagem | LMS | Cursos, skills, conclusão, avaliação e custo | Matrícula; curso; skill | Pessoa; skill; área | Diária | API | T&D | Pessoal | ≥95% conclusões | 36 meses | Fase seguinte |
| SRC-12 | HUB | Telemetria/Audit log | Uso, alertas, recomendações, decisões e ações; envelope canônico FLD-042→045 obrigatório. | Evento; usuário; objeto; timestamp | Organização; pessoa; alerta; decisão | Tempo real | Evento interno | Produto HUB | Técnico/confidencial | ≥99,5% eventos essenciais | 24 meses | Obrigatório |

---

## 05 — DICIONÁRIO · Campos Canônicos

> Campos canônicos para contratos de dados e APIs.

> [!tip] Tabela larga — role horizontalmente para ver todas as colunas.

| ID | Entidade | Campo | Descrição | Tipo | Obrigatório | Exemplo | Fonte | Transformação | Relacionamento | Sensibilidade | Visibilidade | Validação | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FLD-001 | Pessoa | person_id | ID interno pseudonimizado. | UUID | Sim | p_83f… | HUB | Gerar UUID/hash | PK Pessoa | Pessoal | Sistema | Único e não nulo | Evento |
| FLD-002 | Pessoa | workday_id | ID da pessoa no HCM; alias namespaced, nunca PK/FK direta. | Texto | Piloto | WD12345 | Workday | Trim/uppercase | alias (source_system=Workday, source_id) → canonical_id | Confidencial | RH/Admin | Único por empresa/origem | Diária |
| FLD-003 | Pessoa | manager_id | Gestor vigente. | UUID | Sim | p_102… | Workday | Resolver person_id | Pessoa→Pessoa | Confidencial | Hierarquia | Gestor ativo | Diária |
| FLD-004 | Pessoa | job_title | Cargo atual normalizado. | Texto | Sim | Analista Sênior | Workday | Taxonomia de cargos | Pessoa→Cargo | Pessoal | Autorizados | Taxonomia válida | Diária |
| FLD-005 | Demografia | gender | Gênero autodeclarado. | Categoria | Não | Mulher | HCM/Censo | Taxonomia + não informado | Pessoa→Demografia | Sensível | Somente agregado | Finalidade/consentimento | Atualização |
| FLD-006 | Demografia | race_ethnicity | Raça/cor autodeclarada. | Categoria | Não | Negra | HCM/Censo | Taxonomia local | Pessoa→Demografia | Sensível | Somente agregado | Finalidade/consentimento | Atualização |
| FLD-007 | Demografia | disability_status | Autodeclaração PcD. | Categoria | Não | Sim | HCM/Censo | Normalização | Pessoa→Demografia | Sensível | Somente agregado | Finalidade/consentimento | Atualização |
| FLD-008 | Performance | review_score_manager | Nota do gestor normalizada. | Decimal | Sim | 3.7 | Performance | Escala 0–5 | Pessoa+Ciclo | Confidencial | Pessoa/Gestor/RH | 0 a 5 | Ciclo |
| FLD-009 | Performance | review_score_self | Nota da autoavaliação. | Decimal | Não | 4.1 | Performance | Escala 0–5 | Pessoa+Ciclo | Confidencial | Pessoa/Gestor/RH | 0 a 5 | Ciclo |
| FLD-010 | Performance | nine_box_position | Posição 9-box. | Categoria | Não | Alto/Alto | Performance | Taxonomia 3x3 | Pessoa+Ciclo | Confidencial | Gestor/RH | Valor permitido | Ciclo |
| FLD-011 | Meta | goal_id | ID persistente da meta. | UUID | Sim | g_123… | Performance/HUB | Preservar origem | Meta→Pessoa/Equipe | Confidencial | Autorizados | Único | Evento |
| FLD-012 | Meta | goal_progress | Progresso atual. | Percentual | Sim | 71% | Performance/HUB | Dividir por 100 se necessário | Meta+Período | Confidencial | Autorizados | 0%–200% justificado | Semanal |
| FLD-013 | Meta | financial_kpi_id | KPI financeiro ligado à meta. | ID | Sim HUB | KPI-FIN-01 | HUB | Referenciar KPI aprovado | Meta→KPI | Confidencial | Autorizados | KPI ativo | Criação/revisão |
| FLD-014 | Alocação | available_hours | Horas úteis disponíveis. | Decimal | Sim | 160 | PSA | Calendário-ausências | Pessoa+Período | Confidencial | Gestor/Operações | 0 ao calendário | Semanal |
| FLD-015 | Alocação | billable_hours | Horas faturáveis aprovadas. | Decimal | Sim | 128 | Timesheet | Somar aprovadas | Pessoa+Projeto+Período | Confidencial | Autorizados | ≤ horas totais | Semanal |
| FLD-016 | Financeiro | revenue | Receita reconhecida. | Moeda | Sim | 250000 | ERP | Moeda base/regra contábil | Cliente+Projeto+Período | Financeiro | Financeiro/Diretoria | Conciliar fechamento | Mensal |
| FLD-017 | Financeiro | direct_cost | Custo diretamente atribuível. | Moeda | Sim | 175000 | ERP/Folha | Moeda base | Projeto+Período | Financeiro | Financeiro/Diretoria | Conciliar razão | Mensal |
| FLD-018 | Financeiro | salary_total_cost | Salário+encargos+benefícios. | Moeda | Piloto | 18500 | Folha | Somar componentes | Pessoa+Período | Altamente confidencial | Restrito | Conciliar folha | Mensal |
| FLD-019 | Cliente | client_id | ID canônico da conta. | UUID | Sim | c_002… | CRM/HUB | Resolver duplicidades | Cliente→Contrato/Projeto | Comercial | Autorizados | Único/ativo | Diária |
| FLD-020 | Fornecedor | supplier_id | ID canônico do fornecedor. | UUID | Fase | s_010… | ERP/HUB | CNPJ normalizado+UUID | Fornecedor→Contrato | Comercial | Compras/Fornecedor | CNPJ válido | Semanal |
| FLD-021 | Decisão | decision_id | ID da decisão ligada ao alerta. | UUID | Sim | d_041… | HUB | Gerar UUID | Alerta→Decisão→Ação | Confidencial | Autorizados/Auditoria | Motivo e decisor | Evento |
| FLD-022 | Decisão | estimated_value | Valor gerado estimado. | Moeda | Não | 120000 | HUB | Premissas versionadas | Decisão→ROI | Financeiro | Sponsor/Financeiro | Premissas completas | Decisão |
| FLD-023 | Decisão | realized_value | Valor gerado validado. | Moeda | Não | 85000 | ERP/HUB | Validação Financeiro | Decisão→ROI | Financeiro | Sponsor/Financeiro | Evidência obrigatória | Mensal |
| FLD-024 | Consentimento | consent_id | ID do consentimento por titular/finalidade. | UUID | Sim | cons_001 | HUB/CMP | Gerar UUID | FK → N24 Consentimento | Sensível | DPO/Auditoria | Único por titular/finalidade/versão | Evento |
| FLD-025 | Consentimento | purpose | Finalidade específica autorizada. | Enum | Sim | performance | HUB/CMP | Taxonomia LGPD | Consent.purpose | Sensível | DPO/Auditoria | Finalidade permitida | Evento |
| FLD-026 | Consentimento | legal_basis | Base legal LGPD. | Enum | Sim | consentimento | HUB/CMP | Taxonomia LGPD | Consent.legal_basis | Sensível | DPO/Auditoria | Base legal válida | Evento |
| FLD-027 | Pessoa | nome | Nome completo canônico. | Texto | Sim | Ana Paula Souza | Workday/HCM | Normalizar capitalização | Pessoa→Identidade | Pessoal | Sistema/RH | Único por pessoa | Evento |
| FLD-028 | Pessoa | nome_social | Nome social preferido; exige N24. | Texto | Não | Ana Paula | Workday/HCM | Normalizar apelido/nome social | Pessoa→Identidade | Sensível | RH/Admin | N24 válido quando lido | Evento |
| FLD-029 | Pessoa | email | E-mail principal. | Texto | Sim | ana@empresa.com | Workday/HCM | Trim/lowercase | Pessoa→Contato | Pessoal | Sistema | Formato válido | Diária |
| FLD-030 | Pessoa | telefone | Telefone principal. | Texto | Não | +55 21 99999-9999 | Workday/HCM | Normalizar E.164 | Pessoa→Contato | Pessoal | Sistema | Formato válido | Diária |
| FLD-031 | Pessoa | localizacao | Localização base. | Texto | Não | Rio de Janeiro/RJ | Workday/HCM | Normalizar cidade/UF/país | Pessoa→Localização | Pessoal | Sistema/RH | Taxonomia válida | Diária |
| FLD-032 | Pessoa | idioma | Idioma preferencial. | Enum | Não | pt-BR | Workday/HCM | Normalizar idioma | Pessoa→Preferência | Pessoal | Sistema/RH | Lista permitida | Diária |
| FLD-033 | Pessoa | disponibilidade | Disponibilidade/capacidade declarada. | Enum | Não | Integral | Workday/HCM/PSA | Normalizar regras de jornada | Pessoa→Alocação | Confidencial | Gestor/Operações | Compatível com jornada | Semanal |
| FLD-034 | Pessoa | nivel | Nível/cargo normalizado. | Enum | Sim | Sênior | Workday/HCM | Taxonomia de senioridade | Pessoa→Estrutura | Pessoal | Autorizados | Taxonomia válida | Diária |
| FLD-035 | Pessoa | area | Área organizacional. | Texto | Sim | Performance | Workday/HCM | Normalizar árvore organizacional | Pessoa→Estrutura | Pessoal | Autorizados | Área válida | Diária |
| FLD-036 | Contrato | centro_custo | Centro de custo do contrato. | Texto | Sim | CC-102 | Workday/ERP | Normalizar centro de custo | Contract.centro_custo → N16 | Confidencial | RH/Financeiro | Centro de custo válido | Mensal |
| FLD-037 | Pessoa | admissao | Data de admissão. | Data | Sim | 2024-01-15 | Workday/HCM | Normalizar ISO-8601 | Pessoa→Vínculo | Pessoal | Sistema/RH | Data válida | Diária |
| FLD-038 | Contrato | contract_id | ID canônico do contrato. | UUID | Sim | ct_221 | CRM/ERP | Gerar/resolver canonical_id | PK N16 Contract | Comercial | Autorizados | Único/ativo | Diária |
| FLD-039 | Programa | program_id | ID canônico do programa/projeto. | UUID | Sim | prg_104 | HUB/ERP | Gerar/resolver canonical_id | PK N15 Program | Comercial | Autorizados | Único/ativo | Diária |
| FLD-040 | Tenant | tenant_id | Fronteira de segurança do cliente. | UUID | Sim | ten_001 | HUB/IAM | Gerar/resolver tenant | FK em N01/N02/N16/N15 | Restrito | Sistema/Admin | Isolamento validado | Evento |
| FLD-041 | Temporal | valid_from / valid_to | Vigência inclusiva/exclusiva do registro. | Data | Sim | 2026-01-01 / — | HUB | ISO-8601 | Temporalidade BP-003 | Confidencial | Autorizados | valid_from < valid_to | Evento |
| FLD-042 | Evento | event_id | Identificador único do evento canônico. | UUID | Sim | evt_001 | HUB/SRC-12 | Gerar UUID v4 | PK N10 Event | Técnico | Dados/Auditoria | Único, nunca reutilizado | Tempo real |
| FLD-043 | Evento | event_type | Tipo de evento no domínio. | Texto | Sim | match.generated | HUB/SRC-12 | Validar domain.verb | Event.event_type | Técnico | Dados/Auditoria | Catálogo vigente | Tempo real |
| FLD-044 | Evento | schema_version | Versão semver do schema. | Texto | Sim | 1.0 | HUB/SRC-12 | Validar compatibilidade | Event.schema_version | Técnico | Dados/Auditoria | Versão registrada | Tempo real |
| FLD-045 | Evento | occurred_at | Instante UTC em que ocorreu. | Timestamp | Sim | 2026-09-02T12:00:00Z | HUB/SRC-12 | UTC ISO-8601 | Event.occurred_at | Técnico | Dados/Auditoria | UTC e imutável | Tempo real |
| FLD-046 | Recomendação | recommendation_id | Identificador canônico de recomendação. | UUID | P1-MVP1 | rec_001 | HUB | Gerar UUID | PK N12 Recommendation | Confidencial | Autorizados/Auditoria | Proveniência/versão | Evento |
| FLD-047 | Match | match_id | Identificador canônico do match. | UUID | P1-MVP1 | mat_001 | HUB/ATS | Gerar UUID | PK N13 Match | Confidencial | Autorizados/Auditoria | Score/justificativa/consent | Evento |

> Observação: `FLD-019` já cobre `cliente_id`; este bloco completa os demais campos canônicos ausentes do núcleo.

---

## 06 — KPIs · Catálogo Governado

> Catálogo governado; metas ilustrativas precisam de validação.

> [!tip] Tabela larga — role horizontalmente para ver todas as colunas.

| ID | Domínio | KPI | Pergunta | Fórmula funcional | Unidade | Granularidade | Cadência | Fonte | Meta | Alerta | Direção | Dono | Ligação financeira | Governança |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KPI-PERF-01 | Performance | Atingimento de metas | Quanto das metas ponderadas foi entregue? | Σ(progresso×peso)/Σ(peso) | % | Pessoa/Equipe/Área | Semanal | Performance/HUB | 90,0% | 75,0% | Maior melhor | RH+Negócio | Receita, margem, prazo | Prioridade piloto |
| KPI-PERF-02 | Performance | Qualidade da meta | A meta é clara, mensurável, influenciável e ligada ao negócio? | Pontos obtidos/pontos possíveis | % | Meta | Criação/revisão | HUB | 85,0% | 70,0% | Maior melhor | RH Performance | Evita esforço sem valor | Proposto |
| KPI-ALO-01 | Operação | Alocação faturável | Quanto da capacidade gera receita? | Horas faturáveis/horas disponíveis | % | Pessoa/Equipe/Cliente | Semanal | PSA/Timesheet | 80,0% | 65,0% | Maior melhor | Operações | Receita e margem | Prioridade piloto |
| KPI-ALO-02 | Operação | Receita disponível perdida | Quanto poderia ser faturado com ociosidade? | Horas ociosas×taxa faturável média | R$ | Pessoa/Equipe | Semanal/mensal | PSA+Financeiro | R$ 0 | R$ 50.000 | Menor melhor | Operações+Financeiro | Receita disponível | Prioridade piloto |
| KPI-FIN-01 | Financeiro | Margem bruta do projeto | Quanto permanece após custos diretos? | (Receita-custo direto)/receita | % | Projeto/Cliente/Área | Mensal | ERP | 30,0% | 20,0% | Maior melhor | Financeiro | Resultado direto | Prioridade piloto |
| KPI-FIN-02 | Financeiro | Receita por FTE alocado | Qual a produtividade econômica média? | Receita/FTE alocado | R$/FTE | Projeto/Cliente | Mensal | ERP+PSA |  |  | Contextual | Finanças/Operações | Receita | Prioridade piloto |
| KPI-FIN-03 | Financeiro | Receita total | Qual o volume bruto reconhecido no período? | Σ receita reconhecida | R$ | Empresa/Período | Mensal | ERP |  |  | Maior melhor | Financeiro | Receita | Proposto |
| KPI-FIN-04 | Financeiro | Receita recorrente | Quanto da receita é contratual e recorrente? | Σ receita recorrente reconhecida | R$ | Empresa/Período | Mensal | ERP+CRM |  |  | Maior melhor | Financeiro+Comercial | Receita recorrente | Proposto |
| KPI-FIN-05 | Financeiro | Crescimento | Qual a variação da receita no tempo? | (Receita atual-Receita anterior)/Receita anterior | % | Empresa/Período | Mensal | ERP |  |  | Maior melhor | Financeiro | Crescimento | Proposto |
| KPI-FIN-06 | Financeiro | Margem de contribuição | Quanto sobra após custos variáveis? | (Receita-custos variáveis)/receita | % | Empresa/Produto/Período | Mensal | ERP |  |  | Maior melhor | Financeiro | Rentabilidade | Proposto |
| KPI-FIN-07 | Financeiro | EBITDA | Quanto gera antes de juros, impostos, depreciação e amortização? | Lucro operacional + depreciação + amortização | R$ | Empresa/Período | Mensal | ERP/FP&A |  |  | Maior melhor | Financeiro | Eficiência operacional | Proposto |
| KPI-FIN-08 | Financeiro | Lucro líquido | Qual o resultado final após despesas e impostos? | Receita-total de custos e despesas | R$ | Empresa/Período | Mensal | ERP/FP&A |  |  | Maior melhor | Financeiro | Resultado final | Proposto |
| KPI-FIN-09 | Financeiro | Fluxo de caixa | Quanto caixa líquido entrou ou saiu? | Entradas de caixa-saídas de caixa | R$ | Empresa/Período | Mensal | ERP/Tesouraria |  |  | Maior melhor | Financeiro | Liquidez | Proposto |
| KPI-FIN-10 | Financeiro | Capital de giro | Quanto capital está imobilizado no ciclo? | Ativos circulantes-passivos circulantes | R$ | Empresa/Período | Mensal | ERP/Contábil |  |  | Menor melhor | Financeiro | Liquidez | Proposto |
| KPI-FIN-11 | Financeiro | ROIC | Qual o retorno sobre o capital investido? | NOPAT/capital investido | % | Empresa/Período | Mensal | ERP/FP&A |  |  | Maior melhor | Financeiro | Eficiência de capital | Proposto |
| KPI-FIN-12 | Financeiro | Custo de oportunidade | Quanto se perde por não escolher a melhor alternativa? | Valor da melhor alternativa-valor escolhido | R$ | Caso/Período | Mensal | HUB+Financeiro |  |  | Menor melhor | Financeiro | Decisão econômica | Proposto |
| KPI-FIN-13 | Financeiro | Receita em risco | Qual parcela da receita está exposta a perda? | Σ receita ponderada por risco | R$ | Cliente/Projeto | Semanal/mensal | CRM+Operações |  |  | Menor melhor | Financeiro+CS | Receita em risco | Proposto |
| KPI-FIN-14 | Financeiro | Custo da inação | Quanto valor é perdido por não agir? | Valor esperado perdido sem ação | R$ | Empresa/Caso | Mensal | HUB+Financeiro |  |  | Menor melhor | Financeiro+Sponsor | Custo da inação | Proposto |
| KPI-PEO-01 | Pessoas | Turnover voluntário | Qual proporção escolheu sair? | Saídas voluntárias/headcount médio | % | Área/Gestor | Mensal/12m | HCM | 12,0% | 18,0% | Menor melhor | RH | Reposição, ramp-up, receita | Proposto |
| KPI-PEO-02 | Pessoas | Custo de turnover | Qual o custo estimado das saídas? | Recrutamento+desligamento+ramp-up+produtividade | R$ | Área/Cargo | Mensal | HCM+Financeiro | R$ 0 |  | Menor melhor | RH+Financeiro | Custo evitável | Proposto |
| KPI-PEO-03 | Pessoas | Mobilidade interna | Quantas posições foram preenchidas internamente? | Movimentações internas/posições preenchidas | % | Empresa/Área | Mensal | HCM/ATS | 35,0% | 20,0% | Maior melhor | Talent Management | Economia de contratação | Proposto |
| KPI-CLI-01 | Cliente | Risco de churn | Quais contas têm maior probabilidade de perda? | Modelo NPS+incidentes+entrega+margem+relação | 0–100 | Cliente | Semanal | CRM+Operações | 20 | 60 | Menor melhor | CS | Receita em risco | MVP+1 |
| KPI-SUP-01 | Compras | Savings realizado | Quanto foi economizado versus baseline? | (Baseline-preço contratado)×volume | R$ | Fornecedor/Categoria | Mensal | ERP/Compras |  |  | Maior melhor | Compras+Financeiro | Redução de custo | MVP+1 |
| KPI-SUP-02 | Compras | Competitividade da oferta | Quanto a oferta difere do preço usual? | (Preço usual-preço ofertado)/preço usual | % | Item/Fornecedor | Cotação | Compras | 15,0% | 5,0% | Maior melhor | Compras | Savings disponível | Caso Aline: 15% |
| KPI-HUB-01 | HUB Impact | Adoção ativa | Quanto do público elegível usa o HUB? | Usuários ativos/usuários elegíveis | % | Perfil/Área | Semanal/mensal | Telemetria | 75,0% | 45,0% | Maior melhor | Gestor HUB | Condição de captura de valor | MVP |
| KPI-HUB-02 | HUB Impact | Ação sobre alertas | Os alertas levam a ações? | Alertas com ação/alertas válidos | % | Gestor/Área | Semanal/mensal | Audit log | 65,0% | 30,0% | Maior melhor | Gestor HUB | Conversão em valor | MVP |
| KPI-HUB-03 | HUB Impact | Tempo até decisão | Quanto tempo do alerta à decisão? | Média(data decisão-data alerta) | Dias | Tipo/Área | Mensal | Audit log | 3 | 10 | Menor melhor | Gestor HUB | Agilidade/perda evitada | MVP |
| KPI-HUB-04 | HUB Impact | ROI da plataforma | Qual o retorno líquido do HUB? | (Benefícios validados-custo HUB)/custo HUB | % | Empresa/Período | Mensal/trimestral | ERP+HUB | 100,0% | 0,0% | Maior melhor | Financeiro+Sponsor | Valor da plataforma | MVP |

---

## 07 — RELAÇÕES · Hipóteses e Validação

> Hipóteses: correlação não deve ser apresentada como causalidade sem validação.

> [!warning] Correlação ≠ Causalidade
> Hipóteses desta aba são correlações observadas. Não apresente como causalidade sem validação com controles, janelas e revisão humana.

> [!tip] Tabela larga — role horizontalmente para ver todas as colunas.

| ID | Sinal | Mediador | Resultado | Relação | Hipótese | Janela | Controles | Validação | Ação | Risco de viés | Nível de evidência (Espec. 5.1) | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REL-01 | Qualidade da meta | Foco/retrabalho | Margem | Hipótese | Metas claras reduzem esforço sem valor. | 4–12 semanas | Complexidade; senioridade; cliente | Antes/depois+grupos comparáveis | Reformular meta/pesos | Metas fáceis premiadas | Hipótese | Validar piloto |
| REL-02 | Atingimento | Entrega de marcos | Receita | Associação | Entrega habilita reconhecimento de receita. | Semanal/mensal | Contrato; sazonalidade | Regressão+revisão financeira | Alertar marco | Fatores externos | Associação | Validar piloto |
| REL-03 | Queda de performance | Produtividade/alocação | Receita/margem | Associação | Queda persistente pode antecipar capacidade perdida. | 2–8 semanas | Projeto; licença; carga | Série temporal+revisão humana | Diagnóstico contextual | Uso punitivo | Associação | Validar piloto |
| REL-04 | Liderança | Clima/retenção/execução | Custo/margem | Hipótese | Boa liderança reduz saídas, retrabalho e atrasos. | 3–12 meses | Mercado; remuneração; projeto | Longitudinal+controles | Coaching/processo | Viés de popularidade | Hipótese | Proposto |
| REL-05 | Alocação | Horas faturáveis | Receita | Matemática | Horas faturáveis×taxa determinam receita disponível. | Semanal | Desconto; contrato | Conciliação timesheet×fatura | Realocar capacidade | Apontamento indevido | Evidência fortalecida | Piloto |
| REL-06 | Engajamento | Absenteísmo/permanência | Custo | Associação | Queda pode anteceder ausência e saída. | 1–6 meses | Remuneração; reorganização | Risco+calibração | Escuta/intervenção | Inferência individual | Associação | Proposto |
| REL-07 | Skills | Mobilidade/ramp-up | Custo contratação | Hipótese | Skills internas reduzem contratação e ramp-up. | 3–12 meses | Demanda; mercado | Coorte+custo evitado | Trilha/projeto | Curso≠competência | Hipótese | Fase 2 |
| REL-08 | Preço fornecedor | Custo aquisição | Margem | Matemática | Oferta 15% menor gera savings se TCO equivalente. | Compra | Qualidade; prazo; volume | Baseline+TCO | Convidar Aline | Viés contra novo | Evidência fortalecida | MVP+1 |
| REL-09 | Uso alertas HUB | Tempo de reação | Benefício/perda evitada | Hipótese | Alertas acompanhados antecipam decisão e valor. | Dias–meses | Maturidade; volume | Ação+contrafactual+Financeiro | Otimizar regra | Atribuição excessiva | Hipótese | MVP |
| REL-10 | Meta | Meta ligada | Indicador financeiro | Associação | Meta individual→meta equipe→indicador financeiro. | Ciclo | Complexidade; cliente | Lineage Meta→KPI | Revisar ligação financeira | Meta isolada | Associação | Proposto |
| REL-11 | Universidade | Competência | Skills futuras | Hipótese | Universidade→competência alimenta skills emergentes. | 6–12 meses | Curso; mercado | Coorte universidade→skill | Alinhar grade e trilha | Oferta≠demanda | Hipótese | Fase 2 |
| REL-12 | Curso | Lacuna | Empregabilidade | Hipótese | Curso→lacuna explica gap de contratação. | 3–12 meses | Região; demanda | Taxa de conversão e lacuna | Ajustar portfólio/curso | Viés de seleção | Hipótese | Fase 2 |

---

## 08 — INTEGRAÇÕES · Contratos e SLAs

> Contratos iniciais de integração e requisitos não funcionais.

> [!tip] Tabela larga — role horizontalmente para ver todas as colunas.

| ID | Sistema | Objeto | Direção | Método | Frequência | Chave | Campos mínimos | Autenticação | Erro/Reprocessamento | SLA | Histórico | Dono | Prioridade | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INT-01 | Workday/HCM | Pessoas/hierarquia | Entrada | API; fallback SFTP | Diária | ID Workday | Cadastro, gestor, estrutura | OAuth2 | Quarentena+relatório+retry | D+1 | 24 meses | RHIS | Crítica | A confirmar |
| INT-02 | Qulture Rocks/Performance | Metas/avaliações | Entrada/bidirecional | API/webhook; CSV | Evento+diária | Pessoa+meta/ciclo | Meta, peso, progresso, notas | OAuth2/API key | Idempotência+versionamento+DLQ | ≤4h | 3 ciclos | RH Performance | Crítica | A confirmar |
| INT-03 | ERP/Financeiro | Receita/custo/margem | Entrada | API/DW | Mensal | Projeto/cliente/CC/período | Receita, custo, moeda, fechamento | Service account | Bloquear não conciliado | D+2 fechamento | 24 meses | Financeiro | Crítica | A confirmar |
| INT-04 | PSA/Timesheet | Alocação/horas | Entrada | API/webhook | Diária | Pessoa/projeto/data | Disponível, faturável, taxa | OAuth2 | Idempotência+quarentena | D+1 | 12 meses | Operações | Crítica | A confirmar |
| INT-05 | CRM | Clientes/contratos | Entrada | API/webhook | Diária | Account/contract ID | Conta, owner, valor, renovação | OAuth2 | Retry+reconciliação | D+1 | 24 meses | Comercial | Alta | A confirmar |
| INT-06 | Payroll | Custo pessoa | Entrada | SFTP/DW seguro | Mensal | Pessoa+período | Salário, encargos, benefícios | Segredo gerenciado | Acesso restrito+conciliação | D+2 folha | 12 meses | Folha | Crítica | A confirmar |
| INT-07 | BI/DW | Outputs HUB | Saída | API/SQL/arquivo | Diária/mensal | IDs canônicos | KPIs, alertas, valor gerado, lineage, atribuição | Service account | Contrato versionado | D+1 | Destino | Dados | Alta | Governado |
| INT-08 | SSO/IAM | Usuários/papéis | Bidirecional | SAML/OIDC/SCIM | Tempo real/diária | E-mail/ID | Usuário, papel, grupo, status | SSO/MFA | Revogação imediata | ≤15min | Auditável | Segurança | Crítica | A confirmar |
| INT-09 | SRC-04 HRIS | Pessoas/hierarquia e risco agregado | Entrada | API/SFTP seguro | Diária | tenant_id+pessoa/período | Cadastro, hierarquia, área, dados agregados | OAuth2 + vault | Envelope FLD-042→045; idempotência; retry/DLQ; reconciliação | D+1 | 24 meses | RHIS | Crítica | Planejado |
| INT-10 | SRC-09 ATS | Vagas/candidatos/etapas | Entrada | API/CSV | Diária | tenant_id+candidatura/vaga | Vagas, candidatos, etapas, contratação, canonical_id | OAuth2 | Envelope FLD-042→045; idempotência; retry/DLQ; replay/reconciliação | D+1 | 24 meses | Talent Acquisition | Alta | Planejado |
| INT-11 | SRC-10 SPEND | Fornecedores/cotações/SLA/risco | Entrada | API/CSV/Form | Semanal/mensal | tenant_id+CNPJ/proposta/período | Cadastro, cotação, preço, SLA, risco, pagamento | OAuth2 + vault | Envelope FLD-042→045; idempotência; retry/DLQ; reconciliação | D+1 | 5 anos | Compras | Alta | Planejado |
| INT-12 | SRC-11 ERP cliente | Receita/custo/margem/fechamento | Entrada | API/DW seguro | Mensal | tenant_id+cliente/projeto/período | Receita, custo, moeda, margem, fechamento, ledger | OAuth2 + vault | Envelope FLD-042→045; idempotência; retry/DLQ; reconciliação/rollback | D+2 | 7 anos | Financeiro cliente | Crítica | Planejado |

---

## 09 — REGRAS E ALERTAS · Motor de Regras

> Limites configuráveis e validados por cliente.

> ALT-04 e ALT-05 permanecem em MVP; os demais thresholds ficam como Proposto — validar com Monks em F0.

> [!tip] Tabela larga — role horizontalmente para ver todas as colunas.

| ID | Regra | Condição | Janela | Condições adicionais | Severidade | Destinatário | Saída | Recomendação | SLA | Escalonamento/Supressão | Explicação | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ALT-01 | Queda persistente | Atingimento <75% em 2 períodos | 2 semanas/meses | Meta qualidade≥70%; sem licença | Alta | Gestor+RH | Metas e fatores relacionados | Diagnosticar contexto, carga, prioridade, skill e suporte | 3 dias | Escala 7 dias; suprime 7 | Dados, regra, período e limites | Proposto — validar com Monks em F0 |
| ALT-02 | Risco por ociosidade | Alocação <65% e capacidade >40h | 2 semanas | Pessoa elegível | Alta | Operações+Gestor | R$ receita disponível em risco | Revisar pipeline, skills e oportunidades | 2 dias | Escala 5 dias | Horas, taxa e cálculo | Proposto — validar com Monks em F0 |
| ALT-03 | Margem em risco | Margem <20% ou queda >5p.p. | Mês | Período conciliado; receita>0 | Crítica | Financeiro+Operações | Projeto e drivers | Revisar escopo, mix, horas, preço e retrabalho | 2 dias | Executivo se crítico | Decomposição da variação | Proposto — validar com Monks em F0 |
| ALT-04 | Meta mal definida | Qualidade <70% | Criação/revisão | Meta editável | Média | Criador+Gestor | Critérios frágeis | Reescrever resultado, fórmula, fonte e ligação financeira | Antes aprovar | RH se ciclo iniciou | Checklist por critério | MVP |
| ALT-05 | Possível viés | Disparidade após controles | Ciclo | Grupo mínimo+significância | Alta | RH/Comitê | Sinal agregado | Auditar critérios, distribuição e calibração | 10 dias | Nunca em grupo pequeno | Método, controles e incerteza | MVP |
| ALT-06 | Fornecedor não acionado | Oferta ≥15% menor e elegível | Demanda | TCO, capacidade e prazo aprovados | Média | Comprador | Fornecedor compatível | Incluir na cotação ou justificar | Antes fechar | Uma vez/demanda | Baseline, preço, TCO | Proposto — validar com Monks em F0 |
| ALT-07 | Alerta sem ação | Sem decisão registrada | 3–7 dias | Responsável ativo | Média | Gestor HUB | Pendência e valor em risco | Cobrar, contextualizar e escalar | 1 dia | Agrupar por responsável | Linha do tempo | Proposto — validar com Monks em F0 |
| ALT-08 | Baixa adoção | Ativos <45% | 30 dias | Elegíveis e SSO funcionais | Média | Gestor HUB+Sponsor | Adoção por perfil | Diagnosticar fluxo, treinamento e utilidade | 5 dias | Mensal | Segmentação e benchmark | Proposto — validar com Monks em F0 |

---

## 10 — TELAS E OUTPUTS · Interfaces e APIs

> Telas, relatórios e APIs esperados.

> [!tip] Tabela larga — role horizontalmente para ver todas as colunas.

| ID | Tela/Output | Perfil | Objetivo | Componentes | Filtros | Ações | Dados/KPIs | Erro/Vazio | Fase | Prioridade | Aceite |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCR-01 | Cockpit executivo | Executivo/Sponsor | Ver negócio e decisões prioritárias. | Receita, margem, pessoas, clientes, cenários, ROI | Período; empresa; área; cliente | Abrir driver; simular; aprovar | FIN-01; ALO-01; PEO-01; HUB-04 | Última atualização e indisponibilidade | MVP | Crítica | KPIs reconciliados; drill-down autorizado |
| SCR-02 | Painel do gestor | Gestor | Acompanhar equipe e agir continuamente. | Metas, capacidade, performance, alertas, ações | Período; projeto; pessoa | Decidir; criar ação; revisar meta | PERF-01/02; ALO-01/02 | Não inferir causa; pedir contexto | MVP | Crítica | Ação auditável; somente hierarquia |
| SCR-03 | Minha jornada | Colaborador | Entender progresso e desenvolvimento. | Metas, check-ins, feedbacks, skills e plano | Ciclo; projeto | Atualizar; responder; contestar | Performance; skills; plano | Explicar ausência de dado | MVP | Alta | Origem visível e contestável |
| SCR-04 | Governança KPI | RH/Financeiro/Admin | Criar e versionar indicadores. | Definição, fórmula, owner, meta, alertas e versões | Domínio; status; owner | Propor; aprovar; versionar | Catálogo KPI | Bloquear campos obrigatórios vazios | MVP | Crítica | Histórico e dupla aprovação financeira |
| SCR-05 | Central alertas/decisões | Gestor HUB | Converter sinais em decisões. | Fila, explicação, responsável, prazo, decisão e valor | Status; severidade; área | Assumir; decidir; escalar; encerrar | HUB-02/03; valor em risco | Falha preserva histórico | MVP | Crítica | Tudo gera audit log; SLA calculado |
| SCR-06 | ROI do HUB | Sponsor/Financeiro | Provar valor e qualidade do uso. | Custos, benefícios, decisões, adoção e payback | Período; área; decisão | Validar; anexar; ajustar premissa | HUB-01/02/03/04 | Separar estimado/valor gerado validado | MVP | Crítica | Financeiro valida valor gerado |
| SCR-07 | Diagnóstico de dados | Dados/Admin | Monitorar integração e confiabilidade. | Jobs, freshness, rejeições, lineage e qualidade | Fonte; domínio; data | Reprocessar; baixar rejeições | Qualidade/SLA | Erro nunca silencioso | MVP | Alta | Lineage por KPI |
| SCR-08 | Marketplace fornecedor | Compras/Fornecedor | Conectar demanda e oferta. | Demanda, catálogo, matching, TCO completo, risco e justificativa | Categoria; região; preço | Convidar; propor; comparar | SUP-01/02; TCO (preço+frete+impostos+operação+qualidade+risco+descarte); risco; savings | Sem match sugere ajustes | MVP+1 | Alta | TCO completo, risco, qualidade, prazo e justificativa obrigatórios |
| SCR-09 | API de indicadores | Sistemas/BI | Entregar resultados governados. | Endpoints, versão, metadados, paginação | Organização; período; entidade | Consultar/exportar | KPIs aprovados | Códigos, retry-after | MVP | Alta | RBAC, versão, logs e limites |

---

## 11 — SEGURANÇA E LGPD · Governança

> Controles mínimos de privacidade, ética, segurança e IA responsável.

| ID | Tema | Requisito | Aplicação | Responsável | Evidência | Fase | Prioridade | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GOV-01 | Finalidade | Dado com finalidade, base legal e público autorizado. | Campo→finalidade→papel→retenção. | DPO/Jurídico+Produto | Registro tratamento/matriz | MVP | Crítica | Pendente |
| GOV-02 | Minimização | Coletar somente o necessário. | Revisar campos e desligar sem uso. | DPO+Dados | Checklist/aprovação | MVP | Crítica | Pendente |
| GOV-03 | RBAC/ABAC | Acesso por papel, organização, hierarquia e sensibilidade. | Deny by default; teste por tenant. | Segurança+Engenharia | Matriz/testes | MVP | Crítica | Planejado |
| GOV-04 | Sensíveis | N24 bloqueador: consent_id+purpose+legal_basis por titular; revogação propaga <=5min para derivados. | Sem consent válido, leitura de FLD-005/006/007/028 bloqueada; CMP log auditável. | DPO+RH | Logs/testes de propagação | MVP | Crítica | Planejado |
| GOV-05 | Decisão humana | IA não decide contratação, promoção, desligamento ou punição. | Recomendação explicável+revisão+contestação. | Produto+Ética | Registro decisão | MVP | Crítica | Planejado |
| GOV-06 | Explicabilidade | Score/alerta mostra dados, regra, período, confiança e limites. | Tela “por que estou vendo?”. | Produto+Dados | Aceite telas | MVP | Alta | Planejado |
| GOV-07 | Viés | Modelos/KPIs testados por grupos e contexto. | Erro, disparidade e drift. | Dados+RH+Ética | Relatório fairness | MVP | Crítica | Planejado |
| GOV-08 | Contestação | Titular pode corrigir ou contestar. | Fluxo com SLA, evidência e auditoria. | Operações+DPO | Tickets/resolução | MVP | Alta | Planejado |
| GOV-09 | Auditoria | Leituras sensíveis, alterações e decisões registradas. | Log imutável usuário-ação-objeto-tempo. | Segurança | Audit log | MVP | Crítica | Planejado |
| GOV-10 | Segurança | Criptografia, MFA, segredos, backup e segregação. | TLS, KMS, vault, SSO e testes. | Segurança/Engenharia | Arquitetura/testes | MVP | Crítica | Planejado |
| GOV-11 | Retenção | Políticas por entidade e obrigação. | Expurgo, legal hold e anonimização. | DPO+Engenharia | Relatório retenção | MVP | Alta | Pendente |
| GOV-12 | Multi-tenant | Nenhum cliente acessa dados de outro. | Isolamento e teste tenant escape. | Arquitetura | Threat model/pentest | MVP | Crítica | Planejado |

---

## 12 — BACKLOG · Requisitos de Desenvolvimento

> Backlog inicial para refinamento com desenvolvimento.

> [!tip] Tabela larga — role horizontalmente para ver todas as colunas.

| ID | Épico | Requisito | Como | Quero | Para | Aceite resumido | Dependências | Fase | Roadmap Espec. (cap.18) | Prioridade | Esforço | Responsável | Sprint | Status | Observações |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BL-001 | Fundação | Multiempresa/organizações | Admin | criar empresas e parâmetros | isolar dados/configurações | Tenant único e isolamento testado | IAM/Banco | MVP | F0 | Crítica | L | Backend/Arquitetura |  | Não iniciado |  |
| BL-002 | Integrações | Importar Workday | RHIS | sincronizar pessoas/hierarquia | manter base canônica | Carga idempotente, rejeições e histórico; FLD-024 consent_id + FLD-025 purpose + FLD-040 tenant_id + FLD-041 valid_from/to presentes/validados; N24 bloqueia sem consent; envelope FLD-042→045 | BL-001 | MVP | F0 | Crítica | L | Dados/Backend |  | Não iniciado | Pessoa: FLD-027→033 (nome, email, telefone, localização, idioma, disponibilidade) + FLD-034/035/037 (nível, área, admissão) |
| BL-003 | Integrações | Importar performance | RH | integrar metas/avaliações | ligar performance ao negócio | Metas, pesos, ciclos e notas conciliados; FLD-024 consent_id + FLD-025 purpose + FLD-040 tenant_id + FLD-041 valid_from/to presentes/validados; N24 bloqueia sem consent; envelope FLD-042→045 | BL-002 | MVP | MVP1 | Crítica | L | Dados/Backend |  | Não iniciado | Performance vinculada a canonical_id e tenant_id |
| BL-004 | Integrações | Importar alocação | Operações | integrar PSA/timesheet | medir capacidade faturável | Horas conciliadas; rejeições visíveis; FLD-024 consent_id + FLD-025 purpose + FLD-040 tenant_id + FLD-041 valid_from/to presentes/validados; N24 bloqueia sem consent; envelope FLD-042→045 | BL-002 | MVP | MVP1 | Crítica | L | Dados/Backend |  | Não iniciado | Vínculo: FLD-040 tenant_id + temporalidade valid_from/to obrigatórios |
| BL-005 | Integrações | Importar financeiro/CRM | Financeiro | integrar ERP/CRM | calcular receita/custo/margem | Fechamento, moeda e período versionados; FLD-024 consent_id + FLD-025 purpose + FLD-040 tenant_id + FLD-041 valid_from/to presentes/validados; N24 bloqueia sem consent; envelope FLD-042→045; estados Potencial→Influenciado→Validado→Realizado e ledger | BL-001 | MVP | MVP1 | Crítica | XL | Dados/Backend |  | Não iniciado | Financeiro/Valor: deduplicação beneficiário×alavanca×período×intervenção; sem dupla contagem |
| BL-006 | KPI Engine | Catálogo/versionamento | Admin KPI | criar/aprovar KPIs | evitar ambiguidade | Campos, aprovação, versão e lineage | BL-001 | MVP | F0 | Crítica | L | Backend/Produto |  | Não iniciado |  |
| BL-007 | KPI Engine | Calcular alocação/margem | Gestor | ver KPIs piloto | agir sobre valor | Cálculos reconciliados, filtros e fonte | BL-004/005/006 | MVP | MVP1 | Crítica | L | Dados |  | Não iniciado |  |
| BL-008 | Performance | Qualidade de metas | Gestor | definir metas melhores | reduzir viés e esforço sem valor | Checklist, score e ligação financeira | BL-006 | MVP | MVP1 | Alta | M | Produto/Backend |  | Não iniciado |  |
| BL-009 | Performance | Check-in contínuo | Pessoa/Gestor | registrar avanço | detectar mudanças cedo | Cadência, lembrete, histórico e comentário | BL-003 | MVP | MVP1 | Alta | M | Frontend/Backend |  | Não iniciado |  |
| BL-010 | Alertas | Motor de regras | Gestor HUB | configurar sinais | gerar alertas acionáveis | Versão, supressão, severidade, explicação | BL-006/007 | MVP | MVP1 | Crítica | L | Backend |  | Não iniciado |  |
| BL-011 | Decisões | Decisão e ação | Gestor | decidir sobre alerta | acompanhar resultado | Motivo, ação, prazo e evidência auditados | BL-010 | MVP | MVP1 | Crítica | M | Frontend/Backend |  | Não iniciado |  |
| BL-012 | Cockpit | Painel gestor | Gestor | ver time, negócio e alertas | agir rápido | RBAC, filtros, drivers e estados de erro | BL-007/010/011 | MVP | MVP1 | Crítica | L | Frontend |  | Não iniciado |  |
| BL-013 | Cockpit | Painel executivo | Executivo | ver riscos, cenários e impacto | priorizar | Agregado, drill-down e exportação auditada | BL-007/010 | MVP | MVP1 | Alta | L | Frontend |  | Não iniciado |  |
| BL-014 | HUB Impact | Telemetria | Gestor HUB | medir adoção/jornada | melhorar valor | Eventos documentados e ≥99,5% qualidade | BL-001 | MVP | MVP1 | Crítica | M | Produto/Dados |  | Não iniciado |  |
| BL-015 | HUB Impact | ROI plataforma | Financeiro | comparar custos/benefícios | provar valor | Estimado≠valor gerado validado; evidência e validação | BL-005/011/014 | MVP | MVP1 | Crítica | L | Dados/Frontend |  | Não iniciado |  |
| BL-016 | Governança | RBAC/sensíveis | Segurança | aplicar política | proteger titulares/clientes | Deny default, isolamento e logs | BL-001 | MVP | MVP1 | Crítica | XL | Segurança/Backend |  | Não iniciado |  |
| BL-017 | Governança | Contestação | Titular | contestar dado/recomendação | corrigir e confiar | SLA, resposta e alteração auditada | BL-011/016 | MVP | MVP1 | Alta | M | Produto/Backend |  | Não iniciado |  |
| BL-018 | Compras | Matching fornecedor | Comprador | encontrar oferta | reduzir custo com qualidade | Matching, TCO, risco e justificativa | Cadastro/demanda | MVP+1 | MVP3 | Alta | L | Produto/Dados |  | Não iniciado | Aline: ≥15% mais barato |
| BL-019 | Talentos | Matching candidato | RH/Candidato | conectar vaga/pessoa | reduzir oportunidade perdida | Critérios, explicação, consentimento, viés | ATS/skills | MVP+1 | MVP2 | Alta | L | Produto/Dados |  | Não iniciado | Caso Júlia |
| BL-020 | Acadêmico | Skills futuras | Universidade | comparar formação/demanda | criar oportunidades | Taxonomia, evidências e agregado | Parcerias/dados | Fase 2 | MVP3 | Média | XL | Produto/Dados |  | Não iniciado |  |
| BL-021 | Governança | HUB Trust/Equidade | Dados+RH+Ética | auditar viés e explicabilidade | garantir decisão justa e contestável | Relatório fairness por grupo + teste de equidade em MVP | GOV-07/REL-03/06 | MVP | MVP1 | Alta | L | Dados/Ética/Produto |  | Não iniciado | Trust depende de GOV-07 |
| BL-022 | Design/Mudança | Design system e adoção | Produto/Gestor HUB | padronizar telas e comunicação de mudança | acelerar adoção sem retrabalho | Design tokens + guia de mudança validado com Monks | SCR-01..09 | MVP | MVP1 | Média | M | Produto/Design |  | Não iniciado | Cap. 18.4 |

---

## 13 — PILOTO MONKS · Escopo de Validação

> Escopo recomendado para validar valor e arquitetura.

> O scorecard abaixo consolida a validação do piloto único; os thresholds ficam como Proposto — validar em F0.

> Convergência com Espec. 18.2 (critérios ilustrativos): `PIL-01 ≥80%` ↔ `Cobertura >80%`; `PIL-01/02 rconciliação` ↔ `KPIs conectados >60%`; `PIL-05 tempo/ROI` ↔ `Redução tempo 20–40%`; `PIL-01..03 alertas/recomendações` ↔ `5–10 recomendações` + `≥2 casos financeiros`; `PIL-03/04 confiança/qualidade` ↔ `Confiança >75%`. Scorecard único = `PIL-*`; 18.2 é ilustrativo.

> [!tip] Tabela larga — role horizontalmente para ver todas as colunas.

| ID | Frente | Hipótese/Entrega | Dados | Sucesso | Baseline | Meta | Método | Dono cliente | Dono HUB | Prazo | Dependência | Status | Saída |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PIL-01 | Performance×receita | Ligar metas/avaliação a marcos e receita. | Workday; metas; projetos; receita; cliente | ≥80% receita mapeada; alertas úteis |  | 80,0% | Mapeamento+série temporal+Financeiro |  | Produto/Dados HUB |  | INT-01/02/03 | Proposto — validar em F0 | Escalar se rastreável e útil |
| PIL-02 | Alocação×margem | Detectar ociosidade e mix de time que afetam margem. | Horas; taxa; salário/custo; receita; projeto | Margem ≥95% conciliada; valor identificado |  | 95,0% | Conciliação+regras+ações |  | Produto/Dados HUB |  | INT-03/04/06 | Proposto — validar em F0 | Escalar se gerar valor validado |
| PIL-03 | Liderança×performance | Identificar sinais ligados a entrega e retenção. | Gestor; avaliação; clima; turnover; projeto | ≥70% sinais considerados úteis |  | 70,0% | Coortes+controles+revisão humana |  | People Analytics HUB |  | Engajamento | Proposto — validar em F0 | Parar se viés superar utilidade |
| PIL-04 | Qualidade KPI | Revisar metas antes de medir pessoas. | Metas; fórmulas; pesos; fontes; financeiro | ≥85% metas com qualidade |  | 85,0% | Checklist+calibração |  | RH Performance HUB |  | Catálogo KPI | Proposto — validar em F0 | Incorporar se reduzir ambiguidade |
| PIL-05 | HUB Impact | Medir adoção, decisões, tempo e valor. | Telemetria; alertas; ações; custo/benefício | Adoção≥75%; ação≥65%; ROI≥100% |  | 100,0% | Audit log+validação financeira |  | Gestor HUB |  | Telemetria/ROI | Proposto — validar em F0 | Escalar se benefício>custo |

---

## 14 — ROI HUB · Custos, Benefícios e Retorno

> Preencha valores em azul; valor gerado validado exige validação financeira.

> Vocabulário canônico: `Valor gerado` é ganho validado; `Valor disponível` é oportunidade ainda não capturada.

> [!note] Valores em `Estimado` e `Valor gerado validado` estão formatados como `R$`. O `Valor gerado validado` exige validação financeira — não preencher sem evidência.

### Detalhamento por Item

| Categoria | Item | Estado canônico | Atribuição | Premissa | Estimado (R$) | Valor gerado validado (R$) | Evidência | Responsável | Validação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Custo | Implantação | Potencial | originado | Configuração, integrações e treinamento. | R$ 0 | R$ 0 | Contrato/projeto |  | Pendente |
| Custo | Licença e operação | Potencial | originado | Licença, suporte, infraestrutura e administração. | R$ 0 | R$ 0 | Financeiro |  | Pendente |
| Benefício | Receita gerada | Realizado | originado | Ociosidade convertida em faturamento; ledger e aprovação Financeiro. | R$ 0 | R$ 0 | Timesheet+fatura |  | Pendente |
| Benefício | Margem recuperada | Validado | influenciado | Redução de custo, retrabalho ou desvio. | R$ 0 | R$ 0 | ERP+decisão HUB |  | Pendente |
| Benefício | Turnover evitado | Influenciado | acelerado | Reposição, ramp-up e produtividade evitados. | R$ 0 | R$ 0 | RH+Financeiro |  | Pendente |
| Benefício | Savings fornecedor | Validado | originado | Economia validada por baseline e TCO. | R$ 0 | R$ 0 | Compras+Financeiro |  | Pendente |
| Benefício | Horas economizadas | Realizado | mensurado | Horas manuais×custo-hora aprovado; ledger. | R$ 0 | R$ 0 | Processo+Financeiro |  | Pendente |
| Benefício | Perda evitada | Potencial | influenciado | Valor esperado e validado da decisão antecipada. | R$ 0 | R$ 0 | Decisão+premissas |  | Pendente |

### Resumo Calculado

| Indicador | Estimado (R$) | Valor gerado validado (R$) |
| --- | --- | --- |
| Custos totais | R$ 0 | R$ 0 |
| Benefícios totais | R$ 0 | R$ 0 |
| ROI | 0,0% | 0,0% |
| Observação | Estimado | Validar após 3–6 meses |

> **Fórmula ROI:** `(Benefícios validados − Custo HUB) / Custo HUB` · ver `KPI-HUB-04`.

> **Estados e ledger:** `Potencial → Influenciado → Validado → Realizado`; ledger único, deduplicação por beneficiário×alavanca×período×intervenção, teto por população e haircut DAT-08. Sem baseline Monks, ROI permanece zero/ilustrativo.

---

## Notas de Extração

- **Fonte fiel:** todas as 15 abas, 185 linhas tabulares de dados e cabeçalhos foram extraídos de `Planilha_Tecnica_Desenvolvimento_HUB.xlsx` sem tradução e sem resumo. Valores, acentos, símbolos (`Σ`, `×`, `≥`, `≤`, `→`, `R$`, `%`) e quebras de linha preservados.
- **Títulos mesclados:** células mescladas `A1:H2` / `A1:K1` convertidas em `##` + `> subtítulo`.
- **Formatação numérica:** `0.0%` → `85,0%`; `R$ #,##0` → `R$ 0` / `R$ 50.000`; decimais com vírgula pt-BR quando percentual.
- **Células vazias:** preservadas como `` para manter alinhamento tabular; `Sprint` vazio em `12_BACKLOG` indica backlog não iniciado.
- **Validação:** comparar este `.md` com o `.xlsx` aba a aba; qualquer divergência é bug do extrator — reporte.

*Gerado automaticamente em 2026-09-02 a partir de `Planilha_Tecnica_Desenvolvimento_HUB.xlsx` produtomodelo.*
