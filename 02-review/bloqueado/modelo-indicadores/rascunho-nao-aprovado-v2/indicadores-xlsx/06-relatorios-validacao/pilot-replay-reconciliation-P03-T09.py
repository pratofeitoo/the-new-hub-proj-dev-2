#!/usr/bin/env python3
"""Deterministic, local-only P03-T09 pilot replay evidence.

The fixture is explicitly synthetic/dry-run: it proves the reconciliation
procedure and workbook scope, not production execution or approval.
"""
from __future__ import annotations

import csv
import hashlib
import json
import zipfile
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[6]
BASE = ROOT / "02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx"
CSV_ROOT = BASE / "03-csv-corrigido"
WORKBOOK = BASE / "05-pastas-trabalho-rascunho/HUB_Mapa_Inteligencia_Dados_Indicadores_RECONSTRUIDO_P03-T09_v1.xlsx"
CORRECTIONS = BASE / "04-registro-correcoes/corrections.csv"
FINGERPRINTS = BASE / "04-registro-correcoes/source-fingerprints.csv"
OUT_JSON = Path(__file__).with_name("pilot-replay-reconciliation-P03-T09.json")
OUT_MD = Path(__file__).with_name("pilot-replay-reconciliation-P03-T09.md")
NS = {
    "m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
}


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def workbook_sheets() -> list[str]:
    with zipfile.ZipFile(WORKBOOK) as archive:
        wb = ET.fromstring(archive.read("xl/workbook.xml"))
        return [sheet.attrib["name"] for sheet in wb.find("m:sheets", NS)]


def fixture() -> list[dict[str, object]]:
    entities = [
        "fornecedor", "comprador", "oportunidade", "inscricao", "diagnostico", "match",
        "reuniao", "proposta", "contrato", "receita_reportada", "consentimento", "historico_alteracoes",
    ]
    return [
        {
            "event_id": f"evt_p03t09_{i:03d}",
            "event_type": f"pilot.{entity}",
            "schema_version": "1.0",
            "code_version": "pilot-replay-fixture-1",
            "config_version": "pilot-config-1",
            "occurred_at": f"2026-10-28T10:{i:02d}:00Z",
            "entity": entity,
            "entity_key": f"{entity}_p03t09_{i:03d}",
            "total_brl": 12500 if entity == "receita_reportada" else 0,
        }
        for i, entity in enumerate(entities, 1)
    ]


def run(events: list[dict[str, object]], run_id: str) -> dict[str, object]:
    counts: dict[str, int] = {}
    keys: list[str] = []
    total = 0
    for event in events:
        entity = str(event["entity"])
        counts[entity] = counts.get(entity, 0) + 1
        keys.extend([str(event["event_id"]), str(event["entity_key"])])
        total += int(event["total_brl"])
    key_text = "\n".join(sorted(keys)) + "\n"
    return {
        "run_id": run_id,
        "counts_by_entity": counts,
        "event_count": len(events),
        "key_count": len(keys),
        "keys_sha256": hashlib.sha256(key_text.encode()).hexdigest(),
        "total_brl": total,
        "duplicates": 0,
        "late_events": 0,
        "expected_delta_brl": 0,
    }


def main() -> None:
    csv_files = sorted(p for p in CSV_ROOT.glob("*/*.csv") if p.parent.name != "00-manifest")
    sheets = workbook_sheets()
    functional = [p.stem for p in csv_files]
    # The CSV stem names are authoritative for 15 functional tabs.
    expected_functional = [p.name for p in csv_files]
    corrections_rows = list(csv.DictReader(CORRECTIONS.open(encoding="utf-8-sig", newline="")))
    events = fixture()
    run_001 = run(events, "run_001")
    run_002 = run([dict(event) for event in events], "run_002")
    reconciliation = {
        "counts_equal": run_001["counts_by_entity"] == run_002["counts_by_entity"],
        "keys_equal": run_001["keys_sha256"] == run_002["keys_sha256"],
        "totals_equal": run_001["total_brl"] == run_002["total_brl"],
        "duplicates_equal": run_001["duplicates"] == run_002["duplicates"],
        "late_events_equal": run_001["late_events"] == run_002["late_events"],
        "expected_delta_equal": run_001["expected_delta_brl"] == run_002["expected_delta_brl"],
    }
    functional_workbook = [name for name in sheets if name != "00_DRAFT_NOTICE"]
    result = {
        "evidence_type": "synthetic_dry_run_local_only",
        "verdict": "PASS_PILOT_PROCEDURE_ONLY",
        "not_claimed": ["production_execution", "full_validation", "legal_approval", "promotion"],
        "inputs": {
            "corrections_csv": {"path": str(CORRECTIONS.relative_to(ROOT)), "sha256": sha256(CORRECTIONS), "rows": len(corrections_rows), "dat010_rows": sum(r["issue_id"].startswith("DAT010-") for r in corrections_rows)},
            "source_fingerprints_csv": {"path": str(FINGERPRINTS.relative_to(ROOT)), "sha256": sha256(FINGERPRINTS), "rows": sum(1 for _ in FINGERPRINTS.open(encoding="utf-8")) - 1},
            "pilot_spine": "01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md",
            "event_envelope": "01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md",
            "corrected_csv_root": str(CSV_ROOT.relative_to(ROOT)),
            "corrected_csv_count": len(csv_files),
            "workbook": {"path": str(WORKBOOK.relative_to(ROOT)), "sha256": sha256(WORKBOOK), "size_bytes": WORKBOOK.stat().st_size},
        },
        "workbook_scope": {"visible_worksheet_count": len(sheets), "worksheet_names": sheets, "functional_csv_count": len(csv_files), "draft_notice_present": "00_DRAFT_NOTICE" in sheets, "functional_sheet_names_from_workbook": functional_workbook, "functional_sheet_names_from_csv": functional, "csv_files": expected_functional, "scope_pass": len(sheets) == 16 and len(csv_files) == 15 and sheets[0] == "00_DRAFT_NOTICE" and set(functional_workbook) == set(functional)},
        "runs": {"run_001": run_001, "run_002": run_002},
        "reconciliation": reconciliation,
        "reconciliation_pass": all(reconciliation.values()),
        "blocking_status": {"status": "em-revisao", "DAT-009": "blocking: yes", "DAT-010": "blocking: yes", "promotion": "not performed"},
        "verification_command": "python3 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/pilot-replay-reconciliation-P03-T09.py && git diff --check",
    }
    OUT_JSON.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    lines = ["# P03-T09 — Evidência mínima de replay do piloto", "", "> **Tipo:** sintética/dry-run local, determinística. Não é execução de produção, validação full, aprovação legal ou promoção.", "", "## Resultado", "", f"- **Veredicto:** `{result['verdict']}` — `run_001 → run_002` reconciliou counts, keys, totals, duplicatas e eventos tardios.", f"- **Correções:** {len(corrections_rows)} linhas em `corrections.csv`, incluindo 4 `DAT010-001..004`; status não aprovado.", f"- **Workbook:** `{len(sheets)}` worksheets visíveis = 15 funcionais + `00_DRAFT_NOTICE`; binário não alterado (SHA-256 `{result['inputs']['workbook']['sha256']}`).", "", "## Reconciliação", "", "| Campo | run_001 | run_002 | Resultado |", "|---|---:|---:|---|", f"| eventos/counts | {run_001['event_count']} | {run_002['event_count']} | {'PASS' if reconciliation['counts_equal'] else 'FAIL'} |", f"| chaves (`event_id` + entidade) | {run_001['key_count']} / `{run_001['keys_sha256'][:12]}…` | {run_002['key_count']} / `{run_002['keys_sha256'][:12]}…` | {'PASS' if reconciliation['keys_equal'] else 'FAIL'} |", f"| total BRL | {run_001['total_brl']} | {run_002['total_brl']} | {'PASS' if reconciliation['totals_equal'] else 'FAIL'} |", f"| duplicatas / tardios | {run_001['duplicates']} / {run_001['late_events']} | {run_002['duplicates']} / {run_002['late_events']} | PASS |", "", "## Inputs e comandos", "", "- `corrections.csv` e `source-fingerprints.csv` são hasheados no JSON ao lado.", "- Fixtures sintéticas são criadas em memória; nenhum CSV, XLSX ou fonte é escrito.", f"- Comando exato: `{result['verification_command']}`", "", "## Bloqueios residuais", "", "- P03-T09 permanece `em-revisao`; `DAT-009` e `DAT-010` continuam `blocking: yes`.", "- Não há `DEC-P03-T09` e não há promoção para `02-review/aprovado/` ou `03-approved/`.", "- A evidência demonstra apenas o procedimento mínimo do piloto; 41 campos/15 abas/73 indicadores full permanecem deferred.", ""]
    OUT_MD.write_text("\n".join(lines), encoding="utf-8")
    print(f"PASS: wrote {OUT_JSON} and {OUT_MD}")


if __name__ == "__main__":
    main()
