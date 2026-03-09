# Sistema de Convocação de Jogadores – Copa do Mundo 2026

## Descrição

Este projeto consiste em um sistema web simples para gerenciamento de jogadores convocados para seleções da Copa do Mundo. A aplicação permite cadastrar jogadores, associá-los a uma seleção e visualizar os registros em uma tabela dinâmica.

O objetivo do projeto é demonstrar a integração entre **frontend e backend**, utilizando uma API REST desenvolvida em **Spring Boot** e um frontend construído com **HTML, CSS e JavaScript**.

A aplicação permite realizar operações básicas de **CRUD (Create, Read, Update, Delete)** sobre os jogadores cadastrados.

---

## Funcionalidades

* Cadastro de jogadores
* Seleção de país/seleção para o jogador
* Definição de posição do jogador
* Número da camisa
* Data de nascimento
* Indicação se o jogador é titular
* Listagem de jogadores cadastrados em tabela
* Exclusão de jogadores
* Atualização de dados (estrutura preparada)

---

## Tecnologias Utilizadas

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* MySQL
* API REST

### Frontend

* HTML5
* CSS3
* JavaScript (Fetch API)

---

## Estrutura do Projeto

O sistema é dividido em duas partes principais:

### Backend

Responsável pela lógica da aplicação e comunicação com o banco de dados.

Entidades principais:

* Copa
* Seleção
* Jogador

O backend expõe endpoints REST para manipulação dos dados.

Exemplo de endpoints:

```
GET    /jogadores
POST   /jogadores
DELETE /jogadores/{id}
GET    /selecoes
GET    /copas
```

---

### Frontend

Interface simples construída com HTML, CSS e JavaScript.

Responsável por:

* envio de dados para a API
* carregamento das seleções
* exibição dos jogadores cadastrados
* interação do usuário com o sistema

A comunicação com o backend é feita através de requisições HTTP utilizando **Fetch API**.

---

## Como Executar o Projeto

### 1. Backend

1. Clonar o repositório
2. Abrir o projeto em uma IDE (IntelliJ, Eclipse ou VSCode)
3. Configurar o banco de dados MySQL
4. Executar a aplicação Spring Boot

O servidor será iniciado em:

```
http://localhost:8080
```

---

### 2. Frontend

Abrir o arquivo:

```
index.html
```

ou executar utilizando um servidor local (ex: Live Server no VSCode).

---

## Objetivo do Projeto

Este projeto foi desenvolvido com finalidade acadêmica para praticar conceitos de:

* desenvolvimento de APIs REST
* integração entre frontend e backend
* manipulação de dados com banco relacional
* utilização de JavaScript para consumo de APIs
* arquitetura básica de aplicações web

---

## Possíveis Melhorias Futuras

* Implementação completa da edição de jogadores
* Melhorias na interface gráfica
* Validações mais robustas no backend
* Autenticação de usuários
* Paginação na listagem de jogadores

---

## Autor

Projeto desenvolvido para fins de estudo e prática em desenvolvimento web fullstack utilizando Java e tecnologias web.
