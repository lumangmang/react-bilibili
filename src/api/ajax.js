/**
 * react-bilibili.
 * Create by Devin on 2021/1/12.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

// 基于axios的二次封装
import qs from 'qs'
import axios from "axios";

axios.defaults.timeout = 10000
axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = data => qs.stringify(data)
// axios.defaults.headers['Content-Type'] = 'application/json';
// axios.defaults.transformRequest = data => JSON.stringify(data);
axios.defaults.retry = 2;
axios.defaults.retryDelay = 5000;
axios.defaults.baseURL = '/proxy'

axios.defaults.validateStatus = status => {
    return /^(2|3)\d{2}$/.test(status.toString());
}

axios.interceptors.request.use((config) => {
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
    return response.data
}, error => {
    if (error.response) {
        return Promise.reject(error);
    } else {
        // 请求超时处理
        let config = error.config;
        // If config does not exist or the retry option is not set or window is offline, reject
        if (!config || !config.retry || !window.navigator.onLine) return Promise.reject(error);
        config.__retryCount = config.__retryCount || 0;
        // Check if we've maxed out the total number of retries
        if (config.__retryCount >= config.retry) {
            // Reject with the error
            return Promise.reject(error);
        }
        config.__retryCount += 1;
        // Create new promise to handle exponential backoff
        let backoff = new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, config.retryDelay || 1);
        });
        // Return the promise in which recalls axios to retry the request
        return backoff.then(function () {
            return axios(config);
        });
    }
})

export default axios
