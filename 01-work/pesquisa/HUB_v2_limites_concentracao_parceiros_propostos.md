---
title: "Limites de concentração de parceiros — hipóteses propostas"
date: 2026-08-27
status: em-elaboracao
language: pt-BR
owner: "Governança (a designar)"
source_tasks:
  - "[[04-project-management/tarefas/P01-T06_Limites_Concentracao_Parceiros|P01-T06]]"
dependencies:
  - "[[04-project-management/tarefas/P01-T02_Matriz_Oferta_Comprador_Capacidade|P01-T02]]"
gap_ids:
  - "[[00-project-control/registro-lacunas/lacunas/GTM-006|GTM-006]]"
related_notes:
  - "[[01-work/pesquisa/segundo-rascunho-projeto/HUB_v2_gtm_partnerships_research|Pesquisa de GTM e parcerias]]"
  - "[[01-work/pesquisa/segundo-rascunho-projeto/HUB_v2_governance_legal_research|Pesquisa de governança e dados]]"
tags:
  - governance
  - parceiros
  - concentração
  - fase-P01
---

# Limites de concentração de parceiros — hipóteses propostas

## 1. Escopo e estado de aprovação

Este documento transforma [[00-project-control/registro-lacunas/lacunas/GTM-006|GTM-006]] em uma proposta mensurável para revisão. **Todos os números abaixo são thresholds propostos/hipóteses controladas; não são política aprovada, compromisso comercial ou evidência de tração.** A aprovação de Governança é o critério de aceite de [[04-project-management/tarefas/P01-T06_Limites_Concentracao_Parceiros|P01-T06]]. Até essa aprovação, não assumir exclusividade, previsão dependente de um parceiro ou capacidade dedicada.

**Estado:** em revisão por Governança; proprietário provisório: Governança (a designar); versão 0.1; revisão prevista após o primeiro piloto e antes de qualquer expansão de canal.

## 2. Definições de medição

- **Parceiro:** organização que origina, distribui, financia, implementa ou fornece acesso a uma coorte; registrar atribuição primária e secundária sem dupla contagem.
- **Janela:** receita e pipeline usam os últimos 12 meses móveis; roadmap, capacidade, dados e reputação usam o trimestre corrente, salvo indicação diferente.
- **Concentração:** `exposição atribuída ao parceiro / exposição total comparável`.
- **Warning:** alerta preventivo; manter operação com plano de redução e revisão do owner.
- **Critical:** limite de decisão; congelar aumento de exposição e escalar para Governança.
- Quando o denominador for menor que **3 parceiros ativos** ou houver menos de **2 períodos** observáveis, marcar a métrica como `baixa confiança`, não inferir segurança e aplicar o fallback conservador de não escalar.

## 3. Matriz de thresholds propostos

| Dimensão | Métrica e denominador | Warning (hipótese) | Critical (hipótese) | Escalonamento e fallback | Cadência / owner / evidência |
|---|---|---:|---:|---|---|
| Receita | Receita reconhecida atribuída a um parceiro ÷ receita reconhecida total no período | > **25%** | > **40%** | Warning: plano de diversificação em **30 dias** e revisão de margem/contrato. Critical: congelar expansão desse parceiro, reforecast sem sua expansão e submeter exceção à Governança em **10 dias úteis**. Fallback: limitar novas vendas a outros canais até voltar a ≤25%. | Mensal e fechamento trimestral / Finanças + Direção / razão, faturas, contratos e relatório de atribuição. |
| Roadmap | Pontos de capacidade de produto comprometidos com requisitos, integrações ou customizações de um parceiro ÷ pontos comprometidos totais do trimestre | > **20%** | > **30%** | Warning: reclassificar item como configuração reutilizável e exigir brief de valor para outros clientes. Critical: pausar novo trabalho específico; só retomar com decisão de Governança e cofinanciamento/replicabilidade documentados. Fallback: retirar item do roadmap e operar com núcleo padrão. | Quinzenal durante descoberta/piloto e revisão mensal / Produto / roadmap versionado, tickets, estimativas e decisões de mudança. |
| Capacidade | Horas de entrega e suporte reservadas para um parceiro ÷ horas disponíveis da equipe no período | > **25%** | > **40%** | Warning: plano de staffing e teto de horas em **2 semanas**. Critical: não aceitar volume/coorte adicional, acionar capacidade alternativa e revisar SLA. Fallback: reduzir escopo/coorte para caber na capacidade não dedicada; nenhuma contratação irreversível sem aprovação. | Quinzenal no piloto e mensal fora dele / Ecossistemas e Sucesso + Operações / timesheets, agenda, SLA e registro de incidentes. |
| Dados | Registros identificáveis ou eventos de dados pessoais de um ecossistema de parceiro ÷ total equivalente processado na operação | > **30%** | > **50%** | Warning: revisão de minimização, finalidade, acesso e isolamento em **10 dias úteis**. Critical: suspender coleta/integração adicional desse parceiro, preservar evidência necessária e acionar privacidade/jurídico. Fallback: usar somente dados agregados/desidentificados ou interromper o fluxo até autorização documentada. | Mensal e a cada mudança de escopo / Produto-Dados + Privacidade/Jurídico / mapa de fluxo, logs de acesso, permissões, retenção e registro de incidentes. |
| Reputação | Menções públicas, alegações, selos, estudos de caso ou co-branding que dependam de um parceiro ÷ total de ativos públicos equivalentes no período | > **25%** | > **40%** | Warning: revisão de marca e comprovação escrita em **10 dias úteis**. Critical: retirar/pausar ativo não comprovado e comunicar correção; Governança decide qualquer restauração. Fallback: comunicação neutra sem endosso, logo ou alegação de parceria até haver permissão e evidência. | Mensal e antes de cada publicação / Marca + Governança independente do Selo / inventário de ativos, permissões, aprovações e reclamações. |

> **Nota de interpretação:** as faixas 25%/40%, 20%/30%, 25%/40%, 30%/50% e 25%/40% são pontos de partida para teste, não benchmarks normativos. Governança deve ratificar, ajustar ou rejeitar cada faixa com base em evidência do piloto, economia, riscos jurídicos e capacidade real.

## 4. Regras transversais de escalonamento

1. O owner registra cada cruzamento no registro de riscos, identifica causa, parceiro afetado, período, evidência e plano de retorno ao warning em até **5 dias úteis**.
2. Um cruzamento **critical** em duas dimensões, ou em dados/reputação isoladamente, bloqueia expansão do canal até decisão documentada de Governança.
3. Os cálculos devem ser reproduzíveis; alterações de atribuição, denominador ou janela exigem versionamento e justificativa.
4. Nenhum plano de mitigação pode tratar presença em evento, logotipo, entusiasmo verbal ou conversa como receita, tração ou evidência de parceiro; ver [[01-work/pesquisa/segundo-rascunho-projeto/HUB_v2_gtm_partnerships_research|pesquisa de GTM e parcerias]].
5. O relatório trimestral deve recomendar manter, melhorar, escalar, pausar ou parar a rota; a recomendação não substitui a aprovação formal.

## 5. Exceções e governança

Exceção temporária somente para piloto explicitamente delimitado, com prazo máximo proposto de **90 dias**, escopo, motivo, dimensão afetada, controles compensatórios, owner, evidência e data de expiração. Exceções não autorizam exclusividade, alteração unilateral do método, compartilhamento padrão entre ecossistemas ou uso promocional sem permissão escrita. A autoridade para aprovar/rejeitar exceções é **Governança (a designar)**, com parecer de Finanças para receita/capacidade, Produto para roadmap, Privacidade/Jurídico para dados e instância independente do Selo para reputação. Toda exceção deve ser revisada no encerramento do piloto.

**Aprovação:** `pendente — Governança ainda não aprovou os limites, cadências, owners ou exceções.`

## 6. Próximos testes e rastreabilidade

- Calcular a linha de base no primeiro piloto usando os artefatos de [[04-project-management/tarefas/P01-T02_Matriz_Oferta_Comprador_Capacidade|P01-T02]], sem transformar hipóteses de capacidade em fatos.
- Anexar ao pacote de decisão de Governança os cinco cálculos, fontes e cenários sem o parceiro dominante.
- Atualizar esta proposta após pelo menos **2 ciclos mensais** e uma revisão trimestral; qualquer alteração deve manter histórico da versão anterior.
- Manter [[00-project-control/registro-lacunas/lacunas/GTM-006|GTM-006]] aberto até haver responsável aceito, evidência rastreável e aprovação formal.
