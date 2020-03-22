"use strict";

const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const repository = require('../repositories/product-repository')

exports.create = async(req, res) => {
    try {
        const product = await repository.create(req.body);
        req.body._id = product._id;
        res.status(201).send(req.body);
    } catch (error) {
        res.status(400).send({
            message: "Falha ao cadastrar produto"
            ,data: e
        });
    }
};

exports.list = async(req, res) => {
    var data = await repository.list();
    res.status(200).send(data);
};

exports.get = async(req, res) => {
    try {
        const product = await repository.get(req.params);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({
            message: "Falha ao obter produto"
            ,data: error
        });
    }
};

exports.update = async(req, res) => {
    try {
        await repository.update(req.params, req.body);
        res.status(200).send(req.body);
    } catch (error) {
        res.status(500).send({
            message: "Falha ao atualizar produto"
            ,data: e
        });
    }
    
};

exports.delete = async(req, res) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            messagem : "Produto Removido com sucesso"
        });
    } catch (error) {
        res.status(400).send({
            message: "Falha ao remover produto"
            ,data: e
        });
    }
};