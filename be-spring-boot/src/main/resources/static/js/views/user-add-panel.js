/**
 * Created by alpaca on 17-6-23.
 */
import * as React from 'react';
import {YesNoDialog} from "./yes-no-dialog";
import {showAndHide, typeSelectOptions, showConnectionFailedMessage, apis} from "../lib/common";
import {InfoDialog} from "./info-dialog";
import {Select, message} from 'antd';
import request from 'superagent';

const Option = Select.Option;

export class UserAddPanel extends React.Component {
    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }

    render() {
        return (
            <div className="display-panel">
                <div className="display-title">用户信息</div>
                <div className="display-info">
                    <div className="key-value">
                        <span className="key required-field">用户名</span>
                        <input type="text" className="form-inline" ref="inputUsername"/>
                        <span ref="tipUsername" className="error-tip">用户名不能为空</span>
                    </div>
                    <div className="key-value">
                        <span className="key">姓名</span>
                        <input type="text" className="form-inline" ref="inputName"/>
                        <span ref="tipName" className="error-tip">用户名不能为空</span>
                    </div>
                    <div className="key-value">
                        <span className="key">手机号</span>
                        <input type="text" className="form-inline" ref="inputPhoneNumber"/>
                    </div>
                    <div className="key-value">
                        <span className="key required-field">身份</span>
                        <div className="select" ref="typeSelect">
                            <Select
                                style={{width: '300px'}} className={'value'} defaultValue={'admin'}
                                onChange={(val) => {
                                    this.refs.inputType.innerText = val;
                                }}
                            >
                                <Option value="admin">系统管理员</Option>
                                <Option value="clerk">职员</Option>
                                <Option value="storeOwner">店主</Option>
                            </Select>
                            <span style={{display: 'none'}} ref="inputType">admin</span>
                        </div>
                    </div>
                    <div className="key-value">
                        <span className="key required-field">密码</span>
                        <input type="password" className="form-inline" ref="inputPassword"/>
                        <span ref="tipPassword" className="error-tip">用户名不能为空</span>
                    </div>
                    <div className="key-value">
                        <span className="key required-field">确认密码</span>
                        <input type="password" className="form-inline" ref="inputPassword2"/>
                        <span ref="tipPassword2" className="error-tip">用户名不能为空</span>
                    </div>


                    <button
                        className="btn btn-primary"
                        onClick={this.save}
                    ><span className="glyphicon glyphicon-save btn-icon"/>保存</button>
                    <button
                        className="btn btn-default"
                        onClick={this.cancel}
                        style={{marginLeft: '36px'}}
                    ><span className="glyphicon glyphicon-ban-circle btn-icon"/>取消</button>
                </div>
            </div>
        );
    }

    save() {
        if (!this.validateInput()) return;
        const username = this.refs.inputUsername.value;
        const name = this.refs.inputName.value;
        const phoneNumber = this.refs.inputPhoneNumber.value;
        const type = this.refs.inputType.innerText;
        
                
        request.post(apis.addUser).send({
            username: username,
            name: name, 
            type: type, 
            phoneNumber: phoneNumber
        }).end((err, resp) => {
            if (err) {
                showConnectionFailedMessage();
                return;
            }
            if (resp.error) {
                message.warning(resp.error.status + ' ' + resp.error.message);
                return;
            }
            const result = resp.body;
            if (result.error) {
                message.warning(result.message);
                return;
            }
            message.success('创建用户成功');
            window.components.consoleNavList.clickItem(0);
        })
    }

    cancel() {
        window.showDialog(
            "取消操作？",
            <YesNoDialog
                content="您的改动还没有保存，确定要取消吗？"
                yesOption={
                    () => {
                        window.components.consoleNavList.clickItem(0);
                        window.closeDialog();
                    }
                }
                noOption={
                    () => {
                        window.closeDialog();
                    }
                }
            />
        )
    }

    // 验证输入是否合法
    validateInput() {
        const username = this.refs.inputUsername.value;
        const name = this.refs.inputName.value;
        const phoneNumber = this.refs.inputPhoneNumber.value;
        const type = this.refs.inputType.innerText;
        const password = this.refs.inputPassword.value;
        const password2 = this.refs.inputPassword2.value;
        if (!username) {
            this.refs.tipUsername.innerText = '用户名不能为空';
            showAndHide(this.refs.tipUsername, 'inline');
            this.refs.tipUsername.focus();
            return false;
        }
        if (!password) {
            this.refs.tipPassword.innerText = '密码不能为空';
            showAndHide(this.refs.tipPassword, 'inline');
            this.refs.tipPassword.focus();
            return false;
        }
        if (password.length < 6) {
            this.refs.tipPassword.innerText = '密码长度太短';
            showAndHide(this.refs.tipPassword, 'inline');
            this.refs.tipPassword.focus();
            return false;
        }
        if (password !== password2) {
            this.refs.tipPassword2.innerText = '两次密码输入不一致';
            showAndHide(this.refs.tipPassword2, 'inline');
            this.refs.tipPassword2.focus();
            return false;
        }

        return true;
    }

    componentDidMount() {
        this.refs.inputUsername.focus();
    }
}