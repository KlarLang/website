---
title: CLI Reference (kc)
sidebar_position: 10
---

# `kc` CLI Reference

Klar ships with the `kc` CLI. 

:::info
Klar currently processes **one source file at a time**.
:::

---

## Supported file extension

Official extension: **`.kl`**

*Note: some builds may also accept `.klar` for compatibility, but `.kl` is the documented standard.*

---

## Commands

### `kc run <file.kl>`
Transpile, compile, and run a Klar program in a single step.

```bash
kc run src/main.kl

```

### `kc build <file.kl>`

Transpile and compile (generates output into `out/`).

```bash
kc build src/main.kl

```

### `kc parse <file.kl>`

Run the parser (useful for debugging syntax issues).

```bash
kc parse src/main.kl

```

### `kc lex <file.kl>`

Run the lexer to see how the code is being tokenized.

```bash
kc lex src/main.kl

```

To see the **Tokens output** table:

```bash
kc lex src/main.kl -st

```

---

## Global Flags

| Flag | Description |
| --- | --- |
| `--version`, `-V` | Show the current version of the Klar compiler. |
| `--help`, `-h` | Show help information for commands. |

---

## Diagnostics Example

If you pass an invalid file, Klar returns a structured diagnostic:

```bash
kc run a

```

**Output:**

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

*(Exact wording may evolve before v1.0.0.)*
