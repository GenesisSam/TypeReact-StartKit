module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: "commonjs",
        targets: {
          ie: "11",
        },
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true,
      },
    ],
  ],
  env: {
    test: {
      plugins: [
        "transform-es2015-modules-commonjs",
      ],
    },
  },
};
