class contactControler{
    contact(req, res, next){
        res.render('nav/contact');
    }
}

module.exports = new contactControler;