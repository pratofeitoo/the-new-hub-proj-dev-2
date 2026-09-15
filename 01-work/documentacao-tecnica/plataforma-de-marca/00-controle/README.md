---
titulo: Controle da Plataforma de Marca HUB
status: rascunho / provisório
escopo: ciclo de vida, autoridade, rastreabilidade e execução da plataforma de marca
owner: Coordenação do projeto — a confirmar
---

# Controle da Plataforma de Marca HUB

> Este diretório organiza o trabalho da Plataforma de Marca HUB. Ele registra escopo, fontes, decisões, dependências e critérios de passagem. Não aprova marca, identidade visual, claim, certificação, licenciamento ou material de publicação.

## 1. Escopo

A Plataforma de Marca deve criar padrões reutilizáveis para:

- identidade visual e derivações suaves por produto ou programa;
- apresentações, decks e slides gerados por agentes;
- protótipos, produtos, dashboards e visualizações;
- mensagens, claims, evidências e limitações;
- relações entre HUB, HUB Negócios, Instituto HUB, Plataforma HUB, CAOS e Selo;
- endosso, white-label, proveniência, revisão e publicação.

A marca-mãe registrada como direção de trabalho é **HUB**. As demais frentes são tratadas como diferentes, porém conectáveis, dentro do ecossistema. O Selo permanece uma hipótese, com possível direção futura de certificação ou reconhecimento.

## 2. Estado atual e limites

Todo o conteúdo deste pacote está em `01-work/` e deve ser tratado como rascunho, hipótese ou proposta para revisão. A direção do usuário orienta a execução, mas não substitui:

- aprovação formal de arquitetura, identidade ou nomenclatura;
- validação de fontes, licenças e direitos de assets;
- aprovação de claims por owner e gate competente;
- revisão jurídica, financeira, metodológica ou de certificação;
- promoção controlada para `02-review/` ou `03-approved/`.

Não usar um documento deste diretório como template oficial ou fonte pública sem registrar a decisão e a passagem correspondente do lifecycle.

## 3. Fronteiras de lifecycle

O repositório usa estas fronteiras:

| Área | Função | Regra de uso |
|---|---|---|
| `01-work/` | elaboração ativa | Pode conter hipóteses, rascunhos, recomendações e material em construção. |
| `02-review/` | pacote congelado para revisão | Não editar em lugar; correções retornam a `01-work/`. |
| `03-approved/` | fonte aprovada | Imutável; só pode ser substituída por nova versão que atravesse o gate. |
| `99-archive/` | histórico | Não reutilizar como padrão vigente sem nova classificação e evidência. |

`wiki/` pode sintetizar conceitos, mas não substitui a fonte documental nem altera o lifecycle.

## 4. Documentos de controle

- [Matriz de fontes e autoridade](matriz-fontes-e-autoridade.md): classifica fontes, autoridade, maturidade, uso permitido e dependências.
- [Registro de decisões](registro-de-decisoes.md): registra direções, decisões pendentes, owners e evidências.
- [Registro de progresso](registro-de-progresso.md): registra execução, verificações, artefatos e bloqueios.
- [Sistema de agentes](equipe-de-agentes/system.md): define limites de atuação e evidência para colaboração.
- [Roteamento de agentes](equipe-de-agentes/routing.md): define a sequência de handoffs por domínio.
- [Handoff](equipe-de-agentes/handoff.md): define o pacote mínimo para transferir trabalho entre agentes.

## 5. Sequência de execução vigente

1. Completar controle de fontes, status, owners e dependências.
2. Inventariar os rascunhos visuais em `05-resources/inbox/Plataforma HUB/99-arquivo/Rascunhos iniciais/`.
3. Consolidar o sistema visual provisório da HUB, incluindo derivações mínimas por produto e programa.
4. Formalizar a arquitetura de marca do ecossistema.
5. Operacionalizar o registro de claims com evidência, validade e gates.
6. Classificar o deck NESST e os demais decks históricos.
7. Criar templates e biblioteca de slides para o público geral.
8. Conectar tokens, métricas, dashboards, protótipos e regras de proveniência.

## 6. Critério de passagem

Antes de mover qualquer pacote para revisão, verificar:

- status, owner, fontes e dependências preenchidos;
- fatos observados separados de recomendações e decisões;
- claims sensíveis com fonte, evidência, validade e gate;
- assets com proveniência e direitos identificados;
- referências históricas separadas de templates vigentes;
- limitações e incertezas visíveis;
- revisão humana identificada;
- alteração registrada no controle de decisões e progresso.

## 7. Fonte de verdade operacional

O repositório na branch principal `main` é a fonte de verdade operacional deste trabalho. Registros externos de tarefas podem acompanhar responsáveis e prazos, mas não substituem os arquivos, decisões e gates documentados aqui.
