module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off',
    'max-len': ['error', { 'code': 120 }],
    'func-names': ['error', 'as-needed'],
    'object-shorthand': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    // 'comma-dangle': ['error', 'always']
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
