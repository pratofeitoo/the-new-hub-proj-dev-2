# Análise — `01_Mapa_Visual.csv`

## Escopo e função

- **Arquivo analisado:** `01-tabs-csv/01_Mapa_Visual/01_Mapa_Visual.csv`.
- **Função aparente (fato observado):** representar, em uma única visão conceitual, o fluxo “fontes → identidades → sinais → inteligência → ação → resultado → valor financeiro” da plataforma HUB.
- **Função estratégica (interpretação):** servir como mapa neural/visual da tese de conexão entre dados fragmentados, decisão, prova de valor e aprendizagem contínua.
- O arquivo é uma fonte tabular de conteúdo para uma aba visual; não contém fórmulas, métricas numéricas, IDs técnicos, datas, regras de cálculo ou evidência empírica.

## Estrutura

- **Formato:** CSV, 25 linhas; separador por vírgulas. O conteúdo usa campos vazios para espaçamento e, em diversos trechos, três vírgulas para separar blocos visuais.
- **Linha 1:** título `Mapa neural da inteligência HUB`.
- **Linha 3:** tese-resumo: `A plataforma conecta dados fragmentados até que possam sustentar uma decisão e provar valor financeiro.`
- **Linha 5:** sete estágios: `FONTES`, `IDENTIDADES`, `SINAIS`, `INTELIGÊNCIA`, `AÇÃO`, `RESULTADO`, `VALOR FINANCEIRO`.
- **Linhas 7–12:** matriz de seis exemplos, alinhando cada estágio. As entradas preservadas são:
  - `RH / ERP / ATS` → `Pessoa` → `Capacidades` → `Score de prontidão` → `Jornada recomendada` → `Produtividade` → `Horas e custo evitados`.
  - `LMS / trilhas` → `Empresa` → `Lacunas` → `Prioridade de desenvolvimento` → `Formação / mobilidade` → `Retenção` → `Turnover evitado`.
  - `CRM / marketing` → `Entidade` → `Interesses` → `Propensão / segmento` → `Campanha / conexão` → `Receita e contratos` → `Margem incremental`.
  - `Compras / contratos` → `Fornecedor` → `Desempenho` → `Risco / compatibilidade` → `Match / homologação` → `Eficiência de compras` → `Saving e ciclo reduzido`.
  - `Eventos da plataforma` → `Oportunidade` → `Comportamento` → `Recomendação` → `Projeto / solução` → `Inovação` → `Novos mercados`.
  - `Financeiro / BI` → `Programa` → `Baseline` → `Atribuição causal` → `Decisão executiva` → `Risco reduzido` → `Perda esperada evitada`.
- **Linha 15:** loop de aprendizagem: `O resultado realimenta o modelo`.
- **Linhas 17–18:** seis etapas operacionais: `1. Observar`, `2. Explicar`, `3. Recomendar`, `4. Experimentar`, `5. Monetizar`, `6. Aprender`, cada uma com sua descrição.
- **Linhas 22–25:** quatro visões integradas: `PESSOA`, `EMPRESA`, `ENTIDADE`, `HUB`, com uma pergunta orientadora para cada visão.

## Significado do conteúdo

O mapa propõe uma cadeia de transformação: fontes organizacionais e eventos geram identidades; identidades permitem interpretar sinais; sinais alimentam inteligência; inteligência orienta ações; ações produzem resultados; resultados devem ser convertidos em valor financeiro. A segunda camada (observar, explicar, recomendar, experimentar, monetizar, aprender) explicita que o sistema não deve parar na recomendação: deve comparar resultados, atribuir efeitos e atualizar o modelo.

**Fatos:** o arquivo nomeia seis famílias de fontes, seis tipos de identidade, seis famílias de sinais, seis formas de inteligência, seis ações, seis resultados e seis formas de valor financeiro. **Suposições/interpretações:** a sequência pretende ser causal ou quase causal; os exemplos parecem representar domínios de RH, aprendizagem, marketing, compras, ecossistema e finanças; os termos não definem ainda um modelo de dados ou um produto implementado.

## Achados

1. O artefato tem alta densidade estratégica: resume tese, cadeia de valor, loop de aprendizagem e quatro lentes de produto em 25 linhas.
2. Há correspondência semântica forte entre cada linha de exemplo: pessoas, empresas, entidades, fornecedores, oportunidades e programas são transformados em decisões e resultados distintos.
3. `Baseline` e `Atribuição causal` aparecem explicitamente, sinalizando uma preocupação correta com mensuração antes de declarar impacto financeiro.
4. O termo `Score de prontidão` e os demais scores/recomendações não possuem escala, limiar, confiança ou método de cálculo.
5. Os resultados financeiros (`Turnover evitado`, `Margem incremental`, `Saving e ciclo reduzido`, etc.) não especificam janela temporal, unidade monetária, fórmula, fonte ou responsável pela validação.
6. A matriz é visualmente orientada, mas o CSV não registra posições, estilos, mesclagens ou regras de renderização; a experiência final depende da planilha/apresentação consumidora.

## Qualidade

- **Conteúdo:** coerente, legível e consistente com uma narrativa de funil/loop de dados até valor.
- **Completude:** suficiente para visão conceitual; insuficiente para especificação funcional, modelo de dados, cálculo de ROI ou auditoria.
- **Estrutura tabular:** adequada para reconstrução visual, porém frágil para consumo programático devido a linhas de espaçamento, campos vazios e ausência de cabeçalho técnico formal.
- **Vocabulário:** os identificadores e rótulos são claros em pt-BR, mas alguns termos são ambíguos (`Entidade`, `Programa`, `Match`, `Saving`, `valor`, `inovação`).
- **Rastreabilidade:** não há IDs, versões, fontes, owner, data de atualização ou vínculo explícito com indicadores/abas de origem.
- **Qualidade factual:** o arquivo expressa uma tese/modelo conceitual; não permite concluir que os impactos descritos já foram medidos.

## Dependências

- **Dependência visual:** requer um consumidor que preserve agrupamentos, espaçamento e a ordem dos sete estágios.
- **Dependência semântica:** depende de definições compartilhadas para identidade, sinal, inteligência, ação, resultado, baseline, atribuição causal e valor financeiro.
- **Dependência de dados:** para operacionalização, cada fonte listada (`RH / ERP / ATS`, `LMS / trilhas`, `CRM / marketing`, `Compras / contratos`, `Eventos da plataforma`, `Financeiro / BI`) precisará de contratos de dados, chaves de identidade, periodicidade e regras de qualidade.
- **Dependência de mensuração:** depende de baseline/cohort/grupo de controle e de método de atribuição para suportar as alegações financeiras.
- Nenhuma dependência técnica (sistema, API, tabela física ou ferramenta) é declarada no CSV; qualquer mapeamento técnico abaixo é uma necessidade futura, não um fato do arquivo.

## Implicações para o New HUB

- Usar este mapa como **modelo de navegação da solução**, organizando módulos e indicadores pela cadeia Fonte → Valor, sem tratá-lo ainda como especificação executável.
- Definir um dicionário de dados e uma ontologia mínima para as quatro visões (`PESSOA`, `EMPRESA`, `ENTIDADE`, `HUB`) e para a resolução de identidade entre fontes.
- Transformar cada linha da matriz em uma ficha de caso de uso com: população, decisão, ação, resultado, baseline, grupo de comparação, fórmula financeira, owner e evidência.
- Manter o loop `Observar → Explicar → Recomendar → Experimentar → Monetizar → Aprender` como requisito de governança: recomendação sem experimento/medição não deve ser apresentada como valor comprovado.
- Separar no produto o que é sinal/modelo preditivo do que é resultado observado e do que é valor atribuído; isso reduz risco de confundir propensão com impacto.

## Riscos e lacunas

- **Risco de causalidade:** os pares ação–resultado podem ser lidos como causalidade estabelecida, embora o arquivo não forneça evidência.
- **Risco de identidade:** `Pessoa`, `Empresa`, `Entidade`, `Fornecedor`, `Oportunidade` e `Programa` podem se sobrepor sem uma regra de identidade e governança.
- **Risco de dupla contagem:** produtividade, receita, margem, saving e perda evitada podem ser contabilizados simultaneamente sem regras de exclusão.
- **Risco de definição:** `Valor financeiro` pode misturar economia, receita, margem, custo evitado e valor esperado; é necessário padronizar natureza e reconhecimento.
- **Risco de modelo:** não há indicação de explicabilidade, versão, confiança, drift, revisão humana ou tratamento de vieses.
- **Lacuna de governança:** não estão definidos consentimento, acesso, privacidade, retenção, auditoria e responsabilidade por dados de pessoas e empresas.
- **Lacuna operacional:** não há SLAs, eventos de atualização, estados de workflow, critérios de sucesso ou tratamento de dados ausentes.

## Perguntas em aberto

1. Os sete estágios são um pipeline obrigatório, uma taxonomia ou apenas uma metáfora visual?
2. Qual é a definição operacional e a chave de cada tipo de identidade?
3. Como `Score de prontidão`, `Propensão / segmento`, `Risco / compatibilidade` e `Atribuição causal` são calculados e validados?
4. Quais resultados são observados diretamente e quais são estimados/contrafactuais?
5. Qual unidade, período e fórmula convertem cada resultado em `Valor financeiro`?
6. Como evitar que o mesmo benefício seja atribuído a mais de uma ação, programa ou visão?
7. Quais fontes são prioritárias para o primeiro caso de uso e quais integrações são realmente disponíveis?
8. Que evidência mínima habilita a passagem de recomendar para monetizar?
9. Quem aprova a ação, valida o resultado e atualiza pesos/regras/benchmark/confiança?
10. O artefato deve permanecer como mapa executivo ou evoluir para um modelo de dados e catálogo de indicadores?

## Prontidão

- **Prontidão conceitual:** alta para comunicação da tese e alinhamento inicial.
- **Prontidão para desenho de produto:** média; há bons eixos de decomposição, mas faltam definições e priorização.
- **Prontidão para implementação:** baixa; faltam contratos de dados, regras de identidade, especificações de modelos, métricas, fórmulas financeiras e governança.
- **Prontidão para alegar impacto financeiro:** baixa; o próprio loop indica a necessidade de baseline, controle/cohort e atribuição, ainda não documentados.

## Recomendações

1. Preservar o mapa como artefato executivo e criar, separadamente, um dicionário versionado dos termos e identificadores.
2. Criar uma ficha por linha da matriz com definição, fonte, chave, indicador, owner, baseline, método de atribuição e evidência requerida.
3. Definir um primeiro caso de uso de ponta a ponta, com escopo estreito e métrica financeira verificável, antes de tentar cobrir todas as fontes/visões.
4. Formalizar o modelo de mensuração: unidade, período, baseline, grupo de comparação, confundidores, regra de atribuição e limites de confiança.
5. Adicionar metadados ao artefato futuro (versão, data, owner, status, origem e links) sem alterar os rótulos conceituais já utilizados.
6. Validar com especialistas de domínio os significados de `Turnover evitado`, `Margem incremental`, `Saving e ciclo reduzido`, `Novos mercados` e `Perda esperada evitada`.
7. Definir controles para privacidade, acesso, explicabilidade, revisão humana, drift e auditoria antes de ativar recomendações sobre pessoas ou organizações.
