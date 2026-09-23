---
title: "Veredito Gate V2 — 20 Relações Blueprint"
description: Veredito formal do Gate V2 com condições, bloqueios e sequência autorizada. Matriz dedicada em nota própria.
type: log
status: ativo
date: 2026-09-05
tags:
  - gestao-projeto
  - blueprint
  - dados-canonicos
  - gate-V2
related_notes:
  - "[[03-approved/reconciliacao-blueprint/Matriz_Status_E01_E20_V1]]"
  - "[[04-project-management/registros-trabalho/logs-progresso/2026-09-05-classificacao-20-relacoes-blueprint]]"
---

# Veredito Gate V2 — 20 Relações Blueprint

> [!abstract] Leitura executiva
> V2 **aprovada condicionalmente como plano de reconciliação; contratos F1 ainda não aprovados**. Matriz dedicada: [[03-approved/reconciliacao-blueprint/Matriz_Status_E01_E20_V1|Matriz de Status E01–E20]].
> Resultado: **0 cobertas · 5 parciais · 3 hipóteses · 12 futuras**; E02, E20 e E01 falharam o aceite físico/documental F1.
> `03-approved` permanece imutável. Nenhum `REL-*` fictício foi criado.

## 1. Matriz (nota dedicada)

Ver [[03-approved/reconciliacao-blueprint/Matriz_Status_E01_E20_V1|Matriz de Status E01–E20]] — cobertura, evidência, pendência, responsável e fase por relação.

Resumo: **0 cobertas · 5 parciais (E01, E03, E05, E07, E09) · 3 hipóteses (E04, E14, E15) · 12 futuras**.

## 2. Veredito formal do Gate V2

**Decisão:** V2 **aprovada condicionalmente apenas como plano de fechamento por fases**. A ontologia completa **não** está implementada e os contratos fundacionais E02, E20 e E01 **não foram aceitos**. Portanto, a decisão não autoriza uso operacional nem liberação de F2.

**O que o gate aprova:**

1. `03-approved` permanece imutável como fonte de verdade (`FLD-001`–`FLD-047`, `N01`–`N26`, `REL-01`–`REL-12`).
2. As 5 relações **parciais** têm aceite documental (A1–A3) e podem ser referenciadas como proxy, sem afirmação de cobertura técnica plena.
3. As 3 **hipóteses** (E04, E14, E15) são aceitas como premissas M1/M2 documentadas; não geram compromisso de MVP.
4. As 12 **futuras** têm fase, responsável e critério de aceite definidos acima; nenhuma vira `REL-*` sem desenho + aprovação.

### Resultado da revisão dos contratos F1

- **E02 — FAIL condicional:** a separação conceitual está correta, mas P03-T04 ainda modela `dim_company.entity_id` como FK direta, não publica a bridge `rel_company_entity`, omite `fact_contract.company_id` no mapping e não fornece evidência física de `tenant_id`, `provenance_ref` e eventos.
- **E20 — FAIL bloqueador:** a especificação ternária e as regras de bloqueio estão corretas, mas `titular_id`/`person_id` permanece ambíguo; faltam propagation test/CMP log ≤5min, evidência FLD-024–026 e aprovação formal LGPD/DPO + Governança.
- **E01 — FAIL condicional:** a regra temporal está conceitualmente alinhada, mas `manager_id`, constraints físicas anti-sobreposição, isolamento por tenant, schemas/fixtures `relationship.started/ended` e as evidências A2–A3 ainda não existem.

Esses resultados são consistentes com a auditoria do mapeamento E01–E20 (**PASS**): os status 0/5/3/12 e os `UNVERIFIED` estão corretos, mas não constituem evidência de implementação dos contratos.

**O que o gate bloqueia:**

1. Nenhum uso operacional dependente de **E02** (Empresa/Cliente/Entidade) ou **E20** (consentimento) antes dos contratos aprovados — P0 F1.
2. Nenhuma afirmação causal de **E08** sem baseline, cohort, janela, holdout e ledger validado — F4.
3. Nenhuma métrica financeira promovida sem atribuição, deduplicação e ledger (vale para E09, E12 e qualquer FIN).
4. Nenhum `REL-*` fictício criado para preencher lacuna; `UNVERIFIED` permanece `UNVERIFIED` até o contrato existir.
5. **E11, E12, E17** só entram em operação com eventos reproduzíveis, envelope versionado (`event_id`/`event_type`/`schema_version`), idempotência e replay testado.

**Sequência autorizada (condicionada ao fechamento dos bloqueios):**

- **F0 (1–3 dias, imediato):** este registro é o fechamento documental. Gate V2 emitido.
- **F1 fundação (2–4 semanas):** corrigir e testar E02; corrigir e testar E20 com aprovação LGPD/DPO; fechar E01 com A1–A3 e constraints. E02 e E20 podem ser desenhados em paralelo; E01 fecha depois da distinção E02.
- **F2 cadeia operacional (2–5 semanas):** E03–E05, E10–E12, E17. **Bloqueada até os três contratos F1 serem aceitos.**
- **F3 expansão (4–8 semanas):** E06, E13, E16, E18, E19. Sem compromisso de MVP.
- **F4 causalidade (4–8+ semanas piloto):** E08 isolada, com método próprio.

**Critérios de done da revisão documental V2 (atendidos):**

- [x] As 20 relações têm status explícito.
- [x] Cada parcial aponta para seu `REL-*`, entidade ou campo aprovado.
- [x] Cada hipótese/futura informa fase e não é apresentada como contrato.
- [x] E02 e E20 têm rota de contrato como pré-requisito operacional; o aceite F1 permanece pendente.
- [x] E11, E12, E17 têm exigência de eventos reproduzíveis.
- [x] E08 tem exigência de evidência causal, não correlação.
- [x] Regra financeira com ledger/atribuição/deduplicação registrada.

**Critérios ainda não atendidos para liberar F1/F2:**

- [ ] E02: remover FK direta `dim_company.entity_id`, publicar `rel_company_entity`, incluir `fact_contract.company_id` e testar chaves/cardinalidade/tenant/auditoria.
- [ ] E20: unificar `titular_id`/`person_id`, publicar e executar propagation test + CMP log ≤5min, validar FLD-024–026 e obter aprovação LGPD/DPO + Governança.
- [ ] E01: reconciliar `manager_id`, publicar constraints e fixtures temporais/eventos, testar isolamento e registrar A2–A3.

### Reexecução dos aceites após correções

- **E02 — PASS documental:** `rel_company_entity` é bridge física de primeira classe; a FK direta Company–Entity foi removida; `fact_contract.company_id` e o papel Cliente foram publicados; tenant, temporalidade e auditoria estão explicitados.
- **E20 — PASS de especificação / FAIL de execução:** `person_id` é a coluna canônica e `titular_id` ficou somente como alias; o envelope e os SPECs de propagation/CMP estão publicados. O teste ≤5min e os pareceres LGPD/DPO + Governança ainda não foram executados/emitidos.
- **E01 — PASS de especificação / FAIL de execução:** `manager_id`, tenant, temporalidade, eventos e fixture A2 foram reconciliados. A3 continua pendente porque não há banco/runtime para executar constraints, isolamento, append-only e replay.

**Decisão de liberação:** F2 **não é liberada nesta reexecução**. A documentação e os SPECs foram corrigidos, mas SPEC não substitui evidência física: faltam o teste E20 ≤5min com CMP log/aprovação LGPD e a execução física A3 de E01. O gate será reaberto após esses artefatos executados e revisados.

## 3. Próximo passo operacional

Abrir a remediação F1 com **E02** (distinção Empresa/Cliente/Entidade + bridge/cardinalidade/chaves) e **E20** (contrato ternário + revogação/propagação + gate LGPD) em paralelo; fechar **E01** (temporalidade do vínculo, `manager_id`, constraints e A2–A3) na sequência. Reexecutar os três aceites e só então liberar F2.
