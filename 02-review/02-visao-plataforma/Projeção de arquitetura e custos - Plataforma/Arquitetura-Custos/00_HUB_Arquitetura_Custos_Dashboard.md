---
title: HUB — Arquitetura e Custos Totais — Dashboard
type: dashboard
source: Arquitetura e Custos Totais.xlsx
sheets: 12
updated: 2026-08-30
tags: [hub, arquitetura, custos, capex, opex, dashboard]
status: em-revisao
---

# HUB — Arquitetura e Custos Totais

> **Fonte:** `05-resources/inbox/Plataforma HUB/Plataforma Completa/Projeção de arquitetura e custos - Plataforma/Arquitetura e Custos Totais.xlsx` — 12 abas · 96 telas mapeadas · modelo inicial para decisão (calibrar com arquitetura técnica escolhida).

## Navegação

| Nota | Conteúdo | Quando usar |
|------|----------|-------------|
| [[01_Visao_Geral_Modulos]] | 8 módulos, princípio modular, o que é standalone | Onboarding / venda modular |
| [[02_Inventario_96_Telas]] | 96 telas (ID, Frente, Canal, Fase, Complexidade) + filtros Bases | Planejamento / escopo |
| [[03_Matriz_Integracoes]] | Matriz 8×8 + fluxos diretos (o que conversa e o que não precisa) | Arquitetura / integrações |
| [[04_Cenarios_Implantacao]] | 7 cenários (ED standalone → Ecossistema completo) | Comercial / implantação |
| [[05_Premissas_CAPEX_OPEX]] | Multiplicadores, rates R$/h, OPEX base R$ 142k/mês | Precificação |
| [[06_Estimativa_Build]] | Horas por tela (96) + CAPEX/OPEX por módulo + CSVs | Orçamento / cronograma |

> `09_Estimativa_96_Telas` completa (28 cols) está em `_data/` como CSV — não cabe legível em markdown.

---

## KPIs Executivos

| KPI | Valor | Nota |
|-----|-------|------|
| **CAPEX Total** | **R$ 5,607,665.98** | sem duplicação de telas compartilhadas |
| **CAPEX Core** | R$ 160,722.26 | base compartilhada (12 telas) |
| **OPEX Base / mês** | **R$ 142,000.00** | 8 componentes, editável por volume |
| **Telas mapeadas** | **96** | 69 MVP + 27 Fase 2 |

> [!abstract] Princípio de Arquitetura
> A plataforma **deve ser modular**. [[01_Visao_Geral_Modulos|Estratégia & Dados]] pode funcionar somente com dados já existentes (via RHIS/ERP/BI) sem exigir marketplaces. Cada vertical pode ser vendida standalone — o Core é obrigatório, o resto é composável.

---

## CAPEX por Módulo — Incremental (sem cobrar Core 2×)

> [!tip] Leitura comercial
> Preço do módulo = **incremental + parcela de Core rateada + implantação/integrações específicas do cliente**. O Core (~R$ 161k) é rateado igualmente nos fully-loaded de OPEX; no CAPEX o número abaixo já é incremental.

```chartsview
type: Bar
data:
  - modulo: CORE
    capex: 160722
  - modulo: ED
    capex: 970690
  - modulo: COL
    capex: 581572
  - modulo: CAN
    capex: 869328
  - modulo: FOR
    capex: 847878
  - modulo: ACA
    capex: 740959
  - modulo: EVT
    capex: 939004
  - modulo: COM
    capex: 497510
options:
  xField: "capex"
  yField: "modulo"
  seriesField: "modulo"
  colorField: "modulo"
  label:
    position: "right"
    formatter:
      function formatter(datum) {
        return 'R$ ' + (datum.capex/1000).toFixed(0) + 'k';
      }
    offset: 8
    style:
      fill: "#333"
      fontSize: 11
  xAxis:
    title:
      text: "CAPEX incremental (R$)"
```

| Código | Módulo | Telas | Complexas | CAPEX incremental | % do total |
|--------|--------|-------|-----------|-------------------|------------|
| **CORE** | Base compartilhada | 12 | 6 | R$ 160,722.26 | 2,9% |
| ED | Estratégia & Dados | 11 | 9 | R$ 970,690.59 | 17.3% |
| COL | Colaboradores / Meu Time | 11 | 4 | R$ 581,572.08 | 10.4% |
| CAN | Candidatos & Carreira | 13 | 5 | R$ 869,328.52 | 15.5% |
| FOR | Fornecedores & Negócios | 14 | 9 | R$ 847,878.92 | 15.1% |
| ACA | Acadêmico / Universidades | 12 | 6 | R$ 740,959.26 | 13.2% |
| EVT | Eventos | 14 | 10 | R$ 939,004.03 | 16.7% |
| COM | Comunidades | 9 | 2 | R$ 497,510.32 | 8.9% |

> **Total verificado:** R$ 5,607,665.98 — EVT (R$ 939k) é o maior, seguido por ED (R$ 971k) e CAN (R$ 869k). COM é o menor (R$ 498k).

---

## OPEX Fully-Loaded / mês por Módulo

```chartsview
type: Column
data:
  - modulo: ED
    opex: 23025
  - modulo: COL
    opex: 17488
  - modulo: CAN
    opex: 21583
  - modulo: FOR
    opex: 21278
  - modulo: ACA
    opex: 19756
  - modulo: EVT
    opex: 22574
  - modulo: COM
    opex: 16292
options:
  xField: "modulo"
  yField: "opex"
  label:
    position: "top"
    formatter:
      function formatter(datum) {
        return 'R$ ' + (datum.opex/1000).toFixed(1) + 'k';
      }
    offset: 6
    style:
      fill: "#333"
      fontSize: 11
  yAxis:
    max: 26000
```

| Código | Módulo | Peso complexidade | OPEX incremental/mês | Core rateado/mês | **OPEX fully-loaded/mês** |
|--------|--------|-------------------|----------------------|------------------|---------------------------|
| ED | Estratégia & Dados | 0.178 | R$ 13,811.14 | R$ 9,214.29 | **R$ 23,025.43** |
| COL | Colaboradores / Meu Time | 0.107 | R$ 8,274.70 | R$ 9,214.29 | **R$ 17,488.99** |
| CAN | Candidatos & Carreira | 0.160 | R$ 12,368.95 | R$ 9,214.29 | **R$ 21,583.23** |
| FOR | Fornecedores & Negócios | 0.156 | R$ 12,063.76 | R$ 9,214.29 | **R$ 21,278.04** |
| ACA | Acadêmico / Universidades | 0.136 | R$ 10,542.49 | R$ 9,214.29 | **R$ 19,756.77** |
| EVT | Eventos | 0.172 | R$ 13,360.30 | R$ 9,214.29 | **R$ 22,574.59** |
| COM | Comunidades | 0.091 | R$ 7,078.66 | R$ 9,214.29 | **R$ 16,292.94** |

> OPEX base total = R$ 142k/mês (Cloud R$18k + Dados R$14k + IA R$12k + DevOps R$22k + Segurança R$14k + QA R$16k + Produto R$28k + Suporte R$18k). Cada módulo soma incremental + R$ 9.214 de Core rateado.

---

## Resumo de Escopo — MVP vs Fase 2

```chartsview
type: Bar
data:
  - fase: MVP
    telas: 69
  - fase: Fase 2
    telas: 27
options:
  xField: "telas"
  yField: "fase"
  colorField: "fase"
  label:
    position: "right"
    formatter:
      function formatter(datum) {
        return datum.telas + ' telas';
      }
    offset: 5
    style:
      fill: "#333"
      fontSize: 12
  xAxis:
    title:
      text: "Telas"
```

| Código | Módulo | Total | MVP | Fase 2 | Alta/Muito alta |
|--------|--------|-------|-----|--------|-----------------|
| CORE | Core / Plataforma | 12 | 10 | 2 | 6 |
| ED | Estratégia & Dados | 11 | 9 | 2 | 9 |
| COL | Colaboradores / Meu Time | 11 | 7 | 4 | 4 |
| CAN | Candidatos & Carreira | 13 | 9 | 4 | 5 |
| FOR | Fornecedores & Negócios | 14 | 10 | 4 | 9 |
| ACA | Acadêmico / Universidades | 12 | 8 | 4 | 6 |
| EVT | Eventos | 14 | 10 | 4 | 10 |
| COM | Comunidades / Eu & Eu / Cultura | 9 | 6 | 3 | 2 |

> EVT e FOR são os mais pesados em complexidade alta (10 e 9). CORE tem 6 complexas mas é obrigatório.

---

## Como usar este pacote

1. **Venda modular:** comece por [[04_Cenarios_Implantacao]] — escolha o cenário (ex: `Estratégia & Dados standalone` = CORE+ED).
2. **Precificação:** ajuste [[05_Premissas_CAPEX_OPEX|premissas]] (rates, contingência 15%, gestão 12%) e recalcule — horas em [[06_Estimativa_Build]] já aplicam multiplicadores.
3. **Escopo detalhado:** filtre [[02_Inventario_96_Telas]] por `Fase=MVP` ou `Complexidade=Muito alta`.
4. **Dados brutos:** `_data/*.csv` são Bases/Dataview-ready — importe direto ou use `Dataview` query.

### Exemplos filtrados (estáticos — CSV não é consultável via Dataview)

> [!warning] Por que não é `dataview`?
> **Dataview não consulta CSV.** O bloco `FROM "_data/*.csv"` falha. Use **Bases** (Obsidian 1.8+ nativo) ou filtre o CSV em Excel/Sheets. Abaixo já estão os filtros mais pedidos como tabelas estáticas.

#### MVP + Muito alta (3 telas — maior risco técnico)

| ID | Código | Frente | Página / tela | Fase | Complexidade |
|----|--------|--------|---------------|------|--------------|
| 17 | ED | Estratégia & Dados | Análises e correlações | MVP | Muito alta |
| 41 | CAN | Candidatos & Carreira | Match candidato-vaga | MVP | Muito alta |
| 55 | FOR | Fornecedores & Negócios | Match fornecedor-demanda | MVP | Muito alta |

#### Bases (recomendado) — filtrar o CSV sem Dataview

Crie um arquivo `02_Inventario.base` com:

```yaml
filters:
  and:
    - Fase == "MVP"
    - Complexidade == "Muito alta"
source: _data/02_Inventario_96_Telas.csv
view: table
```

Ou no Excel/Sheets: `Filtrar > Fase=MVP + Complexidade=Muito alta`.


---

## Fontes & Rastreabilidade

- **Arquivo origem:** `Arquitetura e Custos Totais.xlsx` — 12 abas listadas acima.
- **Abas não convertidas em nota separada:** `07_Base_Para_Precificacao` incorporada em [[05_Premissas_CAPEX_OPEX]] e [[01_Visao_Geral_Modulos]].
- **CSV sidecars:** `_data/02_Inventario_96_Telas.csv`, `_data/09_Estimativa_96_Telas.csv`, `_data/10_CAPEX_por_Modulo.csv`, `_data/11_OPEX_Mensal.csv`
- **Atualização:** re-gerar via `python _scripts/extract.py` (ver [[06_Estimativa_Build#re-geração|re-geração]]).

