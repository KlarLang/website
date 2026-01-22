---
title: Status & Limitations
sidebar_position: 99
---

# Status e Limitações

Klar está atualmente em um **estado experimental**.

A linha de versionamento atual é **v0.x** (ex: v0.13.0). Isso significa que a linguagem ainda está evoluindo rapidamente, e priorizamos a correção e a integridade arquitetural em vez da completude de recursos.

:::danger Quebra de Compatibilidade (Breaking Changes)
Antes da versão **1.0.0**, você deve esperar mudanças que quebram a compatibilidade em:

* Sintaxe da Linguagem
* Códigos de Diagnóstico e Redação
* Comandos e Flags da CLI
:::

---

## Matriz de Estabilidade Atual

Somos transparentes sobre o que está pronto para uso e o que ainda está em fase intensa de construção:

| Componente | Status | Descrição |
| --- | --- | --- |
| **Lexer** | 🟢 Estável | Tokenização altamente confiável de arquivos `.kl`. |
| **Diagnósticos** | 🟢 Estável | Formato consistente e relatório de erros estruturado. |
| **CLI** | 🟡 Usável | `kc run` funciona para compilação de arquivo único. |
| **Parser** | 🟡 Instável | A gramática principal é sólida, mas casos de borda estão sendo refinados. |
| **Type Checker** | 🔴 Experimental | A segurança de tipos básica é aplicada; verificações avançadas estão pendentes. |
| **Transpilador** | 🔴 Experimental | Atualmente foca estritamente na saída para Java. |

---

## Limitações Fortes Conhecidas

Até a versão atual, os seguintes recursos **ainda não foram implementados**:

* **Estruturas de Dados:** Arrays e tipos definidos pelo usuário (Structs).
* **Sistema de Módulos:** A palavra-chave `import` existe como um placeholder, mas atualmente não possui funcionalidade (placebo).
* **Vinculação de Múltiplos Arquivos:** A compilação é limitada a um arquivo fonte por vez; chamadas de função entre arquivos não são suportadas.
* **Conversões de Tipo:** Sem conversões numéricas implícitas ou casts explícitos.
* **Alvos de Compilação:** Apenas `@Use("java")` é suportado.

---

## Roadmap (Visão Geral)

Nosso desenvolvimento está focado nos seguintes marcos:

1. **Interoperabilidade JSON:** Permitir que a Klar se comunique com estruturas de dados externas (nosso primeiro marco real de interop).
2. **Validação Semântica Reforçada:** Implementar camadas de "intenção/rigor" para garantir que o comportamento do código corresponda à intenção do desenvolvedor.
3. **Relatório de Múltiplos Diagnósticos:** Relatar múltiplos erros independentes sem falhas em cascata.
4. **Expansão do Backend:** Pesquisar alvos de compilação adicionais além da JVM.

---

## Como Avaliar a Klar

Se você está avaliando a Klar hoje, foque em sua filosofia central em vez de seu conjunto de recursos:

* **Explicitude Estrita:** Sem comportamentos ocultos.
* **Regras Determinísticas:** Fluxo de execução previsível.
* **Clareza de Diagnóstico:** Um compilador que fala com você, não para você.