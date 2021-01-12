/**
 * react-bilibili.
 * Create by Devin on 2021/1/12.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path={'/login'} component={Login} />
            <Route path={'/admin'} component={Admin} />
        </Switch>
    </BrowserRouter>
)

export default App



