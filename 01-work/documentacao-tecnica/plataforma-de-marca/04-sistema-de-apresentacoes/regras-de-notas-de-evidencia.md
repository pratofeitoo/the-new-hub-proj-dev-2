---
titulo: Regras de notas de evidência — apresentações HUB
status: rascunho / provisório / não aprovado
escopo: notas, rodapés, fontes e limitações em decks
owner: Governança verbal + Sistema de apresentações — a confirmar
fontes:
  - ../02-identidade-verbal/regras-para-evidencia-e-incerteza.md
  - ../02-identidade-verbal/claims-registry.md
  - regras-de-graficos-e-tabelas.md
---

# Regras de notas de evidência — apresentações HUB

> A nota de evidência qualifica uma mensagem; não serve para esconder uma limitação em texto ilegível.

## 1. Quando usar

Adicionar nota próxima quando o slide apresentar:

- número, métrica, percentual, valor financeiro ou benchmark;
- afirmação sobre impacto, causalidade, rede, matching ou performance;
- conteúdo de case, depoimento, logo ou imagem contextual;
- hipótese, projeção, cenário ou capacidade futura;
- estado de aprovação, revisão ou bloqueio.

## 2. Campos mínimos

```text
Fonte: [arquivo, sistema ou registro]
Trecho/definição: [localização ou descrição]
Período: [data inicial/final ou corte]
Unidade/coorte: [o que foi medido]
Status: [hipótese | ilustrativo | observacional | validado | aprovado]
Limitação: [o que não pode ser concluído]
Owner: [pessoa/função]
Versão/validade: [versão e data/evento de revisão]
```

## 3. Modelos

### Dado observacional

> Fonte: [fonte], período [x], [unidade/coorte]. Status: observacional. Limitação: a associação não estabelece causalidade.

### Projeção

> Fonte: [modelo], cenário [x]. Status: ilustrativo. Limitação: depende das premissas [y] e não representa resultado realizado.

### Capacidade em desenvolvimento

> Fonte: [blueprint/produto], versão [x]. Status: hipótese/em desenvolvimento. Limitação: implementação e disponibilidade ainda não foram verificadas.

### Claim aprovado para contexto

> Claim aprovado para [público/canal/período] por [owner/gate], registro [id], versão [x]. Limitação: não reutilizar fora do contexto autorizado.

## 4. Apresentação visual

- usar tamanho legível e contraste suficiente;
- colocar a nota no mesmo campo visual da mensagem;
- repetir fonte e status em gráficos quando necessário;
- não depender de hover, tooltip ou speaker notes para informação essencial;
- em apresentação oral, manter a mesma nota no arquivo e no roteiro.

## 5. Proibições

- “Fonte: interna” sem caminho, owner ou data;
- nota de rodapé que contradiz o título principal;
- omitir denominador ou período para dar aparência de escala;
- usar “validado” porque o material está em `02-review/`;
- usar a nota como substituto de aprovação.
