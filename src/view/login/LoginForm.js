import React, { Component,Fragment } from 'react'
// import './index.scss'
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined,LockOutlined  } from '@ant-design/icons';
import { valid_pwd } from '../../util'
import { Login } from '../../api/account'
export default class LoginForm extends Component {
    constructor() {
        super()
        this.state = {}
    }
    onFinish = values => {
        Login().then(res => {
            console.log(res)
        }).catch(err => {
            
        })
        console.log('Received values of form: ', values);
    };
    toggleForm = () => {
        this.props.switchForm('regist')
    }
    render() {
        return (
            <Fragment>
                <div className="form-header">
                    <h4>登录</h4>
                    <span onClick={this.toggleForm}>注册</span>
                </div>
                <div>
                    {process.env.REACT_APP_BASE_URL}
                </div>
                <div className="form-content">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item name="username" rules={[ 
                            { required: true, message: '用户名不能为空!' }, 
                            { type: 'email',message: '邮箱格式不正确!'}
                        ]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item name="password" rules={[
                            { required: true, message: '密码不能为空!' },
                            { pattern: valid_pwd, message: '密码为数字+字母的6-20位长度!' } 
                        ]}>
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                        </Form.Item>
                        <Form.Item name="code" rules={[ 
                            { required: true, message: '验证码不能为空!' }, 
                            { len: 6, message: '验证码长度为6位!' } 
                        ]}>
                            <Row gutter={13}>
                                <Col className="gutter-row" span={15}>
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="code" />
                                </Col>
                                <Col className="gutter-row" span={9}>
                                    <Button type="danger" block>获取验证码</Button>
                                </Col>
                            </Row>
                        </Form.Item>
                        
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Fragment>
        )
    }
}
