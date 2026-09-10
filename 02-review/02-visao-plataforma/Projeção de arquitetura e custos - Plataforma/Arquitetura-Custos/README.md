---
status: em-revisao
title: Arquitetura e Custos Totais — Pacote Processado
source: Arquitetura e Custos Totais.xlsx (12 abas, 96 telas)
tags: [hub, arquitetura, custos]
---

# Arquitetura e Custos Totais — Pacote Processado

> Gerado em 2026-08-30 a partir de `Plataforma Completa/Projeção de arquitetura e custos - Plataforma/Arquitetura e Custos Totais.xlsx`.

## Estrutura B+D

| # | Arquivo | Abas origem | Uso |
|---|---------|-------------|-----|
| 0 | [[00_HUB_Arquitetura_Custos_Dashboard]] | 12_Dashboard + 10 + 11 + 03 | **Comece aqui** — KPIs, charts, navegação |
| 1 | [[01_Visao_Geral_Modulos]] | 01_Visao_Geral + 07_Base | 8 módulos, princípio modular, drivers |
| 2 | [[02_Inventario_96_Telas]] | 02_Inventario | 96 telas — filtros Bases/Dataview, CSV |
| 3 | [[03_Matriz_Integracoes]] | 04_Matriz + 05_Fluxos | Heatmap 8×8 + 11 fluxos |
| 4 | [[04_Cenarios_Implantacao]] | 06_Cenarios | 7 cenários vendáveis |
| 5 | [[05_Premissas_CAPEX_OPEX]] | 08_Premissas + 10_CAPEX + 11_OPEX | Rates, multiplicadores, CAPEX R$5.6M, OPEX R$142k |
| 6 | [[06_Estimativa_Build]] | 09_Estimativa | Horas por tela (28 cols) — amostra + CSV |

## Dados brutos (Bases/Dataview-ready)

```
_data/02_Inventario_96_Telas.csv      — 96 linhas × 10 cols
_data/09_Estimativa_96_Telas.csv      — 96 linhas × 28 cols (fonte completa)
_data/10_CAPEX_por_Modulo.csv         — 8 módulos
_data/11_OPEX_Mensal.csv              — 8 componentes + rateio
```

> Todos os `chartsview` (Pie/Bar/Column + `chartsview` tag) requerem plugin `caronchen/obsidian-chartsview-plugin` e **Reading Mode** (`Cmd+E`).

## Re-gerar

Edite o `.xlsx` e rode os scripts em `/tmp/build_hub*.py` (ou `python3 _scripts/extract.py` se mover para o vault).

## Validação

- [x] CAPEX total R$ 5.607.665,98 confere com soma dos incrementais
- [x] OPEX base R$ 142.000 confere (soma 8 componentes)
- [x] 96 telas = 69 MVP + 27 Fase 2
- [x] CSVs: header + 96 linhas cada (ver `wc -l _data/*.csv`)
