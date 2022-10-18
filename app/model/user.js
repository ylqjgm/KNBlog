// 加载所需库
const { DataTypes } = require('sequelize')
const sequelize = require('./db')

// 用户模型
const User = sequelize.define(
  'user',
  {
    // 用户编号
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // 用户名
    userName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    // 用户昵称
    nicName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    // 用户密码
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    // 用户邮箱
    mail: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    // 用户网站
    url: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    // 用户效验码
    authCode: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    // 用户最后登录IP
    ip: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    // 用户状态，false未激活,true激活
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    // 用户token信息存储
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  },
  {
    underscored: true,
    tableName: 'users'
  }
)

module.exports = User
