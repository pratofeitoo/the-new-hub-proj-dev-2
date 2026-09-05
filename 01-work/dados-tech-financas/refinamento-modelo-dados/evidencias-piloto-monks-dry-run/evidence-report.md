---
title: "Relatório de Evidência — Dry-run Sintético Monks"
date: 2026-09-05
status: ensaio-reproduzivel
synthetic: true
source_type: synthetic
run_id: run-synthetic-monks-001
---

# Relatório de Evidência — Dry-run Sintético Monks

> **Limite de uso:** este relatório é um ensaio técnico determinístico. Não contém dados da Monks, uso real, consentimento real, resultados observados, recomendações adotadas, receita ou aprovação de cliente. Não libera o gate M0→P03.

## Reprodução

```bash
python3 01-work/dados-tech-financas/refinamento-modelo-dados/evidencias-piloto-monks-dry-run/validate_dry_run.py
```

Saída esperada: `DRY-RUN VALIDATION: PASS`.

## Resultado calculado

| Critério do ensaio | Resultado | Limiar | Veredito do ensaio |
|---|---:|---:|---|
| Cobertura FLD M0 | 24/24 = 100% | >80% | PASS sintético |
| KPIs M0 conectados | 10/16 = 62,5% | >60% | PASS sintético |
| Recomendações rastreáveis | 5 | 5–10 | PASS sintético |
| Casos financeiros | 2 | ≥2 | PASS estrutural sintético |

Os dois casos financeiros têm `source_type=synthetic`, `real_monks_data=False` e `claim_status=not_a_claim`. Os cinco registros de recomendação têm `source_type=synthetic`, `status=fixture_only` e não representam ações executadas.

## Artefatos

- `inputs.synthetic.json`: contagens, IDs e marcador de origem.
- `financial-cases.synthetic.csv`: dois casos e chaves anti-dupla contagem.
- `recommendations.synthetic.csv`: cinco recomendações fixture-only.
- `validate_dry_run.py`: validador independente que recalcula e verifica joins/unicidade.

## Decisão de gate

O ensaio demonstra que o contrato de medição pode ser executado de forma reproduzível, mas **não satisfaz a evidência do piloto Monks**. O gate permanece `BLOQUEADO`; os dados reais, a execução operacional e a revisão/aceite ainda são necessários.
