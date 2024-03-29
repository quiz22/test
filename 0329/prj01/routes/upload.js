var express = require('express');
var router  = express.Router();

var multuoarty  = require('multiparty');
var url = require('url');
var fs =  reuqire('fs');

router.get('/',function(req,res,next){
    res.sendFile('./view/index.html');
    // next();
});
router.post('/',function(req,res,next){
    var form = new multuoarty.Form();
    form.encoding = 'utf-8';
    from.uploadDir = './public/files';
    from.maxFileSize = 20*1024*1024;
    from.maxFileds = 1000;
    from.parse(req,function(err,fileds,files){
        var filesTemp = JSON.stringify(files,null,2);
        if(err)
        console.log(err);
        else{
            var inputFile = files.inputFile[0];
            
        }
    });
});

module.exports = router;
