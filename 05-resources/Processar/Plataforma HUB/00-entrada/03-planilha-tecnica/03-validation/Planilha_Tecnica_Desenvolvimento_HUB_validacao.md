---
title: Nota de Auditoria — Validação da Planilha Técnica de Desenvolvimento HUB
tipo: auditoria de extração
idioma: pt-BR
data_validacao: 2026-09-02
arquivo_origem: Planilha_Tecnica_Desenvolvimento_HUB.xlsx
arquivo_destino: Planilha_Tecnica_Desenvolvimento_HUB.md
status: aprovado
tags:
  - hub
  - auditoria
  - validacao
  - planilha
  - pt-br
---

# Nota de Auditoria — Validação da Planilha Técnica de Desenvolvimento HUB

## Resultado

**Aprovado — nenhuma divergência encontrada na comparação entre a planilha original e a nota Markdown extraída.**

A validação confirmou equivalência tabular e semântica dos dados, mantendo o idioma original pt-BR.

## Arquivos auditados

- [Arquivo original XLSX](./Planilha_Tecnica_Desenvolvimento_HUB.xlsx)
- [Nota extraída em Markdown](./Planilha_Tecnica_Desenvolvimento_HUB.md)

## Escopo da validação

- 15 abas da planilha original.
- 18 tabelas Markdown correspondentes.
- 185 linhas tabulares.
- Cabeçalhos, valores, células vazias e quantidade de colunas.
- Caracteres especiais e acentos do conteúdo pt-BR.
- Formatação semântica de percentuais e valores monetários.
- Integridade dos separadores `|` das tabelas Markdown.
- Títulos, subtítulos, índice, frontmatter e seções especiais.

## Procedimento executado

1. A planilha foi lida com `openpyxl`, usando os valores materializados (`data_only=True`).
2. Cada tabela Markdown foi identificada e comparada com sua tabela correspondente na planilha.
3. Nas abas `02_MODULOS` a `13_PILOTO_MONKS`, os cabeçalhos e cada célula de cada linha foram comparados.
4. As abas com estruturas especiais foram verificadas separadamente:
   - `00_LEIA-ME`: metadados e mapa das abas;
   - `01_PAINEL`: indicadores e cobertura;
   - `14_ROI_HUB`: detalhamento e resumo calculado.
5. Pipes internos foram tratados como conteúdo escapado (`\|`) para não quebrar as tabelas Markdown.
6. Percentuais foram exibidos em padrão pt-BR, como `85,0%`, e valores monetários como `R$ 50.000`.

## Resultado detalhado

| Verificação | Resultado |
|---|---|
| Quantidade de abas | 15 — conferente |
| Quantidade de tabelas Markdown | 18 — conferente |
| Linhas tabulares | 185 — conferente |
| Cabeçalhos | Sem divergências |
| Dados célula a célula | Sem divergências |
| Células vazias | Preservadas |
| Pipes e colunas | Integridade confirmada |
| Caracteres pt-BR | Preservados |
| Caracteres especiais (`Σ`, `×`, `≥`, `≤`, `→`, `R$`, `%`) | Preservados |
| Truncamento de conteúdo | Não detectado |
| Erros de codificação UTF-8 | Não detectados |
| Frontmatter e índice | Válidos |

## Observações e limites

- A validação confirma equivalência de conteúdo e estrutura tabular; não é uma comparação binária dos arquivos.
- A nota Markdown reorganiza títulos mesclados, blocos especiais e decisões do painel para uma representação adequada ao Obsidian.
- A exibição numérica segue o significado da unidade. Por exemplo, células de `06_KPIS` com unidade `R$`, `R$/FTE`, `Dias` ou `0–100` não são tratadas como percentuais mesmo quando a formatação interna da célula XLSX é genérica ou inconsistente.
- A planilha original permanece preservada e é a fonte de verdade para futuras atualizações.

## Conclusão

Em 2026-09-02, a conversão de `Planilha_Tecnica_Desenvolvimento_HUB.xlsx` para `Planilha_Tecnica_Desenvolvimento_HUB.md` foi validada e aprovada para uso no Obsidian, com o conteúdo original em português brasileiro e os dados tabulares preservados.
