---
title: Diagnósticos
sidebar_position: 3
---

# Diagnósticos

No Klar, diagnósticos não são meramente "mensagens de erro". Eles são tratados como uma **interface estruturada** projetada para guiar o desenvolvedor durante o processo de resolução.

Todo diagnóstico segue um esquema consistente: `Código + Categoria + Span + Causa + Correção`.

:::warning Nota de Estabilidade
Antes da versão **1.0.0**, os códigos de diagnóstico e a redação estão sujeitos a mudanças. No entanto, a filosofia subjacente permanece estável.
:::

---

## Categorias de Diagnóstico

O Klar classifica problemas em cinco categorias distintas para ajudar você a identificar onde a falha ocorreu no pipeline:

| Categoria | Descrição |
| :--- | :--- |
| **LEXICAL** | Problemas durante a tokenização (ex.: caracteres inválidos). |
| **SYNTAX** | Violações da gramática da linguagem (ex.: chaves ausentes). |
| **SEMANTIC** | Erros lógicos em sintaxe válida (ex.: símbolos não resolvidos). |
| **BACKEND** | Falhas durante a geração de código ou mapeamento do alvo. |
| **CLI** | Uso inválido da linha de comando do compilador. |

---

## Anatomia de um Diagnóstico

Um diagnóstico típico do Klar fornece o seguinte contexto:

* **Código:** Identificador único (ex.: `[K:E217]`).
* **Título:** Nome descritivo do erro.
* **Severidade + Categoria:** O impacto e o tipo.
* **Localização:** Caminho do arquivo, linha e coluna.
* **Ponteiro Visual:** Um trecho do código-fonte com um cursor (`^`) apontando para o problema exato.
* **Causa/Correção:** Explicação legível e passos acionáveis.

---

## Exemplos do Mundo Real

### 1. Erro Semântico: Símbolo Não Resolvido
Disparado ao referenciar uma variável que não foi declarada.

```text
[K:E217] UnresolvedSymbol
ERROR (SEMANTIC)
at teste.kl:3:12

1 | @Use("java")
2 | public void main(){
3 |     println(a);
  |             ^

Causa:
  A variável 'a' não existe.

Correção:
  Declare a variável 'a' antes de usá-la ou remova a referência.
````

### 2. Erro de Sintaxe: Anotação Ausente

Disparado quando uma função não possui o contexto de ambiente obrigatório.

```text
[K:E113] MissingAnnotation
ERROR (SYNTAX)
at teste.kl:1:0

1 | public void main(){
  | ^

Causa:
  Anotação @Use ausente na função.

Correção:
  Anote a função com @Use para especificar o contexto de destino.

Esperado:
  '@Use'

Exemplo:
  @Use("java")
  public void myFunction() { ... }
```

### 3. Erro de Backend: Alvo Inválido

Disparado quando um alvo de compilação não suportado é especificado.

```text
[K:E400] UnknowBackendTarget
ERROR (BACKEND)
at teste.kl:1:4

1 | @Use("python")
  |      ^^^^^^^^

Causa:
  Alvo de backend não suportado 'python'.

Correção:
  Use um backend suportado (atualmente apenas 'java' é suportado).

Nota:
  Atualmente, o Klar suporta apenas Java como alvo de compilação.
```

---

## Limitações Atuais

Atualmente, o compilador Klar **para após o primeiro diagnóstico** por compilação. Esta é uma escolha deliberada para evitar "efeito cascata de erros" e garantir que o desenvolvedor corrija primeiro a causa raiz.

**Planejado para versões futuras:**

* Relato de múltiplos diagnósticos (para erros independentes).
* Formato de saída JSON para integração com IDEs.
