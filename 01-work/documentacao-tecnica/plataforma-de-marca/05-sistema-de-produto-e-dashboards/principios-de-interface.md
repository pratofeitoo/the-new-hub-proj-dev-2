---
titulo: Princípios de interface — HUB
status: rascunho / provisório / não aprovado
escopo: princípios para produto, protótipo e dashboard
owner: Produto + Design — a confirmar
fontes:
  - ../03-identidade-visual/sistema-visual.md
  - ../03-identidade-visual/acessibilidade-e-contraste.md
  - tokens-de-interface.md
  - ../02-identidade-verbal/regras-para-evidencia-e-incerteza.md
dependencias:
  - ../06-governanca-e-publicacao/status-e-rotulos-de-maturidade.md
---

# Princípios de interface — HUB

> Diretrizes provisórias para protótipos, produto e dashboards. Não constituem especificação de implementação nem aprovação de identidade, produto ou claim.

## 1. Princípios

1. **Clareza antes de ornamentação.** Cada tela deve responder qual é o contexto, qual decisão apoia e quem é responsável pela próxima ação.
2. **Evidência junto da afirmação.** Métrica, status, fonte, período, definição e limitação devem permanecer próximos do conteúdo que qualificam.
3. **Reconhecimento antes de memória.** Use rótulos, padrões, filtros, recents e estados consistentes; não obrigue a pessoa a lembrar códigos ou regras ocultas.
4. **Progressão reversível.** Preferências, filtros e ações destrutivas devem ser compreensíveis, revisáveis e canceláveis quando possível.
5. **Uma hierarquia, vários contextos.** Produto, protótipo e dashboard podem variar em densidade, mas compartilham tokens, semântica e rótulos de maturidade.
6. **Acessibilidade como requisito de conteúdo.** Contraste, foco, teclado, zoom, reflow, movimento e alternativa textual fazem parte do significado da interface.
7. **Estado explícito.** Diferenciar carregando, vazio, observado, em revisão, erro, indisponível e validado por texto e estrutura, não apenas por cor.
8. **Limites visíveis.** Uma capacidade planejada, hipótese ou dado incompleto não deve parecer recurso disponível ou resultado validado.

## 2. Anatomia de uma tela

Toda tela relevante deve declarar, quando aplicável:

- contexto: produto, módulo, público, período e escopo;
- título orientado à tarefa ou decisão;
- conteúdo principal e ação primária;
- estado atual e caminho de recuperação;
- fonte, owner, validade e limitação de evidências;
- navegação de retorno e localização no produto;
- alternativa textual para visuais complexos.

## 3. Regras de interação

- Usar o mesmo rótulo para a mesma ação em toda a experiência.
- Confirmar ações destrutivas com objeto, consequência e alternativa.
- Não esconder filtros ativos, escopo de coorte ou ordenação aplicada.
- Manter foco visível após abertura de modal, erro, carregamento e retorno de navegação.
- Informar sucesso e falha em linguagem acionável: o que aconteceu e o que fazer agora.
- Evitar atualizações automáticas que alterem contexto sem aviso; indicar timestamp e mecanismo de atualização.

## 4. Critérios de revisão

- A pessoa identifica o contexto sem depender de conhecimento externo?
- Cada métrica tem definição, unidade e período suficientes?
- O estado visual é compreensível sem cor?
- Existe caminho para corrigir erro, limpar filtro e recuperar dados?
- A tela continua utilizável em teclado, zoom e viewport estreito?
- A interface comunica hipótese, observação e validação sem misturá-las?

## 5. Pendências

- validar com fluxos reais de produto e dashboards;
- nomear owner de Produto e Design;
- definir padrões de navegação e autorização por módulo;
- revisar com usuários e registrar problemas de usabilidade;
- promover somente após aprovação do sistema visual e da governança de maturidade.
