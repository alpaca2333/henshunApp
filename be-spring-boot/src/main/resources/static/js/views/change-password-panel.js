/**
 * Created by alpaca on 17-6-22.
 */
import * as React from 'react';
import {showAndHide} from "../lib/common";

export class ChangePasswordPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        requirePassword:  false
    };

    render() {
        return (
            <div>
                <div className="key-value">
                    <span className="key-small required-field">原密码</span>
                    <input type="password" className="form-inline" ref="oldPassword"/>
                </div>
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
                            if (!this.refs.password.value) {
                                this.refs.errorTip.innerHTML = '请输入新密码';
                                showAndHide(this.refs.errorTip, 'inline');
                                this.refs.password.focus();
                                return;
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
                            // TODO:保存密码
                            window.closeDialog();
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