import { ExtensionSpool } from '@fabrix/fabrix/dist/common/spools/extension'
import { Vault } from './vault'
import { Validator } from './validator'

import * as nodeVault from 'node-vault'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api  from './api/index'

export class VaultSpool extends ExtensionSpool {
  public vault: {[key: string]: any} = {}
  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })

    this.extensions = {
      vault: {
        get: () => {
          return this.vault
        },
        set: (newInstances) => {
          this.vault = newInstances
          // throw new Error('scheduler can not be set through FabrixApp, check spool-engine instead')
        },
        enumerable: true,
        configurable: true
      }
    }
  }

  /**
   * Validate Configuration
   */
  async validate () {
    // const requiredSpools = [ ]
    // const spools = Object.keys(this.app.spools)
    //
    // if (!spools.some(v => requiredSpools.indexOf(v) >= 0)) {
    //   return Promise.reject(new Error(`spool-caches requires spools: ${ requiredSpools.join(', ') }!`))
    // }

    if (!this.app.config.get('vault')) {
      return Promise.reject(new Error('No configuration found at config.vault!'))
    }

    return Promise.all([
      Validator.validateVaultConfig(this.app.config.get('vault'))
    ])
  }

  /**
   * Check if there some stores, if not set a default one
   */
  configure() {
    this.vault = nodeVault(this.app.config.get('vault'))
  }

  /**
   * create caching stores
   */
  async initialize() {
    return Vault.init(this.app)
  }

  /**
   * unload caching stores
   */
  async unload() {
    return Vault.unload(this.app)
  }
}
