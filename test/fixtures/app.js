'use strict'

module.exports = {
  pkg: {
    name: require('../../package').name + '-test'
  },
  api: {
    models: {},
    controllers: {},
    services: {}
  },
  config: {
    vault: {

    },
    main: {
      spools: [
        require('../../dist').VaultSpool
      ]
    }
  }
}


