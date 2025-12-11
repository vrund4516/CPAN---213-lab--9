// .eslintrc.js
module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['module:@react-native/babel-preset'],
    },
  },
  env: {
    es2021: true,
    node: true,
  },
  extends: ['@react-native-community'],
  rules: {},
};
