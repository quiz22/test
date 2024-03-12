// var buf1 = Buffer.alloc(10);
// var buf2 = Buffer.from([10,20,30,40]);
// var buf3 = Buffer.from('https://www.baidu.com');
// console.log(buf1);
// console.log(buf2);
// console.log(buf3);

// var buf4 = Buffer.alloc(256);
// var len = buf4.write('https://www.baidu.com');
// console.log('写入的字节数为：'+ len);
// console.log(buf4);

// var buf5 = Buffer.alloc(26);
// for(var i=0;i<26;i++){
//     buf5[i] = i + 65;
// }
// console.log(buf5);
// console.log(buf5.toString());

var buf6 = Buffer.from('https://www.baidu.com');
var buf7 = Buffer.from('百度搜索引擎');
var buf8 = Buffer.concat([buf6,buf7]);
console.log(buf8.toString());