module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  extends: ['plugin:import/recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'no-bitwise': 2,
    'no-console': 2,
    'no-debugger': 2,
    'no-eval': 2,
    'no-string-literal': 0,
    'no-var': 2,
    'sort-keys': 0,
    'prefer-const': 2,
    radix: 2,
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: false },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  ignorePatterns: ['.eslintrc.js'],
};
