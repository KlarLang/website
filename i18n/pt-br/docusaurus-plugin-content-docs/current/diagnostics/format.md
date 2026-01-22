---
title: Formato
sidebar_position: 2
---

# Formato de diagnóstico

Formato típico:

- código `[K:E217]`
- título (ex.: `UnresolvedSymbol`)
- severidade + categoria (`ERROR (SEMANTIC)`)
- localização (`arquivo:linha:coluna`)
- trecho + cursor `^`
- Causa
- Correção
- às vezes Esperado / Exemplo / Nota

---

## Exemplo

```text
[K:E217] UnresolvedSymbol
ERROR (SEMANTIC)
at teste.kl:3:12

1 | @Use("java")
2 | public void main(){
3 |     println(a);
  |             ^

Causa:
  A variável 'a' não existe

Correção:
  Remova-a ou crie-a
```