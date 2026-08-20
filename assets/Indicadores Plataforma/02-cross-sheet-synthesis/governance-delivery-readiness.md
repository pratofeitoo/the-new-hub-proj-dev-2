# Síntese cross-sheet — prontidão de governança e entrega

**Escopo.** Síntese dos 15 companion notes e dos CSVs das abas `00_Leia-me` a `14_RACI`, com foco em transformar o mapa conceitual em uma entrega controlada. Esta nota é uma leitura de prontidão; não altera workbook, CSVs ou análises individuais.

## 1. Veredito executivo

O conjunto é **forte como arquitetura semântica e priorização**, mas **não está pronto para produção, auditoria, publicação executiva ou business case financeiro** sem gates adicionais. A narrativa é consistente: fontes/identidades → eventos e decisões → outcomes → valor. O risco está nas interfaces entre abas: chaves e granularidade ainda incompletas, contratos de eventos não executáveis, retenção sem TTL propagado, integração com owners funcionais mas sem on-call, e RACI sem accountable único em várias decisões.

**Classificação geral: AMARELO/VERMELHO.**

- **Verde conceitual:** mapa de valor, cobertura de domínios, fases M0–M4, famílias de indicadores e controles pretendidos.
- **Amarelo de desenho:** dicionário, eventos, integrações, dashboards, matriz de integração e RACI têm boa direção, mas faltam contratos, limiares e evidências.
- **Vermelho operacional:** tratamento de dados pessoais, cálculo de valor/ROI, publicação certificada e escala multiempresa não devem ser liberados somente com as planilhas atuais.

## 2. Owners e accountability

### O que existe

- O dicionário e os eventos nomeiam fontes/funções; integrações trazem owner funcional por sistema.
- A governança atribui owner, cadência e severidade a 23 controles.
- O RACI cobre o ciclo completo: objetivo, fórmula, eventos, integrações, consentimento, qualidade, baseline/coorte, efeito, monetização, aprovação, publicação, modelo e escala.

### Lacunas que impedem entrega

1. **Owner funcional não é DRI operacional.** Cada métrica, campo, evento, integração, gate e alerta precisa de `Accountable` primário, `Responsible` executor, backup/on-call e aprovador de mudança.
2. **Owner do processo tem zero `A`** no RACI; a Entidade tem zero `R`/`A`, mesmo podendo controlar dados de origem. Isso deixa sem autoridade a semântica do processo e a correção na fonte.
3. **Seis atividades têm múltiplos `A`** (objetivo, baseline/coorte, monetização, aprovação, monitoramento de modelo e escala/correção). A matriz não informa veto, quorum, precedência ou desempate.
4. Há sobreposição `R+A` em qualidade, efeito, monetização e modelo. Para gates de publicação/benefício é necessária revisão independente.
5. Não há accountable explícito para retenção, versionamento, catálogo de KPIs, evidência de auditoria, incidentes, rollback, exceções de qualidade ou breaking changes.

**Regra de entrega recomendada:** um `A` primário por atividade; papéis adicionais devem ser rotulados como veto, sign-off, validação ou consulta. O decision log deve guardar signatários, versão do KPI/evento/modelo, evidência, validade e exceção aprovada.

## 3. LGPD, acesso e retenção

### Controles já previstos

`11_Governanca_LGPD` estabelece finalidade, base legal, minimização, segurança, pseudonimização, retenção, DSAR, qualidade, explicabilidade, fairness, drift e revisão humana. Vinte dos 23 controles bloqueiam publicação; os demais dependem de completude, atualidade ou drift. O CMP é integração M0 bidirecional, com bloqueio preventivo. Dashboards restringem escopo por cliente, titular, fornecedor, entidade e acesso agregado.

### Controles ainda não demonstráveis

- Não há registro operacional campo → finalidade → produto → base legal → versão do aviso → validade/revogação.
- Retenção aparece como prazos de evento (24–120 meses) ou “permanente enquanto necessário”, mas sem marco inicial, exceção/legal hold, expurgo, anonimização e propagação para derivados, marts, caches, snapshots, backups e fornecedores.
- PII está classificada qualitativamente em eventos (`Sim`/`Possível`) e por nó/campo, sem granularidade consistente para dados sensíveis, inferências, IDs pseudonimizados e dados financeiros.
- Pseudonimização não é anonimização: faltam owner do vault, autorização de reidentificação, logs de uso e teste de reidentificação.
- DSAR não explicita cobertura de todas as fontes/derivados, SLAs, canais, oposição/eliminação/portabilidade, correção propagada e interrupção de jobs/cache/exportações já enfileirados.
- Faltam limiares de fairness/drift, grupos pertinentes, tratamento de amostra pequena e autoridade/SLA do humano revisor.

**Gate LGPD:** deny-by-default diante de consentimento ausente, vencido ou revogado; bloquear ingestão, enriquecimento, score, exportação e retenção incompatíveis; registrar cada decisão e testar propagação de revogação em até o SLA definido.

## 4. Retenção e governança de eventos

Os 27 eventos cobrem o funil ponta a ponta e têm nomes consistentes, mas misturam comportamento, transição de estado, finanças e telemetria de modelo. A entrega requer classes de retenção e owners distintos:

| Classe | Exemplos | Controle mínimo |
|---|---|---|
| Produto/comportamento | visualização, ação, jornada, recomendação | `event_id`, consentimento, deduplicação, retenção curta/justificada |
| Resultado/estado | contrato, conexão, outcome | fonte de verdade, transição válida, versão, correção/reversão |
| Financeiro/ledger | transação, valor aprovado | competência, moeda, conciliação, append-only, ajuste/reversão, retenção longa justificada |
| Técnico/modelo | `model_prediction`, qualidade, replay | schema separado, model/features hash, acesso restrito, retenção para auditoria |
| Governança | consentimento, incidente | prova de finalidade/revogação, redaction, acesso restrito, legal hold |

**Contrato mínimo comum:** `event_id`, `event_name`, `event_version`, `occurred_at`, `received_at`, `source`, `environment`, `actor_id`, `entity_id`, `correlation_id`, `schema_ref`, `source_event_id`, sequência e chave de idempotência. Todo evento precisa de produtor, consumidor, trigger verificável, enum/tipo/unidade/timezone, SLA, replay, DLQ/quarentena, severidade e evidência.

Sem isso, retries e replays podem inflar conclusão, GMV, receita e tempo; `content_action` pode misturar clique/cadastro/pedido; e `model_prediction` pode ser contado como evento de negócio.

## 5. Feasibility das integrações

O mapa de 17 integrações é plausível e prioriza corretamente o backbone: CRM HUB, Plataforma, CMP, entidade e warehouse/lakehouse em M0; fontes RH/talentos/finanças/IA/marketing em M1; ERP/BI cliente e risco em M2. APIs, webhooks, event stream, SFTP e ELT são escolhas coerentes.

**Pré-condições M0:** MDM/resolução de identidade; contratos versionados; correlação/idempotência; CMP como gate; SLO mensurável (p95/p99, freshness, disponibilidade, completude, duplicidade); observabilidade, DLQ, replay, quarentena e rollback; owner técnico/on-call e rotação de segredos.

**Riscos de viabilidade:**

- `person_id`, `company_id`, `opportunity_id`, `contract_id`, `metric_id` e chaves compostas não têm unicidade/cardinalidade/resolução formal.
- Direção bidirecional não define produtor/consumidor e pode criar loops.
- D+1/D+3/D+5 não define dia útil/corrido, corte, timezone, p95 ou escalonamento.
- O SLA `<2 s` do motor de inteligência precisa de limites de payload, circuit breaker, cache e fallback testado.
- SFTP/private link não especificam manifesto, checksum, expiração, tenant isolation, escopo e auditoria.
- Warehouse “bidirecional” é ambíguo: deve-se confirmar se escreve nas fontes ou apenas publica consumidores.
- M2 depende de aceite de controladoria, fechamento mensal e evidência de origem→KPI→resultado.

**Conclusão:** pronto para desenho/piloto controlado; não pronto para build produtivo irrestrito.

## 6. Sequenciamento e critérios de saída

Manter `M0 → M1 → M2 → M3 → M4`, permitindo paralelismo apenas por fonte/domínio aprovado:

1. **M0 — organizar (0–8 semanas):** IDs/MDM, taxonomia, dicionário, envelope de eventos, CMP, catálogo de métricas, baseline inicial, quality gates e dashboards operacionais.
2. **M1 — conectar (2–5 meses):** integrações aprovadas, grafo/lineage, coortes, matching e origem→outcome; iniciar somente em fontes que passaram M0.
3. **M2 — provar (5–9 meses):** value mart, ledger de benefícios, baseline congelado, estudo quase-experimental, atribuição, deduplicação e sign-off financeiro.
4. **M3 — prever (9–14 meses):** poucos casos com outcomes sólidos; regra baseline, validação fora da amostra, fairness, model card, drift e revisão humana.
5. **M4 — escalar (14–24 meses):** benchmarks anonimizados, marketplace e serviços segmentados somente após contratos, confiança, anonimização, unit economics e governança multiempresa.

### Exit criteria recomendados

- **Saída M0:** 100% dos eventos críticos catalogados/versionados/idempotentes; cobertura alvo (ex.: >95%) com denominador, janela e atraso definidos; métricas certificadas com fórmula, fonte, owner, teste e validade; consentimento, acesso e retenção aprovados; baseline imutável iniciado.
- **Saída M1:** cada origem/outcome rastreável por IDs, timestamps, transformação, owner e evidência; taxa de identidade resolvida e órfãos dentro do limiar; reconciliação e replay testados; coortes e matching reproduzíveis.
- **Saída M2:** numerador/denominador do “>70% de valor com evidência” definidos; método, amostra, comparador, intervalo de confiança, atribuição e exclusões aprovados; ledger sem dupla contagem; controladoria/cliente assinam.
- **Saída M3:** modelo supera regra simples fora da amostra; limiares de precisão/calibração/uplift/fairness/drift; model card, reason codes, rollback e revisão humana ativos.
- **Saída M4:** benchmark coberto e anonimizado; risco de reidentificação testado; contratos/consentimentos de compartilhamento vigentes; unit economics e confiança acima de limiares aprovados.

Nenhuma fase deve ser declarada “concluída” globalmente quando apenas parte dos domínios passou; registrar status por fonte, métrica e gate.

## 7. Severidade e blockers

| Severidade | Condição | Decisão |
|---|---|---|
| **Crítica — bloqueia** | uso sem finalidade/base legal/consentimento; revogação não propagada; exposição/reidentificação; publicação financeira sem sign-off; ausência de identidade que possa trocar titulares; ledger com dupla contagem | negar processamento/publicação; abrir incidente e registrar decisão |
| **Alta — bloqueia fase/escopo** | PK/granularidade desconhecida; evento sem idempotência; integração sem contrato/owner/on-call; KPI sem fórmula/denominador; retenção sem expurgo propagado; fairness/drift sem limiar; replay não auditável | bloquear fonte, métrica, modelo ou fase afetada até evidência |
| **Média — condiciona** | SLA sem janela/timezone; catálogo enum incompleto; trigger parcialmente ambíguo; ausência de exemplos numéricos; alertas sem canal/SLA; private link sem revisão periódica | permitir piloto somente com exceção aprovada e prazo |
| **Baixa — backlog** | nomenclatura, preâmbulo CSV, acessibilidade/exportação e padronização editorial sem impacto imediato em autorização ou cálculo | corrigir antes da escala, não bloquear discovery |

## 8. Perguntas abertas prioritárias

1. Quem é o `A` primário ponta a ponta e por atividade; Owner do processo deve assumir autoridade? Quando a Entidade controla uma fonte, quem responde por SLA/correção?
2. Qual é o ID canônico e sistema mestre de pessoa, empresa, oportunidade, contrato, fornecedor, métrica, evento e consentimento? Quais são as PK compostas e cardinalidades dos fatos?
3. Quais eventos são críticos em M0, qual denominador sustenta a cobertura e qual versão de schema está vigente?
4. Qual é a matriz campo/finalidade/base legal/consentimento, o prazo por classe e o marco inicial da retenção? Como expurgo chega a derivados/backups/fornecedores?
5. Quais limiares definem completude, freshness, duplicidade, identidade resolvida, fairness, drift, confiança e publicação?
6. Qual método e percentual de atribuição são aceitos; qual a chave exclusiva do ledger de benefícios e a precedência quando alavancas se sobrepõem?
7. Quem certifica, deprecia ou altera um KPI; como são tratados breaking changes, reversões, cancelamentos, reprocessamentos e exceções?
8. Quais fontes entram no piloto M1 e quais volumes, limites, janelas, timezones, p95/p99 e canais on-call cada integração suporta?
9. O que exatamente significa “>70% do valor com evidência”, “modelo supera regra”, “fairness” e “confiança alta”?
10. Qual visão-piloto fecha o ciclo dado → KPI → alerta → ação → outcome com evidência e responsável de resposta?

## 9. Recomendações de entrega

### P0 — antes de qualquer produção ou proposta financeira

1. Criar registro versionado de `node_id`, `edge_id`, `event_id`, `metric_id`, `integration_id` e `control_id`, com owner, steward, fonte, schema, validade, severidade e evidência.
2. Fechar MDM/chaves, granularidade/PK/FK, catálogo de enums, unidades/moedas/timezone e identidade entre fontes.
3. Publicar schema registry e envelope de eventos; definir idempotência, replay, DLQ, correção e ledger financeiro.
4. Transformar LGPD em controles executáveis: deny-by-default, ROPA, acesso mínimo, vault, DSAR, TTL propagado e auditoria.
5. Corrigir RACI para `A` único, autoridade de veto/sign-off, Entidade/Owner do processo, retenção, incidentes e rollback.
6. Proibir publicação de ROI, saving, risco evitado, margem incremental ou benefício atribuído sem baseline, comparador, atribuição, deduplicação, evidência e sign-off.

### P1 — piloto operacional M0/M1

7. Escolher um caso estreito e 3–5 decisões; instrumentar `account_created`, `profile_completed`, `assessment_completed`, `recommendation_accepted`, `contract_signed` e `transaction_recognized` com testes de contrato.
8. Implementar semantic layer e ledger de benefícios únicos; dashboards devem exibir frescor, cobertura, confiança, limitações, versão e status (`draft/certified/deprecated`).
9. Executar testes de identidade, órfãos, duplicidade, ordenação, consentimento revogado, expurgo, reprocessamento, reconciliação e reidentificação.
10. Operar fila de qualidade e alertas com severidade, owner, SLA, escalonamento, evidência de encerramento e rollback.

### P2 — escala

11. Liberar M2 após sign-off de cliente/controladoria; M3 após outcomes suficientes e validação independente; M4 somente com anonimização, contratos multiempresa e unit economics aprovados.
12. Expandir as dez visões de dashboard por decisão comprovada, não por disponibilidade visual; revisar gates por fonte/domínio.

**Conclusão:** o próximo passo não é adicionar abas ou integrações, mas converter o conjunto em contratos verificáveis e um piloto auditável. A entrega é liberável por fatia apenas quando autorização, identidade, qualidade, retenção, evidência e accountability passarem conjuntamente.
