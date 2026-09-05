---
title: P01-S03 — SEG-03 Compradores corporativos de procurement e RH
type: test-scenario
segment: SEG-03
source_task: "[[04-project-management/tarefas/P01-T02_Matriz_Oferta_Comprador_Capacidade]]"
status: aprovado
tags:
  - fase-P01
  - scenario
---

# P01-S03 — SEG-03 Compradores corporativos de procurement e RH

## Oferta escolhida

**Programas de procurement e capacidades.** A hipótese é um programa conduzido por implementação, com diagnóstico do processo de procurement e/ou RH, configuração de fluxos de trabalho, capacitação dos times e acompanhamento de adoção. A unidade dona proposta é o HUB Negócios, com uso controlado da Plataforma HUB. A faixa de primeiro ciclo a testar é de **R$ 150 mil–R$ 600 mil**; serviço recorrente de **R$ 20 mil–R$ 100 mil/mês** é apenas hipótese posterior.

## JTBD

Quando preciso melhorar a forma como minha organização descobre, qualifica e trabalha com fornecedores, talentos e parceiros, quero um programa estruturado que combine diagnóstico, capacidades, fluxos e medição, para reduzir fricção operacional e tomar decisões mais consistentes sem iniciar um rollout corporativo sem critérios.

## Persona/função compradora

Diretor(a) de Procurement, Suprimentos, RH ou Operações, atuando como sponsor do problema e potencial autoridade de contratação. Pode envolver Procurement, Transformação, Inovação ou Capacitação como centro de orçamento. A autoridade real, o orçamento e a rota de contratação permanecem desconhecidos e precisam ser testados.

## Usuário operacional

Analista ou gerente de procurement/suprimentos, comprador(a) de categoria, profissional de RH responsável por talentos e capacidades, gestor(a) de operações e administradores de sistemas de procurement, RH ou CRM. Fornecedores e especialistas convidados podem participar como usuários externos, com permissões e responsabilidades definidas antes do uso.

## Problema inicial

O comprador pode ter processos fragmentados para mapear necessidades, encontrar fornecedores ou talentos, qualificar alternativas, encaminhar oportunidades e acompanhar resultados. A ausência de critérios compartilhados, dados operacionais organizados e capacitação pode tornar difícil saber o que foi configurado, quem decidiu, quais conexões foram aceitas e que aprendizado deve orientar o próximo ciclo. Esta formulação é uma hipótese de problema, não diagnóstico de uma organização específica.

## Fluxo C.A.O.S.

### Contexto

- Mapear o processo atual de procurement e/ou RH, sistemas envolvidos, categorias prioritárias, partes interessadas e restrições de segurança, privacidade e compliance.
- Identificar o caso de uso inicial, o sponsor, quem assina, quem paga, quem opera e os critérios para um piloto limitado.
- Levantar como são registrados fornecedores, talentos, necessidades, qualificações, encaminhamentos, decisões e resultados hoje.
- Documentar hipóteses de baseline, riscos, dependências e uma rota alternativa caso o piloto não possa avançar.

### Arquitetura

- Definir escopo do programa, papéis, permissões, fluxo de qualificação, marcos de decisão e critérios de aceite.
- Configurar uma jornada mínima de procurement/RH com identidade, registros de necessidade e solução, conexões e evidências, sem presumir que módulos ou integrações estejam prontos.
- Separar obrigações de implementação, treinamento, suporte e eventual serviço recorrente; explicitar controle de mudanças e limites de serviço.
- Projetar métricas de uso e de processo, sem prometer economia, ROI, contratação ou melhoria de diversidade antes de evidência específica.

### Operação

- Executar diagnóstico e configuração com um grupo, categoria ou fluxo delimitado.
- Capacitar usuários operacionais para registrar necessidades, aplicar critérios, qualificar alternativas e documentar aceite ou rejeição.
- Coordenar fornecedores, especialistas e parceiros qualificados quando necessários, mantendo a decisão e a evidência sob governança do cliente/HUB conforme o contrato.
- Realizar checkpoints do piloto, registrar incidentes, decisões, uso, encaminhamentos e feedback; não tratar conexão, cadastro ou participação como tração.

### Sustentação

- Revisar métricas de adoção, qualidade dos registros, tempos de ciclo, conclusão de capacitação e ocorrências de suporte.
- Manter governança de acesso, dados pessoais, segurança, retenção, auditoria e responsabilidades entre HUB Negócios, Plataforma HUB e cliente.
- Produzir relatório de aprendizado com limitações, mudanças recomendadas e decisão explícita de parar, ajustar, expandir ou testar serviço recorrente.
- Só propor renovação ou recorrência após avaliar capacidade de suporte, custo de entrega, limite de serviço, valor percebido e evidência documentada do ciclo inicial.

## Parceiros necessários

- Provedor(es) de procurement, HRIS, CRM ou integrações equivalentes, caso o piloto exija interoperabilidade.
- Associações ou federações para acesso contextual e distribuição, somente se houver mandato e regras de participação claros.
- Fornecedores, especialistas e organizações de implementação qualificados para compor o fluxo de soluções.
- Especialistas em segurança, privacidade, LGPD e procurement corporativo para revisar dados, permissões e processo de contratação.

## Entregáveis

- Diagnóstico documentado do fluxo escolhido, com escopo, atores, riscos e hipóteses de baseline.
- Arquitetura do programa C.A.O.S., incluindo jornada, papéis, permissões, marcos, critérios de aceite e plano de integração quando aplicável.
- Configuração de um piloto delimitado e seus materiais de onboarding/capacitação.
- Registro operacional de necessidades, qualificações, conexões, decisões, incidentes e evidências permitidas.
- Relatório de adoção e aprendizado, com limitações, custo observado, recomendações e decisão de próximo ciclo.

## Custo e esforço estimados as hypotheses

- **Primeiro ciclo:** R$ 150 mil–R$ 600 mil, hipótese alinhada à faixa de qualificação do SEG-03; não é preço aprovado nem previsão de receita.
- **Esforço indicativo:** 8–16 semanas, com equipe pequena de diagnóstico/arquitetura, operação do piloto, capacitação e governança; a capacidade real ainda precisa ser estimada.
- **Recorrência possível:** R$ 20 mil–R$ 100 mil/mês para suporte, inteligência ou programa continuado, condicionada a limite de serviço, custo unitário e evidência de prestação.
- **Custos variáveis:** integrações, segurança, revisão jurídica, especialistas e fornecedores podem ampliar custo e prazo; nenhum repasse ou taxa transacional é presumido.

## Evidência esperada de sucesso

- Um comprador e uma autoridade de contratação nomeados registram o caso de uso, orçamento indicativo, processo de compra e critério de decisão.
- O piloto delimitado é configurado e usado pelos usuários operacionais previstos, com registros verificáveis de etapas, acessos, qualificação e decisões.
- O cliente fornece evidência comparável de mudança no processo escolhido (por exemplo, completude dos registros, tempo de ciclo ou conclusão de capacitação), com baseline, período, método e limitações documentados.
- O sponsor avalia os entregáveis e decide explicitamente entre parar, ajustar, expandir ou contratar continuidade; uma renovação só conta como hipótese de demanda quando houver registro escrito e termos correspondentes.
- Segurança, privacidade, responsabilidades, custos de suporte e critérios de aceite são revisados antes de qualquer rollout ou serviço recorrente.

## Histórico de aprovação

- **Data:** 2026-09-05
- **Gate:** P01/P02 (fases iniciais assinadas)
- **Decisão:** promovido de `04-project-management/cenarios/` para `03-approved/` (endereço atual via reorganizações 2026-09-05) na reestruturação lifecycle-first como entregável final assinado.
- **Ref:** `00-project-control/registro-mudancas/2026-09-05-reestruturacao-fronteiras-lifecycle.md`
