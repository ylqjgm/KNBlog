// 载入所需库
const Sequelize = require('sequelize')
const { resolve } = require('path')

/**
 * 初始化Sequelize，使用Sqlite数据库引擎
 * 数据库路径：app/KNBlog.sqlite
 * 表名前缀：kn_
 */
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: resolve(__dirname, '../KNBlog.sqlite'),
  hooks: {
    beforeDefine(attributes, options) {
      options.tableName = 'kn_' + options.name.plural
    }
  }
})

module.exports = sequelize
