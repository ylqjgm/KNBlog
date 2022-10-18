// 加载所需库
const { DataTypes } = require('sequelize')
const sequelize = require('./db')

// 评论模型
const Comment = sequelize.define(
  'comment',
  {
    // 评论编号，自增主键
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // 上级评论编号
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    // 评论者名称
    author: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    // 是否管理员评论
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    // 评论者邮箱
    mail: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    // 评论者网站地址
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    // 评论者IP地址
    ip: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    // 评论者访问信息
    agent: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    // 评论内容
    content: {
      type: DataTypes.TEXT
    },
    // 评论状态，examine待审核，publish发布，delete删除
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'examine'
    }
  },
  {
    underscored: true,
    tableName: 'comments'
  }
)

module.exports = Comment
