# Regras provisórias de gráficos e tabelas

> **Status:** rascunho de trabalho / provisório / não aprovado  
> **Escopo:** apresentações, protótipos e dashboards que reutilizem o sistema visual da Plataforma de Marca HUB.  
> **Dependência:** [tokens-de-interface.md](../05-sistema-de-produto-e-dashboards/tokens-de-interface.md).

## 1. Evidência observada

Nos materiais em `02-review/02-visao-plataforma/` e `02-review/01-mvps/` aparecem: diagramas radiais e de fluxo, ícones lineares, sequências numeradas, faixas de conclusão violeta, cards comparáveis e visualizações de rede. A organização também contém planilhas/modelos de indicadores e imagens de apoio. Esses materiais estão em revisão ou são históricos; não são templates nem regras aprovadas.

## 2. Princípios recomendados

1. **Pergunta antes do gráfico:** declarar a comparação ou decisão que o visual deve suportar.
2. **Posição antes de cor:** ordenar eixos e pontos para que a leitura sobreviva à escala de cinza.
3. **Uma mensagem principal:** destacar no máximo uma conclusão por visual; anotar exceções sem criar chartjunk.
4. **Contexto junto do dado:** título, unidade, período, fonte, definição, status e limitações permanecem visíveis.
5. **Incerteza legível:** projetado, ilustrativo, influenciado, realizado e validado não podem compartilhar o mesmo tratamento semântico.
6. **Acessível por redundância:** cor pode apoiar, mas nunca ser a única codificação.

## 3. Escolha do tipo de visual

| Pergunta | Visual recomendado | Evitar |
|---|---|---|
| Como algo muda no tempo? | linha ou coluna com eixo temporal explícito | eixo truncado que exagera variação |
| Como categorias se comparam? | barras ordenadas, horizontais quando labels são longos | pizza com muitas categorias |
| Qual é a composição? | barras empilhadas com poucas partes e total explícito | 3D ou empilhamento que impede comparação |
| Qual é o fluxo? | etapas numeradas com setas e estados | flechas cruzadas sem legenda |
| Quais entidades se relacionam? | rede simplificada, matriz ou tabela relacional | “teia” ornamental com nós sem definição |
| Qual é a distribuição? | dot plot, box plot ou histograma com unidade | média isolada quando dispersão importa |
| Qual é o KPI? | número, delta, período e definição; sparklines só como apoio | velocímetro/gauge decorativo |

Diagramas radiais podem ser usados quando o centro e as relações circulares são parte da tese. Caso contrário, preferir uma estrutura linear ou matricial mais fácil de comparar.

## 4. Escala, cor e anotação

- Eixo quantitativo começa em zero para barras; qualquer exceção deve ser marcada no eixo e na nota.
- Não usar gradiente para representar uma ordem sem definir escala e extremos.
- Série categórica usa uma paleta limitada e legendada. Série semântica usa os tokens `success`, `warning`, `danger` e `info`, com texto/ícone auxiliar.
- Violeta destaca uma série ou conclusão, não todas as séries ao mesmo tempo.
- Rótulos devem incluir unidade e arredondamento. Separador decimal e moeda seguem pt-BR quando o público for brasileiro.
- Anotação deve dizer o que mudou, quando e por quê; não substituir título descritivo.
- Evitar linhas de grade pesadas, bordas em todos os elementos e sombras que pareçam profundidade de dados.

## 5. Tabelas

### Estrutura mínima

- Título/`caption` com propósito da tabela.
- Cabeçalho com nomes completos e unidade; `scope="col"` ou equivalente na implementação.
- Primeira coluna identifica entidade/linha; números alinhados à direita ou por separador decimal.
- Ordenação indicada por texto/ícone e anunciada para tecnologia assistiva.
- Totais e subtotais têm hierarquia tipográfica e posição consistente.
- Estado vazio, ausência, não aplicável e dado não validado têm rótulos distintos.

### Densidade

Tabela para decisão executiva: poucas colunas, definição em notas. Tabela operacional: filtros, paginação e exportação preservam cabeçalho, unidade, período e fonte. Não reduzir fonte abaixo do token `type.caption` para caber mais dados; dividir ou permitir scroll/reflow.

### Cor e estado

Não colorir uma célula sem legenda e sem texto. Se a cor representar risco, incluir label como `alto`, `médio`, `baixo` e ordem semântica. Destaque de linha deve manter contraste e não apagar o foco de teclado.

## 6. Proveniência obrigatória

Cada gráfico/tabela publicado ou apresentado deve registrar, visivelmente ou em nota próxima:

| Campo | Conteúdo mínimo |
|---|---|
| Fonte | arquivo, sistema, pesquisa ou pessoa responsável |
| Período | data inicial/final ou timestamp de corte |
| Definição | o que entra e não entra no indicador |
| Unidade | pessoas, R$, %, contagem, horas etc. |
| Status | ilustrativo, hipótese, em revisão, validado ou aprovado |
| Método | cálculo, filtro, amostra ou transformação relevante |
| Limitação | cobertura, causalidade, estimativa, atraso ou viés conhecido |
| Owner | responsável por atualizar e responder dúvidas |

Valores de ROI, impacto ou resultado não devem ser mostrados como fato realizado quando a própria fonte os classifica como premissa, influenciado, ilustrativo ou pendente de aprovação.

## 7. Acessibilidade e conteúdo

- Contraste mínimo: 4,5:1 para texto normal; 3:1 para texto grande e elementos gráficos/UI quando aplicável.
- Fornecer descrição textual da conclusão e, para visual complexo, dados tabulares ou `<details>` equivalente.
- Usar títulos descritivos, não apenas “Resultados” ou “Dashboard”.
- Não usar tooltip como única forma de acesso a valor, unidade ou definição.
- Respeitar zoom de 200%, reflow e leitura sequencial; em slides, manter tamanho mínimo testado no contexto real de projeção.
- Legenda e rótulos devem ser compreensíveis fora do contexto da cor. Padrões, símbolos e texto sustentam a diferença.
- Tabelas devem usar caption, cabeçalhos associados e resumo quando houver múltiplos níveis.

## 8. Checklist antes de revisão humana

- [ ] A pergunta e a conclusão principal estão explícitas.
- [ ] O tipo de gráfico é proporcional ao dado.
- [ ] Escala, unidade, período e arredondamento estão visíveis.
- [ ] Fonte, status, método, owner e limitação estão registrados.
- [ ] O visual continua compreensível em escala de cinza.
- [ ] Cor não é o único sinal.
- [ ] Contraste foi medido nos pares reais.
- [ ] Há alternativa textual/dados para tecnologia assistiva.
- [ ] Nenhuma projeção ou hipótese é rotulada como resultado validado.
- [ ] A composição não usa decoração para sugerir precisão, causalidade ou escala.

## 9. Decisões pendentes

Escolher a paleta oficial; definir sistema de status e maturidade; validar tipografia e tamanho mínimo para decks/projetores; nomear owner de cada família de indicadores; e aprovar quais fontes podem ser citadas publicamente. Até essas decisões, as regras são uma base técnica de prototipação, não uma norma de publicação.
