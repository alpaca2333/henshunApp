/**
 * Created by alpaca on 17-6-25.
 */
import * as React from 'react';
import {YesNoDialog} from './yes-no-dialog';
import {Select, Col, Row} from 'antd';
import {showAndHide} from "../lib/common";
import {apis, showConnectionFailedMessage} from '../lib/common';
import {message} from 'antd';
import request from 'superagent';

const Option = Select.Option;

export class CustomerPersonalPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = CustomerPersonalPanel.initialState;
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.update = this.update.bind(this);
    }

    static initialState = {
        id: 1,
        name: '马迹噶',
        register: '2015-01-01',
        gender: 'male', // 'male' or 'female'
        phoneNumber: '15651656873',
        state: 'display', // 'display' or 'edit'
        client: {
            id: 1,
            name: '王女士',
            phoneNumber: '15651656873',
        },
        superior: {
            id: 1,
            name: '张女士',
            phoneNumber: '15651656873',
        }
    };

    render() {
        const labelState = this.state.state === 'display' ? 'inline' : 'none';
        const inputState = this.state.state === 'edit' ? 'inline' : 'none';
        return (
            <div>
                <div className="display-title">顾客信息</div>
                <div className="display-info">
                    <Row>
                        <Col span={8}>
                            <div className="key-value">
                                <span className="key">编号</span>
                                <span className="value">{this.state.id}</span>
                            </div>
                            <div className="key-value">
                                <span className="key required-field">姓名</span>
                                <span className="value" style={{display: labelState}}>{this.state.name}</span>
                                <input
                                    type="text" className="form-inline value" ref="inputName"
                                    defaultValue={this.state.name} style={{display: inputState}}/>
                                <span ref="tipName" className="error-tip">用户名不能为空</span>
                            </div>
                            <div className="key-value">
                                <span className="key required-field">手机号</span>
                                <span className="value" style={{display: labelState}}>{this.state.phoneNumber}</span>
                                <input
                                    type="text" className="form-inline value" ref="inputPhoneNumber"
                                    defaultValue={this.state.phoneNumber} style={{display: inputState}}/>
                                <span ref="tipPhoneNumber" className="error-tip">用户名不能为空</span>
                            </div>
                                                        <div className="key-value">
                                <span className="key required-field">性别</span>
                                <span className="value" style={{display: labelState}}>{CustomerPersonalPanel.getGenderChinese(this.state.gender)}</span>
                                <div style={{display: inputState}} ref="typeSelect">
                                    <Select
                                        className="value"
                                        defaultValue={this.state.gender} style={{ width: '300px'}}
                                        onChange={(val) => {
                                            this.refs.inputGender.innerText = val;
                                        }}
                                    >
                                        <Option value="male">男</Option>
                                        <Option value="female">女</Option>
                                    </Select>
                                </div>
                                <span style={{display: 'none'}} ref="inputGender">{this.state.gender}</span>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="key-value">
                                <span className="key">注册时间</span>
                                <span className="value">{this.state.register}</span>
                            </div>
                            <div className="key-value">
                                <span className="key">店主编号</span>
                                <span className="value">{this.state.client.id}</span>
                            </div>
                            <div className="key-value">
                                <span className="key">店主名称</span>
                                <span className="value">{this.state.client.name}</span>
                            </div>
                            <div className="key-value">
                                <span className="key">店主电话</span>
                                <span className="value">{this.state.client.phoneNumber}</span>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="key-value">
                                <span className="key">上级会员</span>
                                <span className="value">{this.state.superior.id}</span>
                            </div>
                            <div className="key-value">
                                <span className="key">上级名称</span>
                                <span className="value">{this.state.superior.name}</span>
                            </div>
                            <div className="key-value">
                                <span className="key">上级电话</span>
                                <span className="value">{this.state.superior.phoneNumber}</span>
                            </div>
                        </Col>
                    </Row>
                
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
                    <button
                        className="btn btn-default"
                        style={{display: this.state.state === 'edit' ? 'none': 'inline', marginLeft: '36px'}}
                        onClick={this.delete}
                    ><span className="glyphicon glyphicon-remove btn-icon"/>删除</button>
                </div>
            </div>
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

    edit() {
        this.setState({
            state: 'edit'
        });
    }

    save() {
        if (!this.validateInput()) return;
        const phoneNumber = this.refs.inputPhoneNumber.value;
        const gender = this.refs.inputGender.innerText;
        const name = this.refs.inputName.value;
        this.setState({
            phoneNumber: phoneNumber,
            gender: gender,
            name: name,
            state: 'display'
        });
        // TODO: 保存操作
    }

    validateInput() {
        const phoneNumber = this.refs.inputPhoneNumber.value;
        const name = this.refs.inputName.value;
        if (!phoneNumber) {
            this.refs.tipPhoneNumber.innerText = '电话号码不能为空！';
            showAndHide(this.refs.tipPhoneNumber, 'inline');
            return false;
        }
        if (!name) {
            this.refs.tipName.innerText = '姓名不能为空';
            showAndHide(this.refs.tipName, 'inline');
            return false;
        }
        return true;
    }

    static getGenderChinese(gender) {
        if (gender === 'male') return '男';
        if (gender === 'female') return '女';
    }

    update() {
        request.get(apis.getCustomerInfo(this.props.customerId)).end((err, resp) => {
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
                message.warning(result.error +  ' ' + result.message);
                return;
            }
            // TODO: 返回了正确的结果
        });
    }
}