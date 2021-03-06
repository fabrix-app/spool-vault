# spool-vault

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

:package: Vault Spool


## Install
```sh
$ npm install --save @fabrix/spool-vault
```

## Configure

```js
// config/main.ts
export const main = {
  spools: [
    // ... other spools
    require('@fabrix/spool-vault').VaultSpool
  ]
}
```

## Configuration

```
// config/vault.ts
export const vault = {
  apiVersion: 'v1', // default
  endpoint: 'http://127.0.0.1:8200', // default
  token: '1234' // optional client token; can be fetched after valid initialization of the server
}
```

For more information about store (type and configuration) please see the vault documentation.

## Usage

```js
  

```

[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-vault.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-vault
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-vault/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-vault/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-vault.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-vault
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-vault.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-vault/coverage

