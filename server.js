var express = require('express');
// var nodemailer = require("nodemailer");
var fs = require('fs');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var pug = require('pug');
// var mandrillApi = JSON.parse(fs.readFileSync('private/apikey.json','utf8'));
var app = express();
var port = process.env.port || 8080; // 8080 for local or whatever number u want

app.set('view engine', 'pug');

app.use(
 sassMiddleware({
     src: __dirname + '/sass',
     dest: __dirname + '/public/css',
     prefix:  '/css',
//     outputStyle: 'compressed',
     debug: true
 })
);


app.use(express.static(path.join(__dirname, 'public')));

// var mandrillTransport = require('nodemailer-mandrill-transport');
//
// var transporter = nodemailer.createTransport(mandrillTransport({
// 	auth: {
// 		apiKey: mandrillApi.key
// 	}
// }));

app.get('/', function (req, res) {
  res.render('index');
});

// app.get('/send', function(req,res){
//
// 	var mailOptions = {
// 		from: req.query.from,
// 		to : 'muhsinking@gmail.com',
// 		subject : req.query.subject,
// 		text : req.query.text
// 	}
//
// 	console.log(mailOptions);
//
// 	transporter.sendMail(mailOptions, function(error, info){
// 		if(error){
// 			console.log(error);
// 			res.end("errorrrrr");
// 		}else{
// 			console.log("Message sent!");
// 			res.end("sent");
// 		}
// 	});
// });

app.listen(port,function(){
	console.log("Express started on port " + port);
});
