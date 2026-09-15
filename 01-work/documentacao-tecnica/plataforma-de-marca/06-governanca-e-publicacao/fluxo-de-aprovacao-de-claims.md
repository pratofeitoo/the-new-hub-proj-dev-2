---
doc_id: "PM-GOV-001"
titulo: "Fluxo de aprovação de claims"
status: "hipotese"
versao: "v0.1"
owner: "Governança verbal — a confirmar"
nao-aprovado: true
fontes:
  - ../02-identidade-verbal/claims-registry.md
  - ../02-identidade-verbal/regras-para-evidencia-e-incerteza.md
  - ../00-controle/matriz-fontes-e-autoridade.md
dependencias:
  - status-e-rotulos-de-maturidade.md
---

# Fluxo de aprovação de claims

> Este fluxo é um gate de trabalho. Ele não aprova nenhum claim por si só. Um claim só pode sair do estado provisório quando a evidência e os responsáveis registrarem uma decisão explícita.

## Estados

| Estado | Pode fazer | Não pode fazer |
|---|---|---|
| `rascunho` | Registrar formulação, público, contexto e lacuna. | Publicar ou apresentar como fato. |
| `em validação` | Reunir fonte, período, denominador, método, limitações e owner. | Subir o nível de evidência por inferência. |
| `bloqueado` | Corrigir fonte, escopo, wording ou gate faltante. | Usar em peça pública. |
| `pronto para revisão` | Enviar o pacote completo para revisores nomeados. | Tratar revisão como aprovação. |
| `aprovado para contexto` | Usar somente no canal, público, período e formulação registrados. | Reaproveitar em outro contexto sem revisão. |
| `expirado` / `rejeitado` | Preservar histórico e registrar motivo. | Reativar sem nova validação. |

## Passos do gate

1. **Registrar:** criar ou atualizar a linha em `02-identidade-verbal/claims-registry.md` com todos os campos obrigatórios.
2. **Delimitar:** conferir sujeito, verbo, objeto, público, contexto, período, escopo e unidade. Separar fatos, hipóteses, projeções e exemplos.
3. **Rastrear:** anexar caminho, versão, trecho, data de captura e owner da fonte. Fonte em `01-work/`, `02-review/` ou `wiki/` permanece provisória até promoção formal.
4. **Classificar:** atribuir `E0`–`E4` e um rótulo visível de incerteza. Não usar “comprovado”, “garantido”, “certificado” ou causalidade sem o nível e o gate correspondentes.
5. **Testar a formulação:** comparar com `prohibited_stronger_formulation`. Se a peça exigir a versão mais forte, abrir novo claim e novo gate.
6. **Revisar:** enviar ao owner da fonte e aos revisores obrigatórios por categoria.
7. **Decidir:** registrar decisão, data, versão, contexto permitido, limitações, validade e nome/função dos aprovadores.
8. **Publicar com controle:** usar a redação exata aprovada e conservar a fonte e o registro da decisão junto da peça.
9. **Revalidar ou retirar:** bloquear, corrigir ou retirar quando a fonte expirar, o escopo mudar, houver contestação ou o contexto sair do registro.

## Revisores obrigatórios por categoria

| Categoria | Revisores mínimos | Condição adicional |
|---|---|---|
| Financeiro, receita, economia, ROI | Finanças + Dados/Inteligência | Baseline, fórmula, período, reconciliação e aprovação financeira. |
| Causalidade e impacto | Dados/Inteligência + revisor metodológico independente | Método de comparação/contrafactual, confundidores, parcela atribuída e limites. |
| Certificação, conformidade, garantia | Jurídico + owner do processo | Autoridade, regulamento, escopo, validade e linguagem sem promessa indevida. |
| Selo HUB, reconhecimento, endosso | Governança independente do Selo + Jurídico | Independência, critérios, avaliadores, conflitos, recurso e decisão documentados. `GOV-003` bloqueia o uso enquanto aberto. |
| Benchmark e superlativos | Dados + LGPD/DPO + Estratégia de marca | Coorte, denominador, período, comparabilidade, anonimização e fonte. |
| Moat, liderança, “único” ou diferenciação | Estratégia de marca + Jurídico quando houver superlativo | Evidência comparável e definição do universo. Sem isso, manter como hipótese. |
| Capacidade de produto ou plataforma | Produto/Operação + Governança verbal | Evidência de disponibilidade no escopo e ambiente alegado; blueprint não prova implementação. |

## Pacote mínimo para decisão

O pedido de aprovação deve incluir:

- ID e versão do claim;
- texto exato e formulação proibida que foi testada;
- público, canal, peça, finalidade e período de uso;
- fonte, trecho, versão, data, escopo e owner;
- nível de evidência, rótulo de incerteza, denominador e limitações;
- revisão por categoria, conflitos de interesse e dependências;
- validade/expiração e evento de revalidação;
- decisão (`aprovar para contexto`, `devolver`, `bloquear` ou `rejeitar`), aprovadores e data.

## Bloqueios automáticos

O claim fica `bloqueado` quando ocorrer qualquer uma das condições abaixo:

- fonte ausente, não rastreável, expirada ou incompatível com o contexto;
- owner não identificado ou gate obrigatório ausente;
- número sem unidade, denominador, período ou fórmula;
- associação descrita como causalidade;
- atividade, adoção, pipeline, match ou projeção descritos como valor realizado;
- ROI ilustrativo apresentado como retorno comprovado;
- benchmark sem coorte, comparabilidade ou anonimização;
- “certificação”, “acreditação”, “garantia”, “Selo” ou “endosso” sem autoridade e decisão válidas;
- reutilização de um claim aprovado fora do público, canal, período ou formulação registrados;
- tentativa de transformar este documento, o registro ou um blueprint em aprovação.

## Regra de reversão

Se a evidência mudar, o claim deve voltar para `em validação` ou `bloqueado`; não se corrige somente a peça publicada. Registrar a versão anterior, motivo, impacto, canais afetados e responsável pela retirada ou correção. A retirada preserva o histórico de decisão.

## Próximo handoff

Enviar este fluxo e o registro para **Verificação e integração**, com foco em links, consistência dos estados, owners, campos obrigatórios e ausência de claims aprovados por inferência. Depois, encaminhar à coordenação humana para resolver owners, baseline financeiro, protocolo de impacto/causalidade, regras do Selo e promoção eventual para revisão.
