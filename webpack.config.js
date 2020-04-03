const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    entry: {
        'index': './src/index.js',
        'page1': './src/js/page1.js'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            chunks: ['index'],
            filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/js/page1.html",
            chunks: ['page1'],
            filename: "./page1.html"
        })
    ]
};