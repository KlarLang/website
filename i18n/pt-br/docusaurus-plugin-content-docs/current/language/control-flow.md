---
title: Control Flow
sidebar_position: 8
---

# Fluxo de Controle

O fluxo de controle do Klar é rigoroso por design, visando eliminar ambiguidade em estruturas aninhadas.

### As Duas Regras de Ouro do Fluxo Klar:
1. **Sem Abreviações:** Blocos sempre usam `{ }`. Instruções `if` de linha única sem chaves são proibidas.
2. **Terminação Explícita:** Cadeias condicionais devem sempre terminar com a palavra-chave `afterall`.

---

## `if / otherwise / afterall`

### `if` Básico
Mesmo um `if` simples requer o terminador `afterall;`.
```kl
if (condition) {
    // código a executar
} afterall;
```

### `if` com Alternativa (Else)

No Klar, o que outras linguagens chamam de `else` é tratado pelo bloco `afterall`.
```kl
if (condition) {
    // código
} afterall {
    // lógica alternativa
}
```

### A Cláusula `otherwise` (Else-if)

A palavra-chave `otherwise` requer uma cláusula `because`. Isso força o desenvolvedor a documentar a intenção do ramo alternativo diretamente na sintaxe.
```kl
if (score > 90) {
    println("A");
} otherwise (score > 80) because "high performer threshold" {
    println("B");
} afterall {
    println("F");
}
```

:::info Regras de Sintaxe

* **`because "..."`** é obrigatório em todo bloco `otherwise`.
* **`afterall`** é obrigatório para fechar a cadeia `if`.
* O corpo de `afterall { ... }` é opcional, mas a palavra-chave (ou ponto e vírgula `afterall;`) não é.
:::

---

## Laços

### `while`

Klar suporta laços `while` padrão. Ao contrário da cadeia condicional, `while` não requer um terminador especial além da chave de fechamento.
```kl
while (condition) {
    // lógica de repetição
}
```

**Observações sobre Laços:**

* Chaves `{}` são obrigatórias mesmo para instruções únicas.
* `while` **não** usa `afterall`.

---


:::info Regras de Sintaxe
* Laços `for`
* Laços `foreach` / baseados em iterador
* `switch` / Correspondência de padrões

Todos estes não existem no Klar.
:::