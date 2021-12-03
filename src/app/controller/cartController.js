class cartController {
    cart(req, res, next){
        res.render('nav/cart');
    }
}

module.exports = new cartController;