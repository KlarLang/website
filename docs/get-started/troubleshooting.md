---
title: Troubleshooting
sidebar_position: 6
---

# Troubleshooting

## `kc: command not found`

Your shell may not have reloaded the PATH update.

Try:

```bash
source ~/.bashrc

```

*(or your shell config)*

---

## Invalid file type (CLI error)

Klar only processes `.kl` (documented standard).

Example:

```bash
kc run a

```

Typical output:

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

```

---

## Java not found

Klar runs via a java process internally.
Make sure `java` is available in your PATH:

```bash
java -version

```