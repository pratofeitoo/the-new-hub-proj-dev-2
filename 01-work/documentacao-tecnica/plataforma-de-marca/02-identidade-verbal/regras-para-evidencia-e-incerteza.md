---
titulo: Regras para evidência e incerteza — HUB
status: rascunho / provisório / não aprovado
escopo: redação responsável de evidências, métricas e incertezas
owner: Governança verbal + Dados/Inteligência — a confirmar
fontes:
  - claims-registry.md
  - ../00-controle/matriz-fontes-e-autoridade.md
  - ../01-plataforma-estrategica/proposito-promessa-e-posicionamento.md
---

# Regras para evidência e incerteza — HUB

> O objetivo é tornar a força e o limite de cada afirmação visíveis. Um rótulo de incerteza não transforma uma hipótese em fato nem substitui uma fonte.

## 1. Níveis de evidência

| Nível | O que significa | Redação permitida |
|---|---|---|
| `E0 — não validado` | Fonte, método ou escopo insuficiente. | “Ainda não validado”; não publicar como afirmação. |
| `E1 — documental-provisório` | Descrição em documento de trabalho ou revisão. | “A proposta descreve”, “a hipótese é”, “em desenvolvimento”. |
| `E2 — observacional` | Registro datado e rastreável sem validação causal/financeira completa. | “Foi observado”, sempre com contexto, período e limitação. |
| `E3 — validado` | Protocolo, baseline/comparação, cálculo e revisão documentados. | “Foi validado no escopo [x]”, sem extrapolar para outros contextos. |
| `E4 — realizado/oficial` | Resultado reconciliado com fonte operacional/financeira oficial e aprovação competente. | “Foi realizado no período [x]”, com fonte e escopo explícitos. |

## 2. Campos mínimos da frase

Uma mensagem factual deve responder, quando aplicável:

- quem ou o que foi medido;
- qual ação, mudança ou capacidade está sendo descrita;
- onde e em qual período;
- qual métrica, unidade, denominador ou coorte;
- qual é a fonte e seu owner;
- qual nível de evidência sustenta a frase;
- qual limitação impede uma conclusão mais forte;
- qual gate autoriza o uso.

## 3. Padrões de redação

### Hipótese

> “A hipótese de trabalho é que [mecanismo] pode apoiar [contexto]. O próximo teste é [teste], com [métrica].”

### Capacidade

> “A arquitetura prevê [capacidade] para [contexto]. A implementação/disponibilidade deve ser confirmada por [evidência].”

### Observação

> “No contexto [x], entre [período], foi observado [resultado] em [coorte/denominador]. A observação não estabelece [causalidade/ROI/escala].”

### Resultado validado

> “No escopo [x], o protocolo [y] validou [resultado], usando [baseline/comparação]. A validade não se estende a [limite].”

### Resultado realizado

> “O registro oficial [fonte] reconcilia [resultado] no período [x], aprovado por [owner].”

## 4. Regras por tipo de claim

- **Impacto:** informar métrica, denominador, janela, fonte, limitações e se a atribuição é observacional ou causal.
- **ROI e finanças:** separar potencial, influenciado, validado e realizado; não publicar número sem baseline, fórmula, período e aprovação financeira.
- **Inteligência:** descrever o método, a revisão humana, a fonte e o estágio de implementação.
- **Matching e rede:** informar critérios, cobertura, coorte, período e resultado; não prometer “melhores” sem definição comparável.
- **Certificação e reconhecimento:** informar autoridade, regulamento, critérios, validade e independência; na ausência deles, manter o Selo bloqueado.
- **Benchmarks:** informar coorte, denominador, comparabilidade, anonimização, período e fonte.

## 5. O que não fazer

- elevar `E1` para `E3` por repetição em vários documentos;
- transformar correlação temporal em causalidade;
- transformar capacidade planejada em capacidade disponível;
- transformar cenário, simulador ou projeção em resultado realizado;
- retirar limitação, período ou denominador para tornar a frase mais forte;
- usar cor, selo, fotografia ou logo como substituto de evidência;
- ocultar incerteza em rodapé, tooltip ou legenda inacessível.

## 6. Checklist antes de publicar

- [ ] claim exato registrado;
- [ ] público e contexto definidos;
- [ ] fonte e trecho localizáveis;
- [ ] período, unidade, denominador ou coorte informados;
- [ ] nível `E0`–`E4` atribuído sem inferência;
- [ ] limitação e rótulo visível incluídos;
- [ ] owner e validade definidos;
- [ ] gate e decisão registrados;
- [ ] texto não extrapola a fonte;
- [ ] versão publicada mantém a mesma formulação aprovada.
