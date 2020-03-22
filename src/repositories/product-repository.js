'use strict';
const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.create = async(data) => {
    const res = await new Product(data).save();
    return res;
};

exports.list = async() => {
    const res = await Product.find({active: true}, 'title price slug');
    return res;
};

exports.get = async(params) => {
    const res = await Product.findOne({
        ...(params.field != '_id') && {active: true},
        [params.field]: params.value
    }, 'title description price slug tags');
    return res;
};

exports.update = async(params, data) => {
    await Product.findByIdAndUpdate(params.id, {
        $set: {
            price: data.price,
            description: data.description,
            slug: data.slug,
            title: data.title,
            tags: data.tags
        }
    });
};

exports.delete = async(id) => {
    await Product.deleteOne({_id:id})
};