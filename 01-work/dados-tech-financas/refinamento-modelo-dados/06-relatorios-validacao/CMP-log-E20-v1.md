---
title: SPEC — CMP log auditável E20
status: rascunho / SPEC
scope: E20
task_id: P03-T08
---

# CMP Log E20 v1

> Especificação do registro de auditoria para o teste de propagação. Não é um
> log de execução e não constitui aprovação LGPD/DPO.

## Registro obrigatório

Cada linha representa uma transição observável (emissão, ingestão, propagação,
quarentena ou bloqueio) e deve conter:

| Campo | Regra |
|---|---|
| `consent_id` | identificador ternário do consentimento |
| `person_id` | FK canônica para `dim_person.person_id` |
| `purpose` | finalidade exata; nunca usar curinga |
| `version` | versão do consentimento/política |
| `revoked_at` | timestamp UTC do CMP/evento de revogação |
| `propagation_at` | timestamp UTC em que o destino aplicou a decisão |
| `destination` | sistema/tabela/cache/export afetado |
| `quarantine_id` | ID obrigatório quando houver artefato materializado |
| `idempotency_key` | chave do evento e de cada reprocessamento |

Recomenda-se ainda registrar `tenant_id`, `event_id`, `schema_version`,
`recorded_at`, `action` (`blocked`, `quarantined`, `allowed_control`),
`source_artifact_id`, `executor`, `evidence_ref` e `error_code`.

## Correlação e integridade

1. Correlacionar `idempotency_key` e `event_id` do envelope
   `consent.revoked` com todas as linhas do destino; nunca correlacionar apenas
   por `person_id`.
2. Para cada destino do [[01-work/dados-tech-financas/refinamento-modelo-dados/06-relatorios-validacao/propagation-test-E20-v1|propagation-test-E20-v1]],
   registrar o mesmo `consent_id + person_id + purpose + version`,
   `revoked_at`, `propagation_at` e `quarantine_id` quando aplicável.
3. Calcular `propagation_at - revoked_at` em segundos e comparar com o limite
   de 300 segundos definido no teste; preservar timestamps originais em UTC.
4. A repetição do evento deve manter a mesma `idempotency_key` e o mesmo
   resultado lógico, sem criar nova quarentena.
5. O log é append-only, com acesso restrito e retenção compatível com a matriz
   P03-T08; correções são novas linhas referenciando a linha anterior.

## Template de execução (preencher depois)

| event_id | consent_id | person_id | purpose | version | revoked_at | propagation_at | destination | quarantine_id | idempotency_key | action | evidence_ref |
|---|---|---|---|---|---|---|---|---|---|---|---|
| _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ | _pendente_ |

## Estado e aprovação

- Status atual: **rascunho / SPEC**.
- Execução real e anexos: pendentes.
- Aprovação LGPD/DPO + Governança Dados: pendente para aceite F1.
