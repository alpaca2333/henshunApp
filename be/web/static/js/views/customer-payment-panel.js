/**
 * Created by alpaca on 17-6-25.
 */
import * as React from 'react';
import {Table} from 'antd';

export class CustomerPaymentPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = CustomerPaymentPanel.initialState;
    }

    static defaultProps = {
        customer: 1
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
                        <button className="btn btn-link">查看</button>
                        <button className="btn btn-link">编辑</button>
                        <button className="btn btn-link">删除</button>
                    </div>
                )
            }
        ];
        return (
            <div>
                <div className="display-title">消费情况</div>
                <Table columns={columns} dataSource={this.state.orders}/>
            </div>
        )
    }
}