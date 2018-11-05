<<<<<<< HEAD

const formidableMiddleware = require('express-formidable');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var spo = 3000
app.use(formidableMiddleware());
app.post('/', (req, res) => {
  req.fields; // contains non-file fields
  req.files; // contains files
});
app.use("/", express.static(__dirname + '/'));
  
  app.get('/', function(req, res){
    res.send(__dirname  + 'index.html');
  });


http.listen(spo, function(){
  console.log('server on port: ' + spo );
});

=======

const formidableMiddleware = require('express-formidable');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var spo = 3000
app.use(formidableMiddleware());
app.post('/', (req, res) => {
  req.fields; // contains non-file fields
  req.files; // contains files
});
app.use("/", express.static(__dirname + '/'));
  
  app.get('/', function(req, res){
    res.send(__dirname  + 'index.html');
  });


http.listen(spo, function(){
  console.log('server on port: ' + spo );
});

>>>>>>> 2d8b7c920d4a87adf2498e1be15d0245595ba7fb
