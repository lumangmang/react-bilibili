/**
 * react-bilibili.
 * Create by Devin on 2021/1/12.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */
import React from 'react';
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'
import logo from './images/logo.jpg'
import api from '../../api'

const Item = Form.Item

const Login = () => {
    const onFinish = (async ({username, password}) => {
        const result = await api.login.login(username, password)
        console.log(' -------- ', result);
    })

    const onFinishFailed = (error) => {
        console.log('Received error of form: ', error);
    }

    return (<div className={'login'}>
            <div className={'login-header'}>
                <img src={logo} alt={'logo'}/>
                <h1>React: 后台管理系统</h1>
            </div>
            <div className={'login-content'}>
                <h1>用户登录</h1>
                <Form
                    name={'login-normal'}
                    className={'login-form'}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Item
                        name={'username'}
                        rules={[
                            {
                                required: true,
                                pattern: /^[a-zA-Z0-9_]+$/,
                                message: '用户名由字母、数字和下划线组成'
                            }
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined/>}
                            placeholder={'username'}
                            maxLength={12}
                        />
                    </Item>
                    <Item
                        name="password"
                        rules={[{
                            required: true,
                            message: '密码不能为空'
                        }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="password"
                        />
                    </Item>
                    <Item>
                        <Button
                            className={'login-form-button'}
                            type='primary'
                            htmlType={'submit'}
                        >
                            登 录
                        </Button>
                    </Item>
                </Form>
            </div>
        </div>
    )
}

export default Login
