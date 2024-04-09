var express = require('express');
var router = express.Router();

var goods=[
  {
    "title": "德芙",
    "price": "69.9",
    "img": "/images/img1.jpg"
  },
  {
    "title": "德芙1",
    "price": "69.91",
    "img": "/images/img2.jpg"
  },
  {
    "title": "德芙2",
    "price": "69.92",
    "img": "/images/img3.jpg"
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pugGoods',(req,res)=>{
  res.render('goods.pug',{data:goods})                                                                                                                                         
});

module.exports = router;
