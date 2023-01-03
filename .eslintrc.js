module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-use-before-define': ['warn'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/jsx-curly-spacing': [
          'error',
          {
            when: 'never',
            allowMultiline: true,
            children: true,
          },
        ],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
          },
        ],
        'object-curly-spacing': 'error',
        'no-multiple-empty-lines': 'error',
        'react/jsx-indent': ['error', 2],
        'react/jsx-indent-props': ['error', 2],
      },
    },
  ],
};
