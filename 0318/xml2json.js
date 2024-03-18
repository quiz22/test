const xml2js = require('xml2js');
const fs = require('fs');

var xmlParser = new xml2js.Parser();

var readXml = fs.createReadStream('city.xml');
var data = '';
readXml.on('data',(rs)=>{
    data += rs;

    xmlParser.parseString(data,(err,result)=>{
        if(err) throw err;
        result = JSON.stringify(result);
        var writeXml = fs.createWriteStream('city.json');
        writeXml.write(result);
        writeXml.end();
    });
});