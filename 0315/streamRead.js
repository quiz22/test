const fs = require('fs');
const readStream = fs.createReadStream('data.txt');
readStream.setEncoding('utf-8');
var data = '';
var cnt = 0;
readStream.on('data',(chunk)=>{
    data += chunk;
    cnt++;
    console.log('第'+cnt+'次得到数据块，共'+chunk.length+'字节；');
});
console.log('程序执行完毕');
