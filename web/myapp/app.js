var createError = require('http-errors');
var express = require('express');
var path = require('path');
var nodeMailer = require('nodemailer');
var bodyParser = require('body-parser');
var expressHBS=require('express-handlebars');
var logger = require('morgan');
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash=require('connect-flash')



//route create
var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var galleryRouter = require('./routes/gallery');
var servicesRouter = require('./routes/services');
var bookingRouter = require('./routes/onlineBooking');
var loginRouter = require('./routes/login');

var app = express();
const url="mongodb://localhost:27017/spaDB"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },(error) => {
  if(!error)
  {
    console.log("suucessfull connected")
  }
  else{
    console.log("connecting error")
  }
});



// view engine setup

app.engine('.hbs',expressHBS({defaultLayout: 'Layout',extname: '.hbs'}))
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(validator())
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
  key: 'user_id',
  secret: 'uiid',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

//router path deside
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/gallery', galleryRouter);
app.use('/services', servicesRouter);
app.use('/onlineBooking', bookingRouter);
app.use('/login', loginRouter);


// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
  if (req.cookies.user_id && !req.session.user) {
      res.clearCookie('user_id');        
  }
  next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
