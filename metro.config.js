const path = require("path");
const MetroConfig = require("@ui-kitten/metro-config");
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

const evaConfig = {
  evaPackage: "@eva-design/eva",
  customMappingPath: path.resolve(__dirname, "mapping.json"),
  watch: false,
};

module.exports = MetroConfig.create(evaConfig, config);
