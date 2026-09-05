---
title: "P03-T08 — CMP log e DSAR manual do piloto (2026-09-05)"
task_id: P03-T08
status: dry-run / procedimento manual não executado
generated_at: 2026-09-05T23:55:00Z
---

# CMP + DSAR — evidência mínima de procedimento

> **Veredicto:** `DRY-RUN / NÃO EXECUTADO`. O conteúdo abaixo demonstra que o
> piloto tem um registro mínimo reproduzível e um checklist manual; não é log
> de um CMP real, não prova SLA e não representa aprovação legal.

## Registro CMP sintético

Fixture alinhada ao `CMP-log-E20-v1.md` e ao envelope mínimo do spine. Todos os
timestamps são UTC fixos para reprodução.

| event_id | consent_id | person_id | purpose | version | revoked_at | propagation_at | destination | quarantine_id | idempotency_key | action |
|---|---|---|---|---:|---|---|---|---|---|---|
| evt_revoked_e20_001 | cons_e20_001 | person_e20_001 | matching | 1 | 2026-09-05T23:50:00Z | 2026-09-05T23:50:45Z | fact_person_skill | q_e20_fps_001 | idem_revoked_e20_001 | quarantined |
| evt_revoked_e20_001 | cons_e20_001 | person_e20_001 | matching | 1 | 2026-09-05T23:50:00Z | 2026-09-05T23:50:45Z | fact_event | q_e20_event_001 | idem_revoked_e20_001 | quarantined |
| evt_revoked_e20_001 | cons_e20_001 | person_e20_001 | matching | 1 | 2026-09-05T23:50:00Z | 2026-09-05T23:50:45Z | fact_match | q_e20_match_001 | idem_revoked_e20_001 | quarantined |
| evt_revoked_e20_001 | cons_e20_001 | person_e20_001 | matching | 1 | 2026-09-05T23:50:00Z | 2026-09-05T23:50:45Z | metric/model/cache/partner_export | q_e20_downstream_001..004 | idem_revoked_e20_001 | quarantined |
| evt_revoked_e20_001 | cons_e20_001 | person_e20_001 | identity_resolution | 1 | — | 2026-09-05T23:50:45Z | control read | — | idem_control_e20_001 | allowed_control |

**Interpretação:** a tabela é um registro sintético da forma exigida, com
correlação por evento/chave, e não uma observação do CMP. No piloto, o owner
deve transcrever cada transição real em planilha controlada e anexar evidência.

## DSAR manual — caso sintético

| Caso | Entrada mínima | Ação manual esperada | Saída/evidência a anexar | Estado |
|---|---|---|---|---|
| `DSAR-E20-001` acesso | `fornecedor_id=forn_e20_001`, alias `email:e20@example.invalid` | verificar titular; localizar 12 entidades, consentimentos e participações; incluir `provenance` | `dsar-E20-001-access.json`, owner, data, recibo | dry-run — não executado |
| `DSAR-E20-001` exclusão | mesmo alias + identidade verificada | bloquear novos usos; listar quarentenas; remover/anonimizar o permitido; registrar exceções legais | checklist, IDs `q_e20_*`, justificativa | dry-run — não executado |
| `DSAR-E20-001` portabilidade | mesmo alias + identidade verificada | gerar CSV/JSON estruturado com campos e proveniência; calcular checksum | `dsar-E20-001-portability.json`, checksum UTC | dry-run — não executado |

Restrições preservadas: `identity_alias`, `dim_*`, `fact_*`, features, caches,
índices, backups e exports parceiros entram no inventário; agregados não
removíveis exigem anonimização e risco residual. O atendimento manual não
comprova SLA automatizado.

## Verificação local reproduzível

```bash
python3 - <<'PY'
rows = ["access", "delete", "portability"]
assert rows == ["access", "delete", "portability"]
assert all(r.startswith(("a", "d", "p")) for r in rows)
print("DRY_RUN_ONLY dsar_cases=3 access=listed delete=quarantine+exception portability=structured")
PY
```

Saída esperada/executada localmente:

```text
DRY_RUN_ONLY dsar_cases=3 access=listed delete=quarantine+exception portability=structured
```

## Residual e gate

Não há execução de conta CMP, verificação de identidade de titular, export,
deleção, fila, backup ou parceiro. `DAT-008` permanece aberto; aprovação
Jurídico/LGPD/DPO e Governança Dados permanece pendente; nenhuma decisão
`DEC-P03-T08` foi criada.
