# Auditoria — `06_Simulador_ROI`

**Arquivo auditado:** `01-tabs-csv/06_Simulador_ROI/06_Simulador_ROI.csv`
**Escopo:** simulador financeiro cliente–HUB, cenários de ROI/payback e unit economics da HUB.
**Idioma da auditoria:** pt-BR.
**Data da leitura:** 2026-08-20.

## 1. Resumo executivo

- A aba está organizada em quatro blocos: premissas do cliente (C8:C31), valor financeiro atribuído/ROI (H8:H20), sensibilidade (H25:M28) e unit economics da HUB (H36:K43).
- O cabeçalho declara que as células amarelas são editáveis e que os valores atuais são **exemplos ilustrativos**. No CSV não há cor/formatação; portanto não é possível confirmar quais células são amarelas no workbook.
- Com os valores atuais, o benefício bruto anual calculado é **R$ 1.220.000**, o investimento total é **R$ 950.000**, o benefício líquido é **R$ 270.000**, o ROI é **28,42%** e o payback é **9,34 meses**.
- A sensibilidade calculada é: Conservador (0,7x) **ROI -10,11% / 13,35 meses**; Base (1,0x) **28,42% / 9,34 meses**; Ambicioso (1,3x) **66,95% / 7,19 meses**.
- A lógica é aritmeticamente consistente, mas a prontidão para decisão é baixa: todos os dados são marcados como ilustrativos, não há fonte, período de observação, evidência, confidence score, ramp-up ou regra de realização.
- O principal risco econômico é somar seis alavancas como se fossem aditivas e independentes. Produtividade, retenção, contratação e receita incremental podem medir partes do mesmo efeito; risco evitado e margem incremental também exigem testes de não sobreposição.

## 2. Estrutura e inventário de entradas

### 2.1 Premissas do cliente (coluna C)

| Chave | Entrada | Valor atual | Unidade declarada | Uso direto | Natureza/observação |
|---|---|---:|---|---|---|
| `invest_licenca` | Licença anual HUB | 600.000 | R$ | `H17` | Investimento anual pago à HUB; ilustrativo |
| `invest_servicos` | Serviços / implementação | 250.000 | R$ | `H17` | Projeto/implantação; deveria ter período explícito |
| `invest_interno` | Custo interno do cliente | 100.000 | R$ | `H17` | Horas, integração e mudança; risco de sobreposição com custos de execução |
| `pessoas` | Pessoas impactadas | 500 | pessoas | `H8`, `H10` | População elegível; não distingue FTE, área ou elegibilidade |
| `custo_anual` | Custo anual carregado por pessoa | 120.000 | R$/ano | `H8` | Salário + encargos + estrutura; base de custo, não necessariamente valor recuperável |
| `ganho_prod` | Ganho de produtividade | 0,02 | % | `H8` | Decimal 2%; requer definição de métrica e baseline |
| `attr_prod` | Atribuição HUB — produtividade | 0,30 | % | `H8` | Decimal 30%; “parcela sustentada pela evidência”, porém sem evidência |
| `contratacoes` | Contratações anuais | 100 | contratações | `H9` | Vagas comparáveis; horizonte anual implícito |
| `dias_vaga` | Dias de vacância reduzidos | 8 | dias | `H9` | Delta vs. baseline; requer baseline, coorte e regra de contagem |
| `custo_vaga_dia` | Custo diário da vaga | 500 | R$/dia | `H9` | Perda/overload por dia; premissa não documentada |
| `attr_vaga` | Atribuição HUB — contratação | 0,40 | % | `H9` | Decimal 40%; sem fonte ou método de atribuição |
| `turnover_base` | Turnover baseline | 0,18 | % | `H10` | Decimal 18%; janela anual indicada |
| `turnover_pos` | Turnover após intervenção | 0,15 | % | `H10` | Decimal 15%; “mesmo cohort/janela” não verificável no CSV |
| `custo_reposicao` | Custo de reposição | 60.000 | R$/saída | `H10` | Recrutamento + ramp-up; precisa detalhar custos incluídos |
| `attr_retencao` | Atribuição HUB — retenção | 0,40 | % | `H10` | Decimal 40%; sem evidência anexada |
| `spend` | Spend endereçado | 10.000.000 | R$ | `H11` | Compras dentro do escopo; precisa definir período e escopo |
| `saving_rate` | Saving comprovado | 0,025 | % | `H11` | Decimal 2,5%; apesar do rótulo “comprovado”, o cabeçalho geral diz ilustrativo |
| `attr_compras` | Atribuição HUB — compras | 0,50 | % | `H11` | Decimal 50%; método de atribuição ausente |
| `perda_esperada` | Perda esperada baseline | 400.000 | R$ | `H12` | Probabilidade × impacto; probabilidade e impacto não são entradas separadas |
| `reducao_risco` | Redução do risco | 0,20 | % | `H12` | Decimal 20%; falta horizonte e distribuição de perdas |
| `attr_risco` | Atribuição HUB — risco | 0,50 | % | `H12` | Decimal 50%; sem registro de incidentes ou modelo causal |
| `pipeline` | Receita incremental elegível | 2.000.000 | R$ | `H13` | Somente delta incremental; precisa separar receita realizada de pipeline |
| `margem_cliente` | Margem de contribuição do cliente | 0,35 | % | `H13` | Decimal 35%; requer definição contábil e período |
| `attr_receita` | Atribuição HUB — receita | 0,25 | % | `H13` | Decimal 25%; sem método de atribuição |

**Validações de entrada recomendadas:** percentuais devem estar entre 0 e 1 (ou 0% e 100% se formatados); custos e spend não podem ser negativos; `turnover_pos` deve ser menor ou igual a `turnover_base` para gerar benefício; `dias_vaga`, `pessoas` e `contratacoes` devem possuir período; e toda atribuição deve apontar para evidência identificável.

### 2.2 Entradas de unit economics da HUB (coluna H)

| Entrada | Valor atual | Unidade | Uso |
|---|---:|---|---|
| Clientes ativos | 15 | clientes | ARPA e composição de métricas |
| MRR | 80.000 | R$/mês | ARPA e receita mensal total |
| Receita mensal de serviços | 20.000 | R$/mês | Receita mensal total |
| GMV mensal | 200.000 | R$/mês | Receita marketplace |
| Take rate | 0,08 | % | Receita marketplace |
| Margem bruta | 0,70 | % | LTV e payback CAC |
| CAC | 35.000 | R$/cliente | LTV/CAC e payback CAC |
| Churn mensal | 0,02 | % | LTV |

Esses inputs não alimentam o ROI do cliente (H8:H20). São um bloco paralelo, útil para avaliar a economia da HUB, mas sem uma ponte explícita entre retorno do cliente e receita/custo da HUB.

## 3. Auditoria fórmula → entrada → unidade

### 3.1 Benefícios anuais atribuídos

| Célula | Fórmula literal | Mapeamento | Resultado | Unidade esperada | Auditoria |
|---|---|---|---:|---|---|
| H8 Produtividade | `=C11*C12*C13*C14` | pessoas × R$/pessoa/ano × ganho × atribuição | R$ 360.000/ano | R$/ano | Dimensionalmente coerente; assume que 2% do custo carregado representa valor econômico recuperável. |
| H9 Ciclo de contratação | `=C15*C16*C17*C18` | contratações/ano × dias × R$/dia × atribuição | R$ 160.000/ano | R$/ano | Coerente; pressupõe que todos os 100 eventos terão exatamente o delta de 8 dias e que a perda/dia é aditiva. |
| H10 Retenção | `=C11*MAX(0,C19-C20)*C21*C22` | pessoas × redução de turnover × R$/saída × atribuição | R$ 360.000/ano | R$/ano | `MAX(0,...)` evita benefício negativo; pressupõe 500 pessoas como base de saídas e turnover anual. Não modela mix de cargos/coortes. |
| H11 Compras | `=C23*C24*C25` | spend × saving × atribuição | R$ 125.000/ano | R$/ano | Coerente se spend e saving forem do mesmo período e escopo; “saving comprovado” não tem evidência no arquivo. |
| H12 Risco evitado | `=C26*C27*C28` | perda esperada × redução × atribuição | R$ 40.000/ano | R$/ano | Coerente se perda esperada e redução forem anuais; não há período explícito na fórmula. |
| H13 Margem incremental | `=C29*C30*C31` | receita incremental elegível × margem × atribuição | R$ 175.000/ano | R$/ano | Coerente se pipeline já for receita incremental realizada/esperada no ano; “pipeline” pode não ser realização. |

### 3.2 Agregação e retorno

| Célula | Fórmula literal | Resultado | Auditoria |
|---|---|---:|---|
| H16 Benefício bruto anual | `=SUM(H8:H13)` | R$ 1.220.000/ano | Soma seis alavancas sem teste de independência, exclusão mútua ou teto. |
| H17 Investimento total | `=C8+C9+C10` | R$ 950.000 | Soma licença anual, serviços e custo interno; mistura recorrente e one-off sem explicitar horizonte/amortização. |
| H18 Benefício líquido | `=H16-H17` | R$ 270.000 | Correto como benefício bruto menos investimento, mas não inclui custos recorrentes adicionais, impostos, custo de capital ou ramp-up. |
| H19 ROI | `=IFERROR(H18/H17,0)` | 0,2842105 = 28,42% | ROI simples de um período; não é IRR/NPV. O denominador é investimento total, e não necessariamente caixa investido no mesmo período. |
| H20 Payback | `=IFERROR(H17/(H16/12),0)` | 9,3443 meses | Usa benefício bruto mensalizado, não benefício líquido; retorna meses até recuperar investimento apenas se a realização for linear e imediata. |

### 3.3 Sensibilidade

| Linha | Multiplicador | Benefício bruto | Investimento | ROI | Payback |
|---|---:|---:|---:|---:|---:|
| Conservador | 0,7 | R$ 854.000 | R$ 950.000 | -10,11% | 13,35 meses |
| Base | 1,0 | R$ 1.220.000 | R$ 950.000 | 28,42% | 9,34 meses |
| Ambicioso | 1,3 | R$ 1.586.000 | R$ 950.000 | 66,95% | 7,19 meses |

Fórmulas:

- I26:I28: `=$H$16*H26`, `=$H$16*H27`, `=$H$16*H28`.
- J26:J28: `=$H$17` (investimento constante em todos os cenários).
- K26:K28: `=IFERROR((I-J)/J,0)` (ROI líquido/investimento).
- L26:L28: `=IFERROR(J/(I/12),0)` (payback usando benefício bruto mensal).

**Inconsistência de definição:** H20 e L26:L28 usam benefício bruto para o payback, enquanto ROI usa benefício líquido. Isso pode ser aceitável como “payback operacional de benefício bruto”, mas precisa ser rotulado; para payback de caixa/retorno líquido, o numerador deve ser comparado a fluxos líquidos e timing de desembolso.

### 3.4 Unit economics da HUB

| Célula | Fórmula literal | Resultado | Unidade | Auditoria |
|---|---|---:|---|---|
| K36 ARPA mensal | `=IFERROR(H37/H36,0)` | R$ 5.333,33 | R$/cliente/mês | Coerente com MRR e clientes ativos; clientes zero é silenciosamente convertido em zero. |
| K37 Receita marketplace | `=H39*H40` | R$ 16.000 | R$/mês | GMV × take rate, dimensionalmente correto. |
| K38 Receita mensal total | `=H37+H38+K37` | R$ 116.000 | R$/mês | Soma MRR, serviços e marketplace; pressupõe que MRR não inclui marketplace/serviços. |
| K39 LTV | `=IFERROR((K36*H41)/H43,0)` | R$ 186.666,67 | R$/cliente | Fórmula de vida média simplificada (margem mensal/churn); não inclui expansão, contração, churn por coorte ou custos variáveis adicionais. |
| K40 LTV/CAC | `=IFERROR(K39/H42,0)` | 5,33x | múltiplo | Coerente com LTV e CAC declarados; benchmark mínimo não está definido. |
| K41 Payback CAC | `=IFERROR(H42/(K36*H41),0)` | 9,38 meses | meses | CAC / margem bruta mensal; não usa receita de serviços/marketplace nem churn/ramp-up. |

## 4. Qualidade, evidência e rastreabilidade

### Pontos positivos

1. Chaves semânticas (`invest_licenca`, `ganho_prod`, etc.) facilitam uma futura conexão com dicionário de dados.
2. Fórmulas são curtas, legíveis e usam `IFERROR` no ROI/payback e unit economics.
3. `MAX(0,C19-C20)` impede que retenção produza benefício negativo quando o pós-intervenção piorar.
4. Há separação útil entre retorno do cliente, cenários e economia unitária da HUB.

### Lacunas críticas

- Não há fonte, owner, data de atualização, amostra, baseline documentado, intervalo de confiança ou link de evidência para nenhuma entrada.
- O texto “valores atuais são exemplos ilustrativos” torna os resultados inadequados para aprovação comercial ou investimento sem substituição por dados reais.
- Percentuais aparecem como números decimais, mas o CSV não contém formato; uma renderização sem formato pode exibir 0,02 em vez de 2%.
- Não há moeda parametrizada; todas as cifras presumem R$, inclusive `custo_anual`, `spend`, `pipeline`, CAC e receitas.
- Não há período comum declarado entre investimento e benefícios. A licença é anual, serviços parecem one-off e custo interno pode ser one-off, enquanto todos os benefícios são anualizados.
- Não há curva de implementação/realização: benefícios são tratados como 100% realizados durante o ano e payback como linear desde o mês 1.
- Não há controle de versão das premissas ou trilha de mudanças.
- `IFERROR(...,0)` mascara entradas ausentes/zero e pode transformar erro de modelagem em retorno zero sem alerta.

## 5. Dependências e timing de realização

### Dependências internas

- H8 depende de `pessoas`, `custo_anual`, `ganho_prod`, `attr_prod`.
- H9 depende de `contratacoes`, `dias_vaga`, `custo_vaga_dia`, `attr_vaga`.
- H10 depende de `pessoas`, `turnover_base`, `turnover_pos`, `custo_reposicao`, `attr_retencao`.
- H11 depende de `spend`, `saving_rate`, `attr_compras`.
- H12 depende de `perda_esperada`, `reducao_risco`, `attr_risco`.
- H13 depende de `pipeline`, `margem_cliente`, `attr_receita`.
- H16 depende de H8:H13; H18 depende de H16:H17; H19:H20 dependem de H18/H17/H16.
- I26:L28 dependem de H16:H17 e multiplicadores H26:H28.
- K36:K41 dependem apenas do bloco H36:H43, sem ligação ao ROI cliente.

### Timing não modelado

1. Licença anual e benefício anual podem não começar no mesmo mês.
2. Serviços/implementação e custo interno tendem a ocorrer antes da captura do benefício, mas são integralmente cobrados no mesmo denominador.
3. Produtividade e retenção provavelmente têm ramp-up; contratação e compras têm eventos discretos; risco evitado é probabilístico; receita incremental depende de conversão do pipeline.
4. O payback deveria usar uma série mensal de desembolso e realização, não apenas `H16/12`.

## 6. Riscos de dupla contagem e interpretação

### Alto risco

- **Produtividade × receita incremental:** horas liberadas podem gerar capacidade para receita; somar o custo da produtividade e a margem da nova receita pode contar o mesmo ganho duas vezes.
- **Produtividade × retenção:** menor sobrecarga pode reduzir turnover; se ambos forem efeitos do mesmo mecanismo, a soma exige decomposição causal.
- **Produtividade × contratação:** menor vacância pode elevar produtividade das equipes; os efeitos podem incidir sobre a mesma capacidade.
- **Retenção × contratação:** evitar saídas reduz necessidade de contratar; benefícios de turnover e redução de vacância podem se sobrepor.

### Médio risco

- **Compras × margem incremental:** saving em compras pode já estar refletido na margem de contribuição usada na receita incremental.
- **Risco evitado × margem/receita:** um incidente evitado pode preservar receita/margem; somá-lo a margem incremental exige provar que são perdas distintas.
- **Benefício bruto × investimento interno:** se horas internas já forem parte da produtividade estimada, subtrair o custo interno é correto apenas se esse custo não estiver embutido na base de benefício.

### Regra recomendada

Criar uma matriz de alavancas com população/escopo, mecanismo causal, métrica, owner, período e exclusividade. Aplicar três tratamentos: (a) soma apenas de alavancas comprovadamente independentes; (b) teto de benefício por população/receita; ou (c) cenário com desconto de sobreposição (por exemplo, 10–30%) explicitamente parametrizado.

## 7. Implicações para decisão

- O caso Base parece positivo, mas o Conservador destrói valor; a decisão é sensível à realização dos benefícios.
- O ponto de equilíbrio do multiplicador de benefício é `H17/H16 = 0,7787x`; abaixo de aproximadamente 77,9% do benefício Base, o ROI fica negativo.
- Um ROI de 28,42% não significa retorno anual recorrente: o denominador mistura custos anuais e de implementação, e o numerador não tem curva de realização.
- O payback abaixo de 12 meses é consequência do uso de benefício bruto. Em termos de benefício líquido anual constante, o payback equivalente seria `950.000 / (270.000/12) = 42,22 meses`, antes de considerar timing e custos recorrentes. Essa comparação evidencia que a etiqueta de payback precisa ser esclarecida.
- O bloco unit economics indica LTV/CAC de 5,33x e payback CAC de 9,38 meses, mas não deve ser usado para validar o ROI do cliente sem uma ponte de receita, custo marginal e atribuição.

## 8. Perguntas em aberto

1. O horizonte do ROI é exatamente 12 meses? Serviços e custo interno são one-off, anuais ou ambos?
2. A licença de R$ 600 mil é o preço anual total, por cliente ou por escopo? Há custos de renovação?
3. `pessoas = 500` representa FTE elegíveis, usuários ativos ou toda a população? Como evitar contar a mesma pessoa em produtividade e turnover?
4. Como foram medidos os 2% de produtividade, 8 dias de vacância e 2,5% de saving? Quais são baseline, amostra e intervalo de confiança?
5. “Atribuição HUB” é hipótese de crédito, percentual causal validado, ou desconto comercial? Quem aprovou cada percentual?
6. `pipeline = R$ 2 milhões` é pipeline, bookings, receita reconhecida ou expectativa? Qual taxa de conversão e janela?
7. Perda esperada é anual? Quais probabilidades e impactos formam os R$ 400 mil?
8. O payback deve ser bruto, líquido ou de caixa? Como os pagamentos mensais e o ramp-up serão representados?
9. Quais alavancas são mutuamente exclusivas? Existe teto comum de valor por pessoa, vaga, compra ou receita?
10. O MRR de R$ 80 mil inclui a receita marketplace ou de serviços? Qual é a definição exata de churn e margem bruta da HUB?

## 9. Readiness

| Dimensão | Estado | Justificativa |
|---|---|---|
| Estrutura/fórmulas | **Amarelo** | Fórmulas e dependências são claras e calculáveis. |
| Integridade aritmética | **Verde, com ressalvas** | Resultados reproduzíveis; sem validação de formato/Excel disponível no CSV. |
| Unidades/moeda | **Amarelo** | Unidades declaradas, mas horizonte, moeda parametrizada e formatação de percentuais faltam. |
| Evidência | **Vermelho** | Cabeçalho afirma que todos os valores são ilustrativos; não há fontes. |
| Timing/payback | **Vermelho** | Realização linear e imediata é implícita; não há fluxo mensal. |
| Não sobreposição | **Vermelho** | Seis alavancas são somadas sem teste de dupla contagem. |
| Prontidão para decisão | **Vermelho** | Adequado como protótipo de conversa, não como business case aprovado. |

## 10. Recomendações priorizadas

### P0 — antes de usar em proposta ou decisão

1. Substituir exemplos por dados reais, com fonte, owner, data, período e evidência por entrada.
2. Definir horizonte e separar custos one-off de custos recorrentes; modelar desembolso mensal.
3. Escolher e rotular a definição de payback (bruto, líquido ou caixa) e alinhar H20 com L26:L28.
4. Construir matriz de dupla contagem e aplicar regra de exclusividade/teto ou desconto de sobreposição.

### P1 — robustez do modelo

5. Criar cenários por alavanca (não apenas multiplicador global), com intervalo de realização e ramp-up.
6. Adicionar validações de entrada e alertas para percentuais fora de 0–100%, valores negativos, `turnover_pos > turnover_base` e divisões mascaradas por `IFERROR`.
7. Separar receita de pipeline, bookings e receita reconhecida; documentar margem e conversão.
8. Parametrizar moeda, periodicidade e formato percentual no workbook original.

### P2 — economia da HUB

9. Definir se MRR inclui serviços/marketplace e adicionar custos variáveis, expansão e churn por coorte ao LTV.
10. Criar ponte entre valor capturado pelo cliente, receita da HUB, custo de servir e margem da HUB.

## 11. Verificação desta análise

- O CSV original foi lido integralmente (43 linhas) sem alteração.
- Foram recalculadas manualmente as fórmulas de H8:H20, I26:L28 e K36:K41; os resultados publicados acima correspondem às fórmulas literais e aos valores atuais.
- Único arquivo criado: `01-tabs-csv/06_Simulador_ROI/06_Simulador_ROI_analise.md`.
- Nenhum outro arquivo foi modificado.
