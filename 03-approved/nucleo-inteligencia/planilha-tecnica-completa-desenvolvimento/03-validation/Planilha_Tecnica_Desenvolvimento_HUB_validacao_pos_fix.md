---
title: Nota de Auditoria — Validação pós-correção XLSX a partir do MD
tipo: auditoria de correção
idioma: pt-BR
data_validacao: 2026-09-03
arquivo_origem: Planilha_Tecnica_Desenvolvimento_HUB.md (canônico)
arquivo_destino: Planilha_Tecnica_Desenvolvimento_HUB.xlsx (corrigido)
status: aprovado
script: fix_xlsx.py
backup: Planilha_Tecnica_Desenvolvimento_HUB.bak.2026-09-02_2208.xlsx
tags:
  - hub
  - auditoria
  - validacao
  - planilha
  - pos-fix
---

# Nota de Auditoria — Validação pós-correção XLSX

## Resultado

**Aprovado — 0 divergências entre o MD canônico e o XLSX corrigido.**

Correção executada conforme [PLANO_FIX_XLSX_a_partir_MD.md](./PLANO_FIX_XLSX_a_partir_MD.md) via `fix_xlsx.py` (openpyxl, preservação de estilos e fórmulas).

## Arquivos auditados

- [MD canônico](./Planilha_Tecnica_Desenvolvimento_HUB.md) — 15 abas, 185 linhas
- [XLSX corrigido](./Planilha_Tecnica_Desenvolvimento_HUB.xlsx) — 15 abas, 185 linhas
- [Backup pré-fix](./Planilha_Tecnica_Desenvolvimento_HUB.bak.2026-09-02_2208.xlsx)

## Correções aplicadas

| Aba | Ação |
|---|---|
| `03_PERFIS` | +1 linha `PER-13` (Parceiro/Especialista/Mentor) |
| `04_FONTES_DADOS` | 4 células: `SRC-01` Campos-chave completo, `SRC-05/06/07` chaves com `centro de custo` e `stakeholder_ids` |
| `05_DICIONARIO` | 3 células: `FLD-002` Validação, `FLD-022/023` Descrição (`Valor gerado`) |
| `06_KPIS` | +12 linhas `KPI-FIN-03` a `FIN-14` + correção `KPI-ALO-02` (`Receita disponível`) + 12 unidades `R$` restauradas |
| `07_RELACOES` | +1 coluna `Nível de evidência (Espec. 5.1)` +3 linhas `REL-10/11/12` |
| `08_INTEGRACOES` | 2 células: `INT-07` Campos mínimos e Status `Governado` |
| `12_BACKLOG` | +1 coluna `Roadmap Espec. (cap.18)` +2 linhas `BL-021/022` |
| `14_ROI_HUB` | +1 coluna `Atribuição` + renomeio `Valor gerado validado` + 8 linhas realinhadas + fórmulas reescritas `F15/G15/F16/G16/F17/G17` |
| `01_PAINEL` | fórmulas `B7`→`$O$5:$O$200`, `B8`→`$K$5:$K$200` ajustadas ao novo layout |
| `00_LEIA-ME`, `02_MODULOS`, `09_REGRAS_ALERTAS`, `10_TELAS_OUTPUTS`, `11_SEGURANCA_LGPD`, `13_PILOTO_MONKS` | sem alteração estrutural — validados |

## Verificações

| Verificação | Resultado |
|---|---|
| Quantidade de abas | 15 — conferente |
| Linhas tabulares | 185 — conferente |
| Cabeçalhos (todas as abas) | 15/15 conferentes |
| Dados célula-a-célula (excluindo tabela editorial `Correspondência 12→8` do MD) | 0 divergências |
| Células `R$` / `%` (formato numérico) | `R$ #,##0` e `0.0%` conferentes |
| Unidades `R$` / `R$/FTE` / `%` / `Dias` / `0–100` | preservadas como texto |
| Fórmulas `01_PAINEL` | `B6=COUNTA(A)`, `B7=COUNTIF(O,Concluído)`, `B8=COUNTIF(K,Crítica)`, `B9=IF(B6...)` — OK |
| Fórmulas `14_ROI_HUB` | `F15/G15/F16/G16` SUMIF Custo/Benefício, `F17/G17` ROI — OK, sem `#REF!` |
| Merges `00_LEIA-ME`, `01_PAINEL`, `14_ROI_HUB` | preservados/ajustados (`A1:I1`, `A2:I2`, `A14:C14`) |
| Larguras de coluna | restauradas (ex.: `12_BACKLOG:P=38`, `07_RELACOES:L=24/M=18`) |
| Estilos header `FFF36C21` bold branco | conferente linha 4 |
| Caracteres `Σ × ≥ ≤ →` e acentos pt-BR | preservados |
| Backup | presente |

## Procedimento

1. Backup com timestamp.
2. Parse do MD por regex de pipes (mesmo extrator da validação original).
3. `openpyxl` com `data_only=False` — reescrita de `header (linha 4)` + `dados (linha 5+)` por aba, preservando `fill/font/alignment/border/number_format` e `column_dimensions`/`row_dimensions`.
4. Tratamento especial `14_ROI_HUB` (coluna `Atribuição` + resumo com fórmulas).
5. Correção de `01_PAINEL` fórmulas após inserção de coluna em `12_BACKLOG`.
6. Patch de unidades `R$` na coluna `Unidade` de `06_KPIS`.
7. Revalidação célula-a-célula (mesma lógica da validação original, com `to_number_and_format` para `R$`/`%`).

## Conclusão

Em 2026-09-03, o `Planilha_Tecnica_Desenvolvimento_HUB.xlsx` foi alinhado 100% ao `Planilha_Tecnica_Desenvolvimento_HUB.md`. O XLSX é novamente a representação fiel e editável da especificação — pronto para uso no desenvolvimento e no piloto Monks.

## Histórico de aprovação

- **Data:** 2026-09-05
- **Gate:** decisão direta do usuário (teste do ritual; revisão manual prévia pelo usuário; promoção direta registrada)
- **Decisão:** promovido de `05-resources/inbox/Plataforma HUB/` para `03-approved/` como final compartilhável.
- **Ref:** `00-project-control/registro-mudancas/2026-09-05-gate-planilhas-mestras.md`
