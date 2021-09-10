[![npm][npm-badge]][npm] [![npm][npm-dt-badge]][npm] [![GitHub issues][issues-badge]][issues]

# eslint-config-air

Airbnb style guide without semicolons

## How To Use

Install the package
```Shell
npm add -D eslint-config-air
```

Install peer dependencies if you haven't yet

```Shell
npm add -D eslint @babel/eslint-parser eslint-import-resolver-webpack eslint-plugin-react
```

Add extends property to an ESLint config file

```JS
extends: 'air',
```

## See also

There's the simplified config if you don't need React: [eslint-config-air-base](https://www.npmjs.com/package/eslint-config-air-base)

[npm-badge]: https://img.shields.io/npm/v/eslint-config-air.png?style=flat-square
[npm]: https://www.npmjs.org/package/eslint-config-air

[npm-dt-badge]: https://img.shields.io/npm/dt/eslint-config-air.png?style=flat-square

[issues-badge]: https://img.shields.io/github/issues/bouvens/eslint-config-air.svg?style=flat-square
[issues]: https://github.com/bouvens/eslint-config-air/issues
