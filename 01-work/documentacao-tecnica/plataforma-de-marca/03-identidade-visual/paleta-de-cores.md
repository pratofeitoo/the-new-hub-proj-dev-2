---
titulo: Paleta de cores — HUB
status: selecionada pelo usuário / especificação operacional pendente
escopo: direção cromática para protótipos, apresentações, produto e dashboards
owner: Identidade visual — a confirmar
fontes:
  - sistema-visual.md
  - ../99-referencias/inventario-de-visuais.md
  - ../05-sistema-de-produto-e-dashboards/tokens-de-interface.md
---

# Paleta de cores — HUB

> A paleta abaixo foi selecionada pelo usuário a partir das imagens de referência fornecidas. A seleção visual está definida; a especificação operacional, os testes de contraste e os direitos de uso continuam pendentes.

## 1. Direção cromática

O sistema selecionado usa navy como estrutura e cores vivas como acentos de conexão, categoria ou estado:

| Função | Cor selecionada | Uso recomendado |
|---|---|---|
| Estrutura | navy / azul muito escuro | texto forte, navegação, capas, superfícies institucionais |
| Superfície | creme, branco e neutros claros | fundos e áreas de leitura |
| Conexão | teal | destaque de relações, pessoas ou caminhos |
| Ênfase | violeta | ação, foco, agrupamento ou acento de marca |
| Energia | coral/vermelho | categoria ou ênfase controlada; não usar como status semântico por padrão |
| Oportunidade | laranja/amarelo | categoria, chamada ou ponto de atenção; testar contraste |
| Estado | verde, âmbar, vermelho | somente com semântica definida e rótulo textual |

## 2. Tokens de implementação

## 2.1 Paleta observada nas imagens de referência

A imagem [WhatsApp (5)](../99-referencias/WhatsApp%20Image%202026-08-29%20at%2012.47.42%20(5).jpeg) apresenta a paleta explicitamente rotulada abaixo. Esses valores passam a ser a paleta cromática selecionada para a identidade visual HUB:

| Cor selecionada | Hex definido na referência | Papel no sistema |
|---|---|---|
| Navy profundo | `#0D1322` | base estrutural e fundo escuro |
| Ameixa escura | `#2B1433` | profundidade e superfície secundária |
| Violeta | `#5A2D6E` | conexão, agrupamento e acento |
| Magenta | `#B23A6B` | trajetória e energia de rede |
| Coral/vermelho | `#E15A4F` | ponto, ação ou ênfase controlada |
| Teal | `#2A6A7E` | conexão, informação ou resultado |

Os valores acima são a seleção cromática registrada a partir da imagem fornecida. Ainda precisam ser aplicados em tokens de runtime, testados nos pares reais de contraste e documentados para impressão, estados e superfícies antes da publicação.

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

Os valores exatos permanecem neste documento e no documento de tokens; todos os pares precisam de contraste medido no contexto real.

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

## 5. Pendências operacionais

- testar contraste em texto, controles, gráficos e estados;
- decidir nomes semânticos e escala de cada cor;
- documentar versões claro/escuro e impressão;
- confirmar arquivo-mestre, ownership e direitos de uso;
- registrar a paleta selecionada no sistema de tokens de runtime.
