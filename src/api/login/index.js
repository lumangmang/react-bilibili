/**
 * react-bilibili.
 * Create by Devin on 2021/1/12.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import ajax from "../ajax";

function login(username, password) {
    ajax.post('/login', {
        username,
        password,
    })
}

function logout() {
    console.log('logout');
}

export default {
    login,
    logout
}
