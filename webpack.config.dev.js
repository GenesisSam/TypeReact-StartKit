const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    allowedHosts: [".lvh.me", "localhost"],
    compress: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    historyApiFallback: true,
  },
});
