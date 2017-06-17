import * as React from 'react';

export class LoginPane extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-panel panel">
                <div className="login-panel-heading">
                    <img height="60px" src="../../static/img/hengshun-logo.png" />
                    <span id="login-header-label"><b>管理信息系统</b></span>
                </div>
                <div className="login-panel-body">

                    <div className="form-input-panel" id="username-input" style={{marginTop: '25px'}}>
                        <img src="../../static/img/username_32.png"  width="22px" height="22px" className=" form-inline login-icon"/>
                        <input type="text" height="" width="100px" className="form-inline input-form" placeholder="账号或手机号"/>
                    </div>
                    <div className="form-input-panel" id="password-input">
                        <img src="../../static/img/password_32.png"  width="22px" height="22px" className=" form-inline login-icon"/>
                        <input type="password" width="100px" className="form-inline input-form login-input" placeholder="密码"/>
                    </div>
                    <button id="btn-login">登录</button>
                </div>
            </div>
        )
    }
}