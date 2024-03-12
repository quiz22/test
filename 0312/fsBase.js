var fs = require('fs');
fs.open('./input.txt','a+',(err,fd)=>{
    if(err){
        console.log('文件打开失败!');
        return false;
    }
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
});