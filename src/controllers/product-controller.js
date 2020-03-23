"use strict";

const mongoose = require('mongoose')
const Product = mongoose.model('Product');

const repository = require('../repositories/product-repository');
const controller = {};

controller.create = async(req, res) => {
    try {
        const object = await repository.create(req.body);
        req.body._id = object._id;
        res.status(201).send(req.body);
    } catch (error) {
        res.status(400).send({
            message: `Falha ao cadastrar produto`
            ,data: error
        });
    }
};

controller.list = async(req, res) => {
    try {
        var data = await repository.list();
        res.status(200).send(data);    
    } catch (error) {
        res.status(400).send({
            message: `Falha ao listar produto`
            ,data: error
        });
    }
    
};

controller.get = async(req, res) => {
    try {
        const object = await repository.get(req.params);
        res.status(200).send(object);
    } catch (error) {
        res.status(500).send({
            message: `Falha ao obter produto`
            ,data: error
        });
    }
},
controller.update = async(req, res) => {
    try {
        await repository.update(req.params, req.body);
        res.status(200).send(req.body);
    } catch (error) {
        res.status(500).send({
            message: `Falha ao atualizar produto`
            ,data: error
        });
    }
    
},
controller.delete = async(req, res) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            messagem : `produto removido`
        });
    } catch (error) {
        res.status(400).send({
            message: `Falha ao remover produto`
            ,data: error
        });
    }
}

module.exports = controller;