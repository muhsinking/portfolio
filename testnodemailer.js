var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: 'gmail.user@gmail.com',
		pass: 'userpass'
	}
});

var mailOptions = {
	from: 'some donkus <muhsinking@gmail.com>',
	to: 'muhsinking@gmail.com',
	subject: 'Hello',
	text: 'Hello world',
	html: '<b>Hello world</b>'
};

transporter.sendMail(mailOptions, function(error,info){
	if(error){
		console.log(error);
	}else{
		console.log('Message sent: ' + info.response);
});
