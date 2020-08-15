const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: [
    "./src/index.js"
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'main.js',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      services: path.resolve(__dirname, "./src/services"),
      assets: path.resolve(__dirname, "./assets/")
    },
    extensions: [".js", ".jsx", ".json", ".css", ".scss", ".sass"]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    hot: true,
    port: 3000
  }
}