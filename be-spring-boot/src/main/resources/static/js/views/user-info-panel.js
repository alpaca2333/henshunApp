/**
 * Created by alpaca on 17-6-22.
 */
import * as React from 'react';
import {UserListPanel} from './user-list-panel';
// import Select from 'react-select';
// import 'react-select/dist/react-select.css';
import {Select} from 'antd';
import {ChangePasswordPanel} from './change-password-panel';
import {YesNoDialog} from './yes-no-dialog';
// import {typeSelectOptions} from "../lib/common";
// import $ from 'jquery';

export class UserInfoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = UserInfoPanel.initialState;
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    static defaultProps = {
        id: 1
    };

    static initialState = {
        id: 1,
        phoneNumber: '15651656873',
        name: '张小刚',
        username: 'alpaca',
        type: 'admin',
        state: 'display' // display / edit
    };

    render() {
        const labelState = this.state.state === 'display' ? 'inline' : 'none';
        const inputState = this.state.state === 'display' ? 'none' : 'inline';
        return (
            <div className="display-panel">
                <div className="display-title">用户信息</div>
                <div className="display-info">
                    <div className="key-value">
                        <span className="key">编号</span>
                        <span className="value" ref="valId">{this.state.id}</span>
                    </div>
                    <div className="key-value">
                        <span className="key required-field">用户名</span>
                        <span className="value" ref="valUsername" style={{display: 'inline'}}>{this.state.username}</span>
                    </div>
                    <div className="key-value">
                        <span className="key">姓名</span>
                        <span className="value" ref="valName" style={{display: labelState}}>{this.state.name}</span>
                        <input
                            type="text" className="form-inline value" ref="inputName"
                            defaultValue={this.state.name} style={{display: inputState}}/>
                    </div>
                    <div className="key-value">
                        <span className="key required-field">手机号</span>
                        <span className="value" ref="valPhoneNumber" style={{display: labelState}}>{this.state.phoneNumber}</span>
                        <input
                            type="text" className="form-inline value" ref="inputPhoneNumber"
                            defaultValue={this.state.phoneNumber} style={{display: inputState}}/>
                    </div>
                    <div className="key-value">
                        <span className="key  required-field">身份</span>
                        <span className="value" ref="valType" style={{display: 'inline'}}>{UserListPanel.getTypeString(this.state.type)}</span>
                    </div>
                    <div className="key-value" style={{display: inputState === 'inline' ? 'block' : inputState}}>
                        <span className="key">密码</span>
                        <button className="btn btn-link" onClick={this.changePassword} style={{padding: '0'}}>修改密码</button>
                    </div>
                    <br/>
                    <button
                        className="btn btn-primary" id="btn-edit"
                        style={{display: this.state.state === 'edit' ? 'none': 'inline'}}
                        onClick={this.edit}
                    ><span className="glyphicon glyphicon-pencil btn-icon"/>编辑</button>
                    <button
                        className="btn btn-primary"
                        style={{display: this.state.state === 'edit' ? 'inline': 'none'}}
                        onClick={this.save}
                    ><span className="glyphicon glyphicon-save btn-icon"/>保存</button>
                    <button
                        className="btn btn-default"
                        style={{display: this.state.state === 'edit' ? 'inline': 'none', marginLeft: '36px'}}
                        onClick={this.cancel}
                    ><span className="glyphicon glyphicon-ban-circle btn-icon"/>取消</button>
                </div>
            </div>
        )
    }

    edit() {
        this.setState({
            state: 'edit'
        });
    }

    save() {
        if (!this.validateInput()) return;
        const id = this.refs.valId.innerText;
        const name = this.refs.inputName.value;
        const phoneNumber = this.refs.inputPhoneNumber.value;
        this.setState({
            username: username,
            name: name,
            phoneNumber: phoneNumber,
            type: type,
            state: 'display'
        });
    }

    cancel() {
        window.showDialog(
            "取消操作？",
            <YesNoDialog
                content="您还没有保存改动，确定要取消吗？"
                yesOption={
                () => {
                    this.setState({
                        state: 'display'
                    });
                    window.closeDialog();
                }
            }
                noOption={
                () => {
                    window.closeDialog();
                }
            }/>
        )
    }

    validateInput() {
        const id = this.refs.valId.innerText;
        const username = this.refs.inputUsername.value;
        const name = this.refs.inputName.value;
        const phoneNumber = this.refs.inputPhoneNumber.value;
        const type = this.refs.inputType.innerText;
        return true;
    }

    changePassword() {
        window.showDialog(
            '修改密码',
            <ChangePasswordPanel requirePassword={true}/>
        )
    }

    delete() {
        window.showDialog(
            "删除",
            <YesNoDialog
                content="确定要删除这个用户吗？"
                yesOption={() => {
                    // 删除操作
                    window.closeDialog();
                }}
            />
        )
    }
}