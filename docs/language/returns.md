---
title: Returns
sidebar_position: 6
---

# Returns

Klar requires explicit returns. 

> Even `void` functions must return explicitly.

---

## `void` return

Both forms work today:

```kl
return;

```

```kl
return null;

```

`return null;` is currently recommended by the project, but may be removed later to eliminate ambiguity.

---

## Missing return example

If you forget to return, Klar emits a semantic diagnostic.

Example (simplified):

```text
[K:E205] MissingReturnStatement
ERROR (SEMANTIC)
...
Note:
  Even 'void' functions must return explicitly.

```