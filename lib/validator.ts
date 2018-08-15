/* eslint no-console: [0] */
'use strict'

const joi = require('joi')
import { vaultConfig } from './schemas'

export const Validator = {

  // Validate Vault Config
  validateVaultConfig (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, vaultConfig, (err, value) => {
        if (err) {
          return reject(new TypeError('config.vault: ' + err))
        }
        return resolve(value)
      })
    })
  }
}
