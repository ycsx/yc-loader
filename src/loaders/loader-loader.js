module.exports = function (source) {
    // 处理 source ...
    console.log();
    
    return (()=>{
        return source.split('\r\n').map(item=>'console.log("'+item+'")').join('\r\n')
    })()

}