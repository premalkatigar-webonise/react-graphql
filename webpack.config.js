const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:"./src/index.jsx",
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use: {
                    loader:"babel-loader"
                }
            },
            {
                test:/\.(.html)$/,
                use: [
                    {loader:"babel-loader" }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        })
    ],
    devServer:{
        port:5200
    }
}