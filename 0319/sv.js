const http = require('http');

var server = http.createServer();

server.on('request',(req,res)=>{
    // console.log(req.headers);
    // console.log(req.rawHeaders);
    // console.log(req.httpVersion);
    // console.log(req.method);
    // console.log(req.url);

    // 相应端
    // res.statusCode = 404;
    // res.statusMessage = 'not found';
    // res.setHeader('Content-Type','text/plain; charset=utf-8')

    res.writeHead(404,'not found',{
        'Content-Type':'text/plain; charset=utf-8'
    });
    res.write('这里服务器反馈信息')
    res.end();
});
server.listen(8080,()=>{
    console.log('服务器已启动，端口号为8080');
})