/**
 * Created by alpaca on 17-6-22.
 */
import * as React from 'react';

export class ChangePasswordPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="key-value">
                    <span className="key-small required-field">新密码</span>
                    <input type="password" className="form-inline" ref="password"/>
                </div>
                <div className="key-value">
                    <span className="key-small required-field">再次输入</span>
                    <input type="password" className="form-inline" ref="repeat"/>
                </div>
                <span className="error-tip" ref="errorTip">两次密码输入不一致，请检查后重试</span>
                <div className="dialog-footer">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            if (this.refs.password.value !== this.refs.repeat.value) {
                                this.refs.errorTip.style.display = 'block';
                                setTimeout(() => {
                                    this.refs.errorTip.style.display = 'none';
                                }, 3000);
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