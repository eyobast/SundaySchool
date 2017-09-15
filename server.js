var express = require('express');
var app = express();
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load();
var exphbs = require('express-handlebars')
var path = require("path");
var port = process.env.PORT || 3000;
var flash = require('connect-flash');
app.use(flash());

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions
//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
 app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {

    res.render('signin')
  
 
});
//Models
var models = require("./models");
//Routes

var authRoute = require('./routes/auth.js')(app,passport);
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
//load passport strategies
require('./config/passport/passport.js')(passport, models.user);
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

 
app.listen(port, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});