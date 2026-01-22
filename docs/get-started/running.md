---
title: Running & Building
sidebar_position: 4
---

# Running & Building

Klar currently processes **one file at a time**.

---

## Run

```bash
kc run src/main.kl

```

### The Execution Pipeline:

1. **Lex:** Tokenization of source.
2. **Parse:** Abstract Syntax Tree (AST) generation.
3. **Type-check:** Semantic validation.
4. **Transpile:** Conversion to Java source code.
5. **Compile:** Invocation of `javac` on the generated source.
6. **Run:** Invocation of `java` on the resulting bytecode.

---

## Build only

```bash
kc build src/main.kl

```

This generates output into `out/`:

* `*.java`
* `*.class`

---

## Debugging Commands

### Parse only

Used to verify the grammar and AST structure.

```bash
kc parse src/main.kl

```

### Lex only

Used to verify tokenization.

```bash
kc lex src/main.kl
kc lex src/main.kl -st   # show tokens table

```