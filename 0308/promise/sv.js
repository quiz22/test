var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer((req,res)=>{
    var pathname = url.parse(req.url).pathname;
    console.log('链接是'+pathname);
    fs.readFile(pathname.substr(1),(err,data)=>{
        if(err){
            console.log(err);
            res.writeHead(404,{'Content-Type':'text/html'});
        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data.toString());
        }
        res.end();
    });
});

app.listen(8080,()=>{console.log('启动了');})