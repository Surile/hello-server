/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1582861865715_3478'

  config.security = {
    csrf: {
      enable: false
      // headerName: 'x-csrf-token'
    }
  }

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'hello_server_test'
  }

  // add your middleware config here
  config.middleware = ['errorHandler']

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig
  }
}
