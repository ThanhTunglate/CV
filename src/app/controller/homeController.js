const Product = require('../models/Product');
const {mutilpleMongooseToObject}= require('../../util/mongoose');
class homeController{
    home(req, res, next){
        Product.find({})
            .then(Products=> res.render('nav/home', {
                Products : mutilpleMongooseToObject(Products.slice(0,4))
            }))
            .catch(next)
    }
}

module.exports = new homeController;