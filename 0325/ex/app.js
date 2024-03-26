var express = require('express');
var app = express();

app.get('/', (req,res)=>{
    res.send('这是我的第一个Express项目');
});

app.listen(3000, ()=>{console.log('服务器已启动，端口号为：3000')});