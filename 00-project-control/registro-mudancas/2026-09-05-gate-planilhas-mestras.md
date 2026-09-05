---
title: "Registro de Gate — Planilhas Mestras (especificação + técnica + análises)"
date: 2026-09-05
type: gate
status: aprovado
tags:
  - projeto/gate
  - projeto/gestao
related_notes: []
author:
  - PF Rezende
gate: decisão direta do usuário (teste do ritual; bypass de `02-review/` registrado e aceito)
---

# Registro de Gate — Planilhas Mestras

> [!info] Decisão
> - **Data:** 2026-09-05
> - **Gate:** usuário (dono do projeto) — revisão manual prévia pelo usuário; este registro formaliza a promoção.
> - **Rota:** `05-resources/inbox/Plataforma HUB/` → `03-approved/` direto (revisão já realizada, sem passagem por `02-review/`).
> - **Resultado:** aprovado.
> - **Pós-gate (mesmo dia):** as três pastas reagrupadas em `03-approved/nucleo-inteligencia/` (nome escolhido pelo usuário).

## Arquivos promovidos

| Destino em `03-approved/nucleo-inteligencia/` | Arquivos | Formatos |
|---|---|---|
| `nucleo-inteligencia/especificacao-conceitual-inteligência-plataforma/` | Especificação-mestra v1.0 | `.md` + `.docx` (mesmo conteúdo) |
| `nucleo-inteligencia/planilha-tecnica-completa-desenvolvimento/01-source/` | Planilha canônica | `.md` + `.xlsx` |
| `nucleo-inteligencia/planilha-tecnica-completa-desenvolvimento/02-planning/` | Plano de correção XLSX | `.md` |
| `nucleo-inteligencia/planilha-tecnica-completa-desenvolvimento/03-validation/` | Validação + validação pós-fix | `.md` + `.md` |
| `nucleo-inteligencia/analises-processadas/` | Matriz de convergência + 2 relatórios | `.md` × 3 |

> **Nota (mesmo dia):** destinos renomeados pelo usuário no Drive e clonados para cá — `especificacao-mestra/` →
> `especificacao-conceitual-inteligência-plataforma/`, `planilha-tecnica/` → `planilha-tecnica-completa-desenvolvimento/`,
> `cenarios/` → `Matriz de Oferta e Comprador - Cenários/cenarios/`, `documentos-oficiais/` (reserva vazia) removido.

Todos os `.md` carimbados `status: aprovado` + bloco `## Histórico de aprovação`.
Binários (`.docx`, `.xlsx`) cobertos por este registro + READMEs das pastas.

## Arquivo desviado (não aprovado)

- `04-backups/Planilha_Tecnica_Desenvolvimento_HUB.bak.2026-09-02_2208.xlsx` → `99-archive/backups/planilha-tecnica/04-backups/`.
  Backup nunca entra em `03-approved/`, conforme mapeamento aprovado.
