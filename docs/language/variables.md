---
title: Variables
sidebar_position: 4
---

# Variables

Rules:
- variables must have an explicit type
- variables must be initialized (no uninitialized declarations)
- shadowing/redeclaration is blocked (strict)

Examples:

```kl
integer count = 0;
double pi = 3.14;
boolean ok = false;
character ch = 'a';
String name = "Klar";
```

Style
Klar prefers camelCase for identifiers.
(Validation is planned; enforcement may not exist yet.)