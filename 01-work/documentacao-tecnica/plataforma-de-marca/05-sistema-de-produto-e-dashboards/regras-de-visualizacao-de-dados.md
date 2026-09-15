---
titulo: Regras de visualização de dados — HUB
status: rascunho / provisório / não aprovado
escopo: seleção, anotação e proveniência de gráficos, tabelas e indicadores
owner: Dados/Inteligência + Design — a confirmar
fontes:
  - hierarquia-de-metricas.md
  - ../02-identidade-verbal/regras-para-evidencia-e-incerteza.md
  - ../04-sistema-de-apresentacoes/regras-de-graficos-e-tabelas.md
  - ../03-identidade-visual/acessibilidade-e-contraste.md
dependencias:
  - tokens-de-interface.md
---

# Regras de visualização de dados — HUB

> Regras provisórias para tornar dados comparáveis, interpretáveis e auditáveis. A forma visual nunca aumenta o nível de evidência da fonte.

## 1. Antes de escolher o gráfico

Responder: qual pergunta está sendo feita, qual ação pode resultar, qual é a unidade, qual é a coorte, que comparação é válida e qual limitação deve permanecer visível?

## 2. Seleção orientativa

| Pergunta | Visual preferencial | Cuidados |
|---|---|---|
| evolução no tempo | linha ou small multiples | mostrar intervalo e pontos faltantes |
| comparação entre categorias | barras ordenadas | começar zero quando magnitude for comparada |
| distribuição | histograma, boxplot ou tabela de quantis | informar tamanho da amostra |
| composição | barras empilhadas ou tabela | evitar pizza com muitas partes |
| relação entre variáveis | dispersão | não sugerir causalidade sem desenho adequado |
| status operacional | tabela, lista ou matriz | usar texto e ícone além de cor |
| valor único | indicador com contexto | incluir unidade, período, baseline e status |

## 3. Proveniência obrigatória

Cada visual relevante deve exibir ou disponibilizar:

- fonte e link/caminho localizável;
- período e timezone;
- definição, unidade e denominador;
- método de agregação ou transformação;
- coorte e filtros;
- nível de evidência e status de maturidade;
- owner e data de atualização;
- limitação, ausência ou ressalva;
- acesso aos dados ou descrição detalhada quando necessário.

## 4. Integridade visual

- não truncar eixo para exagerar diferença sem indicação explícita;
- não suavizar, interpolar ou remover outliers sem explicar método;
- não comparar períodos, grupos ou unidades incompatíveis;
- indicar dados faltantes, estimados, projetados e observados;
- manter legenda, título, unidade e fonte associados ao visual;
- não usar vermelho/verde como único sentido de melhora ou piora;
- usar cor de marca para hierarquia, não para afirmar qualidade ou aprovação.

## 5. Alternativa textual

O resumo textual deve dizer o que o visual permite concluir, em qual escopo e com qual limitação. Para gráficos complexos, oferecer dados tabulares ou descrição detalhada equivalente.

Modelo: “No período [x], [grupo/coorte] apresentou [resultado] na unidade [y]. A comparação usa [baseline/método] e não permite concluir [limite]. Fonte: [fonte], status [status].”

## 6. Checklist

- [ ] pergunta/decisão definida;
- [ ] tipo visual adequado;
- [ ] eixo, unidade e período visíveis;
- [ ] fonte, método e limitação presentes;
- [ ] ausência e estimativa identificadas;
- [ ] resumo textual disponível;
- [ ] contraste e não dependência de cor verificados;
- [ ] claim resultante revisado contra o registry.
