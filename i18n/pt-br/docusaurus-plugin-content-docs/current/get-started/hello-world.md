---
title: Hello World
sidebar_position: 3
---

# Hello World

Este guia assume que você já instalou o Klar via Loom.

---

## Criar um projeto (opcional)

O `loom new` existe principalmente para gerar uma árvore de projeto simples e um README.
Ele **não é obrigatório** para executar o Klar.

```bash
loom new my-project
cd my-project
````

O Loom irá gerar algo como:

```text
.
├── out/
├── README.md
└── src/
    └── main.kl
```

## Seu primeiro programa em Klar

Crie `src/main.kl`:

```kl
@Use("java")
public void main(){
    println("Hello from Klar!");

    return null;
}
```

### Notas:

* `@Use("java")` é obrigatório
* `public` é obrigatório
* Funções `void` ainda retornam explicitamente (`return;` também funciona, mas `return null;` é atualmente o recomendado)

## Executar

```bash
kc run src/main.kl
```

Saída esperada:

```text
Hello from Klar!

Program exited with code: 0
```

## Para onde vai a saída

O Klar gera a saída Java em:

```text
out/
```

Normalmente você verá ambos:

* `*.java`
* `*.class`

## Se ocorrer um erro

O Klar falha rapidamente e imprime um diagnóstico estruturado.
Comece por:

* o código de diagnóstico (`[K:Exxx]`)
* a categoria (LEXICAL, SYNTAX, SEMANTIC, BACKEND, CLI)
* a seção de correção

Mais adiante, a Documentação de Diagnósticos explica isso em mais detalhes.