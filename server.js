var express = require('express');
var fs = require('fs');
var path = require('path');
var pug = require('pug');
var app = express();
var port = process.env.port || 8080; // 8080 for local or whatever number u want

app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/html/index.html'));
});

app.listen(port,function(){
	console.log("Express started on port " + port);
});
