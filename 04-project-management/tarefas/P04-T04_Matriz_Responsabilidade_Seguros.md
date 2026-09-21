---
title: P04-T04 — Matriz de responsabilidade + seguros e indenizações
task_id: P04-T04
phase: P04
status:
  - on-hold
priority: alta
area: governance-legal
layer: refining
owner:
  - PF Rezende (interino — Jurídico)
accountable: PF Rezende
blocked_reason: aguardando nomeação Jurídico — GOV-004
blocked_until: 2026-10-15
gap_ids:
  - GOV-004
dependencies:
  - P04-T02
target_file: 01-work/documentos-oficiais/_controle/
related_notes:
  - "[[04-project-management/planos-fase/P04_Governanca_Confianca]]"
  - "[[00-project-control/registro-lacunas/lacunas/GOV-004]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M04 — Governança & Confiança Aprovada]]"
evidence_required:
  - 01-work/documentos-oficiais/04-contratos-fundamentais/04.01-MSA-acordo-quadro-cliente.md
  - 01-work/documentos-oficiais/04-contratos-fundamentais/04.02-SOW-ordem-jornada.md
  - 01-work/documentos-oficiais/04-contratos-fundamentais/04.05-contrato-fornecedores-avaliadores.md
  - 01-work/documentos-oficiais/04-contratos-fundamentais/04.06-contrato-intercompany.md
  - 01-work/documentos-oficiais/06-conformidade-LGPD/06.04-politica-seguranca-incidentes.md
  - 01-work/documentos-oficiais/04-contratos-fundamentais/04.03-termos-plataforma-SLA.md
created: 2026-08-26
tags:
  - task
  - fase-P04
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:55:58.616-03:00
---

# P04-T04 — Matriz de responsabilidade + seguros e indenizações

## Objetivo
Mapear responsabilidade civil para recomendações, matching, fornecedores, incidentes de dados e alegações públicas + seguros/indenizações — com exposição residual aprovável por Jurídico+risco (GOV-004).

## Entregável
Matriz responsabilidade civil em `01-work/documentos-oficiais/_controle/` + minutas `04-contratos-fundamentais/` (MSA 04.01, SOW 04.02, fornecedores 04.05, intercompany 04.06, SLA 04.03) + política incidentes `06.04` como rascunho hipotese; aprovação exposição residual é Camada 3.

## Acceptance criteria (G04.4 — GOV-004)

- [ ] Matriz responsabilidade publicada por vetor de risco — tabela em target com 5 vetores: (1) recomendações (diagnóstico/maturidade C.A.O.S.), (2) matching/introdução fornecedor↔oportunidade, (3) fornecedores/avaliadores (`04.05`), (4) incidentes dados LGPD (vazamento, DSAR, retenção), (5) alegações públicas/Selo; cada vetor com `responsável contratual` (HUB Negócios vs Instituto vs fornecedor vs cliente), `limite liability` (cap), `exclusão` (consequential), `indenização` (hold harmless), `seguro` (RC profissional/cyber) e `foro`; reconciliada com `P04-T02` controller/processor por fluxo
- [ ] Minutas com cláusulas testáveis — `04.01-MSA` (limite liability + exclusão danos indiretos + indenização recíproca) + `04.02-SOW` (escopo jornada, aceite, rollback) + `04.03-SLA` (níveis serviço, penalidade, suporte) + `04.05` (responsabilidade avaliador, seguro) + `04.06` (alocação intercompany) + `06.04` (notificação ANPD/titular, SLA 72h incidente); cada minuta com checklist `revisado por advogado` + status `hipotese`
- [ ] Exposição residual documentada para aprovação futura — matriz registra `exposição residual` por vetor + `risco aceito vs mitigado` + `prêmio seguro estimado`; sem aprovação Jurídico+risco, GOV-004 permanece `blocking: no` para piloto (curadoria manual limitada) mas `blocking: yes` para escala/comercialização; nenhuma cláusula pode ser apresentada como aprovada — apenas rascunho para revisão

> **Pilot vs Full:** Piloto SEBRAE 28/10 — curadoria manual com 30 fornecedores, MSA/SOW piloto simplificado + `acordo-cooperacao-SEBRAE-HUB` + responsabilidade limitada a facilitação (não garantia de contrato); seguro cyber/RC em contratação; exposição piloto aceita como risco baixo com mitigação manual. Plataforma full = matriz 5 vetores + MSA/SOW/SLA assinados + seguros contratados (RC + cyber) + limites liability aprovados por Jurídico+risco + intercompany operacional. Este critério valida full; piloto pode operar com minutas hipotese + risco piloto documentado.

## Evidence required

- `01-work/documentos-oficiais/04-contratos-fundamentais/04.01-MSA-acordo-quadro-cliente.md` (MSA — liability cap + indenização + status hipotese)
- `01-work/documentos-oficiais/04-contratos-fundamentais/04.02-SOW-ordem-jornada.md` + `04.03-termos-plataforma-SLA.md` (SOW jornada + SLA suporte)
- `01-work/documentos-oficiais/04-contratos-fundamentais/04.05-contrato-fornecedores-avaliadores.md` + `04.06-contrato-intercompany.md` (fornecedores + intercompany liability)
- `01-work/documentos-oficiais/06-conformidade-LGPD/06.04-politica-seguranca-incidentes.md` + `06.05-notificacao-incidente-ANPD.md` (incidentes dados — SLA 72h)
- `01-work/documentos-oficiais/_controle/` (matriz responsabilidade com exposição residual — rascunho)

## Verification

- [ ] `ls 01-work/documentos-oficiais/04-contratos-fundamentais/04.01-MSA-acordo-quadro-cliente.md 01-work/documentos-oficiais/04-contratos-fundamentais/04.05-contrato-fornecedores-avaliadores.md 01-work/documentos-oficiais/06-conformidade-LGPD/06.04-politica-seguranca-incidentes.md && grep -c "responsabilidade\|liability\|indenização\|seguro" 01-work/documentos-oficiais/04-contratos-fundamentais/04.01-MSA-acordo-quadro-cliente.md | awk '{print ($1>=2)?"PASS matriz liability":"FAIL"}'`
- [ ] `grep -c "recomendações\|matching\|fornecedores\|incidentes.*dados\|alegações públicas" 01-work/documentos-oficiais/_controle/*.md 2>/dev/null | awk -F: '{s+=$2} END {print (s>=3)?"PASS 5 vetores":"CHECK "s}' && ls 01-work/documentos-oficiais/04-contratos-fundamentais/04.0*.md | wc -l | awk '{print ($1>=4)?"PASS minutas 4+":"FAIL"}'`
- [ ] `grep -c "hipotese\|revisado por advogado\|exposição residual" 01-work/documentos-oficiais/04-contratos-fundamentais/04.01-MSA-acordo-quadro-cliente.md | awk '{print ($1>=1)?"PASS rascunho não aprovado":"FAIL"}'`

## Dependências

- [[04-project-management/tarefas/P04-T02_Mapa_Governanca_Dados_Fluxo|P04-T02]] — controller/processor + base legal por fluxo (define quem responde por incidente dados)
- G04.4 (M04 — GOV-004) — `blocking: no` para piloto curadoria manual, `blocking: yes` para escala/comercialização até Jurídico+risco aprovarem exposição residual + `DEC-P04-T04.md` (ver `P04_Governanca_Confianca.md#6` G04.4)

## Registros

- [[00-project-control/registro-lacunas/lacunas/GOV-004]]
- `00-project-control/decisoes/DEC-P04-T04.md` (futura — Jurídico+risco aprovam exposição)

## Execução

- **Entregável produzido:** matriz 5 vetores + 6 minutas hipotese como insumo refining; exposição residual documentada.
- **Status:** `refining` — rascunho para Jurídico/risco; GOV-004 aberto até aprovação exposição residual.
- **Próximo:** nomear Jurídico, cotar seguro RC+cyber, validar caps liability com risco, assinar MSA piloto SEBRAE.
