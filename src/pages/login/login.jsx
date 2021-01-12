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

const Login = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
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
                >
                    <Form.Item
                        name={'username'}
                        rules={[{required: true, message: 'please input your username'}]}
                    >
                        <Input
                            prefix={<UserOutlined/>}
                            placeholder={'username'}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'please input your password'}]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            className={'login-form-button'}
                            type='primary'
                            htmlType={'submit'}
                        >
                            登 录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login
