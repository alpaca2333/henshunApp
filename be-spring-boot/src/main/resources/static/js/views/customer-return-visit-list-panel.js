import * as React from 'react';
import {Table} from 'antd';
export class CustomerReturnVisitListPanel extends React.Component {
        constructor(props) {
        super(props);
        this.state = CustomerReturnVisitListPanel.initialState;
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
                name: '喵？',
                phoneNumber: '15644448888',
                lastReturnVisit: '2017-01-01'
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

        return (
            <div className="display-panel">
                <div className="display-title">所有顾客</div>
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
                <Table columns={CustomerReturnVisitListPanel.columns} style={{textAlign: 'center'}} dataSource={results}/>
            </div>
        )
    }

    static columns = [
        {
            title: '编号',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '注册时间',
            dataIndex: 'register',
            key: 'register'
        },
        {
            title: '电话',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber'
        },
        {
            title: '最近回访',
            dataIndex: 'lastReturnVisit',
            key: 'lastReturnVisit'
        },
        {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <div>
                    <button className="btn btn-link" onClick={() => {
                        window.components.consoleFrame.updated = window.renderCustomerInfoPanel.bind(this, true);
                        window.components.consoleFrame.pushBackOperation(
                            '所有顾客',
                            window.renderCustomerReturnVisitListPanel
                        );
                    }}>查看</button>
                    <button className="btn btn-link" onClick={() => {
                        window.components.consoleFrame.updated = () => {
                            window.renderCustomerInfoPanel(true);
                            window.components.customerInfoPanel.refs.personalPanel.setState({
                                state: 'edit'
                            });
                        };
                        window.components.consoleFrame.pushBackOperation(
                            '所有顾客',
                            window.renderCustomerReturnVisitListPanel
                        );
                    }}>编辑</button>
                </div>
            )
        }
    ];
}