---
titulo: Componentes-base — HUB
status: rascunho / provisório / não aprovado
escopo: inventário e contrato comportamental de componentes compartilhados
owner: Design System + Produto — a confirmar
fontes:
  - tokens-de-interface.md
  - principios-de-interface.md
  - ../03-identidade-visual/acessibilidade-e-contraste.md
dependencias:
  - estados-e-feedback.md
  - ../06-governanca-e-publicacao/status-e-rotulos-de-maturidade.md
---

# Componentes-base — HUB

> Catálogo provisório para alinhar protótipos, dashboards e futuras interfaces. Os nomes e valores são hipóteses até validação técnica e de acessibilidade.

## 1. Contrato comum

Todo componente deve declarar: propósito, conteúdo obrigatório, estados, interação por teclado, foco, responsividade, mensagem de erro, alternativa textual quando aplicável e fonte/limitação quando exibir evidência.

## 2. Componentes iniciais

| Componente | Uso | Conteúdo obrigatório | Estados mínimos |
|---|---|---|---|
| `Button` | ação explícita | verbo + objeto | default, hover, focus, pressed, disabled, loading |
| `Link` | navegação ou fonte | destino compreensível | default, visited, focus, unavailable |
| `Input` | entrada curta | label visível, instrução e unidade | empty, filled, focus, error, disabled |
| `Select` / `Combobox` | escolha de escopo | label, opções e valor atual | closed, open, focus, error, loading |
| `FilterChip` | filtro ativo | dimensão + valor | active, removable, focus |
| `Card` | agrupar uma decisão/evidência | título, conteúdo e status | default, selected, loading, empty |
| `Badge` / `StatusLabel` | maturidade ou estado | palavra explícita | cada estado com texto e sinal não cromático |
| `Alert` | comunicar risco ou resultado | o que ocorreu + ação | info, success, warning, danger |
| `Modal` | tarefa interrompível | título, contexto, fechar e ação | opening, open, error, closing |
| `Table` | comparação estruturada | cabeçalhos, unidade e ordenação | loading, empty, populated, error |
| `MetricCard` | destacar indicador | valor, definição, período, unidade e status | loading, no-data, observed, validated |
| `ChartFrame` | conter visualização | título-pergunta, resumo, fonte e limitação | loading, empty, error, populated |
| `Pagination` | navegar coleção | posição atual e total | first, middle, last, loading |

## 3. Regras de composição

- Um `MetricCard` não deve exibir valor sem unidade, período ou status quando esses campos forem relevantes.
- `Badge` não substitui explicação de estado e não deve sugerir certificação, autoridade ou aprovação.
- `Table` deve manter cabeçalho associado às células e oferecer alternativa para ordenação e paginação.
- `ChartFrame` deve incluir resumo textual e acesso aos dados ou descrição detalhada.
- Cards não devem esconder limitações em tooltip quando a limitação for necessária para interpretar o dado.
- Modal é para decisão delimitada; não usar para esconder navegação ou contexto essencial.

## 4. Critério de pronto para protótipo

- anatomia desenhada;
- estados cobertos;
- conteúdo real ou explicitamente fictício;
- interação de teclado descrita;
- contraste pendente ou verificado registrado;
- owner e fonte definidos;
- comportamento responsivo indicado;
- risco de interpretação documentado.
