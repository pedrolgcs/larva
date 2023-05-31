module.exports = {
  extends: '@rocketseat/eslint-config/react',
  plugins: ['eslint-plugin-import-helpers'],
  rules: {
    'no-case-declarations': 'off',
    camelcase: 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'never',
        groups: [
          '/^react$/',
          '/^next/',
          '/^@[a-zA-Z]/',
          'module',
          '/^@/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
  },
};
