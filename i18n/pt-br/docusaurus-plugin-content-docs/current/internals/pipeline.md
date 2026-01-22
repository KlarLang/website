---
title: Pipeline overview
sidebar_position: 2
---

# Visão geral do Pipeline

Pipeline atual (nível alto):

1) Lexer (Analisador Léxico)
2) Parser (Analisador Sintático)
3) Verificação de tipos / Validação semântica
4) Transpilação para código-fonte Java
5) Compilação com `javac`
6) Execução com `java`

Notas:
- O lexer é o componente mais estável atualmente.
- O parser/type-checker/transpiler ainda são instáveis antes da v1.0.0.
- Existem diagnósticos em todas as etapas (LEXICAL/SYNTAX/SEMANTIC/BACKEND/CLI).