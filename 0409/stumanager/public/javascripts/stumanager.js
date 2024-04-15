$('#btnAdd').click(function(){
    // alert('添加学生信息')
    $.ajax({
        url: '/student/add',
        method: 'post',
        data:   $('$frmAppend').serialize()
    })
});