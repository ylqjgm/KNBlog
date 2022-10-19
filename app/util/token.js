const { sign, verify } = require('jsonwebtoken')
const { config } = require('../config/app')

// 生成一个 Token
const getToken = user => {
  let privateKey = config.jwt.secret
  let expiresIn = config.jwt.expireIn

  return sign({ id: user }, privateKey, { expiresIn })
}

// 验证token
const verifyToken = token => {
  return new Promise((resolve, reject) => {
    const info = verify(token.split(' ')[1], config.jwt.secret)

    resolve(info)
  })
}

module.exports = {
  getToken,
  verifyToken
}
