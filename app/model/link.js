// 加载所需库
const { DataTypes } = require('sequelize')
const sequelize = require('./db')

// 友情链接模型
const Link = sequelize.define(
  'link',
  {
    // 链接编号，自增主键
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // 网站名称
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    // 网站地址
    url: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    // 站长邮箱
    mail: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    // 网站LOGO地址
    logo: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    // 网站介绍
    intro: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    }
  },
  {
    underscored: true,
    tableName: 'links'
  }
)

module.exports = Link
