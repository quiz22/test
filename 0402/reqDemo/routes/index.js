var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var pathViews = __dirname.substring(0,__dirname.lastIndexOf('\\')) + '/views/';
 
  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 动态URL，需要使用params获取参数
router.get('/foods/:id',(req,res)=>{
  let id = req.params.id;
  if(id === '1'){
    res.render('foods1');
  }else if(id === '2'){
    res.render('foods2');
  }else{
    res.render('error');
  }
});

// query,静态书写url
router.get('/login',function(req,res){
  // let user = req.query.username;
  // let pass = req.query.password;
  // if(user === 'admin' && pass === '123456'){
  //   res.send('登陆成功！');
  // }else{
  //   res.send('登录失败！');
  // }
  res.sendFile(pathViews + 'login.html');
});

router.post('/login', (req, res) => {  
  var user = req.body.username;  
  var pass = req.body.password;  
  if (user === 'admin' && pass === '123456') {  
    res.send('<h1>登录成功！</h1>');  
  } else {  
    res.send('<h1>登录失败！</h1>');  
  }  
}); 
module.exports = router;
