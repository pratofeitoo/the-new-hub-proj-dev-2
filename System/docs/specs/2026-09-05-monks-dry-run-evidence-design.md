---
title: "Desenho — Evidência Sintética do Dry-run Monks"
date: 2026-09-05
status: aprovado-para-dry-run
scope: "P03 evidence rehearsal only"
---

# Desenho — Evidência Sintética do Dry-run Monks

## Escopo

Criar um pacote determinístico de evidência sintética para ensaiar a validação do gate M0→P03. O pacote demonstra o cálculo dos quatro limiares do gate, mas não representa dados, uso, recomendação, resultado financeiro ou aprovação da Monks.

## Fluxo e artefatos

1. `inputs.synthetic.json` contém contagens e identificadores sintéticos versionados.
2. `financial-cases.synthetic.csv` contém dois casos financeiros sintéticos com ledger e anti-dupla contagem.
3. `recommendations.synthetic.csv` contém cinco recomendações sintéticas rastreáveis aos indicadores.
4. `validate_dry_run.py` recalcula os limiares e falha se os números divergirem ou se o pacote perder o marcador sintético.
5. `evidence-report.md` registra os resultados, limitações e comando de reprodução.
6. O gate referencia o relatório como **evidência de ensaio**, mantendo o estado `BLOQUEADO` para promoção real.

## Contrato de aceitação do ensaio

- Cobertura FLD M0: 24/24 = 100%, acima de 80%.
- KPIs M0 conectados: 10/16 = 62,5%, acima de 60%.
- Recomendações: 5, dentro do intervalo 5–10.
- Casos financeiros: 2, ambos com `source_type=synthetic`, portanto não são casos financeiros validados da Monks.

## Não objetivos

- Não marcar os sete itens do gate como concluídos.
- Não mover artefatos para `03-approved`.
- Não transformar dados sintéticos em evidência de tração, ROI, depoimento, contrato ou uso operacional.

## Modos de falha

1. **Confusão entre ensaio e piloto real — crítico:** mitigado por marcador obrigatório `synthetic=true`, nomenclatura `.synthetic` e bloqueio explícito no gate.
2. **Números do relatório divergirem dos inputs — crítico:** mitigado pelo validador determinístico que recalcula todos os limiares.
3. **Caso sintético ser reutilizado como claim financeiro — crítico:** mitigado por `source_type=synthetic`, ausência de cliente real e nota de não promoção no relatório.

## Verificação

Executar:

```bash
python3 01-work/dados-tech-financas/refinamento-modelo-dados/evidencias-piloto-monks-dry-run/validate_dry_run.py
```

O comando deve terminar com status 0 e imprimir `DRY-RUN VALIDATION: PASS`.
