/**
 * Created by alpaca on 2017/6/25.
 */
import * as React from 'react';
import {DatePicker, Select} from 'antd';
const Option = Select.Option;
import {YesNoDialog} from "./yes-no-dialog";
import {PeEditDialog} from "./pe-edit-dialog";
import moment from 'moment';

export class BabyInfoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = BabyInfoPanel.initialState;
        this.edit = this.edit.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    static defaultProps = {
        babyId: 1
    };

    static initialState = {
        id: 1,
        name: '小马迹噶',
        birthday: '2017-01-01',
        gender: '女',
        pe: [
            {
                time: '2017-01-02',
                items: [
                    {
                        title: '肝功能',
                        value: '严重受损！！汝命危矣！！'
                    },
                    {
                        title: '肾功能',
                        value: '生活节制！！！'
                    }
                ]
            },
            {
                time: '2016-01-01',
                items: [
                    {
                        title: '肝功能',
                        value: '正常！！！！'
                    },
                    {
                        title: '肾功能',
                        value: '正常！！！！'
                    }
                ]
            }
        ],
        state: 'display'    // display / edit
    };

    render() {
        const pes = [];
        const labelState = this.state.state === 'display' ? 'inline' : 'none';
        const inputState = this.state.state === 'edit' ? 'inline-block' : 'none';

        for (let j in this.state.pe) {
            const pe = this.state.pe[j];
            const peItems = [];
            for (let k in pe.items) {
                const peItem = pe.items[k];
                peItems.push(
                    <div className="key-value pe-item" key={'pe' + j + 'item' + k}>
                        <span className="key">{peItem.title}</span>
                        <span className="value">{peItem.value}</span>
                    </div>
                )
            }
            pes.push(
                <div className="panel panel-default pe-panel" key={'pe' + j} >
                    <div className="panel-heading">
                        体检报告 - {pe.time}
                        <button
                            className="btn-link btn"
                            onClick={() => {
                                window.showDialog(
                                    '体检报告 - 编辑',
                                    <PeEditDialog/>
                                )
                            }}
                        >
                            <span className="glyphicon glyphicon-pencil"/>
                        </button>
                    </div>
                    <div className="panel-body" style={{paddingBottom: '0'}}>
                        {peItems}
                    </div>
                </div>
            );
        }
        return (
            <div>
                <p className="baby-title">宝宝#{this.props.babyId}</p>
                <div className="key-value">
                    <span className="key">姓名</span>
                    <span className="value" style={{display: labelState}}>{this.state.name}</span>
                    <input
                        type="text" className="form-inline value" ref="inputName"
                        defaultValue={this.state.name} style={{display: inputState}}/>
                    <span ref="tipName" className="error-tip">姓名不能为空</span>
                </div>
                <div className="key-value">
                    <span className="key">性别</span>
                    <span className="value" style={{display: labelState}}>{this.state.gender}</span>
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
                <div className="key-value">
                    <span className="key">出生日期</span>
                    <span className="value" style={{display: labelState}}>{this.state.birthday}</span>
                    <DatePicker
                        style={{width: '300px', display: inputState}}
                        defaultValue={moment(this.state.birthday)}
                        onChange={(date, dateString) => {
                            this.refs.inputBirthday.innerText = dateString;
                        }}/>
                    <span style={{display: 'none'}} ref="inputBirthday">{this.state.birthday}</span>
                    <span ref="tip" className="error-tip">出生日期不能为空</span>
                </div>
                <div className="key-value">
                    <span className="key">体检报告</span>
                    <span className="value">
                        <div className="pe-report-container">
                            {pes}
                        </div>
                    </span>
                </div>
                <div>
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
                <hr style={{marginBottom: '36px', marginTop: '36px'}}/>
            </div>
        )
    }

    edit() {
        this.setState({
            state: 'edit'
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
                }
            />
        )
    }

    save() {

    }
}