// 加载所需库
const { DataTypes } = require('sequelize')
const sequelize = require('./db')

// 文章模型
const Article = sequelize.define(
  'article',
  {
    // 文章编号
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // 文章标题
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    // 文章自定义链接
    slug: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    // 文章内容
    content: {
      type: DataTypes.TEXT
    },
    // 文章类型，false为文章，true为页面
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    // 文章状态，draft为草稿，publish为发布，delete为删除
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'draft'
    },
    // 文章访问密码
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    // 文章阅读次数
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    underscored: true,
    tableName: 'articles'
  }
)

module.exports = Article
