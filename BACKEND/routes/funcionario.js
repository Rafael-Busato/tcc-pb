const express = require('express');
const router = express.Router();

//Criando uma rota para GET
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de funcionario'
    })
});

//Criando uma rota para POST
router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o POST dentro da rota de funcionario'
    })
});

//Criando uma rota para PATCH
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o PATCH dentro da rota de funcionario'
    })
});

//Criando uma rota para DELETE
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o DELETE dentro da rota de funcionario'
    })
});

module.exports = router;