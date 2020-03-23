"use strict";

const mongoose = require('mongoose')
const Customer = mongoose.model('Customer');
const HTTP = require('../constants/http');

const repository = require('../repositories/customer-repository');
const controller = {};

controller.create = async(req, res) => {
    try {
        const object = await repository.create(req.body);
        req.body._id = object._id;
        res.status(HTTP.CREATED).send(req.body);
    } catch (error) {
        res.status(error.code || HTTP.BAD_REQUEST).send({
            message: error.message || 'Falha ao cadastrar customer'
        });
    }
};

controller.list = async(req, res) => {
    try {
        var data = await repository.list();
        res.status(200).send(data);    
    } catch (error) {
        res.status(error.code || HTTP.BAD_REQUEST).send({
            message: error.message || 'Falha ao listar customer'
        });
    }
    
};

controller.get = async(req, res) => {
    try {
        const object = await repository.get(req.params);
        if(object)
            res.status(200).send(object);
        else    
            throw {'code':HTTP.NOT_FOUND, message: 'Customer not found'};
    } catch (error) {
        res.status(error.code || HTTP.INTERNAL_SERVER_ERROR).send({
            message: error.message || 'Internal server error'
        });
    }
},
controller.update = async(req, res) => {
    try {
        await repository.update(req.params, req.body);
        res.status(200).send(req.body);
    } catch (error) {
        res.status(error.code || HTTP.INTERNAL_SERVER_ERROR).send({
            message: error.message || 'Falha ao atualizar customer'
        });
    }
    
},
controller.delete = async(req, res) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            messagem : `Customer removido`
        });
    } catch (error) {
        res.status(error.code || HTTP.BAD_REQUEST).send({
            message: error.message || 'Falha ao remover customer'
        });
    }
}

module.exports = controller;