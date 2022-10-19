// 加载koa库
const koa = require('koa')
// 加载日志库
const logger = require('koa-logger')
// 加载安全库
const helmet = require('koa-helmet')
// 加载路由
const router = require('./router')
// 加载跨域处理库
const cors = require('@koa/cors')
// 加载jwt处理库
const jwt = require('koa-jwt')
// 加载请求处理库
const body = require('koa-bodyparser')
// 加载json库
const json = require('koa-json')
// 加载静态处理库
const serve = require('koa-static')
// 加载缓存库
const conditional = require('koa-conditional-get')
const etag = require('koa-etag')
// 加载压缩库
const compress = require('koa-compress')
// 加载配置数据
const { config } = require('./config/app')
// 加载token处理库
const { verifyToken } = require('./util/token')
// 加载数据库模型
require('./model')

// 初始化koa
const app = new koa()

// 收到请求和发送相应时打印日志
app.use(logger())
// 处理一些安全性相关的HTTP头
app.use(helmet())
// 请求处理
app.use(body({ enableTypes: ['json', 'from', 'text'] }))
// 跨域处理
app.use(cors())
// 缓存处理
app.use(conditional())
app.use(etag())
// json支持
app.use(json())
// 数据压缩
app.use(compress({ threshold: 2048, br: false }))
// 静态文件，vue编译文件
app.use(serve(__dirname + '/web/'))

// 401错误
app.use(async (ctx, next) => {
  await next().catch(err => {
    if (err.status === 401) {
      ctx.status = 401
      let errMessage = err.originalError
        ? err.originalError.message
        : err.message
      ctx.body = {
        error: errMessage
      }
      ctx.set('X-Status-Reason', errMessage)
    } else {
      throw err
    }
  })
})

// 自动获取客户端提交的token，验证后存入ctx.state中
app.use(async (ctx, next) => {
  let token = ctx.headers.authorization
  if (token === undefined) await next()
  else {
    verifyToken(token).then(data => {
      ctx.state = {
        token: data
      }
    })
    await next()
  }
})

// 开启jwt，遇到路径内含有 /public/ 的则跳过验证
app.use(
  jwt({
    secret: config.jwt.secret
  }).unless({
    path: [/\/public/, '/']
  })
)

// 添加处理时间头部信息
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// 路由处理，设置为 /api 前缀
app.use(router.prefix('/api').routes())
// 如果使用了不支持的方法访问响应头会返回 405 Method Not Allowed 和 Allow 字段
app.use(router.allowedMethods())

// 启动服务器监听
app.listen(config.server.port, () => {
  console.log('Server listening...')
})
