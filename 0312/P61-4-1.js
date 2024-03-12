var buf1 = Buffer.alloc(10);
var buf2 = Buffer.from([10,20,30,40]);
var buf3 = Buffer.from('https://www.baidu.com');
console.log(buf1);
console.log(buf2);
console.log(buf3);

var buf4 = Buffer.alloc(256);
var len = buf4.write('https://www.baidu.com');
console.log('写入的字节数为：'+ len);
console.log(buf4);