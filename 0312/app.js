var fs = require('fs');
let orders = [];//保存从文件中读取的数据

//从json文件读取数据
function readOrders(orders){
    fs.readFile('./order.json','utf-8',(err,data)=>{
        if(err) throw err;
        orders = JSON.parse(data);
        console.log(orders); 
    });
}
readOrders(orders);
//添加数据到文件中
function addOrder(orders){

}
//修改文件中指定的数据
function modifyOrders(key){

}
//删除文件中的指定数据
function delOrders(key){
    
}