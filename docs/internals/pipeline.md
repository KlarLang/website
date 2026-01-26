---
title: Pipeline overview
sidebar_position: 2
---

# Pipeline overview

Current pipeline (high level):

1) Lexer  
2) Parser  
3) Type checking / semantic validation  
4) IR / Intent Resolution 
5) Transpile to Java source  
6) Compile with `javac`  
7) Run with `java`

Notes:
- lexer is the most stable component today
- parser/type-checker/transpiler are still unstable before v1.0.0
- diagnostics exist across stages (LEXICAL/SYNTAX/SEMANTIC/BACKEND/CLI)
