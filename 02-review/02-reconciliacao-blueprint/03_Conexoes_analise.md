---
status: em-revisao
---

# Análise — Conexões do mapa neural

## Escopo e evidência analisada

- **Arquivo:** `01-tabs-csv/03_Conexoes/03_Conexoes.csv`
- **Linhas:** 25 no total; 4 linhas de cabeçalho/título/descrição e 20 registros de conexão (`E01` a `E20`) na camada conceitual. A equivalência contratual refinada (`REL-01`–`REL-12`, incluindo REL-10–12 adicionadas na Wave 2) está consolidada em [[mapeamento-identidade-relacoes-sequenciamento-v1]].
- **Domínio:** relações entre pessoas, empresas, entidades, competências, oportunidades, programas, outcomes, indicadores, fornecedores, contratos, transações, modelos e consentimentos.
- **Evidência primária:** a própria linha de cada conexão informa origem, relação, destino, direção, peso/score, janela temporal, fonte de evidência, indicadores derivados, uso de negócio e regra de qualidade.
- **Limitação:** não há chaves técnicas dos nós, timestamps, valores de score, versões de fonte, cardinalidade explícita ou amostras de fatos relacionais; portanto a análise valida o desenho conceitual, não a integridade de uma instância operacional.

## Estrutura

O cabeçalho efetivo está na linha 5, com 11 colunas: `ID`, `Nó origem`, `Relação`, `Nó destino`, `Direção`, `Peso / score`, `Janela temporal`, `Evidência`, `Indicadores derivados`, `Uso de negócio` e `Regra de qualidade`. A linha 1 funciona como título, a linha 3 como descrição e as linhas 2 e 4 são separadores vazios (` ,`), o que exige tratamento específico na importação.

Os 20 IDs são únicos e sequenciais (`E01`–`E20`). O conjunto contém 20 arestas dirigidas, sem conexão explicitamente bidirecional. Há 32 tipos de nó nominal (incluindo variantes com barra, como `Programa / projeto`, `Fornecedor / solução` e `Conteúdo / campanha`) e 20 verbos/relacionamentos distintos. **Leitura reconciliada:** 20 é a camada-fonte conceitual; o contrato aprovado é REL-01–REL-12, com nível de evidência na aba 07. A tabela E→REL completa está em [[mapeamento-identidade-relacoes-sequenciamento-v1]].

### Inventário por função

- **Pessoas e capacidade:** E01, E03, E05, E07, E19 e E20.
- **Comercial e receita:** E02, E04, E10, E11, E12, E13 e E16.
- **Eficácia/valor e causalidade:** E08, E09 e E15.
- **Governança, risco e modelos:** E14, E17 e E18.
- **Recomendação e jornada:** E05 e E06.

O grafo começa em entidades de negócio e de dados, atravessa intervenções e matching, e chega a contrato, transação, KPI, risco e consentimento. Ainda não há um identificador comum ou tabela de nós que permita provar que `Pessoa`, por exemplo, significa a mesma entidade em todas as arestas.

## Validade de origem e destino

### Pontos fortes

1. Todas as 20 arestas possuem origem, destino, relação, direção, janela temporal, evidência e regra de qualidade preenchidos.
2. A direção textual é consistente com a semântica declarada: `Pessoa → Empresa` em E01, `Contrato → Transação` em E12, `Modelo → Match` em E18 e `Consentimento → Pessoa` em E20.
3. Os destinos são úteis para derivar métricas: `Indicador de negócio` aparece como resultado de outcome, risco e benchmark; `Contrato` e `Transação` materializam o funil comercial-financeiro.

### Incertezas e riscos de validade

- **Catálogo ausente:** não existe dicionário de nós com chave, tipo, status, sistema mestre e regras de existência. A grafia pode divergir entre abas/sistemas (`Empresa`, `Entidade`, `Cohort`, `Programa / projeto`).
- **Tipos ambíguos:** `Match` é tratado como nó de primeira classe em E11 e E18, mas não está definido se é uma oportunidade de matching, uma decisão persistida ou um resultado versionado. `Outcome individual` também precisa de definição e granularidade.
- **Mistura de entidade e evento:** `Interação`, `Participação`, `Transação` e `Consentimento` parecem fatos/eventos; `Pessoa`, `Empresa`, `Competência`, `KPI` e `Benchmark` parecem entidades ou conceitos. Sem tipagem, uma implementação pode aplicar chaves e retenção incorretas.
- **Relações entre camadas heterogêneas:** E08 (`Programa / projeto` altera `Outcome individual`) e E09 (`Outcome individual` contribui para `Indicador de negócio`) indicam causalidade, enquanto E01/E02 são vínculos cadastrais. As exigências de evidência, atualização e revisão não são equivalentes.
- **E20 parece invertida para alguns usos:** `Consentimento → Pessoa` é semanticamente possível, mas o registro deveria carregar também finalidade, titular, escopo, canal, versão do texto e data de revogação; somente o nó pessoa não identifica o ato autorizativo.

## Direção e cardinalidade esperada

A direção deve ser preservada como aresta orientada, pois os sentidos não são intercambiáveis. Recomenda-se registrar cardinalidade mínima/máxima como contrato de dados:

| ID(s) | Relação | Cardinalidade provável | Observação |
|---|---|---|---|
| E01 | Pessoa possui vínculo com Empresa | Pessoa 0..N ↔ Empresa 0..N, por vigência | N:N temporal; não permitir sobreposição incompatível do mesmo papel/FTE. |
| E02 | Empresa é associada a Entidade | Empresa 0..N → Entidade 0..N | Provável N:N contratual; exigir status e vigência por associação. |
| E03 | Pessoa demonstra Competência | Pessoa 0..N → Competência 0..N | N:N com score, fonte, data e validade. |
| E04 | Oportunidade requer Competência | Oportunidade 1..N → Competência 0..N | Requisitos podem ser obrigatórios/opcionais; peso deve ser por requisito. |
| E05 | Pessoa recebe Recomendação | Pessoa 0..N → Recomendação; recomendação pode atingir 1 pessoa ou cohort | Definir se uma recomendação é única por pessoa/modelo/janela. |
| E06 | Recomendação propõe Jornada | Recomendação 1..N → Jornada 0..N | Pode haver mais de uma jornada ranqueada; prioridade e expiração precisam ser explícitas. |
| E07 | Pessoa participa de Programa / projeto | N:N temporal/eventual | Uma pessoa pode ter múltiplas exposições; deduplicar por evento. |
| E08 | Programa / projeto altera Outcome individual | Programa 0..N → Outcome; outcome pode receber múltiplas exposições | Exige desenho causal e associação pré/pós, não apenas vínculo. |
| E09 | Outcome individual contribui para Indicador de negócio | N:N | Não confundir contribuição modelada com causalidade comprovada. |
| E10 | Fornecedor / solução responde a Oportunidade | N:N | Um fornecedor pode responder a várias oportunidades e vice-versa; requisitos obrigatórios devem ser rastreáveis. |
| E11 | Match gera Contrato | Match 0..1 → Contrato 0..N | Confirmar se contrato pode nascer de vários matches/touchpoints; evitar atribuição duplicada. |
| E12 | Contrato gera Transação | 1..N → 0..N | Transações podem ter parcelas/ajustes; exigir chave de conciliação e competência. |
| E13 | Conteúdo / campanha influencia Oportunidade | N:N | Touchpoints múltiplos e modelos de atribuição devem coexistir sem duplicar pipeline. |
| E14 | Diagnóstico identifica Risco / controle | 1..N → 0..N | Diagnóstico versionado; risco pode ser identificado por vários diagnósticos. |
| E15 | Risco / controle afeta Indicador de negócio | N:N | `perda esperada` requer probabilidade, impacto, período e método. |
| E16 | Empresa é comparada em Benchmark | Empresa N → Benchmark 1..N | Comparação deve ser por período, população, métrica e anonimização; benchmark não é necessariamente entidade individual. |
| E17 | Interação atualiza Recomendação | N:N temporal/eventual | Interação deve possuir evento válido, consentimento e ordenação temporal. |
| E18 | Versão de modelo produz Match | 1 versão → N matches | Versionar modelo, features e dataset; match não deve perder seu produtor original. |
| E19 | Cohort contém Pessoa | N:N temporal/analítico | Critérios precisam ser imutáveis na análise e o pertencimento deve ser congelado por janela. |
| E20 | Consentimento autoriza finalidade para Pessoa | Pessoa 1 → N consentimentos; consentimento 1 → N finalidades | O relacionamento real é ternário (titular–finalidade–consentimento), com revogação imediata. |

As cardinalidades acima são **hipóteses de modelagem** derivadas da semântica; devem ser confirmadas com o dicionário de dados e os sistemas fonte antes de implementação.

## Comportamento temporal

O arquivo declara temporalidade em todas as arestas, mas usa granularidades heterogêneas:

- **Vigência:** E01, E02; requer `valid_from`, `valid_to`, status e regras de não sobreposição.
- **Validade/expiração:** E03 e E05; competência precisa de data de avaliação e validade, recomendação possui janela de 7–30 dias.
- **Janelas de negócio:** E04 até fechamento, E06 janela sugerida, E10 até fechamento, E11 até 180 dias, E13 30–180 dias.
- **Eventos/duração:** E07 data e duração, E17 tempo real.
- **Pré/pós e efeitos:** E08 pré/pós; E09 1–12 meses; E15 12 meses.
- **Período comum ou release:** E12 competência, E16 mesmo período, E18 release, E19 janela analítica, E20 vigência.

Para operar corretamente, cada aresta deve ter pelo menos `observed_at` (quando o fato foi registrado), `valid_from`/`valid_to` (quando aplicável), fuso/precisão, status e política de atualização. Janelas como “até fechamento”, “tempo real” e “release” são rótulos, não campos computáveis. Também é necessário definir se uma alteração gera novo fato (append-only) ou sobrescreve o anterior.

## Evidência e auditabilidade

As fontes declaradas são coerentes com o tipo de relação: HRIS para vínculos, CRM para associações e contratos, ERP para transações, UTM/CRM para campanhas, GRC/Financeiro para riscos, MLOps para modelos e CMP para consentimento. Contudo, `Evidência` identifica apenas a classe de fonte, não o artefato auditável.

Requisito mínimo por relação: `source_system`, `source_record_id`, `extracted_at`, `observed_at`, hash ou referência do documento/evento, regra de transformação, responsável e versão do esquema. Para E03/E08/E09/E15/E18, registrar também método, versão do modelo/análise, população, baseline, intervalo de confiança ou incerteza e limitações. E08, E09 e E15 não devem ser apresentados como causalidade ou risco evitado apenas por existir uma aresta.

## Duplicidade e integridade referencial

- Não há IDs duplicados no CSV e não há pares de arestas literalmente repetidos.
- Há **potenciais duplicidades semânticas**: E05 e E17 convergem para `Recomendação`; E10 e E18 convergem indiretamente para `Match`; E11 e E12 compõem o mesmo funil; E08/E09/E15 podem contabilizar múltiplas contribuições ao KPI.
- E13 permite múltiplos touchpoints para a mesma oportunidade. Sem `attribution_id`, modelo, janela e regra de distribuição, pipeline/CAC/ROAS podem ser supercontados.
- E07 exige deduplicação por evento, mas não informa a chave do evento, o que deixa reprocessamentos e presenças duplicadas sem controle.
- E01 exige não sobreposição de vínculos ativos incompatíveis, porém o conflito deve ser definido por pessoa, empresa, papel, período e FTE; sem isso a regra é inexequível.

Para cada aresta, a chave natural sugerida é `(ID da origem, ID do destino, tipo de relação, janela/versão/evento)`, acrescida de `source_record_id`. Relações temporais precisam de restrição de unicidade adequada à sua semântica; fatos de evento devem ser idempotentes.

## Qualidade, dependências e implicações

### Qualidade observada

- **Completude:** 100% dos 20 registros têm valores nas 11 colunas; sem valores numéricos de score, não é possível avaliar distribuição ou outliers.
- **Consistência:** direções e fontes são majoritariamente coerentes; nomenclatura de nós com barras e `Evento → Recomendação` (E17 cujo nó é `Interação`) requer padronização.
- **Rastreabilidade:** há intenção explícita de auditoria e regras de qualidade por linha, mas falta identificador de evidência.
- **Validação estrutural:** linhas auxiliares antes do cabeçalho podem quebrar leitores CSV que assumem primeira linha como header.

### Dependências

1. Dicionário/catálogo de nós e relacionamentos, com IDs estáveis e sinônimos.
2. Contratos de dados dos sistemas HRIS, CRM, ERP, GRC/Financeiro, CMP, tracking, MLOps e camada analítica.
3. Modelo de fatos temporais/eventos e política de timezone, retenção, correção e reprocessamento.
4. Taxonomias de competência, jornada, oportunidade, risco, KPI e benchmark.
5. Governança LGPD para finalidade, base legal, minimização, revogação, acesso e auditoria.
6. Definições estatísticas/causais para uplift, elasticidade, perda esperada, atribuição e fairness.

### Implicações de negócio

O conjunto habilita uma narrativa ponta a ponta: pessoa e capacidade → recomendação/jornada → exposição a programa → outcome → KPI; em paralelo, fornecedor/oportunidade → match → contrato → transação. Isso permite segmentação, matching explicável, prova de eficácia, monetização e governança algorítmica. A utilidade depende de não tratar todos os vínculos como equivalentes: vínculo cadastral, evento, previsão e inferência causal exigem métricas e controles distintos.

## Riscos e perguntas em aberto

### Riscos

- Chaves ausentes podem ligar fatos de pessoas/empresas diferentes ou criar arestas órfãs.
- Atribuição múltipla em E09/E11/E13 pode inflar valor, receita influenciada, CAC ou ROAS.
- Datas e janelas apenas textuais podem produzir joins temporais incorretos.
- Consentimento incompleto ou revogação não propagada pode gerar uso incompatível com LGPD.
- Scores/modelos sem versão, data e features impedem reprodução, fairness e auditoria.
- Relações `altera`, `contribui` e `afeta` podem ser interpretadas como causalidade sem método.
- Nós/eventos sem status de validade podem manter recomendações, vínculos ou contratos expirados.

### Perguntas prioritárias

1. Qual é o catálogo oficial e a chave técnica de cada tipo de nó? Há nós compostos que precisam ser decompostos?
2. Quais cardinalidades são obrigatórias e quais fatos podem ficar sem destino (órfãos) durante ingestão?
3. E17 deve usar `Interação → Recomendação` ou `Evento → Recomendação`? `Interação` é um subtipo de evento?
4. `Match` é resultado, decisão ou entidade de processo? Um contrato pode ser atribuído a múltiplos matches?
5. Como serão definidos baseline, janela de exposição, grupo de controle e método para E08/E09/E15?
6. Qual política de deduplicação e atribuição vale para E07, E11 e E13?
7. Como E20 representa múltiplas finalidades, versões de texto, base legal, revogação e prova de consentimento?
8. Quais métricas de qualidade (completude, frescor, órfãos, duplicidade, cobertura de evidência) serão acompanhadas por aresta?

## Prontidão

**Classificação: parcialmente pronta para desenho lógico; não pronta para carga/produção.**

O inventário é suficientemente claro para orientar um modelo de grafo/relacional e mapear integrações, pois explicita direção, intenção temporal, evidência, indicadores e regra de qualidade em todas as conexões. Ainda faltam catálogo de nós, cardinalidades aprovadas, chaves, contratos de evento, semântica de score, identificadores de evidência e decisões sobre causalidade/atribuição. A entrada em produção deve ser bloqueada até que esses itens sejam especificados e testados com amostras.

## Recomendações

1. Normalizar o CSV para uma tabela de metadados (sem as linhas auxiliares) e validar 11 colunas, IDs únicos e enumerações.
2. Criar um catálogo de nós/arestas com `node_type`, `node_id`, nome canônico, alias, sistema mestre, status e classificação entidade/evento/conceito.
3. Adicionar ao contrato de aresta: IDs de origem/destino, cardinalidade, `valid_from`, `valid_to`, `observed_at`, timezone, status, `source_record_id`, versão e motivo de correção.
4. Definir chaves de idempotência e testes de órfãos, duplicidades, sobreposição de vigência e validade de destino por cada família de relação.
5. Separar fatos observados, scores preditivos e relações causais; exigir método e versão para E03/E05/E08/E09/E13/E15/E18.
6. Formalizar um modelo de atribuição para touchpoints E11/E13 e uma política de contagem para contribuições E09/E15.
7. Modelar consentimento como relação titular–finalidade–consentimento, com revogação e propagação imediata para recomendações, tracking e análises.
8. Executar uma carga piloto de cada família (HRIS, CRM, ERP, tracking, MLOps, CMP) e produzir relatório de cobertura de evidência, frescor, órfãos e duplicidades antes de liberar indicadores.

## Verificação desta análise

- Conferido o CSV fonte inteiro, incluindo cabeçalhos, separadores e registros E01–E20.
- Confirmada a ausência de arquivos adicionais na pasta `03_Conexoes` antes da criação.
- Saída criada exclusivamente em:
  `01-tabs-csv/03_Conexoes/03_Conexoes_analise.md`
- Nenhum outro arquivo foi modificado.
