# Análise — Árvore de Valor Financeiro

## Escopo e estrutura

Arquivo analisado exclusivamente: `05_Arvore_de_Valor.csv`.

A aba contém uma tabela de 12 alavancas, cada uma organizada em oito dimensões operacionais: cadeia causal, indicadores leading, outcome de negócio, fórmula financeira, dados obrigatórios, método mínimo de atribuição, proteção contra dupla contagem, visão responsável e decisão habilitada. A linha introdutória define o propósito: conectar uma ação da HUB a um resultado monetizável.

As alavancas são: Produtividade, Time-to-productivity, Retenção, Recrutamento, Compras, Risco, Receita incremental, Receita recorrente HUB, Marketplace, Entidade, Marketing e Inovação/novos mercados.

## Leitura causal

As cadeias seguem, em geral, uma progressão válida de capacidade/sinal para ação e depois resultado econômico:

- **Pessoas:** prontidão/gap → jornada ou matching → performance, contratação, pertencimento → output, produtividade, permanência ou menor tempo até produtividade.
- **Eficiência e controle:** demanda/diagnóstico → match, homologação, alerta ou controle → contrato, saving ou risco residual.
- **Receita:** sinal, dados, alcance ou rede → oportunidade/match/piloto → contrato/transação/renovação → receita ou margem.

O desenho favorece uma árvore de valor, mas ainda não explicita elos de conversão entre indicador leading e impacto financeiro. Por exemplo, “precisão do match” precisa demonstrar como altera probabilidade de contratação, tempo de preenchimento ou qualidade da contratação; “densidade” e “matches” precisam demonstrar como chegam a margem incremental.

## Leading versus lagging indicators

Os indicadores leading listados são sinais de processo ou de adoção: prontidão, gap, conclusão, fit, aceitação, adoção, NPS, evolução, cobertura, elegibilidade, propensão, pipeline, time-to-value, uso, densidade, alcance qualificado e CPL. Eles permitem intervir antes do resultado financeiro.

Os outcomes lagging são: ganho de produtividade, dias até produtividade, turnover evitado, time-to-fill, custo por contratação, ciclo, saving, perda esperada reduzida, negócio incremental, MRR/NRR/churn, GMV/take rate, valor por associado/renovação, pipeline/margem incremental e novos produtos/mercados.

Pontos de atenção:

1. **Pipeline e NPS não são caixa.** Devem ser tratados como intermediários, não como resultado financeiro, até haver conversão observada e margem.
2. **Conclusão/adoção/uso** medem atividade ou ativação; falta uma regra de qualidade mínima para evitar que atividade seja confundida com impacto.
3. **NRR e churn** são outcomes de retenção/expansão, mas a fórmula apresentada para receita recorrente está em termos de MRR; a unidade temporal deve ser normalizada.
4. **GMV** é volume transacionado, não receita HUB. O CSV reconhece essa distinção, mas o modelo deve impedir sua agregação com receita.

## Fórmulas financeiras e requisitos de modelagem

### Fórmulas explicitamente propostas

- Produtividade: `população × custo anual carregado × % ganho × atribuição`.
- Time-to-productivity: `dias reduzidos × custo diário × pessoas × atribuição`.
- Retenção: `pessoas × redução de turnover × custo de reposição × atribuição`.
- Recrutamento: `dias evitados × custo de vacância + custo operacional evitado`.
- Compras: `saving validado + custo de ciclo evitado`.
- Risco: `probabilidade × impacto × delta de risco × atribuição`.
- Receita incremental: `receita incremental × margem de contribuição × atribuição`.
- Receita recorrente HUB: `MRR inicial + expansão − contração − churn`.
- Marketplace: `GMV elegível × take rate − custos variáveis`.
- Entidade: `renovações incrementais × ARR médio × margem`.
- Marketing: `delta de conversão × volume × ticket × margem × atribuição`.
- Inovação/novos mercados: margem incremental de negócios com origem rastreada.

### Lacunas de fórmula

- As fórmulas não definem período, moeda, unidade, sinais de custo e tratamento de impostos, descontos, inflação ou valor presente.
- “Atribuição” é multiplicada em várias fórmulas, mas não há convenção sobre se é percentual de contribuição causal, crédito de canal ou probabilidade de origem. São conceitos diferentes e não devem ser intercambiáveis.
- Produtividade monetiza custo carregado × ganho, mas não demonstra realização: horas liberadas podem não virar redução de custo nem receita. Requer fator de captura/realização ou conversão em output incremental.
- Time-to-productivity deve distinguir custo de capacidade não produtiva, custo de vacância e custo de onboarding, para não duplicar com Recrutamento e Produtividade.
- Retenção exige definição de custo de reposição (recrutamento, ramp-up, perda de produtividade e gestão) e janela de observação.
- Recrutamento precisa decompor `custo de vacância` e `custo operacional evitado`, com fórmulas e unidades próprias; “custo por contratação” é outcome, não componente automaticamente monetizável.
- Compras precisa definir saving contra preço de referência aprovado e separar saving recorrente, one-off e custo de processo.
- Risco deve explicitar se o delta é redução de probabilidade, impacto ou ambos; caso contrário, há risco de multiplicar o mesmo efeito duas vezes.
- Receita recorrente mistura MRR com expansão, contração e churn sem declarar se os componentes estão no mesmo mês/cohort; a comparação com ARR anualizado deve ser explicitamente proibida.
- Entidade usa ARR médio × margem, enquanto o outcome inclui “valor por associado e renovação”; falta fórmula para o primeiro outcome.
- Inovação descreve margem incremental, mas não especifica atribuição de custos de P&D, custo do piloto, ramp-up e canibalização.

## Atribuição causal

O mínimo proposto é adequado como direção: pré/pós com comparável para produtividade; cohort histórico ajustado para time-to-productivity; diferença-em-diferenças para retenção; cohorts de vagas/categorias/clientes/tier para recrutamento, compras, receita recorrente e entidade; holdout, geo, campanha comparável ou contrafactual documentado para receita e inovação.

Para tornar a atribuição auditável, cada caso deveria registrar: unidade de análise, período de exposição, grupo tratado, comparador/holdout, baseline, evento de tratamento, janela de maturação, fatores de confusão, regra de exclusão e percentual final de contribuição. A origem rastreada é necessária, mas rastreabilidade não prova causalidade por si só.

## Controles contra dupla contagem

O CSV já fornece proteções importantes:

- não somar horas e produtividade quando representam o mesmo efeito;
- não somar time-to-productivity ao ganho anual em período sobreposto;
- não somar vaga evitada e reposição da mesma pessoa;
- separar custo operacional de vacância;
- não somar desconto e margem da mesma compra;
- não somar custo real e risco esperado do mesmo evento;
- monetizar margem, não receita informativa;
- não somar ARR e MRR anualizado;
- separar GMV de receita HUB;
- não somar benefício do associado à receita da entidade;
- não somar pipeline e receita fechada;
- separar receita existente de expansão.

Essas regras precisam ser transformadas em uma chave de exclusão comum: `entidade + evento econômico + período + cohort + métrica`. Uma mesma unidade econômica deve ter um único proprietário de valor. Recomenda-se também um ledger de benefícios com status `estimado`, `validado`, `realizado`, `reversão` e `já contabilizado em outra alavanca`.

## Qualidade, dependências e dados faltantes

**Qualidade estrutural:** alta para orientação estratégica; média para cálculo financeiro. A tabela é consistente ao separar leading, outcome, fórmula, dados, atribuição e controles, porém várias definições ainda são nominais.

**Dados obrigatórios recorrentes:** baseline, população/exposição, cohort, custo carregado ou diário, datas de admissão/marco, turnover e reposição, ATS/CRM/billing, transações e contratos, preço de referência, volume, margem, matriz de risco/incidentes/controles, UTM/touchpoints e origem do match.

**Dependências críticas:**

1. Identificador único de pessoa, vaga, cliente, associado, fornecedor, oportunidade, contrato e transação.
2. Taxonomia comum para cohort, origem, período e evento de valor.
3. Baselines históricos e grupos comparáveis antes da intervenção.
4. Custos e margens aprovados por Finanças; sem isso, os resultados permanecem potenciais.
5. Integração entre RH/ATS, CRM, billing, uso, compras e registros de risco.
6. Governança para aprovação da atribuição e reconciliação com contabilidade.

**Missing baselines:** não são fornecidos valores, datas, tamanho amostral, variância, metas, taxa de conversão, custo de reposição, custo de vacância, preço de referência, take rate, margem ou fator de realização. Também não há regra para valores negativos, reversões, churn recuperado, canibalização ou efeitos retardados.

## Implicações, riscos e perguntas

### Implicações

- A árvore pode orientar priorização de jornadas, onboarding, cohorts de risco, categorias de compras, canais/ofertas, produto/preço/CS e casos de inovação.
- O padrão correto de decisão é leading para gestão diária e lagging validado para investimento/escala.
- CFO/Finanças deve ser dono da reconciliação monetária; as áreas operacionais são donas dos leading indicators e da execução.

### Riscos

- Confundir correlação, origem rastreada ou adoção com causalidade.
- Inflar valor por sobreposição entre produtividade, ramp-up, retenção e recrutamento.
- Monetizar pipeline, GMV, receita bruta ou horas liberadas como se fossem margem realizada.
- Usar coortes não comparáveis ou baselines ausentes.
- Misturar MRR/ARR e períodos diferentes.
- Ignorar custos variáveis, margem, impostos, canibalização e reversões.
- Risco de privacidade e governança no uso de dados de pessoas, clientes e fornecedores.

### Perguntas para fechar antes de modelar

1. Qual é o período padrão e qual moeda/unidade cada fórmula deve usar?
2. “Atribuição” significa contribuição causal, crédito de canal ou participação estimada?
3. Qual fator converte produtividade liberada em custo evitado ou margem realizada?
4. Quais eventos econômicos têm precedência quando várias alavancas influenciam o mesmo resultado?
5. Quais baselines, comparadores e janelas de maturação serão obrigatórios?
6. Como serão tratados efeitos negativos, reversões, churn, canibalização e benefícios já contabilizados?
7. Qual fonte é o sistema de registro para cada identificador e cada custo/margem?
8. MRR, ARR, NRR e churn serão reportados mensalmente, por cohort ou anualizados?

## Readiness

**Pronto para:** usar como mapa de hipóteses, selecionar indicadores leading e desenhar pilotos com comparadores.

**Não pronto para:** declarar ROI, reconhecer receita/saving no resultado, comparar alavancas em uma mesma cifra ou escalar investimento sem preencher baselines, unidades, margens, atribuição e controles de sobreposição.

Classificação sugerida: **prontidão conceitual alta; prontidão de medição média-baixa; prontidão financeira baixa até validação dos dados e do ledger de benefícios.**

## Recomendações

1. Criar um dicionário de métricas com definição, fórmula, unidade, período, fonte, owner, leading/lagging e regra de qualidade.
2. Adicionar a cada alavanca: baseline, meta, população, cohort, janela, comparador, margem e fator de realização.
3. Normalizar todas as fórmulas em uma camada de valor: `benefício bruto − custos incrementais − canibalização`, depois aplicar contribuição causal uma única vez.
4. Implementar ledger de benefícios com chave de evento econômico e reconciliação com Financeiro.
5. Separar explicitamente valor potencial, valor validado e valor realizado.
6. Priorizar dois pilotos mensuráveis: time-to-productivity com cohort histórico ajustado e receita incremental com holdout/geo/cohort; usar os resultados para calibrar atribuição.
7. Revisar a fórmula de receita recorrente para manter MRR, ARR, NRR e churn em bases temporais compatíveis.
8. Definir gates de escala: baseline disponível, comparador válido, atribuição aprovada, margem conhecida, dupla contagem eliminada e resultado reconciliado.

## Verificação

- Fonte lida: `01-tabs-csv/05_Arvore_de_Valor/05_Arvore_de_Valor.csv`.
- Saída criada: `01-tabs-csv/05_Arvore_de_Valor/05_Arvore_de_Valor_analysis.md`.
- Escopo verificado: nenhum outro arquivo foi modificado.
