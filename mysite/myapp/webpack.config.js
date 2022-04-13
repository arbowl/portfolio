const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./static/frontend"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },

            {
                test: /\.(png|svg|jpg|gif|pdf)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]'
                    }
                  }
                ]
              },

            {        
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

        ],
    },
    optimization: {
        minimize:true,
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.end.NODE_ENV" : JSON.stringify("production")
        }),
    ],
};