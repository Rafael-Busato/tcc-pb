//Importando o express
const express = require('express');
const mysql      = require('mysql');
const bodyParser = require('body-parser');

//Criando uma instancia do express para app
const app = express();

//Como o server chama esse arquivo, aqui se concentram as rotas
//Pois a partir de cada rota, ele toma uma ação

//Buscando o arquivo de rotas
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

const connection = mysql.createConnection({
  server : 'mysql669.umbler.com',
  user     : 'sql-pb-admin',
  password : 'personalbeauty',
  database : 'PERSONAL_BEAUTY'
});

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('conectou!');
})

//Aceita apenas dados simples no body
app.use(bodyParser.urlencoded({ extended: false }));

//Aceitando apenas formato JSON
app.use(bodyParser.json());

//Tratando o CORS - Definindo tipos de cabeçalhos e métodos que a API permite executar
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header',
               'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
        return res.status(200).send({});
    }

    next();
})

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//Quando for chamada uma rota que não existe, instacia mensagem de erro
app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada!');
    erro.status = 404;
    next(erro);
});

//Mostra mensagem de erro quando a rota chamada não existir
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        mensagem: error.message
    });
});

module.exports = app;