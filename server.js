//Importando o HTTP para o serviço de transição de dados via HTTP
const http = require('http');

//Pegando o arquivo APP
const app = require('./app');

//Buscando a porta ou então passando a porta 3000 para o localhost
const port = process.env.PORT || 3000;

//Criando o server
const server = http.createServer(app);

//Passando o localhost para o server
server.listen(port);

//Mostra messagem no terminal quando a API estiver rodando
console.log('API Rodando! Porta:', port);


///Funcionamento da porra toda

//1 - Primeiro ele cria um serviço de HTTP(Para rodarmos a API)
//2 - Depois ele busca o arquivo app e lá passamos um conteúdo para o serviço
//3 - Depois ele define(cria) uma porta padrão
//4 - Depois ele cria o server e, uma vez criado estamos passando o app para o server e ele está escutando em uma porta
//5 - O server está recebendo todo conteúdo que está sendo exportado no arquivo app
