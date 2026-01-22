---
title: Returns
sidebar_position: 6
---

# Retornos

Klar requer retornos explícitos.

> Até mesmo funções `void` devem retornar explicitamente.

---

## Retorno `void`

Ambas as formas funcionam atualmente:
```kl
return;
```
```kl
return null;
```

`return null;` é atualmente recomendado pelo projeto, mas pode ser removido posteriormente para eliminar ambiguidade.

---

## Exemplo de retorno ausente

Se você esquecer de retornar, Klar emite um diagnóstico semântico.

Exemplo (simplificado):
```text
[K:E205] MissingReturnStatement
ERROR (SEMANTIC)
...
Nota:
  Até mesmo funções 'void' devem retornar explicitamente.
```

:::info Importante
Além disso, apenas UM retorno de função é permitido e ele DEVE estar explicitamente localizado no final da função, ou seja, retornos dentro do escopo de estruturas de controle não são permitidos.

Retornos antecipados causam um erro.
:::