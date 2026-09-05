---
title: "HUB — Mapa de Documentos Não Obrigatórios mas Requeridos v1"
map_id: GOV-MAP-002
status: rascunho
layer: refinement
area: governance-legal
version: "1.0"
created: 2026-09-02
updated: 2026-09-02
base_legal_data: 2026-09-02
jurisdicao: Brasil - prática de mercado + legislação de referência em 2026-09-02
blueprint_ref: "[[01-work/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico]]"
map_obrigatorio_ref: "[[01-work/documentos-oficiais/_controle/HUB_Mapa_Documentos_Oficiais_v1]]"
gap_ids: [GOV-001, GOV-004, GOV-005, GOV-006, GOV-008, GOV-009, STR-001, STR-002, STR-003, FIN-002, GTM-001]
tarefas_ref: [P04-T01, P04-T03, P06-T02, P06-T04]
tags: [governanca, nao-obrigatorio, empresa, escala, brasil-2026]
---

# HUB — Mapa de Documentos Não Obrigatórios mas Requeridos v1

> [!warning] Natureza
> **Não são exigidos por Junta/Receita/Prefeitura para existir.** São exigidos por **banco, investidor, cliente enterprise, auditor e time** para operar como empresa. Sem eles você existe no CNPJ, mas não escala, não capta e não contrata sem risco. Base de referência 2026-09-02: Marco Legal das Startups (LC 182/21), Código Civil, CLT, LGPD, CPC 47/IFRS 15.

> [!important] Dependência
> Este mapa **estende** o `HUB_Mapa_Documentos_Oficiais_v1.md` (GOV-MAP-001, pastas `01-08`). Ele ocupa as pastas `09-14` do vault isolado `HUB_Documentos_Oficiais`. Enquanto `GOV-001` não fechar (quantos CNPJs), mantenha `entidade_dona` como hipótese.

## Como usar

- **Prioridade:** `AGORA` = antes do CNPJ | `0-6M` = empresa operando | `6-18M` = captação/escala. Preencha `Status`: `hipotese → em_elaboracao → aprovado → em_uso`.
- **Regra:** só promova para `03-approved/` ou para o vault isolado quando houver dono e evidência. Não confunda com documentos obrigatórios (`01-08`).
- **Pergunta-gatilho para cada linha:** *Quem vai pedir isso a seguir?* Se for banco/investidor/cliente enterprise/primeiro CLT — a linha vira `requerido`.

---

## 09. Governança Corporativa — exigido no primeiro R$ fora dos founders

| # | Documento | Natureza | Entidade dona (hipótese) | Gatilho — quando vira requerido | Prioridade | Status | Gap ID |
|---|---|---|---|---|---|---|---|
| 09.01 | Cap Table + Vesting/Cliff Schedule | Governança | Marca HUB (grupo) | Antes de conversar com investidor/banco | AGORA | hipotese | GOV-001, STR-001 |
| 09.02 | Acordo de Sócios Completo (decisão, diluição, saída, deadlock) | Contratual | Marca HUB | Antes de integralizar capital / SAFE/mútuo conversível (LC 182/21) | AGORA | hipotese | GOV-001, GOV-004 |
| 09.03 | Board/Advisory Charter + Regimento de Decisão | Governança | Grupo HUB | Ao criar conselho/advisors ou rodada | 0-6M | hipotese | GOV-008 |
| 09.04 | Registro de Decisões + Matriz de Alçadas (quem assina/gasta o quê) | Governança | Cada CNPJ | Ao ter 2+ decisores ou conta bancária com limite | 0-6M | hipotese | GOV-008 |
| 09.05 | Código de Conduta + Política de Conflito de Interesses | Governança | Instituto HUB (e grupo) | Ao receber funding restrito ou ter Selo | 0-6M | hipotese | GOV-003, FIN-002 |
| 09.06 | Política de Partes Relacionadas / Intercompany | Governança | Grupo (se +1 CNPJ) | Se houver compartilhamento de custo/receita | 0-6M | hipotese | GOV-001, FIN-002 |

## 10. Financeiro & Estratégia — exigido para banco, contador e investidor

| # | Documento | Natureza | Entidade | Gatilho | Prioridade | Status | Gap ID |
|---|---|---|---|---|---|---|---|
| 10.01 | Business Plan / Strategic Memo 12-18 meses | Estratégia | Grupo HUB | Antes de captar ou pedir crédito | AGORA | hipotese | STR-002, STR-003 |
| 10.02 | Modelo Financeiro 3 demonstrativos (DRE/BP/DFC) + cenários | Financeiro | HUB Negócios (+ Instituto separado) | Antes de valuation/budget | AGORA | hipotese | FIN-002 |
| 10.03 | Orçamento Anual + Forecast + Fluxo de Caixa 13 semanas | Financeiro | Cada CNPJ | Ao operar (mês 1) | 0-6M | hipotese | FIN-002 |
| 10.04 | Manual de Políticas Contábeis (CPC 47 - reconhecimento por obrigação) | Financeiro | HUB Negócios / Instituto | Antes de reconhecer 1 real (ARR vs implementação vs restrito) | 0-6M | hipotese | FIN-002, BP-001 §3.1 |
| 10.05 | Valuation Memo + Captação (SAFE/mútuo, termos) | Financeiro | Marca HUB | Na rodada | 6-18M | hipotese | FIN-002 |
| 10.06 | Controles Internos + Trilha de Auditoria financeira | Financeiro | Cada CNPJ | Ao ter auditor ou 5+ pessoas com acesso a dinheiro | 6-18M | hipotese | GOV-005 |

## 11. Pessoas & Cultura — exigido no hire #1

| # | Documento | Natureza | Entidade | Gatilho | Prioridade | Status | Gap ID |
|---|---|---|---|---|---|---|---|
| 11.01 | Organograma + RACI + Job Descriptions | Operacional | Cada CNPJ | Hire #1 | AGORA | hipotese | GOV-008 |
| 11.02 | Handbook do Colaborador (Regimento Interno) | Pessoas | Cada CNPJ empregador | CLT exige com 20+, mas precisa com 3 | 0-6M | hipotese | GOV-008 |
| 11.03 | Política de Remuneração + Plano de Equity/ESOP | Pessoas | Marca HUB | Antes de prometer equity | 0-6M | hipotese | GOV-001, GOV-004 |
| 11.04 | NDA + Cessão de PI (empregado/contratado) — assina ANTES de acessar C.A.O.S./código | Contratual | Cada CNPJ | Antes de dar acesso | AGORA | hipotese | GOV-006 |
| 11.05 | Onboarding/Offboarding + Política de Desligamento | Pessoas | Cada CNPJ | A partir de 3 pessoas | 0-6M | hipotese | GOV-008 |
| 11.06 | Código de Cultura / Princípios | Cultura | Grupo HUB | Quando time >5 | 6-18M | hipotese | STR-001 |

## 12. Comercial & GTM — exigido no cliente #1

| # | Documento | Natureza | Entidade | Gatilho | Prioridade | Status | Gap ID |
|---|---|---|---|---|---|---|---|
| 12.01 | Política de Preço & Packaging (por oferta/BP-001 §2.1) | Comercial | HUB Negócios | Antes de proposta #1 | AGORA | hipotese | STR-002, FIN-002 |
| 12.02 | Sales Playbook + Contract Playbook (como vender vs o que está no MSA) | Comercial | HUB Negócios | Cliente #1 | 0-6M | hipotese | GTM-001 |
| 12.03 | Brand Guidelines + Claim Registry (o que pode dizer publicamente) | Marca | Marca HUB | Antes de publicar deck/site/Selo | 0-6M | hipotese | GOV-005, GOV-006 |
| 12.04 | Política de Parcerias + Limite de Concentração | Comercial | HUB Negócios | Parceiro #1 | 0-6M | hipotese | STR-003, GTM-001 |
| 12.05 | Pipeline/Category Pipeline + Critérios de Tração (hipótese vs tração) | Comercial | HUB Negócios | Ao reportar pipeline | 0-6M | hipotese | GTM-002 |

## 13. Operações & Processos — exigido quando entrega

| # | Documento | Natureza | Entidade | Gatilho | Prioridade | Status | Gap ID |
|---|---|---|---|---|---|---|---|
| 13.01 | SOPs dos fluxos C.A.O.S. (diagnóstico→arquitetura→operação→sustentação) | Operacional | HUB Negócios | Primeira entrega | 0-6M | hipotese | BP-005 |
| 13.02 | Matriz de Riscos + Plano de Continuidade (BCP) | Operacional | Grupo HUB | Cliente enterprise pede | 6-18M | hipotese | GOV-005 |
| 13.03 | Gestão de Fornecedores + SLA de parceiros | Operacional | HUB Negócios | Fornecedor crítico #1 | 0-6M | hipotese | GOV-004 |
| 13.04 | Política de Compras + Reembolso | Operacional | Cada CNPJ | Time >3 | 0-6M | hipotese | FIN-002 |

## 14. Tecnologia & Produto — exigido quando Plataforma liga

| # | Documento | Natureza | Entidade | Gatilho | Prioridade | Status | Gap ID |
|---|---|---|---|---|---|---|---|
| 14.01 | Arquitetura Técnica + Diagrama de Dados + Dicionário | Técnico | Plataforma HUB | Antes de provisionar tenant | 0-6M | hipotese | BP-004, DAT-* |
| 14.02 | Política de Segurança da Informação + Controle de Acesso (IAM) | Técnico | Plataforma HUB | Cliente enterprise pede | 0-6M | hipotese | GOV-002, GOV-005 |
| 14.03 | Model Cards + Limiares de Fairness/Explicabilidade | Técnico | Plataforma HUB | Antes de ligar modelo/recomendação | 0-6M | hipotese | GOV-009 |
| 14.04 | Plano de Backup + Disaster Recovery (DRP) + Teste de Restauração | Técnico | Plataforma HUB | Ao ir para produção | 6-18M | hipotese | GOV-005, GOV-007 |
| 14.05 | Roadmap de Produto + Critérios de Release/Gate | Produto | Plataforma HUB | Release #1 | 0-6M | hipotese | BP-002, P05 |

---

## Checklist de preenchimento

- [ ] Para cada linha `AGORA`, atribuir dono e data-alvo em `P04-T01/P06-T02`
- [ ] NDA/PI (11.04) e Cap Table (09.01) antes de qualquer conversa externa
- [ ] Manual contábil (10.04) validado com contador antes de faturar — separa ARR de implementação e de funding restrito
- [ ] Claim Registry (12.03) validado antes de publicar deck/site — evita Selo como certificação

## Próximos artefatos a derivar

| Artefato | Onde criar | Depende de |
|---|---|---|
| Cap Table v0.1 + Vesting | `09-governanca-corporativa/` | 09.01 + decisão GOV-001 |
| Modelo Financeiro 3D + cenários | `10-financeiro-estrategico/` | 10.02 + FIN-002 |
| Handbook v0.1 + NDA/PI | `11-pessoas-cultura/` | 11.02 + 11.04 + GOV-006 |
| Claim Registry v0.1 | `12-comercial-GTM/` | 12.03 + GOV-005 |

---

## Histórico

- 2026-09-02 v1 — 27 linhas não-obrigatórias mapeadas (09.01-14.05) como extensão do GOV-MAP-001. Pendente validação com jurídico/financeiro/RH.

> Onde esta nota vive: `01-work/documentos-oficiais/_controle/HUB_Mapa_Documentos_Nao_Obrigatorios_v1.md` — refinamento, não evidência aprovada.
