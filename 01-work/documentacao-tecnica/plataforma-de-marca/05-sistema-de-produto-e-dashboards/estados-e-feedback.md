---
titulo: Estados e feedback — HUB
status: rascunho / provisório / não aprovado
escopo: estados de interface, operações assíncronas e recuperação
owner: Produto + Engenharia + Design — a confirmar
fontes:
  - principios-de-interface.md
  - componentes-base.md
  - tokens-de-interface.md
  - ../03-identidade-visual/acessibilidade-e-contraste.md
dependencias:
  - ../02-identidade-verbal/voz-e-tom.md
---

# Estados e feedback — HUB

> Padrões de trabalho para tornar o estado do sistema observável e recuperável. Não substituem requisitos de produto ou contrato de serviço.

## 1. Estados comuns

| Estado | O que comunicar | Feedback mínimo | Próxima ação |
|---|---|---|---|
| Inicial | o que esta área faz | orientação curta | começar ou escolher escopo |
| Carregando | a solicitação está em andamento | indicador + contexto preservado | aguardar ou cancelar se possível |
| Vazio | não há itens no escopo | motivo provável + definição de vazio | ajustar filtro, criar item ou voltar |
| Sem dados | fonte não retornou observação | período, escopo e fonte | verificar período/fonte |
| Sucesso | ação concluída | confirmação textual | continuar, revisar ou desfazer |
| Erro recuperável | ação falhou sem perda confirmada | causa em linguagem simples | tentar novamente/corrigir entrada |
| Indisponível | recurso não pode ser usado | motivo e impacto | tentar depois ou usar alternativa |
| Parcial | resposta incompleta | o que está faltando | revisar itens e limitações |
| Desatualizado | dado pode não representar o estado atual | timestamp e janela | atualizar ou aceitar escopo |
| Bloqueado | regra impede avanço | regra, owner e dependência | resolver dependência |

## 2. Padrão de mensagem

Usar a sequência: **estado + objeto + causa/contexto + ação**.

Exemplo: “Não foi possível carregar as métricas de ativação do período selecionado. A fonte não respondeu. Tente novamente ou altere o período.”

Evitar “algo deu errado”, mensagens que culpem a pessoa ou confirmação sem indicar o que foi salvo.

## 3. Operações assíncronas

- preservar filtros, posição e dados já carregados enquanto a atualização ocorre;
- mostrar timestamp da última atualização conhecida;
- distinguir carregamento inicial de atualização parcial;
- permitir retry sem duplicar ações;
- anunciar mudanças para tecnologias assistivas;
- registrar idempotência e possibilidade de desfazer em operações de escrita.

## 4. Não usar cor como único feedback

Cada estado deve ter texto, ícone, padrão, posição ou estrutura além de cor. Estados de risco e falha devem continuar compreensíveis em impressão, escala de cinza e baixa visão.

## 5. Checklist

- [ ] estado inicial definido;
- [ ] loading não causa layout shift evitável;
- [ ] vazio diferencia ausência real de falha de carregamento;
- [ ] erro informa recuperação;
- [ ] sucesso informa consequência;
- [ ] foco e anúncio assistivo definidos;
- [ ] timestamp e fonte aparecem quando dados são exibidos;
- [ ] estado de autorização/permissão não é confundido com erro técnico.
