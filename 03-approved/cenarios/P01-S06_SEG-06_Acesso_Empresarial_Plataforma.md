---
title: P01-S06 — SEG-06 Acesso Empresarial à Plataforma
type: test-scenario
segment: SEG-06
source_task: "[[04-project-management/tarefas/P01-T02_Matriz_Oferta_Comprador_Capacidade]]"
status: aprovado
tags:
  - fase-P01
  - scenario
---

# P01-S06 — SEG-06 Acesso Empresarial à Plataforma

## Oferta escolhida

**Acesso empresarial à plataforma**, com uma etapa de implementação contratada separadamente (descoberta, configuração, migração e onboarding) e um serviço recorrente posterior de acesso e suporte dentro de limites de serviço definidos. A oferta é uma hipótese de teste para empresas e instituições compradoras; não é catálogo aprovado nem preço aprovado. O HUB Negócios seria responsável pela contratação comercial, enquanto a Plataforma HUB provisionaria e suportaria a infraestrutura, sujeito à definição jurídica e operacional das entidades.

## JTBD

Quando minha organização precisa coordenar inteligência, jornadas e conexões de um ecossistema em um ambiente controlado, quero contratar e colocar em operação uma plataforma configurada para nossos dados, papéis e fluxos, para que equipes autorizadas consigam tomar decisões e acompanhar execução com evidências rastreáveis — sem presumir ROI, impacto ou resultado financeiro específico.

## Persona/função compradora

Sponsor executivo, diretor(a) de Operações, Inovação ou Tecnologia, com autoridade para patrocinar a iniciativa e mobilizar orçamento de transformação digital, operações, inovação ou unidade de negócio. A pessoa que assina, a autoridade de procurement e a fonte real de orçamento ainda precisam ser nomeadas e confirmadas no teste.

## Usuário operacional

Líder de operações, transformação ou ecossistema indicado pelo cliente; administradores de tenant; equipes de procurement, RH, inovação ou relacionamento; e usuários convidados que consultam inteligência, registram jornadas, gerenciam soluções ou acompanham conexões. O cliente opera o uso cotidiano; a Plataforma HUB mantém provisionamento, suporte e controles técnicos acordados.

## Problema inicial

Informações de empresas, pessoas, fornecedores, oportunidades e iniciativas ficam distribuídas entre planilhas, CRM, ERP, sistemas de compras e ferramentas de colaboração. O comprador não dispõe de um fluxo único e governado para resolver identidades, configurar permissões, transformar sinais em ações e acompanhar evidências de implementação. Uma implantação sem limites claros também pode criar risco de dados, segurança, customização excessiva e suporte não sustentável.

## Fluxo C.A.O.S.

### Contexto

- Confirmar sponsor, função compradora, autoridade de contratação, tenant e pergunta de sucesso.
- Mapear atores, fontes de dados, integrações, finalidade, consentimento, restrições de LGPD, requisitos de segurança e processo de procurement.
- Registrar baseline operacional, dependências, riscos, limites de customização e hipótese de uso de módulos como HUB Intelligence, Journey, Solutions e Connections.
- Definir quais responsabilidades permanecem com o cliente, HUB Negócios, Plataforma HUB e parceiros técnicos.

### Arquitetura

- Desenhar estado-alvo do tenant, papéis e permissões, visibilidade entre organizações e fluxos de aprovação.
- Especificar escopo de implementação: configuração, migração ou carga inicial, integrações, treinamento e critérios de aceite.
- Separar obrigações de implementação das obrigações do acesso/serviço recorrente; documentar SLOs, suporte, atualizações, retenção, exportação e reversibilidade.
- Definir eventos e métricas de serviço, sem inventar schema ou prometer indicadores financeiros; validação técnica, jurídica, de dados e de segurança permanece necessária.

### Operação

- Provisionar ambiente e acessos conforme contrato, executar onboarding e orientar administradores e usuários operacionais.
- Configurar workflows e importar somente dados autorizados; registrar identidade, consentimento, tenant, ator, timestamp, versão e finalidade nos eventos aplicáveis.
- Operar inteligência de ecossistema e conexões com revisão humana quando necessário, registrando justificativas, aceites, recusas, overrides e escalonamentos.
- Acompanhar adoção por módulo, tickets, incidentes, qualidade de dados, marcos de implementação e uso efetivo, sem tratar atividade como tração.

### Sustentação

- Prestar suporte, monitorar disponibilidade e SLOs acordados, corrigir falhas e manter trilhas de auditoria.
- Revisar acessos, consentimentos, qualidade/atualidade dos dados, integrações, customizações e mudanças de escopo em cadência definida.
- Entregar relatório de uso e serviço com limitações, incidentes, ações corretivas e aprendizado; não converter métricas de uso em prova de valor financeiro.
- Avaliar continuidade ou encerramento com base em evidências do período, custo de suporte, aceitação do cliente e renovação contratada; renovação não é presumida.

## Parceiros necessários

- Provedor(es) de identidade, segurança, nuvem ou integração (por exemplo, SSO, CRM, ERP e procurement), a selecionar conforme ambiente real do comprador.
- Especialistas de dados e LGPD para mapeamento, minimização, bases legais, retenção, resolução de identidade e controles de acesso.
- Integradores ou fornecedores de implementação para migração, APIs, configuração e suporte especializado, se a capacidade interna não for suficiente.
- Parceiros de ecossistema, fornecedores e especialistas que possam alimentar Solutions/Connections, somente quando houver consentimento, escopo e responsabilidade definidos.

Todos os parceiros acima são hipóteses de capacidade; nenhum parceiro, canal, contrato ou evidência de demanda está confirmado.

## Entregáveis

- **Implementação (separada):** discovery brief; mapa de stakeholders e tenants; inventário de dados e integrações; matriz de papéis e permissões; arquitetura/configuração aprovada; plano de migração; configuração de workflows; materiais de treinamento; checklist de onboarding; critérios de aceite; registro de riscos, mudanças e evidências.
- **Serviço recorrente (separado):** acesso ao ambiente hospedado ou direito de uso conforme o contrato; suporte e gestão de tickets; monitoramento de disponibilidade e SLOs; manutenção/atualizações incluídas; relatórios de uso, qualidade e incidentes; revisões periódicas e plano de evolução dentro do limite de serviço.
- O que não estiver explicitamente no escopo — novas integrações, customizações, migrações adicionais, operação gerenciada ou trabalho de parceiros — deve ser tratado como mudança ou novo projeto, não como obrigação recorrente implícita.

## Custo e esforço estimados (hipóteses)

- **Implementação:** hipótese inicial de R$ 100 mil–R$ 500 mil por implantação, alinhada à faixa de teste de SEG-06. O esforço pode variar de diagnóstico e configuração enxutos a integração, migração e rollout multi-tenant; ainda não há estimativa de equipe, prazo ou margem validada.
- **Serviço recorrente de acesso:** hipótese inicial de R$ 20 mil–R$ 150 mil por mês para acesso e serviço contínuo, com denominador, módulos, usuários, suporte, SLOs e limites a definir. Esse intervalo não é tabela, cotação, preço aprovado, ARR, receita reconhecida ou compromisso de pagamento.
- O custo interno deve ser estimado separadamente para produto/plataforma, segurança, dados, onboarding, suporte, infraestrutura, parceiros e governança. Qualquer classificação, reconhecimento ou tratamento de receita depende de Finanças e do contrato efetivo.

## Evidência esperada de sucesso

- Um comprador real nomeia sponsor, autoridade de contratação, usuários operacionais, fonte de orçamento e problema prioritário; a entrevista é registrada com data e fonte.
- O comprador fornece requisitos verificáveis de segurança, dados, integrações, permissões, SLOs e procurement, e aceita um escopo de piloto com critérios de aceite explícitos.
- O piloto conclui onboarding e configuração dentro do escopo, com eventos de acesso, consentimento, uso, tickets e marcos de implementação reproduzíveis e auditáveis.
- Usuários autorizados utilizam os módulos contratados para um fluxo operacional definido, com qualidade de dados, incidentes, suporte e limitações documentados; adoção não será interpretada isoladamente como valor financeiro.
- Há decisão documentada de continuar, ajustar ou encerrar baseada em custo de entrega, capacidade de suporte, segurança, adequação ao problema e evidência observada. Uma renovação ou contratação recorrente somente será evidência se houver compromisso real formalizado; nenhuma dessas evidências existe neste cenário hipotético.

## Histórico de aprovação

- **Data:** 2026-09-05
- **Gate:** P01/P02 (fases iniciais assinadas)
- **Decisão:** promovido de `03-approved/cenarios/` para `03-approved/cenarios/` na reestruturação lifecycle-first como entregável final assinado.
- **Ref:** `00-project-control/registro-mudancas/2026-09-05-reestruturacao-fronteiras-lifecycle.md`
