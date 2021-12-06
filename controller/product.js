const Product = require('../model/product');

exports.create = async (req,res) => {
    try{
        let product = await Product.create(req.body);
        return res.status(200).json({
            success:"true",
            message:"Product created successfully",
            product:product
        })

    }catch(error){
        console.log(error);
        return res.status(400).json({
            message:false,
            error:error
        })
    }
}

exports.findAll = async (req,res) => {
    try{
        let product = await Product.find({});
        return res.status(200).json({
            success:"true",
            message:"All Products fetched successfully",
            product:product
        })

    }catch(error){
        return res.status(400).json({
            message:false,
            error:error
        })
    }
}

exports.put = async (req,res) => {
    try{
        let products = await Product.findById(req.params.id);
        if(!products){
                return res.status(400).json({
                    message:"Product doesn't exist."
                })
        }
        let product = await Product.findByIdAndUpdate(req.params.id,{$set: req.body},{ new: true});
        return res.status(200).json({
            success:"true",
            message:"Product updated successfully",
            product:product
        })
        
    }catch(error){
        return res.status(400).json({
            message:false,
            error:error
        })
    }
}

exports.delete = async (req,res) => {
    try{
        let products = await Product.findById(req.params.id);
        if(!products){
                return res.status(400).json({
                    message:"Product doesn't exist."
                })
        }
        let product = await Product.findByIdAndRemove(req.params.id);
        return res.status(200).json({
            success:"true",
            message:"Product deleted successfully",
            product:product
        })
     
    }catch(error){
        console.log(error);
        return res.status(400).json({
            message:false,
            error:error
        })
    }
}