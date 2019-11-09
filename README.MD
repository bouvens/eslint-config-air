[![npm][npm-badge]][npm] [![npm][npm-dt-badge]][npm] [![GitHub issues][issues-badge]][issues]

# eslint-config-air

Airbnb style guide without semicolons for pet projects.

## How To Use

Install the package:
```Shell
yarn add -D eslint-config-air
```

Install peer dependencies if you haven't yet:

```Shell
yarn add -D eslint eslint-config-airbnb babel-eslint eslint-import-resolver-webpack eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

Add extends property to the ESLint config file. `.eslintrc.js` for instance.

```JS
module.exports = {
  extends: 'air',
}
```

[npm-badge]: https://img.shields.io/npm/v/eslint-config-air.png?style=flat-square
[npm]: https://www.npmjs.org/package/eslint-config-air

[npm-dt-badge]: https://img.shields.io/npm/dt/eslint-config-air.png?style=flat-square

[issues-badge]: https://img.shields.io/github/issues/bouvens/eslint-config-air.svg?style=flat-square
[issues]: https://github.com/bouvens/eslint-config-air/issues
