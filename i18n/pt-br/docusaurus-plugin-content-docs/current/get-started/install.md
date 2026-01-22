---
title: Instalação
sidebar_position: 2
---

# Instalar o Klar (via loom)

O Klar é instalado usando o **Loom**, o gerenciador de projetos do Klar.

## Pré-requisitos

- Java 21 instalado (o Klar roda internamente por meio de um processo `java`)

Isso é tudo.

---

## Instalar o Loom

1) Clone o Loom:

```bash
git clone https://github.com/KlarLang/loom
cd loom
````

Execute o instalador para o seu sistema operacional:

Linux

```bash
./install.sh
```

Windows

```bat
install.bat
```

Instale o Klar:

```bash
loom install
```

Isso instala:

* `klar.jar` em `~/.klar/active/`
* um script lançador `kc` em `~/.klar/bin/`

O Loom também configura o ambiente, mas pode ser necessário recarregar o shell.

Se o terminal não reconhecer `kc` imediatamente, execute:

```bash
source ~/.bashrc
```

*(ou o arquivo de configuração do shell que você utiliza)*

Instalar uma versão específica do Klar (opcional):

```bash
loom install v0.13.0
```

Se nenhuma versão for informada, o Loom instala a versão mais recente disponível.

Verificar a instalação:

```bash
kc --version
kc --help
```

Se `kc --version` funcionar, está tudo pronto.
