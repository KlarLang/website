---
title: Solução de Problemas
sidebar_position: 6
-------------------

# Solução de Problemas

## `kc: comando não encontrado`

Seu shell pode não ter recarregado a atualização do PATH.

Tente:

```bash
source ~/.bashrc

```

*(ou o arquivo de configuração do seu shell)*

---

## Tipo de arquivo inválido (erro da CLI)

O Klar processa apenas arquivos `.kl` ou `.klar` (padrão documentado).

Exemplo:

```bash
kc run a

```

Saída típica:

```text
[K:KC002] InvalidFileType
ERROR (CLI)
no arquivo de entrada

O arquivo 'a' não é um arquivo fonte Klar.

Causa:
  O Klar processa apenas arquivos com as extensões '.kl' e '.klar'.

Correção:
  Renomeie o arquivo ou selecione um fonte válido '.kl' ou '.klar'.

Exemplo:
  kc run program.kl
```

---

## Java não encontrado

O Klar é executado internamente por meio de um processo Java.
Certifique-se de que o `java` está disponível no seu PATH:

```bash
java -version

```
