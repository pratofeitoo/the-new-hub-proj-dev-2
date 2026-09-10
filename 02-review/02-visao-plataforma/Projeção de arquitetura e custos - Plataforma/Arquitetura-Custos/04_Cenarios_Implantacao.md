---
status: em-revisao
title: 04 — Cenários de Implantação Modular
source: 06_Cenarios_Implantacao
tags: [hub, cenarios, implantacao, comercial]
---

# 04 — Cenários de Implantação Modular

> Cada linha = um produto vendável. `✓` = módulo incluso. `Opcional` = soma valor mas não é pré-requisito.

| Cenário | CORE | ED | COL | CAN | FOR | ACA | EVT | COM | Leitura |
|---------|------|----|-----|-----|-----|-----|-----|-----|---------|
| Estratégia & Dados standalone | ✓ | ✓ | — | — | — | — | — | — | Dados do cliente entram por integrações; não exige marketplaces. |
| Gestão de pessoas completa | ✓ | ✓ | ✓ | — | — | — | — | — | ED + jornada interna. |
| Empregabilidade / Firjan | ✓ | — | — | ✓ | — | — | — | Opcional | Formação + candidatos + vagas; COM pode apoiar preparação. |
| Fornecedores / Sebrae-GINGA | ✓ | Opcional | — | — | ✓ | — | Opcional | — | Match B2B; ED mede impacto e EVT pode ativar GINGA. |
| Universidade / Mackenzie | ✓ | Opcional | — | ✓ | — | ✓ | Opcional | — | ACA standalone; CAN amplia carreira/estágio. |
| HUB Eventos | ✓ | Opcional | — | ✓ | ✓ | — | ✓ | Opcional | Orquestra talentos, fornecedores, pesquisa e ROI. |
| Ecossistema completo | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Máxima inteligência de rede, com consentimento e governança. |

---

## Guia comercial

| Se o cliente quer... | Venda | Módulos | CAPEX ref | OPEX ref |
|----------------------|-------|---------|-----------|----------|
| Só inteligência com dados existentes | **ED standalone** | CORE+ED | R$ 971k + rateio Core | R$ 23k/mês |
| Gestão de pessoas completa | **ED+COL** | CORE+ED+COL | R$ 1.55M | R$ 40.5k/mês |
| Empregabilidade (Firjan) | **CAN** | CORE+CAN (+COM opcional) | R$ 869k | R$ 21.6k/mês |
| Acesso a mercado B2B (Sebrae-GINGA) | **FOR** | CORE+FOR (+ED/EVT opcional) | R$ 848k | R$ 21.3k/mês |
| Universidade (Mackenzie) | **ACA** | CORE+ACA (+CAN opcional) | R$ 741k | R$ 19.8k/mês |
| Orquestrar evento | **HUB Eventos** | CORE+CAN+FOR+EVT | R$ 2.66M | R$ 65.4k/mês |
| Tudo | **Ecossistema completo** | Todos | R$ 5.61M | R$ 142k/mês* |

> *OPEX ecossistema = base R$ 142k — não é soma dos fully-loaded (que duplicam Core rateado). Ver [[05_Premissas_CAPEX_OPEX]].

### Checklist de implantação por cenário

> [!example] ED standalone
> - [ ] CORE (auth, LGPD, integrações RHIS/ERP/BI)
> - [ ] ED — 11 telas (Visão executiva → ROI)
> - [ ] Conectores de dados do cliente (sem marketplaces)
> - [ ] Treinamento executivo

> [!example] HUB Eventos
> - [ ] CORE + CAN (talentos) + FOR (fornecedores) + EVT (14 telas)
> - [ ] Pesquisa de público, acessibilidade, segurança/assédio
> - [ ] ROI/impacto financeiro + relatório pós-evento
> - [ ] Integração opcional ED para medir impacto

---

## Dependências (não-bloqueantes)

Todas as verticais são **standalone com Core**. EVT ganha valor com CAN/FOR, mas pode começar com base própria. COM nunca é pré-requisito B2B.
