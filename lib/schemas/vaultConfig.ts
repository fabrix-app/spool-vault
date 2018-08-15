import * as joi from 'joi'

export const vaultConfig = joi.object().keys({
  apiVersion: joi.string(),
  endpoint: joi.string(),
  token: joi.string()
})
