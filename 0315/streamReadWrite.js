const fs = require('fs');
const readStream = fs.createReadStream('data.txt');
readStream.setEncoding('utf-8');
var writre = fs.createWriteStream('dataWrite.txt');


var data = '';
var cnt = 0;
var start = new Date();

readStream.on('data',(chunk)=>{
    data += chunk;
    cnt++;
    console.log('第'+cnt+'次得到数据块，共'+chunk.length+'字节；');
});

readStream.on('close',()=>{
    writre.write(data,'utf-8')
    writre.end();
});

    writre.on('finish',()=>{
        var endTime = new Date();
        var diff = (endTime - start);
    console.log('写入完毕,耗时：'+ diff);
});

console.log('程序执行完毕');
