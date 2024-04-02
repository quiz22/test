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
  
});

module.exports = router;
