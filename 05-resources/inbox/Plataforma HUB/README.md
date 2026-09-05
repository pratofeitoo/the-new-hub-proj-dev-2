---
title: Plataforma HUB · Recursos em Processamento
tags:
  - hub
  - recursos
  - processamento
aliases:
  - Plataforma HUB
  - Recursos da Plataforma HUB
---

# Plataforma HUB

> Área de processamento e organização dos materiais que sustentam a visão, os MVPs, as análises e o histórico da Plataforma HUB.

Esta pasta é o ponto de entrada para os artefatos de trabalho da HUB. Ela preserva a separação entre materiais de entrada, casos concretos, visão de longo prazo, análises derivadas e arquivo histórico.

## Estrutura geral

| Diretório | Função | Conteúdo esperado |
|---|---|---|
| [`00-entrada/`](00-entrada/) | Entrada e triagem inicial. | Materiais novos ainda não classificados. |
| [`01-mvps/`](01-mvps/) | Validação em contextos reais. | MVPs delimitados, hipóteses, escopo, custos e critérios de sucesso. |
| [`02-visao-plataforma/`](02-visao-plataforma/) | Visão estratégica e de longo prazo. | Arquitetura, portfólio, finanças, custos, organização e apresentações. |
| [`03-analises-processadas/`](03-analises-processadas/) | Conhecimento derivado dos materiais. | Análises, conversões, reconciliações e sínteses processadas. |
| [`99-arquivo/`](99-arquivo/) | Memória histórica. | Versões antigas, ideias arquivadas e materiais fora de uso corrente. |

## Onde começar

- Para entender os casos concretos e a validação da tese, consulte [`01-mvps/`](01-mvps/).
- Para consultar a visão completa da plataforma, arquitetura, portfólio, finanças e organização, consulte [`02-visao-plataforma/`](02-visao-plataforma/).
- Para analisar materiais já convertidos ou reconciliados, consulte [`03-analises-processadas/`](03-analises-processadas/).
- Para adicionar material novo, use [`00-entrada/`](00-entrada/) antes de classificá-lo.

## Convenção dos materiais

Quando aplicável, cada área temática organiza seus arquivos em:

- `fontes/` — arquivos originais;
- `notas/` — versões em Markdown e sínteses editáveis;
- `dados/` — tabelas, dados auxiliares e artefatos estruturados;
- `visuais/` — imagens, diagramas e referências visuais.

Os READMEs de cada diretório explicam o conteúdo específico e mantêm os caminhos atualizados.

## Fluxo de processamento

```text
00-entrada → cartão novo → triagem → processamento → revisão
                                       ↓
                               aprovado-para-mover
                                       ↓
           01-blueprint / 02-refinement / 04-project-management / 99-arquivo
```

O arquivo físico permanece em `00-entrada/` durante o processamento. O cartão registra o estado, a origem, o proprietário, o destino e a próxima ação. O movimento acontece uma única vez depois do gate de saída.

Análises intermediárias podem permanecer em `03-analises-processadas/`, sempre ligadas ao cartão e à fonte original. `99-arquivo/` preserva fontes substituídas, encerradas ou necessárias apenas para rastreabilidade.

Consulte o [[manifesto-processamento]] e a [[HUB_Fila_Processamento]] antes de mover qualquer material.

| Destino | Encaminhar quando o resultado for… |
|---|---|
| `01-blueprint/` | arquitetura, estratégia, modelo de negócio, produto, tecnologia, governança ou lançamento consolidados. |
| `02-refinement/` | requisito, fluxo, jornada, pesquisa, hipótese validada, especificação ou decisão operacional refinada. |
| `04-project-management/` | plano, responsável, marco, risco, dependência, cronograma, custo aprovado ou acompanhamento de execução. |
| `99-arquivo/` | fonte substituída, hipótese encerrada, versão antiga ou material preservado apenas para histórico. |

## Relação com o restante do projeto

Esta pasta pertence a [`05-resources/`](../../README.md) e alimenta a evolução da HUB entre visão, experimentação e documentação. Ela não é uma especificação única nem significa que todos os itens descritos estejam aprovados para construção.
