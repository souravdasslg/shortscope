//initialize modules
const bodyparser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const express       = require('express');
const session       = require('express-session');
const fs            = require('fs');
const morgan        = require('morgan');
const path          = require('path');
const app           = express();

//initialize custom modules

app.use(bodyparser.json({limit:'10mb',extended:true}));
app.use(bodyparser.urlencoded({limit:'10mb',extended:true}));
app.use(cookieParser());
app.use(morgan('dev'));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/app/views'));
app.use(express.static(__dirname + '/public'));
//Setting up session
app.use(session({
    name :'AppCookie',
    secret: 'ALongSecretKeyForMakingTheCookieSecure'+Date.now(),
    resave: true,
    httpOnly : true,
    saveUninitialized: true,
    cookie: { secure: false }
}));

var route;
const controllerDir = './app/controller/';
//Importing all router in the
fs.readdirSync(controllerDir).forEach(function(file){
    if(path.extname(file) === '.js'){
        route = require('./app/controller/'+file);
        route.controller(app);
    }
});


app.listen(4000,function () {
    console.log('Server is Live');
});
