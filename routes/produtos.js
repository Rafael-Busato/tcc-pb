const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//RETORNA UM PRODUTO
router.get('/', (req, res, next) => {

    //testando conexão
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({
                    error: error,
                    response: null
            });
        }
        res.status(201).send({
            mensagem: 'Conectado!'
        });
    });
    //testando conexão

    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de produtos'
    })
});

//INSERE UM PRODUTO
router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o POST dentro da rota de produtos'
    })
});

//ATUALIZA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o PATCH dentro da rota de produtos'
    })
});

//EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o DELETE dentro da rota de produtos'
    })
});

module.exports = router;