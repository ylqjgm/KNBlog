// 加载所需库
const { DataTypes } = require('sequelize')
const sequelize = require('./db')
const Article = require('./article')
const Meta = require('./meta')

// 数据关联模型
const Relationship = sequelize.define(
  'relationship',
  {
    // 文章编号
    articleId: {
      type: DataTypes.INTEGER,
      references: {
        model: Article,
        key: 'id'
      },
      field: 'article_id'
    },
    // 元数据编号
    metaId: {
      type: DataTypes.INTEGER,
      references: {
        model: Meta,
        key: 'id'
      },
      field: 'meta_id'
    }
  },
  {
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ['article_id', 'meta_id']
      }
    ],
    tableName: 'relationships'
  }
)

module.exports = Relationship
