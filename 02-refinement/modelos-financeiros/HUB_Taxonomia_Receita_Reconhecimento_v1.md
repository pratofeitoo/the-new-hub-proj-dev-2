---
title: Taxonomia de Receita e Reconhecimento v1
type: referencia-financeira
status: rascunho
tags:
  - hub
  - finanças
  - receita
  - blueprint
gap_ids:
  - FIN-002
related_notes:
  - "[[01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita]]"
  - "[[04-project-management/tarefas/P01-T03_Taxonomia_Receita]]"
  - "[[00-project-control/registro-lacunas/lacunas/FIN-002]]"
---

# Taxonomia de Receita e Reconhecimento v1

> [!warning] Uso controlado
> Exemplo de cenários para Blueprint. Não é política contábil, fiscal ou jurídica e não substitui a aprovação de Finanças em `FIN-002`.

> **Vocabulário financeiro congelado:** usar os estados **Potencial → Influenciado → Validado → Realizado**, ledger único, teto por população e haircut DAT-08 conforme [[02-refinement/modelos-financeiros/HUB_Glossario_Financeiro_Congelado_v1|Glossário Financeiro Congelado v1]]. `14_ROI` permanece zerado até baseline Monks.

## Regras de classificação

| ID | Camada | Categoria | Natureza | Reconhecimento conceitual | ARR? | Exemplo de cenário | Evidência mínima |
|---|---|---|---|---|---|---|---|
| REV-001 | primária | implementação | comercial | Identificar as obrigações de desempenho e reconhecer somente quando a obrigação correspondente for satisfeita ao longo do período ou em momento específico. Aceite ou marco são evidência apenas quando representarem essa satisfação | não | Diagnóstico C.A.O.S. com obrigação e critério de satisfação definidos | contrato, obrigação, critério, marco, aceite e custos |
| REV-002 | primária | mídia e experiências / projeto | comercial | Inventariar estratégia, produção, evento, mídia, medição e componentes de parceiros; reconhecer cada obrigação quando satisfeita conforme entrega efetiva e evidenciada | não | Evento inclusivo com entregáveis por fase | contrato, obrigações, critério de satisfação, entregáveis e evidência |
| REV-003 | secundária | acesso à Plataforma / licença de software | comercial | Distinguir acesso hospedado contínuo de direito de uso de software; analisar período de acesso e disponibilização da licença, alocando suporte, atualização, implementação e hospedagem por obrigação | sim, se recorrente | Acesso empresarial com período e limite de serviço definidos | contrato, obrigações, período, licença, serviço, suporte e métricas |
| REV-004 | secundária | assinatura ou serviço recorrente | comercial | Reconhecer conceitualmente conforme o serviço é disponibilizado durante o período contratado; início do serviço é o marco, não faturamento ou renovação | sim, se recorrente | Retainer de inteligência ou jornada gerenciada | contrato, início/fim do serviço, renovação contratada, denominador e evidência |
| REV-005 | expansão | marketplace / transação qualificada | comercial potencial; adiado | Documentar principal ou agente antes do reconhecimento; apresentação bruta ou líquida segue essa conclusão aprovada. Não presumir valor líquido apenas por haver repasse | não por padrão | Taxa de match, somente após controles e aprovação | transação, controle, responsabilidade, papel principal/agente, taxa, repasse e liquidação |
| REV-006 | secundária ou expansão | funding de impacto restrito | restrita; não comercial | Classificar inicialmente como entrada restrita; instrumento, entidade, elegibilidade, condições, período, reporte e eventual devolução determinam classificação e momento | nunca como ARR comercial | Subsídio, doação ou patrocínio restrito do Instituto | instrumento, condições, ledger separado, custos elegíveis, reporte e devolução |

## Campos para cada cenário de contrato

| Campo | Preenchimento esperado |
|---|---|
| `scenario_id` | Identificador único do cenário ou contrato |
| `offer` | Oferta vinculada à matriz de ofertas §2.1 do Blueprint |
| `contracting_entity` | Entidade que assina com o comprador; ainda a validar |
| `billing_entity` | Entidade que fatura e recebe; ainda a validar |
| `revenue_owner` | Unidade econômica responsável pela receita; não inferir de `A único` |
| `category` | `implementation`, `project`, `license`, `subscription`, `marketplace-deferred` ou `restricted-funding` |
| `obligation` | Entrega ou serviço que gera a contraprestação |
| `recognition_trigger` | Aceite, marco, período de serviço ou condição de funding |
| `arr_eligible` | `sim`, `não` ou `a validar` com justificativa |
| `restricted` | `sim` ou `não`; funding restrito nunca deve entrar em ARR comercial |
| `platform_cost_allocation` | Regra de rateio ou centro de custo; não deixar implícito |
| `intercompany_required` | `sim`, `não` ou `a validar`, com acordo necessário |
| `evidence` | Contrato, aceite, ledger, relatório ou evidência operacional |
| `gap_ids` | Gaps e decisões relacionados, no mínimo `FIN-002` quando aplicável |
| `contract_id` | Identificador do contrato e versão aplicável |
| `performance_obligation` | Obrigação de desempenho identificada e sua unidade responsável |
| `delivery_entity` | Entidade que entrega a obrigação; não inferir da unidade dona |
| `ledger_account` | Conta/ledger e dimensão de reporte fonte da verdade |
| `service_period_evidence` | Evidência de início, fim e prestação do serviço |
| `financial_review_status` | `pendente`, `condicional` ou `aprovado`, com responsável e data |
| `principal_agent_assessment` | Análise aplicável a marketplace ou repasses |
| `adjustments` | Cancelamentos, reembolsos, créditos, descontos e repasses |

## Cenários mínimos a validar

- Implementação + assinatura recorrente: separar setup, início do serviço e ARR.
- Contrato comercial usando infraestrutura compartilhada: separar unidade contratante, custos e serviço de plataforma.
- Programa com funding restrito e serviços comerciais: manter obrigações, ledger e reporte separados.
- Marketplace ou repasse de parceiro: validar principal/agente e reconhecer somente taxa própria, se aprovada.
- Atividade relacionada ao Selo: manter independência, conflitos e tratamento de receita sob governança própria.

**Status:** rascunho para validação nominal de Finanças; `FIN-002` permanece aberto.
