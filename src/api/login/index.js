/**
 * react-bilibili.
 * Create by Devin on 2021/1/12.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import http from '../http'

/**
 * 登陆
 * @param username 账号
 * @param password 密码
 * @returns {Promise<AxiosResponse<any>>}
 */
const login = (username, password) => http.post('/users/login', {username, password})

// eslint-disable-next-line
export default {
    login,
}
