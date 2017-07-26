/**
 * Created by alpaca on 17-7-17.
 */
import * as React from 'react';
import {addKeyToArray, filter, showAndHide} from '../lib/common';
import {Select} from 'antd';
const Option = Select.Option;

export class GroupCreationPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = GroupCreationPanel.initialState;
    }

    static initialState = {
        // 使用网络进行更新用户列表时，应该同时更新customers和allCustomers
        // 筛选数据时更新customers
        customers: [
            {
                id: 1,
                register: '2015-01-01',
                name: '王女士',
                phoneNumber: '15644448888'
            },
            {
                id: 2,
                register: '2015-01-01',
                name: '张女士',
                phoneNumber: '13345678909'
            },
            {
                id: 3,
                register: '2015-01-01',
                name: '王女士',
                phoneNumber: '15644448888'
            },
            {
                id: 4,
                register: '2015-01-01',
                name: '王女士',
                phoneNumber: '16666666666'
            },
            {
                id: 5,
                register: '2015-01-01',
                name: '王女士',
                phoneNumber: '13455668877'
            },
        ],
        filter: (element) => (true),
        selectedId: null
    };

    render() {
        addKeyToArray(this.state.customers);
        this.state.customers = filter(this.state.customers, this.state.filter);

        const options = [];
        for (let i in this.state.customers) {
            const customer = this.state.customers[i];
            options.push(
                <Option value={customer.id + ''} key={i}>{customer.name + ' - ' + customer.phoneNumber}</Option>
            )
        }

        return (
            <div>
                <div className="key-value">
                    <span className="key-small">创建人</span>
                    <span className="value">
                        <Select
                            showSearch
                            style={{width: '300px'}}
                            placeholder="姓名/电话"
                            filterOption={
                                (input, option) => {
                                    const inputs = input.split(' ');
                                    let result = true;
                                    for (let qs of inputs) {
                                        if (option.props.children.toLowerCase().indexOf(qs.toLowerCase()) < 0) {
                                            result = false;
                                        }
                                    }
                                    return result;
                                }
                            }
                            onChange={
                                (value) => {
                                    this.state.selectedId = value;
                                }
                            }
                        >
                            {options}
                        </Select>
                        <p ref="errorTip" className="error-tip" style={{marginLeft: '80px', marginTop: '6px'}}>必须选择一个创建人</p>
                    </span>
                </div>
                <div className="dialog-footer">
                    <button 
                        className="btn btn-primary"
                        onClick={() => {
                            if (!this.state.selectedId) {
                                showAndHide(this.refs.errorTip, "block");
                                return;
                            }
                            window.closeDialog();   
                        }}
                    >
                        确定
                    </button>
                    <button 
                        className="btn btn-default" style={{marginLeft: '36px'}}
                        onClick={() => {
                            window.closeDialog();   
                        }}
                    >
                        取消
                    </button>
                </div>
            </div>
        );
    }
}
