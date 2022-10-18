// 加载所需文件
const db = require('./db')
const Article = require('./article')
const Comment = require('./comment')
const Link = require('./link')
const Meta = require('./meta')
const Option = require('./option')
const Relationship = require('./relationship')
const User = require('./user')

// 创建表
db.sync({ force: true })

// 定义文章与元数据多对多关联
Article.belongsToMany(Meta, {
  through: Relationship,
  uniqueKey: 'article_id',
  foreignKey: 'article_id'
})
Meta.belongsToMany(Article, {
  through: Relationship,
  uniqueKey: 'meta_id',
  foreignKey: 'meta_id'
})

// 定义用户与文章一对多关联
User.hasMany(Article)
Article.belongsTo(User)

// 定义文章与评论一对多关联
Article.hasMany(Comment)
Comment.belongsTo(Article)

module.exports = {
  Article,
  Comment,
  Link,
  Meta,
  Option,
  Relationship,
  User
}
