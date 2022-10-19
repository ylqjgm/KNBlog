// 载入所需库
const Sequelize = require('sequelize')
const { resolve } = require('path')
const { config } = require('../config/app')

// 初始化Sequelize，使用Sqlite数据库引擎
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: resolve(__dirname, '../' + config.database.name),
  hooks: {
    beforeDefine(attributes, options) {
      options.tableName = config.database.prefix + options.name.plural
    }
  }
})

module.exports = sequelize
