var express = require('express');
var session = require('express-session');
var router = express.Router();

router.use(session({
  secret: 'keyBoard cat',
  resave: false,
  saveUninitialized: true,
  cookie: ('name','value',{
    maxAge: 1000
  })
}));

router.use('/login',(req,res)=>{
  req.session.userinfo = 'Harrison';
  res.send('登录成功')
});

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.userinfo){
    res.send('Hello' + req.session.userinfo + ',wellcome')
  }else{
    res.send('未登录！')
  }
  // res.render('index', { title: 'Express' });
});

module.exports = router;
