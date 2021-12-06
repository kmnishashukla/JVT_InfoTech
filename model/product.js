const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        trim:true,
        required:true
    },
    productDescription:{
        type:String,
        trim:true,
    },
    productCategory:{
        type:String,
        trim:true,
        unique: true,
        required:true
    },
    productPrice:{
        type:mongoose.Decimal128,
        trim:true,
        required:true
    },

});

module.exports = mongoose.model('Product', productSchema);