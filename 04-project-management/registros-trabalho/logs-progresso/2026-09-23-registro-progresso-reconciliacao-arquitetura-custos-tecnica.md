---
title: "Registro de Progresso — Reconciliação Arquitetura e Custos × Planilha Técnica"
description: "Consolida a decisão de fonte de verdade, a separação dos dois arquivos e a execução da reconciliação do Arquitetura e Custos Totais contra a Planilha Técnica."
type: log
status: ativo
date: 2026-09-23
tags:
  - gestao-projeto
  - reconciliacao
  - fonte-de-verdade
  - arquitetura
  - custos
  - planilha-tecnica
related_notes:
  - "[[03-approved/nucleo-inteligencia/README]]"
---

# Registro de Progresso — Reconciliação Arquitetura e Custos × Planilha Técnica

> [!abstract] Veredito executivo
> `Planilha_Tecnica_Desenvolvimento_HUB.xlsx` é a **fonte de verdade congelada** (contrato de sistema: campos, KPIs, LGPD, backlog, piloto). `Arquitetura e Custos Totais.xlsx` foi **reconciliado como anexo de custo derivado**: 111 telas (96 + 15 novas, incl. frente CUST/MOD-04), fases MVP/MVP+1/Fase 2, rastreabilidade total por ID Tecnica. CAPEX esperado **R$6,63M** (era R$5,61M); OPEX base inalterado em **R$142k/mês**.

## 1. Decisões consolidadas

- **Fonte de verdade:** Planilha Técnica — decisão por robustez de conteúdo, não por pasta (`03-approved` vs `02-review`). É o único contrato rastreável campo → KPI → alerta → decisão → ROI (47 campos, 12 fontes, 28 KPIs, 12 controles LGPD, 22 backlog, 5 hipóteses piloto).
- **Arquitetura e Custos:** anexo de custo. Método preservado (rates, multiplicadores, contingência); apenas os insumos de escopo foram remapeados.
- **Separação mantida:** merge rejeitado (incharia a spec congelada de 14 para ~26 abas, misturaria donos e cadências). Ligação entre arquivos será por referência externa, não duplicação.

## 2. Execução realizada (no Arquitetura e Custos)

### 2.1 Rastreabilidade

- Novas colunas `MOD (Tecnica)` / `Fase Tecnica` / `Ref Tecnica` em `02_Inventario_Paginas`; toda tela resolve para um ID Tecnica (SCR/BL/ALT/GOV/INT/KPI) ou está marcada `sem ref direta`.
- `01_Visao_Geral` ganhou coluna `MOD (Tecnica)` + linha CUST.

### 2.2 Retag de fases (Tecnica vence)

- FOR e CAN (MVP) → **MVP+1**; ACA, EVT, COM (MVP) → **Fase 2**; talentos COL (Fase 2) → **MVP+1**; ED alertas (Fase 2) → **MVP**.
- MVP+1 custa integral (fator 1, como MVP); desconto 0,9 segue exclusivo de Fase 2 — premissa registrada em `08_Premissas_Custos`.

### 2.3 Escopo novo precificado (15 telas, IDs 97–111)

- ED/CORE: catálogo e versionamento de KPIs (SCR-04/BL-006), motor de regras (ALT-01..08/BL-010), registro de decisão (SCR-05/BL-011), diagnóstico de dados (SCR-07), fairness (GOV-07/BL-021), contestação (GOV-08/BL-017), API de indicadores (SCR-09), admin multiempresa (BL-001), revogação N24 (GOV-04).
- **Nova frente CUST — Clientes e Receita (MOD-04):** conta 360°, contratos, NPS, churn (MVP+1, KPI-CLI-01), receita/margem, expansão.

### 2.4 Estrutura atualizada

- `04_Matriz` e `06_Cenarios` re-chavados para MOD-01..08; novos cenários **Piloto Monks (MVP)** e **híbrido** (decisão Tecnica #3); `05_Fluxos` com fluxos MOD-04.
- `10/11/12`: linha CUST, colunas MVP+1, rateio do Core ÷8, ranges estendidos à linha 200.

## 3. Totais (recomputados de forma independente, mesma matemática das fórmulas)

| Linha | Valor |
|---|---|
| CAPEX total | R$6.633.063,15 (era R$5.607.665,98) |
| CAPEX MVP | R$2.366.197,71 |
| CAPEX MVP+1 | R$1.723.147,26 |
| CAPEX Fase 2 | R$2.543.718,18 |
| OPEX base | R$142k/mês (inalterado; rateio por módulo deslocado + linha CUST) |

## 4. Estado atual

| Frente | Estado | Leitura correta |
|---|---|---|
| Planilha Técnica | Congelada | Fonte de verdade; nenhum edit realizado |
| Arquitetura e Custos | Reconciliado, pendente confirmação visual | Fórmulas e IDs verificados via script; falta abrir no Excel e confirmar o recálculo |
| ROI (`14_ROI_HUB`) | Zerado | Aguardando link externo para os totais do Arquitetura |
| Typo interno Tecnica (INT-09/INT-12) | Sinalizado, não corrigido | Mapear pela fonte semântica até revisão futura da Tecnica |

## 5. Próximos passos

1. Abrir o Arquitetura no Excel e confirmar que o recálculo exibe os totais da §3.
2. Preencher `14_ROI_HUB` (Implantação, Licença e operação) como **referências externas** aos totais do Arquitetura — único toque admitido no arquivo congelado.
3. Validar com Monks as telas movidas para MVP (alertas, decisões, diagnósticos) antes do F0.

## 6. Registro da decisão

O Arquitetura e Custos agora precifica o escopo da fonte de verdade em vez de um marketplace genérico de 96 telas. O aumento de CAPEX (+R$1,03M) vem de escopo MVP real que nunca havia sido dimensionado (KPI engine, decisões, auditoria, multiempresa, N24, MOD-04), parcialmente compensado pela saída de ACA/EVT/CAN/FOR do MVP.
