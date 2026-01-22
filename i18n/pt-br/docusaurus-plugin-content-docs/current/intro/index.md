---
title: Introduction
sidebar_position: 1
---

# Klar

Klar é uma **linguagem experimental transpilada** projetada em torno de dois objetivos inegociáveis:

1) **Confiabilidade extrema através da explicitação**  
2) **Interoperabilidade nativa entre linguagens** (começando com Java/JVM atualmente)

Klar não está tentando competir com linguagens "de propósito geral" como substituta.  
É um experimento de linguagem/toolchain focado em tornar limites, suposições e intenções explícitos.

---

## O que Klar se recusa a fazer

Klar é construída sobre uma crença simples:

> Ambiguidade é mais perigosa que verbosidade.

Então Klar se recusa a:
- Adivinhar a intenção do desenvolvedor
- Introduzir padrões silenciosos
- "Ajudar" mudando o significado implicitamente
- Trocar clareza por brevidade

---

## Status atual

Klar é **experimental** e **instável antes da v1.0.0**.  
Mudanças incompatíveis são esperadas.

O que está **razoavelmente estável** hoje:
- Lexer (componente mais estável)
- Fluxo de trabalho completo `kc run` (funciona e é utilizável)

O que ainda está **instável**:
- Parser
- Verificador de tipos
- Transpilador/gerador de código

---

## O que funciona hoje (realidade mínima)

Klar pode:
- Fazer análise léxica, análise sintática, verificação de tipos, transpilar para Java, compilar com `javac` e executar com `java`
- Produzir diagnósticos estruturados (LEXICAL / SYNTAX / SEMANTIC / BACKEND / CLI)
- Executar um único arquivo `.kl` por vez

Klar **ainda não** suporta:
- Arrays (planejado)
- Módulos/importações (palavras-chave existem, mas atualmente são placebo)
- Structs / tipos definidos pelo usuário
- Vinculação de símbolos entre múltiplos arquivos (múltiplos arquivos existem, mas você não pode importar/chamar funções entre arquivos)

---

## A regra que surpreende as pessoas

Klar é rigorosa sobre "terminar o que você começou":

- **Toda função deve ter `@Use("java")`** (obrigatório em todos os métodos por design)
- **Toda função deve retornar explicitamente** (incluindo `void`)
- **Estruturas de controle terminam explicitamente** (`afterall` é obrigatório; seu corpo é opcional)

Isso não são "funcionalidades faltando". É o design.

---

## Próximos passos

- Comece aqui: **Primeiros Passos → Instalação**
- Depois: **Hello World**
- Depois: **Fundamentos da Linguagem**
- Se você se importa com a ideia central: **Diagnósticos**