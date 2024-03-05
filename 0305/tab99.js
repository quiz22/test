let tab99 = function(){
    let rs = '';
    for(var i = 9;i>0;i--){
        for(var j=1;j<=i;j++){
            rs += j + '*' + i + '=' + j * i + ' ';
        }
        rs += '\n';
    }

    return rs;
}
module.exports = tab99;