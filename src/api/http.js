/**
 * react-bilibili.
 * Create by Devin on 2021/1/13.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import ajax from "./ajax";
import { message } from "antd";

const post = async (url, params) => {
    try {
        return await ajax.post(url, params)
    } catch (error) {
        message.error(error.message)
    }
}

const get = async (url, params) => {
    try {
        return await ajax.get(url, {params})
    } catch (error) {
        message.error(error.message)
    }
}

// eslint-disable-next-line
export default {
    post,
    get
}
