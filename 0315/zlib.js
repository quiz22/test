var fs = require('fs');
var zlib = require('zlib');

var rds = fs.createReadStream('data.rar');
var zip = zlib.createGzip();
var wrs = fs.createWriteStream('data.txt');

rds.pipe(zip).pipe(wrs);
console.log('文件压缩完成');