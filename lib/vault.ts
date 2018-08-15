import { FabrixApp } from '@fabrix/fabrix'

export const Vault = {
  /**
   * Create the Stores
   */

  init: (app: FabrixApp) => {
    // init vault server
    return app.vault.init({ secret_shares: 1, secret_threshold: 1 })
      .then( (result) => {
        const keys = result.keys
        // set token for all following requests
        app.vault.token = result.root_token
        // unseal vault server
        return app.vault.unseal({ secret_shares: 1, key: keys[0] })
      })
  },

  /**
   * Unload the Stores
   */
  unload: (app: FabrixApp) => {
    return Promise.resolve()
  }
}
