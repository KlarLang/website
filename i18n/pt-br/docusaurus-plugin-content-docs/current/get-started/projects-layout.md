---

title: Estrutura do projeto
sidebar_position: 4
-------------------

# Estrutura do projeto

O Klar pode executar qualquer arquivo `.kl` desde que você informe o caminho correto.

O Loom pode gerar um esqueleto de projeto:

```bash
loom new my-project

```

Atualmente, `loom new` é principalmente um gerador de conveniência/README.

### Saída típica:

```text
my-project/
  src/
    main.kl
  out/
  README.md

```

:::info
kc run funciona com um caminho de arquivo, então você pode colocar os fontes em qualquer pasta.

A saída é escrita em out/ (relativo ao diretório onde o comando é executado).
:::