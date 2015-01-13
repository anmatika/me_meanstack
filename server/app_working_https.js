var express = require('express'),
    app = express(),
    fs = require('fs'),
    // https = require('https'),
    http = require('http'),
    key = fs.readFileSync('/usr/local/etc/ssl/key.pem'),
    cert = fs.readFileSync('/usr/local/etc/ssl/cert.pem'),
    https_options = {
        key: key,
        cert: cert
    },
    PORT = 8000,
    HOST = 'localhost';

var server = require('https').createServer(https_options, app);
server.listen(PORT);

// http.createServer(app).listen(PORT);
// https.createServer(https_options.key, app).listen(PORT);

app.get('/', function(req, res) {
   res.send('Hello');
});

app.use(middleware);
app.use(middleware2);

module.exports = app;

function middleware(res, req, next){
    console.log('middleware 1');
    next();
}

function middleware2(res, req, next){
    console.log('middleware 2');
    next();
}