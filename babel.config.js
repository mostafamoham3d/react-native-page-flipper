module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          '@': './src', // ⚡️ fixed alias (you don’t need '@/')
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
