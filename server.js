var express = require('express');
var nodemailer = require("nodemailer");
var app = express();

var fs = require('fs');
var mandrillApi = JSON.parse(fs.readFileSync('private/apikey.json','utf8'));

app.use(express.static(__dirname + '/public'));

var mandrillTransport = require('nodemailer-mandrill-transport');

var transporter = nodemailer.createTransport(mandrillTransport({
	auth: {
		apiKey: mandrillApi.key
	}
}));

app.get('/', function(req,res){
	res.sendfile('index.html');
});

app.get('/send', function(req,res){
	
	var mailOptions = {
		from: req.query.from,
		to : 'muhsinking@gmail.com',
		subject : req.query.subject,
		text : req.query.text
	}
	
	console.log(mailOptions);
	
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.end("errorrrrr");
		}else{
			console.log("Message sent!");
			res.end("sent");
		}
	});
});

app.listen(3000,function(){
	console.log("Express started on port 3000");
});
