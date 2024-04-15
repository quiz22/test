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

router.post('/add',(req,res)=>{
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

    // console.log(req,body);
    
    var stu = {
        sNO:req.body.sNO,
        sName: req.body.sName,
        sSex: req.body.sSex,
        sBirthday: req.body.sBirthday,
        class: req.body.class,
    }

    var sql = "insert into student (sNo,sName,sSex,sBirthday,class) values ('" + stu.sNo + "'+',' "+stu.sName+"' , '" + stu.sSex+"', '" + stu.sBirthday+"','" + stu.class+"')"
    conn.query(sql,(err,result)=>{
        conn:end();
        if(err){
            console.log('添加数据错误！\n'+err.message);
            res.send({
                code:1,
                msg:'添加数据错误'
            })
        }else{
            res.send({
                code:0,
                msg:'OK'
            })
        }
    })
    res.send({

    })
});


module.exports = router;
