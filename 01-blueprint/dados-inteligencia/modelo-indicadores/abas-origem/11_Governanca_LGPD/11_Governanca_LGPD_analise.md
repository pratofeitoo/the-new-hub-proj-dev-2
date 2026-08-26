# Análise — Governança, LGPD e confiabilidade

## Escopo e propósito

Esta análise cobre exclusivamente `11_Governanca_LGPD.csv`. A aba define os controles mínimos para que uma prova de valor seja **legal, reproduzível e defensável**, conectando governança de dados, LGPD, qualidade analítica, governança de IA, finanças e publicação executiva.

O desenho é de **gates de liberação**: controles de finalidade, base legal, minimização, segurança, pseudonimização, retenção, direitos do titular, acesso e semântica ficam concentrados em M0; baseline, reprodutibilidade, explicabilidade, fairness, drift e revisão humana aparecem em M1; atribuição, deduplicação, evidência metodológica e validação financeira aparecem em M2.

## Estrutura do CSV

- Cabeçalho editorial: título e frase de propósito nas linhas 1–3.
- Cabeçalho tabular na linha 5, com 10 colunas: `Dimensão`, `Regra`, `Aplicação prática`, `Evidência / artefato`, `Owner`, `Cadência`, `Severidade`, `Bloqueia publicação?`, `Indicador` e `Fase`.
- Corpo: 23 dimensões (linhas 6–28), organizadas em quatro blocos implícitos:
  1. **LGPD e governança de dados:** finalidade, base legal, minimização, segurança, pseudonimização, retenção, direitos do titular e acesso;
  2. **Qualidade e semântica:** completude, atualidade, unicidade e definição/certificação de KPI;
  3. **Valor, IA e confiabilidade:** baseline, atribuição, dupla contagem, evidência, reprodutibilidade, explicabilidade, fairness, drift e humano no loop;
  4. **Publicação e validação:** publicação apenas com métricas certificadas e auditoria financeira com sign-off do cliente.
- Campos de controle: 20 regras têm bloqueio explícito `Sim`; 3 usam `Depende` (completude, atualidade e drift); todas estão atribuídas a um owner e a uma cadência.
- Fases presentes: M0 para controles fundacionais, M1 para mensuração/modelos e M2 para monetização e validação financeira.

## Achados principais

### Finalidade, base legal e consentimento

Cada uso deve ser mapeado `campo → finalidade → produto`, com ROPA/catálogo sob responsabilidade do DPO. A base legal e o consentimento precisam ser verificáveis e funcionar como gate antes de uma feature ou modelo, com registro de consentimento e indicador de cobertura. Isso reduz o risco de reutilização incompatível, mas a planilha não diferencia bases legais (por exemplo, consentimento, obrigação legal ou legítimo interesse), nem explicita prova de validade, granularidade, versão do aviso de privacidade ou mecanismo de revogação. Essas informações devem existir no registro operacional associado.

### Minimização e retenção

Minimização é operacionalizada por revisão semestral de campos e matriz de necessidade. Retenção exige prazo por tabela e finalidade, expurgo automático e log de deleção, com cadência mensal. O modelo é adequado como controle, mas não traz os prazos, exceções de preservação legal, critérios de descarte de backups, nem evidência de que o expurgo propaga para derivados, marts, caches, snapshots e cópias de fornecedores.

### Segurança, acesso e pseudonimização

Dados sensíveis devem ser criptografados e segregados, apoiados por KMS, RBAC e logs. O privilégio mínimo é aplicado por visão e finalidade, com revisão trimestral de acesso. A camada analítica não deve expor identidade direta: tokens e vault separado, comprovados por arquitetura e teste. Esses controles formam uma defesa em camadas, mas a aba não registra classificação de dados, gestão de chaves, rotação, ambientes, restauração, resposta a incidentes, acessos de terceiros ou teste de reidentificação. Pseudonimização não equivale a anonimização; a chave de reidentificação precisa de owner, segregação, justificativa e registro de uso.

### Direitos do titular (DSAR)

O workflow de DSAR cobre acesso, correção e revogação, medido por SLA mensal e responsabilidade do DPO. Para ser auditável, o processo deve incluir identificação segura do requerente, busca em fontes e derivados, correção propagada, revogação de consentimento quando aplicável, exceções legais, resposta, evidências e escalonamento de incidentes. A planilha ainda não informa SLA-alvo, canais, responsáveis técnicos por sistema ou tratamento de pedidos de oposição/eliminação/portabilidade, quando aplicáveis.

### Qualidade, semântica e auditabilidade

Completude, atualidade e unicidade têm gates por pipeline, monitoramento diário e artefatos específicos. KPIs precisam de definição, fórmula, owner e versão no catálogo; dashboards executivos usam apenas métricas certificadas e estados `draft/certified/deprecated`. A estrutura favorece rastreabilidade, mas falta um identificador único de controle, critério de aprovação, limiar numérico, evidência vinculada por `run_id`, histórico de mudanças e matriz de escalonamento para cada indicador.

### Fairness, explicabilidade e humano no loop

Scores que orientam decisões devem ter reason codes e model card; fairness é monitorada mensalmente por grupos pertinentes, com gap de fairness como indicador; drift de população ou performance aciona alerta/rollback; decisões de alto impacto permitem revisão humana com justificativa e audit log. O conjunto é forte como princípio de governança, porém não define grupos protegidos ou pertinentes, métricas (erro, seleção, calibração), limiares, tratamento de amostras pequenas, critérios de alto impacto, prazo de revisão, autoridade do revisor ou procedimento de contestação.

### Publicação e valor financeiro

Baseline comparável é obrigatório antes da intervenção (M1). Em M2, atribuição deve ser explícita, benefícios sobrepostos devem ser deduplicados pela chave pessoa–resultado–período–alavanca, toda estimativa recebe nível metodológico e benefício monetizado exige validação da controladoria do cliente. Esses controles protegem contra superestimação, mas dependem de identidade resolvida, janela temporal, contrato de métrica, memória de cálculo, evidência metodológica e sign-off preservado. Publicação executiva deve ser bloqueada quando qualquer gate crítico falhar, mesmo que o dashboard tecnicamente carregue.

## Qualidade do arquivo

- **Pontos fortes:** esquema consistente; cada regra tem aplicação, evidência, owner, cadência, severidade, decisão de publicação e indicador; severidades e fases tornam o material acionável; controles de LGPD estão ligados a controles de produto e valor.
- **Limitações:** não há IDs de controles, valores-alvo, limiares, estados atuais, datas, links para evidências ou resultados observados; `Depende` não identifica a dependência nem o gate pai; `Sim`/`Depende` são texto livre; não há coluna para status, exceção, risco residual ou aprovação.
- **Qualidade estrutural:** linhas editoriais iniciais não são parte do quadro tabular e podem exigir tratamento explícito no ingest. Não foram observadas colunas vazias no corpo, mas a qualidade substantiva depende dos artefatos citados, que não estão embutidos no CSV.

## Dependências

1. ROPA, catálogo de dados, classificação de sensibilidade e registro de consentimento/base legal.
2. Data catalog/value mart com linhagem campo–finalidade–métrica–produto e catálogo de métricas versionado.
3. KMS, RBAC/ABAC, vault de tokens, logs imutáveis, access review e controles de backup/expurgo.
4. Pipelines com quality gates, freshness, MDM, chaves idempotentes e propagação de DSAR/retensão.
5. Model cards, fairness reports, monitoramento de drift, filas de revisão humana e rollback.
6. Baselines, planos de mensuração, memórias de cálculo, deduplicação e sign-off da controladoria do cliente.

## Implicações e riscos

- **Risco legal:** finalidade ou base legal não comprovada pode invalidar a feature/modelo e expor a organização a tratamento incompatível.
- **Risco de exposição:** identidade direta na camada analítica, privilégio excessivo, chave de pseudonimização acessível ou logs incompletos ampliam impacto de incidente.
- **Risco de retenção:** TTL incompleto em derivados e backups pode frustrar eliminação/revogação e aumentar superfície de risco.
- **Risco de direitos:** DSAR sem cobertura de fontes e derivados pode produzir resposta incompleta ou fora do SLA.
- **Risco de discriminação:** fairness sem grupos, métricas e limiares definidos não demonstra tratamento equitativo.
- **Risco de decisão automatizada:** ausência de revisão humana, reason codes ou trilha de auditoria reduz contestabilidade em decisões de alto impacto.
- **Risco analítico/financeiro:** falta de baseline, atribuição, deduplicação e validação do cliente gera dupla contagem e benefício não defensável.
- **Risco de publicação:** a presença de `Depende` sem dependência nomeada permite interpretação subjetiva; sem status de evidência, um KPI pode ser exibido como certificado sem estar aprovado.

## Perguntas em aberto

1. Quais bases legais são permitidas por finalidade e como se prova sua vigência, escopo e revogação?
2. Quais são os prazos de retenção por classe de dado/tabela e quais exceções legais existem?
3. Quais sistemas, derivados, backups e fornecedores entram no escopo de DSAR e expurgo?
4. Qual o método de tokenização, onde fica o vault e quem pode reidentificar, em quais situações e com qual log?
5. Quais limiares numéricos definem completude, freshness, duplicidade, drift e gap de fairness?
6. Quais grupos pertinentes, métricas de fairness e salvaguardas para baixa amostra serão adotados?
7. Que decisões são classificadas como alto impacto e qual SLA/autoridade do humano revisor?
8. Quem aprova a transição `draft → certified`, quem pode depreciar uma métrica e como as mudanças são versionadas?
9. Como o valor é atribuído, deduplicado e validado pelo cliente, e onde fica o sign-off auditável?
10. Quais regras exatas fazem `completude`, `atualidade` e `drift` bloquear ou permitir publicação?

## Prontidão

**Prontidão conceitual: alta.** A aba cobre o ciclo completo, do tratamento legal à publicação e monetização, com owners e cadências claros.

**Prontidão operacional: média-baixa.** Pode servir como checklist de desenho e gate, mas não como evidência de conformidade ou aprovação enquanto não houver IDs, limiares, status, links de evidência, registros de exceção e resultados dos indicadores.

**Gate recomendado:** nenhum dado sensível, score, KPI executivo ou benefício monetizado deve ser publicado somente com base nesta tabela. A publicação requer evidência anexada e aprovação do owner correspondente; controles críticos em M0 devem estar aprovados antes de M1/M2.

## Recomendações

1. Adicionar `control_id`, `status`, `limiar`, `evidence_uri`, `data_ultima_verificacao`, `excecao_aprovada`, `risco_residual` e `aprovador`.
2. Substituir `Depende` por dependências nomeadas e uma matriz de precedência (por exemplo, freshness → qualidade → publicação).
3. Criar registro de finalidade/base legal por campo e produto, incluindo versão do aviso, validade, revogação e owner.
4. Definir tabela de retenção/TTL com propagação para derivados, backups e fornecedores, além de teste periódico de expurgo.
5. Formalizar threat model de pseudonimização, teste de reidentificação, controle do vault e trilha de cada acesso à chave.
6. Especificar workflow DSAR ponta a ponta, cobertura de sistemas, SLAs, evidências e testes de correção/revogação.
7. Publicar um dicionário de métricas com fórmula, versão, limiar, janela, grupos de fairness, tratamento de baixa amostra e regra de certificação.
8. Versionar snapshots, código, parâmetros, model cards, fairness reports e logs imutáveis por `run_id`/hash.
9. Tornar o gate de publicação executável: falha crítica ou evidência vencida deve bloquear automaticamente o dashboard e registrar motivo.
10. Exigir baseline, atribuição, deduplicação, score de confiança e sign-off financeiro antes de qualquer número de valor ser apresentado como realizado.

## Verificação desta análise

- Fonte analisada: `01-tabs-csv/11_Governanca_LGPD/11_Governanca_LGPD.csv`.
- Arquivo criado: `01-tabs-csv/11_Governanca_LGPD/11_Governanca_LGPD_analise.md`.
- Escopo de escrita: somente o arquivo de análise acima; nenhum outro arquivo foi modificado.
- Verificações realizadas: conferência manual das 23 linhas de dimensão, das 10 colunas do cabeçalho, das fases M0/M1/M2, dos valores de bloqueio `Sim`/`Depende` e da presença das dimensões LGPD, segurança, DSAR, pseudonimização, fairness, auditabilidade e publicação.
