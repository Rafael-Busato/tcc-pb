const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//RETORNA UM CLIENTE
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'ROTA ADMIN FUNCIONANDO!'
    })
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
            'INSERT INTO personal_beauty.servicos (TP_SERVICO, SERVICO) VALUES (?,?);',
            [req.body.tp_servico, req.body.servico],

            (error, resultado, fields) => {
                conn.release();

                if (error) {return res.status(500).send({ 
                    status: 500,
                    error: error }) }
                return res.status(201).send({ 
                    status: 201,
                    response: 'Serviço cadastrado com sucesso.'})
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