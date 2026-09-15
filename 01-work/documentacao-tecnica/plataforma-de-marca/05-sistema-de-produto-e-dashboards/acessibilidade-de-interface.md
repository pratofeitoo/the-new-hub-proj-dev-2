---
titulo: Acessibilidade de interface — HUB
status: rascunho / provisório / não aprovado
escopo: requisitos de acessibilidade para interfaces, protótipos e dashboards
owner: Produto + Design + Engenharia — a confirmar
fontes:
  - ../03-identidade-visual/acessibilidade-e-contraste.md
  - ../03-identidade-visual/sistema-visual.md
  - tokens-de-interface.md
  - estados-e-feedback.md
dependencias:
  - componentes-base.md
  - protocolo-de-prototipo.md
---

# Acessibilidade de interface — HUB

> Requisitos de trabalho para validação. Não são declaração de conformidade legal ou certificação de acessibilidade.

## 1. Requisitos mínimos

- contraste de texto normal alvo de 4,5:1 e de texto grande/UI/gráficos relevantes de 3:1 quando aplicável;
- foco visível, ordem de foco lógica e operação completa por teclado;
- alvos de toque preferencialmente de 44 × 44 px;
- zoom de 200%, reflow e viewport estreito sem perda de função;
- labels visíveis, instruções antes do campo e erros associados;
- status, tendência e prioridade comunicados por texto/estrutura além da cor;
- alternativa textual para imagens informativas e gráficos complexos;
- suporte a `prefers-reduced-motion` e ausência de movimento essencial não controlável;
- linguagem simples, títulos hierárquicos e mensagens acionáveis.

## 2. Dados e dashboards

Todo indicador deve ter unidade, período, definição e status. Todo gráfico deve ter título orientado à pergunta, resumo textual, legenda compreensível, fonte, limitação e acesso aos dados quando necessário.

Em tabelas, associar cabeçalhos às células, não depender de cor para estados, oferecer ordenação compreensível e preservar leitura em telas menores.

## 3. Estados e tecnologia assistiva

- anunciar loading, sucesso e erro sem interromper leitura essencial;
- devolver foco ao elemento de origem após modal;
- não remover conteúdo focado durante atualização automática;
- marcar conteúdo decorativo como tal;
- manter texto de status no DOM e não apenas em ícone;
- testar navegação com leitor de tela no escopo definido.

## 4. Evidência de verificação

Registrar ferramenta, versão, data, viewport, navegador/tecnologia assistiva, fluxo testado, resultado, severidade, owner e evidência. Um teste automático isolado não comprova acessibilidade completa.

## 5. Checklist de gate

- [ ] contraste medido nos pares reais;
- [ ] teclado e foco verificados;
- [ ] zoom/reflow verificados;
- [ ] estados sem cor isolada;
- [ ] labels, erros e instruções verificados;
- [ ] gráficos e imagens possuem alternativa;
- [ ] movimento reduzido verificado;
- [ ] problemas registrados com severidade e responsável;
- [ ] limitações declaradas antes de qualquer promoção.
