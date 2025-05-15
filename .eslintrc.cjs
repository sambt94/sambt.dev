// ABOUTME: ESLint configuration file for the project
// ABOUTME: Defines linting rules for TypeScript and JavaScript files

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    es2022: true,
  },
  rules: {
    // Add any custom rules here
  },
  ignorePatterns: ['dist', 'node_modules'],
};