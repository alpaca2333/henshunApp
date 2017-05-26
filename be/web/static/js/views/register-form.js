/**
 * Created by alpaca on 2017/3/15.
 */
import * as React from 'react';
import * as $ from 'jquery';

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
    }

    static defaultProps = {
        action: '/api/vip/register'
    };

    render() {
        return (
            <form className="form-group">
                <input ref="regPhoneNum" type="text" name="phoneNumber" className="form-control" placeholder="手机号码"/><br/>
                <input ref="regPassword" type="password" name="password" className="form-control" placeholder="密码（至少8位）"/><br/>
                <input ref="regSecCode" type="text" name="check-code" className="form-control" placeholder="验证码" /><br/>
                <input type="button" onClick={this.register} className="btn btn-primary" value="注册"/>
            </form>
        );
    }

    register() {
        const postData = {};
        postData.phoneNum = this.refs.regPhoneNum.value;
        postData.password = this.refs.regPassword.value;
        postData.seccode = this.refs.regSecCode.value;
        $.post(this.props.action, {
            phoneNum: this.refs.regPhoneNum.value,
            password: this.refs.regPassword.value,
            seccode: this.refs.regSecCode.value
        }, (result) => {
            if (result.error) {
                alert("注册失败。\n原因是：" + result.messages);
            } else {
                window.location.href = '/vip/center';
            }
        });
    }
}