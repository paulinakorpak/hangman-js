module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-return-assign': 'off',
    'array-callback-return': 'off',
  },
};
