---
title: 06 — Estimativa de Build por Tela — 96 telas
source: 09_Estimativa_96_Telas + 08_Premissas_Custos
tags: [hub, estimativa, build, horas, 96-telas]
---

# 06 — Estimativa de Build — 96 Telas

> Horas calculadas a partir de **complexidade × disciplina × drivers** (IA/Dados/Segurança/Mobile) + contingência 15% + gestão 12%. Tabela completa (28 cols) em `_data/09_Estimativa_96_Telas.csv`.

## Fórmula por Tela

```
horas_liquidas = Σ (horas_base[disciplina] × mult_complexidade × driver)
  driver_IA = 1 se Driver IA=Sim senão 0 (10h base)
  driver_Dados = 1 se Driver Dados=Sim (18h base)
  driver_Seg = 1 se Driver Seg=Sim (6h base)
  driver_Mobile = +25% Front se Driver Mobile=Sim
  reuso = ×0.55 se Componente compartilhado preenchido (ex: Perfil)
  custo_tela = Σ horas × rate[disciplina]
```

> Ver [[05_Premissas_CAPEX_OPEX#2-horas-base-e-rates-por-disciplina|rates]]: UX R$180 · Front R$220 · Back R$240 · Dados R$260 · IA R$320 · QA R$170 · DevOps R$260 · Seg R$320

---

## Resumo por Módulo — Horas e Custo

| Código | Módulo | Telas | Horas líquidas (Σ) | CAPEX incremental | Custo/hora médio | % Fase 2 |
|--------|--------|-------|--------------------|-------------------|------------------|----------|
| CORE | Core / Plataforma | 12 | 549.3 | R$ 160,722.26 | R$ 293/h | 2/12 |
| ED | Estratégia & Dados | 11 | 3,294.1 | R$ 970,690.59 | R$ 295/h | 2/11 |
| COL | Colaboradores / Meu Time | 11 | 2,021.2 | R$ 581,572.08 | R$ 288/h | 4/11 |
| CAN | Candidatos & Carreira | 13 | 2,982.2 | R$ 869,328.52 | R$ 292/h | 4/13 |
| FOR | Fornecedores & Negócios | 14 | 2,929.0 | R$ 847,878.92 | R$ 289/h | 4/14 |
| ACA | Acadêmico / Universidades | 12 | 2,546.5 | R$ 740,959.26 | R$ 291/h | 4/12 |
| EVT | Eventos | 14 | 3,251.8 | R$ 939,004.03 | R$ 289/h | 4/14 |
| COM | Comunidades | 9 | 1,734.2 | R$ 497,510.32 | R$ 287/h | 3/9 |

```chartsview
type: Bar
data:
  - modulo: ED
    horas: 3294
  - modulo: COL
    horas: 2021
  - modulo: CAN
    horas: 2982
  - modulo: FOR
    horas: 2928
  - modulo: ACA
    horas: 2546
  - modulo: EVT
    horas: 3251
  - modulo: COM
    horas: 1734
options:
  xField: "horas"
  yField: "modulo"
  colorField: "modulo"
  label:
    position: "right"
    formatter:
      function formatter(datum) { return datum.horas + 'h'; }
    offset: 6
    style:
      fill: "#333"
      fontSize: 11
  xAxis:
    title:
      text: "Horas líquidas"
```

> EVT (3.252h) e ED (3.294h) dominam esforço — ambos com 9-10 telas Alta/Muito alta + drivers de Dados/IA.

---

## Amostra — 15 primeiras telas (horas por disciplina)

| ID | Código | Tela | Fase | Complex. | Mult | Reuso | IA | Dados | UX h | Front h | Back h | Dados h | IA h | QA h | DevOps h | Seg h |
|----|--------|------|------|----------|------|-------|----|-------|------|---------|--------|---------|------|------|----------|-------|
| 1 | CORE | Login / SSO | MVP | Baixa | 0.7 | 0.8 | Não | Não | 14.3 | 31.2 | 40.4 | 6.4 | 1.0 | 13 | 5.2 | 7.0 |
| 2 | CORE | Cadastro / onboarding | MVP | Média | 1 | 0.8 | Não | Não | 22 | 60 | 62.1 | 9.9 | 1.5 | 22 | 8 | 10.8 |
| 3 | CORE | Perfis e organizações | MVP | Média | 1 | 0.8 | Não | Não | 22 | 48 | 62.1 | 9.9 | 1.5 | 20 | 8 | 10.8 |
| 4 | CORE | Papéis e permissões | MVP | Alta | 1.6 | 0.8 | Não | Não | 34.1 | 74.4 | 96.3 | 15.3 | 2.3 | 31 | 12.4 | 16.7 |
| 5 | CORE | Consentimentos / LGPD | MVP | Alta | 1.6 | 0.8 | Não | Não | 34.1 | 74.4 | 96.3 | 15.3 | 2.3 | 31 | 12.4 | 16.7 |
| 6 | CORE | Central de integrações | MVP | Alta | 1.6 | 0.8 | Não | Não | 34.1 | 74.4 | 96.3 | 15.3 | 2.3 | 31 | 12.4 | 16.7 |
| 7 | CORE | Notificações | MVP | Média | 1 | 0.8 | Não | Não | 22 | 60 | 62.1 | 9.9 | 1.5 | 22 | 8 | 10.8 |
| 8 | CORE | Mensagens | Fase 2 | Alta | 1.6 | 0.8 | Não | Não | 34.1 | 93 | 96.3 | 15.3 | 2.3 | 34.1 | 12.4 | 16.7 |
| 9 | CORE | Busca global | Fase 2 | Média | 1 | 0.8 | Não | Não | 22 | 48 | 62.1 | 9.9 | 1.5 | 20 | 8 | 10.8 |
| 10 | CORE | Analytics de uso | MVP | Média | 1 | 0.8 | Não | Sim | 22 | 48 | 62.1 | 28.8 | 1.5 | 20 | 9.2 | 10.8 |
| 11 | CORE | Administração | MVP | Alta | 1.6 | 0.8 | Não | Não | 34.1 | 74.4 | 96.3 | 15.3 | 2.3 | 31 | 12.4 | 16.7 |
| 12 | CORE | Auditoria e logs | MVP | Alta | 1.6 | 0.8 | Não | Não | 34.1 | 74.4 | 96.3 | 15.3 | 2.3 | 31 | 12.4 | 16.7 |
| 13 | ED | Visão executiva | MVP | Alta | 1.6 | 0 | Não | Sim | 34.1 | 74.4 | 83.7 | 44.6 | 2.3 | 31 | 14.3 | 6.5 |
| 14 | ED | Conectores de dados | MVP | Alta | 1.6 | 0 | Não | Sim | 34.1 | 74.4 | 83.7 | 44.6 | 2.3 | 31 | 14.3 | 6.5 |
| 15 | ED | Mapeamento de indicadores | MVP | Alta | 1.6 | 0 | Não | Sim | 34.1 | 74.4 | 83.7 | 44.6 | 2.3 | 31 | 14.3 | 6.5 |

> **Linhas 16-96** em `_data/09_Estimativa_96_Telas.csv` (abrir como Bases: filtrar por `Fase`, `Complexidade`, `Driver IA`).

---

## Drivers por Tela — onde está o custo

| Driver | Telas com Sim | Onde concentra |
|--------|---------------|----------------|
| IA/Matching | ~12 | ED (Análises, Cenários), CAN (Match, Inteligência vagas), FOR (Match), ACA (Match pesquisador) |
| Dados/BI | ~20 | ED (todas), CORE Analytics, EVT (Pesquisa, ROI, Indicadores) |
| Segurança | ~14 | CORE (todas), FOR (Documentos), EVT (Segurança/assédio) |
| Mobile | ~35 | CAN/COM/COL (perfis, jornadas) |

---

## Re-geração

```bash
# Re-gerar este pacote após editar o .xlsx
python3 _scripts/extract.py  # ou re-executar build_hub*.py em /tmp
```

## CSVs

- `_data/09_Estimativa_96_Telas.csv` — **fonte completa** (28 cols, 96 linhas) — Bases-ready
- Colunas: `ID | Código | Frente | Tela | Fase | Complexidade | Componente compartilhado | Reuso % | Driver IA | Driver Dados | Driver Segurança | Driver Mobile | Mult | UX h | Front h | Back h | Dados h | IA h | QA h | DevOps h | Seg h | ... + totais`

> [!warning] Não edite o CSV à mão — edite o `.xlsx` e re-gerar, ou versionar via script.
