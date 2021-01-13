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
        createProxyMiddleware('/proxy', {
            target: 'http://localhost:8000',
            changeOrigin: true,
            pathRewrite: {
                '^/proxy': ''
            }
        })
    )
}
