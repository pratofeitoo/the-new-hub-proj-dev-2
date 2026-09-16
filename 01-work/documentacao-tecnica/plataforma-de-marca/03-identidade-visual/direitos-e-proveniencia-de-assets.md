---
titulo: Direitos e proveniência de assets — HUB
status: rascunho / provisório / não aprovado
escopo: controle de origem, licença, transformação e uso de assets
owner: Identidade visual + Jurídico — a confirmar
fontes:
  - sistema-visual.md
  - ../99-referencias/inventario-de-visuais.md
  - ../00-controle/matriz-fontes-e-autoridade.md
---

# Direitos e proveniência de assets — HUB

> Nenhum asset pode ser tratado como liberado para publicação apenas por estar no vault ou em um deck histórico. Este documento define o registro mínimo para análise e uso controlado.

## 1. Registro obrigatório

Cada logo, fonte, fotografia, ilustração, ícone, vídeo, gráfico ou elemento reutilizado deve ter:

| Campo | O que registrar |
|---|---|
| `asset_id` | Identificador estável e único. |
| `source_path` | Caminho original no repositório ou origem externa. |
| `asset_type` | Logo, fonte, foto, ícone, ilustração, gráfico, deck ou outro. |
| `creator` | Autor, agência, ferramenta ou “desconhecido”. |
| `source` | URL, documento, pessoa ou processo de origem. |
| `license` | Licença, contrato, autorização ou “não identificado”. |
| `obtained_at` | Data de obtenção/captura, quando conhecida. |
| `transformation` | Recorte, filtro, geração, vetorização, combinação ou nenhuma. |
| `allowed_use` | Interno, protótipo, revisão, publicação limitada ou aprovado. |
| `status` | Histórico, ilustrativo, em revisão, aprovado ou bloqueado. |
| `owner` | Pessoa/função que responde pelo uso. |
| `expiry` | Validade, renovação ou evento de rechecagem. |
| `notes` | Restrições, créditos, consentimento e dependências. |

## 2. Estados de uso

| Estado | Pode fazer | Não pode fazer |
|---|---|---|
| `desconhecido` | preservar e pesquisar origem | publicar ou distribuir |
| `interno` | usar em análise restrita | enviar a público ou cliente sem autorização |
| `ilustrativo` | prototipar com rótulo | sugerir que é asset oficial |
| `em revisão` | submeter para avaliação | incorporar em material final |
| `aprovado` | usar dentro do escopo, versão e validade | extrapolar licença ou contexto |
| `bloqueado` | preservar como evidência | usar em apresentação, produto ou campanha |

## 3. Regras para os materiais atuais

- os arquivos em `05-resources/inbox/Plataforma HUB/99-arquivo/Rascunhos iniciais/` são referências históricas até prova em contrário;
- duplicatas devem ser preservadas até identificar a origem e escolher um representante;
- imagens de pessoas exigem verificação de direitos, consentimento e contexto de uso;
- logos e símbolos não devem ser reconstruídos a partir de screenshot como se fossem arquivos oficiais;
- fontes observadas no moodboard não têm licença confirmada neste inventário;
- imagens geradas por IA devem registrar ferramenta, prompt/processo, data, transformação e termos aplicáveis;
- gráficos e números extraídos de decks exigem fonte factual independente antes de reutilização.

## 4. Modelo de ficha

## 4.1 Fichas do conjunto visual fornecido pelo usuário

As imagens abaixo entram no inventário como referências visuais, não como assets liberados:

| Asset ID | Arquivo | Conteúdo observado | Fonte/autoria | Licença/uso | Status |
|---|---|---|---|---|---|
| `REF-VIS-2026-08-29-12-47-42-02` | `99-referencias/WhatsApp Image 2026-08-29 at 12.47.42 (2).jpeg` | Marca principal, símbolo, wordmark, versão clara e aplicações | Fornecido pelo usuário; autoria a confirmar | Referência interna/prototipagem; publicação a confirmar | `em revisão` |
| `REF-VIS-2026-08-29-12-47-42-03` | `99-referencias/WhatsApp Image 2026-08-29 at 12.47.42 (3).jpeg` | Versão escura, assinaturas, aplicações e sistema gráfico | Fornecido pelo usuário; autoria a confirmar | Referência interna/prototipagem; publicação a confirmar | `em revisão` |
| `REF-VIS-2026-08-29-12-47-42-04` | `99-referencias/WhatsApp Image 2026-08-29 at 12.47.42 (4).jpeg` | Versão clara e aplicações editoriais | Fornecido pelo usuário; autoria a confirmar | Referência interna/prototipagem; publicação a confirmar | `em revisão` |
| `REF-VIS-2026-08-29-12-47-42-05` | `99-referencias/WhatsApp Image 2026-08-29 at 12.47.42 (5).jpeg` | Paleta, tipografia, sistema gráfico, dashboard e assinaturas | Fornecido pelo usuário; autoria a confirmar | Referência interna/prototipagem; publicação a confirmar | `em revisão` |

As imagens contêm representações de logo, símbolo, assinaturas, tipografia e aplicações. Não reconstruir ou distribuir esses elementos como arquivos oficiais sem confirmar titularidade, licença, formato-mestre, direitos de terceiros e aprovação.

```yaml
asset_id: ASSET-000
source_path: ""
asset_type: ""
creator: "desconhecido"
source: ""
license: "não identificado"
obtained_at: ""
transformation: "nenhuma"
allowed_use: "interno"
status: "desconhecido"
owner: "a confirmar"
expiry: "revisar antes do uso"
notes: ""
```

## 5. Gate antes da publicação

Bloquear o uso quando faltar qualquer informação material sobre autoria, licença, consentimento, titularidade, validade, transformação ou contexto. O owner deve anexar a evidência e registrar a decisão no controle do projeto antes de alterar o status para `aprovado`.

## 6. Pendências

- criar fichas individuais para os assets selecionados;
- confirmar titularidade do logo e símbolo;
- confirmar licenças de fontes, fotografias, ícones e imagens geradas;
- registrar os assets usados no deck NESST e nos templates futuros;
- definir owner jurídico e processo de renovação/expiração.
