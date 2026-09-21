---
title: Arquitetura HUB — Multidiagramas Mermaid
description: Documento provisório com vistas estruturais, de fluxo, handoff e ciclo de vida para validação da arquitetura de telas do HUB.
tags:
  - hub
  - arquitetura
  - mermaid
  - produto
status: plano-provisorio
---

# Arquitetura HUB — Multidiagramas Mermaid

> **Status:** provisório para validação estrutural. As telas oficiais `SCR-01..09`, os wireframes `WF-01..07` e os detalhes propostos preservam a classificação do [plano de mapeamento](plano-mapeamento-telas-plataforma-hub.md). Este documento não aprova rotas, regras de acesso ou produção.

## Como ler

As quatro vistas respondem a perguntas diferentes:

1. **Estrutura:** onde cada camada e tela se localiza?
2. **Fluxo de valor:** como um sinal chega a uma decisão e ao ROI?
3. **Handoff:** qual perfil recebe contexto e qual ação executa?
4. **Estado:** como um alerta progride, escala, é suprimido ou encerra?

O [preview estrutural](./preview-arquitetura-hub-mermaid.html) apresenta as quatro vistas lado a lado e mantém uma legenda de escopo, rastreabilidade e validação.

## 1. Estrutura de navegação e telas

```mermaid
flowchart TD
    HUB[Plataforma HUB]
    AUTH[Autenticação<br/>SSO · MFA · tenant]
    SHELL[Shell global<br/>navegação · período · busca · ajuda]
    GLOBAL[Áreas funcionais globais<br/>admin · notificações · privacidade · auditoria]

    subgraph MVP[Telas oficiais do MVP]
        SCR1[SCR-01<br/>Cockpit executivo]
        SCR2[SCR-02<br/>Painel do gestor]
        SCR3[SCR-03<br/>Minha jornada]
        SCR4[SCR-04<br/>Governança de KPIs]
        SCR5[SCR-05<br/>Alertas e decisões]
        SCR6[SCR-06<br/>ROI do HUB]
        SCR7[SCR-07<br/>Diagnóstico de dados]
    end

    subgraph DETAIL[Detalhes propostos da primeira rodada]
        KPI[Detalhe KPI<br/>drivers · cenário]
        ALERT[Alerta e ação<br/>explicar · atribuir · decidir]
        ROI[Benefício e ROI<br/>evidência · validar · comparar]
        DATA[Dados<br/>fonte · job · rejeição · reprocessar]
    end

    subgraph FUTURE[MVP+1 — contrato/rotas]
        SCR8[SCR-08<br/>Marketplace]
        SCR9[SCR-09<br/>API de indicadores]
    end

    HUB --> AUTH --> SHELL
    SHELL --> GLOBAL
    SHELL --> MVP
    SHELL -. contrato/rotas .-> FUTURE
    SCR1 --> KPI
    SCR1 --> ROI
    SCR2 --> ALERT
    SCR4 --> KPI
    SCR5 --> ALERT
    SCR6 --> ROI
    SCR7 --> DATA

    classDef root fill:#eeedfe,stroke:#534ab7,color:#26215c;
    classDef global fill:#e6f1fb,stroke:#185fa5,color:#042c53;
    classDef mvp fill:#e1f5ee,stroke:#0f6e56,color:#04342c;
    classDef detail fill:#faeeda,stroke:#854f0b,color:#412402;
    classDef future fill:#f1efe8,stroke:#5f5e5a,color:#444441;
    class HUB root;
    class AUTH,SHELL,GLOBAL global;
    class SCR1,SCR2,SCR3,SCR4,SCR5,SCR6,SCR7 mvp;
    class KPI,ALERT,ROI,DATA detail;
    class SCR8,SCR9 future;
```

**Validação estrutural:** uma única entrada passa por autenticação, shell e escopo de tenant antes de chegar às telas. MVP+1 não recebe ligação sólida de wireframe. Os detalhes estão agrupados por fluxo e continuam explicitamente propostos.

## 2. Fluxo de dados, decisão e valor

```mermaid
flowchart LR
    SRC[Fontes governadas<br/>ERP · CRM · HCM · PSA]
    ING[Ingestão e qualidade<br/>tenant · consentimento · rejeições]
    KPI[KPI Engine<br/>fórmula · versão · lineage · freshness]
    SIGNAL[Sinal ou alerta<br/>regra · período · confiança · limite]
    DECISION[Decisão humana<br/>motivo · responsável · SLA]
    ACTION[Ação executada<br/>contexto · prazo · evidência]
    FIN[Validação financeira<br/>estimado ≠ realizado]
    ROI[ROI do HUB<br/>ledger · benefício validado]
    AUDIT[Audit log<br/>ator · ação · objeto · tenant · tempo]

    SRC --> ING --> KPI --> SIGNAL --> DECISION --> ACTION --> FIN --> ROI
    ING -. qualidade / erro .-> AUDIT
    KPI -. origem / versão .-> AUDIT
    DECISION -. decisão / transição .-> AUDIT
    ACTION -. evidência .-> AUDIT
    FIN -. validação .-> AUDIT

    classDef source fill:#e6f1fb,stroke:#185fa5,color:#042c53;
    classDef process fill:#eeedfe,stroke:#534ab7,color:#26215c;
    classDef human fill:#faeeda,stroke:#854f0b,color:#412402;
    classDef value fill:#e1f5ee,stroke:#0f6e56,color:#04342c;
    classDef audit fill:#f1efe8,stroke:#5f5e5a,color:#444441;
    class SRC,ING source;
    class KPI,SIGNAL process;
    class DECISION,ACTION,FIN human;
    class ROI value;
    class AUDIT audit;
```

**Validação de governança:** nenhum alerta vira ação ou valor medido sem decisão humana, responsável, evidência e trilha auditável. A relação entre sinal e ação não deve ser apresentada como causalidade comprovada.

## 3. Handoff entre perfis

```mermaid
sequenceDiagram
    participant DH as Dados
    participant GH as Gestor HUB
    participant G as Gestor
    participant C as Colaborador
    participant F as Financeiro
    participant S as Sponsor

    DH->>GH: Publica sinal com regra, período e confiança
    GH->>GH: Explica alerta e assume responsabilidade
    GH->>G: Encaminha contexto e hipótese, sem inferir causa
    G->>G: Decide e cria ação com prazo e SLA
    G->>C: Solicita execução ou contexto
    C-->>G: Executa, responde ou contesta
    G->>F: Envia resultado e evidência
    F->>F: Valida benefício realizado
    F->>S: Disponibiliza benefício validado
    S->>S: Aprova decisão estratégica no Cockpit
    S-->>GH: Publica valor no ROI
    GH->>DH: Registra resultado e qualidade
```

**Validação de responsabilidade:** o fluxo separa explicação, execução, contestação, validação financeira e aprovação estratégica. Cada transição deve registrar ator, motivo, objeto, timestamp e tenant.

## 4. Ciclo de vida do alerta

```mermaid
stateDiagram-v2
    [*] --> NaoAtribuido: alerta gerado
    NaoAtribuido --> EmAndamento: assumir
    EmAndamento --> AguardandoFinanceiro: valor precisa validar
    EmAndamento --> Encerrado: decisão + evidência
    EmAndamento --> Escalado: timeout SLA ou escalação manual
    Escalado --> EmAndamento: novo responsável
    AguardandoFinanceiro --> Encerrado: valor validado
    AguardandoFinanceiro --> EmAndamento: valor rejeitado / corrigir
    EmAndamento --> Suprimido: suprimir com motivo
    Suprimido --> EmAndamento: reabrir com motivo
    Encerrado --> [*]
```

**Validação de estados:** todas as transições têm ator, motivo, regra e timestamp. `Suprimido` exige motivo e permissão; `Encerrado` exige decisão e evidência; valor rejeitado retorna ao trabalho, não desaparece.

## Matriz de validação

| Vista | Fonte primária | Critério de aceite | Estado |
|---|---|---|---|
| Estrutura | Sitemap do plano; `SCR-01..09` | MVP, MVP+1 e detalhes propostos não se confundem | Validada estruturalmente |
| Fluxo de valor | `SCR-01`, `SCR-05`, `SCR-06`; ROI HUB | sinal → decisão → ação → validação → ROI | Validada estruturalmente |
| Handoff | Perfis e fluxos do plano; matriz de autorização | cada perfil recebe apenas o contexto autorizado | Requer teste RBAC/ABAC |
| Estados | Estados obrigatórios e ciclo de alerta | erro, vazio, acesso negado, auditoria e transições críticas explícitos | Validada estruturalmente |
| Produção | Pacote de validação | sem dados reais antes de testes e aprovação | Não autorizada |

## Pendências residuais

- [ ] Renderizar e revisar visualmente em um renderer Mermaid compatível.
- [ ] Testar SEC-01..SEC-08 em ambiente executável.
- [ ] Ratificar a matriz RBAC/ABAC com Segurança/LGPD e Admin.
- [ ] Confirmar 3–5 alertas e thresholds com o piloto Monks.
- [ ] Validar ROI com Financeiro/Sponsor.

