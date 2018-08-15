import { FabrixService as Service } from '@fabrix/fabrix/dist/common'

/**
 * @module CacheService
 * @description Cache Service
 */
export class VaultService extends Service {
  /**
   * Read From Vault
   * @param key
   * @returns {any | void | Promise<{bytesRead: number; buffer: (Buffer | Uint8Array)}> | Promise<any> | string | Buffer}
   */
  read(key) {
    return this.app.vault.read(key)
  }

  /**
   * Write to Vault
   * @param key
   * @param {{}} vars
   */
  write(key, vars = {}) {
    return this.app.vault.write(key, vars)
  }

  /**
   * Destroy Key in Vault
   * @param key
   * @returns {void | boolean | Promise<boolean> | IDBRequest}
   */
  destroy(key) {
    return this.app.vault.delete(key)
  }
}
