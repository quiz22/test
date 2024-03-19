const xml2js = require('xml2js');
const fs = require('fs');
const { error } = require('console');

var xmlBuilder = new xml2js.Builder();

// 数据源
var readJson = fs.createWriteStream('city.json');

var data = '';
var cnt = 0;

// 转成xml数据
readJson.on('data', (err, result) => {
    // console.log(result);
    cnt += 1;
    data += result;
    console.log('第' + cnt + '次读入' + Buffer.byteLength(result) + '字节。');
    if (err) console.log(err);
})
readJson.on('end', () => {
    // buildObject()是一个同步函数 没有回调
    var xml = xmlBuilder.buildObject(result);
    var writeJson = fs.createWriteStream('cityCopy.xml');
    writeJson.write(xml);
    writeJson.end();
});


