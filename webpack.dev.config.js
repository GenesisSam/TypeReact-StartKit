const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const webpack = require("webpack");
const optimization = require("./webpack.optimization.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(common, optimization, {
  mode: "development",
  output: {
    filename: "./dist/bundle.js",
    globalObject: "this",
    path: path.resolve(__dirname, "./"),
  },
  devServer: {
    port: 8080,
    allowedHosts: [".lvh.me", "localhost"],
    compress: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    historyApiFallback: true,
    contentBase: "./"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development",
      ),
    }),
    new HtmlWebpackPlugin({
      template: "index.ejs",
      inject: false,
    }),
  ],
});
