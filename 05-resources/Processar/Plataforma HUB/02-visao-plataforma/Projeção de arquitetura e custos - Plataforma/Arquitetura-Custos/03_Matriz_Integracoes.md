---
title: 03 — Matriz de Integrações e Fluxos Diretos
source: 04_Matriz_Integracoes + 05_Fluxos_Diretos
tags: [hub, integracoes, matriz, fluxos]
---

# 03 — Matriz de Integrações

> 3 = mesmo módulo | 2 = integração direta/forte | 1 = opcional/troca de dados | 0 = não precisa

## Heatmap (leia como tabela)

| Código | Módulo | CORE | ED | COL | CAN | FOR | ACA | EVT | COM |
|--------|--------|------|----|-----|-----|-----|-----|-----|-----|
| CORE | Core / Plataforma | 3 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| ED | Estratégia & Dados | 2 | 3 | 2 | 1 | 1 | 1 | 2 | 1 |
| COL | Colaboradores / Meu Time | 2 | 2 | 3 | 1 | 0 | 1 | 1 | 1 |
| CAN | Candidatos & Carreira | 2 | 1 | 1 | 3 | 0 | 2 | 2 | 2 |
| FOR | Fornecedores & Negócios | 2 | 1 | 0 | 0 | 3 | 1 | 2 | 1 |
| ACA | Acadêmico / Universidades | 2 | 1 | 1 | 2 | 1 | 3 | 1 | 2 |
| EVT | Eventos | 2 | 2 | 1 | 2 | 2 | 1 | 3 | 2 |
| COM | Comunidades / Eu & Eu / Cultura | 2 | 1 | 1 | 2 | 1 | 2 | 2 | 3 |

> **Padrões:**
> - **CORE** é 2 com todos (hub).
> - **CAN↔FOR = 0** — marketplaces diferentes, só cruzam via Core/Eventos.
> - **COL↔FOR = 0** — colaboradores não falam direto com fornecedores.
> - **EVT** é 2 com ED/CAN/FOR/COM — orquestrador.
> - **ED** é 2 com COL e EVT, 1 com o resto — consome sinais, não é transacional.

---

## O Que Conversa Diretamente — e O Que Não Precisa

> Todas as integrações são **Não obrigatórias** e **Funcionam sem** — modularidade real.

| Origem | Destino | Tipo | Dado compartilhado | Por que integrar | Exemplo |
|--------|---------|------|--------------------|------------------|---------|
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

## Visual — Força de integração (Grafo mental)

```mermaid
graph TD
  CORE --- ED & COL & CAN & FOR & ACA & EVT & COM
  ED --- COL
  ED --- EVT
  CAN --- ACA
  CAN --- EVT
  FOR --- EVT
  ACA --- CAN
  COM -. consentimento .-> CAN
  COM -. consentimento .-> EVT
  CAN -.x.- FOR
  COL -.x.- FOR
```

> Linhas sólidas = direta (2), tracejadas = opcional (1) ou consentimento, `x` = sem integração direta (0).

---

## Implicações para Implantação

Ver [[04_Cenarios_Implantacao]] — cada cenário ativa só as integrações necessárias. Ex: `ED standalone` só usa CORE; `HUB Eventos` ativa CAN+FOR+EVT.
