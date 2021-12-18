const Product = require('../../models/Product');
const {mutilpleMongooseToObject} = require('../../../util/mongoose');
class updateController{
    update(req, res, next){
        Product.find({})
            .then(Products => {
                res.render('admin/update', {
                    Products : mutilpleMongooseToObject(Products)
                });
            })
            .catch(next)
    }
}

module.exports = new updateController;