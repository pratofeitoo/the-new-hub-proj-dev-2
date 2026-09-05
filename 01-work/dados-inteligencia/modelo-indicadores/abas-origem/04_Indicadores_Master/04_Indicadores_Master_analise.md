# Análise — Indicadores Master

**Arquivo analisado:** `01-tabs-csv/04_Indicadores_Master/04_Indicadores_Master.csv`
**Escopo:** catálogo completo de indicadores, definições, fórmulas, fontes, governança e conversão financeira.
**Data da análise:** 2026-08-20
**Idioma:** pt-BR

## 1. Resumo executivo

O catálogo contém **73 indicadores**, distribuídos em oito vertentes. É uma base forte para um modelo de medição ponta a ponta: insumo/qualidade → ação/processo → resultado → impacto financeiro. Todos os registros têm ID único e nenhum campo obrigatório vazio. Há **20 indicadores em M0**, 27 em M1 e 26 em M2; portanto, o MVP está claramente delimitado, mas ainda é amplo para uma primeira entrega.

Principais conclusões:

- A cobertura conceitual é excelente: pessoas, RH, compras, ecossistema, marketing, produto, finanças e dados estão representados.
- O catálogo é predominantemente orientado a resultado/impacto (**44 de 73** em Resultado ou Impacto) e a evidência ainda é majoritariamente descritiva (**34**) ou quase-experimental (**32**). Só há um indicador experimental (`PRO-08`).
- Fórmulas estão presentes em todos os registros, mas várias dependem de parâmetros ainda não especificados: pesos, confiança, recência, baseline, atribuição, comparável, margem, teto e regras de deduplicação.
- Há boa disciplina de polaridade (56 “maior”, 15 “menor”), porém `PRO-02` usa “faixa ótima” sem limites e `COM-08` é “Contextual” sem critério de leitura.
- A camada financeira é consistente, mas existe risco de dupla contagem entre receita, margem, saving, custo evitado, risco evitado e benefícios agregados.
- O MVP deve começar por instrumentação e funil operacional, não por ROI. Indicadores financeiros de M2 dependem de identidade resolvida, outcomes confirmados, contratos/ERP e um protocolo de atribuição.

## 2. Estrutura e cobertura

| Vertente | Qtde | Camadas principais | Visões | Leitura |
|---|---:|---|---|---|
| Pessoas | 10 | Insumo, Sinal, Ação, Resultado, Impacto | Pessoa | Funil pessoa completo, com prontidão e outcome |
| Empresas / RH | 10 | Insumo, Sinal, Processo, Resultado, Impacto | RH, Executiva | Boa ponte entre operação de pessoas e valor financeiro |
| Compras / Fornecedores | 9 | Insumo, Processo, Resultado, Impacto | Compras, Executiva | Forte foco em match, ciclo e saving |
| Entidades / Ecossistema | 8 | Insumo, Ação, Resultado, Impacto | Entidade, Executiva | Ativação e rede bem cobertas; poucos sinais leading |
| Marketing / Mídia | 8 | Insumo, Ação, Resultado, Impacto | Marketing, Executiva | Funil de alcance a margem, dependente de CRM |
| Produto / Plataforma | 10 | Insumo, Ação, Processo, Resultado, Impacto | Produto, Inteligência, Executiva | Melhor ponte entre uso, recomendação e receita |
| Financeiro / Impacto | 10 | Impacto | Executiva, HUB | Camada de consolidação; requer deduplicação rigorosa |
| Inteligência / Dados | 8 | Qualidade, Modelo, Evidência | Dados, Inteligência, Executiva | Governança técnica e confiança do impacto |

**Distribuição transversal:** 6 Insumo, 3 Sinal, 6 Ação, 6 Processo, 3 Qualidade, 4 Modelo, 21 Resultado, 23 Impacto e 1 Evidência. Há concentração deliberada em impacto, mas os indicadores de qualidade e causalidade precisam ser tratados como pré-condições, não como anexos.

## 3. Inventário de todos os indicadores

Legenda: **M0** = MVP; **M1** = segunda onda; **M2** = maturidade/atribuição financeira.

### Pessoas (10)

| ID | Indicador | Camada | Owner | Evidência | Fase | Avaliação |
|---|---|---|---|---|---|---|
| PES-01 | Completude do perfil | Insumo | Produto | Descritivo | M0 | Bem definido; validar campos essenciais por persona e consentimento. |
| PES-02 | Índice de prontidão | Sinal | Inteligência | Descritivo | M0 | Útil, mas exige dicionário de pesos, confiança e recência. |
| PES-03 | Gap crítico de capacidade | Sinal | RH | Descritivo | M1 | Fórmula não explicita normalização, limiar mínimo ou população. |
| PES-04 | Aceitação de recomendação | Ação | Produto | Descritivo | M0 | Depende de definição de entrega, prazo e ação válida. |
| PES-05 | Conclusão de jornada | Ação | Produto / LMS | Descritivo | M0 | Requer jornada versionada e regra de início/conclusão. |
| PES-06 | Evolução de capacidade | Resultado | Inteligência | Quase-experimental | M1 | Bom outcome; controlar efeito de teste e regressão à média. |
| PES-07 | Tempo até oportunidade | Resultado | Operações | Correlação | M1 | Requer datas de elegibilidade, aceite e censura de casos abertos. |
| PES-08 | Mobilidade / conexão efetiva | Resultado | Operações | Quase-experimental | M1 | Outcome forte; precisa confirmação e janela de atribuição. |
| PES-09 | NPS da jornada | Resultado | CX | Descritivo | M1 | Não usar como valor financeiro sem relação validada com churn. |
| PES-10 | Valor gerado por pessoa | Impacto | Financeiro | Quase-experimental | M2 | Depende de benefício deduplicado e população impactada inequívoca. |

### Empresas / RH (10)

`RH-01` (Cobertura de capacidades, M0), `RH-02` (Risco de lacuna crítica, M1), `RH-03` (Time-to-fill, M1), `RH-04` (Custo por contratação, M1), `RH-05` (Qualidade da contratação, M2), `RH-06` (Time-to-productivity, M2), `RH-07` (Turnover evitável, M2), `RH-08` (Absenteísmo evitado, M2), `RH-09` (Ganho de produtividade, M2), `RH-10` (ROI de desenvolvimento, M2).

Todos têm owner e fonte plausíveis. `RH-02` precisa de unidade/escala para “índice”; `RH-05` precisa pesos e definição operacional de fit; `RH-07` exige desenho de comparáveis; `RH-08` exige governança de dados de saúde; `RH-09` e `RH-10` dependem de teto de atribuição e custos completos.

### Compras / Fornecedores (9)

`COM-01` (Cobertura de categorias, M0), `COM-02` (Tempo de homologação, M1), `COM-03` (Taxa de match elegível, M0), `COM-04` (Ciclo de contratação, M1), `COM-05` (Conversão match → contrato, M1), `COM-06` (Saving comprovado, M2), `COM-07` (Desempenho do fornecedor, M2), `COM-08` (Spend influenciado pela HUB, M1), `COM-09` (Risco de fornecimento evitado, M2).

O funil está completo. `COM-03` precisa de requisitos obrigatórios versionados; `COM-06` precisa de preço de referência, volume e validação da controladoria; `COM-08` é indicador de influência, não de receita — não somar diretamente a `FIN-08`; `COM-09` depende de probabilidade, impacto e atribuição documentados.

### Entidades / Ecossistema (8)

`ENT-01` (Cobertura de associados, M0), `ENT-02` (Ativação de associados, M0), `ENT-03` (Densidade da rede, M1), `ENT-04` (Valor entregue por associado, M2), `ENT-05` (Renovação de associados, M2), `ENT-06` (Receita de novos serviços, M1), `ENT-07` (Adoção de benchmark, M2), `ENT-08` (Impacto econômico do ecossistema, M2).

`ENT-03` requer denominador de conexões qualificadas possíveis; `ENT-05` precisa definir coorte e elegibilidade de renovação; `ENT-06` deve exigir origem HUB rastreável; `ENT-08` é agregador executivo e deve consumir somente benefícios já deduplicados.

### Marketing / Mídia (8)

`MKT-01` (Alcance qualificado, M0), `MKT-02` (Custo por lead qualificado, M0), `MKT-03` (Conversão lead → oportunidade, M0), `MKT-04` (Pipeline influenciado, M1), `MKT-05` (Margem incremental de campanha, M2), `MKT-06` (ROAS de margem, M2), `MKT-07` (CAC por produto, M1), `MKT-08` (Conteúdo → ação, M1).

É um funil acionável. `MKT-04` deve manter separação entre pipeline ponderado e receita fechada; `MKT-05`/`MKT-06` necessitam experimento ou controle e margem de contribuição; `MKT-07` deve incluir custo de vendas e coortes; `MKT-08` é correlação e não deve ser tratado como causalidade.

### Produto / Plataforma (10)

`PRO-01` (Ativação, M0), `PRO-02` (WAU/MAU, M0), `PRO-03` (Adoção por módulo, M0), `PRO-04` (Time-to-value, M1), `PRO-05` (Retenção de cohort, M1), `PRO-06` (Churn de clientes, M1), `PRO-07` (Precisão do match, M1), `PRO-08` (Uplift da recomendação, M2), `PRO-09` (ARR, M0), `PRO-10` (LTV/CAC, M2).

`PRO-02` é o único com polaridade “faixa ótima”: é necessário declarar faixa por tipo de produto/coorte. `PRO-07` precisa escolher a métrica ranking adequada e tratar aceites como feedback enviesado. `PRO-08` é o único experimental, devendo ser a âncora de causalidade. `PRO-10` é sensível a churn baixo, margem e CAC por coorte; não usar com denominadores imaturos.

### Financeiro / Impacto (10)

`FIN-01` Benefício bruto atribuído (M2), `FIN-02` Benefício líquido (M2), `FIN-03` ROI do cliente (M2), `FIN-04` Payback (M2), `FIN-05` Margem incremental (M2), `FIN-06` Custo evitado (M2), `FIN-07` Risco evitado (M2), `FIN-08` Receita HUB por vertente (M0), `FIN-09` Margem de contribuição HUB (M1), `FIN-10` Receita recorrente líquida (M1).

`FIN-08` é o único indicador financeiro de M0 porque mede receita reconhecida observável. `FIN-01` a `FIN-07` devem permanecer bloqueados até existir protocolo de atribuição, deduplicação, período de referência e validação financeira. `FIN-10` deve explicitar que a leitura é NRR e separar expansão, contração e churn por coorte.

### Inteligência / Dados (8)

`DAT-01` Completude de dados críticos (M0), `DAT-02` Atualidade dos dados (M0), `DAT-03` Taxa de identidade resolvida (M0), `DAT-04` Cobertura de score (M1), `DAT-05` Acurácia / calibração (M1), `DAT-06` Fairness do modelo (M1), `DAT-07` Drift de dados / modelo (M1), `DAT-08` Índice de confiança do impacto (M2).

São dependências de governança, não apenas KPIs técnicos. `DAT-05` precisa mapear AUC/MAE/Brier ao tipo de modelo; `DAT-06` precisa definir grupos protegidos, limiares e métricas; `DAT-07` precisa de baseline e janela de alerta; `DAT-08` precisa pesos, escala e regra explícita de haircut financeiro.

## 4. Qualidade dos campos e fórmulas

### Pontos fortes

- 73/73 IDs únicos e preenchimento 100% dos campos do schema.
- Pergunta de gestão, definição, fórmula, unidade, polaridade, frequência, fonte, dimensões, owner, tipo, alavanca, conversão, evidência, prioridade e fase presentes em todas as linhas.
- Unidades são adequadas na maior parte dos casos: `%`, `R$`, dias, score, pontos, `x` e NPS.
- Cada indicador declara fonte mínima e cortes, o que favorece um modelo dimensional e dashboards por coorte.

### Lacunas de especificação

1. **Denominadores e elegibilidade:** vários indicadores de razão não estabelecem inclusão, exclusão, janela, mínimo de denominador ou tratamento de zero.
2. **Parâmetros:** pesos, confiança, recência, criticidade, probabilidade, margem, atribuição e baseline estão nomeados, mas não versionados.
3. **Datas e eventos:** fórmulas de tempo precisam de timezone, data de início oficial, cancelamento, reabertura e censura.
4. **Causalidade:** “quase-experimental” não identifica método (matching, diferença-em-diferenças, regressão, controle sintético), unidade de análise nem intervalo de confiança.
5. **Conversão financeira:** expressões como “valor médio”, “uplift”, “custo diário”, “benefício anual” e “margem média” precisam de fonte, período e regra de atualização.
6. **Agregação:** não há campo explícito de `indicador pai`, `métrica base`, `método de atribuição`, `regra de deduplicação` ou `versão da definição`.

### Fórmulas prioritariamente a formalizar

`PES-02`, `PES-03`, `RH-05`, `RH-07`, `RH-09`, `COM-06`, `COM-07`, `COM-09`, `MKT-04`, `MKT-05`, `PRO-07`, `PRO-08`, `PRO-10`, `FIN-01`–`FIN-07`, `FIN-10`, `DAT-05`, `DAT-06`, `DAT-07` e `DAT-08`.

## 5. Dependências de dados e arquitetura

### Núcleo mínimo compartilhado

1. **Identidade/MDM:** `DAT-03` é pré-requisito para atribuição, deduplicação, joins entre CRM/HRIS/ATS/ERP e cálculo por entidade.
2. **Eventos e jornada:** necessário para `PES-04/05`, `ENT-02`, `MKT-08`, `PRO-01/02/03/04/05`.
3. **Match e outcomes:** necessário para `PES-07/08`, `COM-03/05`, `ENT-03`, `PRO-07/08`.
4. **Contratos, CRM e billing:** necessário para `COM-04/05/08`, `ENT-05/06`, `MKT-03/04/07`, `PRO-06/09/10`, `FIN-08/10`.
5. **Financeiro/controladoria:** necessário para saving, margem, custo evitado, risco evitado, ROI e benefício líquido.
6. **Cohorts e experimentação:** necessário para todos os outcomes causais e para diferenciar correlação de impacto.

### Grafo de dependências crítico

`DAT-01/02/03 → qualidade e identidade → eventos/match/outcomes → indicadores de resultado → atribuição e deduplicação → FIN-01/02/03/04/05/06/07 e ENT-08`.

O catálogo deve ser implementado como um semantic layer com métricas atômicas reutilizáveis, e não como 73 queries independentes. Isso reduz divergência entre dashboards e evita contar o mesmo outcome em mais de uma alavanca.

## 6. MVP recomendado

Os 20 indicadores marcados M0 são: `PES-01`, `PES-02`, `PES-04`, `PES-05`, `RH-01`, `COM-01`, `COM-03`, `ENT-01`, `ENT-02`, `MKT-01`, `MKT-02`, `MKT-03`, `PRO-01`, `PRO-02`, `PRO-03`, `PRO-09`, `FIN-08`, `DAT-01`, `DAT-02`, `DAT-03`.

**MVP operacional recomendado (primeiro corte):**

- Instrumentação: `DAT-01`, `DAT-02`, `DAT-03`.
- Ativação e uso: `PRO-01`, `PRO-02`, `PRO-03`, `ENT-02`.
- Cobertura: `PES-01`, `RH-01`, `COM-01`, `ENT-01`, `MKT-01`.
- Funis: `PES-04`, `PES-05`, `COM-03`, `MKT-02`, `MKT-03`.
- Receita observável: `PRO-09`, `FIN-08`.

Não transformar todos os M0 em compromissos de release único: separar uma fatia de instrumentação, uma de adoção e uma de receita. `PES-02` é valioso, mas deve entrar somente com taxonomia e pesos documentados.

## 7. Redundâncias e possíveis conflitos

- `DAT-01` e `PES-01` medem completude em níveis diferentes (dados críticos vs. perfil); manter ambos, mas explicitar a relação.
- `PRO-01`, `ENT-02` e `MKT-03` são conversões de funil distintas; não usar o mesmo denominador nem agregá-las como uma única ativação.
- `RH-06` e `PRO-04` são tempos até valor/produtividade em domínios diferentes; documentar a unidade de análise.
- `COM-06`, `FIN-06` e `FIN-05` podem capturar o mesmo ganho econômico; exigir classificação de alavanca e deduplicação.
- `COM-08`, `MKT-04` e `FIN-08` medem influência/pipeline/receita em estágios diferentes; proibir soma direta.
- `ENT-04`, `PES-10`, `FIN-01` e `ENT-08` são agregações de benefício; definir hierarquia e consumidor de cada uma.
- `RH-09`, `FIN-05` e `FIN-02` podem convergir em produtividade/margem; aplicar teto de atribuição.
- `PRO-06`, `ENT-05`, `RH-07` e `FIN-10` tratam retenção/churn em populações diferentes; definir contratos, pessoas e receita como entidades distintas.

## 8. Riscos, perguntas em aberto e readiness

### Riscos

- **Dupla contagem financeira:** risco alto em agregadores e benefícios de mesma origem.
- **Atribuição inflada:** touchpoint rastreado não prova causalidade; especialmente `COM-08`, `MKT-04` e `ENT-06`.
- **Viés de seleção:** aceitação, exposição e uso são comportamentos não aleatórios; afeta `PES-04`, `MKT-08`, `PRO-05` e `PRO-07`.
- **Privacidade/LGPD:** `PES`, HRIS, saúde, grupos protegidos e performance exigem finalidade, minimização e controles de acesso.
- **Definições instáveis:** alteração de pesos, thresholds, cohorts ou margem quebra séries históricas.
- **Ownership difuso:** owners compostos (ex.: `RH / Estratégia`) precisam de accountable único e responsável técnico.

### Perguntas que bloqueiam produção

1. Qual é o dicionário oficial de eventos, entidades, cohorts e outcomes?
2. Quais campos são “essenciais” em `PES-01`, `DAT-01` e `RH-01` por domínio?
3. Qual método de atribuição e qual teto serão usados nos benefícios?
4. Quem aprova baseline, margem, custo-hora, custo de vacância e preço de referência?
5. Quais métricas/limiares definem fairness, drift, calibração e confiança?
6. Como serão tratados casos sem outcome, contratos reabertos, cancelamentos e múltiplos touchpoints?
7. Qual é o RACI para owners compostos e quem é o data steward de cada fonte?

### Readiness por camada

| Camada | Prontidão | Condição para avançar |
|---|---|---|
| Catálogo e schema | Alta | Manter versionamento e changelog de definições. |
| Instrumentação M0 | Média-alta | Fechar dicionário de eventos, entidades e SLAs. |
| Indicadores M1 de processo/resultado | Média | Criar coortes, janelas e regras de censura. |
| Impacto causal M2 | Baixa-média | Executar desenho experimental/quase-experimental e revisão financeira. |
| Consolidação executiva | Média | Publicar regras de deduplicação e hierarquia de métricas. |

## 9. Recomendações acionáveis

1. Criar um contrato de métrica com: definição, denominador, janela, timezone, filtros, owner accountable, steward, SQL de referência, versão e testes.
2. Adicionar ao catálogo as colunas `ID da métrica base`, `Método de atribuição`, `Regra de deduplicação`, `Janela`, `Threshold`, `Data de vigência` e `RACI`.
3. Implementar primeiro `DAT-01/02/03` e um semantic layer comum para identidade, evento, match, outcome e contrato.
4. Para cada indicador M2, exigir ficha de evidência: baseline, grupo comparável, tamanho de amostra, método, intervalo de confiança, atribuição e aprovação financeira.
5. Criar testes automáticos de denominador zero, unicidade de ID, monotonicidade de datas, unidade/polaridade e consistência de cortes.
6. Definir um ledger de benefícios com chave de outcome e regra de exclusividade, consumido por `FIN-01`–`FIN-07` e `ENT-08`.
7. Rebaixar visualmente indicadores descritivos para não sugerir causalidade; destacar `PRO-08` como âncora experimental.
8. Publicar dashboards em três níveis: operação diária (qualidade/ativação), gestão mensal (processos/resultados) e executivo trimestral (impacto financeiro validado).

## 10. Verificação realizada

- Arquivo CSV lido integralmente até a linha 78.
- Contagem conferida: **73 registros de indicadores**.
- IDs conferidos: **73 únicos**, sem duplicatas.
- Campos obrigatórios conferidos: **nenhum vazio**.
- Distribuições conferidas: 8 vertentes, 20 M0, 27 M1, 26 M2; 56 polaridades “Maior”, 15 “Menor”, 1 “Contextual” e 1 “Faixa ótima”.
- Saída criada exatamente em:
  `/Users/paulorezende/Library/Mobile Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The New HUB/run-01-source/99-assets/Indicadores XLSX/01-tabs-csv/04_Indicadores_Master/04_Indicadores_Master_analise.md`
