const { log } = require('console');
const fs = require('fs');
var data = ''   

var str = '抵扣发送到';//要写入的内容 
var writre = fs.createWriteStream('dataWrite.txt');

writre.write(str,'utf-8');
writre.end();
writre.on('finish',()=>{
    console.log('写入完毕');
});

writre.on('error',(err)=>{});

console.log('程序执行完毕！');