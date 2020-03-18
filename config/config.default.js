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

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*']
  }

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + 'hello_server'

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
    database: 'hello_server',
    // sequelize 配置
    define: {
      // 添加createAt,updateAt,deleteAt时间戳
      timestamps: true,
      // 使用软删除，即仅更新 deleteAt 时间戳 而不删除数据
      paranoid: true,
      // 不允许修改表名
      freezeTableName: true,
      // 禁止驼峰式字段默认转为下划线
      underscored: true
    },
    // 由于orm用的UTC时间，这里必须加上东八区，否则设置的时间相差8小时
    timezone: '+08:00',
    // mysql2 配置
    dialectOptions: {
      // 让读取date类型数据时返回时间戳而不是UTC时间
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === 'DATETIME') {
          return new Date(field.string()).valueOf()
        }

        return next()
      }
    }
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
