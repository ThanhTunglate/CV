const homeRouter = require('./homeRouter');
const aboutRouter = require('./aboutRouter');
const contactRouter = require('./contactRouter');
const productRouter = require('./productRouter');
const blogRouter = require('./blogRouter');
const siteRouter = require('./siteRouter');
const cartRouter = require('./cartRouter');
const adminRouter = require('./adminRouter');

function router(app){
    app.use('/admin', adminRouter);
    app.use('/cart', cartRouter);
    app.use('/cc', siteRouter);
    app.use('/blog', blogRouter);
    app.use('/product', productRouter);
    app.use('/contact', contactRouter);
    app.use('/about', aboutRouter);
    app.use('/' , homeRouter);
}

module.exports = {router};