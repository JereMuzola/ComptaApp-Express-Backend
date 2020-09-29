require("dotenv").config();

var express = require('express');
var mongoose=require('mongoose');
mongoose
  .connect(process.env.DATABASE_URL,{useNewUrlParser: true,
    useUnifiedTopology: true,useCreateIndex: true })
  .then(() => console.log("💻 Mondodb Connected"))
  .catch(err => console.log(err));

var bodyParser = require('body-parser')
var logger = require('morgan') // pour la journalisation des nos opérations serveurs
var fileStreamRotator = require('file-stream-rotator');
//const addRequestId = require('express-request-id')();
var helmet = require('helmet');
var session = require('express-session');
var allowMethods = require('allow-methods');
global.sha1=require('sha1');
QPromise = require('q');

app = express();

app.use(allowMethods(['get', 'head', 'post', 'put']));
//desable powered
app.disable('x-powered-by');
app.use(helmet());

app.use(helmet.contentSecurityPolicy({
    // Specify directives as normal. 
    directives: {
      defaultSrc: ["'self'", 'default.com'],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ['style.com'],
      imgSrc: ['img.com', 'data:'],
      sandbox: ['allow-forms', 'allow-scripts'],
      reportUri: '/report-violation',
      objectSrc: [] // An empty array allows nothing through 
    },
   
    // Set to true if you only want browsers to report errors, not block them 
    reportOnly: false,
   
    // Set to true if you want to blindly set all headers: Content-Security-Policy, 
    // X-WebKit-CSP, and X-Content-Security-Policy. 
    setAllHeaders: false,
   
    // Set to true if you want to disable CSP on Android where it can be buggy. 
    disableAndroid: false,
   
    // Set to false if you want to completely disable any user-agent sniffing. 
    // This may make the headers less compatible but it will be much faster. 
    // This defaults to `true`. 
    browserSniff: true
  }));

app.use(bodyParser.json());
app.set('port', process.env.PORT);
app.set('ipaddr',process.env.IP);

app.use((req, res, next)=> {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With ,Content-Type, Accept");
  next();

  app.options("*",(req,res)=>{
    res.header("Access-Control-Allow-Methods", "PUT, GET,POST");
    res.send();
  });
  
 });

//logger : pour la journalisation des nos opérations serveurs
var logDirectory=appRoot+ '/serverlog';
var accessLogStream = fileStreamRotator.getStream({
  date_format: 'DDMMYYYY',
  filename: logDirectory + '/ComptaApp-%DATE%.log',
  frequency: 'daily',
  verbose: true
})
app.use(logger('combined',{stream: accessLogStream}));

server = require('http').createServer(app); // create server
global.jwt=require("jsonwebtoken");
require('../routes/mainRoot');

