---
status: em-revisao
---

# Análise — Matriz de Integração

## Escopo e estrutura

Arquivo analisado: `01-tabs-csv/13_Matriz_Integracao/13_Matriz_Integracao.csv`.

A aba contém uma matriz de integração entre **12 famílias de indicador** e oito vertentes funcionais: Pessoas, Empresas/RH, Compras, Entidades, Marketing, Produto, Financeiro e Dados/IA. O símbolo `●` indica participação principal da vertente na família; `○` indica participação complementar. Cada linha também define um **nó central**, um **output compartilhado** e uma regra explícita para evitar dupla contagem.

As famílias cobertas são: Prontidão e capacidades; Matching e oportunidades; Jornadas e desenvolvimento; Produtividade; Retenção; Compras e fornecedores; Marketing e pipeline; Entidade e associados; Risco; Receita recorrente HUB; Impacto financeiro cliente; Qualidade e confiança.

## Achados principais

1. **A matriz funciona como camada de integração semântica.** Ela não cria novos indicadores; organiza como a mesma evidência pode alimentar múltiplas visões, preservando uma regra financeira única e deduplicada.
2. **Há forte reutilização de evidência.** Dados de Pessoas, Empresas/RH, Entidades, Produto e Dados/IA aparecem em muitas famílias, sugerindo que são fontes transversais e não silos independentes.
3. **Os nós centrais são a unidade correta de consolidação.** Competência, Match, Jornada, Indicador de negócio, Vínculo, Fornecedor/contrato, Campanha/oportunidade, Entidade/vínculo, Risco/controle, Contrato/transação, Valor financeiro e Consentimento/modelo devem funcionar como chaves de ligação antes de qualquer agregação.
4. **A dimensão financeira exige hierarquia.** MRR/ARR/NRR, receita, margem, saving, custo operacional, risco esperado, perda realizada e ROI/payback são outputs relacionados, mas não devem ser somados como se fossem medidas independentes.
5. **A qualidade e a confiança são transversais, porém não são benefício financeiro por si só.** A própria matriz determina que qualidade isolada não seja monetizada.

## Reuso de famílias e outputs compartilhados

| Família | Núcleo reutilizável | Output compartilhado | Regra de consolidação |
|---|---|---|---|
| Prontidão e capacidades | Competência | gap e recomendação | Uma evolução por pessoa-período |
| Matching e oportunidades | Match | fit, ciclo e conversão | Uma origem principal por contrato |
| Jornadas e desenvolvimento | Jornada | dose, conclusão e outcome | Conclusão não é benefício financeiro |
| Produtividade | Indicador de negócio | ganho monetizado | Não somar horas e output sobrepostos |
| Retenção | Vínculo | turnover evitado | Uma saída evitada por pessoa |
| Compras e fornecedores | Fornecedor/contrato | saving, ciclo, risco | Separar saving de custo operacional |
| Marketing e pipeline | Campanha/oportunidade | pipeline e margem | Pipeline não é receita |
| Entidade e associados | Entidade/vínculo | ativação, renovação, valor | Separar valor do associado e receita da entidade |
| Risco | Risco/controle | perda esperada evitada | Não somar risco esperado e perda real |
| Receita recorrente HUB | Contrato/transação | MRR, ARR, NRR | Não somar MRR e ARR |
| Impacto financeiro cliente | Valor financeiro | ROI e payback | Deduplicar por alavanca e período |
| Qualidade e confiança | Consentimento/modelo | score de confiança | Não monetizar qualidade isoladamente |

O padrão é de **outputs derivados em cadeia**: uma mesma oportunidade pode gerar match, conversão, contrato, receita e impacto; uma mesma relação de trabalho pode gerar jornada, produtividade e retenção. Portanto, o output deve carregar origem, nó central, período e estado do evento.

## Dependências cross-funcionais

- **Pessoas ↔ Empresas/RH ↔ Produto ↔ Dados/IA:** competências, jornadas, retenção e qualidade dependem de uma identidade de pessoa e de uma janela temporal consistentes.
- **Empresas/RH ↔ Compras ↔ Entidades:** fornecedores, contratos, vínculos e associados exigem chaves de entidade e contrato que não mudem entre visões.
- **Marketing ↔ Produto ↔ Financeiro:** campanha/oportunidade alimenta pipeline, margem, conversão e potencial receita; o estágio do funil deve impedir que pipeline seja reconhecido como receita.
- **Compras ↔ Financeiro ↔ Risco:** saving, custo operacional, risco e perda esperada precisam de classificação contábil e temporal separada.
- **Produto ↔ Financeiro:** jornadas, conversões, contratos, MRR/ARR/NRR e ROI devem respeitar uma sequência de eventos, não múltiplos lançamentos do mesmo valor.
- **Dados/IA ↔ todas as vertentes:** Dados/IA aparece em todas as famílias como apoio (em 11 delas como `●` e em Receita recorrente HUB como `○`), reforçando a necessidade de linhagem, versionamento de modelos e critérios de confiança.

## Qualidade da estrutura

**Pontos fortes:** cobertura funcional completa; nó central nomeado por família; output compartilhado legível; regra de dupla contagem registrada na origem; distinção entre participação principal e complementar; inclusão explícita de confiança e consentimento.

**Limitações:** a aba não informa definições formais, fórmulas, unidade de medida, granularidade, fonte, owner, janela temporal, status do contrato/evento ou chave técnica. Também não explicita relações entre os nós (por exemplo, Match → contrato → receita), nem critérios para escolher a “origem principal”. As marcações `●`/`○` são qualitativas e não substituem um catálogo de responsabilidades.

## Implicações operacionais

1. Implementar um registro canônico de nós e chaves: `pessoa_id`, `entidade_id`, `vinculo_id`, `oportunidade_id`, `contrato_id`, `transacao_id`, `fornecedor_id`, `campanha_id`, `risco_id` e `periodo`.
2. Classificar cada métrica como **evidência**, **indicador operacional**, **resultado financeiro** ou **atributo de confiança**.
3. Construir outputs financeiros a partir de uma tabela de fatos deduplicada; as demais visões devem consultar essa camada, não recalcular valores independentemente.
4. Propagar metadados de origem e linhagem em cada output compartilhado, incluindo fonte principal, regra de atribuição e versão do cálculo.
5. Adotar estado do ciclo de vida (`lead`, `oportunidade`, `contrato`, `transação`, `realizado`, `cancelado`) para separar potencial de resultado.

## Riscos de dupla contagem

- **Tempo versus produção:** horas poupadas e aumento de output podem representar a mesma produtividade; escolher uma alavanca principal.
- **Pipeline versus receita/margem:** pipeline é expectativa; receita é realização e margem é resultado líquido. Nunca agregar os três como benefício.
- **MRR versus ARR:** ARR é uma anualização de MRR; apresentar ambos como KPIs distintos, mas não somá-los.
- **Saving versus custo evitado:** saving de compras não deve ser misturado ao custo operacional reduzido sem uma ponte de reconciliação.
- **Risco esperado versus perda real:** a perda esperada evitada é uma estimativa ex ante; a perda realizada é um evento ex post.
- **Retenção:** turnover evitado deve ter no máximo uma atribuição por pessoa e período.
- **Valor de associado versus receita de entidade:** relações associativas e receita institucional podem refletir a mesma atividade econômica.
- **Qualidade:** score de confiança é condição de uso/decisão, não receita nem benefício monetário autônomo.

## Perguntas em aberto

1. Qual é a chave técnica e o owner de cada nó central?
2. Qual vertente é a “origem principal” de um contrato quando Marketing, Produto e Empresas/RH o influenciam?
3. Qual regra resolve atribuição compartilhada por alavanca e período no ROI?
4. Como são tratados cancelamentos, reversões, renovações e reativações?
5. Quais unidades e moedas serão usadas para saving, margem, receita, perda e ROI?
6. Qual é a fonte de verdade para MRR, ARR e NRR, e como a anualização é registrada?
7. Como consentimento e score de confiança bloqueiam ou qualificam o uso de evidências?
8. Como eventos de jornada e conclusão são ligados a outcomes sem transformar conclusão em benefício?

## Prontidão

**Prontidão conceitual: alta.** A matriz já estabelece famílias, participantes, nós, outputs e controles essenciais de deduplicação.

**Prontidão para implementação: média-baixa.** Faltam chaves, fórmulas, granularidade, fontes, owners, estados e regras de atribuição verificáveis. A aba está pronta como arquitetura de integração e checklist de governança, mas ainda não como especificação executável.

## Recomendações priorizadas

1. **P0 — Criar catálogo de nós canônicos:** uma linha por nó, com chave técnica, definição, owner, fonte e periodicidade.
2. **P0 — Definir fato financeiro único:** contrato/transação como origem autorizada para receita e impacto, com reconciliação de MRR/ARR/NRR.
3. **P0 — Formalizar regras de deduplicação:** chaves `nó + alavanca + período`, cardinalidade permitida e tratamento de reversões.
4. **P1 — Criar mapa de linhagem:** evidência → indicador → output compartilhado → resultado financeiro.
5. **P1 — Documentar atribuição cross-funcional:** contribuição principal/complementar, precedência e casos de conflito.
6. **P1 — Adicionar controles de qualidade e LGPD:** consentimento, minimização, retenção, versão do modelo e bloqueios para scores não confiáveis.
7. **P2 — Testar cenários de reconciliação:** um contrato com múltiplas campanhas, um associado ligado a entidade, uma saída evitada e um risco com perda posterior.

## Verificação

- Fonte lida integralmente: 17 linhas, incluindo cabeçalho, subtítulo e 12 famílias.
- Companion note criado no caminho exato: `01-tabs-csv/13_Matriz_Integracao/13_Matriz_Integracao_analise.md`.
- Nenhum outro arquivo foi modificado.
