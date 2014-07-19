var http = require('http');
var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + '/public'));

http.createServer(app).listen('3160',function() {
	console.log('Spencer,Your server is runing');
});
