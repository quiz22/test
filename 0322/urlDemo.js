const url = require('url');

var myUrl = 'https://www.ptpress.com.cn/shopping/buy/?bookid=bk001';
var parseUrl = url.parse(myUrl);
console.log(parseUrl);