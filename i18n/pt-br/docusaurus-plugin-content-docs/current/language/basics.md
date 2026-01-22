---
title: Language Basics
sidebar_position: 2
---

# Fundamentos da Linguagem

Esta página descreve o estado atual da linguagem Klar. Klar é rigorosa por design, priorizando explicitação em vez de conveniência para garantir segurança e clareza do código.

:::caution Política de Rigor
Klar requer:
- Modificadores explícitos
- Tipos explícitos
- Retornos explícitos
- Terminação explícita de fluxo de controle
:::

---

## Extensão de Arquivo

A extensão oficial para arquivos fonte Klar é `.kl` (recomendado) ou `.klar`.

---

## Comentários

Klar suporta comentários de linha única e em bloco:
```kl
// Este é um comentário de linha única

/*
  Este é um 
  comentário em bloco
*/
```

---

## Tipos (Atual)

Klar mapeia seus tipos primitivos e de referência diretamente para Java:

| Tipo Klar | Equivalente Java | Categoria |
| --- | --- | --- |
| `integer` | `int` | Primitivo |
| `double` | `double` | Primitivo |
| `boolean` | `boolean` | Primitivo |
| `character` | `char` | Primitivo |
| `String` | `java.lang.String` | Referência |
| `void` | `void` | Somente Retorno |
| `null` | `null` | Somente Valor |

---

## Variáveis

A declaração de variáveis em Klar é estritamente aplicada. Você **deve** fornecer um tipo e um valor inicial; variáveis não inicializadas não são permitidas.
```kl
integer score = 0;
double price = 99.90;
String name = "Klar";
character initial = 'K';
boolean isActive = false;
```

---

## Funções

Uma definição de função requer uma estrutura específica para ser válida:

1. `@Use("java")`: Obrigatório na versão atual.
2. **Modificador de Acesso**: Explícito (atualmente `public` é o padrão).
3. **Tipo de Retorno**: Deve ser explicitamente declarado.
4. **Retorno Explícito**: Todos os caminhos de código devem terminar com uma instrução de retorno.

### O Ponto de Entrada `main`
```kl
@Use("java")
public void main() {
    println("Hello World From Klar!");

    return null; 
}
```

### Regras de Retorno

* Todas as funções **devem** retornar explicitamente.
* Em funções `void`, `return;` e `return null;` são atualmente aceitos, embora `return null;` seja a recomendação atual para consistência.
* A ausência de uma instrução de retorno irá acionar um **Diagnóstico Semântico**.

---

## Operadores

### Suportados

* **Comparações:** `==`, `!=`, `<`, `>`, `<=`, `>=`
* **Aritméticos:** `+`, `-`, `*`, `/`, `%`
* **Lógicos:** `and`, `or` (Nota: `&&` e `||` NÃO são suportados)

### Intencionalmente Não Suportados (Açúcar Sintático)

* `**` (Operador de potência): Use funções de biblioteca padrão em vez disso.
* Conversões numéricas implícitas: Você não pode atribuir um `integer` a um `double` sem uma operação explícita.

---

## Funções Integradas

* `print(...)`
* `println(...)`
* `printf(...)` (Atualmente um placeholder)

---

## Roadmap: O Que Está Faltando

As seguintes funcionalidades atualmente **não** estão implementadas:

* Arrays e Coleções
* Structs / Tipos definidos pelo usuário
* Importações de módulos / Vinculação entre arquivos
* Conversão de Tipos (Type Casting)