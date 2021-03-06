/**
 * Created by alpaca on 17-6-25.
 */
import * as React from 'react';
import {Table} from 'antd';
import {addKeyToArray} from "../lib/common";
import {apis, showConnectionFailedMessage} from '../lib/common';
import {message} from 'antd';
import request from 'superagent';

export class CustomerPaymentPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = CustomerPaymentPanel.initialState;
        this.update = this.update.bind(this);
    }

    static defaultProps = {
        customerId: 1
    };

    static initialState = {
        orders: [
            {
                id: 1,
                time: '2015-01-01 11:11:11',
                sum: 630.5,
                products: [
                    {
                        id: 1,
                        name: '老坛酸菜牛肉面',
                        amount: 3,
                        price: 5.5
                    },
                    {
                        id: 1,
                        name: '猪大肠',
                        amount: 3100,
                        price: 5.5
                    },
                    {
                        id: 1,
                        name: '嘿嘿嘿',
                        amount: 3,
                        price: 5.5
                    },
                    {
                        id: 1,
                        name: '嘿嘿嘿',
                        amount: 3,
                        price: 5.5
                    },
                    {
                        id: 1,
                        name: '嘿嘿嘿',
                        amount: 3,
                        price: 5.5
                    }
                ]
            }
        ]
    };

    render() {
        const columns = [
            {
                title: '编号',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '时间',
                dataIndex: 'time',
                key: 'time'
            },
            {
                title: '产品',
                dataIndex: 'products',
                key: 'products',
                render: (elements) => {
                    let result = '';
                    for (let i in elements) {
                        const element = elements[i];
                        if (i > 0) result += ', ';
                        if (i > 2) {
                            result += '...';
                            break;
                        }
                        result += element.name + '×' + element.amount;
                    }
                    return <span style={{color: 'rgba(0, 0, 0, 0.4)'}}>{result}</span>;
                }
            },
            {
                title: '总价',
                dataIndex: 'sum',
                key: 'sum',
                render: (price) => (<span style={{color: '#4271ff'}}>{price}</span>)
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: () => (
                    <div>
                        <button
                            className="btn btn-link"
                            onClick={() => {
                                window.components.consoleFrame.updated = () => {
                                    window.renderPaymentDetailPanel();
                                };
                                window.components.consoleFrame.pushBackOperation(
                                    '消费列表',
                                    window.renderCustomerInfoPanel
                                )
                            }}
                        >查看</button>
                        <button className="btn btn-link">编辑</button>
                        <button className="btn btn-link">删除</button>
                    </div>
                )
            }
        ];

        addKeyToArray(this.state.orders);
        return (
            <div>
                <div className="display-title">消费情况</div>
                <Table columns={columns} dataSource={this.state.orders}/>
            </div>
        )
    }

    update() {
        request.get(apis.getCustomerPayments(this.props.customerId)).end((err, resp) => {
            if (err) {
                showConnectionFailedMessage();
                this.setState({
                    orders: []
                });
                return;
            }
            if (resp.error) {
                message.warning(resp.error.status + ' ' + resp.error.message);
                this.setState({
                    orders: []
                });
                return;
            }
            const result = resp.body;
            if (result.error) {
                message.warning(result.error +  ' ' + result.message);
                this.setState({
                    orders: []
                });
                return;
            }
            this.setState({
                orders: result.data
            })
        });
    }
}