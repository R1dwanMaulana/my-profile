const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
 
module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            /* style and css loader */
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    },
                ]
            }
        ]
    },
    /* plugin */
    plugins: [
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "./index.html"
        }),
        new CopyPlugin({
            patterns: [
              { from: 'assets/css/', to: 'assets/css/' },
              { from: 'assets/scss/', to: 'assets/scss/' },
              { from: 'assets/img/', to: 'assets/img/' },
            ],
          }),
    ]
}