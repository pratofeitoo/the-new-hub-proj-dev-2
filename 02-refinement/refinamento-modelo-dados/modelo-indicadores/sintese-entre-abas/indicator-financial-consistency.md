# Síntese cross-sheet — consistência de indicadores e finanças

**Escopo:** `04_Indicadores_Master`, `05_Arvore_de_Valor`, `06_Simulador_ROI`, `07_Visoes_Dashboard` e `13_Matriz_Integracao`.

**Data:** 2026-08-20 · **Idioma:** pt-BR

## 1. Veredito executivo

As cinco abas formam uma arquitetura coerente no nível conceitual: o Master cataloga 73 indicadores; a Árvore organiza 12 alavancas causais; o Simulador traduz seis alavancas em um caso econômico; o Dashboard define decisões, alertas e públicos; e a Matriz de Integração define nós compartilhados e regras de não sobreposição. A cobertura de KPI é ampla e a separação leading/lagging é adequada.

Contudo, a consistência financeira ainda é **baixa para decisão ou reconhecimento de valor**. O principal bloqueio é a ausência de um fato financeiro/ledger único que imponha identidade, período, estado do evento, atribuição e exclusividade. O Simulador é aritmeticamente reproduzível, mas soma alavancas potencialmente sobrepostas e usa premissas ilustrativas. Portanto, o conjunto está pronto para blueprint, instrumentação e pilotos; não está pronto para declarar ROI, saving, margem ou benefício realizado.

## 2. Cobertura e alinhamento de KPI

### Cobertura

- O Master cobre oito vertentes e 73 indicadores: 20 em M0, 27 em M1 e 26 em M2. Há boa cobertura de qualidade, adoção, processos, resultados e impacto.
- A Árvore cobre produtividade, time-to-productivity, retenção, recrutamento, compras, risco, receita, recorrência, marketplace, entidade, marketing e inovação. Ela fornece a ponte de gestão entre leading indicators e outcomes, mas alguns elos ainda são hipóteses.
- O Dashboard cobre dez visões e explicita pergunta, KPI, filtro, alerta, cadência e ação. A hierarquia de consumo (governança diária → operação semanal → gestão mensal → prova trimestral) é coerente.
- A Matriz conecta 12 famílias por nós centrais e outputs compartilhados, permitindo reuso de evidência sem criar métricas paralelas.

### Lacunas de alinhamento

1. Dashboard lista KPIs financeiros (ROI, payback, margem, saving, risco, LTV/CAC), mas não referencia formalmente IDs do Master, fórmulas ou versão; diferentes visões poderiam calcular a mesma métrica de forma divergente.
2. A Árvore lista leading indicators como prontidão, match, densidade, NPS e pipeline, mas não define a conversão quantitativa até o outcome. Pipeline e NPS não podem ser tratados como caixa.
3. A Matriz nomeia nós (`pessoa`, `oportunidade`, `contrato`, `transação`, `período` etc.), mas não fornece chaves técnicas, cardinalidade ou estado (`lead`, `contrato`, `realizado`, `cancelado`).
4. O Simulador não está ligado explicitamente ao Master nem aos nós da Matriz. Seus inputs deveriam apontar para métricas base e evidências, não permanecer como campos soltos.

## 3. Dependências e cadeia de fórmula

### Cadeia canônica recomendada

`DAT-01/02/03` (completude, frescor, identidade) → eventos/match/outcomes → indicadores de resultado → contrato/transação → fato financeiro deduplicado → atribuição aprovada → FIN-01…FIN-10 e dashboards.

Essa cadeia converge as cinco abas. O Master confirma que `DAT-03` é pré-requisito para joins e deduplicação; a Matriz define `contrato/transação` como origem autorizada de receita/impacto; a Árvore exige baseline, comparador e margem; o Dashboard precisa consumir a camada semântica, não recalcular; e o Simulador deve receber somente valores com fonte, período e estado conhecidos.

### Consistência do Simulador

Com os valores ilustrativos atuais:

- benefício bruto anual: **R$ 1.220.000**;
- investimento total: **R$ 950.000**;
- benefício líquido: **R$ 270.000**;
- ROI simples: **28,42%**;
- payback apresentado: **9,34 meses**.

As fórmulas H8:H20 e a sensibilidade são dimensionalmente calculáveis, mas há três problemas de interpretação:

- H16 soma produtividade, contratação, retenção, compras, risco e margem sem teste de independência;
- H20 e a sensibilidade calculam payback com benefício **bruto**, enquanto ROI usa benefício líquido; o rótulo deve explicitar “payback bruto” ou a fórmula deve usar fluxos líquidos;
- licença anual, serviços one-off e custo interno são misturados no mesmo denominador, sem curva mensal de desembolso/ramp-up.

O bloco de unit economics da HUB (LTV/CAC 5,33x; payback CAC 9,38 meses) é paralelo ao ROI do cliente. Não valida o ROI sem ponte explícita entre valor capturado pelo cliente, receita da HUB, custo de servir e margem da HUB.

## 4. Redundância, atribuição e dupla contagem

### Redundâncias aceitáveis, desde que hierarquizadas

- `DAT-01` vs. `PES-01`: completude de dados críticos vs. completude de perfil; manter em níveis distintos.
- `PRO-01`, `ENT-02` e `MKT-03`: conversões de funis diferentes; não compartilhar denominador.
- `PRO-04` vs. `RH-06`: time-to-value vs. time-to-productivity; declarar unidade e população.
- `PRO-06`, `ENT-05`, `RH-07` e `FIN-10`: retenção de produto, entidade, pessoas e receita; não misturar entidades.
- `MRR`, `ARR` e `NRR`: apresentar juntos para leitura, nunca somar; ARR é anualização de MRR e NRR é variação de coorte.

### Sobreposições financeiras de alto risco

| Sobreposição | Risco | Regra de controle |
|---|---|---|
| Produtividade × receita incremental | horas liberadas podem gerar a mesma margem | escolher horas/custo evitado **ou** output/margem; aplicar fator de realização |
| Produtividade × retenção × contratação | menor sobrecarga reduz turnover e vacância | decompor mecanismo, população e janela; teto por pessoa/período |
| Time-to-productivity × recrutamento | mesma redução de tempo pode aparecer como vacância e ramp-up | definir precedência e exclusividade do evento |
| Compras/saving × margem incremental | saving já pode estar embutido na margem | reconciliação contábil e classificação de alavanca |
| Risco evitado × perda/margem preservada | evento evitado e perda preservada podem ser o mesmo | separar ex ante (risco esperado) de ex post (perda real) |
| Pipeline × receita × margem | estágios do mesmo funil | pipeline é potencial; só contrato/transação realizado entra no fato financeiro |
| Valor de associado × receita de entidade | atividade associativa pode originar a mesma receita | separar valor do associado de receita institucional |

### Atribuição

“Atribuição HUB” aparece no Simulador e nas fórmulas da Árvore, mas pode significar crédito de canal, contribuição causal ou estimativa de origem. Esses conceitos não são intercambiáveis. Cada benefício deve registrar: unidade de análise, exposição, tratado, comparador/holdout, baseline, janela de maturação, confundidores, método, confiança e percentual final. Origem rastreada não prova causalidade.

Recomendação estrutural: um **ledger de benefícios** com chave `nó central + evento econômico + alavanca + período + coorte`, estados `estimado`, `validado`, `realizado`, `revertido` e `já contabilizado em outra alavanca`, além de um único proprietário de valor.

## 5. Dashboard e suporte à decisão

O Dashboard suporta bem o ciclo de decisão e inclui uma visão Governança/IA para qualidade, consentimento, fairness, drift e confiança. Isso é essencial: confiança é condição de uso, não benefício financeiro.

Para ser operacional, cada visão deve consumir a mesma camada semântica e exibir junto do KPI: fórmula/versão, data de corte, frescor, cobertura, coorte, baseline, meta, confiança, origem e limitação. Alertas de ROI negativo, margem abaixo do piso, churn, saving insuficiente e viés precisam de limiar, severidade, owner, canal, SLA, escalonamento e encerramento. A visão executiva cliente deve mostrar benefício validado/realizado separado de potencial; a visão executiva HUB deve reconciliar receita, margem e unit economics com billing/contabilidade.

## 6. Severidade e readiness

| Severidade | Achado | Impacto | Estado |
|---|---|---|---|
| **Crítica** | Soma de seis alavancas sem exclusividade/ledger | ROI e benefício podem estar inflados | Bloqueia decisão |
| **Crítica** | Premissas do Simulador são ilustrativas e sem evidência | Não há business case auditável | Bloqueia proposta |
| **Crítica** | Ausência de fato financeiro e chaves de identidade/período | dashboards divergentes e joins incorretos | Bloqueia escala |
| **Alta** | Atribuição não padronizada; pipeline/GMV/receita sem estados | causalidade e reconhecimento incorretos | Bloqueia reconhecimento |
| **Alta** | Payback bruto vs. ROI líquido e timing linear | decisão de payback enganosa | Corrigir antes de uso |
| **Alta** | Fórmulas sem baseline, denominador, janela e versão | séries não reproduzíveis | Corrigir em contratos |
| **Média** | Dashboard sem limiar, RACI e SLA de alerta | ação pode não ocorrer | Corrigir no piloto |
| **Média** | Unit economics sem ponte com ROI cliente | leitura de valor da HUB incompleta | Corrigir na integração |

**Prontidão consolidada:** conceitual alta; instrumentação média-alta condicionada a eventos/identidade; dashboard produtivo média-baixa; impacto financeiro/ROI baixa até ledger, evidência e reconciliação.

## 7. Perguntas abertas prioritárias

1. Qual é o fato de verdade para receita, margem, saving, risco e benefício: contrato, transação, billing ou contabilidade?
2. O que significa exatamente “atribuição HUB” em cada alavanca e qual método/teto aprovado?
3. Quais alavancas são mutuamente exclusivas quando compartilham pessoa, vaga, contrato, receita ou período?
4. Qual horizonte comum, moeda, período de competência e regra para custos one-off/recorrentes?
5. Pipeline é potencial, booking ou receita reconhecida? Qual taxa de conversão e janela?
6. Como MRR, ARR, NRR, churn e expansão são reconciliados por coorte?
7. Quais são as definições oficiais de denominador, elegibilidade, baseline, coorte, cancelamento, reversão e reativação?
8. Quem é accountable pelo KPI, dado, alerta, atribuição e aprovação financeira?
9. Quais limiares, severidades e SLAs habilitam cada alerta do Dashboard?
10. Que evidência mínima permite promover valor de estimado para validado e realizado?

## 8. Recomendações acionáveis

### P0 — bloquear reconhecimento financeiro até concluir

1. Criar catálogo de métricas versionado, vinculando cada KPI do Dashboard e cada input do Simulador ao ID do Master, fórmula, unidade, janela, fonte, baseline, owner e testes.
2. Criar nós/chaves canônicos da Matriz (`pessoa_id`, `contrato_id`, `oportunidade_id`, `transacao_id`, `periodo`, entre outros) e estados do ciclo de valor.
3. Implementar ledger de benefícios e fato financeiro único; deduplicar por nó, alavanca, evento e período; reconciliar com Finanças.
4. Substituir premissas ilustrativas por dados reais com evidência, período, amostra, confiança e aprovação.
5. Alinhar payback bruto/líquido/caixa, incluindo desembolso e realização mensal; separar one-off de recorrente.

### P1 — tornar a medição robusta

6. Formalizar baseline, comparador, janela e método causal para cada M2; usar `PRO-08` como âncora experimental.
7. Separar potencial, validado e realizado; impedir que pipeline, GMV, horas ou qualidade sejam monetizados automaticamente.
8. Criar matriz de exclusividade entre produtividade, retenção, contratação, risco, compras e receita, com teto ou desconto de sobreposição parametrizado.
9. Fazer Dashboard e Simulador consumirem a mesma semantic layer; adicionar frescor, cobertura, confiança e versão visíveis.
10. Operacionalizar alertas com severidade, owner, SLA, escalonamento, ação e evidência de encerramento.

### P2 — evolução

11. Criar cenários por alavanca com ramp-up, realização, conversão e sensibilidade independente, em vez de multiplicador global apenas.
12. Construir ponte cliente → receita HUB → custo de servir → margem HUB, e enriquecer LTV/CAC com expansão, churn por coorte e custos variáveis.

## 9. Fontes consultadas e verificação

- `01-tabs-csv/04_Indicadores_Master/04_Indicadores_Master_analise.md`
- `01-tabs-csv/05_Arvore_de_Valor/05_Arvore_de_Valor_analise.md`
- `01-tabs-csv/06_Simulador_ROI/06_Simulador_ROI_analise.md`
- `01-tabs-csv/07_Visoes_Dashboard/07_Visoes_Dashboard_analise.md`
- `01-tabs-csv/13_Matriz_Integracao/13_Matriz_Integracao_analise.md`

Esta síntese foi criada como único arquivo em `02-cross-sheet-synthesis/`; nenhuma planilha, CSV, nota companion, README ou manifest foi alterado.
