---
status: em-revisao
---

# Análise — 07_Visoes_Dashboard

## Escopo e fonte

Esta análise cobre exclusivamente `07_Visoes_Dashboard.csv`, que especifica dez visões de dashboard da plataforma HUB. A fonte organiza cada visão por usuário, pergunta central, KPIs primários e de diagnóstico, filtros, alertas, ações, cadência e permissão. Não há dados observados, metas, valores históricos, definições técnicas de métricas ou evidência de implementação no arquivo.

## Estrutura identificada

| Visão | Usuário decisor | Pergunta central | Cadência | Permissão declarada |
|---|---|---|---|---|
| Executiva HUB | CEO / Conselho | Valor, margem e escala da HUB | Mensal | Agregado financeiro |
| Executiva cliente | CFO / patrocinador | Valor financeiro provado | Trimestral | Dados do próprio cliente |
| Pessoas / RH | CHRO / People Analytics | Decisões sobre pessoas que melhoram resultado | Mensal | Dados pessoais pseudonimizados |
| Compras | CPO / procurement | Ampliação de oferta e redução de custo/risco | Mensal | Compras e contratos |
| Marketing / RevOps | CMO / vendas | Mídia e conteúdo que criam margem | Semanal | CRM e mídia |
| Entidade / Firjan | Direção da entidade | Valor entregue ao ecossistema de associados | Mensal | Agregado e anonimizado |
| Operação de programas | PMO / consultoria | Ritmo e outcome das ações | Semanal | Programa específico |
| Pessoa | Participante | Próximo passo para capacidade e oportunidades | Tempo real | Somente dados do titular |
| Fornecedor / solução | Parceiro | Demanda compatível e melhoria de fit | Tempo real | Somente dados próprios |
| Governança / IA | DPO / Data / Auditoria | Confiabilidade, legalidade e justiça de dados/modelos | Diária | Acesso restrito |

Há uma hierarquia implícita de consumo: governança diária, operação e aquisição semanal, gestão executiva/funcional mensal, prova de valor do cliente trimestral e experiências de participante/parceiro em tempo real.

## Principais achados

1. **Orientação a decisão é explícita.** A premissa da aba é que cada visão começa por uma decisão e que o KPI só deve existir se mudar uma ação. As ações estão descritas para todas as dez visões, reduzindo o risco de dashboards meramente descritivos.
2. **Cobertura de stakeholders é ampla.** A matriz atende governança, direção, cliente, RH, compras, receita/marketing, entidade, operação, participante e fornecedor.
3. **O valor é medido em camadas.** A visão executiva HUB mede escala e economia unitária; a executiva cliente mede benefício comprovado; as visões operacionais explicam adoção, jornada, cobertura, conversão, execução e evidência.
4. **Tempo real está restrito a superfícies individuais.** Participante e fornecedor recebem visibilidade contínua, mas com escopo limitado ao titular ou aos próprios dados. Isso é coerente com privacidade, porém não substitui a governança diária de dados e modelos.
5. **A visão de Governança/IA funciona como controle transversal.** Qualidade, consentimento, fairness, drift e confiança são KPIs primários, com capacidade de bloquear, corrigir, reprocessar e auditar.
6. **Alertas estão ligados a limiares ou eventos.** A fonte cita condições como ROI negativo, churn, margem abaixo do piso, gap crítico, SLA, documentos vencidos, viés e violação de consentimento; contudo, não define limiares, severidade, destinatário ou prazo de tratamento.

## KPIs e disponibilidade de dados

### KPIs primários

- **Financeiro/valor:** ARR, MRR, NRR, margem, ROI cliente, LTV/CAC, benefício bruto/líquido, payback, saving, risco, margem incremental.
- **Pessoas:** produtividade, retenção, time-to-fill, qualidade da contratação.
- **Compras/oferta:** saving, ciclo, conversão, desempenho, risco.
- **Marketing/receita:** pipeline, CAC, ROAS, margem incremental.
- **Ecossistema:** ativação, renovação, valor por associado, impacto econômico.
- **Programas:** conclusão, evolução, custo por outcome, satisfação.
- **Participante/parceiro:** prontidão, progresso, matches, outcomes, contratos, desempenho.
- **Governança/IA:** qualidade, consentimento, fairness, drift, confiança.

### Dados de diagnóstico

Os diagnósticos funcionam como explicadores dos KPIs: adoção e time-to-value explicam valor; cobertura, evidência e atribuição explicam benefício; prontidão, gaps e jornada explicam pessoas; elegibilidade/homologação explicam compras; alcance qualificado, CPL e conteúdo→ação explicam marketing; convite/presença/dose/SLA explicam programas; evidências/lacunas/ações explicam progresso; requisitos/cobertura/homologação explicam fit de parceiros; SLA, linhagem e incidentes explicam controles de governança.

### Julgamento de disponibilidade

O CSV declara **fontes ou domínios**, não disponibilidade efetiva. As dependências de dados explicitamente indicadas são:

- financeiro agregado para a Executiva HUB;
- dados do próprio cliente para prova de valor;
- dados pessoais pseudonimizados para RH;
- compras e contratos;
- CRM e mídia;
- dados agregados e anonimizados da entidade;
- dados específicos de cada programa;
- dados do titular para participante;
- dados próprios para fornecedor/parceiro;
- fontes, modelos, grupos, linhagem, incidentes e controles de consentimento para Governança/IA.

**Conclusão:** disponibilidade é parcialmente especificada no nível conceitual, mas não é demonstrada no nível operacional. Faltam proprietário da fonte, periodicidade de ingestão, cobertura, histórico, qualidade mínima, identificadores de ligação e SLA de atualização.

## Filtros, alertas e ações

### Filtros

Os filtros são adequados ao contexto de decisão e formam uma dimensão comum de análise: vertente, produto, cliente, cohort, programa, unidade, período, cenário, função, gestor, local, categoria, região, contrato, fornecedor, canal, campanha, segmento, setor, porte, serviço, etapa, objetivo, competência, prazo, estágio, domínio, fonte, modelo e grupo.

Há risco de fragmentação sem um dicionário dimensional compartilhado. Em particular, `cliente`, `unidade`, `região`, `segmento`, `cohort/cohort`, `período`, `programa`, `produto` e `serviço` aparecem em contextos que podem exigir chaves e regras de agregação compatíveis.

### Alertas

Os alertas cobrem quatro classes:

1. **Resultado:** ROI negativo, benefício abaixo do business case, margem abaixo do piso, CAC alto, baixa conversão, saving insuficiente.
2. **Execução:** desvio de meta/prazo, SLA, ação pendente, baixa eficácia, categoria sem oferta.
3. **Risco de negócio/relacionamento:** churn, risco de saída, risco alto, oportunidade crítica.
4. **Conformidade e confiança:** documento vencido, violação de SLA, viés, drift, consentimento e incidentes.

O mecanismo de alerta ainda não está operacionalizado no CSV: não há valor de limiar, janela de medição, regra de persistência, severidade, canal (dashboard, e-mail, tarefa), owner de resposta, escalonamento ou confirmação de encerramento.

### Ações possíveis

As ações estão bem alinhadas às perguntas: priorizar produto/preço/carteira/investimento; escalar/corrigir/interromper; recomendar jornada/mobilidade/contratação; abrir conexão/desenvolver/substituir; redistribuir verba/mudar oferta ou mensagem; criar programa/conexão/serviço; corrigir desenho/acompanhamento; aceitar recomendação/registrar evidência; atualizar capacidade/responder/desenvolver; bloquear/corrigir/reprocessar/auditar.

O próximo nível de especificação deve converter cada ação em workflow com responsável, autorização necessária, prazo, evidência de conclusão e impacto esperado.

## Permissões, ownership e governança

### Permissões declaradas

- Acesso agregado limita exposição na visão executiva HUB.
- Acesso ao próprio cliente restringe a visão executiva cliente ao escopo contratado.
- Pseudonimização é requisito para RH.
- Anonimização e agregação aparecem na visão da entidade.
- Titularidade restringe participante e fornecedor a dados próprios.
- Acesso restrito protege a visão de Governança/IA.

### Ownership inferido (a validar)

O usuário nomeado parece ser o decisor ou consumidor, mas o CSV não separa **owner do dashboard**, **owner do dado**, **owner do KPI** e **owner do alerta**. Uma matriz RACI é necessária para impedir que decisões críticas fiquem sem responsável operacional. A plataforma também precisará de regras de segregação por cliente, entidade, programa, titular, fornecedor e grupo sensível.

### Pontos de governança

Fairness, consentimento, pseudonimização, anonimização, linhagem e acesso restrito são sinais positivos de governança-by-design. Porém, não estão definidos: base legal, retenção, auditoria de acesso, política de reidentificação, tratamento de grupos pequenos, revisão humana de recomendações e processo para contestação pelo titular.

## Qualidade da especificação

### Forças

- Estrutura tabular consistente em todas as linhas.
- Cada visão tem pergunta, KPIs, filtros, alertas, ação, cadência e permissão.
- Boa conexão entre indicador, alerta e decisão.
- Escopo de usuários cobre o ciclo completo do ecossistema.
- O arquivo explicita proteção de dados em pontos sensíveis.

### Lacunas

- Não há definição, fórmula, unidade, numerador/denominador ou fonte de nenhum KPI.
- Não há metas, pisos, bandas, baseline, cohortização ou comparação temporal.
- Não há owner, RACI, SLA de dado, SLA de alerta ou canal de notificação.
- Não há modelo de identidade e chaves para cruzar CRM, financeiro, mídia, contratos, programas e modelos.
- Não há indicação do nível de granularidade ou da cobertura mínima aceitável.
- Não há distinção entre KPI de resultado, leading indicator e métrica de saúde da operação.
- Não há requisitos de atualização, histórico, reprocessamento ou reconciliação.
- Não há especificação de acessibilidade, exportação, trilha de auditoria ou experiência mobile.
- `cohort` aparece em inglês, enquanto o restante está majoritariamente em português; o dicionário deve padronizar nomenclatura (`coorte`, se essa for a convenção adotada).

## Dependências e implicações

1. **Camada semântica compartilhada:** fórmulas de ROI, margem, saving, benefício, custo por outcome, NRR e LTV/CAC devem ser únicas ou explicitamente versionadas.
2. **Integração de fontes:** a visão de maior valor depende de ligar financeiro, CRM, mídia, contratos, programas, dados de pessoas e telemetria de modelos.
3. **Identidade e autorização:** filtros e permissões exigem um modelo consistente de tenant, cliente, unidade, titular, fornecedor, programa e grupo.
4. **Qualidade e linhagem:** a Governança/IA depende de checks automáticos e de metadados para cada KPI, alerta e modelo.
5. **Cadência e frescor:** semanal/mensal/trimestral não deve ser confundido com atraso aceitável; é preciso definir data de corte, horário de atualização e indicador de frescor.
6. **Workflow:** ações de bloquear, interromper, substituir ou redistribuir verba precisam de confirmação, histórico e reversibilidade.

## Riscos

- **Risco de falsa precisão:** KPIs financeiros sem definição de atribuição podem gerar decisões equivocadas.
- **Risco de inconsistência:** diferentes visões podem calcular a mesma dimensão ou métrica de modo divergente.
- **Risco de privacidade:** RH, participante e fornecedor podem permitir reidentificação por filtros combinados ou grupos pequenos.
- **Risco de alerta sem dono:** alertas não tratados tornam o dashboard apenas uma lista de exceções.
- **Risco de atraso:** cadências mensais/trimestrais podem ocultar deterioração de churn, margem ou qualidade.
- **Risco de viés e drift:** recomendações de pessoas e participantes exigem monitoramento, revisão e explicabilidade.
- **Risco de escopo:** dez visões podem exceder a capacidade de integração antes de validar quais decisões têm maior valor.
- **Risco de permissão ambígua:** “dados próprios” e “agregado financeiro” não especificam granularidade nem política de compartilhamento.

## Perguntas em aberto

1. Qual decisão e qual owner devem ser priorizados no primeiro release?
2. Quais são as fórmulas oficiais e o dicionário de cada KPI?
3. Quais valores definem piso, meta, tolerância, severidade e persistência de cada alerta?
4. Quais fontes já existem, com que cobertura, frescor, histórico e qualidade?
5. Como os IDs de cliente, usuário, unidade, programa, fornecedor e contrato serão reconciliados?
6. Quem recebe, trata, aprova e encerra cada alerta? Qual o SLA de resposta?
7. Quais dados podem ser exibidos, exportados ou reidentificados em cada perfil?
8. Como serão tratados grupos pequenos, consentimento revogado, exclusão e contestação de recomendações?
9. Quais KPIs são leading indicators e quais são outcomes atrasados?
10. Qual é a política para discrepância entre fontes e para reprocessamento retroativo?
11. Quais visões precisam de dados em tempo real e qual latência é realmente necessária?
12. Como medir se uma ação tomada após o alerta mudou o KPI?

## Prontidão

**Prontidão conceitual: média-alta.** A matriz tem boa cobertura de usuários, perguntas e ações e oferece uma base clara para priorização.

**Prontidão para dashboard produtivo: baixa-média.** Ainda faltam contratos de dados, métricas calculáveis, metas/limiares, ownership, controles de acesso detalhados, workflows e evidência de disponibilidade. A fonte é suficiente para um blueprint funcional ou discovery, não para construir sem decisões adicionais.

## Recomendações priorizadas

### P0 — antes de desenvolver

1. Selecionar uma visão-piloto orientada a decisão (preferencialmente Operação de programas ou Executiva cliente, conforme acesso a dados) e registrar decisão, owner e critério de sucesso.
2. Criar dicionário de KPI com fórmula, fonte, granularidade, unidade, data de corte, baseline, meta, limiar e versão.
3. Criar matriz de acesso/RACI por visão, dado, KPI, alerta e ação.
4. Definir modelo de identidade, tenant e dimensões compartilhadas.
5. Definir catálogo de alertas com severidade, destinatário, SLA, canal, escalonamento e encerramento.

### P1 — primeiro release operacional

6. Implementar camada de qualidade, frescor e linhagem para cada fonte e KPI.
7. Exibir data de atualização, cobertura, confiança e limitações junto aos indicadores.
8. Implementar trilha de auditoria para acesso, recomendação, ação e reprocessamento.
9. Testar filtros combinados contra reidentificação e aplicar regras de supressão para grupos pequenos.
10. Medir o ciclo alerta → ação → resultado para provar que o dashboard muda decisões.

### P2 — escala

11. Expandir para as dez visões após validar valor e adoção do piloto.
12. Padronizar componentes de visualização, nomenclatura, acessibilidade e exportação.
13. Versionar definições e recalcular impactos quando fórmula, fonte ou modelo mudar.

## Veredito

O CSV é um bom mapa de produto para uma plataforma de decisões: cobre públicos distintos e liga cada dashboard a uma ação. O principal trabalho restante não é adicionar mais visões, mas transformar a intenção em contratos verificáveis de dados, métricas, permissões, alertas e accountability. Recomenda-se iniciar com uma visão de escopo controlado, validar a cadeia dado → KPI → alerta → ação → outcome e somente então escalar a matriz completa.
