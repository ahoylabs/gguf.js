module.exports = {
  env: { es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-sort-keys/recommended',
    'prettier',
    'plugin:prettier/recommended', // should always be at the end
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2020 },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'typescript-sort-keys',
    'simple-import-sort',
    'import',
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    curly: ['error', 'multi-line'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-throw-literal': 'error',
    'react/prop-types': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: true }],
  },
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts'] },
    react: { version: 'detect' },
  },
}
