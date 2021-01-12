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

const Login = (props) => {
    const onFinish = ({username, password}) => {
        alert(`${username},${password}`)
    }

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
                    <Form.Item
                        name={'username'}
                        rules={[
                            {
                                required: true,
                                message: '账户不能为空'
                            },
                            {
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
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{
                            required: true,
                            message: 'please input your password'
                        }]}
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
