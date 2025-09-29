const { getDefaultConfig } = require('expo/metro-config'); // if using Expo

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts.push('cjs'); // add .cjs support

module.exports = defaultConfig;
