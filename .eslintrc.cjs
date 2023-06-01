module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react-refresh',
    'unused-imports',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/jsx-props-no-spreading': 'off',
    'no-plusplus': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'import/extensions': 'off',
    'import/prefer-default-export': 'warn',
    'react/no-array-index-key': 'off',
    'no-param-reassign': 'off',
  },
}
