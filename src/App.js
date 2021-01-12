/**
 * react-bilibili.
 * Create by Devin on 2021/1/12.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import React from 'react';
import {Button, message} from "antd";

const App = () => (
    <Button type={'primary'} onClick={() => onClick()}>
        学习
    </Button>
)

function onClick() {
    message.success('')
}

export default App

// export default class App extends PureComponent {
//
//     render() {
//         return (
//             <div>
//                 Hello world
//             </div>
//         )
//     }
// }



