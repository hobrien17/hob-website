const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const uqsso = require('uqsso');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const comp3506Router = require('./routes/comp3506');

const debug = true;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// UQ Single Sign-on Middleware
app.use(cookieParser());
if (!debug) {
    let sso = uqsso();
    app.use(sso);
} else {
    app.use(function (req, res, next) {
        req.user = {
            email: "s4434180@student.uq.edu.au",
            name:"Henry O'Brien",
            lastname:"O'Brien",
            firstname:"Henry",
            groups:["labs:comp3506", "labs:comp3506-2019-2"],
            type:"Student",
            user:"s4434180"
        };
        next();
    })
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/comp3506', comp3506Router);
// app.use('/users', usersRouter);

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
