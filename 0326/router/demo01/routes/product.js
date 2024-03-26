var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');


router.use('/list',(req,res)=>{
    var products = fs.readFileSync(__dirname+'./product.json','utf8');
    res.send(products);
});
router.use('/:id',(req,res)=>{
    var products = fs.readFileSync('./product.json','utf8');
    let id = req.params.id;
    let productList = JSON.parse(products);
    let strRes = '';
    for(var p of productList.data){
        if(id === p.product_id){
            strRes = JSON.stringify(p);
        }
    }
    res.send(strRes);
});
module.exports = router;