---
status: aprovado
---

# Relatório de Consistência — Especificação Mestra vs Planilha Técnica HUB

**Data:** 2026-09-02
**Versão:** 1.0
**Arquivos analisados:**
- `02-especificacao-mestra/Especificacao_Mestra_Inteligencia_HUB 3.md` (v1.0, set/2026, 20 capítulos + 3 apêndices)
- `03-planilha-tecnica/Planilha_Tecnica_Desenvolvimento_HUB.md` (extração fiel de `Planilha_Tecnica_Desenvolvimento_HUB.xlsx` — 15 abas, 185 linhas, 2026-09-02)

**Objetivo:** verificar se os dois documentos compartilham backbone de dados comum e identificar inconsistências nos dados compartilhados.

**Método:** leitura integral dos dois arquivos + mapeamento aba-a-capítulo (módulos, perfis, fontes, integrações, dicionário, KPIs, grafo/relações, regras/alertas, telas, governança, roadmap/backlog, piloto, ROI) com classificação de severidade.

> **Conclusão executiva:** backbone **convergente na visão e nos princípios, divergente nos detalhes operacionalizáveis**. A Especificação é conceitual; a Planilha é contratual. Foram encontradas **14 inconsistências — 4 críticas** que bloqueiam desenvolvimento se não alinhadas antes do `F0/MVP1`.

---

## Sumário de severidade

| Severidade | Quantidade | O que significa |
|---|---|---|
| 🔴 Crítica | 4 | Bloqueia `F0`/MVP1; sem correção o backlog não tem aceite |
| 🟠 Major | 6 | Gera retrabalho, ambiguidade de escopo ou risco de dupla contagem |
| 🟡 Minor | 4 | Divergência de nomenclatura ou faseamento que precisa unificação |

---

## 1. Arquitetura / Módulos — 🔴 CRÍTICA

| Especificação (cap. 9 + cap. 19) | Planilha (aba 02_MODULOS) | Inconsistência |
|---|---|---|
| **12 entregas** listadas: `Início Executivo`, `Estratégia e Resultados`, `Performance`, `Pessoas e Talentos`, `Clientes e Receita`, `Fornecedores e Compras`, `Operações e Projetos`, `Academia`, `Comunidades e Eventos`, `Inteligência`, `Planos de Ação`, `Governança` + **9 motores HUB Core** (`Connect`, `Graph`, `Goals`, `Value`, `Intelligence`, `Match`, `Action`, `Trust`, `Impact`) | **8 módulos** `MOD-01` a `MOD-08`: `HUB Core`, `Performance`, `Pessoas e Talentos`, `Clientes e Receita`, `Fornecedores e Compras`, `Acadêmico`, `Comunidades/Eventos`, `HUB Impact` | `Operações e Projetos` sumiu como módulo dedicado — diluído em `MOD-02 Performance`. `Início Executivo` + `Estratégia` + `Inteligência` + `Planos` + `Governança` colapsados em `MOD-01`/`MOD-08`. Sem tabela de equivalência, backlog e permissões perdem rastro. |

**Recomendação:** criar `Matriz de Correspondência 12 → 8` e decidir se `Operações e Projetos` volta como `MOD-09` ou fica explicitamente como subdomínio de Performance. Aba 02 precisa de coluna `Corresponde a cap. da Especificação`.

---

## 2. Perfis / Permissões — 🟠 MAJOR

A Especificação (caps. 3.2 a 3.11) descreve **11 universos de pessoa** (Colaborador, Candidato/Talento externo, Fornecedor, Comprador, Aluno, Universidade, Cliente, RH, Liderança, Parceiros/Especialistas/Comunidades). A Planilha (03_PERFIS) traz **12 perfis** `PER-01` a `PER-12`.

*   `PER-06 Gestor HUB` e `PER-05 Financeiro` não existem na Especificação como personas — lá são papéis de governança (caps. 17 e 20). Inversamente, `Parceiro/Especialista/Mentor` (cap. 3.10) não tem perfil próprio — cai em genérico `MOD-07 Pessoa/Empresa/Comunidade`.
*   `PER-10 Cliente/CS` com `Isolamento por conta` está correto, mas a Especificação exige também `Stakeholders` do cliente (cap. 3.7) — não mapeado em `05_DICIONARIO`.

**Recomendação:** criar `PER-13 Parceiro/Especialista/Mentor` ou documentar que `PER-06` acumula esse papel; adicionar `stakeholder_ids` ao dicionário.

---

## 3. Fontes × Integrações — 🔴 CRÍTICA

*   `04_FONTES` = 12 fontes (`SRC-01` a `SRC-12`). `08_INTEGRACOES` = 8 contratos (`INT-01` a `INT-08`).
*   **Órfãs sem contrato:** `SRC-04 NR1/Canal interno`, `SRC-09 Gupy/InHire`, `SRC-10 Fornecedores (ERP/planilhas/e-mail)`, `SRC-11 LMS` — marcadas `Fase seguinte` na fonte mas sem `INT-*` correspondente. Se são fonte canônica, precisam de SLA, autenticação e histórico definidos agora (mesmo que `Planejado`).
*   `INT-07 BI/DW` é **saída** — não aparece em `SRC-*`. Quebra a regra `toda fonte tem dono + retenção`; saídas também precisam de governança.
*   Cadência levemente divergente: `SRC-06 Diária/semanal` vs `INT-04 Diária`; `SRC-05 Mensal` vs `INT-03 Mensal D+2 fechamento` — ok, mas precisa unificar texto.

**Recomendação:** criar `INT-09` (ATS/Recrutamento), `INT-10` (Fornecedores), `INT-11` (LMS), `INT-12` (NR1/Canal) mesmo que `Fase = Planejado`, e promover `INT-07` a fonte de saída governada.

---

## 4. Dicionário Canônico — 🔴 CRÍTICA

A Especificação (cap. 3.1 — Núcleo comum) exige: `ID único, nome, nome social, contato, localização, idioma, disponibilidade` + dimensões completas. `05_DICIONARIO` tem **23 campos** `FLD-001` a `FLD-023`, mas:

*   **Faltam campos obrigatórios do núcleo:** `nome`, `nome_social`, `email`, `telefone`, `localização`, `idioma`, `disponibilidade` — nenhum `FLD-*` os cobre. `FLD-001 person_id` + `FLD-002 workday_id` não substituem.
*   `Fornecedor`: Espec. 3.4 pede `porte, tempo de operação, oferta, capacidade, cobertura, certificações, ESG` — dicionário só tem `FLD-020 supplier_id (+CNPJ normalizado)`.
*   `Dados mínimos Fase 0` (cap. 18.1): `nível, área, admissão, centro de custo, cliente, projeto, contrato, prazo, qualidade, retrabalho, satisfação` — não há `FLD` para `nível`, `área`, `admissão`, `centro de custo`, `projeto_id`, `contrato_id`.

> Sem esses `FLD-*`, os itens `BL-002` a `BL-005` não passam em aceite.

**Recomendação:** adicionar no mínimo `FLD-024` a `FLD-035` para `nome, nome_social, email, telefone, localização, idioma, disponibilidade, nível, área, admissão, centro_custo, projeto_id, contrato_id, cliente_id` e espelhar em `04_FONTES` → `Campos-chave`.

---

## 5. Catálogo de KPIs — 🔴 CRÍTICA

*   Especificação (cap. 4.1) lista **14 indicadores corporativos** (`Receita`, `Receita recorrente`, `Crescimento`, `Margem bruta`, `Margem de contribuição`, `EBITDA`, `Lucro líquido`, `Fluxo de caixa`, `Capital de giro`, `ROI`, `ROIC`, `Custo de oportunidade`, `Receita em risco`, `Custo da inação`). A Planilha (06_KPIS) só implementa **2 financeiros**: `KPI-FIN-01 Margem bruta do projeto` e `KPI-FIN-02 Receita/FTE` (contextual).
*   Os outros 12 não têm `KPI-*`, nem `FLD-*`, nem `BL-*`. `Receita recorrente`, `EBITDA`, `Fluxo de caixa` são citados em retenção (`5`/`7 anos`) mas sem fórmula.
*   Nomenclatura financeira divergente: Espec. cap. 10.1 `Valor gerado / Valor protegido / Economia realizada / Valor em risco / Valor disponível` vs Planilha (cap. 20 / aba 14) `Valor realizado / Valor protegido / Economia realizada / Valor potencial`. `Gerado ≠ Realizado`, `Disponível ≠ Potencial` — quebra o cálculo de `ROI (KPI-HUB-04)`.
*   Fórmulas onde existem estão corretas: `KPI-ALO-01`, `FIN-01`, `HUB-04` batem com a Espec., mas `KPI-FIN-02` sem meta/alerta fica `Contextual` — inconsistente com `Fase MVP` onde deveria já ter baseline.

**Recomendação:** congelar vocabulário financeiro (escolher `realizado` vs `gerado` e `potencial` vs `disponível`) e criar `KPI-FIN-03` a `KPI-FIN-14` como `Backlog` com `Governança = Proposto` para não perder rastreabilidade.

---

## 6. Grafo e Hipóteses — 🟠 MAJOR

*   Espec. cap. 5 lista **15 relações** canônicas (`Pessoa → Competência`, `Meta individual → Meta equipe → Indicador financeiro`, `Universidade → Competência`, `Curso → Lacuna`...). `07_RELACOES` traz **9 hipóteses** `REL-01` a `REL-09`.
*   `Meta → Meta` e `Universidade → Competência` / `Curso → Lacuna` sumiram.
*   Taxonomia de evidência: Espec. `Associação → Hipótese → Evidência fortalecida → Impacto validado` vs Planilha `Associação / Hipótese causal / Matemática / Sinal antecedente` com `Status = Validar piloto / Proposto / Piloto`. `REL-03` e `REL-06` como `Sinal antecedente` não existem na taxonomia da Espec.
*   `REL-08 Oferta 15% menor` cita `Caso Aline: 15%` — bate com Espec. caps. 5.3 e 14, mas a Planilha fixa `≥15%` como regra em `ALT-06`/`BL-018` sem mencionar `TCO` como condição (a Espec. exige `custo total = preço + frete + impostos + operação + qualidade + risco + descarte`).

**Recomendação:** alinhar `07_RELACOES.Relação` ao vocabulário do cap. 5 e adicionar coluna `Nível de evidência (Espec. 5.1)` com os 4 valores canônicos.

---

## 7. Regras e Alertas — 🟠 MAJOR

Os 8 alertas `ALT-01` a `ALT-08` com thresholds (`<75% em 2 períodos`, `<65% alocação`, `<20% margem ou queda >5 p.p.`, `<70% qualidade`, `<45% adoção`, `≥15% oferta`, `3–7 dias sem decisão`) **não aparecem na Especificação**. Não é erro, mas são `Dado a validar` (marcação da p. 1 da Espec.) — precisam ser carimbados como `propostos` e validados em piloto, não como contratos. `ALT-05 Viés` como `MVP+1` conflita com cap. 6.3, onde `detector de vieses` é entrega do `MVP1`.

**Recomendação:** mudar `ALT-05` para `MVP` e marcar todos os thresholds em `Status = Proposto — validar com Monks em F0`.

---

## 8. Telas / Outputs — 🟡 MINOR

A Espec. (caps. 10, 11 e 19) descreve `Cockpit Executivo`, `Minha Performance`, `Painel Gestor`, `Governança` com `Mapa de causas`, `Radar de talentos/clientes/fornecedores`, `Simulador`. A Planilha (10_TELAS) traz 9 telas `SCR-01` a `SCR-09` — `SCR-09 API de indicadores` é adição correta não prevista na Espec., mas `SCR-08 Marketplace fornecedor` deveria espelhar `TCO + risco + justificativa` (Espec. cap. 14) — hoje só lista `SUP-01/02`.

---

## 9. Governança / LGPD — 🟡 MINOR (sensível)

*   Espec. cap. 17 classifica **6 níveis** (`Público`, `Interno`, `Confidencial`, `Sensível`, `Altamente restrito`, `Anonimizado`) com `grupo mínimo` e `proteção contra reidentificação`. `11_SEGURANCA` lista 12 controles `GOV-01` a `GOV-12` — mapeamento está correto, mas `GOV-12 Multi-tenant / tenant escape` não existe na Espec.; é premissa técnica que precisa subir para o cap. 17.1.
*   Fases: `GOV-07 Viés` como `MVP+1/Backlog` vs Espec. cap. 6.3 que exige teste de equidade já no MVP — desalinhado.

---

## 10. Roadmap × Backlog — 🟠 MAJOR

*   Espec. cap. 18: `F0 4–6 sem → MVP1 8–12 sem (Performance + Finanças) → MVP2 5–8m (Pessoas/Talentos/Clientes) → MVP3 9–14m (Fornecedores/Academia/Comunidades) → MVP4 12–18m (Previsão)`. Backlog `BL-001` a `BL-020` usa `MVP / MVP+1 / Fase 2` — falta correspondência explícita `MVP+1 = MVP2/3?` e `Fase 2 = MVP3/4?`. `BL-016 RBAC XL` como `MVP` crítico pode estourar o `MVP1`; a Espec. previa governança incremental.
*   Sem `BL-*` para `HUB Trust` (equidade, explicabilidade), `Design`, `Mudança/Comunicação` — o cap. 18.4 lista `pessoas/equidade` e `design` como papéis iniciais.

**Recomendação:** adicionar coluna `Roadmap Espec. (cap. 18)` em `12_BACKLOG` e criar `BL-021` (Trust/Equidade) e `BL-022` (Design system/Mudança).

---

## 11. Piloto Monks — 🟡 MINOR

`13_PILOTO_MONKS` define `PIL-01` a `PIL-05` com metas `80% receita mapeada`, `95% margem conciliada`, `≥70% sinais úteis`, `≥85% metas com qualidade`, `Adoção 75% / Ação 65% / ROI 100%`. A Espec. cap. 18.2 (`Critérios ilustrativos`) pede `Cobertura >80%`, `KPIs conectados >60%`, `Redução tempo 20–40%`, `5–10 recomendações`, `≥2 casos financeiros`, `Confiança >75%`. Estruturas diferentes — ambas válidas, mas precisam convergir para um **scorecard único** do piloto (hoje há dois).

---

## 12. ROI — 🟠 MAJOR

*   Espec. cap. 20.5 define **status do valor** `identificado, estimado, aprovado, em realização, realizado, validado, expirado, rejeitado` + **níveis de atribuição** `originado, influenciado, acelerado, apenas mensurado` + `rateio transparente`. A Planilha (14_ROI) só tem `Estimado vs Realizado validado`; perde rastreabilidade e permite dupla contagem — justamente o risco que a Espec. (cap. 10.1) proíbe (`impedir dupla contagem`).
*   Benefícios: Espec. lista `receita gerada/protegida, margem recuperada, economia, custo evitado, retrabalho/vacância/turnover, capacidade convertida`. A Planilha lista 7 linhas `Receita recuperada, Margem protegida, Turnover evitado, Savings fornecedor, Horas economizadas, Perda evitada` — `Margem protegida` vs `Margem recuperada` e `Receita recuperada` vs `Receita gerada` precisam unificar.

**Recomendação:** adicionar em `14_ROI` as colunas `Status (cap. 20.5)` e `Atribuição (originado/influenciado/acelerado/mensurado)` e unificar nomenclatura com cap. 10.1.

---

## 13. Nomenclatura e Idioma — 🟡 MINOR

Pequenas divergências que viram dívida técnica: `Margem bruta` vs `Margem bruta do projeto` (refinamento ok, mas quebrar ID), `Custo total de aquisição` vs `Custo total`/`TCO`, `Valor gerado` vs `Valor realizado`. Recomenda-se glossário único (`05_DICIONARIO` como fonte da verdade).

---

## 14. Cobertura — observação

`01_PAINEL` informa `Módulos 8 | Perfis 12 | Fontes 12 | Campos 23 | KPIs 16 | Relações 9` todos `Inicial`/`Estruturado`/`Hipóteses`. A Especificação tem >30 indicadores e 15 relações implícitas. Cobertura atual ~50% do backbone — `Inicial` é honesto, mas reforça que o piloto precisa completar o dicionário antes de escalar.

---

## Plano de correção recomendado (ordem)

1. **Congelar dicionário canônico** — adicionar `FLD` para `nome, nome_social, email, telefone, localização, idioma, disponibilidade, nível, área, admissão, centro_custo, projeto_id, contrato_id` e espelhar em `04_FONTES → Campos-chave`. Sem isso `FASE 0` não fecha.
2. **Publicar matriz 12 → 8 de módulos** e decidir `Operações e Projetos` + `Multi-tenant`.
3. **Unificar vocabulário financeiro** — escolher `realizado` vs `gerado` e `potencial` vs `disponível` e refletir em `KPI-HUB-04`, `FLD-022/023` e `14_ROI`.
4. **Completar `INT-*` para `SRC-04/09/10/11`** e trazer `status/atribuição` do cap. 20.5 para a aba 14.
5. **Validar thresholds `ALT-*` e `PIL-*` com Monks em `F0`** — marcar como `Dado a validar` (conforme marcação da p. 1 da Espec.) antes de virar contrato.

> Se desejar, este relatório pode ser convertido em `patch` com as linhas exatas a inserir em `05_DICIONARIO`, `08_INTEGRACOES` e `14_ROI` para fechar os 4 críticos.

---

## 15. Atualização pós-execução

> As correções abaixo foram aplicadas na execução posterior e devem ser lidas como atualização do estado do backbone.

### Fixes concluídos

- **Matriz 12 → 8 de módulos:** adicionada na planilha técnica e espelhada na especificação mestra para tornar explícito o mapeamento entre entregas conceituais e módulos técnicos.
- **Dicionário canônico:** expandido com `FLD-024` a `FLD-036`, cobrindo nome, nome social, contato, localização, idioma, disponibilidade, nível, área, admissão, centro de custo, projeto e contrato.
- **Fontes × integrações:** `INT-09` a `INT-12` foram criadas para ATS/Recrutamento, Fornecedores, LMS e NR1/Canal; `INT-07 BI/DW` passou a ser tratado como saída governada.
- **Vocabulário financeiro:** termos de valor foram normalizados para `valor gerado` / `valor disponível`; a aba de ROI foi reescrita com `status do valor` e `atribuição`.
- **Cobertura de KPIs:** a planilha recebeu a faixa `KPI-FIN-03` a `KPI-FIN-14` como backlog/proposto para rastrear os indicadores corporativos ausentes.
- **Regras e piloto:** `ALT-*` e `PIL-*` foram marcados como provisórios, com `ALT-04` e `ALT-05` mantidos em MVP e os demais thresholds como `Proposto — validar com Monks em F0`.

### Wave 2 — fechamento dos 6 pendentes (2026-09-03)

- **Perfis:** adicionado `PER-13 Parceiro/Especialista/Mentor` e `FLD-037 stakeholder_ids` com espelho em `SRC-07`; fecha §2.
- **Grafo:** criada coluna `Nível de evidência (Espec. 5.1)` e normalizada taxonomia para `Associação/Hipótese/Evidência fortalecida/Impacto validado`; adicionados `REL-10 Meta→Meta`, `REL-11 Universidade→Competência`, `REL-12 Curso→Lacuna`; fecha §6.
- **Telas:** `SCR-08` reescrita para exigir `TCO completo (preço+frete+impostos+operação+qualidade+risco+descarte) + risco + justificativa`; fecha §8.
- **Governança:** `GOV-07` movido `MVP+1/Backlog → MVP/Planejado` e `GOV-12 multi-tenant` elevado à Espec. §17.1; fecha §9.
- **Backlog:** adicionada coluna `Roadmap Espec. (cap.18)` e `BL-021 HUB Trust/Equidade` + `BL-022 Design system/Mudança`; fecha §10.
- **Piloto/scorecard:** convergência explícita `PIL-01..05 ↔ Espec. 18.2` anotada em `13 PILOTO`; fecha §11/§14.

### Observação de leitura

Este relatório documenta a inconsistência original; a planilha e a especificação agora carregam as correções acima e já não devem ser lidas como espelho do estado anterior.

*Gerado por Sisyphus — OhMyOpenCode · 2026-09-02 · pt-BR*

## Histórico de aprovação

- **Data:** 2026-09-05
- **Gate:** decisão direta do usuário (teste do ritual; revisão manual prévia pelo usuário; promoção direta registrada)
- **Decisão:** promovido de `05-resources/inbox/Plataforma HUB/` para `03-approved/` como final compartilhável.
- **Ref:** `00-project-control/registro-mudancas/2026-09-05-gate-planilhas-mestras.md`
