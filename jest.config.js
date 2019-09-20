module.exports = {
  preset: "ts-jest",
  globals: {
    NODE_ENV: "test",
    "ts-jest": {
      babelConfig: true,
    }
  },
  roots: [
    "<rootDir>/app"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
  },
  verbose: true,
  testRegex: "__tests__/.*_spec.tsx?$",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "<rootDir>/testSetup/setupEnzyme.ts",
  transformIgnorePatterns: [
    '/node_modules/(?!intl-messageformat|intl-messageformat-parser).+\\.js$',
  ],
}
