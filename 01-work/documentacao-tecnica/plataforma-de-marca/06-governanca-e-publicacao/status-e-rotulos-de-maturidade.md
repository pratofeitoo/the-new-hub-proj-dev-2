---
doc_id: PM-GOV-002
titulo: Status e rótulos de maturidade — HUB
status: rascunho / provisório / não aprovado
versao: v0.1
owner: Governança do ciclo de vida — a confirmar
fontes:
  - ../00-controle/README.md
  - ../00-controle/matriz-fontes-e-autoridade.md
dependencias:
  - fluxo-de-aprovacao-de-claims.md
  - fluxo-de-aprovacao-de-decks.md
  - fluxo-de-aprovacao-de-prototipos.md
  - fluxo-de-aprovacao-de-dashboards.md
---

# Status e rótulos de maturidade — HUB

> Vocabulário provisório para tornar o estado de documentos e artefatos visível. Um rótulo não substitui evidência, aprovação ou revisão competente.

## 1. Rótulos

| Rótulo | Significado | Uso permitido | Não significa |
|---|---|---|---|
| `hipótese` | afirmação ou direção ainda em teste | exploração e decisão de pesquisa | fato ou promessa |
| `ilustrativo` | exemplo, simulação ou conteúdo fictício | demonstrar forma ou fluxo | dado real |
| `em revisão` | pacote congelado aguardando parecer | revisão nomeada | aprovação |
| `observado` | registro datado no escopo indicado | comunicar observação com fonte | causalidade ou generalização |
| `validado` | protocolo e critérios concluídos no escopo | uso dentro da validade | validade fora do escopo |
| `aprovado` | decisão explícita do gate competente | publicação no contexto autorizado | aprovação jurídica universal |
| `histórico` | material preservado para referência | pesquisa e comparação | padrão vigente |
| `bloqueado` | condição impede avanço ou uso | correção e rastreamento | autorização provisória |
| `expirado` | validade ou fonte deixou de ser aplicável | retirada e revalidação | reutilização automática |

## 2. Regras

- exibir o rótulo próximo do artefato ou claim;
- registrar owner, fonte, versão, data, validade e próximo gate;
- não elevar status por repetição, acabamento visual ou aprovação de uma parte;
- quando houver conflito, aplicar o rótulo mais restritivo até decisão documentada;
- manter histórico de mudanças e motivo de reversão;
- `aprovado` exige decisão identificável e contexto permitido.

## 3. Campos mínimos

```text
status:
owner:
versao:
fontes:
data_revisao:
validade:
proximo_gate:
decisao:
aprovadores:
limitacoes:
```

## 4. Gate de passagem

Antes de mudar o rótulo, verificar evidência, dependências, riscos, revisão humana e impacto nos artefatos derivados. A passagem deve ser registrada no controle correspondente; mover arquivo de diretório não equivale a aprovação.
