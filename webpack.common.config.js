const webpack = require("webpack");
const {
  TsConfigPathsPlugin,
  CheckerPlugin
} = require("awesome-typescript-loader");

module.exports = {
  entry: {
    main: "./app/index.tsx",
    vendor: ["react", "react-dom"],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    plugins: [new TsConfigPathsPlugin()],
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.tsx?$/,
        exclude: new RegExp(
          "node_modules/(?!(react-intl)/).*"
        ),
        use: [{
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
            },
          },
          {
            loader: "awesome-typescript-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CheckerPlugin()
  ],
};
