---
title: Arquitetura — Módulos HUB Core e Fronteiras de Dados
description: Seis módulos conceituais, estágios C.A.O.S., e separação HUB Negócios / Instituto / Plataforma.
type: architecture
status: current
source_paths:
  - 03-approved/reconciliacao-blueprint/HUB_Blueprint_Arquitetura_Tecnologica.md
  - 03-approved/nucleo-inteligencia/especificacao-conceitual-inteligencia-plataforma/Especificacao_Mestra_Inteligencia_HUB 3.md
verified_at: 2026-09-06
open_questions: Detalhamento físico dos módulos permanece sujeito a DAT-001/003 e gates P03.
---

# Arquitetura — Módulos HUB Core e Fronteiras de Dados

## Seis módulos conceituais

HUB Intelligence, Journey, Solutions, Connections, Academy, Recognition — com estágios C.A.O.S. (regras de promoção em `03-approved/reconciliacao-blueprint/`).

## Fronteiras

- **HUB Negócios:** serviços comerciais e implementação.
- **Instituto HUB:** impacto restrito/missionário, sujeito a separação.
- **Plataforma HUB:** software, dados, workflows compartilhados.
- **Marca HUB:** método e padrões.

Automação (roteamento, lembretes, validação) só após gate documentado: qualidade, reversibilidade, auditabilidade, LGPD, override humano.

## Sources

- [Blueprint — Arquitetura Tecnológica](04_HUB_Blueprint_Arquitetura_Tecnologica.md)
- [Especificação Mestra](../../03-approved/nucleo-inteligencia/especificacao-conceitual-inteligencia-plataforma/Especificacao_Mestra_Inteligencia_HUB%203.md)
