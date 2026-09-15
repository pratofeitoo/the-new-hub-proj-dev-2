---
titulo: Acessibilidade e contraste — HUB
status: rascunho / provisório / não aprovado
escopo: requisitos de acessibilidade para identidade visual e componentes
owner: Identidade visual + Produto — a confirmar
fontes:
  - sistema-visual.md
  - paleta-de-cores.md
  - ../04-sistema-de-apresentacoes/regras-de-graficos-e-tabelas.md
---

# Acessibilidade e contraste — HUB

> Estes são requisitos de trabalho para protótipos. A validação visual foi adiada e nenhum par de cores está declarado aprovado.

## 1. Requisitos mínimos

- texto normal: alvo de contraste mínimo de 4,5:1;
- texto grande e elementos gráficos/UI: mínimo de 3:1 quando aplicável;
- foco visível e não dependente apenas de cor;
- alvos de toque preferencialmente de 44 × 44 px;
- reflow e leitura em zoom de 200% para interfaces;
- suporte a `prefers-reduced-motion` quando houver movimento;
- alt text para imagens informativas e descrição textual para gráficos complexos;
- status comunicado por texto, ícone, padrão ou posição além da cor.

## 2. Contraste e cor

- testar o par real de foreground/background, incluindo estados hover, disabled e focus;
- não usar amarelo, verde claro, coral ou violeta como texto pequeno sobre branco sem medição;
- não usar cinza claro para corpo, placeholder ou informação essencial;
- não usar cor como única distinção em gráficos, tags ou tabelas;
- verificar contraste em telas, projetores, impressão e modo escuro quando aplicável.

## 3. Gráficos e dados

Todo gráfico relevante deve ter:

- título orientado à pergunta ou decisão;
- unidades e período;
- legenda compreensível;
- resumo textual da conclusão;
- fonte e status de maturidade;
- indicação de limitação;
- acesso aos dados ou descrição detalhada quando necessário.

## 4. Tipografia e leitura

- manter corpo legível e altura de linha confortável;
- não comunicar hierarquia apenas por peso, tamanho ou cor;
- evitar linhas longas e texto comprimido;
- preservar acentos e caracteres do português;
- verificar leitura com fallback de fonte e em resolução menor.

## 5. Checklist de entrega

- [ ] pares de contraste medidos;
- [ ] estados de interação testados;
- [ ] status possui sinal não cromático;
- [ ] imagens têm alt text ou são decorativas explicitamente;
- [ ] gráficos têm resumo e contexto;
- [ ] foco e navegação por teclado foram verificados;
- [ ] zoom/reflow foram verificados quando for interface;
- [ ] limitações de acessibilidade registradas.

## 6. Pendências

- executar os testes de contraste quando a validação for retomada;
- definir ferramenta e responsável pela verificação;
- testar a direção visual em artefatos reais;
- revisar acessibilidade com Produto, Design e usuários quando aplicável.
