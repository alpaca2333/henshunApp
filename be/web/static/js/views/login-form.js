/**
 * Created by alpaca on 2017/2/27.
 */
import * as React from 'react';
import {InputText} from './input-text';
import * as $ from 'jquery';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.checkInput = this.checkInput.bind(this);
    }

    static defaultProps = {
        action: '/login',
        redirect: '/'
    };

    checkInput() {
        const inputUsername = this.refs.inputUsername;
        const inputPassword = this.refs.inputPassword;
        if (!inputUsername.getValue()) {
            inputUsername.setStatus('error', '登录名不能为空！');
            return;
        }
        if (!inputPassword.getValue()) {
            inputPassword.setStatus('error', '请输入登录密码！');
            return;
        }
        const redirectUrl = this.props.redirect;
        $.ajax({
            type: 'POST',
            url: this.props.action,
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                username: inputUsername.getValue(),
                password: inputPassword.getValue()
            }),
            success: (result) => {
                if (!result.error) {
                    window.location.href = redirectUrl;
                    return;
                }
                if (result.error == '1') {
                    inputUsername.setStatus('error', '用户名不存在');
                    return;
                }
                if (result.error == '2') {
                    inputPassword.setStatus('error', '密码错误')
                }
            },
            error: function(error_info) {
                alert(error_info.responseText);
            }
        });
    }

    render() {
        return (
            <form method="post">
                <InputText name="username" placeholder="会员卡号或手机号" ref="inputUsername" id="login-form-username"/><br/>
                <InputText name="password" isPassword={true} placeholder="密码" ref="inputPassword" id="login-form-password"/><br/>
                <input type="button" onClick={this.checkInput} className="btn btn-primary" value="登录"/>
            </form>
        )
    }
}