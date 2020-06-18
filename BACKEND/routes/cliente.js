const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//RETORNA UM CLIENTE
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM cliente;',
            (error, resultado, fields) => {
                conn.release();

                if (error) { return res.status(500).send({ error: error }) }
                const response = {
                    quantidade: resultado.length,
                    dados: resultado.map(valor => {
                        return {
                            cpf: valor.CPF,
                            senha: valor.SENHA,
                            email: valor.EMAIL,
                            nome: valor.NOME,
                        }
                    })
                }
                return res.status(200).send(response);
            }
        )
    });
});

//RETORNA UM CLIENTE ESPECÍFICO
router.get('/:email/:senha', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM cliente WHERE EMAIL = ? AND SENHA = ?;',
            [req.params.email, req.params.senha],
            (error, resultado, fields) => {
                conn.release();

                if (error) { return res.status(500).send({ error: error }) }

                if (resultado.length == 0) {
                    return res.status(404).send({
                        mensagem: 'Usuário não encontrado!'
                    })
                }
                const response = {
                    quantidade: resultado.length,
                    dados: resultado.map(valor => {
                        return {
                            email: valor.EMAIL,
                            senha: valor.SENHA,
                            nome: valor.NOME,
                        }
                    })
                }
                return res.status(200).send(response);
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

                if (error) {
                    return res.status(500).send({
                        status: 500,
                        error: error
                    })
                }
                return res.status(201).send({
                    status: 201,
                    response: 'Cadastrado realizado com sucesso.'
                })
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