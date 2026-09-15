---
titulo: Matriz de fontes e autoridade — Plataforma de Marca HUB
status: rascunho / provisório
escopo: classificação de fontes, maturidade, uso permitido e gates
owner: Coordenação do projeto — a confirmar
---

# Matriz de fontes e autoridade — Plataforma de Marca HUB

> Esta matriz define como ler e combinar fontes durante a execução. Ela não promove documentos, não aprova claims e não substitui a decisão do owner ou do gate competente.

## 1. Regras de precedência

1. Fonte aprovada e específica prevalece sobre síntese, hipótese ou referência histórica.
2. Documento de trabalho pode organizar uma recomendação, mas não cria autoridade por si só.
3. `wiki/` é camada de síntese e navegação; a fonte indicada no documento original prevalece.
4. Deck histórico pode informar narrativa ou estética, mas não é template vigente nem prova factual automática.
5. Quando fontes entrarem em conflito, registrar a divergência, manter a formulação provisória e encaminhar ao owner do domínio.
6. A ausência de fonte, owner, período, método, licença ou gate mantém o item em estado provisório ou não validado.

## 2. Autoridade por área do repositório

| Local | Autoridade padrão | Maturidade esperada | Uso permitido | Não permite |
|---|---|---|---|---|
| `03-approved/` | fonte aprovada e vigente | `aprovado` | orientar decisões e artefatos downstream dentro do escopo aprovado | edição em lugar, extrapolação de escopo ou claim fora do contexto aprovado |
| `02-review/` | pacote congelado aguardando gate | `em revisão` | análise e revisão controlada | tratar como aprovado, editar diretamente ou publicar |
| `01-work/` | elaboração ativa | `rascunho`, `hipótese`, `não validado` ou `em elaboração` | propor, comparar, testar e preparar pacote de revisão | publicação, normatização ou prova de aprovação |
| `99-archive/` | registro histórico | `histórico`, `superado`, `rejeitado` ou `descontinuado` | reconstruir contexto e fazer comparação documentada | reutilizar como padrão atual sem nova classificação |
| `05-resources/` | material de referência ou fonte bruta | depende do item | pesquisa, inventário e verificação de proveniência | assumir que o arquivo é aprovado apenas por estar armazenado ali |
| `wiki/` | síntese navegável | derivada da fonte | orientação e descoberta de fontes | substituir a fonte primária ou alterar seu status |

## 3. Classificação por tipo de fonte

| Tipo | Exemplos | Pergunta de validação | Tratamento na plataforma de marca |
|---|---|---|---|
| Fonte normativa aprovada | documento em `03-approved/` com escopo explícito | Está vigente, aprovado e dentro do escopo? | Pode fundamentar regra, desde que citada. |
| Fonte oficial em elaboração | documento oficial em `01-work/` | É fonte primária, mas ainda não passou pelo gate? | Pode informar hipótese; deve permanecer rotulada como provisória. |
| Pacote em revisão | documento em `02-review/` | Qual gate está aguardando e quem decide? | Pode ser revisado; não pode ser tratado como vigente. |
| Evidência operacional | registro, medição, fonte financeira ou log | Tem período, definição, método, unidade e owner? | Pode sustentar claim somente após validação do gate aplicável. |
| Referência visual | imagem, deck, mockup ou rascunho | É referência estética, factual ou ambas? | Classificar como visual, narrativa, factual, obsoleta ou não reutilizável. |
| Síntese de wiki | página em `wiki/` | Quais fontes primárias ela aponta? | Usar para navegação; citar a fonte primária no artefato final. |
| Hipótese ou recomendação | proposta criada na plataforma de marca | Está explicitamente rotulada e tem decisão pendente? | Usar para prototipar e discutir; não publicar como fato. |

## 4. Campos obrigatórios por item

Cada documento, claim, asset, métrica ou decisão relevante deve registrar, quando aplicável:

- `id` ou identificador estável;
- título e tipo de item;
- caminho da fonte original;
- status e maturidade;
- owner responsável;
- data, versão e período de validade;
- escopo de uso e público;
- dependências e documentos relacionados;
- evidência, método, unidade e limitações;
- licença, autor e proveniência para assets;
- gate necessário e decisão registrada;
- próxima revisão ou condição de expiração.

## 5. Gates por domínio

| Domínio | Gate mínimo | Owner ou revisor a confirmar | Bloqueio atual |
|---|---|---|---|
| Arquitetura de marca | decisão de nomenclatura, hierarquia, atribuição e escopo | Marca + coordenação | relação operacional entre frentes ainda precisa de formalização |
| Identidade visual | revisão de sistema, contraste, licença e uso de derivados | Marca + Design + Jurídico quando aplicável | não existe identidade visual externa aprovada |
| Claims de impacto/ROI | fonte, baseline, período, método e aprovação financeira/metodológica | Finanças + Dados/Inteligência + owner da fonte | não publicar resultado realizado por inferência |
| Claims de inteligência/matching/rede | fonte, definição operacional, denominador e limitações | Produto + Dados/Inteligência | não converter capacidade potencial em resultado validado |
| Certificação/reconhecimento/Selo | regulamento, independência, critérios, autoridade e validade | Governança do Selo + Jurídico | Selo permanece hipótese; GOV-003 em aberto |
| White-label/endosso | hierarquia de atribuição, contrato, limites de customização e direitos | Produto + Marca + Jurídico | escopo e atribuições obrigatórias indefinidos |
| Decks e publicação | template vigente, claims aprovados, fontes e checklist | Apresentações + Governança | referências históricas ainda precisam de classificação |
| Dashboards e métricas | definição, período, unidade, fonte, status e limitações | Produto + Dados/Inteligência | padrões integrados ainda não criados |

## 6. Rótulos de maturidade

| Rótulo | Significado | Uso |
|---|---|---|
| `hipótese` | interpretação ou direção ainda não validada | discussão e prototipagem, sempre explicitamente rotulada |
| `ilustrativo` | exemplo visual, número ou cenário sem valor factual vigente | demonstração; não usar como resultado real |
| `em revisão` | pacote submetido a avaliação formal | revisão e comentários; não publicação |
| `observado` | descrição sustentada por fonte identificada, sem inferência adicional | análise e registro de evidência |
| `validado` | verificação concluída dentro de um método e escopo definidos | uso limitado ao contexto validado |
| `aprovado` | decisão formal registrada pelo owner/gate competente | uso dentro do escopo, versão e validade aprovados |
| `histórico` | material preservado para contexto passado | pesquisa; não é padrão atual |
| `não validado` | falta fonte, owner, método, licença ou gate suficiente | não usar para afirmação pública ou decisão definitiva |

## 7. Aplicação imediata à Plataforma de Marca

- A marca-mãe `HUB` é uma direção registrada pelo usuário e ainda precisa de formalização nos documentos dependentes.
- Os rascunhos visuais em `05-resources/inbox/Plataforma HUB/99-arquivo/Rascunhos iniciais/` são referências de trabalho, não identidade aprovada.
- O deck `Apresentação - NESST.pdf` deve ser classificado antes de qualquer reutilização como referência narrativa ou estética.
- Claims de todas as categorias desejadas podem entrar no registry, mas cada claim mantém seu próprio nível de evidência e gate.
- O Selo não deve ser descrito como certificação ou reconhecimento vigente enquanto sua governança não estiver definida.
- O white-label permanece em aberto e não deve ser tratado como capacidade autorizada apenas por estar descrito no plano.
