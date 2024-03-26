var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

// 不带参数，显示所有数据
router.use('/List', (req,res)=>{
    console.log(__dirname);
    //                                相对路径
    var products = fs.readFileSync('./routes/product.json','utf8');
    // var products = fs.readFileSync(__dirname + './product.json','utf8');
    // 此处的products不需要转换为json字符串，它本身就是json字符串
    res.send(products);
});

// 带参数，只显示一个数据
router.use('/:id', (req,res)=>{
    let products = fs.readFileSync('./routes/product.json','utf8');
    var id = req.params.id;
    let productList = JSON.parse(products);
    let strRes = '';
    for(var p of productList.data){
        if(id === p.product_id){
            // 遍历
            strRes = JSON.stringify(p);
        }
    }
    res.send(strRes);
});

// 最后必须加上这一行，否则无效
// 对外公开这个路由管理器
module.exports = router;

// 创建路由管理器