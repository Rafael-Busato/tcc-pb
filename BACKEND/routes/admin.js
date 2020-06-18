const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//RETORNA DADOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'ROTA ADMIN FUNCIONANDO!'
    })
});

//INSERE DADOS
router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({
                error: error,
                response: null
            });
        }

        conn.query(
            `INSERT INTO servicos (SERVICO, TP_SERVICO, TAXA) VALUES (?,?,?);`,
            [req.body.servico, req.body.tp_servico, req.body.taxa],

            (error, resultado, fields) => {
                conn.release();

                if (error) {
                    return res.status(500).send({
                        status: 500,
                        error: error
                    })
                }
                return res.status(201).send({
                    status: 201,
                    response: 'Serviço cadastrado com sucesso.'
                })
            }
        )
    });
});

//ATUALIZA DADOS
router.patch('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({
                error: error,
                response: null
            });
        }

        conn.query(
            `UPDATE servicos 
                SET TP_SERVICO   = ?,
                    TAXA         = ?
                WHERE SERVICO    = ?`,
            [
                req.body.tp_servico,
                req.body.taxa,
                req.body.servico,
            ],
            (error, resultado, fields) => {
                conn.release();

                if (error) {
                    return res.status(500).send({
                        status: 500,
                        error: error
                    })
                }

                return res.status(202).send({
                    status: 201,
                    response: 'Serviço alterado com sucesso.'
                })
            }
        )
    });
});

//EXCLUI DADOS
router.delete('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({
                error: error,
                response: null
            });
        }

        conn.query(
            `DELETE FROM servicos WHERE SERVICO = ? AND TP_SERVICO = ?`,
            [
                req.body.servico,
                req.body.tp_servico,
            ],
            (error, resultado, fields) => {
                conn.release();

                if (error) {
                    return res.status(500).send({
                        status: 500,
                        error: error
                    })
                }
                return res.status(201).send({
                    status: 201,
                    response: 'Serviço removido com sucesso.'
                })
            }
        )
    });
});

module.exports = router;