'use strict';
const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.create = async(data) => {
    const res = await new Product(data).save();
    return res;
};

exports.list = async() => {
    const res = await Product.find({active: true});
    return res;
};

exports.get = async(params) => {
    const res = await Product.findOne({
        ...(params.field != '_id') && {active: true},
        [params.field]: params.value
    });
    return res;
};

exports.update = async(params, data) => {
    await Product.findByIdAndUpdate(params.id, {
        $set: {
            ... (data.title != undefined) && {title: data.title},
            ... (data.slug != undefined) && {slug: data.slug},
            ... (data.description != undefined) && {description: data.description},
            ... (data.price != undefined) && {price: data.price},
            ... (data.active != undefined) && {tags: data.active},
            ... (data.tags != undefined) && {tags: data.tags},
            ... (data.image != undefined) && {tags: data.image}
        }
    });
};

exports.delete = async(id) => {
    await Product.deleteOne({_id:id})
};