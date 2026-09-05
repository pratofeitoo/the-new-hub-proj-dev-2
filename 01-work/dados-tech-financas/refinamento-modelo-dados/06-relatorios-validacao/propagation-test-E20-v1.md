---
title: SPEC — Teste de propagação E20 (consentimento ternário)
status: rascunho / SPEC
scope: E20
task_id: P03-T08
---

# Propagation Test E20 v1

> Este documento define o teste e seus critérios. É evidência de desenho apenas; não representa execução, aprovação LGPD ou aceite F1.

## Objetivo e hipótese

Verificar ponta a ponta que um evento `consent.revoked` para um par
`(person_id, purpose, version)` impede novos usos e coloca derivados existentes
em quarentena em até **5 minutos** após `revoked_at`. O teste deve cobrir
`fact_person_skill`, `fact_event`, `fact_match`, métricas, modelos, caches e
exports de parceiros, sem afetar finalidades não revogadas.

## Cenário e fixtures

Usar um tenant isolado e dados sintéticos:

| Fixture | Valor |
|---|---|
| `tenant_id` | `tenant_e20_test` |
| `person_id` | `person_e20_001` |
| `consent_id` | `cons_e20_001` |
| `purpose` | `matching` |
| `version` | `1` |
| `revoked_at` | timestamp UTC emitido pelo CMP |
| finalidade controle | `identity_resolution` com consentimento vigente |

Materializar, antes da revogação, pelo menos um registro em cada destino:
`fact_person_skill`, `fact_event`, `fact_match`, uma métrica, um artefato de
modelo/feature, uma entrada de cache e um lote de export parceiro. Cada artefato
deve carregar `consent_id + purpose + version`.

## Passos executáveis

1. Registrar `t0 = revoked_at` no CMP e publicar o envelope v1.0
   `consent.revoked` com `schema_version`, `occurred_at` e `idempotency_key`.
2. Confirmar ingestão do evento e registrar `propagation_at` por destino no
   [[01-work/dados-tech-financas/refinamento-modelo-dados/06-relatorios-validacao/CMP-log-E20-v1|CMP-log-E20-v1]].
3. A cada 30 segundos, tentar uma nova leitura/derivação para `matching` em
   todos os destinos e observar a fila de quarentena.
4. Verificar que os registros materializados antes de `t0` foram marcados,
   removidos de uso ativo ou copiados para quarentena com `quarantine_id`.
5. Verificar que nenhuma nova métrica, feature/modelo, cache ou export contendo
   o par revogado chega a um consumidor ativo.
6. Executar novamente o mesmo evento (mesma `idempotency_key`) e confirmar que
   não há duplicação de quarentena nem efeitos adicionais.
7. Executar leitura/derivação para `identity_resolution` e confirmar que a
   finalidade controle continua permitida.
8. Preencher tempos observados, contagens, IDs de quarentena e anomalias no
   CMP log; anexar logs/queries e assinatura do executor.

## Latência medida

Para cada destino, medir `latency = propagation_at - revoked_at` (UTC, em
segundos). Preencher somente após execução:

| Destino | `revoked_at` | `propagation_at` | Latência (s) | `quarantine_id` | Resultado |
|---|---|---|---:|---|---|
| `fact_person_skill` | _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ |
| `fact_event` | _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ |
| `fact_match` | _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ |
| métricas | _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ |
| modelos/features | _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ |
| caches | _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ |
| exports parceiros | _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ |

## Critérios PASS/FAIL

**PASS** somente se todos os destinos tiverem `latency ≤ 300 s`, cada novo uso
revogado for bloqueado, cada pré-existente for quarentenado ou tornado não
utilizável, o controle não revogado permanecer funcional, a repetição for
idempotente e o CMP log correlacionar cada etapa. **FAIL** se qualquer destino
exceder 300 s, permitir leitura/derivação/export, não gerar quarentena auditável,
perder correlação, ou bloquear a finalidade controle.

## Estado e aprovação

- Status atual: **rascunho / SPEC**.
- Execução: pendente; preencher os campos acima somente com evidência real.
- Aprovação: LGPD/DPO + Governança Dados pendente para aceite F1.
