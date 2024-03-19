var http = require('http');
var options = {
    hostname: 'www.baidu.com',
};

var req = http.get(options,res=>{
    res.setEncoding('utf-8');
    res.on('data',chunk=>{
        console.log(chunk);
    });
});