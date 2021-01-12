/**
 * react-bilibili.
 * Create by Devin on 2021/1/12.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/', {
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    )
}
