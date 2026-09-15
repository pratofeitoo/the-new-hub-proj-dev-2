---
titulo: Protocolo de protótipo — HUB
status: rascunho / provisório / não aprovado
escopo: classificação, construção, teste e encerramento de protótipos
owner: Produto + Design Research — a confirmar
fontes:
  - principios-de-interface.md
  - acessibilidade-de-interface.md
  - ../02-identidade-verbal/regras-para-evidencia-e-incerteza.md
  - ../00-controle/README.md
dependencias:
  - ../06-governanca-e-publicacao/status-e-rotulos-de-maturidade.md
  - ../06-governanca-e-publicacao/fluxo-de-aprovacao-de-prototipos.md
---

# Protocolo de protótipo — HUB

> Processo provisório para evitar que uma interface exploratória seja confundida com produto validado. O protocolo não autoriza lançamento nem implementação.

## 1. Estágios

| Estágio | Objetivo | Evidência mínima | Não inferir |
|---|---|---|---|
| exploratório | abrir alternativas | hipótese, contexto e perguntas | solução escolhida |
| conversa | alinhar modelo mental | roteiro e feedback registrado | usabilidade comprovada |
| usabilidade | observar tarefas | participantes, tarefas, achados e limitações | resultado de negócio |
| especificação | reduzir ambiguidade | fluxos, estados, conteúdo e critérios | capacidade implementada |
| candidato a implementação | preparar decisão técnica | requisitos, riscos, dependências e aceite | produto validado |
| produto validado | confirmar uso no escopo | release, protocolo e evidência de uso/resultado | validade fora do escopo |

## 2. Ficha obrigatória

```text
prototype_id:
nome/contexto:
estágio:
hipótese ou decisão:
público/usuário:
fluxos incluídos:
fora do escopo:
fontes e dados usados:
status dos dados:
owner:
revisores:
critério de sucesso:
limitações e riscos:
próximo gate:
data de revisão/validade:
```

## 3. Execução do teste

1. Definir hipótese, pergunta e decisão que o teste deve informar.
2. Delimitar público, tarefas, dados, ambiente e roteiro.
3. Rotular todos os dados fictícios, observados, sintéticos ou não validados.
4. Verificar acessibilidade proporcional ao estágio.
5. Registrar observações sem convertê-las automaticamente em preferência ou causalidade.
6. Consolidar achados, divergências, limitações e recomendações.
7. Decidir: iterar, abandonar, especificar ou solicitar novo gate.

## 4. Evidência e privacidade

- não usar dados pessoais reais sem base, minimização e autorização aplicáveis;
- registrar origem e permissão dos assets;
- separar observação de interpretação;
- não publicar depoimento, logo ou resultado sem autorização e fonte;
- preservar um caminho reproduzível para a versão testada;
- indicar quando participantes, amostra ou contexto não permitem generalização.

## 5. Critério de encerramento

Um protótipo só pode avançar de estágio quando possuir ficha atualizada, evidência do gate, riscos tratados ou aceitos, owner, próximos passos e rótulo visível. Se não houver evidência suficiente, retornar a `hipótese`, `em revisão` ou `não validado`, conforme o caso.
