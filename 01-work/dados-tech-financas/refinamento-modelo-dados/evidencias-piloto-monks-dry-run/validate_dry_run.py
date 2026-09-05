#!/usr/bin/env python3
"""Validate the deterministic synthetic Monks pilot rehearsal."""

import csv
import json
from pathlib import Path


ROOT = Path(__file__).parent


def load_csv(name):
    with (ROOT / name).open(newline="", encoding="utf-8") as handle:
        return list(csv.DictReader(handle))


def main():
    inputs = json.loads((ROOT / "inputs.synthetic.json").read_text(encoding="utf-8"))
    financial = load_csv("financial-cases.synthetic.csv")
    recommendations = load_csv("recommendations.synthetic.csv")

    assert inputs["synthetic"] is True
    assert inputs["source_type"] == "synthetic"
    assert inputs["coverage"]["fld_m0"]["covered_count"] / inputs["coverage"]["fld_m0"]["required_count"] >= 0.80
    assert inputs["coverage"]["kpi_m0"]["connected_count"] / inputs["coverage"]["kpi_m0"]["required_count"] > 0.60
    assert len(recommendations) == 5
    assert len({row["recommendation_id"] for row in recommendations}) == 5
    assert len(financial) == 2
    assert len({row["financial_case_id"] for row in financial}) == 2
    assert all(row["synthetic"] == "True" and row["source_type"] == "synthetic" for row in financial + recommendations)
    assert all(row["real_monks_data"] == "False" for row in financial)
    assert all(row["claim_status"] == "not_a_claim" for row in financial + recommendations)
    assert {row["financial_case_id"] for row in financial} == {item["financial_case_id"] for item in inputs["financial_cases"]}
    assert {row["recommendation_id"] for row in recommendations} == {item["recommendation_id"] for item in inputs["recommendations"]}
    print("DRY-RUN VALIDATION: PASS")


if __name__ == "__main__":
    main()
