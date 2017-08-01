/**
 * Created by alpaca on 17-7-15.
 */
import * as React from 'react';
import {Table, Tabs} from 'antd';
import {filter} from '../lib/common';

const TabPane = Tabs.TabPane;
export class GroupBuyingListPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = GroupBuyingListPanel.initialState;
    }

    static initialState = {
        buyings: [
            {
                id: 1,
                name: '香醋拼团7折大甩卖',
                minNum:8,
                header: '王女士',
                time: '2015-01-01 18:00:00'
            }
        ],
        fundings: [
            {
                id: 1,
                product: {
                    id: 1,
                    name: '恒顺香醋众筹',
                },
                targetNum: 10,
                time: '2015-01-01 16:00:00',
                currentNum: 9,
                discount: {
                    reason: '七折抢购',
                    type: 'dazhe', // 打折还是减免
                    discount: 0.7
                }
            }
        ],
        buyingsFilter: (element) => (true),
        fundingsFilter: (element) => (true)
    };

    render() {
        return (
            <div className="display-panel">
                <Tabs defaultActivityKey="1">
                    <TabPane tab="拼团" key="1">
                        <div className="display-title">所有拼团</div>
                        <div className="input-group input-group-sm search-group">
                            <span className="input-group-btn">
                                <button className="btn btn-primary"><span className=" glyphicon glyphicon-search"/> </button>
                            </span>
                            <input
                                type="text" className="form-control form-inline" ref="inputSearch" placeholder="名称/编号"
                                onKeyUp={() => {
                                    const query = this.refs.inputSearch.value;
                                    const qs = query.split(" ");
                                    this.setState({
                                        buyingsFilter: (element) => {
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
                        <Table columns={GroupBuyingListPanel.groupBuyingColumns} style={{textAlign: 'center'}} dataSource={filter(this.state.buyings, this.state.buyingsFilter)}/>
                    </TabPane>
                    <TabPane tab="众筹" key="2">
                        <div className="display-title">所有众筹</div>
                        <div className="input-group input-group-sm search-group">
                            <span className="input-group-btn">
                                <button className="btn btn-primary"><span className=" glyphicon glyphicon-search"/> </button>
                            </span>
                            <input
                                type="text" className="form-control form-inline" ref="inputSearch" placeholder="名称/编号/团长姓名"
                                onKeyUp={() => {
                                    const query = this.refs.inputSearch.value;
                                    const qs = query.split(" ");
                                    this.setState({
                                        fundingsFilter: (element) => {
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
                        <Table columns={GroupBuyingListPanel.crowdFundingColumns} style={{textAlign: 'center'}} dataSource={filter(this.state.fundings, this.state.fundingsFilter)}/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }

    static groupBuyingColumns = [
        {
            title: '编号',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '活动名称',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '起拼人数',
            dataIndex: 'minNum',
            key: 'minNum'
        },
        {
            title: '团长',
            dataIndex: 'header',
            key: 'header'
        },
        {
            title: '结束时间',
            dataIndex: 'time'
        },
        {
            title: '操作',
            render: () => {
                return (
                    <div>
                        <button className="btn btn-link" onClick={() => {
                            window.components.consoleFrame.updated = window.renderGroupBuyingInfoPanel;
                            window.components.consoleFrame.pushBackOperation(
                                '所有拼团',
                                window.renderGroupBuyingPanel
                            );
                        }}>查看</button>
                    </div>
                )
            }
        }
    ];

    static crowdFundingColumns = [
        {
            title: '编号',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '众筹产品',
            key: 'product',
            render: (e, row) => {
                return row.product.name;
            }
        },
        {
            title: '目标人数',
            dataIndex: 'targetNum',
            key: 'targetNum'
        },
        {
            title: '目前已参与人数',
            dataIndex: 'currentNum',
            key: 'currentNum'
        },
        {
            title: '结束时间',
            dataIndex: 'time'
        },
        {
            title: '操作',
            render: (e, row) => {
                return (
                    <div>
                        <button className="btn btn-link" onClick={() => {
                            window.components.consoleFrame.updated =
                                window.renderCrowdFundingInfoPanel.bind(this, row.id);
                            window.components.consoleFrame.pushBackOperation(
                                '所有众筹',
                                window.renderGroupBuyingPanel
                            );
                        }}>查看</button>
                    </div>
                )
            }
        }
    ];
}