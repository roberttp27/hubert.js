
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

