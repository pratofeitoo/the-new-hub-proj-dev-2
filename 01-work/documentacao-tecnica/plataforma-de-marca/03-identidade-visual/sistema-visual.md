# Sistema visual mínimo — HUB Plataforma de Marca

> **Status:** rascunho de trabalho / provisório / não aprovado  
> **Escopo:** referências visuais, princípios e recomendações mínimas para apresentações, produto e dashboards.  
> **Regra de maturidade:** nada neste documento autoriza publicação, uso de logotipo, claim, asset ou paleta como identidade oficial.

## 1. Como ler este documento

Este documento separa deliberadamente:

- **Observado:** descrição de materiais existentes e de seu status no repositório. Não é regra vigente.
- **Recomendado:** hipótese de sistema mínimo para prototipar e alinhar os próximos documentos. Precisa de validação humana, contraste, licenças e decisão de arquitetura de marca.
- **Pendente:** decisão que não deve ser resolvida por inferência visual.

## 2. Referências inventariadas

| Evidência | O que foi observado | Status / limite |
|---|---|---|
| `02-review/02-visao-plataforma/Exemplo de Deck/visuais/ChatGPT Image 29 de ago. de 2026, 12_09_50.png` | Montagem de 12 slides; capa escura com logo HUB em branco, rede luminosa violeta e texto claro; interiores claros; marcador numérico violeta; diagramas radiais, círculos, linhas e ícones lineares; cards com cantos arredondados; violeta como acento recorrente. | `02-review`, em revisão; referência visual, não template aprovado. |
| `02-review/01-mvps/MVP - Estratégia e Dados/visuais/ChatGPT Image 29 de ago. de 2026, 12_22_47.png` | Mesmo eixo violeta/escuro, com cards de dashboard, ícones lineares, faixas de rodapé violeta e hierarquia por etapas. | `02-review`, caso de validação congelado para gate; não é especificação de produto. |
| `02-review/02-visao-plataforma/visuais/Visão geral.jpeg` | Variante cromática com azul-petróleo escuro, amarelo-lima, navy, cartões claros e ilustrações lineares; título serifado de alto contraste. | `02-review`; conflita com a referência violeta e não deve ser misturada automaticamente. |
| `02-review/01-mvps/README.md` e `02-review/02-visao-plataforma/README.md` | Os dois conjuntos são descritos como congelados para gate, com saída aprovada ou rejeitada. | Evidência de maturidade e localização, não aprovação visual. |
| `05-resources/inbox/Plataforma HUB/README.md` | `visuais/` reúne imagens, diagramas e referências; `99-arquivo/` preserva histórico. | A própria organização exige ligação entre visual, fonte original e cartão de processamento. |
| `05-resources/inbox/Plataforma HUB/99-arquivo/Rascunhos iniciais/ChatGPT Image 29 de ago. de 2026, 12_47_53.png` | Moodboard “HUB / SISTEMA VIVO”: wordmark HUB, símbolo de círculos sobrepostos, navy, teal, violeta, coral/vermelho, laranja/amarelo, Sora para títulos, Inter para corpo, ícones lineares, dashboards, aplicações e fotografia humana. | Rascunho visual histórico; baseline provisório para prototipagem, sem aprovação de logo, paleta, fontes ou assets. Ver [inventário](../99-referencias/inventario-de-visuais.md). |
| `05-resources/inbox/Plataforma HUB/99-arquivo/Rascunhos iniciais/Decks atualizados/Apresentação - NESST.pdf` | Deck de 64 páginas em 16:9; narrativa de pessoas, oportunidade, performance, conexão, dados e impacto; composição editorial com creme, navy, teal, terracota/laranja e fotografias recortadas. | Referência histórica narrativa e estética; não é template vigente, prova factual ou identidade aprovada. Ver [inventário](../99-referencias/inventario-de-visuais.md). |
| `01-work/pesquisa-e-confianca/documentos-oficiais/12-comercial-GTM/12.03-brand-guidelines-claim-registry.md` | Registro de marca/claims está com `status: hipotese`, sem dono, data de aprovação ou PDF. | Não há diretriz externa aprovada disponível nesta evidência. |
| `01-work/documentacao-tecnica/plataforma-de-marca/plano-de-implementacao-plataforma-de-marca.md` | Declara que ainda não existe sistema integrado aprovado para logo, paleta, tipografia, grid, templates, tokens ou dashboards. | Fonte de planejamento; confirma o caráter provisório desta entrega. |

### 2.1 Observações não convertidas em regra

Não foram encontrados, nesta leitura, valores oficiais de cor, arquivos-mestre de logotipo, nomes/licenças confirmados de fontes, biblioteca de ícones, regras de fotografia, tokens implementados ou matriz de contraste aprovada. A aparência recorrente das imagens é uma pista de direção, não uma autorização para copiar ou fixar valores. O moodboard “HUB / SISTEMA VIVO” e o deck NESST apresentam direções parcialmente diferentes; para prototipagem, o primeiro será o baseline visual provisório e o segundo uma referência narrativa/editorial complementar.

## 3. Princípios recomendados

## 3.1 Implicações visuais do modelo de inteligência

As superfícies da HUB devem tornar legíveis a origem do sinal, o nível de evidência, a confiança, a limitação, o responsável e o ponto de aprovação humana. Recomendações, alertas e resultados precisam de estados explícitos e rastreáveis; nenhuma composição visual deve sugerir certeza, causalidade, autonomia ou impacto validado apenas por cor, escala, destaque ou elevação.

Fonte: [Especificação Mestra de Inteligência HUB](../../../03-approved/nucleo-inteligencia/especificacao-conceitual-inteligencia-plataforma/Especificacao_Mestra_Inteligencia_HUB%203.md).

1. **Clareza antes de ornamentação:** cada elemento visual deve ajudar a orientar, agrupar, comparar, explicar ou reforçar a marca.
2. **Hierarquia em três níveis:** uma mensagem primária, suporte secundário e metadados/limitações terciários. Cor nunca deve ser o único sinal.
3. **Alinhamento e ritmo:** usar eixos compartilhados, grid consistente e espaçamento previsível; evitar ajustes ópticos não documentados.
4. **Dados honestos:** não usar gradientes, 3D, espessura de linha, ícones ou cor para sugerir causalidade, escala ou certeza não sustentada.
5. **Sistema único, contextos diferentes:** apresentação, produto e dashboard compartilham semântica e tokens, mas podem variar densidade e composição.
6. **Acessibilidade desde o início:** contraste, zoom, foco, leitura por tecnologia assistiva e redundância semântica são requisitos do componente, não acabamento.

## 4. Recomendação mínima por elemento

### Cor

Usar os tokens provisórios em [tokens-de-interface.md](../05-sistema-de-produto-e-dashboards/tokens-de-interface.md). A direção de prototipagem atual usa navy como base estrutural e teal, violeta, coral/vermelho e laranja/amarelo como acentos; neutros sustentam a leitura. Azul, verde, âmbar e vermelho devem continuar semânticos ou explicitamente legendados. Os valores do moodboard não são ainda uma paleta aprovada nem substituem testes de contraste.

### Tipografia

Usar uma família sans-serif de interface com boa leitura em português e numerais tabulares quando houver métrica. A hipótese observada no moodboard é `Sora` para títulos e `Inter` para corpo; confirmar licença, disponibilidade, pesos e coerência antes de fixá-las. Reservar uma eventual serif display para títulos editoriais somente depois de confirmar fonte, licença e coerência entre produto e apresentações. Ver escala provisória nos tokens.

### Grid, composição e espaçamento

- Base de 4 px; unidades recorrentes de 8 px.
- Apresentação 16:9: margem mínima de 48 px e 12 colunas como ponto de partida; ajustar após teste com conteúdo real.
- Produto: container fluido com max-width definido pelo produto; 12 colunas em desktop, 4 em mobile.
- Um eixo dominante por superfície; diagramas radiais só quando a relação circular for parte do significado.
- Não comprimir texto ou tabela para preservar um número arbitrário de colunas.

### Cards e superfícies

- Card padrão: superfície neutra, borda sutil, raio moderado e sombra baixa ou nenhuma.
- Card de destaque: uma diferença por vez — preenchimento, borda ou escala — preservando texto legível.
- Não usar card como decoração em volta de cada item de uma lista; proximidade e divisores leves podem bastar.

### Tabelas e gráficos

Aplicar as regras específicas de [regras-de-graficos-e-tabelas.md](../04-sistema-de-apresentacoes/regras-de-graficos-e-tabelas.md). Toda visualização relevante deve carregar fonte, período, unidade, definição, status de maturidade e limitação.

### Imagem e iconografia

- Preferir imagens que mostrem pessoas, contexto de trabalho, conexão e consequência observável; evitar banco genérico sem contexto.
- Registrar fonte, autor, licença, data, transformações e uso permitido para cada asset.
- Ícones devem ser lineares, simples, com stroke e bounding box consistentes. Ícone não substitui label em ação crítica.
- Diagramas de rede devem limitar nós, cruzamentos e cores para manter leitura; usar legenda e descrição textual.

## 5. Padrão de proveniência

Cada asset ou referência visual deve registrar: `asset_id`, caminho original, tipo, autor/criador, fonte, licença/termo de uso, data de obtenção, transformação aplicada, contexto de uso, status (`histórico`, `ilustrativo`, `em revisão`, `aprovado`) e owner. Sem esses campos, o material pode inspirar análise, mas não deve entrar em publicação.

## 6. Acessibilidade e contraste

- Texto normal: alvo mínimo WCAG AA de 4,5:1; texto grande e elementos gráficos/UI: mínimo de 3:1 quando aplicável.
- Não usar violeta, amarelo ou verde claro como texto pequeno sobre branco sem teste; não usar cinza claro para corpo ou placeholder.
- Status deve combinar cor com texto, ícone, padrão ou posição.
- Foco visível, alvos de toque preferencialmente 44 × 44 px, reflow em 200% e suporte a `prefers-reduced-motion` devem ser parte dos componentes.
- Gráficos complexos precisam de título/alt curto e resumo textual; não depender da leitura de cor ou tooltip.

## 7. Decisões de identidade ainda abertas

1. Como formalizar a arquitetura entre HUB, Plataforma HUB, HUB Negócios, Instituto HUB, CAOS e Selo.
2. Se a direção provisória navy + teal/violeta/coral/laranja será aprovada, ajustada ou substituída.
3. Logo, assinaturas, área de proteção, usos permitidos e arquivo-mestre.
4. Família tipográfica, licenças, pesos e eventual papel de uma serif display.
5. Personalidade visual de produtos, programas, parceiros e white-label.
6. Owner de marca, gate de aprovação e registro de versões.
7. Quais elementos do deck NESST serão reutilizáveis como narrativa e quais devem permanecer apenas históricos.

## 8. Próxima validação

Antes de promover qualquer regra: obter os ativos/fontes oficiais, testar os pares de contraste da direção navy + teal/violeta/coral/laranja, aplicar os tokens a um slide, um dashboard e uma tabela reais, classificar o NESST e registrar a decisão no controle do projeto. Até lá, este documento permanece hipótese de trabalho.
