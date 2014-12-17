// This is server for nodejitsu
karvinenroutesImagePath = './server/dist/images/galleria'
mongoConn = 'mongodb://nodejitsu:a770766d005f14f5226cf5cf01276c35@troup.mongohq.com:10096/nodejitsudb9016179079';

var express = require('express');
var path = require('path');
var routes = require('./server/routes/routes');


var app = express();

 // changes it to use the optimized version for production
app.use(express.static(path.join(__dirname, '/server/dist')));

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(process.env.PORT || 3000);

/**
* Routes
*/
app.use('/routes', routes);

// module.exports = app;