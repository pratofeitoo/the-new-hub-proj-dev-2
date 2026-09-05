---
title: "Fronteiras Lifecycle — o que foi feito e como manter"
date: 2026-09-05
type: registro-mudanca
status: aprovado
tags:
  - projeto/registro-mudanca
  - projeto/gestao
  - lifecycle
related_notes:
  - "[[00-project-control/registro-mudancas/2026-09-05-reestruturacao-fronteiras-lifecycle|Reestruturação Fronteiras Lifecycle]]"
author:
  - PF Rezende
commits:
  - 6b59711
---

# Fronteiras Lifecycle — o que foi feito e como manter

> [!info] Identificação
> - **Data:** 2026-09-05
> - **Tipo:** estrutural + governança permanente
> - **Origem:** sessão de investigação → contrato → mapeamento → plano → execução (todos aprovados pelo usuário antes de cada etapa)
> - **Registro-irmão (detalhe técnico):** [[00-project-control/registro-mudancas/2026-09-05-reestruturacao-fronteiras-lifecycle|2026-09-05-reestruturacao-fronteiras-lifecycle]] + censos `2026-09-05-lifecycle-census-*`
> - **Branch:** `restructure/lifecycle-borders` (mergeado em `main` @ `6b59711`, push executado). **Tag de rollback:** `pre-lifecycle-2026-09-05`

## 1. Resumo do que foi feito nesta sessão

Vault único no iCloud como fonte de verdade, organizado por **fronteiras de lifecycle** (a pasta = nível de confiança),
com o Google Drive como espelho somente-leitura de `03-approved/`:

| Antes | Depois |
|---|---|
| `01-blueprint/` (rascunhos + consolidações misturados) | `01-work/<domínio>/` (tudo `rascunho`/`em-elaboracao`) |
| `02-refinement/` (rascunho chamado de "em revisão") | `01-work/` (P03 segue `rascunho`); mapas de documentos → `01-work/documentos-oficiais/_controle/` |
| `03-approval/` + `06-deliverables/` (vazio) | `02-review/` (pacotes + bloqueado) e `03-approved/cenarios/` (P01-S01…S06 assinados) |
| `05-resources/Processar/` | `05-resources/inbox/`; CSVs-fonte → `05-resources/fontes/` |
| Original `primeiro-rascunho-projeto/` em `01-blueprint/` | `99-archive/origens/` + ponteiro (depois removido com os stubs) |
| Drive: 4 raízes paralelas (`Obsidian Inventory/`, `Reviewed and Approved Files/`, `Documentações Oficiais/`, `_SYSTEM/`) | Drive: só `03-approved/` + `README-DRIVE-MIRROR.md` + `_SYSTEM/` |
| 141 arquivos com links para paths antigos | Sweep completo; zero refs fora de histórico/arquivo |
| `status:` em ~20 variantes | Normalizado por fronteira (exceção documentada: `documentos-oficiais/`) |

## 2. As fronteiras (contrato permanente)

| Pasta | Status permitido | Pode editar? | Pode compartilhar como final? |
|---|---|---|---|
| `01-work/` | `rascunho` \| `em-elaboracao` | Sim, livremente | Nunca |
| `02-review/` | `em-revisao` | Não (só comentários/decisão) | Nunca |
| `03-approved/` | `aprovado` | Nunca no lugar | Sim — é o único compartilhável |
| `99-archive/` | `superado` \| `rejeitado` \| `descontinuado` | Não | Não |

## 3. Instruções para manter (ler antes de cada promoção)

1. **Arquivo novo nasce em `01-work/`** com `status: rascunho`. Sem exceção.
2. **Promoção = `git mv` + carimbo + registro.** Congelar → mover para `02-review/` (ou `03-approved/` após gate) → atualizar `status:` → anexar bloco `## Histórico de aprovação` (data, gate, aprovador, commit).
3. **Aprovado nunca é editado no lugar.** Mudança em aprovado = nova versão em `01-work/` → `02-review/` → nova aprovação.
4. **Gate rejeitou/bloqueou** → volta para `01-work/` (ou `02-review/bloqueado/` com motivo). Bloqueado nunca entra em `03-approved/`.
5. **Obsoleto** → `99-archive/` com motivo. Não delete história; arquive.
6. **Drive é exporto.** Nunca autore no Drive, nunca copie à mão: atualize `03-approved/` no iCloud e re-espelhe com paths idênticos (`cp` + `diff -rq` para conferir). O `README-DRIVE-MIRROR.md` documenta a data do exporto.
7. **`01-work/documentos-oficiais/` não é oficial.** É o shell aspiracional (bloqueador GOV-001). Cada arquivo só sai de lá com evidência legal individual (assinatura/registro/validade) via `02-review/`. Exceção de vocabulário: usa `hipotese|...` herdado, sempre abaixo de aprovado.
8. **`layer:` não é lifecycle.** `cross-cutting/governance/refining/blueprint/approval` descrevem papel do conteúdo ou camada-alvo de tarefas — não normalizar em massa (auditoria 2026-09-05).
9. **Mudança estrutural segue o rito desta sessão:** investigar → contrato de 1 página → mapeamento old→new → plano → aprovar cada etapa antes de executar. Nunca reestruturar "de uma vez" sem registro aqui em `registro-mudancas/`.
10. **Todo move grande usa `git mv`** (preserva `git log --follow`), branch dedicada + tag de backup, e atualiza `README.md` + `project-map.md` na mesma entrega.

## 4. Verificação rápida (qualquer sessão)

```bash
# 1. Nenhum status fora da fronteira (exceto documentos-oficiais/ e histórico)
grep -rh "^status:" 01-work --include="*.md" | grep -v "01-work/documentos-oficiais" | sort | uniq -c
grep -rh "^status:" 03-approved --include="*.md" | sort | uniq -c   # esperado: só "aprovado"
# 2. Nenhum link para paths aposentados
grep -rln "01-blueprint/\|02-refinement/\|03-approval/\|05-resources/Processar\|06-deliverables/" --include="*.md" . | grep -v "^\./99-archive/" | grep -v registro-mudancas
# 3. Espelho Drive idêntico
diff -rq 03-approved "<Drive>/THE NEW HUB/03-approved"
```

## 5. Rollback

- iCloud: `git reset --hard pre-lifecycle-2026-09-05` (ou qualquer tag de backup da mudança).
- Drive: lixeira do Google Drive (≤30 dias) + re-espelho a partir do iCloud.
