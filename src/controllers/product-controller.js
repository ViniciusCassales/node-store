"use strict";

const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const repository = require('../repositories/product-repository')

exports.create = (req, res) => {
    repository
        .create(req.body)
        .then(product=>{
            res.status(201).send(product);
        })
        .catch(e=>{
            res.status(400).send({
                message: "Falha ao cadastrar produto"
                ,data: e
            });
        });
};

exports.list = (req, res) => {
    repository
        .list()
        .then(product=>{
            res.status(200).send(product);
        })
        .catch(e=>{
            res.status(400).send({
                message: "Falha ao listar produtos"
                ,data: e
            });
        });
};

exports.get = (req, res) => {
    repository
        .get(req.params)
        .then(product=>{
            res.status(200).send(product);
        })
        .catch(e=>{
            res.status(400).send({
                message: "Falha ao obter produto"
                ,data: e
            });
        });
};

exports.update = (req, res) => {
    repository
        .update(req.params, req.body)
        .then(product=>{
            res.status(200).send(product);
        })
        .catch(e=>{
            res.status(400).send({
                message: "Falha ao atualizar produto"
                ,data: e
            });
        });
};

exports.delete = (req, res) => {
    repository
        .delete(req.params.id)
        .then(product=>{
            res.status(200).send({
                messagem : "Produto Removido com sucesso"
            });
        })
        .catch(e=>{
            res.status(400).send({
                message: "Falha ao remover produto"
                ,data: e
            });
        });
};