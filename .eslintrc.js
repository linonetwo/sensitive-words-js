module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: "./tsconfig.json"
  },
  plugins: [],
  rules: {},
  extends: ['eslint-config-tidgi'],
};
