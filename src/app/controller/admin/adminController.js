class adminController{
    admin(req, res, next){
        res.render('admin/admin');
    }
}

module.exports = new adminController;