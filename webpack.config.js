const path = require('path')

module.exports = {
    mode:"production",
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: "[name].js",
    },
    module:{
        rules:[
            {
                test:/\.loader$/,
                use:['loader-loader']
            }
        ]
    },
    resolveLoader: {
        // 因为 html-loader 是开源 npm 包，所以这里要添加 'node_modules' 目录
        modules: [path.join(__dirname, './src/loaders'), 'node_modules']
    }
    
}