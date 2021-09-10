module.exports = {
  extends: ['airbnb', 'air-base'],
  rules: {
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
