---
title: Plano — Correção do XLSX a partir do MD canônico
source_md: Planilha_Tecnica_Desenvolvimento_HUB.md
target_xlsx: Planilha_Tecnica_Desenvolvimento_HUB.xlsx
sheets: 15
linhas_dados_md: 185
idioma: pt-BR
status: plano — aguardando aprovação
criado_em: 2026-09-03
autor: Sisyphus
tags:
  - hub
  - planilha
  - plano
  - xlsx
  - correção
---

# Plano — Correção do `Planilha_Tecnica_Desenvolvimento_HUB.xlsx` a partir do `.md` canônico

> **Objetivo:** tornar o `.xlsx` idêntico ao `.md` já corrigido (fonte da verdade), sem perder formatação, fórmulas ou estrutura. O `.md` contém 15 abas / 185 linhas tabulares e já foi validado como extração fiel em `Planilha_Tecnica_Desenvolvimento_HUB_validacao.md` — mas o `.xlsx` ainda está desatualizado nos valores que foram corrigidos no `.md`.

> **Regra de ouro:** `.md` vence. Todo valor divergente no `.xlsx` é sobrescrito pelo `.md`. Nenhuma alteração no `.md` neste plano.

---

## 1) Princípios e escopo

- **Fonte da verdade:** `Planilha_Tecnica_Desenvolvimento_HUB.md` (pt-BR, cabeçalhos e símbolos `Σ × ≥ ≤ → R$ %` preservados).
- **Alvo:** `Planilha_Tecnica_Desenvolvimento_HUB.xlsx` — 15 abas, estrutura tabular a partir da linha 4 (header), títulos mesclados em `A1:*`, subtítulo em `A2:*` ou `A3:*`.
- **Preservar:** larguras de coluna, alturas de linha, merges, preenchimentos (`FFF36C21` header laranja), fontes, bordas, filtros, congelamentos, formatos numéricos (`0.0%`, `R$ #,##0`), fórmulas em `01_PAINEL` e `14_ROI_HUB`, validações e comentários (se houver).
- **Não escopo:** a tabela `Correspondência 12 → 8` da seção `## 02 — MÓDULOS` existe só no `.md` como síntese editorial — **não** deve ser criada no `.xlsx` (não há aba correspondente).

---

## 2) Inventário de divergências (md vs xlsx atual)

Levantamento automatizado via `openpyxl` comparando cabeçalhos e cada célula (`data_only=True` para valores, `data_only=False` para fórmulas/formatação).

| Aba | Tipo de divergência | Detalhe |
|---|---|---|
| `03_PERFIS` | **+1 linha faltante** | `PER-13 — Parceiro/Especialista/Mentor` existe no md (13 linhas) mas não no xlsx (12). Inserir ao final. |
| `04_FONTES_DADOS` | **4 células** | `SRC-01 Campos-chave` incompleto no xlsx (falta nome/nome social/e-mail/telefone etc.), `SRC-05 Chaves` (`CC` → `centro de custo`), `SRC-06 Chaves` (falta `centro de custo`), `SRC-07` (falta `stakeholder_ids` e `centro de custo`). |
| `05_DICIONARIO` | **3 células** | `FLD-002 Validação`: md `Único por empresa/origem` vs xlsx `Único por empresa`; `FLD-022 Descrição`: `Valor gerado estimado.` vs `Benefício estimado.`; `FLD-023 Descrição`: `Valor gerado validado.` vs `Benefício realizado validado.`. |
| `06_KPIS` | **+12 linhas + 1 célula** | Xlsx tem 16 linhas, md tem 28. Faltam `KPI-FIN-03` a `KPI-FIN-14` completos (Receita total, recorrente, Crescimento, Margem de contribuição, EBITDA, Lucro líquido, Fluxo de caixa, Capital de giro, ROIC, Custo de oportunidade, Receita em risco, Custo da inação) e deslocamento subsequente de `KPI-PEO-*`, `KPI-CLI-01`, `KPI-SUP-*`, `KPI-HUB-*`. Além disso `KPI-ALO-02`: `Receita disponível perdida` vs `Receita potencial perdida` (e `Ligação financeira` idem). |
| `07_RELACOES` | **+1 coluna +3 linhas** | Header md tem `Nível de evidência (Espec. 5.1)` (col 12) inexistente no xlsx (12→13 cols). Faltam `REL-10` (Meta ligada), `REL-11` (Universidade→competência), `REL-12` (Curso→lacuna). Todos com `Status` e `Nível de evidência = Hipótese/Associação`. |
| `08_INTEGRACOES` | **2 células** | `INT-07 Campos mínimos`: md `KPIs, alertas, valor gerado, lineage, atribuição` vs xlsx `KPIs, alertas, ROI, lineage`; `INT-07 Status`: `Governado` vs `Planejado`. |
| `12_BACKLOG` | **+1 coluna +2 linhas** | Header md tem `Roadmap Espec. (cap.18)` (col 10) inexistente no xlsx (15→16 cols). Faltam `BL-021` (HUB Trust/Equidade) e `BL-022` (Design system e adoção). |
| `14_ROI_HUB` | **+1 coluna estrutural + renomeio + 8 linhas deslocadas** | Md: `Categoria | Item | Estado canônico | Atribuição | Premissa | Estimado (R$) | Valor gerado validado (R$) | Evidência | Responsável | Validação` (10 cols). Xlsx: `Categoria | Item | Estado canônico | Premissa | Estimado | Realizado validado | Evidência | Responsável | Validação` (9 cols). Falta coluna `Atribuição` (`originado/influenciado/acelerado/mensurado`), e `Realizado validado` deve virar `Valor gerado validado`. As 8 linhas de detalhe estão com valores deslocados por uma coluna. Resumo calculado (`14_ROI_HUB!A14:I18`) permanece mas precisa realinhar após inserção da coluna. |
| `00_LEIA-ME`, `01_PAINEL`, `02_MODULOS`, `09_REGRAS_ALERTAS`, `10_TELAS_OUTPUTS`, `11_SEGURANCA_LGPD`, `13_PILOTO_MONKS` | **sem divergência estrutural** | Valores e contagens conferem. Apenas garantir que formatação e merges permaneçam intactos. |
| `01_PAINEL` (fórmulas) | **preservar** | `B6=COUNTA('12_BACKLOG'!$A$5:$A$200)`, `B7=COUNTIF(...Concluído)`, `B8=COUNTIF(...Crítica)`, `B9=IF(B6=0,0,COUNTIF(...MVP)/B6)` com formato `0.0%`. Após inserir linhas em `12_BACKLOG`, as fórmulas continuam válidas (faixa até `200` cobre). Recalcular e validar. |
| `14_ROI_HUB` (fórmulas) | **preservar e ajustar** | `D15/E15/F15` `SUMIF` de Custos, `D16/E16/F16` de Benefícios, `D17/E17/F17` ROI. Após inserir coluna `Atribuição` (nova col D), as fórmulas devem ser deslocadas e referências reescritas para novas colunas (`Estimado` passa de `E`→`F`, `Valor gerado validado` de `F`→`G`). Formatos `R$ #,##0` e `0.0%` devem ser reaplicados. |

> **Total agregado:** 1 coluna faltante em `07_RELACOES`, 1 em `12_BACKLOG`, 1 em `14_ROI_HUB` (=3 colunas); ~19 linhas faltantes/deslocadas (1+12+3+2+1 de ajuste ROI); ~18 células com valor divergente.

---

## 3) Estratégia de correção

### 3.1 Ferramenta e abordagem

- **Script Python com `openpyxl`** (não `pandas`/`xlsxwriter` — preserva estilo célula-a-célula).
- **Leitura do md como parser:** extrair cada tabela via regex de pipes (`| ... |`), tratando `\|` escapado e ignorando linhas separadoras `| --- |`. Cada seção `## NN —` mapeia para aba `NN_*`.
- **Escrita atômica:** carregar `workbook` com `data_only=False` (preserva fórmulas), aplicar correções em memória, salvar como `Planilha_Tecnica_Desenvolvimento_HUB.xlsx` sobrescrevendo (backup prévio `*.bak.YYYY-MM-DD_HHMM.xlsx` no mesmo diretório).
- **Preservação de estilo:** ao inserir coluna/linha, copiar `column_dimensions.width`, `row_dimensions.height`, `fill`, `font`, `alignment`, `border`, `number_format` da linha/coluna vizinha. Para células novas, aplicar estilo da linha modelo (ex.: `A5:N5` para `05_DICIONARIO`).
- **Ordem de execução importa:** inserir colunas **antes** de inserir/atualizar linhas, para que índices de coluna já estejam estáveis.

### 3.2 Regras de formato

- **Percentuais:** md `85,0%` → xlsx `0.85` com `number_format='0.0%'` (pt-BR exibido como `85,0%` dependendo do locale; manter exatamente `0.0%` já usado em `06_KPIS!J5:K5`).
- **Moeda:** md `R$ 0` / `R$ 50.000` → xlsx numérico `0` / `50000` com `number_format='R$ #,##0'`.
- **Datas/timestamps:** `FLD-041` e `FLD-045` em `05_DICIONARIO` são texto ISO-8601 (`2026-01-01`, `2026-09-02T12:00:00Z`) — manter como `General`/`Texto`.
- **Merges:** não alterar `A1:*` e `A2:*`/`A3:*`. Ao inserir coluna em `14_ROI_HUB`, ajustar `A1:H1`/`A2:H2` → `A1:I1`/`A2:I2` e `A14:C14` permanece.
- **Fórmulas:** nunca sobrescrever com valor estático. Reescrever referências ao inserir coluna D em `14_ROI_HUB`.

---

## 4) Passo a passo por aba (ordem sugerida)

### Fase A — Backup e esqueleto

1. Criar backup `Planilha_Tecnica_Desenvolvimento_HUB.bak.2026-09-03.xlsx`.
2. Carregar workbook, registrar `sheetnames` esperado (15), `max_row/max_col` por aba para log.

### Fase B — Correções estruturais (colunas)

3. **`07_RELACOES` — inserir coluna `Nível de evidência (Espec. 5.1)`**
   - Inserir coluna `L` (antes de `Status` que hoje é `L`). Header `L4 = Nível de evidência (Espec. 5.1)` com estilo `FFF36C21` bold/branco copiado de `K4`.
   - Largura: ~22 (seguir padrão `K 22.0` em `05_DICIONARIO` ou `18` em outras; usar 22 e ajustar se truncar).
   - Deslocar `Status` de `L`→`M`. Ajustar `column_dimensions` correspondentes.
4. **`12_BACKLOG` — inserir coluna `Roadmap Espec. (cap.18)`**
   - Inserir coluna `J` (entre `Fase` atual `I` e `Prioridade` atual `J`). Header `J4 = Roadmap Espec. (cap.18)` estilo `FFF36C21`.
   - Largura: 18–20. Deslocar `Prioridade`→`K`, `Esforço`→`L`, `Responsável`→`M`, `Sprint`→`N`, `Status`→`O`, `Observações`→`P`. Atualizar `max_col` 15→16. Ajustar `column_dimensions` em cadeia.
   - Preencher valores por linha conforme md: `F0`, `MVP1`, `MVP2`, `MVP3`, `Fase 2` etc. (ver Fase D).
5. **`14_ROI_HUB` — inserir coluna `Atribuição` + renomear header**
   - Inserir coluna `D` (entre `Estado canônico` `C` e `Premissa` atual `D`). Header `D4 = Atribuição` estilo `FFF36C21`.
   - Renomear `F4` de `Realizado validado (R$)` → `Valor gerado validado (R$)`.
   - Ajustar merges: `A1:H1`→`A1:I1`, `A2:H2`→`A2:I2`. Larguras: nova `D` ~22.
   - Reescrever fórmulas do resumo (ver Fase E).

### Fase C — Atualizações de células existentes (sem inserir linha)

6. **`05_DICIONARIO`** (3 células):
   - `M6` (`FLD-002` linha 6) `Validação`: `Único por empresa` → `Único por empresa/origem`.
   - `D26` (`FLD-022`) `Descrição`: `Benefício estimado.` → `Valor gerado estimado.`.
   - `D27` (`FLD-023`) `Descrição`: `Benefício realizado validado.` → `Valor gerado validado.`.
7. **`04_FONTES_DADOS`** (4 células):
   - `E5` `SRC-01 Campos-chave`: complementar lista completa (`ID Workday; nome; nome social; e-mail; telefone; localização; idioma; disponibilidade; cargo; área; level; admissão; gestor; HRBP; diretoria; VP`).
   - `F9` `SRC-05 Chaves`: `Cliente; projeto; contrato; CC` → `Cliente; projeto; contrato; centro de custo`.
   - `F10` `SRC-06 Chaves`: `Pessoa; projeto; cliente; período` → `Pessoa; projeto; cliente; centro de custo; período`.
   - `E11/F11` `SRC-07`: `Account ID; contract ID; owner` → `Account ID; contract ID; owner; stakeholder_ids`; `Contrato; projeto; CC` → `Cliente; contrato; projeto; centro de custo`.
8. **`06_KPIS`** `KPI-ALO-02` (linha 8):
   - `C8`: `Receita potencial perdida` → `Receita disponível perdida`.
   - `N8`: `Receita potencial` → `Receita disponível`.
9. **`08_INTEGRACOES`** `INT-07` (linha 11):
   - `H11`: `KPIs, alertas, ROI, lineage` → `KPIs, alertas, valor gerado, lineage, atribuição`.
   - `O11`: `Planejado` → `Governado`.

### Fase D — Inserção de linhas faltantes

10. **`03_PERFIS` — inserir `PER-13`**
    - Linha 17 (após `PER-12` em linha 16): `PER-13 | Acesso | Parceiro/Especialista/Mentor | Conectar expertise a oportunidades e desenvolvimento. | Mentorias, trilhas, avaliações de especialista | Oportunidades compatíveis e feedback agregado | Mentorar; avaliar; propor trilha | Sem dados individuais de terceiros; consentimento | MVP+1`.
    - Copiar estilo da linha 16 (altura, fills, bordas).
11. **`06_KPIS` — expandir de 16 para 28 linhas**
    - A partir da linha 11 (onde hoje está `KPI-PEO-01` deslocado), inserir 12 linhas para `KPI-FIN-03` a `KPI-FIN-14` na ordem do md, com todos os 15 campos (incluindo `Unidade`, `Meta`, `Alerta` vazios onde md tem vazio).
    - Após inserção, as linhas `KPI-PEO-01` a `KPI-HUB-04` (12 linhas) cairão naturalmente para 23–32. Garantir que cada célula tenha `General` exceto `Meta/Alerta` percentuais (`0.0%`) onde houver valor. Nenhuma fórmula nesta aba — apenas valores.
    - Validar que `max_row` final = 32 (4 header + 28 dados).
12. **`07_RELACOES` — inserir `REL-10`, `REL-11`, `REL-12`**
    - Linhas 14–16 (após `REL-09`):
      - `REL-10 | Meta | Meta ligada | Indicador financeiro | Associação | Meta individual→meta equipe→indicador financeiro. | Ciclo | Complexidade; cliente | Lineage Meta→KPI | Revisar ligação financeira | Meta isolada | Associação | Proposto`
      - `REL-11 | Universidade | Competência | Skills futuras | Hipótese | Universidade→competência alimenta skills emergentes. | 6–12 meses | Curso; mercado | Coorte universidade→skill | Alinhar grade e trilha | Oferta≠demanda | Hipótese | Fase 2`
      - `REL-12 | Curso | Lacuna | Empregabilidade | Hipótese | Curso→lacuna explica gap de contratação. | 3–12 meses | Região; demanda | Taxa de conversão e lacuna | Ajustar portfólio/curso | Viés de seleção | Hipótese | Fase 2`
    - Preencher coluna `Nível de evidência` (nova `L`) com o valor da coluna `Relação` correspondente? Não — md tem `Relação` e `Nível de evidência` separados. `Nível de evidência` = `Hipótese`/`Associação`/`Evidência fortalecida` conforme tabela md. Copiar exatamente.
13. **`12_BACKLOG` — inserir `BL-021`, `BL-022`**
    - Linhas 26–27 (após `BL-020`):
      - `BL-021 | Governança | HUB Trust/Equidade | Dados+RH+Ética | auditar viés e explicabilidade | garantir decisão justa e contestável | Relatório fairness por grupo + teste de equidade em MVP | GOV-07/REL-03/06 | MVP | MVP1 | Alta | L | Dados/Ética/Produto |  | Não iniciado | Trust depende de GOV-07`
      - `BL-022 | Design/Mudança | Design system e adoção | Produto/Gestor HUB | padronizar telas e comunicação de mudança | acelerar adoção sem retrabalho | Design tokens + guia de mudança validado com Monks | SCR-01..09 | MVP | MVP1 | Média | M | Produto/Design |  | Não iniciado | Cap. 18.4`
    - Coluna nova `Roadmap Espec. (cap.18)` (J) preenchida conforme md para todas as linhas 5–27 (incluindo `F0`, `MVP1`, `MVP2`, `MVP3`, `Fase 2`). Para `BL-001` = `F0`, `BL-002` = `F0`, `BL-003`..`BL-017` = `MVP1`, `BL-018`/`BL-020` etc. conforme md.
14. **`14_ROI_HUB` — realinhar linhas de detalhe (5–12) após inserir coluna D**
    - Cada linha tem agora 10 colunas. Mapear:
      - `C` Estado canônico, `D` **Atribuição** (novo), `E` Premissa, `F` Estimado, `G` Valor gerado validado.
    - Valores por linha (do md):
      - `5 Custo/Implantação | Potencial | originado | Configuração... | R$ 0 | R$ 0`
      - `6 Custo/Licença e operação | Potencial | originado | Licença... | R$ 0 | R$ 0`
      - `7 Benefício/Receita gerada | Realizado | originado | Ociosidade...; ledger e aprovação Financeiro. | R$ 0 | R$ 0` (xlsx atual tem `Receita recuperada` — corrigir)
      - `8 Benefício/Margem recuperada | Validado | influenciado | Redução... | R$ 0 | R$ 0` (xlsx `Margem protegida` — corrigir)
      - `9 Benefício/Turnover evitado | Influenciado | acelerado | Reposição... | R$ 0 | R$ 0`
      - `10 Benefício/Savings fornecedor | Validado | originado | Economia... | R$ 0 | R$ 0`
      - `11 Benefício/Horas economizadas | Realizado | mensurado | Horas...; ledger. | R$ 0 | R$ 0`
      - `12 Benefício/Perda evitada | Potencial | influenciado | Valor esperado... | R$ 0 | R$ 0`
    - Aplicar `R$ #,##0` em `F5:G12`, `General` nas demais, `I5:I12` `Pendente`.

### Fase E — Reescrever fórmulas do resumo

15. **Antes (xlsx atual, 9 cols):**
    - `D15=SUMIF($A$5:$A$12,"Custo",$E$5:$E$12)` etc. (referências defasadas por coluna faltante).
16. **Depois (10 cols, Atribuição em D):**
    - `F15 =SUMIF($A$5:$A$12,"Custo",$F$5:$F$12)` (Estimado), `G15 =SUMIF(...,$G$5:$G$12)` (Valor gerado validado) — mas o resumo atual tem `Custos totais` em `A15:D15:F15` com layout mesclado. Verificar dump: `14_ROI_HUB!A15:I18` tem `Custos totais` em `A15`, valores em `D15:F15` com `SUMIF`. Após inserir coluna, o bloco de resumo deve ser:
      - `A15 Custos totais | F15 =SUMIF(...) Estimado | G15 =SUMIF(...) Valor gerado`
      - `A16 Benefícios totais | F16/G16` idem para `"Benefício"`
      - `A17 ROI | F17 =IF(F15=0,0,(F16-F15)/F15)` com `0.0%`, `G17 =IF(G15=0,0,(G16-G15)/G15)` com `0.0%`
      - `A18 Observação | F18 Estimado | G18 Validar após 3–6 meses`
    - Reaplicar `number_format`: `F15:G16` `R$ #,##0`, `F17:G17` `0.0%`.

### Fase F — Normalização final

17. Garantir que todas as abas tenham `print_title_rows` / `freeze_panes` preservados (se existirem). Reaplicar `auto_filter` se o xlsx original tiver — hoje não há, manter sem.
18. Recalcular workbook (`wb.calculation.calculate` é automático ao abrir no Excel; no openpyxl apenas garantir `data_only=False`).
19. Validar larguras: comparar `column_dimensions` finais com log inicial; nenhuma coluna deve ficar `0` ou `> 60`.

---

## 5) Riscos e mitigação

| Risco | Impacto | Mitigação |
|---|---|---|
| Deslocar fórmulas do ROI ao inserir coluna | ROI quebrado | Reescrever fórmulas com referências novas e testar com `SUMIF` mockado; validar `R$ 0` → ROI `0,0%`. |
| Perder estilo ao inserir linha/coluna | Header laranja virar branco, bordas sumirem | Copiar estilo célula-a-célula da linha/coluna vizinha; nunca usar `ws.append` sem estilo. |
| Quebrar merges `A1:H1` | Título desalinhado | Ajustar `merged_cells.ranges` programaticamente para nova largura. |
| Locale pt-BR vs `openpyxl` | `%` exibido como `90.0%` em vez de `90,0%` | Manter `number_format='0.0%'`; Excel local converte vírgula automaticamente. Não forçar string `90,0%`. |
| Inserir KPI-FIN-* fora de ordem | Quebra de lineage com `04_FONTES_DADOS` | Seguir ordem exata do md (`KPI-FIN-03`→`14`, depois `PEO`→`HUB`). Validar IDs únicos. |
| Sobrescrever valores manuais do cliente em `Sprint`/`Responsável` | Perda de edição humana | As colunas `Sprint` estão vazias no md (`Não iniciado`). Se xlsx tiver valores preenchidos pós-entrega, **preservar** e apenas adicionar `Roadmap` — não zerar. O plano atual assume `Sprint` vazio (conferido: vazio). Confirmar com PO antes de salvar. |

---

## 6) Validação (critério de aceite)

1. **Re-extração:** rodar extrator `openpyxl` → md temporário e diff contra `Planilha_Tecnica_Desenvolvimento_HUB.md` — deve dar **0 diferenças** em cabeçalhos e células (exceto a tabela editorial `Correspondência 12→8`).
2. **Contagens:** `03_PERFIS` 13 linhas, `06_KPIS` 28 linhas, `07_RELACOES` 12 linhas (13 cols), `12_BACKLOG` 22 linhas (16 cols), `14_ROI_HUB` 8 linhas detalhe + 4 resumo (10 cols).
3. **Fórmulas vivas:** abrir xlsx no Excel/Sheets e verificar `01_PAINEL!B6:B9` calculam `20 / 0 / 13 / 85,0%` e `14_ROI_HUB!F15:G17` calculam `R$ 0` e `0,0%` sem `#REF!`.
4. **Formatação:** header laranja `FFF36C21` bold branco em todas as linhas 4; `R$` em `14_ROI_HUB!F5:G16` e `F15:G16`; `%` em `06_KPIS!J5:K32` e `01_PAINEL!B9`, `14_ROI_HUB!F17:G17`.
5. **Encoding:** `Σ × ≥ ≤ →` e acentos pt-BR intactos em `06_KPIS!E5` etc.
6. **Backup:** `*.bak.*.xlsx` presente e com timestamp.

---

## 7) Entregáveis e execução

- **Script:** `scripts/fix_planilha_tecnica_xlsx.py` (openpyxl, ~250 linhas, idempotente — rodar 2× produz mesmo resultado).
- **Log:** `fix_planilha_tecnica_xlsx.log` com antes/depois por aba (linhas, colunas, células alteradas).
- **Backup:** `Planilha_Tecnica_Desenvolvimento_HUB.bak.YYYY-MM-DD_HHMM.xlsx`.
- **XLSX corrigido:** `Planilha_Tecnica_Desenvolvimento_HUB.xlsx` (sobrescreve no mesmo path).
- **Validação:** `Planilha_Tecnica_Desenvolvimento_HUB_validacao_pos_fix.md` (gerado automaticamente, mesmo formato do `validacao.md` existente).

**Ordem de execução (estimativa 2–3h):**
1. Aprovar este plano (você).
2. Gerar script + rodar em cópia local (dry-run com diff impresso, sem salvar).
3. Revisar diff linha-a-linha com você (especialmente `06_KPIS` financeiros e `14_ROI_HUB` Atribuição).
4. Salvar xlsx corrigido + gerar `validacao_pos_fix.md`.
5. Commit/push se o diretório estiver versionado.

---

## 8) Próximos passos

- [ ] **Aprovar** este plano ou pedir ajustes (ex.: manter `Sprint` preenchido se já houver dados reais).
- [ ] Confirmar que `Correspondência 12→8` **não** deve ir para o xlsx.
- [ ] Autorizar execução do script. Após aprovação, a implementação é mecânica — sem decisões de conteúdo adicionais.

> Quando aprovado, digo `implementar` e executo exatamente os passos acima, com verificação ponta-a-ponta via re-extração e abertura do xlsx corrigido.
