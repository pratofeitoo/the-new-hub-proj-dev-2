---
status: em-revisao
---

# Análise — Roadmap de metrificação

## Escopo e leitura executiva

Esta análise considera exclusivamente `12_Roadmap.csv`. O arquivo descreve uma progressão de metrificação em cinco fases: organizar a base (M0), conectar ações a resultados (M1), provar valor (M2), prever riscos e oportunidades (M3) e escalar inteligência de ecossistema (M4).

A lógica geral é consistente: primeiro garantir linguagem, identidade e eventos; depois conectar fontes e outcomes; só então atribuir valor, prever e comparar entre entidades. O roadmap é **estrategicamente coerente, mas operacionalmente condicionado a gates explícitos de qualidade de dados, ownership e não duplicidade de valor**.

## Estrutura

- **M0 — Organizar (0–8 semanas):** taxonomia, IDs, eventos, catálogo e dashboards operacionais; habilita cadastro, completude, ativação, eventos e ARR.
- **M1 — Conectar (2–5 meses):** grafo de relações, cohorts e integrações com RH, compras e marketing; habilita matching, conversão, ciclo, adoção, churn e pipeline.
- **M2 — Provar (5–9 meses):** value mart, simulador, estudos quase-experimentais e sign-off; habilita produtividade, retenção, saving, risco, ROI e payback.
- **M3 — Prever (9–14 meses):** modelos preditivos, propensão, alertas e model cards; habilita precisão, calibração, uplift, drift e fairness.
- **M4 — Escalar (14–24 meses):** benchmarks anônimos, marketplace e serviços por segmento; habilita valor por associado, densidade, NRR e impacto econômico.

Há sobreposição temporal entre fases (por exemplo, M1 começa antes do fim do horizonte de M0). Isso é viável apenas se as entregas de cada fase forem liberadas por domínio ou fonte, e não declaradas concluídas de forma global antes do gate de saída.

## Achados principais

### 1. Dependências e sequência realista

1. **M0 é pré-requisito estrutural:** sem taxonomia, IDs, catálogo de métricas e eventos críticos confiáveis, matching de M1 e atribuição de M2 produzirão resultados não auditáveis.
2. **M1 depende de identidade e contratos de dados:** o grafo e os cohorts exigem chaves estáveis entre CRM, plataforma, ATS, LMS, SRM, mídia e contratos. A integração deve começar por fontes com maior valor e menor variabilidade.
3. **M2 depende de baseline temporal:** estudos quase-experimentais e ROI não devem iniciar apenas quando o value mart estiver pronto; o baseline deve ser definido e congelado durante M0/M1 para evitar baseline tardio e viés retrospectivo.
4. **M3 depende de outcomes observados:** modelos só devem ser treinados após existir volume, qualidade e janela de resultado suficientes. A saída de M2 (“valor com evidência”) é condição de seleção de targets e labels.
5. **M4 depende de governança multiempresa:** benchmark anônimo, data shares e marketplace exigem consentimento, contratos, regras de anonimização, unit economics e confiança previamente demonstrados.

### 2. Entregáveis e critérios de saída

Os critérios são bons como direção, mas precisam de definição operacional:

- **M0:** “eventos críticos >95% e métricas certificadas” deve especificar cobertura por evento, período de observação, tolerância de atraso, reconciliação e responsável pela certificação.
- **M1:** “origem e outcome rastreáveis ponta a ponta” precisa de uma matriz de lineage com identificador de origem, transformação, owner, timestamp e evidência de outcome.
- **M2:** “>70% do valor com evidência quase-experimental” precisa definir numerador, denominador, nível de confiança, unidade de análise, método aceito e tratamento de valor não mensurável.
- **M3:** “modelo supera regra e passa fairness” requer baseline comparável, conjunto de validação fora da amostra, limiares de precisão/calibração/uplift, métricas por grupo e política de drift.
- **M4:** “unit economics sustentável e confiança alta” precisa de limiar financeiro, horizonte, definição de confiança, taxa de cobertura do benchmark e critérios de anonimização.

### 3. Indicadores habilitados

Existe uma progressão adequada de indicadores operacionais para econômicos e preditivos. Recomenda-se distinguir:

- **Indicadores de saúde da base:** cadastro, completude, eventos, matching e lineage.
- **Indicadores de funil/comportamento:** ativação, conversão, ciclo, adoção, churn e pipeline.
- **Indicadores de resultado:** produtividade, retenção, saving, risco e impacto econômico.
- **Indicadores de modelo:** precisão, calibração, uplift, drift e fairness.
- **Indicadores de negócio:** ARR, ROI, payback, NRR, valor por associado e unit economics.

ARR aparece já em M0, embora a monetização do efeito só seja prevista em M2. Isso é aceitável se ARR for tratado como métrica comercial/financeira observacional, e não como prova de causalidade ou valor incremental.

## Qualidade e lacunas

- **Ponto forte:** horizonte, objetivo, entregas, integrações, gate, riscos, owner e prioridade estão presentes em todas as fases.
- **Ponto forte:** os riscos registrados acompanham a maturidade: identidade, adesão, baseline, viés/drift e governança multiempresa.
- **Lacuna de granularidade:** não há marcos intermediários, dependências entre entregas, esforço, capacidade de equipe ou plano de rollout.
- **Lacuna de definição:** “métricas certificadas”, “valor”, “evidência”, “regra”, “fairness”, “confiança alta” e “sustentável” não têm glossário ou limiares.
- **Lacuna de ownership:** owners são áreas, não papéis accountable. Falta um DRI por métrica, fonte, pipeline, gate e decisão de exceção.
- **Lacuna de operação:** não estão descritas frequência de atualização, SLA de dados, monitoramento, incidentes, versionamento de definições nem processo de desativação de indicador.
- **Lacuna de segurança/privacidade:** consentimento aparece em M0 e governança em M4, mas minimização, finalidade, retenção, acesso e anonimização devem ser gates desde a primeira integração.

## Dependências críticas

| Dependência | Fases afetadas | Condição mínima |
|---|---|---|
| Identidade e chaves estáveis | M0→M1→M2 | ID persistente, regras de deduplicação e taxa de matching monitorada |
| Catálogo e certificação de métricas | M0→todas | definição, fórmula, owner, fonte, periodicidade e teste de reconciliação |
| Instrumentação de eventos | M0→M1 | eventos críticos com cobertura, timestamp e versionamento |
| Baseline e grupo de comparação | M1→M2 | janela pré-intervenção, unidade de análise e método aprovado |
| Outcomes financeiros/operacionais | M2→M3/M4 | acesso autorizado, reconciliação e evidência auditável |
| Volume e estabilidade histórica | M2→M3 | amostra mínima, labels confiáveis e janela de validação fora da amostra |
| Governança e contratos multiempresa | M3→M4 | finalidade, consentimento/base legal, anonimização, controles e acordo de compartilhamento |

## Implicações

- O roadmap deve ser executado como **pipeline de evidência**, não como simples calendário de funcionalidades.
- M1 pode iniciar em paralelo com M0 apenas em fontes que já tenham IDs, owner e eventos minimamente confiáveis; o restante deve permanecer bloqueado.
- M2 deve financiar a disciplina de mensuração: sem registro de baseline desde cedo, o simulador e o ROI tendem a transformar correlação em causalidade.
- M3 não deve ser critério de maturidade isolado: um modelo melhor que uma regra, mas baseado em outcome fraco ou enviesado, não cria decisão confiável.
- M4 amplia tanto o valor quanto o risco reputacional e regulatório; sua entrada deve depender de evidência de confiança, não apenas da conclusão temporal de M3.

## Riscos e controles recomendados

1. **Identidade fragmentada / chaves inconsistentes:** criar um dicionário de IDs, tabela de correspondência, taxa de matching por fonte e fila de exceções; bloquear uso analítico quando a cobertura cair abaixo do limiar.
2. **Falta de owner ou baixa adesão:** nomear DRI e backup por fonte/métrica, incluir SLA de atualização e instituir revisão semanal de eventos e falhas.
3. **Baseline tardio:** começar o snapshot de baseline em M0, registrar mudanças de definição e manter série histórica imutável.
4. **Dupla contagem de valor:** criar registro de claims com unidade de valor, população, período, método e exclusões; reconciliar claims antes do sign-off.
5. **Viés, pouca amostra e drift:** aprovar model cards, validação por subgrupo, monitoramento de drift, gatilhos de rollback e revisão humana para alertas de alto impacto.
6. **Governança multiempresa insuficiente:** aplicar privacy-by-design desde a ingestão, limitar finalidade, separar dados identificáveis de agregados e validar contratos antes de benchmarks ou marketplace.

## Ownership e prioridade

As prioridades do CSV são adequadas: M0 imediata; M1/M2 altas; M3/M4 médias. Porém, “Produto + Data”, “Data + Operações” etc. representam colaboração, não accountability. Para cada fase, definir:

- **Accountable:** uma pessoa/role que aceita o gate de saída.
- **Responsible:** executores por entrega e fonte.
- **Consulted:** Financeiro, Jurídico/Privacidade, GRC e entidades quando aplicável.
- **Informed:** consumidores dos dashboards, modelos e benchmarks.

Sugestão de liderança: M0 Produto/Data; M1 Data/Operações; M2 Inteligência/Financeiro; M3 Data Science com validação independente; M4 HUB com governança e representantes das entidades. A prioridade deve ser recalculada por valor esperado, risco de dependência e prontidão da fonte, não apenas pelo horizonte.

## Perguntas em aberto

1. Quais são os eventos críticos de M0 e qual o denominador de cobertura de 95%?
2. Qual é a definição oficial de “métrica certificada” e quem pode certificá-la?
3. Quais fontes entram no primeiro piloto de M1 e quais chaves ligam cada fonte?
4. O que conta como “valor” para o gate de 70% em M2? Como serão tratados benefícios intangíveis?
5. Quais métodos quase-experimentais são aceitos e qual nível de evidência é exigido?
6. Qual regra M3 servirá de baseline e quais grupos estarão cobertos pelo fairness?
7. Quais requisitos de consentimento, retenção, acesso e anonimização valem antes de M4?
8. Quais métricas terão DRI, SLA, owner de definição e owner de decisão?
9. Que capacidade de Produto, Data, Financeiro e Operações está disponível por horizonte?
10. Quais são os critérios para pausar uma fase ou rebaixar uma métrica por qualidade insuficiente?

## Prontidão

**Classificação: AMARELO — pronto para planejamento detalhado, não para execução irrestrita.**

O roadmap já oferece uma sequência estratégica e gates úteis. Antes de iniciar a execução, faltam: catálogo de métricas com definições, matriz de owners/DRIs, inventário de fontes e chaves, especificação de eventos críticos, plano de baseline, limiares quantitativos dos critérios de saída e controles de privacidade. M0 pode começar imediatamente como trabalho de fundação; M1 deve ser liberado por fonte; M2–M4 devem permanecer condicionais aos gates de evidência.

## Recomendações de sequenciamento

1. **Semanas 0–2:** nomear DRIs; inventariar fontes, chaves, eventos e consumidores; priorizar 3–5 decisões de negócio.
2. **Semanas 2–4:** aprovar taxonomia, IDs, catálogo de métricas, eventos críticos, regras de consentimento e baseline; iniciar testes de completude e reconciliação.
3. **Semanas 4–8:** publicar dashboards operacionais, medir cobertura de eventos, certificar o primeiro conjunto de métricas e operar a fila de qualidade.
4. **Meses 2–5:** conectar somente fontes que passam o gate; construir grafo/lineage, cohorts e matching; validar origem→outcome em piloto controlado.
5. **Meses 5–9:** congelar baseline, montar value mart, registrar claims, executar estudos quase-experimentais e obter sign-off Financeiro/Inteligência.
6. **Meses 9–14:** selecionar poucos casos preditivos com outcome sólido; comparar com regra simples, validar por subgrupo, publicar model cards e monitorar drift.
7. **Meses 14–24:** somente após confiança e contratos, liberar benchmarks anônimos, serviços por segmento e marketplace; acompanhar unit economics, NRR e impacto econômico.

## Conclusão

O roadmap apresenta uma maturidade crescente bem ordenada e evita, em princípio, saltar diretamente para IA ou benchmark sem fundação. O principal risco não está na sequência conceitual, mas em executar fases sobrepostas sem gates mensuráveis, sem DRI e sem baseline. A recomendação é manter a sequência M0→M1→M2→M3→M4, permitir paralelismo apenas por fonte/domínio aprovado e transformar cada critério de saída em um pacote auditável de evidências.
