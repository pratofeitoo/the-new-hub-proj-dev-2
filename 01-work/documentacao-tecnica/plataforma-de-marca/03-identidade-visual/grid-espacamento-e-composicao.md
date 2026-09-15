---
titulo: Grid, espaçamento e composição — HUB
status: rascunho / provisório / não aprovado
escopo: estrutura de layout para apresentações, produto e dashboards
owner: Identidade visual — a confirmar
fontes:
  - sistema-visual.md
  - ../99-referencias/inventario-de-visuais.md
---

# Grid, espaçamento e composição — HUB

> Regras de composição para prototipagem. Não substituem especificações de produto, template aprovado ou teste com conteúdo real.

## 1. Ritmo espacial

- unidade base: 4 px;
- intervalos recorrentes: 8, 16, 24, 32 e 48 px;
- usar espaçamento para demonstrar relação e hierarquia, não apenas para preencher espaço;
- manter uma escala consistente dentro de cada artefato;
- registrar exceções ópticas quando um elemento precisar de ajuste visual.

## 2. Apresentações 16:9

Baseline de trabalho:

- proporção 16:9;
- margem mínima de 48 px em telas grandes;
- 12 colunas como ponto de partida;
- gutters de 16–24 px;
- uma mensagem principal por slide;
- rodapé reservado para fonte, período, status e limitação quando necessário.

Não reduzir texto, fonte ou contraste apenas para preservar um número fixo de colunas.

## 3. Produto e dashboard

| Contexto | Estrutura inicial |
|---|---|
| Desktop | container fluido, máximo definido pelo produto, 12 colunas |
| Tablet | 8 colunas ou composição adaptada por densidade |
| Mobile | 4 colunas, uma sequência vertical clara |
| Dashboard operacional | densidade maior, filtros e estados próximos dos dados |
| Dashboard executivo | menos elementos, hierarquia de decisão e contexto da métrica |

## 4. Princípios de composição

1. Definir um eixo dominante por superfície.
2. Colocar a mensagem, a ação ou a decisão no primeiro nível de leitura.
3. Usar repetição de alinhamentos para criar ritmo.
4. Agrupar itens relacionados por proximidade antes de recorrer a cards.
5. Usar círculos, linhas e redes apenas quando ajudarem a explicar conexão ou fluxo.
6. Preservar espaço para fonte, legenda, status e limitação.
7. Em identidades derivadas, manter a estrutura HUB e alterar somente acentos ou aplicação de forma suave.

## 5. Composições a evitar

- excesso de cards independentes sem hierarquia;
- diagramas radiais usados para qualquer relação;
- texto sobreposto a fotografia sem área de leitura;
- gráficos sem espaço para unidade, período ou fonte;
- layouts que funcionam apenas em uma resolução;
- simetria forçada que diminui clareza ou legibilidade.

## 6. Pendências

- testar o grid em um slide, dashboard e tabela reais;
- definir templates por contexto;
- documentar regras de impressão e exportação;
- definir pontos de quebra responsivos;
- confirmar margens, gutters e tokens com Produto e Apresentações.
