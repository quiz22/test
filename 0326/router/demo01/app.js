var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRoute = require('./routes/product');

var app = express();

// 路由设置 
// 基于字符串的路由路径
app.get('/', (req,res)=>{
  res.send('根目录');
});

app.get('/about', (req,res)=>{
  res.send('简要介绍');
});

app.get('/login', (req,res)=>{
  res.send('登录模块');
});

// POST方法
app.post('/login', (req,res)=>{
  res.send('POST方式');
});

//       路由参数设置（基于路由参数的路由路径）            
app.get('/users/:uid/movies/:mid',(req,res)=>{
  res.send(req.params);
}); 

// 创建路由（必须以/开头）
// all方法
// app.all('/demoall',(req,res)=>{
//   res.send('支持所有访问方式');
// });

var f0 = function(req,res,next){
  console.log('请求0返回');
  next();
};

var f1 = function(req,res,next){
  console.log('请求1返回');
  next();
};

var f2 = function(req,res,next){
  res.send('请求2返回');
};

// app.use('/demoall',(req,res,next)=>{
//   console.log('请求0返回');
//   next();
// },(req,res,next)=>{
//   console.log('请求1返回');
//   next();
// },(req,res,next)=>{
//   res.send('请求2返回');
// },)

app.use('/demoall',f0,f1,f2);

// -----------------------------------------------------------------------

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);

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
