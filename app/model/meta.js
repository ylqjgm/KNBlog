// 加载所需库
const { DataTypes } = require('sequelize')
const sequelize = require('./db')

// 元数据模型
const Meta = sequelize.define(
  'meta',
  {
    // 元数据编号，自增主键
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // 数据名称
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    // 自定义链接
    slug: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    // 数据类型，category分类，tag标签，file文章，image图片
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'category'
    },
    // 数据描述
    intro: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    // 数据统计
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    // 数据排序
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ['slug', 'type']
      }
    ],
    tableName: 'metas'
  }
)

module.exports = Meta
