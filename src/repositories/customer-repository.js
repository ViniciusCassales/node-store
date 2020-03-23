'use strict';
const mongoose = require('mongoose')
const Customer = mongoose.model('Customer')

exports.create = async(data) => {
    const res = await new Customer(data).save();
    return res;
};

exports.list = async() => {
    const res = await Customer.find();
    return res;
};

exports.get = async(params) => {
    const res = await Customer.findOne({
        [params.field]: params.value
    });
    return res;
};

exports.update = async(params, data) => {
    await Customer.findByIdAndUpdate(params.id, {
        $set: {
            ... (data.name != undefined) && {name: data.name},
            ... (data.email != undefined) && {email: data.email},
            ... (data.password != undefined) && {password: data.password}
        }
    });
};

exports.delete = async(id) => {
    await Customer.deleteOne({_id:id})
};