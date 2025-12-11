// .eslintrc.js
module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    // This line removes the “No Babel config file detected” error
    requireConfigFile: false,
    babelOptions: {
      presets: ['module:metro-react-native-babel-preset'],
    },
  },
  env: {
    es2021: true,
    node: true,
  },
  extends: ['@react-native-community'],
  rules: {
    // you can add custom rules here if needed
  },
};
