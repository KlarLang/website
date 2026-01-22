---
title: Diagnósticos da CLI
sidebar_position: 5
---

# Diagnósticos da CLI

A CLI do Klar também produz diagnósticos.

Exemplo:

```text
[K:KC002] InvalidFileType
ERROR (CLI)
at input file

O arquivo '<fileName>' não é um arquivo fonte Klar.

Causa:
  O Klar processa apenas arquivos com as extensões '.kl' e '.klar'.

Correção:
  Renomeie o arquivo ou selecione um fonte válido '.kl' ou '.klar'.

Exemplo:
  kc run program.kl
```

Se você encontrar um diagnóstico da CLI, corrija primeiro o uso da CLI — depois execute novamente.