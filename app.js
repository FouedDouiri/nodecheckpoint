const http = require ('http');
var fs = require('fs');
const port = 3000;
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    fs.readFile('index.html',(err,data)=>{
        if(err){
            res.writeHead(404)
            res.write('error:not found')
        }
        else{
            res.write(data)
        }
        res.end
    })
    fs.appendFile('welcome.txt', 'Hello Node', (err)=> {
        if (err) throw err;
        console.log('Saved!');
      });
      fs.readFile('welcome.txt',{ encoding: 'utf8' },(err,data)=>
      {
        if(err){
            throw err
            console.log('eror reading file',err)
        }
        else{
            console.log('new file created content:')
            console.log(data)
        }
      })
      var generator = require('generate-password');

     var password = generator.generate({
	length: 10,
	numbers: true
});


console.log(password);
      fs.appendFile('passwordgenerator.txt', `your password is:${password}`, (err)=> {
        if (err) throw err;
        console.log('Saved pass!');
      });
      
      fs.appendFile('mailsender.txt', 'i ll send email to ', (err)=> {
        if (err) throw err;
        console.log('Saved mail!');
      });
      var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

var mailOptions = {
  from: '',
  to: '',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
    )
    server.listen(port,(err)=>{
        if(err){
            console.log('something went wrong')
        }
        else{
            console.log(`hello server is runing on port:${port}` )
        }
    })

