"use strict";

const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.create = (req, res, next) => {
    var productModel = new Product(req.body);
    productModel
        .save()
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

exports.list = (req, res, next) => {
    Product
        .find({active: true}, 'title price slug')
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

exports.get = (req, res, next) => {
    console.log(req.query);
    Product
        .findOne({
            ...(req.params.field != '_id') && {active: true},
            [req.params.field]: req.params.value
        }, 'title description price slug tags')
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

exports.update = (req, res, next) => {
    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                price: req.body.price,
                description: req.body.description,
                slug: req.body.slug,
                tags: req.body.tags
            }
        })
        .then(product=>{
            res.status(200).send(product);
        })
        .catch(e=>{
            res.status(400).send({
                message: "Falha ao atualizar produto"
                ,data: e
            });
        });
    res.status(200).send(req.body);
};
exports.delete = (req, res, next) => {
    Product
        .deleteOne({_id:req.params.id})
        .then(product=>{
            res.status(200).send({
                product: product,
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