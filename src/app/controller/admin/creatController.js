const Product = require('../../models/Product');
class createController{
    create(req, res, next){
        res.render('admin/create');
    }
    
    store(req, res, next){
        const data = new Product(req.body);
        data.save()
            .then(res.redirect('/admin'))
            .catch((err)=> console.log(err))
    }
}

module.exports = new createController;