module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // Module resolver (keep your current alias)
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.tsx', '.ts', '.js', '.json', '.cjs'],
        alias: {
          '@': './src',
        },
      },
    ],

    // React Native Reanimated plugin
    'react-native-reanimated/plugin',

    // Enable private class methods for Hermes
    ['@babel/plugin-transform-private-methods', { loose: true }],

    // Transform export namespace syntax (for Zod, etc.)
    '@babel/plugin-transform-export-namespace-from',

    // Transform CommonJS → ES Modules (needed for some CJS dependencies)
    '@babel/plugin-transform-modules-commonjs',
  ],
};
