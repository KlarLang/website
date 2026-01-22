---
title: Types
sidebar_position: 3
---

# Types

Klar types map to Java types today.

## Primitive/value types

- `integer` → `int`
- `double` → `double` (no `float` today)
- `boolean` → `boolean`
- `character` → `char`

## Reference type

- `String` → `java.lang.String`

## Special

- `void` — return type only
- `null` — value for reference types
  - also allowed as `return null;` in `void` functions today
  - this is planned to be removed later to avoid ambiguity

---

## Missing (today)

- arrays (planned)
- structs / user-defined types
- casts
- implicit numeric conversions