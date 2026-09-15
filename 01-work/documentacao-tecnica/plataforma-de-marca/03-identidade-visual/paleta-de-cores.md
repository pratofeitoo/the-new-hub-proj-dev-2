---
titulo: Paleta de cores — HUB
status: rascunho / provisório / não aprovado
escopo: direção cromática para protótipos, apresentações, produto e dashboards
owner: Identidade visual — a confirmar
fontes:
  - sistema-visual.md
  - ../99-referencias/inventario-de-visuais.md
  - ../05-sistema-de-produto-e-dashboards/tokens-de-interface.md
---

# Paleta de cores — HUB

> Os valores abaixo são uma direção provisória de prototipagem derivada dos rascunhos. Não constituem paleta oficial nem dispensam testes de contraste.

## 1. Direção cromática

O baseline de trabalho usa navy como estrutura e cores vivas como acentos de conexão, categoria ou estado:

| Função | Direção provisória | Uso recomendado |
|---|---|---|
| Estrutura | navy / azul muito escuro | texto forte, navegação, capas, superfícies institucionais |
| Superfície | creme, branco e neutros claros | fundos e áreas de leitura |
| Conexão | teal | destaque de relações, pessoas ou caminhos |
| Ênfase | violeta | ação, foco, agrupamento ou acento de marca |
| Energia | coral/vermelho | categoria ou ênfase controlada; não usar como status semântico por padrão |
| Oportunidade | laranja/amarelo | categoria, chamada ou ponto de atenção; testar contraste |
| Estado | verde, âmbar, vermelho | somente com semântica definida e rótulo textual |

## 2. Tokens provisórios

Os componentes devem consumir tokens semânticos, não hex diretamente:

```yaml
color:
  surface: neutral.0
  surface-inverse: navy.900
  text: navy.900
  text-on-dark: neutral.0
  action: violet.700
  connection: teal.600
  category-warm: orange.500
  status-success: green.700
  status-warning: amber.700
  status-danger: red.700
```

Os valores exatos permanecem no documento de tokens e precisam de contraste medido no par real.

## 3. Regras de combinação

- manter uma base neutra e limitar acentos fortes por superfície;
- não usar todas as cores da direção simultaneamente sem hierarquia;
- reservar cores de status para significado operacional, nunca para decoração;
- usar texto, ícone, padrão ou posição junto da cor;
- em gráficos, documentar legenda, unidade, período e significado de cada cor;
- em identidades derivadas, alterar no máximo acentos ou aplicação até existir aprovação própria.

## 4. Combinações a evitar

- texto pequeno amarelo, verde claro, coral ou violeta sobre branco sem teste;
- navy sobre navy ou texto claro sobre teal/coral sem contraste medido;
- vermelho como sinônimo de “produto”, “impacto” ou “destaque” sem significado definido;
- gradientes ou cores saturadas para sugerir escala, causalidade ou certeza;
- paleta NESST e paleta do moodboard misturadas como se fossem uma única especificação.

## 5. Pendências

- extrair valores finais de uma fonte-mestre, se existir;
- testar contraste em texto, controles, gráficos e estados;
- decidir nomes semânticos e escala de cada cor;
- documentar versões claro/escuro e impressão;
- aprovar a paleta e suas regras de derivação.
