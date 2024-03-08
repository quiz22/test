var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer((req,res)=>{
    var pathname = url.parse(req.url).pathname;
    console.log('链接是'+pathname);
    fs.readFile(pathname.substr(1),()=>{
        if(err){
            console.log(err);
            res.writeHead(404,{'Content-Type':'test/html'});
        }else{
            res.writeHead(200,{'Content-Type':'test/html'})
            res.write(data.toString());
        }
    });
});

app.listen(8080,()=>{console.log('启动了');})