---
status: em-revisao
title: 01 — Visão Geral — Módulos e Princípio de Arquitetura
source: 01_Visao_Geral
tags: [hub, arquitetura, modulos, visao-geral]
---

# 01 — Visão Geral — Módulos e Princípio de Arquitetura

> Primeiro dimensionamento funcional — transformar escopo em custo real no segundo momento. Ver [[00_HUB_Arquitetura_Custos_Dashboard|Dashboard]] para KPIs.

## Os 8 Módulos

| Código | Frente / módulo | Público | Modelo | Standalone? | O que resolve | Integrações | Leitura |
|--------|-----------------|---------|--------|-------------|---------------|-------------|---------|
| CORE | Core / Plataforma | Transversal | Base comum | Sim | Autenticação, perfis, permissões, consentimentos, integrações, notificações, analytics e administração. | Todas as frentes usam o Core. | Obrigatório para qualquer implantação. |
| ED | Estratégia & Dados | Empresas | Produto independente | Sim | Conecta dados internos de pessoas e negócio para diagnóstico, prioridades, planos de ação e ROI. | Pode receber dados de RH/ERP/BI sem usar candidatos, fornecedores, acadêmico ou eventos. | Pode ser vendido sozinho. |
| COL | Colaboradores / Meu Time | Empresas | Independente ou conectado a ED | Sim | Desempenho, competências, desenvolvimento, liderança, saúde do time e talentos internos. | Alimenta ED com sinais de pessoas e recebe prioridades/planos. | Pode operar sem marketplace externo. |
| CAN | Candidatos & Carreira | Pessoas + Empresas | Marketplace / jornada | Sim | Perfil, competências, capacitação, oportunidades, candidatura, match e acompanhamento. | Conversa com Acadêmico, Empresas, Eventos e Core. | Vertical de empregabilidade. |
| FOR | Fornecedores & Negócios | Fornecedores + Compradores | Marketplace B2B | Sim | Maturidade, demandas, desenvolvimento, match, negociação e conversão. | Conversa com Eventos, ED e Core. | Pode operar sozinho para acesso a mercado. |
| ACA | Acadêmico / Universidades | Alunos + Universidades + Empresas | Educação-mercado | Sim | Projetos, bolsas, pesquisa aplicada, estágio, carreira, formação e conexão com empresas. | Conversa fortemente com Candidatos e Empresas; opcionalmente Eventos. | Pode ser vendido sozinho para universidade. |
| EVT | Eventos | Organizadores + Público + Empresas | Orquestrador transversal | Parcial | Talentos, fornecedores, pesquisa, patrocínios, acessibilidade, segurança/assédio e ROI. | Consome Candidatos, Fornecedores e Dados; pode ativar Acadêmico. | Pode começar standalone, mas ganha valor com outros módulos. |
| COM | Comunidades / Eu & Eu / Cultura | Pessoas | Jornada individual | Sim | Perfil, objetivos, plano, preparação, mentoria, cuidado, eventos e conexões. | Pode alimentar Candidatos, Acadêmico e Eventos com consentimento. | Camada B2C; não é pré-requisito B2B. |

## Princípio de Arquitetura

> [!important] Modularidade é lei
> A plataforma deve ser **modular**. **Estratégia & Dados pode funcionar somente com dados já existentes** (RHIS/ERP/BI) sem exigir marketplaces de candidatos/fornecedores/acadêmico/eventos. Cada vertical pode ser vendida standalone — o Core é a única dependência obrigatória.

- **CORE** é transversal — autenticação, perfis, permissões, consentimentos, integrações, notificações, analytics, admin. Tudo usa o Core.
- **EVT** é orquestrador transversal — consome Candidatos, Fornecedores e Dados; pode ativar Acadêmico.
- **COM** é camada B2C (Eu & Eu) — não é pré-requisito B2B, mas alimenta CAN/ACA/EVT com consentimento.
- Ver [[03_Matriz_Integracoes]] para força de acoplamento e [[04_Cenarios_Implantacao]] para combos comerciais.

## Drivers por Módulo (de 07_Base_Para_Precificacao)

| Código | Telas | Complexas | Integrações diretas | IA/matching | Dados/BI | Mensageria | Mobile | Compliance | Operação humana |
|--------|-------|-----------|---------------------|-------------|----------|------------|--------|------------|-----------------|
| CORE | 12 | 6 | 7 | Não | Média | Alta | Sim | Muito alta | Média |
| ED | 11 | 9 | 3 | Alta | Muito alta | Baixa | Não | Alta | Baixa |
| COL | 11 | 4 | 2 | Média | Alta | Média | Sim | Alta | Média |
| CAN | 13 | 5 | 4 | Muito alta | Alta | Alta | Sim | Alta | Alta |
| FOR | 14 | 9 | 2 | Muito alta | Alta | Alta | Responsivo | Alta | Alta |
| ACA | 12 | 6 | 3 | Alta | Alta | Média | Sim | Alta | Média |
| EVT | 14 | 10 | 5 | Alta | Muito alta | Alta | Sim | Muito alta | Muito alta |
| COM | 9 | 2 | 4 | Média | Média | Alta | Sim | Alta | Alta |

> **Leitura rápida:** EVT é o mais caro em operação (muito alta em Dados, Mensageria, Compliance, Operação). CORE pesa em Mensageria + Compliance. ED pesa em Dados/BI + IA. CAN/FOR pesam em IA + operação humana.
