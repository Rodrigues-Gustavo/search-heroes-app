# 🚀 Search Marvel Heroes App 🚀
### Desafio técnico - Listagem e detalhes sobre os heróis utilizando uma API da Marvel.

### Projeto foi desenvolvido com Next.js um Framework do React.js

## 🧠 Funcionalidades

#### Exibição dos 20 primeiros resultados da API ✅
#### Ordenação por nome do personagem ✅
#### Filtragem por nome no campo de busca ✅
#### Favoritar e desfavoritar até 5 personagens ✅
#### Filtro por personagem favorito ✅
#### Persistência de dados dos favoritos ✅
#### Página principal com layout responsivo ✅

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (recomenda-se a versão LTS mais recente)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) (ou outro editor de código de sua preferência)

## 📥 Clonando o Repositório

Execute o seguinte comando no terminal para clonar o projeto:

```sh
git clone https://github.com/Rodrigues-Gustavo/marvel-heroes-app.git
```

Entre na pasta do projeto:

```sh
cd marvel-heroes-app
```

## 📦 Instalando as Dependências

Após clonar o projeto, instale as dependências necessárias executando:

```sh
npm install
```

Se preferir utilizar Yarn:

```sh
yarn install
```

## 🔧 Configurando Variáveis de Ambiente

As variáveis de ambiente são necessárias para acessar a API da Marvel.

Crie um arquivo chamado `.env` no diretório raiz do projeto. Insira as seguintes variáveis:

```sh
MARVEL_PUBLIC_KEY=<YOUR_PUBLIC_KEY>
MARVEL_PRIVATE_KEY=<YOUR_PRIVATE_KEY>
```

Substitua `<YOUR_PUBLIC_KEY>>` e `<YOUR_PRIVATE_KEY>` pelos valores da sua conta da API da Marvel.

## 🖥️ Executando o Projeto

Para rodar o projeto em ambiente de desenvolvimento, execute:

```sh
npm run dev
```

Ou, se estiver usando Yarn:

```sh
yarn dev
```

Acesse o projeto no navegador em:

```
[http://localhost:3000](http://localhost:3000)
```

📌 **Dica:** Caso encontre problemas ao rodar o projeto, verifique se as variáveis de ambiente estão corretamente configuradas e se o Node.js está atualizado.
