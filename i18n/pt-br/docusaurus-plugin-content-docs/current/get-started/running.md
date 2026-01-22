---

title: Execução & Build
sidebar_position: 5
-------------------

# Execução & Build

Atualmente, o Klar processa **um arquivo por vez**.

---

## Executar

```bash
kc run src/main.kl

```

### Pipeline de Execução:

1. **Lex:** Tokenização do código-fonte.
2. **Parse:** Geração da Árvore Sintática Abstrata (AST).
3. **Type-check:** Validação semântica.
4. **Transpile:** Conversão para código-fonte Java.
5. **Compile:** Invocação do `javac` sobre o código gerado.
6. **Run:** Invocação do `java` sobre o bytecode resultante.

---

## Apenas build

```bash
kc build src/main.kl

```

Isso gera a saída em `out/`:

* `*.java`
* `*.class`

---

## Comandos de Depuração

### Apenas parse

Usado para verificar a gramática e a estrutura da AST.

```bash
kc parse src/main.kl

```

### Apenas lex

Usado para verificar a tokenização.

```bash
kc lex src/main.kl
kc lex src/main.kl -st   # ou '--show-tokens', ambos exibem uma tabela de tokens.

```
