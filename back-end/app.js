var express = require('express');
var app = express();
var port = 10002;

// mongodb?
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/copernicloud');

app.listen(port, function (err, res) {
    if (err) {
        console.log('backend error');
    } else {
        console.log('backend started on port: ' + port);
    }
});

// CORS to avoid cross-origin errors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});