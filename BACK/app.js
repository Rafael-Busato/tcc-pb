//Importando o express
const express = require('express');
const bodyParser = require('body-parser');

//Criando uma instancia do express para app
const app = express();

//Como o server chama esse arquivo, aqui se concentram as rotas
//Pois a partir de cada rota, ele toma uma ação

//Aceita apenas dados simples no body
app.use(bodyParser.urlencoded({ extended: false }));

//Aceitando apenas formato JSON
app.use(bodyParser.json());

//Buscando o arquivo de rotas
const rotaCliente = require('./routes/cliente');
const rotaFuncionario = require('./routes/funcionario');

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

app.use('/cliente', rotaCliente);
app.use('/funcionario', rotaFuncionario);

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