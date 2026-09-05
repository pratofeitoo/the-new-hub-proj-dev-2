---
title: "Registro de Execução — Dry-run Monks e Gate M0→P03"
date: 2026-09-05
type: execution-log
status: pausado-aguardando-piloto-real
phase: P03
gate: M0→P03
tags:
  - gestao-projeto
  - dados-canonicos
  - Monks
  - dry-run
  - evidencia
  - gate
related_notes:
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/promocao-M0-gate-P03-v1]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/reconciliacao-fonte-aprovada-P03-v1]]"
  - "[[docs/specs/2026-09-05-monks-dry-run-evidence-design]]"
  - "[[docs/plans/2026-09-05-monks-dry-run-evidence]]"
---

# Registro de Execução — Dry-run Monks e Gate M0→P03

> [!warning] Estado atual
> O dry-run sintético foi concluído e validado. Ele comprova a reprodutibilidade do contrato de medição, mas **não desbloqueia a promoção real**. O gate M0→P03 permanece `BLOQUEADO` até a substituição das fixtures por evidência executada, revisada e consentida do piloto Monks.

## 1. Objetivo da atividade

Executar o próximo passo após a reconciliação do Blueprint: testar o pacote mínimo de evidência exigido pelo gate M0→P03 sem transformar premissas, especificações ou números ilustrativos em evidência de uso real.

O trabalho foi deliberadamente dividido em dois níveis:

1. **Reconciliar o estado documental:** eliminar declarações incorretas de que relatórios P03-T09 estavam ausentes e distinguir relatório existente de evidência suficiente.
2. **Executar um ensaio sintético:** criar entradas determinísticas, validar os quatro limiares do gate e registrar explicitamente a limitação do ensaio.

## 2. Trabalho realizado

### 2.1 Reconciliação e correção documental

- Mantido `03-approved` como fonte imutável.
- Consolidado o crosswalk em [[01-work/dados-tech-financas/refinamento-modelo-dados/reconciliacao-fonte-aprovada-P03-v1]].
- Corrigido [[01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1]]:
  - os relatórios de validação foram encontrados em `02-review`;
  - o relatório de entidades foi classificado como insuficiente para promoção porque preserva a FK direta E02, em conflito com `rel_company_entity`;
  - o recálculo ROI foi classificado como insuficiente porque reproduz premissas ilustrativas;
  - a validação CSV foi classificada como `PASS limitado`, pois cobre apenas a forma dos CSVs;
  - a execução de replay/DSAR permanece pendente.
- Atualizado [[01-work/dados-tech-financas/refinamento-modelo-dados/promocao-M0-gate-P03-v1]] com o achado e o vínculo da evidência sintética.

### 2.2 Desenho e plano do dry-run

- Registrado o desenho em [[docs/specs/2026-09-05-monks-dry-run-evidence-design]].
- Registrado o plano em [[docs/plans/2026-09-05-monks-dry-run-evidence]].
- Definidas as proteções obrigatórias:
  - `synthetic=true` e `source_type=synthetic` em todos os artefatos;
  - nomenclatura `.synthetic`;
  - nenhum checkbox do gate marcado;
  - nenhuma promoção para `03-approved`;
  - nenhum resultado apresentado como claim de cliente, tração, receita ou ROI real.

### 2.3 Artefatos produzidos

Diretório: `01-work/dados-tech-financas/refinamento-modelo-dados/evidencias-piloto-monks-dry-run/`

- `inputs.synthetic.json`: conjunto determinístico de IDs, contagens, cobertura FLD/KPI e marcadores de origem.
- `financial-cases.synthetic.csv`: dois casos financeiros sintéticos com ledger, chaves de anti-dupla contagem e `claim_status=not_a_claim`.
- `recommendations.synthetic.csv`: cinco recomendações sintéticas, cada uma ligada a um KPI e marcada como `fixture_only`.
- `validate_dry_run.py`: validador independente em Python padrão; verifica marcadores, unicidade, joins e limiares.
- `evidence-report.md`: relatório do ensaio, resultados calculados, limites e comando de reprodução.

## 3. Resultados alcançados

Execução realizada com:

```bash
python3 01-work/dados-tech-financas/refinamento-modelo-dados/evidencias-piloto-monks-dry-run/validate_dry_run.py
```

Resultado:

```text
DRY-RUN VALIDATION: PASS
```

| Critério | Resultado do ensaio | Limiar do gate | Status |
|---|---:|---:|---|
| Cobertura FLD M0 | 24/24 = 100% | >80% | PASS sintético |
| KPIs M0 conectados | 10/16 = 62,5% | >60% | PASS sintético |
| Recomendações rastreáveis | 5 | 5–10 | PASS sintético |
| Casos financeiros | 2 | ≥2 | PASS estrutural sintético |

Também foi executado:

```bash
git diff --check -- 01-work/dados-tech-financas/refinamento-modelo-dados docs
```

Resultado: sem erro de whitespace nos caminhos verificados.

## 4. Estado do gate

O [[01-work/dados-tech-financas/refinamento-modelo-dados/promocao-M0-gate-P03-v1|gate M0→P03]] continua:

- `status: rascunho`;
- `Estado: BLOQUEADO`;
- sete critérios não marcados;
- sem alteração em `03-approved`.

O dry-run **não** satisfaz a linha “Evidências piloto Monks” porque:

- não usa registros da Monks;
- não demonstra uso operacional ou consentimento real;
- não comprova recomendações adotadas;
- não comprova dois casos financeiros reais validados;
- não substitui revisão Dados+Tech+LGPD nem aprovação do cliente.

## 5. Onde o trabalho está pausado

O trabalho está pausado na transição entre **ensaio técnico** e **execução do piloto real**. A próxima atividade não é alterar o gate; é obter os insumos que o workbook disponível ainda não contém.

O arquivo `HUB_MVP_Monks_Custos_Fundadores_v2.xlsx` permanece um plano de escopo, custos e fases futuras. Ele não é evidência de execução.

## 6. Próximos passos necessários

1. Obter export/dataset real da Monks com autorização e termos de uso registrados.
2. Registrar baseline, janela, população, versão do schema e `run_id` real.
3. Executar o mapeamento FLD M0 e a conexão dos KPIs contra os dados reais.
4. Registrar 5–10 recomendações efetivamente geradas e seu estado de execução/aceite.
5. Registrar pelo menos dois casos financeiros reais com fonte, atribuição, ledger, deduplicação e revisão financeira.
6. Executar replay/DSAR e propagation test de revogação quando aplicável.
7. Obter revisão Dados+Tech+LGPD e aceite do responsável pelo gate.
8. Atualizar o relatório substituindo as fixtures sintéticas por artefatos reais; só então reavaliar os sete critérios e a promoção.

## 7. Decisão registrada

O ensaio foi aceito como **evidência técnica de reprodutibilidade**, não como evidência de piloto. Nenhuma promoção real foi autorizada. A retomada depende de dados e evidências reais da Monks.
