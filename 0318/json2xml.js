const xml2js = require('xml2js');
const fs = require('fs');
const { log } = require('console');

var xmlBuilder = new xml2js.Builder();

var readJson = fs.createReadStream('city.json');

var data ='';
var cnt=0;
readJson.on('data',(err,result)=>{
   cnt +=1;
   data +=result;
   console.log('第'+ cnt +'次读入'+Buffer.byteLength(result)+'字节。');
    // if(err) throw err; 
    if(err) console.log(err);
})
readJson.on('end',()=>{
   var xml = xmlBuilder.buildObject(result);
   var writeJson = fs.createWriteStream('citiCopy.xml');
    writeJson.write(xml);
    writeJson.end();
});