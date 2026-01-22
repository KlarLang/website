---
title: "@Use (Backend Target)"
sidebar_position: 9
---

# `@Use("java")`

Klar usa `@Use` para declarar o alvo de backend para uma função.

Atualmente:
- `@Use` é obrigatório em **todas** as funções.
- Apenas `@Use("java")` é suportado.

Isso é por design: explicitação em vez de convenção.

---

## Exemplo
```kl
@Use("java")
public void main(){
    println("Hello!");

    return null;
}
```

---

## Anotação ausente

Se você omitir `@Use`, Klar emite um diagnóstico de sintaxe como:
```text
[K:E113] MissingAnnotation
ERROR (SYNTAX)
...
Expected:
  '@Use'
```

---

## Alvo não suportado

Se você especificar um alvo de backend não suportado:
```kl
@Use("python")
public void main(){
    return null;
}
```

Klar emite um diagnóstico de backend:
```text
[K:E400] UnknownBackendTarget
ERROR (BACKEND)
...
Cause:
  Unsupported backend target 'python'
Fix:
  Use a supported backend (currently only 'java' is supported)
```

---

## Roadmap

Planejado: interoperabilidade começando com **interop JSON**.

Backends adicionais existem como uma direção de longo prazo, não uma promessa atual.