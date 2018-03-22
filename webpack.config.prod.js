const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [new UglifyJsPlugin({ sourceMap: true })],
});
