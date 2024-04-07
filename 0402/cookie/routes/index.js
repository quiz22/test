var express = require('express');
var router = express.Router();
var fs = require('fs');
var {resolve} = require('path');

router.get('/checklogin',(req,res)=>{
  let cookie = req.cookies.userName;
  if(!cookie){
    res.send('alert("请登录以后再操作！"); location.href = "./login.html";');
  }else{
    res.send('0');
  }
});

router.post('/login',(req,res)=>{
  let user = req.body.username;
  let pass = req.body.password;

  let users = fs.readFileSync(resolve(__dirname,'../public/data/user.json'));
  users = JSON.parse(users);

  for(var i = 0; i < users.length; i++){
    if(users[i].userName === user && users[i].password === password){
      res.cookie('userName',user,{
        maxAge: 3600000,
        httpOnly: true
      });
      res.send({
        code: 0,
        msg: 'ok'
      });
       break;
    }
  }
  if(i === users.length){
    res.send({
      code: 1,
      msg: 'error'
    });
  }
});

module.exports = router;
