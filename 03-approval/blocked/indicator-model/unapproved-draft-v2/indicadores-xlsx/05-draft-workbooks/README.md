# Workbook de Rascunho Não Aprovado

`HUB_Mapa_Inteligencia_Dados_Indicadores_UNAPPROVED_DRAFT_v0.xlsx` é um rascunho de inspeção em quarentena gerado a partir da camada atual de CSV corrigido enquanto o portão de aprovação da Fase 6 permanece rejeitado.

## Status explícito

- **Status:** RASCUNHO NÃO APROVADO — NÃO PUBLICAR
- **Propósito:** inspecionar o conteúdo atual do CSV corrigido em forma de workbook
- **Origem:** `run-02-execution/30-models/indicadores-xlsx/03-corrected-csv/`
- **Workbook original:** permanece intocado sob `run-01-source/`
- **Aprovação:** rejeitada; Fase 6 e Fase 6R permanecem bloqueadas
- **Publicação:** este arquivo não deve substituir, sobrescrever ou ser apresentado como o workbook final reconstruído

## Verificação

- 15 abas de CSV corrigido carregadas, mais `00_DRAFT_NOTICE`
- `officecli view ... outline` reporta todas as 16 abas com abas de dados populadas
- `officecli view ... issues` reporta 0 problemas
- `officecli validate` passa sem erros
- Consultas de erro de fórmula para `#REF!`, `#DIV/0!`, `#VALUE!`, `#NAME?` e `#N/A` não retornam resultados
- A pré-visualização HTML contém 16 abas, 0 abas vazias e nenhum token `###` ou placeholder
- As fórmulas de ROI retêm valores em cache da camada do workbook de CSV corrigido; isso não é evidência de aprovação
