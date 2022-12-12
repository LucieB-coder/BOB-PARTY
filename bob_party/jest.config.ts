module.exports = {
  testEnvironment: "node",
  preset: "ts-jest/presets/js-with-ts",
  transformIgnorePatterns: [ "/node_modules/(?!MODULE_NAME_HERE).+\\.js$"],
};
