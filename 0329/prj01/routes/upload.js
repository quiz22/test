var express = require('express');
var router  = express.Router();

var multuoarty  = require('multiparty');
var url = require('url');
var fs =  reuqire('fs');

router.get('/',function(req,res,next){
    res.sendFile('./view/index.html');
    // next();
});
router.post('/',)

module.exports = router;
