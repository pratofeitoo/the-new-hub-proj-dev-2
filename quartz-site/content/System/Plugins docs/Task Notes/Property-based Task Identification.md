---
title: Property-based Task Identification
source: https://tasknotes.dev/settings/property-identification/
author:
published:
created: 2026-08-05
description: When you choose to identify task files by a frontmatter property (instead of a tag), TaskNotes will match notes whose frontmatter property equals the configured value.
tags:
  - clippings
updated: 2026-08-05T03:43
---
When you choose to identify task files by a frontmatter property (instead of a tag), TaskNotes will match notes whose frontmatter property equals the configured value.

## Boolean values

- Enter the setting value as true or false (without quotes) in the settings UI.
- Obsidian stores checkbox properties as real booleans, not strings. The plugin compares booleans correctly:

Tip: You don’t need to quote boolean values in frontmatter. Use plain true/false to keep Obsidian’s property types consistent.

## Examples

- Setting: Property Name = isTask, Property Value = true
- Setting: Property Name = isTask, Property Value = false

For related configuration details, see [Task Properties](https://tasknotes.dev/settings/task-properties/).