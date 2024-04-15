var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
    var conn = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'stumanager'
    })
    conn.connect(err=>{
        if(err) console.error('连接错误' + err.stack);
        else console.log('连接成功！ID：' + conn.threadId);
    });

    var sql = 'select * from student';
    conn.query(sql, (err, result)=>{
        if(err) console.log('查询出错：' + err.message);
        else{
            // res.send(JSON.stringify(result));
            conn.end();
            res.render('student', {
                title: '学生信息列表',
                students: result
            })
        }
    });
});



module.exports = router;
