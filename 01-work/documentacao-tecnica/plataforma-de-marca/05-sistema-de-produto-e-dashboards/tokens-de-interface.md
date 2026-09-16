---
titulo: Tokens de interface — HUB
status: rascunho / provisório / não aprovado
escopo: tokens compartilhados para produto, protótipo, dashboard e apresentação
owner: Design System + Produto — a confirmar
fontes:
  - ../03-identidade-visual/sistema-visual.md
  - ../03-identidade-visual/acessibilidade-e-contraste.md
  - ../04-sistema-de-apresentacoes/templates-de-deck.md
dependencias:
  - principios-de-interface.md
  - componentes-base.md
---

# Tokens de interface — HUB Plataforma de Marca

> **Status:** rascunho de trabalho / provisório / não aprovado  
> **Uso:** baseline para protótipos, dashboards e apresentações enquanto identidade, fontes e contraste passam por decisão.  
> **Importante:** valores abaixo são recomendações novas; não foram observados como tokens oficiais no repositório.

## 1. Evidência que informa, sem normatizar

As referências em `02-review/02-visao-plataforma/` repetem branco, quase-preto/navy, violeta intenso, ícones lineares e cards arredondados. `02-review/02-visao-plataforma/visuais/Visão geral.jpeg` acrescenta azul-petróleo e amarelo-lima. Os arquivos estão em revisão e a fonte de marca `12.03-brand-guidelines-claim-registry.md` está com status `hipotese`; portanto nenhum valor é tratado como oficial.

O conjunto visual fornecido pelo usuário acrescenta uma paleta candidata explicitamente rotulada: `#0D1322`, `#2B1433`, `#5A2D6E`, `#B23A6B`, `#E15A4F` e `#2A6A7E`. Esses valores devem ser tratados como referências de teste e reconciliados com os primitivos abaixo, sem substituir os tokens semânticos ou a validação de contraste.

## 2. Convenções

- Nomes semânticos (`bg`, `text`, `action`, `status`) devem ser usados por componentes; valores primitivos ficam centralizados.
- Contraste deve ser medido no par efetivamente usado, não inferido pelo nome do token.
- `brand-*` é direção provisória; `status-*` comunica estado e não identidade.
- Para apresentação, converter rem para pt/pixel conforme a ferramenta; não alterar a relação de hierarquia sem registrar exceção.

## 3. Tokens provisórios

### Cor — primitivos

| Token | Valor provisório | Intenção | Observação |
|---|---|---|---|
| `color.neutral.0` | `#FFFFFF` | superfície principal | confirmar para impressão e modo escuro |
| `color.neutral.50` | `#F8F7FB` | superfície suave | leve viés violeta; hipótese |
| `color.neutral.100` | `#F1EFF6` | hover/superfície secundária | testar em tabelas densas |
| `color.neutral.200` | `#E2DFEA` | borda/divisor | não usar como texto |
| `color.neutral.500` | `#6B6675` | ícone/metadado | validar contraste por contexto |
| `color.neutral.700` | `#3B3745` | texto secundário | alvo para texto normal em `neutral.0` |
| `color.neutral.900` | `#17151D` | texto principal | preferir a preto puro em superfícies claras |
| `color.brand.700` | `#4C1D95` | violeta escuro para texto/estado | recomendação para contraste |
| `color.brand.600` | `#6D28D9` | ação/ênfase | testar texto branco antes de uso amplo |
| `color.brand.500` | `#7C3AED` | acento de marca em elementos grandes | não usar sozinho para texto pequeno |
| `color.brand.100` | `#EDE9FE` | fundo de ação suave | usar com texto `brand.700` |
| `color.info.700` | `#075985` | informação/texto | azul acessível |
| `color.success.700` | `#166534` | sucesso/texto | combinar com ícone e label |
| `color.warning.700` | `#92400E` | alerta/texto | fundo claro, nunca amarelo claro como texto |
| `color.danger.700` | `#B91C1C` | erro/destrutivo | combinar com mensagem explícita |

### Cor — referência candidata desta rodada

| Token de referência | Valor observado | Papel provisório |
|---|---|---|
| `color.reference.navy` | `#0D1322` | base estrutural/fundo escuro |
| `color.reference.plum` | `#2B1433` | profundidade/superfície secundária |
| `color.reference.violet` | `#5A2D6E` | conexão/agrupamento |
| `color.reference.magenta` | `#B23A6B` | trajetória/energia |
| `color.reference.coral` | `#E15A4F` | ponto/ênfase controlada |
| `color.reference.teal` | `#2A6A7E` | conexão/informação/resultado |

Os tokens `reference.*` não devem ser usados como status semântico por inferência nem tratados como paleta final. A fonte visual é o conjunto de referências fornecido pelo usuário, registrado no [inventário de visuais](../99-referencias/inventario-de-visuais.md).

### Cor — papéis semânticos

| Token | Referência | Uso |
|---|---|---|
| `color.bg.canvas` | `neutral.0` | fundo principal |
| `color.bg.subtle` | `neutral.50` | agrupamento leve |
| `color.surface.card` | `neutral.0` | card padrão |
| `color.border.default` | `neutral.200` | borda/divisor |
| `color.text.primary` | `neutral.900` | leitura principal |
| `color.text.secondary` | `neutral.700` | apoio |
| `color.text.muted` | `neutral.500` | metadado; testar sempre |
| `color.action.primary` | `brand.600` | ação principal |
| `color.action.primaryText` | `neutral.0` | texto sobre ação; validar contraste |
| `color.focus.ring` | `brand.700` | foco visível |
| `color.status.success` | `success.700` | estado positivo |
| `color.status.warning` | `warning.700` | atenção |
| `color.status.danger` | `danger.700` | falha/risco |
| `color.status.info` | `info.700` | informação |

### Tipografia

Família recomendada provisoriamente: `Inter, ui-sans-serif, system-ui, -apple-system, sans-serif`, sujeita a licença, disponibilidade e decisão de marca. Usar peso e tamanho para hierarquia; não depender apenas de cor.

| Token | Tamanho / entrelinha | Peso | Uso |
|---|---:|---:|---|
| `type.display` | 40 / 48 px | 700 | hero ou capa; uma ocorrência focal |
| `type.h1` | 32 / 40 px | 700 | título de página/slide |
| `type.h2` | 24 / 32 px | 700 | seção |
| `type.h3` | 20 / 28 px | 650 | subseção/card destacado |
| `type.body` | 16 / 24 px | 400 | leitura padrão |
| `type.bodyStrong` | 16 / 24 px | 600 | ênfase curta |
| `type.small` | 14 / 20 px | 400 | apoio; não para conteúdo essencial isolado |
| `type.caption` | 12 / 16 px | 500 | fonte, unidade, timestamp; nunca esconder limitação |
| `type.numeric` | `body` ou `h2`, tabular | 600 | métricas; usar `font-variant-numeric: tabular-nums` |

### Espaçamento, raio e elevação

| Token | Valor | Uso |
|---|---:|---|
| `space.1` a `space.12` | `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96 px` | escala base 4 px com recorrência em 8 px |
| `radius.sm` | `6 px` | controle pequeno |
| `radius.md` | `10 px` | card/field |
| `radius.lg` | `16 px` | painel destacado |
| `radius.pill` | `999 px` | badge/tag; não para botão longo sem necessidade |
| `shadow.sm` | `0 1px 2px rgba(23,21,29,.08)` | elevação baixa |
| `shadow.md` | `0 8px 24px rgba(23,21,29,.12)` | painel sobreposto; usar com parcimônia |

### Grid e dimensões

- Base: 4 px; gutters usuais: 16 px mobile, 24 px desktop.
- Desktop: 12 colunas; tablet: 8; mobile: 4.
- Container: `max-width: 1200px` como hipótese inicial para produto; validar com conteúdo real.
- Altura mínima de controle: 44 px preferencial; nenhum controle crítico menor que 24 px.
- Não fixar altura de cards que contenham texto traduzível ou erro.

## 4. Componentes mínimos

## 4.1 Estados semânticos da inteligência

Para refletir o modelo aprovado, adicionar aos tokens semânticos, ainda provisórios:

| Papel | Semântica mínima |
|---|---|
| `evidence.level` | documental, observado, validado ou realizado, conforme o escopo |
| `confidence` | confiança ou qualidade do sinal, sempre acompanhada de explicação |
| `recommendation.status` | preparada, em revisão, aprovada, ajustada, recusada ou executada |
| `human.review` | revisão necessária, aprovada, contestada ou encerrada |
| `limitation` | lacuna, restrição, indisponibilidade ou validade expirada |
| `status.warning` / `status.blocked` | atenção ou impedimento, sempre com label e recuperação |

Esses tokens expressam semântica de produto e não definem a paleta final da marca. Fonte: [Especificação Mestra de Inteligência HUB](../../../03-approved/nucleo-inteligencia/especificacao-conceitual-inteligencia-plataforma/Especificacao_Mestra_Inteligencia_HUB%203.md).

### Card

`surface.card` + `border.default`, `radius.md`, padding `space.6`; sem sombra por padrão. Variante destacada usa uma única diferença de hierarquia e mantém heading, valor, unidade e período próximos.

### Tabela

Header com `text.primary`, fundo `bg.subtle`, alinhamento por tipo de dado, linhas com divisão sutil e estado vazio textual. Valores não devem ser distinguidos apenas por cor.

### Badge/status

Fundo claro + texto escuro + label explícito + ícone opcional. Ex.: `success` não pode ser apenas um ponto verde.

### Foco e interação

Foco com anel de pelo menos 2 px, visível contra as duas superfícies adjacentes. Hover não pode ser o único feedback; incluir estado de foco, pressionado, desabilitado, carregando, erro e sucesso quando aplicável.

## 5. Regras de acessibilidade e conteúdo

- Texto normal: mínimo 4,5:1; texto grande/UI/gráficos relevantes: mínimo 3:1 quando aplicável.
- Validar pares `action.primary`/`action.primaryText`, `text.muted`/`bg.canvas` e cada estado antes de implementar.
- Cor é redundante com texto, ícone, forma, padrão ou posição.
- Números exibem unidade, período e direção (`+`, `-`, estável) em texto.
- Alt/texto alternativo de gráfico: resumo da conclusão + acesso aos dados ou descrição detalhada.
- Formulários: label visível, erro associado, instrução de formato antes do campo e mensagem no padrão “o que aconteceu + como corrigir”.

## 6. Pendências e riscos

- Os hex são hipóteses não amostradas de arquivo-mestre; não representam uma paleta aprovada.
- O violeta é recorrente nas referências, mas a variante teal/lima demonstra conflito de direção.
- Inter, pesos, fallback e eventual serif não estão confirmados por licença ou identidade.
- Modo escuro, impressão, projetor, daltonismo, zoom de 200% e dados densos ainda exigem protótipo e teste.
- Tokens de status podem divergir da futura identidade; preservar semântica mesmo que a marca mude.
