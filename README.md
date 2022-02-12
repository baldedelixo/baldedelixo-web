<a href="#pt-br">Seção em Português</a><br/>
<a href="#en-us">English Section</a>

<h1 id="pt-br">baldedelixo-web</h1>
A aplicação web https://baldedelixo.dev

# Pré-requisitos
Para rodar o projeto, é necessário que tenha na máquina:
- [x] Docker
- [x] Node.js
- [x] Gerenciador de Pacotes Yarn

# Instruções
Primeiro, no terminal, execute na raiz da pasta do projeto o comando:
```
yarn install
```

## Local
Para rodar o servidor next para desenvolvimento local, execute:
```
yarn dev
```

## Docker

Para fazer build e rodar o container docker de desenvolvimento, utilize os seguintes comandos:
```
make build-development
make start-development
```

Para mais informações, consulte o arquivo [Instructions.md]("./Instructions.md")

<h1 id="en-us">baldedelixo-web (English)</h1>
The https://baldedelixo.dev web app

# Requirements

To run this project, you must have on your local machine:
- [x] Docker
- [x] Node.js
- [x] Yarn Package Manager

# Instructions
Firstly, on your terminal, execute the following command on the root folder:
```
yarn install
```

## Local
To run the Next.js localhost server, execute:
```
yarn dev
```

## Docker
To build and run the Docker development container, use the following commands:

```
make build-development
make start-development
```

For more information, consult the [Instructions.md](Instructions.md) file.
