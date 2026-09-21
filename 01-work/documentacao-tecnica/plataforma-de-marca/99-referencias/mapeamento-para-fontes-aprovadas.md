---
titulo: Mapeamento para fontes aprovadas — Plataforma de Marca HUB
status: rascunho / mapa provisório
escopo: relação entre documentos da plataforma, fontes primárias e autoridade
owner: Coordenação + Owners de domínio — a confirmar
fontes:
  - ../00-controle/matriz-fontes-e-autoridade.md
  - ../00-controle/README.md
  - inventario-de-visuais.md
dependencias:
  - ../00-controle/indice-documentos.md
  - ../06-governanca-e-publicacao/controle-de-versoes-e-changelog.md
---

# Mapeamento para fontes aprovadas

> Este mapa orienta a busca de autoridade. Uma referência listada como candidata não é aprovada automaticamente e deve ser conferida no estado atual do repositório.

## 1. Mapa por domínio

| Domínio | Fonte primária/candidata | Estado de uso | Gate necessário |
|---|---|---|---|
| Arquitetura e módulos | `wiki/architecture/modulos-hub-core.md` e documentos oficiais indicados | síntese + fonte a confirmar | Marca + coordenação |
| Ofertas e cenários | `03-approved/matriz-de-oferta-e-comprador-cenarios/` | fonte aprovada dentro do escopo | Produto/Marca |
| Claims e diretrizes | `01-work/documentos-oficiais/12-comercial-GTM/12.03-brand-guidelines-claim-registry.md` | oficial em elaboração | Governança verbal + owner |
| CAOS e licença | documentos oficiais de SOPs e licença em `01-work/pesquisa-e-confianca/` | hipótese/provisório | Jurídico + owner |
| Selo | termos do Selo e charter de independência | hipótese bloqueada | GOV-003 + Jurídico |
| Visual histórico | `05-resources/inbox/Plataforma HUB/99-arquivo/Rascunhos iniciais/` | referência histórica | Design + direitos |
| Métricas e dados | especificações e registros operacionais correspondentes | fonte a identificar por métrica | Dados + Produto |

## 2. Ficha de mapeamento

```text
map_id:
artefato/claim:
fonte primária:
caminho e versão:
status da fonte:
owner da fonte:
escopo/período:
trecho ou campo:
nível de evidência:
uso permitido:
limitações:
gate:
decisão/data:
```

## 3. Regra de precedência

Fonte aprovada e específica prevalece sobre `wiki`, deck histórico ou documento provisório. Se não houver fonte aprovada no escopo, manter o item como hipótese, observado ou em revisão — nunca elevar seu status por associação.

## 4. Pendências

- preencher fichas para claims sensíveis e métricas usadas em artefatos;
- confirmar quais fontes em `03-approved/` estão vigentes para cada domínio;
- registrar divergências entre fonte primária e síntese;
- associar owners, validade e gates;
- atualizar o mapa a cada promoção, expiração ou reversão.
