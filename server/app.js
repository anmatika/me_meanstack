
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var exphbs  = require('express-handlebars');
var router = express.Router();
var mongoose = require("mongoose");
var configDb = require('./config/db');
var passport = require('passport');
var session      = require('express-session');
var flash    = require('connect-flash');
var fs = require('fs');
var https = require('https');
var http = require('http');
var key = fs.readFileSync('/usr/local/etc/ssl/key.pem');
var cert = fs.readFileSync('/usr/local/etc/ssl/cert.pem');
var i18n = require('i18next');

var https_options = {
    key: key,
    cert: cert
};

var PORT = 8000;
var HOST = 'localhost';
var api = express();

var hbs = exphbs.create({
    defaultLayout: 'main',   
    helpers: require('./lib/helpers')(i18n)
});
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

require('./config/passport')(passport); // pass passport for configuration
mongoose.connect(configDb.url);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// required for passport
app.use(session({ secret: 'fhappylfjkl3jklovec312yesdvdgood' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// default: using 'accept-language' header to guess language settings
// app.use(i18n.init);
i18n.init({ lng: "en-US" });



/**
 * Development Settings
 */
if (app.get('env') === 'development') {

    // This will change in production since we'll be using the dist folder
    app.use(express.static(path.join(__dirname, '../client')));
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, '../client/.tmp')));
    app.use(express.static(path.join(__dirname, '../client/app')));


    // Error Handling
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {

    // changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, '/dist')));

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

// add static files serving for server side styles
app.use(express.static(path.join(__dirname, '/styles/css')));

// add static files serving for server side bower_components
app.use(express.static(path.join(__dirname, '/bower_components')));

// add static files serving for server side scripts
app.use(express.static(path.join(__dirname, '/scripts')));

//HTTPS Api Server
https.createServer(https_options, app).listen(8000, function(){
  console.log("Api server listening on port " + app.get('ssl_port'));
});


function ensureSecure(req, res, next){
  if(req.secure){
    // OK, continue
    return next();
  };
  res.redirect('https://'+ req.host +':8000' + req.url); // handle port numbers if you need non defaults
};

app.all('/secure/*', ensureSecure); // at top of routing calls

// https_server.listen(PORT);

/**
* Routes
*/
require('./routes/routes')(router, passport);
app.use(router);

module.exports = app;
