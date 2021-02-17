module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es6: true,
    jasmine: true,
  },
  extends: 'airbnb',
  plugins: [
    'import',
    'react',
  ],
  rules: {
    'complexity': ['warn', 12],
    'consistent-this': ['warn', 'that'],
    'curly': ['warn', 'all'],
    'linebreak-style': 'off',
    'no-multiple-empty-lines': 'warn',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-unexpected-multiline': 'error',
    'object-curly-newline': ['off'],
    'semi': ['warn', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'valid-jsdoc': ['error'],
    'jsx-a11y/label-has-for': [
      'warn', {
        'components': ['Label'],
        'required': {
          'every': [],
        },
      },
    ],
    'jsx-quotes': ['warn', 'prefer-double'],
    'react/destructuring-assignment': ['off', 'always'],
    'react/no-direct-mutation-state': 'error',
    'react/jsx-filename-extension': ['warn', { "extensions": [".js", ".jsx"] }],
    'react/jsx-tag-spacing': 'warn',
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': ['warn', 'static public field'],
    'import/prefer-default-export': 'off',
    'import/imports-first': 'warn',
  },
}
