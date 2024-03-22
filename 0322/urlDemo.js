const url = require('url');

var myUrl = 'https://www.ptpress.com.cn/shopping/buy/?bookid=bk001';
var parseUrl = url.parse(myUrl);
console.log(parseUrl);

myUrl = 'https://www.ptpress.com.cn';
var url2 = url.resolve(myUrl,'./about');
console.log('\n'+url2);

myUrl = 'https://www.ptpress.com.cn/about';
var url3 = url.resolve(myUrl,'./shopping');
console.log('\n'+url3);