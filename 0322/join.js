const path = require('path');

var path1 = 'path1';
var path2 = 'path2/pp';
var path3 = '/path3';

var myPath = path.join(path1,path2,path3);
console.log(myPath);

myPath = path.resolve(path1,path2,path3);
console.log(myPath);

var newPath = 'C:\Users\Administrator\Desktop\test\0322\join.js';
var obj = path.parse(newPath);
console.log(obj);
