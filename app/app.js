// 加载所需库
const koa = require('koa')
const json = require('koa-json')
const web = require('koa-static')
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')
const cors = require('@koa/cors')
const { resolve } = require('path')
const router = require('./router')
require('./model')

const app = new koa()
const PORT = process.env.PORT || 3000

app.use(bodyparser({ enableTypes: ['json', 'from', 'text'] }))
app.use(json())
app.use(logger())
app.use(web(resolve(__dirname, './web')))
app.use(cors())
app.use(router.prefix('/api').routes())
app.use(router.allowedMethods())

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

app.listen(PORT)
