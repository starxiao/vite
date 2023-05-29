import React from 'react';
import { InputItem, Toast, Button } from 'antd-mobile';
import { ajax, get } from '../commons/ajax';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            msg: '',
            phone: '',
            password: ''
        }
    }

    onErrorTriggle = () => {
        if(this.state.hasError) {
            Toast.info(this.state.msg);
        }
    }

    onPhoneChange = (value) => {
        if(value.replace(/\s/g, '').length < 11) {
            this.setState({
                hasError: true,
                msg: '手机号码格式错误'
            });
        }else {
            this.setState({
                hasError: false,
                msg: ''
            });
        }

        this.setState({
            phone: value
        });
    }

    onPasswordChange = (value) => {
        if(value.length < 6 || value.length > 8) {
            this.setState({
                hasError: true,
                msg: '密码长度必须在6到8位'
            });
        }else {
            this.setState({
                hasError: false,
                msg: ''
            });
        }

        this.setState({
            password: value
        });
    }

    onSubmit = () => {
        get('/api/login', {
            phone: this.state.phone,
            password: this.state.password
        }).then(res => {
            if(res.code === 200) {
                this.$router.push({
                    path: '/'
                });
            }
        });
    }

    render() {
        return (
            <div className="login-container">
                <InputItem 
                    type="phone"
                    placeholder="请输入手机号码"
                    onChange={this.onPhoneChange}
                    value={this.state.phone}>
                    手机号码
                </InputItem>
                <InputItem
                    type="password"
                    placeholder="请输入密码"
                    onChange={this.onPasswordChange}
                    value={this.state.password}>
                    密码
                </InputItem>
                <Button type="primary" onClick={this.onSubmit}>提交</Button>
            </div>
        )
    }
}

export default Login;