var fs = require('fs');
let orders = [];//保存从文件中读取的数据

//从json文件读取数据
function readOrders(orders){
    fs.readFile('./order.json','utf-8',(err,data)=>{
        if(err) throw err;
        orders = JSON.parse(data); 
    });
}
readOrders(orders);
console.log(orders);