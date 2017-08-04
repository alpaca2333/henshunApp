/**
 * Created by alpaca on 2017/6/25.
 */
import * as React from 'react';
import {DatePicker, Select, Table, InputNumber, message} from 'antd';
const Option = Select.Option;
import {YesNoDialog} from "./yes-no-dialog";
import {PeEditDialog} from "./pe-edit-dialog";
import {addKeyToArray, apis, showConnectionFailedMessage} from '../lib/common';
import request from '../lib/common';
import moment from 'moment';

export class BabyInfoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = BabyInfoPanel.initialState;
        this.edit = this.edit.bind(this);
        this.cancel = this.cancel.bind(this);
        this.update = this.update.bind(this);
        this.save = this.save.bind(this);
    }

    static defaultProps = {
        babyId: 1
    };

    static initialState = {
        baby: {
            id: 1,
            name: '小马迹噶',
            birthday: '2017-01-01',
            gender: '女',
            pe: [
                {
                    id: 1,
                    time: '2017-01-02',
                    items: [
                        {
                            title: '身高',
                            value: 150,
                            suggestValue: null
                        },
                        {
                            title: '体重',
                            value: 81,
                            suggestValue: null
                        },
                        {
                            title: '血钙',
                            value: 140,
                            suggestValue: [
                                135, 150
                            ]
                        },
                        {
                            title: '锌', 
                            value: 81,
                            suggestValue: [
                                15, 30
                            ]
                        }
                    ],
                    editing: false
                },
                {
                    id: 2,
                    time: '2017-01-02',
                    items: [
                        {
                            title: '身高',
                            value: 150,
                            suggestValue: null
                        },
                        {
                            title: '体重',
                            value: 81,
                            suggestValue: null
                        },
                        {
                            title: '血钙',
                            value: 140,
                            suggestValue: [
                                135, 150
                            ]
                        },
                        {
                            title: '锌',
                            value: 81,
                            suggestValue: [
                                15, 30
                            ]
                        }
                    ],
                    editing: false
                },
            ]
        },
        state: 'display'    // display / edit
    };

    render() {
        const pes = [];
        const labelState = this.state.state === 'display' ? 'inline' : 'none';
        const inputState = this.state.state === 'edit' ? 'inline-block' : 'none';

        const peListColumns = [
            {
                title: '#',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '创建时间',
                key: 'time',
                dataIndex: 'time'
            },
            {
                title: '操作',
                key: 'operation',
                render: (element, row) => (
                    <div>
                        {
                            row.editing ? <button className="btn btn-link" onClick={() => {
                                    row.editing = false;
                                    this.forceUpdate();
                                }}>保存</button> : <button 
                                className="btn btn-link" onClick={() => {
                                    row.editing = true;
                                    this.forceUpdate();
                                }}
                            >编辑</button>
                        }
                        <button className="btn btn-link">删除</button>
                    </div>
                )
            },
        ];

        const peColumns = [
            {
                title: '项目',
                key: 'title',
                dataIndex: 'title',
                width: '33%'
            },
            {
                title: '实测值',
                key: 'value',
                dataIndex: 'value',
                render: (element, row) => {
                    let indicator = '';
                    if (row.suggestValue) {
                        if (row.value < row.suggestValue[0]) indicator = '↓';
                        if (row.value > row.suggestValue[1]) indicator = '↑';
                    }
                    return (
                        row.editing ? <InputNumber defaultValue={row.value} onChange={(e) => {
                            row.value=e;
                        }}/> : row.value + indicator
                    )
                },
                width: '33%'
            },
            {
                title: '建议值',
                key: 'suggestValue',
                dataIndex: 'suggestValue',
                render: (element, row) => (element ? element[0] + '~' + element[1] : '--'),
                width: '33%'
            },
        ];

        addKeyToArray(this.state.baby.pe);

        return (
            <div>
                <p className="baby-title">宝宝#{this.props.babyId}</p>
                <div className="key-value">
                    <span className="key">姓名</span>
                    <span className="value" style={{display: labelState}}>{this.state.baby.name}</span>
                    <input
                        type="text" className="form-inline value" ref="inputName"
                        defaultValue={this.state.name} style={{display: inputState}}/>
                    <span ref="tipName" className="error-tip">姓名不能为空</span>
                </div>
                <div className="key-value">
                    <span className="key">性别</span>
                    <span className="value" style={{display: labelState}}>{this.state.baby.gender}</span>
                    <div style={{display: inputState}} ref="typeSelect">
                        <Select
                            className="value"
                            defaultValue={this.state.baby.gender} style={{ width: '300px'}}
                            onChange={(val) => {
                                this.refs.inputGender.innerText = val;
                            }}
                        >
                            <Option value="male">男</Option>
                            <Option value="female">女</Option>
                        </Select>
                    </div>
                    <span style={{display: 'none'}} ref="inputGender">{this.state.baby.gender}</span>
                </div>
                <div className="key-value">
                    <span className="key">出生日期</span>
                    <span className="value" style={{display: labelState}}>{this.state.baby.birthday}</span>
                    <DatePicker
                        style={{width: '300px', display: inputState}}
                        defaultValue={moment(this.state.baby.birthday)}
                        onChange={(date, dateString) => {
                            this.refs.inputBirthday.innerText = dateString;
                        }}/>
                    <span style={{display: 'none'}} ref="inputBirthday">{this.state.baby.birthday}</span>
                    <span ref="tip" className="error-tip">出生日期不能为空</span>
                </div>
                <div className="key-value">
                    <span className="key">体检报告</span>
                    <span className="value">
                        <div className="pe-report-container">
                            <Table
                                columns={peListColumns}
                                dataSource={this.state.baby.pe}
                                size="small"
                                expandedRowRender={
                                    (row) => {
                                        for (let item of row.items) {
                                            item.editing = row.editing;
                                        }
                                        addKeyToArray(row.items);
                                        return <Table columns={peColumns} size="small" dataSource={row.items}/>
                                    }
                                }
                            />
                            <button className="btn btn-link" onClick={() => {
                                this.state.baby.pe.splice(0, 0, {
                                    id: '*',
                                    time: new Date().format('yyyy-MM-dd'),
                                    items: [],
                                    editing: false
                                });
                                this.forceUpdate();
                            }}>新建报告</button>
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

    save() {
        this.state.baby.birthday = this.refs.inputBirthday.innerHTML;
        this.state.baby.gender = this.refs.inputGender.innerHTML;
        this.state.baby.name = this.refs.inputName.value;
        request.put(apis.updateBaby(this.props.babyId)).send({
            name: this.state.baby.name,
            birthday: this.state.baby.birthday,
            gender: this.state.baby.gender
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
            message.success('修改成功');
            this.state.state = 'display';
            this.update();
        })
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

    componentDidMount() {
        this.update();
    }

    update() {
        request.get(apis.getBaby(this.props.babyId)).end((err, resp) => {
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
            this.setState({
                baby: result.data
            });
        })
    }
}