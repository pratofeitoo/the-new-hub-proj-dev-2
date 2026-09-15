---
titulo: Inventário de fontes e direitos — Plataforma de Marca HUB
status: rascunho / inventário provisório
escopo: rastreabilidade de documentos, assets, fontes tipográficas, logos e direitos
owner: Jurídico + Identidade visual — a confirmar
fontes:
  - inventario-de-visuais.md
  - ../00-controle/matriz-fontes-e-autoridade.md
  - ../03-identidade-visual/direitos-e-proveniencia-de-assets.md
dependencias:
  - mapeamento-para-fontes-aprovadas.md
  - ../06-governanca-e-publicacao/status-e-rotulos-de-maturidade.md
---

# Inventário de fontes e direitos

> Este documento identifica lacunas de proveniência. Armazenar um arquivo no repositório não demonstra titularidade, licença ou autorização de publicação.

## 1. Ficha de item

```text
asset_id:
arquivo/caminho:
tipo: imagem | logo | fonte | ícone | deck | documento | dado
autor/criador:
fonte original:
data de criação/captura:
transformações:
licença/base de uso:
território, prazo e canais:
atribuição exigida:
restrições:
owner:
evidência do direito:
status: desconhecido | em verificação | autorizado | bloqueado
validade/revisão:
```

## 2. Inventário inicial

| Família | Escopo observado | Situação |
|---|---|---|
| Imagens do arquivo de rascunhos | 45 imagens, incluindo exportações WhatsApp e moodboards | origem, autoria e licença a confirmar |
| Decks históricos | 6 PDFs e 1 PPTX | direitos, claims e logos a verificar por item |
| Logo/símbolo HUB | ocorrências em imagens e decks | arquivo-mestre e titularidade a confirmar |
| Tipografia | hipóteses `Sora` e `Inter` | licença, pesos e disponibilidade a confirmar |
| Ícones/ilustrações | elementos em decks e referências | fonte e licença a confirmar |
| Dados e métricas | fontes citadas em documentos e decks | período, método, owner e autorização a confirmar |

## 3. Regras de bloqueio

Bloquear uso público quando autoria, licença, território, prazo, atribuição, autorização de terceiro ou transformação relevante forem desconhecidos. Não inferir licença de fonte do nome do arquivo, aparência, repetição ou localização.

## 4. Próximas ações

- atribuir `asset_id` a imagens, logos, fontes e elementos reutilizáveis;
- separar referência visual de asset candidato a uso;
- coletar comprovantes e autorizações;
- validar fontes em ambientes reais e registrar fallback;
- vincular cada asset ao deck, página ou artefato que o usa;
- registrar retirada, expiração e substituição.
