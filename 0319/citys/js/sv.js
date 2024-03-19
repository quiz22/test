var http = require('http');

var sv = http.createServer();
sv.on('request',(req,res)=>{
    res.end();
});

sv.listen(8080,()=>{
    console.log('服务器已启动，端口号为8080');
});