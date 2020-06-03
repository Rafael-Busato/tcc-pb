const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//RETORNA UM CLIENTE
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({
                    error: error,
                    response: null
            });
        }
    
        conn.query(
            'SELECT * FROM personal_beauty.cliente;',
            (error, resultado, fields) => {
                if (error) {return res.status(500).send({ error: error }) }
                return res.status(200).send({response: resultado})
            }
        )
    });
});

//RETORNA UM CLIENTE ESPECÍFICO
router.get('/:email/:senha', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({
                    error: error,
                    response: null
            });
        }
    
        conn.query(
            'SELECT * FROM personal_beauty.cliente WHERE EMAIL = ? AND SENHA = ?;',
            [req.params.email, req.params.senha],
            (error, resultado, fields) => {
                if (error) {return res.status(500).send({ error: error }) }
                return res.status(200).send({ response: resultado })
            }
        )
    });
});

//INSERE UM CLIENTE
router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({
                    error: error,
                    response: null
            });
        }
    
        conn.query(
            'INSERT INTO personal_beauty.cliente (CPF, EMAIL, SENHA, NOME, SOBRENOME, DATA_NASC, CARTAO_CREDITO, ENDERECO, BAIRRO, CIDADE, ESTADO) VALUES (?,?,?,?,?,?,?,?,?,?,?);',
            [req.body.cpf, req.body.email, req.body.senha, req.body.nome, req.body.sobrenome, req.body.data_nasc, req.body.cartao_credito, req.body.endereco, req.body.bairro, req.body.cidade, req.body.estado],

            (error, resultado, fields) => {
                conn.release();

                if (error) {return res.status(500).send({ 
                    status: 500,
                    error: error }) }
                return res.status(201).send({ 
                    status: 201,
                    response: 'Cadastrado realizado com sucesso.'})
            }
        )
    });
});

//ATUALIZA UM CLIENTE
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o PATCH dentro da rota de cliente'
    })
});

//EXCLUI UM CLIENTE
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o DELETE dentro da rota de cliente'
    })
});

module.exports = router;