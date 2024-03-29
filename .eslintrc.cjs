/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    '.eslintrc-auto-import.json',
    'airbnb-base',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'prettier/prettier': 'error',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // 'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-unused-vars': 'off',
    'no-var': 'warn',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'no-multi-assign': 'off',
    'prefer-const': 'error',
    'guard-for-in': 'off',
    'next-line': 'off',
    'class-methods-use-this': 'off',
    'vue/html-closing-bracket-newline': 'warn',
    'vue/multi-word-component-names': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-import-module-exports': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'typescript-eslint/ban-types': 'off',
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
