const Product = require('../models/Product');
const Category= require('../models/Category');
const {mutilpleMongooseToObject} = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');

class productController{
    product(req, res, next){  
        Product.find({})
            .then(Products => res.render('product/product', {
                Products : mutilpleMongooseToObject(Products.slice((req.query.page-1)*6, 5*req.query.page+(1*req.query.page))),
                index : Products.length
            }))
            .catch(next)
    }

    product_detail(req, res, next){
        Product.findById({_id : req.params.id})
            .then(Product => res.render('product/detail', {
                Product : mongooseToObject(Product)
            }))
            .catch(next)
    }


    find_brand(req, res, next){
        Product.find({category : req.params.brand})
            .then(Products => 
                //res.send('dasdsad-' + req.params.brand)
                res.render('product/product', { Products : mutilpleMongooseToObject(Products)})
            )
            .catch(next)
    }

    create(req, res, next){
        res.render('product/create');
    }
    
    //POST
    store(req, res, next){
        res.json(req.body);
    }
    
}

module.exports = new productController;