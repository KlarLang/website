---
title: Códigos (exemplos atuais)
sidebar_position: 4
---

# Códigos de diagnóstico

Antes da v1.0.0, os códigos não têm estabilidade garantida.  
Ainda assim, documentar os códigos atuais ajuda os usuários a navegar pelos erros mais rapidamente.

---

## CLI

### `KC002` — InvalidFileType
Disparado quando a extensão do arquivo não é suportada.

---

## LEXICAL

### `E000` — ExpectedCharacter
Exemplo: o alvo de uma anotação deve ser uma string.

---

## SYNTAX

### `E113` — MissingAnnotation
`@Use` ausente em uma função.

---

## SEMANTIC

### `E102` — MissingSemicolon
Falta `;` no final da instrução.

### `E205` — MissingReturnStatement
Mesmo funções `void` devem retornar explicitamente.

### `E217` — UnresolvedSymbol
Uso de um identificador que não existe no escopo.

---

## BACKEND

### `E400` — UnknowBackendTarget
Alvo de backend não suportado (atualmente apenas `java` é suportado).

---

## Nota

Esta lista irá se expandir.  
Se você deseja um “contrato estável” para diagnósticos, isso será um objetivo da v1.0+.
