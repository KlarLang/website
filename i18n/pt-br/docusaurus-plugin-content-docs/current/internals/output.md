---
title: Output layout
sidebar_position: 3
---

# Layout de saída

O Klar escreve os artefatos gerados em `out/`.

Exemplos típicos:
- `out/<nome>.java`
- `out/<nome>.class`

Comportamento atual:
- cada função se torna uma unidade de saída Java
- `main` se torna o ponto de entrada Java: `public static void main(String[] args)`

Este comportamento pode evoluir antes da v1.0.0.
