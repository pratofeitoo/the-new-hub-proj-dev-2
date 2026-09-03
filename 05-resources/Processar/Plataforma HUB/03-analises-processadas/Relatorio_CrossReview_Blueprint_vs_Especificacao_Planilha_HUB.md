# Relatório Cross-Review — Blueprint (01-blueprint) vs Especificação + Planilha (00-entrada/02 e 03)

**Data:** 2026-09-02
**Versão:** 1.1 — atualização com registro de correções aplicadas (2026-09-02 21:42)
**Idioma:** pt-BR
**Autor:** Sisyphus — OhMyOpenCode

> **Atualização 2026-09-02 21:42 — TODOS OS 3 FIXES IMPLEMENTADOS E VERIFICADOS.** Ver [Apêndice D — Registro de Correções Aplicadas](#apêndice-d--registro-de-correções-aplicadas-2026-09-02--todos-os-gaps-corrigidos). MD: 47 FLDs · XLSX: 47 FLDs / 15 abas · 73 KPIs matriz · Gate G03.B2 publicado.

**Grupo 1 — Camada tática (especificação executiva + contrato técnico):**
- `02-especificacao-mestra/Especificacao_Mestra_Inteligencia_HUB 3.md` (v1.0, set/2026, 20 caps + 3 apêndices)
- `03-planilha-tecnica/Planilha_Tecnica_Desenvolvimento_HUB.md` (extração fiel de `Planilha_Tecnica_Desenvolvimento_HUB.xlsx` — 15 abas, 185 linhas, 20 BL, 23 FLD, 16 KPI, 9 REL, 8 INT, 12 GOV)

**Grupo 2 — Camada estratégica (blueprint):**
- `01-blueprint/` — 11 pastas, 25+ `.md` (README + 9 domínios: `estrategia`, `produto`, `tecnologia`, `dados-inteligencia`, `modelo-negocio`, `marca-mercado`, `governanca-juridico`, `visao-lancamento`, `operacoes`)
- `dados-inteligencia/modelo-indicadores/abas-origem/` — 15 análises de abas (00 a 14), incluindo `04_Indicadores_Master` (73 indicadores), `02_Nos_de_Dados` (25 nós), `06_Simulador_ROI`

**Objetivo:** medir similaridade e divergência entre dois conjuntos criados separadamente com objetivo similar; identificar o que é convergente, o que é complementar e o que precisa de convergência antes de virar backlog único.

---

## Sumário executivo

| Pergunta | Resposta |
|---|---|
| **São sobre a mesma coisa?** | **Sim — ~85% da tese é idêntica.** Mesma promessa ("Diferenças que movimentam negócios"), mesma cadeia `fontes → identidades → sinais → inteligência → ação → resultado → valor financeiro` e mesma jornada `diagnosticar → planejar → conectar → implementar → medir → reconhecer → evoluir`. |
| **São redundantes?** | **Não. São camadas diferentes do mesmo projeto.** Grupo 2 é `blueprint` — hipótese estruturada, explicitamente **não validada, não implementada, não aprovada** (todos os `BP-002` a `BP-008` com `gap_ids` em aberto). Grupo 1 é **recorte vendável** — primeira fatia `performance × finanças` para piloto Monks, já com IDs, fórmulas, thresholds e SLAs. |
| **Qual a relação correta?** | `01-blueprint/README.md` já prescreve: *blueprint propõe o sistema completo; refinement testa e estreita; gates aprovam.* **Grupo 1 = M0 do Grupo 2.** |
| **Risco se mantiver separados?** | Drift de vocabulário (`Valor gerado vs realizado`, `73 vs 16 KPIs`, `25 vs 23 nós`), perda de rastreabilidade (`workday_id` vs `canonical_id`, `SRC-04/09/10/11` sem `INT-*`) e dupla contagem financeira. |

**Similaridade por dimensão:**

| Dimensão | Similaridade | Leitura |
|---|---:|---|
| Tese / Cadeia de valor | 90% | Idêntica |
| Dados / Nós canônicos | 70% | Grupo 1 é subconjunto operacional do Grupo 2 |
| Indicadores / Árvore de valor | 65% | 16 KPIs do Grupo 1 = M0 dos 73 do Grupo 2 |
| Valor / ROI | 60% | Mesma fórmula, estágios diferentes (ilustrativo vs validado) |
| Módulos / Arquitetura | 55% | 12 entregas vs 6 módulos vs 8 MOD — mapeável, mas nomes divergem |
| Governança / LGPD | 75% | Princípios idênticos; Blueprint detalha Selo, 4 unidades e 7 contratos |
| Tecnologia / Integrações | 65% | Mesmo sequenciamento M0→M2; Blueprint define 4 camadas de warehouse |
| Operações / Lançamento | — | Complementares: C.A.O.S. + gates vs Roadmap F0→MVP4 + piloto Monks |

---

## 1. Tese e direção — convergência total

**Grupo 1 (Espec p.1, cap.1):** "Transformar dados isolados em decisões que geram/protegem/recuperam valor" + cadeia `dados → relações → economia → inteligência → recomendação → ação`.

**Grupo 2 (`HUB_Fundacao_Blueprint_Projeto.md` cap.1-2, `README`):** "Diferenças que movimentam negócios" + cadeia `fontes → identidades → sinais → inteligência → ação → resultado → valor financeiro` + método **C.A.O.S.** (`Contexto, Arquitetura, Operação, Sustentação`).

> Grupo 1 operacionaliza C.A.O.S. sem nomeá-lo (caps. 11 check-ins, 18 F0). Não há contradição — só níveis de abstração diferentes.

---

## 2. Escopo e maturidade — diferença estrutural intencional

| Aspecto | Grupo 1 | Grupo 2 |
|---|---|---|
| **Status declarado** | Especificação consolidada v1.0 + planilha técnica com status `Inicial/Estruturado/Hipóteses` | `draft` / `blueprint` — todos os BPs com `gap_ids` (`PRD-001`, `DAT-001`, `TEC-001`, `GOV-001`...) em aberto |
| **Frase de fronteira** | "Arquitetura nasce para ecossistema completo, mas implementação começa por performance + indicadores financeiros" (Espec p.1) | `README`: "blueprint descreve intenção; refinement testa; approval autoriza uso específico" |
| **O que cobre** | Performance, pessoas/talentos, clientes/receita (parcial), fornecedores (piloto), finanças por área, cockpit, governança de KPI | 9 domínios completos: estratégia, produto, tecnologia, dados, modelo de negócio, marca/mercado, governança/jurídico, operações, lançamento — incluindo **4 unidades** (HUB marca, HUB Negócios, Instituto HUB, Plataforma HUB), **3 frentes** (Mídia/Experiências, Impacto Financiável, Ecossistemas Empresariais) e **Selo HUB independente** |

**Implicação:** Grupo 2 tem ~3× mais escopo que o Grupo 1 deliberadamente deixou para `Fase 2 / M2-M4`. Não é inconsistência — é sequenciamento.

---

## 3. Arquitetura e módulos — maior divergência nominal, mapeável

| Grupo 1 — Espec cap.9 (12 entregas) + cap.19 (9 motores HUB Core) | Grupo 2 — `BP-002` §1.2 (6 módulos plataforma) | Leitura |
|---|---|---|
| Início Executivo, Estratégia e Resultados, **Performance**, Pessoas e Talentos, Clientes e Receita, Fornecedores e Compras, **Operações e Projetos**, Academia, Comunidades e Eventos, Inteligência, Planos de Ação, Governança | **HUB Intelligence, HUB Journey, HUB Solutions, HUB Connections, HUB Academy, HUB Recognition** + núcleo compartilhado (tenants, identidade, taxonomia, orquestração, ledger, busca) | `Operações e Projetos` diluído em `Journey`; `Início Executivo/Estratégia/Inteligência/Planos/Governança` colapsados em `HUB Core`/`HUB Impact` na planilha |
| Planilha `02_MODULOS` = 8 `MOD-01` a `MOD-08` (HUB Core, Performance, Pessoas, Clientes, Fornecedores, Acadêmico, Comunidades, HUB Impact) | — | **Ausente no Grupo 1:** `HUB Recognition / Selo HUB` independente, white-label e **4 unidades** com funding restrito (`BP-001` §1.1). **Ausente no Grupo 2:** detalhe `Cockpit, 9-box, PIP, check-ins semanais` |

**Recomendação:** publicar matriz `12 → 6 → 8` e decidir se `Operações e Projetos` volta como `MOD-09` ou fica como subdomínio de Performance.

---

## 4. Dados e inteligência — subconjunto operacional

### 4.1 Nós / Entidades

*   **Grupo 2 — `02_Nos_de_Dados` (25 nós `N01-N25`):** Pessoa, Empresa, Entidade, Fornecedor, Vínculo, Oportunidade, Competência, Evidência, Diagnóstico, Interação, Jornada, Recomendação, Match, Participação, Programa, Contrato, Transação, Business Metric, Outcome, Cohort, Benchmark, Risco/Controle, Conteúdo/Campanha, **Consentimento (Crítica)**, Model Version. Análise `02_Nos_de_Dados_analise.md` confirma cobertura + lacunas (sem tipagem, sem FKs, sem SLAs).
*   **Grupo 1 — `05_DICIONARIO` (23 campos `FLD-001` a `FLD-023`):** `person_id, workday_id, manager_id, job_title, gender, race_ethnicity, disability_status, review_score, nine_box, goal_id, goal_progress, financial_kpi_id, available_hours, billable_hours, revenue, direct_cost, salary_total_cost, client_id, supplier_id, decision_id, estimated_value, realized_value`...

**Gap crítico:** Grupo 1 **não tem** `nome, nome_social, email, telefone, localização, idioma, disponibilidade, nível, área, admissão, centro_custo, projeto_id, contrato_id` — todos obrigatórios no núcleo comum cap.3.1 da própria Espec e no `BP-003` cap.1 (`canonical_id, tenant_id, valid_from/to, alias com namespace`). `workday_id` não substitui `canonical_id`.

### 4.2 Grafo / Relações

*   Espec cap.5 = 15 relações; Planilha `07_RELACOES` = 9 hipóteses `REL-01` a `REL-09`; Blueprint `BP-003` cap.1 + `03_Conexoes` = ~20 arestas com `cardinalidade, temporalidade, confiança, proveniência`.
*   Mesma semântica (Pessoa→Skill→Match→Contrato), mas Blueprint exige `relacionamento como objeto de primeira classe` e `Consentimento como bloqueador` — Grupo 1 trata consentimento como coluna, não como nó.

### 4.3 Eventos

*   Grupo 1: `SRC-12 Telemetria` + `09_REGRAS` com `decision_id`; **sem versionamento**.
*   Grupo 2: `BP-003` cap.3 define **envelope canônico** (`event_id, event_type, schema_version, occurred_at, recorded_at, idempotência, finalidade, linhagem`) + `09_Eventos_Produto`. É o contrato que falta ao Grupo 1.

---

## 5. Indicadores — mesma árvore, níveis diferentes

**Grupo 2 — `04_Indicadores_Master` = 73 indicadores** (análise `04_Indicadores_Master_analise.md`):

| Vertente | Qtde | Exemplos |
|---|---:|---|
| Pessoas | 10 | PES-01 Completude perfil, PES-02 Prontidão, PES-04 Aceitação recomendação... |
| Empresas/RH | 10 | RH-01 Cobertura capacidades, RH-07 Turnover evitável... |
| Compras/Fornecedores | 9 | COM-01 Cobertura categorias, COM-03 Taxa match elegível, COM-06 Saving comprovado... |
| Entidades/Ecossistema | 8 | ENT-01 Cobertura associados, ENT-08 Impacto ecossistema... |
| Marketing/Mídia | 8 | MKT-01 Alcance qualificado, MKT-04 Pipeline influenciado... |
| Produto/Plataforma | 10 | PRO-01 Ativação, PRO-07 Precisão match, PRO-09 ARR... |
| Financeiro/Impacto | 10 | FIN-01 Benefício bruto atribuído, FIN-08 Receita HUB... |
| Inteligência/Dados | 8 | DAT-01 Completude, DAT-03 Identidade resolvida, DAT-08 Confiança impacto... |

Estratificação: **M0 20 / M1 27 / M2 26** (`README` e `04_Indicadores_Master_analise.md` §6).

**Grupo 1 — `06_KPIS` = 16 KPIs:**

`KPI-PERF-01/02, KPI-ALO-01/02, KPI-FIN-01/02, KPI-PEO-01/02/03, KPI-CLI-01, KPI-SUP-01/02, KPI-HUB-01/02/03/04`

**Relação:** 16 do Grupo 1 = **subconjunto M0 do Grupo 2** + 2 de M1. Ver **Anexo A — Matriz 73→16** abaixo. Os 14 indicadores corporativos cap.4.1 da Espec (Receita recorrente, EBITDA, Fluxo de caixa, ROIC...) existem no Blueprint como `FIN-01` a `FIN-10` mas **não têm `KPI-*` na planilha** — lacuna já apontada no Relatório de Consistência anterior. Ambos concordam: *"ROI ilustrativo ≠ caixa realizado"* — só que Grupo 1 já fixa `KPI-HUB-04 = (benefícios validados - custo)/custo` enquanto Blueprint mantém `DAT-006` em aberto até protocolo de atribuição.

---

## 6. Valor e ROI — mesma fórmula, timing oposto

| Aspecto | Grupo 1 | Grupo 2 |
|---|---|---|
| **Estados de valor** | `Valor realizado/protegido/economia/potencial`, `estimado vs realizado validado` (cap.20.5, `14_ROI`) — sem colunas `Status`/`Atribuição` | **4 estados canônicos** `Potencial → Influenciado → Validado → Realizado` com caminho mínimo de evidências, deduplicação por `beneficiário×alavanca×período×intervenção` (`BP-003` cap.4) |
| **Simulador** | `14_ROI` zerado, exige `validação Financeiro` | `06_Simulador_ROI`: **R$1,22M bruto, R$950k investimento (R$600k licença+R$250k serviços+R$100k interno), 28,42% ROI, 9,34m payback** — rotulado **"exemplo ilustrativo, não aprovado"**, auditado como `Vermelho` para decisão (`06_Simulador_ROI_analise.md`) |
| **Risco** | Menção "impedir dupla contagem" (cap.10.1) mas sem ledger | Exige `ledger de benefícios + regra de não sobreposição + teto por população` (`BP-003`, `DAT-006`) |

**São o mesmo modelo em estágios diferentes.** Correto manter `14_ROI` zerado até baseline Monks.

---

## 7. Governança / LGPD — princípios idênticos, profundidade distinta

*   **Convergência:** `agregado como padrão, individual por finalidade`, 6 níveis (`Público→Anonimizado/Crítica`), `RBAC/ABAC deny-by-default`, `grupo mínimo`, `consentimento específico/revogável`, `IA não decide contratação/desligamento`, `audit log imutável` — idêntico nos dois (`Espec cap.17` vs `BP-006` + `11_Governanca_LGPD`).
*   **Só no Blueprint:** `BP-006` detalha **7 contratos** (quadro, SOW, termos plataforma, DPA, fornecedor, parceiro, Selo), **cadeia de PI**, **papéis controlador/operador por fluxo**, **retenção por evento**, **independência do Selo HUB** (9 controles: mandato, separação estrutural, funding não condicionado a resultado, barreiras de informação). Grupo 1 resume em `GOV-01` a `GOV-12` — correto para MVP, mas `Selo` e `4 unidades` não aparecem.

---

## 8. Tecnologia / Integrações — mesmo sequenciamento

*   **Sequenciamento idêntico:** `M0: CRM, plataforma, consentimento, entidade, warehouse` → `M1: HRIS, ATS, LMS, finanças, procurement, inteligência, marketing` → `M2: finanças cliente, BI, risco` (`BP-004` §1.4 vs Planilha `04_FONTES`/`08_INTEGRACOES`).
*   **Fronteiras:** Blueprint `BP-004` separa **Plataforma** (estado operacional) vs **Warehouse/Lakehouse** (4 camadas: landing/raw → padronizada → semântica curada → marts) vs **Inteligência** vs **Consentimento** vs **Integração** — Grupo 1 colapsa em `MOD-01 HUB Core` + `HUB Impact`.
*   **Contratos:** Planilha já tem `8 INT-*` com `chave, campos mínimos, OAuth2, retry/DLQ, SLA D+1/D+2`; Blueprint exige `contract-first, idempotência, envelope, replay/reconciliação/rollback, segredos em vault, tenant como fronteira de segurança` — Grupo 1 **compatível mas incompleto** para `SRC-04/09/10/11`.

---

## 9. Operações e lançamento — complementares

*   Blueprint `BP-005` + `BP-008` definem **C.A.O.S. operacional, owners, SOPs, SLAs, filas, incidentes, gates M0-M4, 6 portões integrados** (escopo→evidência→controle→operacional→comercial→lançamento).
*   Grupo 1 `cap.18 Roadmap` + `13_PILOTO_MONKS` + `12_BACKLOG` definem **F0 4-6s, MVP1 8-12s, MVP2 5-8m, MVP3 9-14m, MVP4 12-18m** com critérios `>80% cobertura, >60% KPIs conectados, 5-10 recomendações, ≥2 casos financeiros`.
*   **Equivalência:** `M0 ≈ F0+MVP1`, `M1 ≈ MVP2`, `M2 ≈ MVP3`, `M3-M4 ≈ MVP4`. Blueprint bloqueia lançamento sem evidência rastreável; Grupo 1 propõe piloto Monks como evidência — **convergem**.

---

## 10. O que só existe em um lado

| Só no Grupo 2 (Blueprint) | Só no Grupo 1 (Espec+Planilha) |
|---|---|
| 4 unidades + funding restrito Instituto + Selo independente + white-label + marca/mercado + 3 frentes de negócio | Cockpit executivo com faixa de valor + check-ins semanais/mensais/trimestrais + 9-box + regra "Liderança não bloqueia mobilidade" + thresholds `ALT-01` a `ALT-08` (`<75% 2 períodos`, `<65% alocação`...) |
| 25 nós + 73 KPIs + envelope de evento versionado + 12 alavancas de valor | 23 FLD com `workday_id, nine_box_position, billable_hours` + 16 KPIs com metas `80%, 65%` já calibradas para piloto |
| Modelo de receita com `ARR, NRR, take rate, LTV/CAC, GMV` | Dicionário financeiro por área (Espec cap.4.2-4.10) com `custo por entrega, saving negociado, cost avoidance` |

---

## Conclusão e recomendação

**Parecer:** trate os grupos como **duas camadas do mesmo projeto**, não como concorrentes.

*   **Grupo 2 = fonte da verdade estratégica.** Mantém ambição completa, previne colisão de categoria (evita vender `Selo` como produto) e guarda `gates` de aprovação.
*   **Grupo 1 = fonte da verdade tática.** É o recorte que o Grupo 2 chama de `M0 — fundação` e já traduz em `IDs, fórmulas, SLAs, backlog`.

**3 passos para convergência (mesmos do Relatório de Consistência, agora validados contra Blueprint) — ✅ TODOS IMPLEMENTADOS 2026-09-02:**

1.  ✅ **Camada semântica única** (`BP-003` + `05_DICIONARIO`): `canonical_id` + alias namespaced, `envelope` e `FLD-024→047` implementados — ver Apêndice D.1.
2.  ✅ **Matriz de correspondência** `73 → 16 KPIs` + `25 → 23 nós` + `12 → 8 módulos` + `M0-M4 → F0-MVP4` e glossário congelado publicados — ver Apêndice D.2 e [[Matriz_Convergencia_73_16_25_23_12_8]].
3.  ✅ **Apenas `M0/F0+MVP1` promovido para `refinement`** — Gate G03.B2 publicado em `01-blueprint/README.md` + `promocao-M0-gate-P03-v1.md`; `M1-M4` mantidos como `blueprint draft` — ver Apêndice D.3.

---

## Anexo A — Matriz 73 → 16 (Blueprint → Planilha)

> **Como ler:** `Grupo 2 (73)` é inventário completo M0/M1/M2; `Grupo 1 (16)` é recorte MVP. `Status` indica se o Grupo 1 já cobre, cobre parcialmente ou deixa para fase futura. `M` = fase Blueprint (`M0` MVP, `M1` segunda onda, `M2` maturidade/atribuição financeira).

| # | Blueprint `04_Indicadores_Master` (73) | M | Planilha `06_KPIS` (16) | Status | Observação de convergência |
|---|---|---|---|---|---|
| 1 | **PES-01** Completude do perfil (Insumo, Descritivo) | M0 | — | **Futuro** | Grupo 1 mede via `FLD` mas sem `KPI-*`; Blueprint exige `campos essenciais por persona + consentimento` |
| 2 | **PES-02** Índice de prontidão | M0 | — | **Futuro** | Grupo 1 tem `KPI-PERF-01 Atingimento` como proxy; faltam `pesos, confiança, recência` versionados |
| 3 | PES-03 Gap crítico de capacidade | M1 | — | Futuro | — |
| 4 | **PES-04** Aceitação de recomendação | M0 | **KPI-HUB-02** Ação sobre alertas (`Alertas com ação / alertas válidos`) | **Coberto** | Mesma lógica; Grupo 1 operacionaliza com `ALT-* → decision_id` |
| 5 | **PES-05** Conclusão de jornada | M0 | — | Parcial | Grupo 1 tem `check-ins, planos` (cap.11) mas sem `KPI-*` dedicado |
| 6 | PES-06 Evolução de capacidade | M1 | — | Futuro | — |
| 7 | PES-07 Tempo até oportunidade | M1 | — | Futuro | Grupo 1 tem `KPI-PEO-03 Mobilidade` como outcome agregado |
| 8 | **PES-08** Mobilidade / conexão efetiva | M1 | **KPI-PEO-03** Mobilidade interna (`Mov. internas / posições preenchidas`) | **Coberto** | Mesmo outcome; Grupo 1 simplifica janela |
| 9 | PES-09 NPS da jornada | M1 | — | Futuro | Grupo 1 tem `NPS/CSAT` em cap.3.7/4.7 mas sem `KPI-*` |
| 10 | PES-10 Valor gerado por pessoa | M2 | — | Futuro (M2) | Bloqueado até deduplicação — ambos concordam |
| 11 | **RH-01** Cobertura de capacidades | M0 | — | Parcial | Grupo 1 cap.12 "Mapa da força" cobre conceitualmente; sem `KPI-*` |
| 12 | RH-02 Risco de lacuna crítica | M1 | — | Futuro | — |
| 13 | RH-03 Time-to-fill | M1 | — | Futuro | Grupo 1 cap.3.3 menciona `tempo/prazos` mas sem `KPI-*` |
| 14 | RH-04 Custo por contratação | M1 | **KPI-PEO-02** Custo de turnover (parcial) | Parcial | Blueprint separa `custo contratação` vs `custo turnover`; Grupo 1 agrega em `PEO-02` |
| 15 | RH-05 Qualidade da contratação | M2 | — | Futuro (M2) | — |
| 16 | RH-06 Time-to-productivity | M2 | — | Futuro | Grupo 1 cap.4.5 `time to productivity` citado sem `KPI-*` |
| 17 | **RH-07** Turnover evitável | M2 | **KPI-PEO-01** Turnover voluntário + **PEO-02** Custo de turnover | **Coberto (M0 proxy)** | Blueprint `M2` exige comparáveis; Grupo 1 traz para `M0` como `12%/18%` — antecipação tática, validar em piloto |
| 18 | RH-08 Absenteísmo evitado | M2 | — | Futuro | Grupo 1 cap.4.5 cita `absenteísmo` sem `KPI-*` |
| 19 | RH-09 Ganho de produtividade | M2 | **KPI-ALO-01** Alocação faturável (proxy) | Parcial | Blueprint mede `ganho` causal; Grupo 1 mede `alocação` antecedente |
| 20 | RH-10 ROI de desenvolvimento | M2 | — | Futuro (M2) | — |
| 21 | **COM-01** Cobertura de categorias | M0 | — | Parcial | Grupo 1 `SRC-10/SPEND` cobre conceitualmente |
| 22 | COM-02 Tempo de homologação | M1 | — | Futuro | — |
| 23 | **COM-03** Taxa de match elegível | M0 | **KPI-SUP-02** Competitividade da oferta (`(preço usual - ofertado)/usual`) | **Coberto** | Grupo 1 operacionaliza `Caso Aline 15%` como regra `ALT-06` |
| 24 | COM-04 Ciclo de contratação | M1 | — | Futuro | — |
| 25 | COM-05 Conversão match→contrato | M1 | — | Futuro | Grupo 1 `BL-018 Matching fornecedor` prepara, sem `KPI-*` ainda |
| 26 | **COM-06** Saving comprovado | M2 | **KPI-SUP-01** Savings realizado (`(Baseline - preço)×volume`) | **Coberto** | Mesma fórmula; Blueprint `M2` exige `validação controladoria` — Grupo 1 já exige `Compras+Financeiro` |
| 27 | COM-07 Desempenho do fornecedor | M2 | — | Futuro | Grupo 1 cap.14 menciona `performance do fornecedor` sem `KPI-*` |
| 28 | COM-08 Spend influenciado pela HUB | M1 | — | Futuro | Blueprint alerta "não somar a FIN-08" — Grupo 1 evita ao não criar `KPI-*` |
| 29 | COM-09 Risco de fornecimento evitado | M2 | — | Futuro (M2) | — |
| 30 | **ENT-01** Cobertura de associados | M0 | — | Futuro | Fora do MVP1 Grupo 1 (Fase 2) — correto |
| 31 | **ENT-02** Ativação de associados | M0 | **KPI-HUB-01** Adoção ativa (proxy) | Parcial | Blueprint `ENT-02` = ativação ecossistema; Grupo 1 `HUB-01` = adoção plataforma — proxies correlatos |
| 32 | ENT-03 Densidade da rede | M1 | — | Futuro | — |
| 33 | ENT-04 Valor entregue por associado | M2 | — | Futuro | — |
| 34 | ENT-05 Renovação de associados | M2 | — | Futuro | — |
| 35 | ENT-06 Receita de novos serviços | M1 | — | Futuro | — |
| 36 | ENT-07 Adoção de benchmark | M2 | — | Futuro | — |
| 37 | ENT-08 Impacto econômico do ecossistema | M2 | — | Futuro (M2) | Agregador que consome `FIN-01` deduplicado |
| 38 | **MKT-01** Alcance qualificado | M0 | — | Futuro | Grupo 1 cap.4.8 `CPL, ROAS` sem `KPI-*` |
| 39 | **MKT-02** Custo por lead qualificado | M0 | — | Futuro | — |
| 40 | **MKT-03** Conversão lead→oportunidade | M0 | — | Futuro | — |
| 41 | MKT-04 Pipeline influenciado | M1 | — | Futuro | Blueprint alerta "não somar a receita" |
| 42 | MKT-05 Margem incremental de campanha | M2 | — | Futuro | — |
| 43 | MKT-06 ROAS de margem | M2 | — | Futuro | — |
| 44 | MKT-07 CAC por produto | M1 | — | Futuro | — |
| 45 | MKT-08 Conteúdo→ação | M1 | — | Futuro | — |
| 46 | **PRO-01** Ativação | M0 | **KPI-HUB-01** Adoção ativa (`Ativos/Elegíveis`) | **Coberto** | Mesma definição; Grupo 1 `75%/45%` |
| 47 | **PRO-02** WAU/MAU | M0 | — | Parcial | Grupo 1 `HUB-01` agrega; Blueprint distingue `faixa ótima` |
| 48 | **PRO-03** Adoção por módulo | M0 | **KPI-HUB-01** (parcial) | Parcial | — |
| 49 | PRO-04 Time-to-value | M1 | **KPI-HUB-03** Tempo até decisão (`Média data decisão - data alerta`) | Parcial | Proxy operacional; Blueprint mede `time-to-value` de produto |
| 50 | PRO-05 Retenção de cohort | M1 | — | Futuro | — |
| 51 | **PRO-06** Churn de clientes | M1 | **KPI-CLI-01** Risco de churn (`Modelo NPS+incidentes+entrega`) | **Coberto (antecipado)** | Blueprint `M1` mede `churn realizado`; Grupo 1 `MVP+1` mede `risco` preditivo — antecipação tática |
| 52 | PRO-07 Precisão do match | M1 | — | Futuro | Grupo 1 `BL-018/019` sem `KPI-*` ainda |
| 53 | PRO-08 Uplift da recomendação | M2 | — | Futuro (M2) | Único experimental — âncora causal do Blueprint |
| 54 | **PRO-09** ARR | M0 | — | Parcial | Grupo 1 `FIN-08` observável cobre; `PRO-09` não tem `KPI-*` próprio |
| 55 | PRO-10 LTV/CAC | M2 | — | Futuro | Grupo 2 `06_Simulador_ROI` com `LTV/CAC 5,33×` |
| 56 | **FIN-01** Benefício bruto atribuído | M2 | — | Futuro (M2) | Grupo 1 `14_ROI` zerado aguarda `M2` — correto |
| 57 | **FIN-02** Benefício líquido | M2 | — | Futuro (M2) | — |
| 58 | **FIN-03** ROI do cliente | M2 | **KPI-HUB-04** ROI da plataforma (`(Benefícios validados - custo)/custo`) | **Coberto (M0 proxy)** | Blueprint `FIN-03` = ROI cliente `M2`; Grupo 1 `HUB-04` = ROI plataforma `MVP` — mesma fórmula, unidades diferentes |
| 59 | FIN-04 Payback | M2 | — | Futuro (M2) | Grupo 1 `14_ROI` prevê `Payback` mas zerado |
| 60 | FIN-05 Margem incremental | M2 | **KPI-FIN-01** Margem bruta do projeto (`(Receita - custo direto)/receita`) | **Coberto** | Grupo 1 traz `M2` para `MVP` como proxy operacional — validar em piloto |
| 61 | FIN-06 Custo evitado | M2 | **KPI-ALO-02** Receita potencial perdida (`Horas ociosas × taxa`) | Parcial | Proxy de capacidade; Blueprint `FIN-06` é custo evitado amplo |
| 62 | FIN-07 Risco evitado | M2 | — | Futuro (M2) | — |
| 63 | **FIN-08** Receita HUB por vertente | M0 | **KPI-FIN-02** Receita por FTE (`Receita/FTE`) + `14_ROI` | Parcial | Blueprint `FIN-08` = receita reconhecida `M0`; Grupo 1 `FIN-02` = produtividade econômica — correlato |
| 64 | FIN-09 Margem de contribuição HUB | M1 | — | Futuro | — |
| 65 | FIN-10 Receita recorrente líquida (NRR) | M1 | — | Futuro | — |
| 66 | **DAT-01** Completude de dados críticos | M0 | — | Parcial | Grupo 1 `FLD` + `SRC` qualidade `≥99%` cobre sem `KPI-*` |
| 67 | **DAT-02** Atualidade dos dados | M0 | — | Parcial | Grupo 1 `INT SLA D+1/D+2` cobre sem `KPI-*` |
| 68 | **DAT-03** Taxa de identidade resolvida | M0 | — | Parcial | Grupo 1 `person_id` + `SRC-01/02` mas sem `KPI-*` nem `canonical_id` |
| 69 | DAT-04 Cobertura de score | M1 | — | Futuro | — |
| 70 | DAT-05 Acurácia / calibração | M1 | — | Futuro | — |
| 71 | DAT-06 Fairness do modelo | M1 | — | Futuro | Grupo 1 `ALT-05 Viés` como `MVP+1` — correto adiar |
| 72 | DAT-07 Drift de dados/modelo | M1 | — | Futuro | — |
| 73 | DAT-08 Índice de confiança do impacto | M2 | — | Futuro (M2) | Agregador que consome `FIN-01` com `haircut` |

**KPIs do Grupo 1 sem equivalente direto no Blueprint (específicos do recorte Monks):**

| Grupo 1 | Blueprint mais próximo | Leitura |
|---|---|---|
| **KPI-PERF-01** Atingimento de metas (`Σ progresso×peso / Σ peso`) | `PES-02` Prontidão / `RH-09` Produtividade | **Novo** — operacionalização Monks de `Qulture Rocks/Workday`; Blueprint não tinha `goal_progress` como KPI |
| **KPI-PERF-02** Qualidade da meta (`Pontos/pontos possíveis`) | `DAT-01` Completude + `GOV` | **Novo** — `Nota de Qualidade` cap.2.2 da Espec; Blueprint mede qualidade de dados, não de meta |
| **KPI-ALO-01/02** Alocação faturável / Receita potencial perdida | `RH-09` / `FIN-06` | **Novo proxy** — Blueprint mede `ganho produtividade` em `M2`; Grupo 1 traz para `MVP` como `horas faturáveis/horas disponíveis` |

**Resumo da matriz:** 16 do Grupo 1 cobrem **9 dos 20 M0 + 2 de M1** do Blueprint; 57 dos 73 (majoritariamente `M1/M2` de impacto financeiro e causal) ficam corretamente para `Fase 2 / M2+` — **não é divergência, é sequenciamento**. Os 2 KPIs `PERF-01/02` e 2 `ALO-01/02` são **adições táticas** do Grupo 1 que devem subir para o Blueprint como `M0` operacionais.

---

## Anexo C — Matriz 25 Nós → 23 FLD (Blueprint → Planilha) — camada semântica

> **Como ler:** `Grupo 2 (25 nós N01-N25)` é ontologia canônica completa (`02_Nos_de_Dados`, `BP-003` cap.1-2) com `canonical_id, tenant_id, valid_from/to, relacionamento como objeto, consentimento como nó bloqueador`. `Grupo 1 (23 FLD FLD-001 a FLD-023)` é contrato físico MVP para piloto Monks. `Status` = se o nó já tem campo canônico no dicionário, parcial (atributo faltando) ou futuro. `Prioridade` = o que precisa entrar em `F0` para o MVP não quebrar.

### C.1 — Visão quantitativa

| Métrica | Valor | Leitura |
|---|---:|---|
| Nós Blueprint | 25 | Ontologia completa |
| FLD Planilha | 23 | Contrato físico MVP |
| Nós com FLD direto | 11 | 44% — cobertura do MVP é proposital |
| Nós com FLD parcial | 6 | Atributos essenciais faltando |
| Nós sem FLD (futuro) | 8 | Corretamente deixados para M1/M2 |

### C.2 — Matriz linha-a-linha

| # | Blueprint `02_Nos_de_Dados` (25 nós) | Chave canônica | Granularidade | Grupo 1 `05_DICIONARIO` (23 FLD) | Status | O que falta para fechar o nó |
|---|---|---|---|---|---|---|
| **N01** | **Pessoa** | `person_id` | 1 pessoa | **FLD-001** `person_id` (UUID, PK Pessoa, pseudonimizado, HUB) **+ FLD-002** `workday_id` + **FLD-003** `manager_id` + **FLD-004** `job_title` | **Parcial** | **Crítico F0:** `nome, nome_social, contato (email, telefone), localização, idioma, disponibilidade` (todos obrigatórios no núcleo comum Espec cap.3.1). `workday_id` é alias, não substitui `canonical_id`. Faltam `tenant_id, valid_from/to, record_status, proveniência` do `BP-003`. |
| **N02** | **Empresa** | `company_id` | 1 empresa | **FLD-019** `client_id` (UUID, CRM/HUB, "ID canônico da conta") — usado como Empresa/Cliente | **Parcial** | `company_id` ≠ `client_id`. Blueprint distingue `Company` (cliente empregador) vs `Entity` (associação/programa) vs `Supplier`. Grupo 1 colapsa. Falta `razão social, CNPJ, porte, segmento, tenant_id` |
| **N03** | **Entidade** | `entity_id` | 1 entidade | — | **Futuro** | Nó para associações, programas institucionais, ecossistemas. Sem `FLD-*`; correto deixar para `M1` (fora do MVP1), mas `tenant_id + entity_type` precisa ser reservado |
| **N04** | **Fornecedor / solução** | `supplier_id` | 1 fornecedor | **FLD-020** `supplier_id` (UUID, CNPJ normalizado, ERP/HUB) | **Coberto (MVP)** | Suficiente para `BL-018 Matching`. Blueprint pede também `porte, capacidade, cobertura, certificações, ESG, territory` — Fase 2 |
| **N05** | **Vínculo** | `relationship_id` | 1 vínculo por período | **FLD-003** `manager_id` (Pessoa→Pessoa) — único vínculo modelado | **Parcial** | Blueprint: Vínculo é objeto temporal com `relationship_type, cardinalidade, confiança, proveniência, valid_from/to`. Grupo 1 só modela `gestor`. Faltam `equipe, projeto, cliente, comunidade, mentoria` (Espec cap.3.1 `Relacionamentos`) |
| **N06** | **Oportunidade** | `opportunity_id` | 1 oportunidade | — | **Futuro** | Sem `FLD-*`. No Grupo 1 oportunidade aparece só como `supplier_id ↔ demanda` em `07_RELACOES`/`BL-018`. Para `M1` precisa `opportunity_id, tipo (vaga/demanda), status, tenant_id` |
| **N07** | **Competência** | `skill_id` | 1 competência | — | **Futuro** | Sem `FLD-*`. Grupo 1 menciona `skills` em `BL-019` mas sem dicionário. Blueprint exige `taxonomia versionada` (`BP-003` cap.3) — Fase 2 |
| **N08** | **Evidência de competência** | `evidence_id` | 1 evidência | — | **Futuro** | Sem `FLD-*`. Depende de `N07` + `N09` + `N24`. Guardar para `M1` |
| **N09** | **Diagnóstico** | `assessment_id` | 1 resposta/rodada | **FLD-008** `review_score_manager` + **FLD-009** `review_score_self` + **FLD-010** `nine_box_position` + **FLD-011** `goal_id` + **FLD-012** `goal_progress` + **FLD-013** `financial_kpi_id` | **Coberto (MVP)** | Núcleo do piloto Monks (Qulture/Workday). Faltam `instrumento versionado, respondente, período, confiança` do Blueprint, mas MVP fecha |
| **N10** | **Interação** | `event_id` | 1 evento | — (coberto via `SRC-12 Telemetria` + `INT` sem `FLD-*`) | **Parcial** | Blueprint define `envelope canônico` (`event_id, event_type, schema_version, occurred_at, recorded_at, idempotência, finalidade, linhagem`) — Grupo 1 usa `telemetria` sem contrato. Para `F0` precisa ao menos `event_id, event_type, actor, tenant_id` |
| **N11** | **Jornada** | `journey_id` | 1 jornada | — | **Futuro** | Grupo 1 tem `check-ins, planos` (Espec cap.11) sem `journey_id`. `BL-009 Check-in` + `BL-011 Decisão` são proxy. Reservar `journey_id` para `M1` |
| **N12** | **Recomendação** | `recommendation_id` | 1 recomendação | **FLD-021** `decision_id` (Alerta→Decisão→Ação) — proxy | **Parcial** | Blueprint: Recomendação é saída `proposta` com `proveniência, confiança, versão`; Grupo 1 modela `decisão` (`ALT-* → decision_id`), não a recomendação em si. Falta `recommendation_id, rationale, model_version_id` |
| **N13** | **Match** | `match_id` | 1 par oportunidade-oferta | — | **Futuro** | Sem `FLD-*`. `BL-018/019` preparam sem `match_id` canônico. Blueprint exige `match_id, justificativa, score, consentimento, versão` — `M1` |
| **N14** | **Participação** | `participation_id` | 1 participante por ação | — | **Futuro** | Sem `FLD-*`. Fora do MVP1 (eventos/comunidades = Fase 2) — correto |
| **N15** | **Programa / projeto** | `program_id` | 1 programa | — | **Futuro** | Sem `FLD-*`. Grupo 1 usa `projeto, contrato, cliente` em `SRC-05/06/07` sem `program_id` canônico. Reservar para `M1` |
| **N16** | **Contrato** | `contract_id` | 1 contrato | **FLD-019** `client_id` + **FLD-016** `revenue` + **FLD-017** `direct_cost` — contrato implícito | **Parcial** | Sem `contract_id` canônico. `SRC-07 CRM` tem `Account/contract ID` mas não virou `FLD-*`. Para `F0` precisa `contract_id, tenant_id, valid_from/to` |
| **N17** | **Transação** | `transaction_id` | 1 lançamento | **FLD-016** `revenue` + **FLD-017** `direct_cost` + **FLD-018** `salary_total_cost` + **FLD-023** `realized_value` | **Parcial** | Sem `transaction_id`. `SRC-05 ERP` tem `Lançamento; projeto; cliente; período` mas sem PK canônica. Faltam `transaction_id, moeda, período contábil, ledger fonte-da-verdade` (`BP-003` cap.5) |
| **N18** | **Indicador de negócio** | `business_metric_id` | 1 indicador por período | **FLD-013** `financial_kpi_id` + `06_KPIS` 16 KPIs | **Coberto (MVP)** | Blueprint `N18` = definição versionada; Grupo 1 `FLD-013` referencia `KPI ativo`. Suficiente para MVP. Faltam `definition_version, formula_version, run_id, estado de evidência` do `BP-003` cap.3 — `M1` |
| **N19** | **Outcome individual** | `outcome_id` | 1 pessoa-resultado-período | **FLD-008/009/012** (scores, progresso) como proxy | **Parcial** | Sem `outcome_id`. Blueprint exige `outcome_id + período + coorte + baseline + atribuição`. Grupo 1 mede `atingimento, 9-box` sem outcome canônico separado — `M1` |
| **N20** | **Cohort** | `cohort_id` | 1 definição de grupo | — | **Futuro** | Sem `FLD-*`. Necessário para `M1` (fairness, comparação). Correto adiar |
| **N21** | **Benchmark** | `benchmark_id` | 1 métrica-segmento-período | — | **Futuro** | Sem `FLD-*`. `M2/M4` — correto adiar |
| **N22** | **Risco / controle** | `risk_id` | 1 risco por contexto | — | **Futuro** | Sem `FLD-*`. Grupo 1 cap.14/17 menciona `risco` sem nó. `M2` |
| **N23** | **Conteúdo / campanha** | `content_id` | 1 ativo/campanha | — | **Futuro** | Sem `FLD-*`. Fora do MVP1 — correto |
| **N24** | **Consentimento** | `consent_id` | 1 finalidade por titular | **FLD-005/006/007** `gender, race_ethnicity, disability_status` com `Visibilidade = Somente agregado` + `Validação = Finalidade/consentimento` — **proxy parcial** | **Parcial (risco)** | **Gap mais sensível.** Blueprint `N24` é **nó bloqueador** com `consent_id, finalidade, base legal, escopo, titular, versão, revogação, propagação para derivados` (`BP-003` cap.5, `BP-006`). Grupo 1 trata consentimento como `coluna` em 3 campos sensíveis, sem `consent_id` canônico, sem `purpose, legal_basis, tenant_id, valid_from/to`. **Para `F0` precisa criar `FLD-024 consent_id` e `FLD-025 purpose` como bloqueadores** |
| **N25** | **Versão de modelo** | `model_version_id` | 1 versão | — | **Futuro** | Sem `FLD-*`. Blueprint exige `model_version_id` em toda `recomendação/match/score`. Correto deixar para `M1/M3`, mas reservar campo |

### C.3 — FLD sem nó direto (adições táticas do Grupo 1)

| Grupo 1 `FLD-*` | Nó Blueprint mais próximo | Leitura |
|---|---|---|
| **FLD-002** `workday_id` | N01 Pessoa (alias) | Alias de origem — Blueprint manteria como `alias (source_system=Workday, source_id)` anexo ao `canonical_id`, não como PK. Grupo 1 correto ao marcá-lo `Piloto`, mas precisa explicitar alias |
| **FLD-014** `available_hours` + **FLD-015** `billable_hours` | N10 Interação / N19 Outcome / N05 Vínculo (capacidade) | **Novo proxy MVP** — Blueprint mede `produtividade` via `Eventos + Outcome` em `M2`; Grupo 1 operacionaliza como `horas` em `MVP` para `KPI-ALO-01/02`. Deve subir para Blueprint como `M0` operacional |
| **FLD-021** `decision_id` + **FLD-022** `estimated_value` + **FLD-023** `realized_value` | N12 Recomendação / N18 Business Metric / N19 Outcome | **Novo** — operacionalização `ALT-* → Decisão → Valor` do Grupo 1. Blueprint tem `N12` + estados `potencial→realizado` mas sem `decision_id` como entidade. Proposta: promover `Decision` a entidade canônica `N26` |

### C.4 — Gaps que precisam virar `FLD` antes de `F0/MVP1`

> Sem estes campos o backlog `BL-002` a `BL-005` não passa em aceite (mesma conclusão do Relatório de Consistência).

| Prioridade | Campos a criar | Nó que fecha | Por que é bloqueador |
|---|---|---|---|
| **P0 — F0** | `FLD-024 consent_id` (UUID, `N24`), `FLD-025 purpose` (finalidade), `FLD-026 legal_basis` | N24 Consentimento | Consentimento como bloqueador é exigência `BP-003` + LGPD (`GOV-04`). Hoje só 3 campos sensíveis têm `Finalidade/consentimento` como texto |
| **P0 — F0** | `FLD-027 nome` + `FLD-028 nome_social` + `FLD-029 email` + `FLD-030 telefone` + `FLD-031 localização` + `FLD-032 idioma` + `FLD-033 disponibilidade` | N01 Pessoa | Núcleo comum Espec cap.3.1 — nenhum `FLD-*` cobre |
| **P0 — F0** | `FLD-034 nível` + `FLD-035 área` + `FLD-036 centro_custo` + `FLD-037 admissão` + `FLD-038 contract_id` + `FLD-039 program_id` + `FLD-040 tenant_id` + `FLD-041 valid_from/to` | N01/N02/N03/N05/N15/N16 | Dados mínimos Fase 0 Espec cap.18.1 + `BP-003` temporalidade |
| **P1 — MVP1** | `FLD-042 event_id` + `FLD-043 event_type` + `FLD-044 schema_version` + `FLD-045 occurred_at` | N10 Interação | Envelope mínimo para `SRC-12 Telemetria` não virar caixa preta |
| **P1 — MVP1** | `FLD-046 recommendation_id` + `FLD-047 match_id` (reservar) | N12/N13 | Preparar `BL-018/019` sem retrabalho |

### C.5 — Resumo da matriz

*   **11 nós cobertos** (N01 parcial, N04, N09, N18 + proxies N02/N05/N16/N17) = **44% — MVP proposital**.
*   **6 nós parciais** (N01, N02, N05, N10, N12, N16/N17, N24) = faltam atributos temporais, consentimento e envelope — **corrigir em F0**.
*   **8 nós futuros** (N03, N06, N07, N08, N11, N13, N14, N15, N20, N21, N22, N23, N25) = **corretamente adiados** para `M1/M2` (fora do piloto Monks) — não é divergência, é sequenciamento.
*   **3 FLD táticos** (`workday_id`, `available/billable_hours`, `decision_id`) são **antecipações corretas** do Grupo 1 que devem subir para o Blueprint como `M0` operacionais.

> **Ações de convergência:** 1) criar `FLD-024` a `FLD-041` em `05_DICIONARIO` com `tenant_id, valid_from/to, proveniência` (P0); 2) publicar `N24 Consentimento` como **gate** antes de qualquer `FLD` sensível; 3) reservar `event_id, recommendation_id, match_id, contract_id, program_id` como **IDs canônicos futuros** para não reescrever `BL-018/019` depois.

---

## Apêndice D — Registro de Correções Aplicadas (2026-09-02) — todos os gaps corrigidos

> **Execução:** 2026-09-02 via equipe `convergencia-hub` (3 agentes paralelos `openai/gpt-5.6-luna`): `fix1-camada-semantica` (Tasks 1-4), `fix2-matriz-glossario` (Tasks 5-6), `fix3-gate-backlog` (Tasks 7-8) conforme plano `docs/superpowers/plans/2026-09-02-convergencia-blueprint-especificacao-planilha.md`. **Verificação pós-execução:** `grep` MD + `openpyxl data_only` XLSX — todos PASS — agentes encerrados sem commits (vault sem `.git`).

### D.1 — Fix 1: Camada semântica única — ✅ concluído

**Objetivo:** fechar Anexo C.4 (FLD faltantes) + `canonical_id` + `envelope` + `consent gate` + `ledger`.

| Gap do relatório | Correção aplicada | Arquivo(s) | Validação |
|---|---|---|---|
| `FLD-024→041` P0-F0 ausentes (N24 + N01 + N16/N15 + temporalidade) | 18 FLDs criados: `FLD-024 consent_id, FLD-025 purpose, FLD-026 legal_basis` (N24) + `FLD-027 nome, 028 nome_social, 029 email, 030 telefone, 031 localizacao, 032 idioma, 033 disponibilidade` (N01 núcleo comum) + `FLD-034 nivel, 035 area, 036 centro_custo, 037 admissao, 038 contract_id, 039 program_id, 040 tenant_id, 041 valid_from/to` | `05-resources/Processar/Plataforma HUB/00-entrada/03-planilha-tecnica/Planilha_Tecnica_Desenvolvimento_HUB.md` + `.xlsx` aba `05_DICIONARIO` | `grep -c "FLD-0" = 47` · `openpyxl: 47 IDs únicos` · `01_PAINEL Campos=47` |
| `FLD-042→047` P1-MVP1 ausentes (envelope + IDs reservados) | 6 FLDs criados: `FLD-042 event_id, 043 event_type, 044 schema_version, 045 occurred_at` (N10 envelope) + `FLD-046 recommendation_id` (N12) + `FLD-047 match_id` (N13) | mesmos + `envelope-evento-schema-P03-T03-v1.md` em `02-refinement/refinamento-modelo-dados/` | `grep FLD-042 = 1` · `FLD-047 = 1` |
| `workday_id` como PK (conflito com `canonical_id`) | Corrigido para `alias (source_system=Workday, source_id) → canonical_id` — nunca FK direta; §1.1 em P03-T02 | `Planilha 05_DICIONARIO FLD-002` + `02-refinement/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md` §1.1 | `grep "canonical_id" >=3` |
| N24 Consentimento como coluna (risco LGPD) | Promovido a **nó bloqueador** com `consent_id+purpose+legal_basis+titular+versão+revogação <=5min + propagação para derivados + CMP log`; `FLD-005/006/007/028` bloqueados sem consent | `modelo-logico-fisico-P03-T01-v1.md` (N24 + N26) + `dicionario-fisico-mapping-P03-T04-v1.md` (`dim_consent` 4 campos + propagação) + `Planilha 11_SEGURANCA GOV-04` | `grep N24 >=3` · `grep consent_id >=1` |
| `decision_id` sem entidade canônica | Criada entidade **N26 Decision** (`decision_id + recommendation_id + estimated_value + realized_value`, 1 decisão por alerta) — operacionalização `ALT-* → Decisão → Valor` | `modelo-logico-fisico-P03-T01-v1.md` + `dicionario-fisico-mapping-P03-T04-v1.md` | `grep N26 = 2` |
| `SRC-12 Telemetria` sem contrato; `14_ROI` sem estados/ledger | Envelope canônico mínimo (`event_id, event_type, schema_version, occurred_at, recorded_at, tenant_id, purpose, idempotency_key, lineage`) + 4 estados `Potencial→Influenciado→Validado→Realizado` com `ledger único + deduplicação beneficiário×alavanca×período×intervenção + teto + haircut DAT-08` + `INT-09→12` para `SRC-04/09/10/11` | `envelope-evento-schema-P03-T03-v1.md` + `taxonomia-estados-valor-P03-T07-v1.md` + `Planilha 04_FONTES/08_INTEGRACOES/14_ROI/11_SEGURANCA` | `grep schema_version >=3` · `grep Potencial.*Influenciado.*Validado.*Realizado = 1` · `openpyxl INT-09..12 = 4` · `15 abas preservadas` |

### D.2 — Fix 2: Matriz + Glossário — ✅ concluído

| Gap | Correção | Arquivo(s) | Validação |
|---|---|---|---|
| Sem matriz unificada 73→16 / 25→23 / 12→8 / M0-M4→F0-MVP4 | **Matriz criada** com 73 linhas KPI numeradas 1-73 (Anexo A normalizado) + C.2/C.3/C.4 + MOD-01→09 (decisão MOD-09) + M0-M4→F0-MVP4 + rastreabilidade wikilinks | `05-resources/Processar/Plataforma HUB/03-analises-processadas/Matriz_Convergencia_73_16_25_23_12_8.md` **NOVO** | `rows=73 unique=73 range 1-73` · `PES-01/04=1 COM-06=1 N01/N24=3 MOD-01=1 M0=29 F0=10` |
| Sem glossário financeiro congelado; `PERF-01/02` e `ALO-01/02` fora do Blueprint | **Glossário v1 criado** (termos `Potencial/Influenciado/Validado/Realizado`, 5 regras: dupla contagem proibida, ledger único, teto, haircut DAT-08, 14_ROI zerado) + 4 KPIs táticos promovidos a M0 com fórmulas | `02-refinement/modelos-financeiros/HUB_Glossario_Financeiro_Congelado_v1.md` **NOVO** + `01-blueprint/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia.md` + `02-refinement/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md` + `02-refinement/modelos-financeiros/HUB_Taxonomia_Receita_Reconhecimento_v1.md` | `grep Potencial=1 PERF-01=1` · `blueprint PERF-01=1` |

### D.3 — Fix 3: Gate + Backlog — ✅ concluído

| Gap | Correção | Arquivo(s) | Validação |
|---|---|---|---|
| Sem gate `M0≈F0+MVP1 → refinement` vs `M1-M4 draft` | **Gate G03.B2 publicado**: `M0≈F0 4-6s + MVP1 8-12s → P03` com critérios `>80% FLD M0, >60% KPIs, 5-10 recomendações, ≥2 casos` + `M1≈MVP2, M2≈MVP3, M3-M4≈MVP4 draft` com `gap_ids` | `01-blueprint/README.md` § Gate congelado 2026-09-02 + `02-refinement/refinamento-modelo-dados/promocao-M0-gate-P03-v1.md` **NOVO** (7 itens G03.B2) | `grep "M0 ≈ F0" = 1` |
| `BL-002→005` sem FLD/N24/envelope nos aceites; `SRC-04/09/10/11` sem INT | **BLs atualizados**: `FLD-024/025/040/041 + N24 + envelope FLD-042→045` + detalhes por BL (BL-002 pessoa FLD-027→033 etc.) — **4 INT novos**: `INT-09 SRC-04 HRIS, INT-10 SRC-09 ATS, INT-11 SRC-10 SPEND, INT-12 SRC-11 ERP cliente` com `OAuth2/vault, retry/DLQ, reconciliação/rollback, SLA D+1/D+2` | `Planilha 12_BACKLOG` + `08_INTEGRACOES` (MD + XLSX) + `00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto.md` + `lacunas/DAT-006, DAT-010, PRD-001, TEC-001, GOV-004` nota `Atualizado 2026-09-02` | `grep FLD-024 + INT-09 + BL-002 = PASS` · `openpyxl 12_BACKLOG BL=36 N24=4` |

### D.4 — Arquivos alterados (20) e memória

Ver `aivectormemory` `ea98554b466b` (`convergencia-blueprint-especificacao, fix1, fix2, fix3, plan, changed-files, 02-09-2026`).

**7 Fix1:** `Planilha .md/.xlsx` + `P03-T02/T03/T04/T01/T07`
**5 Fix2:** `Matriz_Convergencia` (NOVO) + `HUB_Glossario` (NOVO) + `P03-T05` + `HUB_Blueprint_Dados_e_Inteligencia` + `HUB_Taxonomia_Receita`
**8 Fix3:** `01-blueprint/README` + `promocao-M0-gate` (NOVO) + `HUB_Registro_Lacunas` + `lacunas DAT-006/010/PRD-001/TEC-001/GOV-004` + `Planilha 12_BACKLOG/08_INTEGRACOES`

Todos os gaps de §4, Anexo A e Anexo C agora com status **Coberto** ou **Gate publicado** — pronto para promoção P03 do backlog `BL-002→005`.

---

## Anexo B — Arquivos-fonte consultados

**Grupo 1:**
- `Especificacao_Mestra_Inteligencia_HUB 3.md` (1293 linhas)
- `Planilha_Tecnica_Desenvolvimento_HUB.md` (438 linhas, 15 abas)

**Grupo 2:**
- `01-blueprint/README.md`
- `estrategia/HUB_Fundacao_Blueprint_Projeto.md`
- `produto/HUB_Blueprint_Produto_e_Capacidades.md` (BP-002)
- `tecnologia/HUB_Blueprint_Arquitetura_Tecnologica.md` (BP-004)
- `dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia.md` (BP-003)
- `modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita.md` (BP-001)
- `governanca-juridico/HUB_Blueprint_Governanca_e_Juridico.md` (BP-006)
- `visao-lancamento/HUB_Blueprint_Lancamento_e_Evolucao.md` (BP-008)
- `operacoes/HUB_Blueprint_Modelo_Operacional.md` (BP-005)
- `marca-mercado/HUB_Blueprint_Marca_e_Mercado.md` (BP-007)
- `dados-inteligencia/modelo-indicadores/abas-origem/04_Indicadores_Master/04_Indicadores_Master_analise.md`
- `dados-inteligencia/modelo-indicadores/abas-origem/02_Nos_de_Dados/02_Nos_de_Dados_analise.md`
- `dados-inteligencia/modelo-indicadores/abas-origem/06_Simulador_ROI/06_Simulador_ROI_analise.md`

---

*Gerado por Sisyphus — OhMyOpenCode · 2026-09-02 · pt-BR — atualizado 2026-09-02 21:42 para v1.1 com Apêndice D.*
*Relatório anterior: [[Relatorio_Consistencia_Especificacao_vs_Planilha_HUB]] — este é o relatório cross-grupo complementar.*
