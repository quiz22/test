const http = require('http');

var server = http.createServer();

server.on('request',(req,res)=>{
    console.log(req.headers);
    console.log(req.rawHeaders);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    res.end();
});
server.listen(8080,()=>{
    console.log('服务器已启动，端口号为8080');
})