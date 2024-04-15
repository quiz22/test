$('#btnAdd').click(function(){
    // alert('添加学生信息')
    $.ajax({
        url: '/student/add',
        method: 'post',
        data:   $('$frmAppend').serialize()
    }).then(res=>{
        console.log(res);
        if(res.code === 0){
            alert('添加数据成功！')
            window.location.href = '/student';
        }else{
            alert('添加数据失败');
        }
    });
});