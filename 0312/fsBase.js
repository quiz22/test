<<<<<<< HEAD
var fs = require('fs');
fs.open('./input.txt','a+',(err,fd)=>{
=======
const { log } = require('console');
var fs = require('fs');
fs.open('/input.txt','rs+',(err,rd)=>{
>>>>>>> 583f7fa1dd4b174bdf3d37b0637302ab0177a654
    if(err){
        console.log('文件打开失败!');
        return false;
    }
<<<<<<< HEAD
    fs.write(fd, '\n湖南幼儿师范高等专科学校',(err,bytes,str)=>{
        if(err) throw err;
        console.log('文件写入成功，共写入'+bytes+'字节。内容如下');
        console.log(str);
    });
    fs.close(fd,(err)=>{
        if(err){
            console.log('文件关闭失败！');
            throw err;
        }
        console.log('关闭文件完成');
    });
=======
    fs.write(fd,'湖南幼儿师范高等专科学校',(err,bytes,str)=>{
        if(err) throw err;
        console.log('文件写入成功，共写入'+bytes);
    });
    fs.close(fd);
    if(err){
        console.log('文件关闭失败！');
    }
>>>>>>> 583f7fa1dd4b174bdf3d37b0637302ab0177a654
});