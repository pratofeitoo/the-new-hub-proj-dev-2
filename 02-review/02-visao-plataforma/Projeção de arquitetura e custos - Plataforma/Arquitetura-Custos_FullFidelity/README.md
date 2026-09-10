---
status: em-revisao
title: Arquitetura e Custos — Full-Fidelity Archive (C)
type: archive
tags: [hub, arquitetura, custos, archive, full-fidelity]
---

# Full-Fidelity Archive — Arquivo Fiel ao Excel

> Esta pasta é a **versão C** — transcrição literal das 12 abas. Para versão legível com dashboard e charts, ver `[[../Arquitetura-Custos/README|B+D — Dashboard]]`.

## Conteúdo

| Arquivo | O que é |
|---------|---------|
| [HUB_Arquitetura_Custos_FULLFIDELITY.md](HUB_Arquitetura_Custos_FULLFIDELITY.md) | **Mega-arquivo** com as 12 abas em markdown (fiel, 28 cols preservadas) |
| `_data/*.csv` | 12 CSVs fiéis — um por aba, prontos para reimporte em Excel/Sheets/Bases |
| `README.md` | Este índice |

## Quando usar cada versão

- **B+D (`Arquitetura-Custos/`)** → apresentar, decidir, filtrar por Fase/Complexidade, ver charts.
- **C (`Arquitetura-Custos_FullFidelity/`)** → auditar, provar origem, reimportar, conferir totais.

## CSVs

```
_data/01_Visao_Geral.csv
_data/02_Inventario_Paginas.csv
_data/03_Resumo_Modulos.csv
_data/04_Matriz_Integracoes.csv
_data/05_Fluxos_Diretos.csv
_data/06_Cenarios_Implantacao.csv
_data/07_Base_Para_Precificacao.csv
_data/08_Premissas_Custos.csv
_data/09_Estimativa_96_Telas.csv      # 96 × 28 cols — completa
_data/10_CAPEX_por_Modulo.csv
_data/11_OPEX_Mensal.csv
_data/12_Dashboard_Custos.csv
```

> Todos gerados com `openpyxl, data_only=True` — valores visíveis, não fórmulas.
