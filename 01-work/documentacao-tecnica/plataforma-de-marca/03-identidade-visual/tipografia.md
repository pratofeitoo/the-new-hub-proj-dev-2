---
titulo: Tipografia — HUB
status: rascunho / provisório / não aprovado
escopo: tipografia para apresentações, produto, dashboards e comunicação
owner: Identidade visual — a confirmar
fontes:
  - sistema-visual.md
  - ../99-referencias/inventario-de-visuais.md
  - ../05-sistema-de-produto-e-dashboards/tokens-de-interface.md
---

# Tipografia — HUB

> Este documento registra uma hipótese tipográfica para prototipagem. Não confirma licenças, disponibilidade, arquivo de fonte ou decisão final de identidade.

## 1. Hipótese de famílias

O moodboard `HUB / SISTEMA VIVO` sugere:

- `Sora` para títulos, números de destaque e chamadas;
- `Inter` para corpo, controles, tabelas e leitura contínua.

Essa combinação deve ser tratada como hipótese até confirmação de licença, pesos, suporte ao português, numerais e disponibilidade nos ambientes de apresentação e produto.

## 2. Hierarquia provisória

## 2.1 Referência tipográfica fornecida

A imagem [WhatsApp (5)](../99-referencias/WhatsApp%20Image%202026-08-29%20at%2012.47.42%20(5).jpeg) explicita `Sora` para títulos e `Inter` para corpo, números e interface. Isso reforça a hipótese tipográfica já registrada e passa a ser tratado como referência fornecida para a direção visual. Licença, pesos, suporte ao português, disponibilidade e desempenho em produto, apresentação e impressão continuam pendentes.

| Papel | Família | Uso | Regra |
|---|---|---|---|
| Display | Sora | capa e mensagem principal | uma ideia forte por superfície; evitar títulos longos demais |
| Heading | Sora | seções e cards | usar peso e tamanho antes de cor |
| Body | Inter | parágrafos e explicações | priorizar leitura, comprimento de linha e altura de linha |
| Label | Inter | metadados, status e controles | manter rótulos legíveis; não depender de caixa alta |
| Numeric | Inter | métricas e tabelas | preferir numerais tabulares quando disponíveis |
| Fallback | system-ui, sans-serif | indisponibilidade da fonte | preservar hierarquia e métricas de texto |

## 3. Escala inicial

Escala de prototipagem, sujeita a ajuste por aplicação:

| Nível | Desktop | Mobile | Uso |
|---|---:|---:|---|
| Display | 40–48 px | 32–40 px | capa e mensagem central |
| H1 | 32–36 px | 28–32 px | título de seção |
| H2 | 24–28 px | 22–24 px | subseção |
| Body | 16–18 px | 16 px | leitura principal |
| Small | 13–14 px | 13–14 px | apoio e metadados |
| Label | 12–14 px | 12–14 px | controles e status |

Não reduzir corpo ou label abaixo do necessário para encaixar conteúdo em um layout.

## 4. Regras de uso

- manter contraste suficiente e não usar peso leve para texto essencial;
- limitar combinações de famílias e pesos;
- usar itálico, caixa alta e cor como apoio, não como único mecanismo de hierarquia;
- preservar acentos e caracteres do português;
- testar números, moeda, percentuais e datas em contexto real;
- incluir fallback no código ou no template de apresentação;
- confirmar licença antes de distribuir arquivos ou incorporar fontes.

## 5. Pendências

- confirmar se `Sora` e `Inter` podem ser usadas no projeto;
- definir pesos, arquivos, licença e método de distribuição;
- testar leitura em slides, dashboards, mobile e impressão;
- decidir se haverá serif display editorial;
- registrar a família aprovada no sistema de tokens.
