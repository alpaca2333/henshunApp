import * as React from 'react';
import Request from 'superagent';

export class LoginPane extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    static defaultProps = {
        url: '/api/login',
        cb: (result) => { }
    };

    render() {
        return (
            <div id="login-panel">
                <p className="login-title">登录</p>
                <p className="error-tip login-label" ref="requestError">服务器端发生了错误，请稍后重试</p>
                <br/>
                <p className="login-label">用户名</p>
                <span className="error-tip login-label" ref="usernameNotExist">用户名不存在</span>
                <span className="error-tip login-label" ref="inputUsername">请输入用户名</span>
                <div className="form-control login-control" ref="usernameDiv">
                    <img src="../../static/img/username_32.png" className="login-icon"/>
                    <input type="text" className="login-input" ref="usernameInput"/>
                </div>
                <p className="login-label">密码</p>
                <span className="error-tip login-label" ref="incorrectPassword">密码错误</span>
                <span className="error-tip login-label" ref="inputPassword">请输入密码</span>
                <div className="form-control login-control" ref="passwordDiv">
                    <img src="../../static/img/password_32.png" className="login-icon"/>
                    <input type="password" className="login-input" ref="passwordInput"/>
                </div>
                <input type="checkbox" className="check" id="check-remember"/>
                <label htmlFor="check-remember" id="label-remember">记住密码</label>
                <button id="login-button" onClick={this.login}>登录</button>
            </div>
        )
    }

    login() {
        const username = this.refs.usernameInput.value;
        const password = this.refs.passwordInput.value;

        if (!username) {
            this.refs.usernameDiv.className = "form-control login-control error";
            this.refs.inputUsername.style.display = "inline";
            this.refs.usernameInput.focus();
            setTimeout(() => {
                this.refs.usernameDiv.className = "form-control login-control";
                this.refs.inputUsername.style.display = "none";
            }, 5000);
            return;
        }

        if (!password) {
            this.refs.passwordDiv.className = "form-control login-control error";
            this.refs.inputPassword.style.display = "inline";
            this.refs.passwordInput.focus();
            setTimeout(() => {
                this.refs.passwordDiv.className = "form-control login-control";
                this.refs.inputPassword.style.display = "none";
            }, 5000);
            return;
        }

        Request
            .post(this.props.url)
            .send({
                username: username,
                password: password
            })
            .set('Accept', 'application/json')
            .end((err, res) => {
                console.log(err + " " + res);
                if (err) {
                    this.refs.requestError.style.display = "inline";
                    this.refs.requestError.innerText = "发生了错误，请稍后重试。" + err;
                    setTimeout(() => {
                        this.refs.requestError.style.display = "none";
                    }, 5000);
                    return;
                }
                // 用户名不存在
                if (res.body.error === 1) {
                    this.refs.usernameDiv.className = "form-control login-control error";
                    this.refs.usernameNotExist.style.display = "inline";
                    this.refs.usernameInput.focus();
                    setTimeout(() => {
                        this.refs.usernameDiv.className = "form-control login-control";
                        this.refs.usernameNotExist.style.display = "none";
                    }, 5000);
                    return;
                }
                // 密码错误
                if (res.body.error === 2) {
                    this.refs.passwordDiv.className = "form-control login-control error";
                    this.refs.incorrectPassword.style.display = "inline";
                    this.refs.passwordInput.focus();
                    setTimeout(() => {
                        this.refs.passwordDiv.className = "form-control login-control";
                        this.refs.incorrectPassword.style.display = "none";
                    }, 5000);
                }
                this.props.cb(res.body);
            });
    }
}