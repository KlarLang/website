---
title: Functions
sidebar_position: 5
---

# Funções

Uma função Klar requer:

1. `@Use("java")` (obrigatório atualmente)
2. Um modificador de acesso explícito (atualmente apenas `public` é totalmente suportado)
3. Um tipo de retorno
4. Um nome
5. Parâmetros (opcional)
6. Uma declaração de retorno explícita

---

## Exemplo: main
```kl
@Use("java")
public void main(){
    println("Hello World From Klar!");

    return null;
}
```

## Exemplo: função tipada
```kl
@Use("java")
public integer sumOf(integer a, integer b){
    return a + b;
}
```

---

## Restrições importantes (atualmente)

* **`@Use("java")`** é obrigatório em todos os métodos (escolha de design).
* **`protected` / `internal`** podem existir como palavras-chave, mas apenas `public` tem garantia de transpilar corretamente atualmente.