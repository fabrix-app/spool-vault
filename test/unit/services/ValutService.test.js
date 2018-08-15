'use strict'
/* global describe, it */
const assert = require('assert')

describe('api.services.VaultService', () => {
  it('should exist', () => {
    assert(global.app.api.services.VaultService)
  })

  let VaultService
  before(() => {
    VaultService = global.app.services.VaultService
    // return Vaultervice.init()
  })
})
