/**
 * react-bilibili.
 * Create by Devin on 2021/1/12.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";

ReactDom.render(
    // 严格模式
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
