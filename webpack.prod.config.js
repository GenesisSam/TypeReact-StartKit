const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new UglifyJsPlugin({ sourceMap: true }),
  ],
});
