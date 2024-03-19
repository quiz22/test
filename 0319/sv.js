const http = require('http');

var server = http.createServer();

server.on('request',(req,res)=>{
    res.end();
});
server.listen(8080,()=>{
    console.log('服务器已启动，端口号为8080');
})