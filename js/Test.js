var watch = require('watch');
var exec = require('child_process').exec;
var sys = require('sys');
var express = require('express');
var fs = require ('fs');
var http = require('http');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
//var sql = require("/usr/lib/node_modules/mssql");
var child;
var Myrequest = require("request");
var bodyParser = require("body-parser");
// config for your database

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name');
    res.setHeader('Access-Control-Allow-Credentials', true);

next();
}); 

server.listen(2424,function(){
  console.log('Listen 2424');
});

io.on('connection', function(socket) {
    console.log('Un cliente se ha conectado');

    socket.on('customer', function(data) {
      io.sockets.emit('admin', data);
       console.log(data);
    });
    socket.on('admin', function(data) {
      io.sockets.emit('customer', data);
      console.log(data);
    });
});






