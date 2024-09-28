module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
      'react/no-unescaped-entities': 'off', // Disable or adjust the rule
      '@typescript-eslint/no-unused-vars': 'warn', // Set to warning instead of error
      '@typescript-eslint/no-empty-object-type': 'off', // Disable empty object type rule
    },
  };
  