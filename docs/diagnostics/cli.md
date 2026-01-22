---
title: CLI diagnostics
sidebar_position: 5
---

# CLI diagnostics

Klar’s CLI produces diagnostics too.

Example:

```text
[K:KC002] InvalidFileType
ERROR (CLI)
at input file

Cause:
  Klar only processes files with the extension '.kl'.

Fix:
  Rename the file or select a valid '.kl' source.

Example:
  kc run program.kl
If you see a CLI diagnostic, fix the CLI usage first — then rerun.