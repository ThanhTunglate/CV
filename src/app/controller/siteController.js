class siteController{
    signup(req, res, next){
        res.render('account/signup');
    }

    login(req, res, next){
        res.render('account/login');
    }
}

module.exports = new siteController;