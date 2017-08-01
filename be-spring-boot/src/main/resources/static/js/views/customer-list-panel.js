import * as React from 'react';
import request from 'superagent';
import {Table} from 'antd';
import {YesNoDialog} from './yes-no-dialog';
import {addKeyToArray, showAndHide} from "../lib/common";
export class CustomerListPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = CustomerListPanel.initialState;
    }

    static defaultProps = {
        url: '/api/my/customers'
    };

    static initialState = {
        // 使用网络进行更新用户列表时，应该同时更新customers和allCustomers
        // 筛选数据时更新customers
        customers: [
            {
                id: 1,
                register: '2015-01-01',
                name: '王女士',
                phoneNumber: '15644448888',
                isVip: true
            },
            {
                id: 2,
                register: '2015-01-01',
                name: 'sun女士',
                phoneNumber: '15156165165',
                isVip: false
            }
        ],
        filter: (element) => (true)
    };

    render() {
        const c = [];

        const results = [];
        for (let customer of this.state.customers) {
            if (this.state.filter(customer)) {
                results.push(customer);
            }
        }

        let lastValue = '';

        const columns = [
            {
                title: '编号',
                dataIndex: 'id',
                key: 'id',
                width: '10%'
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                width: '20%'
            },
            {
                title: '注册时间',
                dataIndex: 'register',
                key: 'register',
                width: '20%'
            },
            {
                title: '电话',
                dataIndex: 'phoneNumber',
                key: 'phoneNumber',
                width: '20%'
            },
            {
                title: '是否VIP',
                dataIndex: 'isVip',
                key: 'isVip',
                render: (e) => (
                    e == true ? '是' : '否'
                ),
                width: '10%'
            },
            {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                render: (e, row) => (
                    <div>
                        <button className="btn btn-link" onClick={() => {
                            window.components.consoleFrame.updated = window.renderCustomerInfoPanel;
                            window.components.consoleFrame.pushBackOperation(
                                '所有顾客',
                                window.renderCustomerListPanel
                            );
                        }}>查看</button>
                        <button className="btn btn-link" onClick={() => {
                            window.components.consoleFrame.updated = () => {
                                window.renderCustomerInfoPanel();
                                window.components.customerInfoPanel.refs.personalPanel.setState({
                                    state: 'edit'
                                });
                            };
                            window.components.consoleFrame.pushBackOperation(
                                '所有顾客',
                                window.renderCustomerListPanel
                            );
                        }}>编辑</button>
                        {row.isVip ? '' : <button 
                            className="btn btn-link"
                            onClick={
                                () => {
                                    window.showDialog('升级为Vip', 
                                        <YesNoDialog content="确定要将这个用户升级为vip吗？"
                                            yesOption={() => {
                                                row.isVip = true;
                                                this.forceUpdate();
                                                window.closeDialog();
                                        }}/>
                                    )
                                }
                            }
                        >升级为Vip</button>}
                    </div>
                ),
                width: '20%'
            }
        ];

        addKeyToArray(this.state.customers);

        return (
            <div className="display-panel">
                <div className="display-title">我的顾客</div>
                <div className="input-group input-group-sm" id="search-group">
                    <span className="input-group-btn">
                        <button className="btn btn-primary"><span className=" glyphicon glyphicon-search"/> </button>
                    </span>
                    <input
                        type="text" className="form-control form-inline" ref="inputSearch" placeholder="姓名/用户名/手机号/编号"
                        onKeyUp={() => {
                            const query = this.refs.inputSearch.value;
                            const qs = query.split(" ");
                            this.setState({
                                filter: (element) => {
                                    for (let q of qs) {
                                        let match = false;
                                        for (let field in element) {
                                            if ((element[field] + '').indexOf(q) > -1) {
                                                match = true;
                                                break;
                                            }
                                        }
                                        if (!match) return false;
                                    }
                                    return true;
                                }
                            });
                        }}
                    />
                </div>
                <Table columns={columns} style={{textAlign: 'center'}} dataSource={results}/>
                <button className="btn btn-primary"
                        onClick={() => {
                            window.showDialog('添加顾客',
                                <div>
                                    <div className="key-value">
                                        <span className="key-small">姓名</span>
                                        <input type="text" className="form-inline" id="inputName"/>
                                        <span id="tipName" className="error-tip">用户名不能为空</span>
                                    </div>
                                    <div className="key-value">
                                        <span className="key-small required-field">手机号</span>
                                        <input type="text" className="form-inline" id="inputPhoneNumber"/>
                                        <br/>
                                        <span className="error-tip" id="phoneNumberTip" style={{marginLeft: 80, marginTop: 6}}>手机号不能为空</span>
                                    </div>
                                    <div className="dialog-footer">
                                        <button className="btn btn-primary" onClick={() => {
                                            if (!document.getElementById('inputPhoneNumber').value.trim()) {
                                                showAndHide(document.getElementById('phoneNumberTip'), 'inline-block');
                                            } else {
                                                window.closeDialog();
                                            }
                                        }}>确定</button>
                                        <button className="btn btn-default" style={{marginLeft: '24px'}} onClick={window.closeDialog}>取消</button>
                                    </div>
                                </div>
                            )
                        }}
                >添加顾客</button>
            </div>
        )
    }
}