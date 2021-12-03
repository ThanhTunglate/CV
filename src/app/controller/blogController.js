class blogController{
    blog(req, res,  next){
        res.render('nav/blog');
    }

    blog_detail(req, res, next){
        res.render('product/blog_detail');
    }
}

module.exports = new blogController;