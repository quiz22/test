const { log } = require('console');
var http = require('http');

var options = {
    hostname: 'www.baidu.com',
    port: 80,
    methods: 'GET',
    path: '/'
};

var req = http.request(options,function(res){
    console.log('STATUS: \n' + res.statusCode);

    // console.log('HEADERS: \n'+ JSON.stringify(res.headers));
    console.log('HEADERS:');    
    console.log(res.headers);
    var data='';

    res.on('data',function(chrunk){
        data += chrunk;
    });
    res.on('data',function(){
        console.log(data);
    });
});
req.end();