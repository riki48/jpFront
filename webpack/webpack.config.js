const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "..", "./dist"),
        filename: "[name].[fullhash].js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        hot: true
    }
    ,
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "..", "./src/index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-react','@babel/preset-typescript','@babel/preset-env']
                        }
                    }
                ]
            }
        ]
    }
}