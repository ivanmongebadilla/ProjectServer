var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
const config = require('./config');

const hostname = 'localhost';
const port = 3000;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const newRouter = require('./routes/newRouter');
const crossfitdayRouter = require('./routes/crossfitdayRouter');
const gymdayRouter = require('./routes/gymdayRouter');
const gymworkoutRouter = require('./routes/gymworkoutRouter');
const crossfitworkoutRouter = require('./routes/crossfitworkoutRouter');

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/reactnative';
const connect = mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then(() => console.log('Connected correctly to server'),
  err => console.log(err)
);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/news', newRouter);
app.use('/crossfitDays', crossfitdayRouter);
app.use('/gymDays', gymdayRouter);
app.use('/gymWorkouts', gymworkoutRouter);
app.use('/crossfitWorkouts', crossfitworkoutRouter)

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

// ADDED THIS PART FOR TEST
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// ADDED THIS PART FOR TEST


module.exports = app;
