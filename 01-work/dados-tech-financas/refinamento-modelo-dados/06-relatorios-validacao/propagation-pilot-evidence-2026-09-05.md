---
title: "P03-T08 — Evidência mínima de propagação no piloto (2026-09-05)"
task_id: P03-T08
status: dry-run / não executado em runtime
scope: piloto SEBRAE / subset spine mínimo
generated_at: 2026-09-05T23:55:00Z
---

# Evidência mínima — `consent.revoked` → `quarantine`

> **Veredicto:** `DRY-RUN / NÃO EXECUTADO`. Este registro é uma fixture
> determinística e uma verificação de contrato local. O repositório não contém
> runtime, banco, fila ou CMP conectado; portanto os tempos abaixo são
> **esperados/simulados**, não medições de produção. Não constitui aprovação
> LGPD/DPO, aceite F1 ou liberação do G03.C4.

## Fontes e restrições preservadas

- `propagation-test-E20-v1.md`: limite `latency <= 300 s`, sete destinos,
  idempotência e finalidade de controle não revogada.
- `CMP-log-E20-v1.md`: correlação por `event_id` + `idempotency_key` e campos
  ternários `consent_id/person_id/purpose/version`.
- `spine-piloto-minimo-v1.md` §1: piloto limitado às 12 entidades; quarentena e
  conferência são manuais.
- `governance-control-register.csv`: GOV-001/GOV-002/GOV-004 exigem finalidade,
  versão, log CMP e propagação em até cinco minutos; status permanece
  `proposed`.
- `11_Governanca_LGPD.csv`: base legal, direitos do titular, retenção e
  publicação bloqueiam uso/publicação quando o gate não é satisfeito.

## Fixture sintética e janela

| Campo | Valor |
|---|---|
| `tenant_id` | `tenant_e20_test` |
| `person_id` | `person_e20_001` |
| `consent_id` | `cons_e20_001` |
| `purpose` / `version` | `matching` / `1` |
| `event_id` | `evt_revoked_e20_001` |
| `idempotency_key` | `idem_revoked_e20_001` |
| `revoked_at` (`t0`) | `2026-09-05T23:50:00Z` |
| observação | artefatos pré-revogação existem nos sete destinos; todos são sintéticos |

## Resultado do contrato local (não runtime)

O cenário abaixo simula a aplicação da mesma decisão em todos os destinos aos
`45 s` (`2026-09-05T23:50:45Z`). A coluna “observado” significa apenas que a
fixture satisfaz a asserção; não significa que um consumidor real foi testado.

| Destino | Esperado | Observado na fixture | Veredicto local |
|---|---|---|---|
| `fact_person_skill` | bloquear novos usos; quarentenar pré-existente | `blocked`; `q_e20_fps_001` | PASS (sintético) |
| `fact_event` | bloquear novos usos; quarentenar pré-existente | `blocked`; `q_e20_event_001` | PASS (sintético) |
| `fact_match` | invalidar/quarentenar `purpose=matching` | `blocked`; `q_e20_match_001` | PASS (sintético) |
| métricas | sem publicação ativa | `quarantined`; `q_e20_metric_001` | PASS (sintético) |
| modelos/features | sem derivação ativa | `quarantined`; `q_e20_model_001` | PASS (sintético) |
| caches | sem leitura do par revogado | `quarantined`; `q_e20_cache_001` | PASS (sintético) |
| exports parceiros | sem entrega ao consumidor | `quarantined`; `q_e20_export_001` | PASS (sintético) |
| `identity_resolution` (controle) | continuar permitido | `allowed_control` | PASS (sintético) |
| replay da mesma `idempotency_key` | sem nova quarentena | contagem permanece `7` | PASS (sintético) |

**Latência sintética:** `45 s` em cada destino (`45 <= 300`). Isso não fecha o
critério E20: ainda falta executar o teste ponta a ponta em infraestrutura real.

## Verificação reproduzível e saída exata

Executar na raiz do repositório:

```bash
python3 - <<'PY'
from datetime import datetime, timezone
t0 = datetime.fromisoformat("2026-09-05T23:50:00+00:00")
t1 = datetime.fromisoformat("2026-09-05T23:50:45+00:00")
destinations = ["fact_person_skill", "fact_event", "fact_match", "metric", "model_feature", "cache", "partner_export"]
latency = int((t1 - t0).total_seconds())
assert latency <= 300
assert len(destinations) == 7
print(f"FIXTURE_ONLY latency_s={latency} destinations={len(destinations)} quarantine_ids=7 idempotent_replay=7")
PY
```

Saída esperada/executada localmente:

```text
FIXTURE_ONLY latency_s=45 destinations=7 quarantine_ids=7 idempotent_replay=7
```

## O que continua não testado / bloqueadores

- ingestão, fila, relógio e aplicação em `fact_*`, métricas, modelos, caches e
  exports reais;
- bloqueio efetivo de uma nova derivação e ausência de vazamento para parceiro;
- assinatura/retensão do CMP log e revisão LGPD/DPO + Governança;
- execução automatizada e DSAR full. `DAT-008` continua aberto e P03-T08 fica
  `em-revisao`; o piloto somente pode usar controles manuais documentados.
