exports.config = {
  server: {
    port: 3000
  },
  database: {
    name: 'KNBlog.sqlite',
    prefix: 'kn_'
  },
  api: {
    base: '/api',
    version: 'v1'
  },
  jwt: {
    secret: 'knblog',
    expireIn: Math.floor(Date.now() / 1000) + 60 * 60 * 24
  }
}
