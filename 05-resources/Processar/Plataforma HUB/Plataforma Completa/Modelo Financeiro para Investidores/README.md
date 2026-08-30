# HUB · Modelo Financeiro para Investidores

> Cenário-base editável para testar receita, custos, escala, unit economics e retorno potencial do investimento.

Este diretório contém o modelo financeiro da HUB para discussão com investidores:

- `Modelo Financeiro.xlsx` — workbook com resumo executivo, premissas, custos, preços, projeção de cinco anos, unit economics, análises de sensibilidade, checks e fontes.

Este README é uma síntese de leitura do modelo. A planilha é o artefato editável e deve ser consultada para alterar premissas, fórmulas e cenários.

---

## 1. Natureza do modelo

O modelo apresenta uma tese financeira baseada em uma receita **híbrida e recorrente**, combinando:

- assinaturas mensais;
- projetos e eventos;
- success fees sobre negócios convertidos.

A precificação considera três elementos:

1. custo de servir;
2. capacidade de pagamento do cliente;
3. valor econômico gerado ou protegido para a empresa.

Os números são hipóteses ilustrativas de planejamento. Não representam previsão garantida, compromisso comercial, valuation formal ou promessa de retorno ao investidor.

Antes de utilizar os números externamente, é necessário substituir as hipóteses por evidências de propostas, contratos, pilotos, folha, infraestrutura, custos de cloud, CAC e retenção.

---

## 2. Como utilizar a planilha

A aba **Resumo** orienta o uso do workbook:

1. editar somente as células amarelas nas abas **Premissas** e **Precos**;
2. revisar a **Projecao_5_Anos**;
3. analisar **Unit_Economics**;
4. testar cenários em **Sensibilidade**;
5. confirmar que a aba **Checks** apresenta status coerente;
6. substituir as hipóteses ilustrativas por dados comerciais e operacionais validados.

As abas são conectadas por fórmulas. Alterações em ticket, custos, crescimento, churn, CAC ou investimento devem repercutir nos indicadores de receita, margem, break-even e retorno.

---

## 3. Resumo do cenário-base

A projeção apresentada no workbook indica:

| Indicador | Cenário-base |
|---|---:|
| Receita total no Ano 1 | R$ 3.715.200 |
| Receita total no Ano 5 | R$ 31.099.814,94 |
| EBITDA no Ano 1 | R$ 578.400 |
| EBITDA no Ano 5 | R$ 19.998.602,94 |
| Empresas ativas no Ano 1 | 24 |
| Empresas ativas no Ano 5 | 170,1 |
| ARR no Ano 5 | R$ 22.935.014,94 |
| Ponto de equilíbrio | aproximadamente 15,35 empresas ativas |
| Payback do CAC | aproximadamente 2,32 meses |
| LTV/CAC | aproximadamente 51,64x |
| MOIC bruto ilustrativo | aproximadamente 9,17x |

Esses resultados dependem diretamente das premissas editáveis. Eles devem ser tratados como saída de um cenário, não como fatos independentes das hipóteses.

---

## 4. Premissas principais

A aba **Premissas** reúne o cenário-base editável:

| Premissa | Valor de referência |
|---|---:|
| Investimento inicial em produto | R$ 1.200.000 |
| Vida útil econômica do software | 5 anos |
| OPEX fixo mensal inicial | R$ 185.000 |
| Custo variável por empresa | R$ 850/mês |
| Fee médio mensal por empresa | R$ 8.900/mês |
| Receita média por evento/projeto | R$ 18.000 |
| Eventos por empresa/ano | 2 |
| Success fee médio anual por empresa | R$ 12.000 |
| Empresas no Ano 1 | 24 |
| Inflação de preços | 6% ao ano |
| Crescimento do OPEX fixo | 20% ao ano |
| CAC por nova empresa | R$ 28.000 |
| Margem de contribuição alvo | 75% |
| Churn anual | 10% |
| Taxa de desconto | 20% ao ano |
| Investimento ilustrativo | R$ 2.500.000 |
| Participação ilustrativa do investidor | 20% |
| Múltiplo de saída sobre ARR | 5x |

Os valores de crescimento de empresas utilizados no modelo são de 100% no Ano 2, 75% no Ano 3, 50% no Ano 4 e 35% no Ano 5. Esses percentuais devem ser revisados junto com a capacidade real de vendas, implantação e atendimento.

---

## 5. Estrutura de custos

A aba **CAPEX_OPEX** separa o investimento inicial de desenvolvimento dos custos operacionais recorrentes.

### CAPEX de desenvolvimento

O CAPEX total é de **R$ 1.200.000**, distribuído entre:

- Produto, UX e arquitetura — 18%;
- desenvolvimento do CORE — 32%;
- dados, IA e matching — 20%;
- segurança e LGPD — 10%;
- integrações e APIs — 10%;
- testes, implantação e contingência — 10%.

A vida útil econômica considerada é de cinco anos, com amortização linear de **R$ 240.000 por ano**.

### OPEX fixo mensal inicial

O OPEX mensal de referência é de **R$ 185.000**, distribuído entre:

- Produto e tecnologia — 43%;
- dados e infraestrutura — 14%;
- comercial e marketing — 19%;
- Customer Success e operações — 14%;
- administrativo, jurídico e contábil — 10%.

O modelo aplica crescimento anual de 20% ao OPEX fixo. Essa premissa precisa ser confrontada com o plano de contratação e a evolução da operação.

---

## 6. Modelo de preços

A aba **Precos** combina mensalidade, implantação, receita adicional por evento/projeto e success fee.

| Plano | Fee mensal | Implantação | Evento/projeto | Success fee | Público típico |
|---|---:|---:|---:|---:|---|
| **Start** | R$ 4.900 | R$ 15.000 | R$ 9.000 | 2% | Empresa pequena ou piloto |
| **Growth** | R$ 9.900 | R$ 30.000 | R$ 18.000 | 3% | Média empresa ou portfólio |
| **Enterprise** | R$ 24.900 | R$ 75.000 | R$ 35.000 | 4% | Grande empresa ou ecossistema |

A capacidade de pagamento é estimada considerando orçamento anual relacionado, valor gerado ou protegido, captura máxima de valor e teto anual/mensal por segmento.

Segmentos considerados:

- pequena empresa;
- média empresa;
- grande empresa;
- produtoras e eventos;
- universidades.

O modelo utiliza uma captura de valor sugerida equivalente a 85% do teto calculado. Essa é uma hipótese de precificação e deve ser validada em entrevistas, propostas e pilotos pagos.

---

## 7. Projeção de cinco anos

A aba **Projecao_5_Anos** combina assinatura, projetos/eventos e success fees.

| Indicador | Ano 1 | Ano 2 | Ano 3 | Ano 4 | Ano 5 |
|---|---:|---:|---:|---:|---:|
| Empresas médias ativas | 24 | 48 | 84 | 126 | 170,1 |
| Receita total | R$ 3,72 mi | R$ 7,74 mi | R$ 14,11 mi | R$ 22,08 mi | R$ 31,10 mi |
| EBITDA | R$ 0,58 mi | R$ 3,24 mi | R$ 7,71 mi | R$ 13,43 mi | R$ 20,00 mi |
| Margem EBITDA | 15,6% | 41,9% | 54,6% | 60,8% | 64,3% |

A receita cresce por três motores:

1. aumento da base de empresas;
2. reajuste do fee médio;
3. expansão de projetos/eventos e success fees.

A margem bruta projetada varia aproximadamente de 93,4% no Ano 1 a 94,4% no Ano 5, resultado que depende do custo variável relativamente baixo adotado na premissa.

---

## 8. Unit economics

A aba **Unit_Economics** avalia eficiência comercial, contribuição por cliente e retorno potencial.

Indicadores principais do cenário-base:

- ARR por empresa: **R$ 154.800**;
- margem de contribuição anual por empresa: **R$ 144.600**;
- CAC: **R$ 28.000**;
- payback do CAC: **2,32 meses**;
- churn anual: **10%**;
- LTV de contribuição: **R$ 1.446.000**;
- LTV/CAC: **51,64x**;
- break-even: **15,35 empresas ativas**.

O LTV/CAC projetado é muito elevado para uma hipótese inicial. Por isso, deve ser tratado como indicador a ser desafiado, não como prova de tração. É necessário validar especialmente:

- CAC totalmente carregado;
- tempo de vendas e implantação;
- churn real e expansão da conta;
- custos de atendimento e operação;
- margem efetiva por segmento;
- proporção de receita contingente;
- sustentabilidade do success fee.

---

## 9. Tese de retorno do investidor

O cenário ilustrativo considera:

- investimento: **R$ 2.500.000**;
- participação: **20%**;
- saída equivalente a **5x o ARR**;
- ARR do Ano 5: aproximadamente **R$ 22,94 milhões**;
- valor de saída estimado: aproximadamente **R$ 114,68 milhões**;
- valor bruto da participação na saída: aproximadamente **R$ 22,94 milhões**;
- MOIC bruto: aproximadamente **9,17x**.

Esse cálculo não é valuation formal e não contempla, entre outros fatores:

- diluição futura;
- preferências de liquidação;
- impostos;
- custos de transação;
- dívida;
- novas rodadas;
- risco de execução;
- alterações no múltiplo de saída;
- diferença entre ARR recorrente e receitas de projetos ou success fees.

O resultado deve ser apresentado como cenário de sensibilidade para discussão, nunca como promessa de retorno.

---

## 10. Sensibilidade

A aba **Sensibilidade** mostra o impacto combinado de quantidade de empresas e fee mensal sobre:

- ARR recorrente anual;
- EBITDA anual aproximado após custos variáveis e OPEX do Ano 1.

A matriz testa empresas entre 25 e 500 e fees mensais entre R$ 4.900 e R$ 24.900.

A análise serve para responder perguntas como:

- quantas empresas são necessárias para sustentar determinado nível de receita;
- qual combinação de ticket e escala produz EBITDA positivo;
- quanto a tese depende de um plano Enterprise;
- qual é o impacto de vender para uma base menor com maior valor por conta;
- quais cenários permanecem viáveis caso a aquisição seja mais lenta.

A sensibilidade deve ser lida junto com capacidade operacional, mercado endereçável e tempo necessário para fechar e implantar cada cliente.

---

## 11. Checks e controles

A aba **Checks** verifica a coerência matemática básica do modelo. No cenário lido, os controles indicam status **OK** e o status geral do modelo aparece como **PASS** para os testes registrados:

- CAPEX fecha com a premissa;
- OPEX mensal fecha com a premissa;
- receita total do Ano 1 soma seus componentes;
- margem bruta permanece entre 0% e 100%;
- LTV/CAC é positivo.

Esses checks não substituem validação:

- comercial;
- operacional;
- contábil;
- tributária;
- jurídica;
- de mercado;
- de segurança e LGPD;
- de diligência de investimento.

Um modelo pode estar matematicamente coerente e ainda assim conter premissas comerciais excessivamente otimistas.

---

## 12. Fontes e limitações

A aba **Fontes** reúne benchmarks adjacentes de:

- métricas SaaS;
- pesquisa e experiência;
- tecnologia para eventos;
- recrutamento;
- BI;
- pagamentos.

O próprio modelo registra que não existe um benchmark único diretamente comparável ao HUB. As referências devem ser usadas como orientação por categoria, e não como validação automática do preço, margem, churn ou crescimento.

A validação principal deve vir de:

- entrevistas com compradores;
- propostas comerciais reais;
- pilotos pagos;
- contratos e renovações;
- dados de implantação;
- custos efetivos de tecnologia e suporte;
- comportamento de churn e expansão.

---

## 13. Perguntas para diligência

Antes de apresentar o modelo como caso de investimento, validar:

1. O ticket médio de R$ 8.900 é compatível com os segmentos e o escopo entregue?
2. O custo variável de R$ 850 por empresa inclui suporte, dados, infraestrutura e operação em escala?
3. O CAC de R$ 28.000 inclui todo o ciclo de venda, implantação e tempo da equipe?
4. É realista adquirir 24 empresas médias no primeiro ano?
5. O success fee é recorrente, contratualmente garantido ou contingente?
6. A margem bruta acima de 93% permanece válida quando a operação human-in-the-loop crescer?
7. O churn anual de 10% foi observado ou é apenas hipótese?
8. A empresa consegue entregar 170 clientes ativos sem crescimento proporcional de OPEX e headcount?
9. O múltiplo de saída de 5x ARR é adequado para a composição híbrida da receita?
10. O investimento de R$ 2,5 milhões cobre produto, segurança, vendas, implantação e runway necessários?

---

## 14. Conclusão

O modelo financeiro apresenta uma tese de crescimento em que a HUB combina receita recorrente de software com serviços, projetos, eventos e success fees. O cenário-base mostra break-even relativamente baixo, expansão acelerada de margem e retorno potencial elevado para o investidor.

A força do modelo está em conectar preço, valor econômico, escala, unit economics e sensibilidade. Seu principal limite é que os resultados dependem de hipóteses ainda sujeitas à validação comercial e operacional.

> **A planilha deve ser usada como instrumento de decisão e aprendizagem: testar premissas, revelar dependências, comparar cenários e orientar os próximos experimentos — não como substituto de evidência.**
