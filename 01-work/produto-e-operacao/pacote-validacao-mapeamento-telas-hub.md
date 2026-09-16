---
title: Pacote de Validação do Mapeamento de Telas HUB
description: Roteiro provisório para validar acessos, alertas, ROI, navegação e aprovação antes da Fase 3.
tags:
  - hub
  - produto
  - validação
  - wireframes
status: plano-provisorio
---

# Pacote de Validação do Mapeamento de Telas HUB

> **Fronteira:** `01-work/` — material provisório para revisão. Este pacote não aprova o plano nem transforma metas, thresholds ou regras de governança em decisões definitivas.

## Objetivo e critério de saída

Consolidar as validações necessárias antes da Fase 3 do [Plano de Mapeamento das Telas da Plataforma HUB](../plano-mapeamento-telas-plataforma-hub.md). O pacote estará pronto para promoção quando cada decisão abaixo tiver responsável, evidência, data e resultado registrado, e quando as divergências estiverem encaminhadas para [02-review/](../../02-review/).

Fontes de referência: [Planilha Técnica de Desenvolvimento HUB](../../03-approved/nucleo-inteligencia/planilha-tecnica-completa-desenvolvimento/01-source/Planilha_Tecnica_Desenvolvimento_HUB.md), [Matriz de autorização e tenancy](./refinamento-produto/matriz-autorizacao-tenancy.md) e [RACI de Produto](./refinamento-produto/RACI_v1.md).

## 1. Segurança/LGPD + Admin

**Responsáveis pela validação:** Segurança/LGPD e Admin. **Artefato de entrada:** matriz RBAC/ABAC proposta no plano e matriz de autorização/tenancy.

- [x] Adotar, como baseline provisório, isolamento obrigatório por `tenant_id` e comportamento deny-by-default.
- [x] Adotar, como baseline provisório, que Gestor só acessa a própria hierarquia e que Colaborador acessa apenas os próprios dados e o contexto agregado permitido.
- [x] Adotar a classificação provisória de campos de pessoas, performance e finanças como visíveis, agregados, mascarados ou bloqueados por perfil.
- [x] Adotar, como baseline provisório, que impersonate, acesso de suporte e alterações de permissão exigem motivo, escopo, aprovação quando aplicável, timestamp, expiração e audit log.
- [x] Adotar, como baseline provisório, finalidade explícita, consentimento/base legal por fluxo, contestação e explicação de ausência de dados.

### Baseline provisório adotado para prosseguir

Este baseline é suficiente para desenhar e testar os wireframes. Ele não autoriza dados reais, publicação em produção, promoção para `03-approved` nem dispensa a validação posterior.

| Tema | Decisão padrão provisória | Aplicação no wireframe |
|---|---|---|
| Acesso | Deny-by-default; concessão por papel + tenant + workspace + relacionamento + finalidade + tempo | Ocultar destinos sem permissão e exibir estado de acesso negado sem revelar dados |
| Tenant | Todo recurso e toda consulta carregam `tenant_id`; consultas cross-tenant são bloqueadas por padrão | Exibir tenant/organização no contexto e impedir troca implícita de escopo |
| Hierarquia | Gestor vê apenas a própria hierarquia; Executivo recebe agregados; Colaborador vê apenas dados próprios | Drill-down individual exige escopo autorizado e registra a leitura |
| Dados sensíveis | FLD-005/006/007/028 ficam bloqueados sem consentimento/base legal válidos; demais campos usam minimização e mascaramento | Mostrar “dado restrito” + motivo/política, nunca valor parcial especulativo |
| Financeiro | Receita, custo, margem e valor realizado ficam restritos a Financeiro/Diretoria; Sponsor vê o mínimo necessário para decisão | Separar valor estimado de valor validado e exigir evidência antes de publicar realização |
| Impersonate/suporte | Permitido somente com aprovação, motivo, escopo limitado, início, expiração e auditoria; nunca altera decisão nem apaga logs | Fluxo com confirmação explícita, banner de impersonate e saída imediata |
| Consentimento | `consent_id + purpose + legal_basis` acompanham o dado; revogação bloqueia leitura de derivados em até 5 minutos | Exibir finalidade, estado do consentimento e ação de contestar/corrigir |
| Retenção/DSAR | Até política formal: conservar apenas o mínimo necessário, aplicar retenção por entidade, legal hold quando exigido e anonimizar ao expirar; DSAR abre solicitação auditável | Tela de privacidade mostra finalidade, retenção, exportação/correção e status da solicitação |
| Auditoria | Leitura sensível, exportação, alteração de permissão, decisão, override e reprocessamento geram evento append-only | Incluir ator, ação, objeto, tenant, motivo, timestamp, origem e resultado |

### Status do baseline

**Decisão provisória:** aprovado para avançar com a especificação e os wireframes.  
**Condição:** usar somente fixtures sintéticos e executar SEC-01..SEC-08 antes de qualquer piloto com dados autorizados.  
**Validação final:** pendente de Segurança/LGPD, Admin, DPO/Governança e evidências de teste.

### Fechamento provisório dos gates restantes

Para permitir o avanço do trabalho de interface, os gates restantes ficam definidos pelo padrão abaixo. Este fechamento resolve a decisão documental e o plano de verificação; não simula execução de pentest nem substitui assinatura institucional.

| Gate | Decisão padrão para prosseguir | Evidência mínima | Estado |
|---|---|---|---|
| Validação institucional | Usar o baseline desta seção como referência obrigatória para wireframes e revisão; Segurança/LGPD, Admin e Governança ratificam posteriormente | Registro de revisão e aprovadores institucionais | Resolvido provisoriamente |
| Pentest / tenant escape | Não liberar dados reais; executar SEC-01, SEC-02, SEC-04, SEC-05, SEC-06, SEC-07 e SEC-08 em ambiente de teste antes do piloto | Relatório com casos, evidência de request/response, cobertura e zero vazamento cross-tenant | Plano definido; execução pendente |
| Retenção / DSAR | Aplicar minimização, retenção por entidade, legal hold quando necessário e anonimização após expiração; DSAR auditável | Tabela de retenção por entidade + fluxo DSAR testado | Baseline provisório |
| Produção | Manter bloqueada até matriz assinada, testes SEC aprovados, revisão de retenção/DSAR e aprovação formal | Checklist de release com sign-off de Segurança, DPO/Governança, Admin, Produto e Sponsor | Não autorizado |

**Decisão de continuidade:** o projeto pode avançar para a especificação e os wireframes com fixtures sintéticos. O piloto com dados autorizados e qualquer publicação em produção permanecem condicionados às evidências acima.

### Resultado da revisão documental

A revisão confirma que o desenho deve adotar deny-by-default, isolamento por tenant, menor privilégio, finalidade explícita, separação de funções e auditabilidade. A fonte técnica também exige bloqueio de leitura de dados sensíveis sem `consent_id + purpose + legal_basis` válido, propagação de revogação para derivados em até cinco minutos e log imutável de leituras sensíveis, alterações e decisões. Esses requisitos permanecem critérios de aceite; não são evidência de que a implementação já os cumpre. [Fonte técnica, Segurança e LGPD](../../03-approved/nucleo-inteligencia/planilha-tecnica-completa-desenvolvimento/01-source/Planilha_Tecnica_Desenvolvimento_HUB.md#11--segurança-e-lgpd--governança).

### Casos mínimos de teste para a validação

| ID | Cenário | Resultado esperado |
|---|---|---|
| SEC-01 | Usuário do tenant A consulta recurso do tenant B | `403` ou resposta indistinguível de inexistente; nenhum dado de B retorna |
| SEC-02 | Gestor consulta pessoa fora de sua hierarquia | acesso negado; tentativa registrada |
| SEC-03 | Colaborador consulta dados individuais de terceiro | acesso negado; dados agregados só aparecem se finalidade permitir |
| SEC-04 | Leitura de campo sensível sem consentimento/base legal válidos | leitura bloqueada; evento de política registrado |
| SEC-05 | Revogação de consentimento | derivados deixam de ser legíveis em até 5 minutos; propagação auditável |
| SEC-06 | Administrador solicita impersonate | exige aprovação, motivo, escopo, timestamp e expiração; não concede aprovação de reconhecimento |
| SEC-07 | Operador de suporte tenta alterar decisão ou apagar auditoria | operação negada; log permanece imutável |
| SEC-08 | Exportação, busca, notificação ou cache cruza fronteira de tenant | filtragem por tenant e perfil preservada em todos os canais |

**Achados que impedem o aceite final:** não há matriz final assinada, evidência de pentest/tenant escape, definição institucional de base legal por fluxo, política formal de retenção/DSAR nem teste de propagação anexados ao material revisado. O baseline e o plano de verificação estão resolvidos provisoriamente; a evidência de execução e a assinatura final continuam pendentes.

**Evidência exigida para aceite final:** matriz aprovada + casos de teste de acesso por tenant, hierarquia, perfil e sensibilidade. **Evidência substituta para prosseguir agora:** baseline acima + fixtures sintéticos + plano SEC-01..SEC-08.

**Decisão:** baseline provisório adotado para prosseguir; validação final pendente.  
**Data / aprovadores:** 2026-09-16 / Codex, como proposta técnica; aprovação institucional pendente.

## 2. Piloto Monks — alertas, thresholds e metas

**Responsáveis pela validação:** Gestor HUB, Produto/Dados e piloto Monks. A fonte técnica mantém `ALT-01`, `ALT-02`, `ALT-03`, `ALT-06`, `ALT-07` e `ALT-08` como propostos para validação, enquanto `ALT-04` e `ALT-05` permanecem no MVP. [Fonte técnica, regras de alerta](../../03-approved/nucleo-inteligencia/planilha-tecnica-completa-desenvolvimento/01-source/Planilha_Tecnica_Desenvolvimento_HUB.md#9--regras-de-alerta).

### Recorte recomendado para a primeira rodada

- `ALT-01` — queda persistente;
- `ALT-02` — risco por ociosidade;
- `ALT-03` — margem em risco;
- `ALT-04` — meta mal definida;
- `ALT-05` — possível viés.

### Decisões a confirmar

- [ ] Confirmar o recorte de cinco alertas e justificar qualquer troca.
- [ ] Validar regra, período, severidade, confiança, responsáveis, SLA, escalação e supressão de cada alerta.
- [ ] Confirmar thresholds e metas ilustrativas como valores de teste, sem tratá-los como metas aprovadas.
- [ ] Confirmar amostras/fontes disponíveis e o padrão para pedir contexto sem inferir causa.

**Evidência exigida:** tabela de alertas validada + amostras sintéticas ou autorizadas + responsáveis e SLAs registrados.

**Decisão:** _a preencher_  
**Data / aprovadores:** _a preencher_

## 3. Financeiro + Sponsor — ROI e aprovação financeira

**Responsáveis pela validação:** Financeiro e Sponsor. O fluxo deve separar valor estimado de valor realizado validado, exigir evidência financeira e manter o ledger deduplicado; sem baseline do piloto, o ROI permanece zero/ilustrativo. [Fonte técnica, ROI HUB](../../03-approved/nucleo-inteligencia/planilha-tecnica-completa-desenvolvimento/01-source/Planilha_Tecnica_Desenvolvimento_HUB.md#14--roi-hub).

- [ ] Confirmar estados `Potencial → Influenciado → Validado → Realizado`.
- [ ] Confirmar evidência mínima para cada benefício e quem pode anexar, revisar, rejeitar e corrigir.
- [ ] Confirmar a regra de dupla aprovação para KPI/benefício financeiro e os perfis dos dois aprovadores.
- [ ] Confirmar deduplicação por beneficiário, alavanca, período e intervenção, sem dupla contagem.
- [ ] Confirmar o que Sponsor aprova no Cockpit e o que Financeiro valida no fluxo de ROI.

**Evidência exigida:** fluxo validado ponta a ponta + exemplo de benefício estimado e validado + regra de aprovação registrada.

**Decisão:** _a preencher_  
**Data / aprovadores:** _a preencher_

## 4. Produto — navegação e escopo de wireframes

**Responsável pela validação:** Produto, com participação de Design e Gestor HUB.

- [ ] Confirmar a ordem e os rótulos da navegação primária: Cockpit, Gestão, Minha jornada, KPIs, Alertas, ROI e Dados.
- [ ] Confirmar o recorte de detalhes da primeira rodada: KPI/drivers/simulador; alerta/ação/decisão; benefício/evidência/validação; fonte/job/rejeição/reprocessamento.
- [ ] Confirmar que telas de cliente, equipe, pessoa, meta, capacidade, feedback, skills, contestação e administração ficam fora da primeira rodada.
- [ ] Confirmar que rotas globais e estados de acesso negado, sessão expirada, vazio, erro e auditoria permanecem representados.

**Evidência exigida:** sitemap/rotas revisados + lista final de wireframes WF-01..WF-07 + divergências registradas.

**Decisão:** _a preencher_  
**Data / aprovadores:** _a preencher_

## 5. Aprovação e promoção

- [x] Consolidar o baseline provisório e as divergências conhecidas das quatro frentes.
- [ ] Atualizar o [plano de mapeamento](../plano-mapeamento-telas-plataforma-hub.md), mantendo como pendentes as decisões sem evidência.
- [x] Registrar autorização provisória para iniciar a especificação de interface, limitada a wireframes com dados sintéticos.
- [ ] Se aprovado, criar o material de revisão em [02-review/](../../02-review/) e preservar este pacote em `01-work/` como registro de elaboração.

**Resultado:** baseline provisório pronto para iniciar wireframes; promoção formal ainda não realizada.  
**Aprovadores:** Codex, como proposta técnica; Produto, Segurança/LGPD, Admin e Governança ainda devem ratificar.  
**Data:** 2026-09-16

## Próxima ação operacional

Iniciar pela revisão de Segurança/LGPD + Admin, porque suas decisões definem o que pode aparecer nas demais telas. Em seguida, executar a sessão do piloto Monks, validar ROI com Financeiro/Sponsor e fechar a revisão de Produto. A Fase 3 só deve começar após o registro das decisões e da aprovação correspondente.
