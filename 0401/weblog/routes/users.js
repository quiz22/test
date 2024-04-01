var express = require('express');
var router = express.Router();

// 中间件1,检查token
app.use((req,res,next)=>{
let token = '123456789';
var accessToken = req.query.token;
// 检查请求中是否 有就继续执行
if(token === accessToken){
  next();  //允许往后走
}else{
  res.send({
    errcode:1,
    errMsg:'请求中必须包含 token'
  });
}
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
