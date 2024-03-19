var http = require('http');
var fs = require('fs')
var sv = http.createServer();

sv.on('request',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Content-Type','text/plain; charset=utf-8');

    fs.readFileSync();

    res.end();
});

sv.listen(8080,()=>{
    console.log('服务器已启动，端口号为8080');
    
});