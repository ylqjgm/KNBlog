// 加载所需库
const { DataTypes } = require('sequelize')
const sequelize = require('./db')

// 配置模型
const Option = sequelize.define(
  'option',
  {
    // 配置名称
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    // 配置数据
    value: {
      type: DataTypes.TEXT
    }
  },
  {
    underscored: true,
    tableName: 'options'
  }
)

module.exports = Option
