const express = require('express');
const path = require('path');
const { addListener } = require('nodemon');
const handlebars = require('express-handlebars');
const app= express();
const port = 3000;
const router = require('./router/index');
const db = require('./config/db/index');

//connect to db
db.connect();
app.use('/', express.static(path.join(__dirname + '/public')));
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname + '/resources/views'));
router.router(app);

app.listen(port, function(){
    console.log('listening ', port);
})