/**
 * Created by alpaca on 17-7-15.
 */
import * as React from 'react';
import {Table} from 'antd';
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
        filter: (element) => (true)
    };

    render() {
        const result = [];
        for (let buying of this.state.buyings) {
            if (this.state.filter(buying)) {
                result.push(buying);
            }
        }
        return (
            <div className="display-panel">
                <div className="display-title">所有拼团</div>
                <div className="input-group input-group-sm" id="search-group">
                    <span className="input-group-btn">
                        <button className="btn btn-primary"><span className=" glyphicon glyphicon-search"/> </button>
                    </span>
                    <input
                        type="text" className="form-control form-inline" ref="inputSearch" placeholder="&……%&×%"
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
                <Table columns={GroupBuyingListPanel.columns} style={{textAlign: 'center'}} dataSource={result}/>
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
}