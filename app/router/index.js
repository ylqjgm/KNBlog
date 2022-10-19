const router = require('@koa/router')()

router.get('/get', async ctx => {
  ctx.body = '/get'
})

router.get('/public/hello', async ctx => {
  ctx.body = '/public/hello'
})

module.exports = router
