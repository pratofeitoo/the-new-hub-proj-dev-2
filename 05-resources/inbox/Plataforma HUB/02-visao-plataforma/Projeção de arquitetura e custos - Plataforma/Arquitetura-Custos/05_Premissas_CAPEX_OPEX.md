---
title: 05 — Premissas, CAPEX e OPEX
source: 08_Premissas_Custos + 10_CAPEX_por_Modulo + 11_OPEX_Mensal
tags: [hub, premissas, capex, opex, precificacao]
---

# 05 — Premissas, CAPEX e OPEX

> Premissas **editáveis** — não são orçamento de fornecedor. Servem para transformar as 96 telas em horas → R$.

---

## 1) Multiplicadores de Complexidade

| Complexidade | Multiplicador | Uso |
|--------------|---------------|-----|
| Baixa | 0.65 | Tela simples / leitura / formulário básico |
| Média | 1 | Fluxo padrão |
| Alta | 1.55 | Regras, integrações ou visualizações complexas |
| Muito alta | 2.2 | Matching, analytics avançado, simulação ou lógica intensa |

| Premissa geral | Valor |
|----------------|-------|
| Contingência desenvolvimento | 0.15 |
| Gestão/arquitetura sobre build | 0.12 |
| Meses de construção | 9 |
| Meses de operação/ano | 12 |
| Fator Fase 2 vs. MVP | 0.9 |
| Reuso parcial de tela | 0.55 |

> Contingência 15% + Gestão/arquitetura 12% sobre o build. Reuso parcial 0.55 onde há `Componente compartilhado`.

---

## 2) Horas Base e Rates por Disciplina

| Disciplina | Horas base / tela média | Rate R$/h | Driver mensal | Observação |
|------------|-------------------------|-----------|---------------|------------|
| UX/UI | 22 | R$ 180 | Build | Pesquisa, fluxo, wireframe, design e handoff |
| Front-end | 48 | R$ 220 | Build | Web responsivo; mobile dedicado é driver adicional |
| Back-end | 54 | R$ 240 | Build | APIs, regras e persistência |
| Dados/BI | 18 | R$ 260 | Build | Modelagem, indicadores e pipelines leves |
| IA/Matching | 10 | R$ 320 | Build | Aplicado apenas quando a tela tem driver de IA |
| QA | 20 | R$ 170 | Build | Testes funcionais, regressão e automação gradual |
| DevOps | 8 | R$ 260 | Build | CI/CD, ambientes e observabilidade |
| Segurança | 6 | R$ 320 | Build | Threat modeling, hardening e revisão |

> IA/Matching (R$ 320/h) e Dados/BI só contam quando `Driver = Sim` em [[06_Estimativa_Build]].

---

## 3) OPEX Base Recorrente — R$ 142.000 / mês

| Componente | Base R$/mês | Escala | Observação | Core % | Vertical % |
|------------|-------------|--------|------------|--------|------------|
| Custo mensal recorrente | R$ 0 | Escala | Observação | 75% | 25% |
| Cloud / infraestrutura | R$ 18,000 | 1 | Ambientes, banco, storage, observabilidade; recalibrar por volume | 55% | 45% |
| Dados / pipelines / BI | R$ 14,000 | 1 | Orquestração, processamento e monitoramento | 35% | 65% |
| IA / modelos / APIs | R$ 12,000 | 1 | Uso variável; depende de volume e arquitetura | 30% | 70% |
| DevOps / SRE | R$ 22,000 | 1 | Sustentação de plataforma | 70% | 30% |
| Segurança / compliance | R$ 14,000 | 1 | Monitoramento, scans, LGPD e auditoria | 35% | 65% |
| QA / releases | R$ 16,000 | 1 | Regressão e qualidade contínua | 45% | 55% |
| Produto / operação técnica | R$ 28,000 | 1 | Gestão de backlog, incidentes e evolução | 45% | 55% |
| Suporte / CS técnico | R$ 18,000 | 1 | Atendimento B2B e operação | 25% | 75% |

> [!warning] Calibragem necessária — Cloud/infra, IA/modelos e Dados variam com volume.

---

## 4) CAPEX Incremental por Módulo

> Custo incremental **exclui Core compartilhado**.

| Código | Módulo | Telas | MVP | Fase 2 | Horas líquidas | CAPEX total | CAPEX MVP | CAPEX Fase 2 | Core alocado | Custo incremental | % CAPEX | Complexas |
|--------|--------|-------|-----|--------|----------------|-------------|-----------|--------------|--------------|-------------------|---------|-----------|
| CORE | Core / Plataforma | 12 | 10 | 2 | 549.3 | R$ 160,722.26 | R$ 135,167.77 | R$ 25,554.49 | R$ 160,722.26 | R$ 160,722.26 | 2.9% | 6 |
| ED | Estratégia & Dados | 11 | 9 | 2 | 3,294.1 | R$ 970,690.59 | R$ 764,201.83 | R$ 206,488.76 | R$ 22,960.32 | R$ 970,690.59 | 17.3% | 9 |
| COL | Colaboradores / Meu Time | 11 | 7 | 4 | 2,021.2 | R$ 581,572.08 | R$ 360,714.58 | R$ 220,857.51 | R$ 22,960.32 | R$ 581,572.08 | 10.4% | 4 |
| CAN | Candidatos & Carreira | 13 | 9 | 4 | 2,982.2 | R$ 869,328.52 | R$ 571,622.77 | R$ 297,705.74 | R$ 22,960.32 | R$ 869,328.52 | 15.5% | 5 |
| FOR | Fornecedores & Negócios | 14 | 10 | 4 | 2,929.0 | R$ 847,878.92 | R$ 603,203.44 | R$ 244,675.47 | R$ 22,960.32 | R$ 847,878.92 | 15.1% | 9 |
| ACA | Acadêmico / Universidades | 12 | 8 | 4 | 2,546.5 | R$ 740,959.26 | R$ 469,950.71 | R$ 271,008.56 | R$ 22,960.32 | R$ 740,959.26 | 13.2% | 6 |
| EVT | Eventos | 14 | 10 | 4 | 3,251.8 | R$ 939,004.03 | R$ 714,015.29 | R$ 224,988.73 | R$ 22,960.32 | R$ 939,004.03 | 16.7% | 10 |
| COM | Comunidades | 9 | 6 | 3 | 1,734.2 | R$ 497,510.32 | R$ 322,123.13 | R$ 175,387.19 | R$ 22,960.32 | R$ 497,510.32 | 8.9% | 2 |

**Total:** R$ 5.607.665,98 (sem duplicação). EVT 16,7% · ED 17,3% · COM 8,9%.

```chartsview
type: Pie
data:
  - type: ED
    value: 17.31
  - type: COL
    value: 10.37
  - type: CAN
    value: 15.50
  - type: FOR
    value: 15.12
  - type: ACA
    value: 13.21
  - type: EVT
    value: 16.75
  - type: COM
    value: 8.87
options:
  angleField: "value"
  colorField: "type"
  radius: 0.7
  label:
    type: "outer"
    formatter:
      function formatter(datum) { return datum.type + ' ' + datum.value.toFixed(1) + '%'; }
    offset: 12
    style:
      fontSize: 10
  legend:
    position: "bottom"
```

---

## 5) OPEX Mensal — Plataforma e Módulos

| Componente | Base/mês | Core % | Vertical % | Core/mês | Pool verticais |
|------------|----------|--------|------------|----------|----------------|
| Cloud / infraestrutura | R$ 18,000 | 75% | 25% | R$ 13,500 | R$ 4,500 | |
| Dados / pipelines / BI | R$ 14,000 | 55% | 45% | R$ 7,700 | R$ 6,300 | |
| IA / modelos / APIs | R$ 12,000 | 35% | 65% | R$ 4,200 | R$ 7,800 | |
| DevOps / SRE | R$ 22,000 | 30% | 70% | R$ 6,600 | R$ 15,400 | |
| Segurança / compliance | R$ 14,000 | 70% | 30% | R$ 9,800 | R$ 4,200 | |
| QA / releases | R$ 16,000 | 35% | 65% | R$ 5,600 | R$ 10,400 | |
| Produto / operação técnica | R$ 28,000 | 45% | 55% | R$ 12,600 | R$ 15,400 | |
| Suporte / CS técnico | R$ 18,000 | 25% | 75% | R$ 4,500 | R$ 13,500 | |

**OPEX base total / mês = R$ 142.000**

| Código | Módulo | Peso complexidade | OPEX incremental/mês | Core rateado/mês | OPEX fully-loaded/mês |
|--------|--------|-------------------|----------------------|------------------|-----------------------|
| ED | Estratégia & Dados | 0.178 | R$ 13,811.14 | R$ 9,214.29 | **R$ 23,025.43** |
| COL | Colaboradores / Meu Time | 0.107 | R$ 8,274.70 | R$ 9,214.29 | **R$ 17,488.99** |
| CAN | Candidatos & Carreira | 0.160 | R$ 12,368.95 | R$ 9,214.29 | **R$ 21,583.23** |
| FOR | Fornecedores & Negócios | 0.156 | R$ 12,063.76 | R$ 9,214.29 | **R$ 21,278.04** |
| ACA | Acadêmico / Universidades | 0.136 | R$ 10,542.49 | R$ 9,214.29 | **R$ 19,756.77** |
| EVT | Eventos | 0.172 | R$ 13,360.30 | R$ 9,214.29 | **R$ 22,574.59** |
| COM | Comunidades | 0.091 | R$ 7,078.66 | R$ 9,214.29 | **R$ 16,292.94** |

```chartsview
type: Bar
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
  xField: "opex"
  yField: "modulo"
  colorField: "modulo"
  label:
    position: "right"
    formatter:
      function formatter(datum) { return 'R$ ' + (datum.opex/1000).toFixed(1) + 'k'; }
    offset: 6
    style:
      fill: "#333"
      fontSize: 11
  xAxis:
    title:
      text: "OPEX fully-loaded / mês (R$)"
```

> ED (R$ 23k) e EVT (R$ 22.6k) mais caros/mês.

---

## CSVs

- `_data/10_CAPEX_por_Modulo.csv`
- `_data/11_OPEX_Mensal.csv`
