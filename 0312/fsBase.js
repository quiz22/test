const { log } = require('console');
var fs = require('fs');
fs.open('/input.txt','rs+',(err,rd)=>{
    if(err){
        console.log('文件打开失败!');
        return false;
    }
    fs.write(fd,'湖南幼儿师范高等专科学校',(err,bytes,str)=>{
        if(err) throw err;
        console.log('文件写入成功，共写入'+bytes);
    });
    fs.close(fd);
    if(err){
        console.log('文件关闭失败！');
    }
});