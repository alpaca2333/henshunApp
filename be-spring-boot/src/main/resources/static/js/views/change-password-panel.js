/**
 * Created by alpaca on 17-6-22.
 */
import * as React from 'react';
import {showAndHide, apis, showConnectionFailedMessage} from "../lib/common";
import {message} from 'antd';
import request from 'superagent';

export class ChangePasswordPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        requirePassword:  false,
        userId: 1
    };

    render() {
        return (
            <div>
                {this.props.requirePassword ? <div className="key-value">
                    <span className="key-small required-field">原密码</span>
                    <input type="password" className="form-inline" ref="oldPassword"/>
                </div> : ''}
                
                <div className="key-value">
                    <span className="key-small required-field">新密码</span>
                    <input type="password" className="form-inline" ref="password"/>
                </div>
                <div className="key-value">
                    <span className="key-small required-field">再次输入</span>
                    <input type="password" className="form-inline" ref="repeat"/>
                </div>
                <span className="error-tip" ref="errorTip">两次密码输入不一致，请检查后重试!!</span>
                <div className="dialog-footer">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            if (this.props.requirePassword) {
                                if (!this.refs.password.value) {
                                    this.refs.errorTip.innerHTML = '请输入新密码';
                                    showAndHide(this.refs.errorTip, 'inline');
                                    this.refs.password.focus();
                                    return;
                                }
                            }
                            if (this.refs.password.value.length < 6) {
                                this.refs.errorTip.innerHTML = '密码长度至少为6位';
                                showAndHide(this.refs.errorTip, 'inline');
                                this.refs.password.focus();
                                return;
                            }
                            if (this.refs.password.value !== this.refs.repeat.value) {
                                this.refs.errorTip.innerHTML = '两次密码输入不一致，请检查后重试';
                                showAndHide(this.refs.errorTip, 'inline');
                                this.refs.repeat.focus();
                                return;
                            }

                            const sendData = this.props.requirePassword ? {
                                oldPassword: this.refs.password.value,
                                newPassword: this.refs.password.value
                            } : {
                                newPassword: this.refs.password.value
                            }
                            request.put(apis.updatePassword(this.props.userId)).send({
                                sendData
                            }).end((err, resp) => {
                                if (err) {
                                    showConnectionFailedMessage();
                                    return;
                                }
                                if (resp.error) {
                                    message.warning('发生了错误：#' + resp.status + resp.error.message);
                                    return;
                                }
                                const result = resp.body;
                                if (result.error === 1) {
                                    message.warning('原密码错误。忘记密码请联系系统管理员。');
                                    return;
                                } else if (!result.error) {
                                    message.success('密码修改成功。');
                                    window.closeDialog();
                                } else {
                                    message.warning('发生了未知错误：' + result.message);
                                }
                            });
                        }}
                    >确定</button>
                    <button
                        className="btn btn-default" style={{marginLeft: '36px'}}
                        onClick={() => {
                            window.closeDialog();
                        }}
                    >取消</button>
                </div>
            </div>
        )
    }
}