# Gemini Node.js Tutorial

Este é um projeto tutorial que demonstra como integrar a API Gemini da Google em uma aplicação Node.js.

## Objetivo

O objetivo deste projeto é mostrar como criar uma interface web simples que permite aos usuários interagir com o modelo Gemini da Google, enviando perguntas e recebendo respostas estruturadas em formato JSON.

## Funcionalidades

- Interface web simples para enviar perguntas ao Gemini
- Controle de temperatura para ajustar a criatividade das respostas
- Respostas estruturadas em formato JSON contendo:
  - Resposta completa
  - Resumo
  - Palavras-chave relacionadas
- Servidor Node.js com Express para processar as requisições

## Estrutura do Projeto

- `server.js` - Servidor Express que se conecta à API Gemini
- `public/index.html` - Interface web para interação com o usuário
- `.env` - Arquivo para armazenar sua chave de API Gemini (não incluído no repositório)
- `.env.example` - Exemplo de como estruturar seu arquivo .env

## Como usar

1. Clone este repositório
2. Execute `npm install` para instalar as dependências
3. Crie um arquivo `.env` com sua chave de API Gemini (veja `.env.example`)
4. Execute `node server.js` para iniciar o servidor
5. Acesse `http://localhost:3000` no navegador para interagir com a aplicação

## Tutorial Completo

Este projeto faz parte de um tutorial detalhado que pode ser encontrado em:
[https://blog.mnunes.xyz/conectando-sua-aplicacao-node-js-ao-gemini/](https://blog.mnunes.xyz/conectando-sua-aplicacao-node-js-ao-gemini/)

## Tecnologias Utilizadas

- Node.js
- Express
- Google Generative AI SDK (@google/generative-ai)
- Gemini API