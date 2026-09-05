# 02 — Review: pacotes congelados aguardando gate

> **Fronteira:** conteúdo congelado em revisão. Sem edições enquanto estiver aqui — só comentários e decisão do gate.
> **Status permitido:** `em-revisao` — e a pasta deve ser verdade.

## Regras

1. Entrada = `git mv` de `01-work/` + carimbo `status: em-revisao` + dono do gate + data.
2. Enquanto em revisão, correções voltam como nova versão em `01-work/`, nunca editando o pacote aqui.
3. Saída: aprovado → `03-approved/`; rejeitado/bloqueado → de volta a `01-work/` (ou `02-review/bloqueado/` com motivo).
4. `bloqueado/` guarda o que o gate travou + motivo explícito. Bloqueado nunca vai para `03-approved/`.
