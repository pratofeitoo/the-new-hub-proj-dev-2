# Análise da aba 14_RACI

## Escopo e leitura

Análise exclusiva do arquivo `14_RACI.csv`, que define a matriz de responsabilidades para dados, métricas e valor. A matriz contém **13 atividades**, **10 papéis** e uma coluna de observações. A legenda usada é: `R` executa, `A` responde pelo resultado, `C` é consultado e `I` é informado.

## Estrutura

### Papéis

- CEO HUB
- Produto
- Data Eng.
- Data Science
- Financeiro HUB
- Cliente / patrocinador
- Owner do processo
- Controladoria cliente
- DPO / Segurança
- Entidade

### Fluxo coberto

1. Definir objetivo e decisão
2. Definir indicador e fórmula
3. Instrumentar eventos
4. Integrar fontes
5. Garantir consentimento e acesso
6. Certificar qualidade
7. Definir baseline e cohort
8. Calcular efeito
9. Monetizar benefício
10. Aprovar benefício
11. Publicar dashboard
12. Monitorar modelo
13. Decidir escala / correção

O fluxo é coerente com um ciclo decisão → mensuração → engenharia/governança → experimento → monetização → publicação → monitoramento → decisão de escala.

## Cobertura RACI

- Todas as 13 atividades têm pelo menos um `R` e um `A`.
- Não há células vazias nos 10 papéis.
- Contagem das marcações: **R = 16**, **A = 19**, **C = 60**, **I = 45**. A soma excede 130 porque há marcações compostas, como `A/R` e `A/C`.
- Há **6 de 13 atividades (46,2%) com mais de um `A`**: objetivo/decisão, baseline/cohort, monetização, aprovação do benefício, monitoramento de modelo e escala/correção.
- Há marcações `R` e `A` acumuladas pela mesma pessoa em instrumentação, integração de fontes, consentimento/acesso, certificação de qualidade, baseline/cohort, cálculo de efeito, monetização, aprovação do benefício e monitoramento de modelo. Em alguns casos isso é eficiente; em outros, reduz a independência do controle.

### Accountability por papel

- **Cliente / patrocinador:** 5 marcações `A`, concentradas em decisão de negócio, definição semântica, baseline/cohort, aprovação do benefício e escala/correção.
- **Data Science:** 3 marcações `A`, em baseline/cohort, efeito e modelo.
- **CEO HUB:** 2 marcações `A`, em objetivo/decisão e escala/correção.
- **Produto:** 2 marcações `A`, em instrumentação e publicação.
- **Data Eng.:** 2 marcações `A`, em integração e qualidade.
- **Controladoria cliente:** 2 marcações `A`, em monetização e aprovação do benefício.
- **DPO / Segurança:** 2 marcações `A`, em consentimento/acesso e monitoramento de modelo.
- **Financeiro HUB:** 1 marcação `A`, em monetização.
- **Owner do processo:** **0 marcações `A`**.
- **Entidade:** **0 marcações `A` e 0 `R`**.

## Findings

### Pontos fortes

1. A matriz cobre o caminho completo até a decisão de escala, não apenas a produção do dashboard.
2. Engenharia tem accountability explícita para integração e qualidade, com observações sobre SLA, linhagem e quality gate.
3. Privacidade e acesso possuem um gate explícito, com DPO / Segurança como `A/R`.
4. Data Science responde por efeito, cohort e monitoramento de modelo, incluindo fairness e drift.
5. O cliente participa tanto da definição de valor quanto do sign-off do benefício; Controladoria cliente também participa da validação financeira.
6. A coluna de observações traz controles úteis: contrato de dados versionado, método e incerteza registrados, conversão financeira transparente e publicação somente de métrica certificada.

### Lacunas de ownership

- O papel chamado **Owner do processo** nunca é `A`; ele aparece como `R` em objetivo/decisão, indicador/fórmula e escala/correção, e como `C`/`I` nas demais atividades. Isso cria uma lacuna entre o nome do papel e a autoridade de responder pelo processo.
- **Entidade** é apenas `C` ou `I`. Se fornece dados, opera uma fonte ou influencia definição de evento, não há responsabilidade formal por disponibilidade, qualidade, contrato ou correção da fonte.
- Não há um `A` único para a cadeia ponta a ponta. A accountability é distribuída entre cliente, CEO, Produto, Engenharia, DS, Financeiro, Controladoria e DPO.
- Não há papel explicitamente responsável por manter a matriz, arbitrar conflitos de papéis ou aprovar exceções de governança.

### Conflitos e sobreposição de papéis

- **Múltiplos `A`:** a regra de decisão e o sign-off podem ficar ambíguos quando CEO e cliente são simultaneamente `A`, ou quando cliente e Controladoria são simultaneamente `A`. É necessário indicar se é aprovação conjunta, veto, ordem de precedência ou separação por tipo de decisão.
- **R+A no mesmo papel:** Data Eng. executa e responde por integração/qualidade; Data Science executa e responde por efeito/modelo; Financeiro HUB executa e responde por monetização; Controladoria cliente executa e responde pelo benefício. Isso é aceitável como modelo enxuto, mas pede revisão independente em gates de publicação e benefício.
- **DPO / Segurança em monitoramento:** `A/C` combina accountability e consulta. A célula não explicita se o DPO responde apenas por privacidade/segurança ou também pelo controle de fairness e drift; essa fronteira deve ser documentada.
- **Produto em instrumentação:** `A/R` de Produto com `R` de Data Eng. exige definição de quem aceita o evento como semanticamente correto e quem garante a implementação técnica.

## Cobertura de governança

### Adequadamente representada

- Consentimento e acesso: gate explícito, com DPO / Segurança `A/R`.
- Qualidade: Data Eng. `A/R`, quality gate antes da publicação.
- Linhagem e SLA: citados na integração de fontes.
- Incerteza e método: exigidos no cálculo de efeito.
- Fairness e drift: citados no monitoramento de modelo.
- Sign-off financeiro: Cliente / patrocinador e Controladoria cliente participam da aprovação.

### A reforçar

- Não há `A` explícito para retenção, versionamento, evidência de auditoria ou encerramento de acesso; a matriz só cobre consentimento e acesso de forma geral.
- Não há responsável explícito por incidentes de dados/modelo, exceções ao quality gate ou rollback de dashboard/modelo.
- Não há critério de quorum ou resolução para os seis casos de múltipla accountability.
- Não há distinção explícita entre dado pessoal, dado sensível, dado agregado e dado de entidade; isso pode alterar o gate de privacidade.
- A matriz não indica periodicidade de revisão de acessos, qualidade, modelo, fairness e drift.

## Accountability de KPIs

- A definição do indicador/fórmula tem `A` do **Cliente / patrocinador** e `R` do **Owner do processo**. Isso favorece a validação de semântica de negócio, mas deixa o Owner sem autoridade formal.
- Baseline/cohort tem `A` compartilhado entre **Data Science** e **Cliente / patrocinador**; cálculo de efeito tem **Data Science** como `A/R`. Há continuidade técnica, mas a aprovação do desenho causal/metodológico deveria ter uma regra única.
- A publicação tem **Produto** como `A` e **Data Eng.** como `R`, enquanto a observação exige métrica certificada. Falta explicitar quem verifica que a certificação está válida no momento da publicação.
- Monetização e aprovação do benefício têm accountability compartilhada entre **Financeiro HUB**, **Controladoria cliente** e **Cliente / patrocinador**. O modelo cobre a conversão financeira, mas precisa separar cálculo, validação e aceite.
- A matriz não nomeia um `A` para o catálogo de KPIs, definição de meta, atualização da fórmula, descontinuação de indicador ou gestão de mudança semântica.

## Accountability de integração

- **Data Eng.** é `A/R` em integrar fontes e `A/R` em certificar qualidade, o que estabelece um dono técnico claro para ingestão, linhagem e quality gate.
- **Produto** é `A/R` em instrumentar eventos, e Data Eng. também é `R`; a divisão entre contrato semântico e execução técnica está implícita, mas não formalizada.
- **DPO / Segurança** é `C` na integração e `A/R` em consentimento/acesso; o desenho conecta integração ao gate de privacidade.
- **Entidade** é apenas `C` na integração, sem `R` por SLA ou correção de dados. Se a entidade controla a fonte, isso é uma lacuna material.
- Não há `A` explícito para reconciliação entre fontes, resolução de incidentes de pipeline, compatibilidade retroativa do contrato ou comunicação de breaking change.

## Qualidade da matriz

### Qualidade estrutural: boa, com ressalvas

- Cobertura completa de células e atividades.
- Legenda clara e papéis nomeados.
- Observações orientadas a controles reais.
- Uso consistente de combinações `A/R` e `A/C`, embora estas devam ser aceitas como convenção formal.

### Qualidade de governança: média

- A matriz garante presença de papéis, mas não garante unicidade de accountable, autoridade de veto, quorum ou escalonamento.
- O papel Owner do processo está subutilizado como autoridade, e Entidade não tem responsabilidade operacional explícita.
- As marcações não distinguem aprovação, veto, validação e consulta técnica; isso pode gerar interpretações diferentes em uma decisão urgente.

## Dependências e implicações

- A definição correta de objetivo e indicador depende da participação do cliente e do Owner do processo; sem um mecanismo para o Owner aprovar, a semântica pode ser validada por quem não opera o processo.
- Integração e qualidade dependem de contrato de dados, SLA e linhagem; a ausência de accountability da Entidade dificulta cobrar correções na origem.
- Baseline/cohort e efeito dependem de eventos instrumentados e fontes certificadas; qualquer ambiguidade anterior contamina KPI, dashboard e monetização.
- A monetização depende de cálculo Financeiro HUB e validação da Controladoria cliente; a aprovação conjunta deve ter critérios de divergência e evidência mínima.
- Publicação depende de certificação e privacidade; sem um gate operacional com evidência anexada, Produto pode publicar uma métrica formalmente certificada, mas desatualizada.
- Monitoramento de modelo depende da separação entre performance estatística, fairness, drift e privacidade; a célula `A/C` do DPO precisa de escopo explícito.

## Riscos

1. **Decisão sem dono único:** múltiplos `A` podem atrasar ou permitir decisões contraditórias.
2. **Accountability nominal sem autoridade:** Owner do processo é `R`, mas não `A`; o processo pode executar sem uma autoridade operacional reconhecida.
3. **Controle independente insuficiente:** R+A no mesmo papel em qualidade, efeito, monetização e modelo reduz o desafio independente.
4. **Risco na origem dos dados:** Entidade não responde por qualidade, SLA ou correção da fonte.
5. **Ambiguidade de sign-off:** aprovação do benefício possui `A` compartilhado; não está claro quem pode bloquear ou conceder aprovação final.
6. **Risco de publicação:** Produto responde pela publicação, mas o verificador da certificação e do gate de privacidade não está definido como etapa distinta.
7. **Risco regulatório/modelo:** fairness e drift aparecem na observação, porém sem limiares, frequência, evidência ou responsável por remediação.
8. **Risco de mudança:** não há gestão explícita de alterações de fórmula, contrato de evento, fonte ou modelo.

## Perguntas em aberto

1. O `A` deve ser único por atividade? Se não, qual é a regra de aprovação conjunta, veto e desempate?
2. Quem é o accountable final pelo processo de valor ponta a ponta: Cliente / patrocinador, Owner do processo ou CEO HUB?
3. Por que o Owner do processo não tem nenhuma marcação `A`? Isso é intencional ou lacuna de modelagem?
4. A Entidade fornece/controla alguma fonte? Em caso afirmativo, quem responde por SLA, qualidade e correção?
5. Quem mantém o catálogo de KPIs, metas, fórmulas, versões e descontinuação?
6. Quem certifica a certificação antes da publicação e pode bloquear o dashboard?
7. Qual a separação requerida entre quem calcula monetização e quem valida/aprova o benefício?
8. O DPO / Segurança é accountable por fairness e drift ou apenas consultado nesses controles?
9. Quais são os limiares, periodicidades e evidências para quality gate, fairness, drift e rollback?
10. Como são tratados incidentes, exceções, breaking changes e revogação de acesso?

## Readiness

**Pronto para discussão e desenho inicial (amarelo), não pronto para operação sem ajustes.** A matriz tem boa cobertura funcional e nenhum vazio estrutural, mas não deve ser usada como autorização operacional final enquanto não houver: (a) regra para múltiplos `A`; (b) definição da autoridade do Owner do processo; (c) accountability da Entidade quando aplicável; (d) gates, critérios, evidências e escalonamento; e (e) separação mínima de cálculo, validação e aprovação financeira.

## Recomendações

### Prioridade alta

1. Definir **um `A` primário por atividade** e registrar, quando necessário, um segundo papel como aprovador, veto ou sign-off, sem reutilizar `A` para significados diferentes.
2. Decidir se **Owner do processo** deve ser `A` para objetivo, indicador e escala/correção; manter `R` quando sua função for somente execução.
3. Adicionar accountability da **Entidade** para disponibilidade, qualidade, SLA e correção quando ela controlar a fonte.
4. Formalizar um **decision log** com evidência mínima, signatários, versão do KPI/contrato/modelo e data de validade.

### Prioridade média

5. Separar, nos gates financeiros, `R` de cálculo, `C` de validação e `A` de aprovação; explicitar o direito de veto da Controladoria cliente.
6. Transformar “métrica certificada” em checklist de publicação com validade da certificação, status de privacidade, qualidade e versão.
7. Especificar o escopo de DPO / Segurança no monitoramento: privacidade, segurança, fairness, drift ou apenas consulta.
8. Criar regras para incidentes, rollback, exceções de quality gate, breaking changes e revisão periódica da matriz.

### Prioridade baixa

9. Adicionar uma coluna de **tipo de autoridade** (decisão, veto, sign-off, consulta) ou uma nota de convenções RACI para tornar `A/R` e `A/C` inequívocos.
10. Incluir periodicidade e artefato de evidência por atividade, especialmente para acesso, qualidade, modelo e benefício.

## Verificação

- Arquivo de entrada lido: `01-tabs-csv/14_RACI/14_RACI.csv`.
- Arquivo de saída criado: `01-tabs-csv/14_RACI/14_RACI_analise.md`.
- Escopo respeitado: nenhum outro arquivo foi modificado.
- Verificação estrutural realizada sobre as 13 atividades e 10 papéis; confirmada a ausência de células RACI vazias e contabilizadas as marcações `R=16`, `A=19`, `C=60`, `I=45`.
