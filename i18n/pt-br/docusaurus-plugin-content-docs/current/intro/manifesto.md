---
title: Manifest
sidebar_position: 1
---

# Por Que Klar Existe

Klar existe porque **o que é ambíguo e implícito escala pior que verbosidade**
em sistemas grandes e de longa duração.

Em software pequeno e scripts isolados, comportamento implícito parece produtivo.  
Em sistemas de grande escala, isso se transforma em **erros silenciosos, bugs difíceis de rastrear
e comportamento estruturalmente frágil**.

Klar existe para **tratar ambiguidade como um erro de design** e para permitir a construção
de **sistemas poliglotas de forma estável, previsível e precisa**.

---

## O Que Klar Se Recusa a Fazer

Klar se recusa a:

- inferir ou adivinhar a intenção do desenvolvedor  
- permitir comportamento implícito ou semanticamente ambíguo  
- aceitar mais de uma interpretação para o mesmo construto  
- esconder limites entre linguagens, tipos ou contextos  

Se algo importa, **deve ser explicitamente declarado**.  
A linguagem não deve adivinhar.

---

## O Que Klar Considera uma Falha de Linguagem

Klar considera uma falha de linguagem **qualquer comportamento que dependa de suposições
implícitas feitas pelo desenvolvedor ou pela máquina**.