# Handoff entre agentes — Plataforma de Marca HUB

## 1. Contrato obrigatório

Todo subagente deve devolver uma mensagem com:

1. **Objetivo executado** — o que foi analisado ou produzido.
2. **Status** — `concluído`, `parcial`, `bloqueado` ou `aguardando decisão`.
3. **Evidências** — caminhos dos arquivos e trechos relevantes.
4. **Alterações** — arquivos criados ou modificados; se nenhuma, declarar explicitamente.
5. **Recomendações** — propostas separadas de fatos observados.
6. **Riscos** — claims, fontes, licenças, maturidade, dependências ou conflitos.
7. **Decisões pendentes** — perguntas que exigem usuário ou autoridade do projeto.
8. **Próximo agente** — perfil recomendado e contexto mínimo para continuar.

## 2. Estados de handoff

- `pronto-para-revisao`: resultado completo, sem bloqueio conhecido;
- `parcial`: parte do escopo concluída, com lacunas descritas;
- `aguardando-decisao`: o trabalho não deve avançar sem decisão humana;
- `bloqueado`: falta acesso, fonte, ferramenta ou dependência técnica;
- `rejeitar-e-retrabalhar`: o verificador encontrou conflito ou escopo incorreto.

## 3. O que passa entre agentes

Passar somente:

- objetivo e escopo;
- fontes observadas;
- arquivos autorizados;
- decisões já tomadas;
- incertezas e conflitos;
- formato esperado do resultado;
- critérios de aceitação;
- nome e sessão do agente de origem.

Não passar como fato:

- texto de marketing sem fonte;
- decisão implícita em um rascunho;
- aprovação inferida pelo nome de uma pasta;
- deck arquivado tratado como template vigente;
- métrica sem definição ou período;
- claim jurídico, financeiro, causal ou de certificação sem gate.

## 4. Handoffs principais

### Estratégia → Governança verbal

Passar arquitetura de marca, públicos, promessa, nomes candidatos, contexto de uso e decisões ainda abertas. Governança verbal deve converter isso em mensagens e claims rastreáveis, sem fechar decisões que pertencem à estratégia.

### Estratégia → Sistema visual

Passar hierarquia de entidades, públicos, contextos, produtos e restrições de white-label. Sistema visual deve traduzir a arquitetura em padrões visuais, sem criar uma arquitetura paralela.

### Governança verbal + Sistema visual → Apresentações

Passar claims permitidos, rótulos de maturidade, tokens, tipos de evidência, fontes e restrições de composição. O agente de apresentações deve criar narrativa e templates sem inventar dados ou alterar claims.

### Governança verbal + Sistema visual → Produto/Dashboards

Passar vocabulário, status, tokens, hierarquia semântica das métricas, regras de evidência e acessibilidade. O agente de produto deve preservar definições e limitações das métricas.

### Todos → Verificação

Passar lista de arquivos, fontes, decisões pendentes, claims sensíveis, dependências, comandos de validação e estado da sessão.

## 5. Verificação de encerramento

Um agente só pode ser considerado encerrado quando:

- entregou o handoff obrigatório;
- identificou arquivos alterados;
- não deixou mudanças fora do escopo;
- declarou bloqueios ou ausência deles;
- indicou o próximo passo;
- sua sessão visível permaneceu rastreável até a confirmação do coordenador.

O encerramento da sessão não equivale à aprovação do resultado.

