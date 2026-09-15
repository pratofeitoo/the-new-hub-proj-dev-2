---
doc_id: PM-GOV-005
titulo: Fluxo de aprovação de dashboards — HUB
status: rascunho / provisório / não aprovado
versao: v0.1
owner: Dados/Inteligência + Produto + Operação — a confirmar
fontes:
  - ../05-sistema-de-produto-e-dashboards/padroes-de-dashboard.md
  - ../05-sistema-de-produto-e-dashboards/hierarquia-de-metricas.md
  - ../05-sistema-de-produto-e-dashboards/regras-de-visualizacao-de-dados.md
  - status-e-rotulos-de-maturidade.md
dependencias:
  - fluxo-de-aprovacao-de-claims.md
---

# Fluxo de aprovação de dashboards — HUB

> Gate para disponibilizar uma visão de dados no contexto autorizado. O dashboard não valida sozinho as métricas ou claims nele exibidos.

## Passos

1. Definir público, decisão, escopo, período, timezone, permissões e frequência de atualização.
2. Registrar ficha de cada métrica: definição, fórmula, unidade, denominador, camada M0–M4, fonte, owner e evidência.
3. Verificar transformação, reconciliação, dados faltantes, atraso, duplicidade e controles de acesso.
4. Aplicar padrões de visualização, status não cromático, resumo textual e proveniência.
5. Testar filtros, coortes, exportação, responsividade, teclado, zoom e estados de erro/vazio.
6. Revisar com owner dos dados, Produto/Operação e acessibilidade conforme risco.
7. Registrar decisão, versão, data, validade, audiência e instrução de retirada.

## Critérios de bloqueio

Métrica sem definição ou fonte, período ambíguo, cálculo não reproduzível, permissão excessiva, dado pessoal sem base aplicável, gráfico sem alternativa textual ou claim acima da evidência impedem a publicação.

## Revalidação

Reabrir o gate quando mudar fonte, definição, fórmula, coorte, período, permissão, visual que altere interpretação ou qualquer claim associado. Falhas de qualidade devem ser visíveis e podem exigir retirada.
