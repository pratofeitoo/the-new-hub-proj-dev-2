---
title: Matriz Autorização & Tenancy — P02-T03 (rascunho)
task_id: P02-T03
phase: P02
status: rascunho
gap_id: PRD-003
created: 2026-08-29
tags:
  - refinement
  - P02
---

# Matriz Autorização & Tenancy — rascunho para revisão Segurança + Governança

> **Status:** rascunho P02-T03 · **G02.3**. Não constitui aprovação. Revisão conjunta por Segurança e Governança requerida antes de promover para `03-approval`.

## 1. Dimensões
`ator × papel × tenant × permissão × visibilidade de dados × comportamento de dado esperado`

- **Tenant:** `platform` (operador HUB), `client` (empresa/instituição), `program` (workspace do cliente), `recognition` (workspace segregado Selo)
- **White-label:** apresentação/terminologia pode variar por tenant, mas não remove evidência, trilha de auditoria, finalidade, consentimento ou independência do Selo.

## 2. Matriz (mínimo G02.3)

| Ator / Papel | Tenant escopo | Permissão | Visibilidade de dados | Comportamento de dado esperado |
|---|---|---|---|---|
| Administrador Plataforma | platform | criar/gerenciar tenants, impersonate com aprovação, gerenciar integrações | metadados + diagnósticos suporte; sem conteúdo sensível por padrão | registra motivo, aprovação, timestamp, escopo e expiração; não aprova reconhecimento |
| Administrador Tenant | client | gerenciar membros, políticas, programas, configuração local | registros do tenant; agregados do workspace por finalidade | não cruza tenants; não sobrepõe decisão independente |
| Patrocinador Executivo | client/program | visualizar dashboards aprovados, decisões, riscos | agregados ou limitados por finalidade; sem dado pessoal desnecessário | decide investimento; recebe apenas mínimo necessário |
| Responsável Jornada / Implementador | client/program | criar/gerenciar planos, tarefas, marcos, acompanhamentos | casos atribuídos + evidências mínimas | responsável por status/qualidade; não certifica impacto sem revisão |
| Analista / Avaliador | client/program | revisar evidências, executar análises aprovadas | evidências do caso/coorte atribuído; campos sensíveis mascarados | saída reproduzível/com explicabilidade; alto impacto exige 2º nível |
| Curador / Revisor Matches | client/program | comparar candidatos, registrar justificativa/conflitos | perfis candidatos + restrições relevantes | accountability humana; recusa reversível |
| Participante / Aprendiz | client/program | enviar perfil/evidências/consentimento/metas/feedback | próprios registros + info explicitamente compartilhada | controla consentimento/exatidão |
| Fornecedor / Especialista | client/program | manter perfil aprovado, responder oportunidades atribuídas | próprio perfil + solicitações atribuídas + relacionamentos aceitos | submissão verídica; sem diagnóstico de cliente |
| Operador Suporte | platform/client | triar tickets, inspecionar auditoria mínima, executar correções aprovadas | mínimo necessário do caso; sensível restrito | não altera decisão nem suprime auditoria |
| Revisor Governança/Privacidade/Jurídico | platform/client | revisar acessos/consentimentos/incidentes/alegações | completo apenas quando justificado, registrado, temporário | aprova controles; preserva independência comercial |
| Avaliador Selo / Governança | recognition | revisar elegibilidade/evidências, conceder/retirar reconhecimento | apenas caso de reconhecimento, com controle conflito | decide; declara impedimento; mantém trilha |

## 3. Princípios (negação por padrão, menor privilégio, finalidade, separação funções, isolamento tenant, auditabilidade, reversibilidade)

- Acesso começa negado; concessão por papel+tenant+workspace+relacionamento+finalidade+tempo.
- Campos mínimos, agregação/mascaramento sempre que possível.
- Base legal/consentimento acompanha dado em recomendações, matches, medições, reconhecimento.
- Submeter ≠ revisar ≠ aprovar ≠ avaliar ≠ publicar para alto impacto.
- Busca/export/notificação/cache cumprem fronteira tenant, inclusive indireto.
- Exclusão/correção/acesso/override/publicação/retirada = eventos append-only; derivados reavaliados.

## 4. White-label

- Permitido: logo, cores, terminologia, idioma, campos opcionais do tenant.
- Proibido remover: evidência, auditabilidade, finalidade, retenção, Selo independente, avisos privacidade.

## 5. Pendências para G02.3

- [ ] Validar com Segurança: teste de penetração por tenant, exportação entre tenants, impersonation.
- [ ] Validar com Governança/LGPD: base legal por fluxo, retenção, DSAR, transferência.
- [ ] Anexar evidência: matriz assinada por Segurança+Governança antes do gate.

## 6. Rastreabilidade

- Tarefa: [[04-project-management/tarefas/P02-T03_Matriz_Autorizacao_Tenancy|P02-T03]]
- Blueprint: [[01-blueprint/produto/HUB_Blueprint_Produto_e_Capacidades#2. Atores, papéis, tenants, entidades, permissões e visibilidade de dados|BP-002 §2]]
- Gap: [[00-project-control/registro-lacunas/lacunas/PRD-003]]
