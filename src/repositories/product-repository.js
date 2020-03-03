'use strict';
const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.create = (data) => {
    var productModel = new Product(data);
    return productModel.save();
};

exports.list = () => {
    return Product.find({active: true}, 'title price slug');
};

exports.get = (params) => {
    return Product.findOne({
        ...(params.field != '_id') && {active: true},
        [params.field]: params.value
    }, 'title description price slug tags');
};

exports.update = (params, data) => {
    return Product
    .findByIdAndUpdate(params.id, {
        $set: {
            price: data.price,
            description: data.description,
            slug: data.slug,
            tags: data.tags
        }
    });
};

exports.delete = (id) => {
    return Product.deleteOne({_id:id})
};