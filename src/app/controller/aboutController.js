class aboutController{
    about(req, res, next){
        res.render('nav/about');
    }
}

module.exports = new aboutController;