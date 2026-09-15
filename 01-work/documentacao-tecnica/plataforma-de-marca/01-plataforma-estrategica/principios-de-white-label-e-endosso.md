---
titulo: Princípios de white-label e endosso — HUB
status: provisório / princípios para revisão
fontes:
  - 04-project-management/tarefas/P06-T11_Arquitetura_Marca_WhiteLabel.md
  - 00-project-control/registro-lacunas/lacunas/BRD-003.md
  - 02-review/01-mvps/LEIAME-origem-inbox.md
  - 01-work/produto-e-operacao/refinamento-produto/matriz-autorizacao-tenancy.md
---

# Princípios de white-label e endosso — HUB

> São princípios de desenho para revisão por Produto, Marca e Jurídico. Não autorizam deployment, licenciamento ou publicação.

## 1. Evidências observadas

- White-label é descrito como configurável, mas BRD-003 registra como ausentes as fronteiras de atribuição, visibilidade, integridade metodológica e customizações proibidas.
- P06-T11 exige hierarquia marca-produto-grupo, regras de visibilidade/atribuição e limites de deployment, com aprovação de Marca, Produto e Jurídico.
- A matriz de autorização de tenancy é um artefato de refinamento de produto; não substitui contrato, autorização de marca ou decisão jurídica.
- A lógica da plataforma exige consentimento, auditabilidade, reversibilidade e override humano para automações relevantes.

## 2. Princípios recomendados

1. **Atribuição verificável:** todo deployment deve definir quem opera, quem é responsável pela experiência e qual capacidade HUB está sendo utilizada.
2. **Integridade metodológica:** personalização visual ou textual não pode alterar critérios, definições, evidências, trilhas ou salvaguardas do método sem revisão.
3. **Transparência proporcional:** o usuário deve saber quando está diante de uma capacidade HUB, de uma customização do cliente ou de uma integração de terceiro.
4. **Separação de dados:** tenants, coortes e contextos não devem ser misturados; uso agregado exige finalidade, consentimento/base legal e regra de anonimização aprovada.
5. **Endosso não implícito:** presença do logo, nome ou case de um parceiro não significa aprovação, certificação, resultado ou recomendação por esse parceiro.
6. **Fallback e reversibilidade:** remover a marca HUB não pode apagar evidência, histórico ou responsabilidade operacional; a jornada deve continuar auditável.
7. **Escada de visibilidade:** definir níveis explícitos — atribuição completa, co-branding, powered by, marca invisível ao usuário e proibido — por canal e tipo de oferta.

## 3. Matriz preliminar para validação

| Contexto | Visibilidade HUB recomendada | Condição mínima | Estado |
|---|---|---|---|
| Protótipo exploratório | Visível e rotulado como protótipo | Sem promessa de produto validado. | Recomendação. |
| Piloto/case | Visível ou co-branded | Autorização de uso, escopo e limitações. | Recomendação. |
| Serviço customizado | Co-branding ou atribuição contratual definida | Integridade metodológica e dados segregados. | Recomendação. |
| White-label comercial | A decidir por oferta/canal | Aprovação Produto + Marca + Jurídico; contrato. | Bloqueado até regra. |
| Selo/reconhecimento | Não liberar por white-label | Independência, charter e claims aprovados. | Bloqueado. |

## 4. Proibições provisórias

- Não apagar atribuição para sugerir certificação, auditoria ou validação independente.
- Não usar resultados de um cliente como benchmark de outro sem autorização e metodologia aprovada.
- Não misturar marca de parceiro com a HUB de modo que pareça sociedade, endosso ou garantia não documentados.
- Não permitir customização que mude a definição de métrica, critério de reconhecimento ou trilha de evidência sem versionamento.

## 5. Decisões pendentes

- Níveis oficiais de white-label e canais permitidos.
- Atribuição mínima obrigatória por produto, contrato e interface.
- Regras de uso de dados, co-branding, logos, cases e nomes de clientes.
- Aprovação de BRD-003 e entrega formal de P06-T11.

