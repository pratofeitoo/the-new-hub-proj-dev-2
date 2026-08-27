# Recálculo de ROI e regras de evidência

Todos os valores numéricos atuais são placeholders ilustrativos da aba corrigida 06; nenhum valor sem suporte é apresentado como fato observado.

## Separação canônica
- Capacidade teórica: `pessoas × custo_anual × ganho_prod`; não é output realizado até que uma medida de resultado o confirme.
- Output realizado: output medido pós-período menos baseline comparável, com timing de coorte e atribuição.
- Custo evitado: custo do baseline menos custo realizado menos custo da mudança; não chame isso de receita.
- Margem de contribuição: receita realizada incremental × taxa de margem de contribuição; nunca substitua pela receita bruta.
- Valores de pipeline: bruto (valor do CRM), ponderado por probabilidade (valor × probabilidade) e realizado (fechado/receita reconhecida) são medidas separadas. O pipeline não é somado à receita fechada.

## Baseline, coorte, controle, timing, atribuição e deduplicação
1. Defina a população elegível e a data-índice antes da exposição; retenha uma coorte de controle/não exposta comparável quando viável.
2. Compare a mesma janela de resultado e definição de coorte; use pré/pós com controle pareado ou diferenças-em-diferenças para alegações quase experimentais.
3. Aplique atribuição somente depois que a evidência for aceita; atribuição é um desconto, não um fato observado.
4. Deduplicação por `entity_id + outcome_type + period + primary_lever`; um resultado realizado tem um único dono financeiro primário.
5. Não some efeitos sobrepostos de produtividade/tempo-até-produtividade, economia/margem, perda esperada/perda realizada de risco, ou ARR/MRR.
6. Premissas sem suporte permanecem ilustrativas e são excluídas do valor reconhecido do business case até que evidências sejam anexadas.

## Aritmética reproduzível de cenários

- produtividade: R$ 360.000,00 de contribuição bruta anual antes do multiplicador de cenário
- vaga: R$ 160.000,00 de contribuição bruta anual antes do multiplicador de cenário
- retenção: R$ 360.000,00 de contribuição bruta anual antes do multiplicador de cenário
- compras: R$ 125.000,00 de contribuição bruta anual antes do multiplicador de cenário
- risco: R$ 40.000,00 de contribuição bruta anual antes do multiplicador de cenário
- margem: R$ 175.000,00 de contribuição bruta anual antes do multiplicador de cenário
- Benefício bruto base: R$ `1,220,000.00`
- Investimento total: R$ `950,000.00`
- Benefício líquido base = benefício bruto − investimento; ROI base = benefício líquido / investimento; payback base = investimento / (benefício bruto / 12).

| Cenário | Multiplicador | Benefício bruto (R$) | Investimento (R$) | Benefício líquido (R$) | ROI | Payback (meses) |
|---|---:|---:|---:|---:|---:|---:|
| Conservador | 0.7 | 854,000.00 | 950,000.00 | -96,000.00 | -0.1011 | 13.3489 |
| Base | 1.0 | 1,220,000.00 | 950,000.00 | 270,000.00 | 0.2842 | 9.3443 |
| Ambicioso | 1.3 | 1,586,000.00 | 950,000.00 | 636,000.00 | 0.6695 | 7.1879 |

## Verificação determinística
Usando os insumos da aba corrigida 06, os benefícios são 360.000 + 160.000 + 360.000 + 125.000 + 40.000 + 175.000 = 1.220.000 R$; o investimento é 950.000 R$. O ROI base esperado é 0.2842105263 e o payback é 9.3442622951 meses. Qualquer reconstrução do workbook deve reproduzir esses valores ou registrar uma correção primeiro.
