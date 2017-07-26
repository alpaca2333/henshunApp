/**
 * Created by alpaca on 17-7-15.
 */
import * as React from 'react';
import {Table, Input, Row, Col} from 'antd';
import {GroupInfoPanel} from './group-info-panel';
import {GroupCreationPanel} from './group-creation-panel';
export class GroupBuyingInfoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = GroupBuyingInfoPanel.initialState;
    }

    static initialState = {
        id: 1,
        name: '香醋拼团7折大甩卖',
        minNum: 7,
        maxNum: 200,
        time: '2015-01-01 00:00:00',
        product: {
            id: 1,
            name: '香醋',
            initialPrice: 120,  // 原始价格
            price: 80           // 拼团价格
        },
        groups: [
            {
                id: 1,
                members: [
                    {
                        id: 1,
                        name: '123',
                        phoneNumber: '15651656873',
                        isVip: true
                    },
                    {
                        id: 0,
                        name: '王女士',
                        phoneNumber: '13333333333',
                        isVip: false
                    }
                ],
                header: {
                    id: 1,
                    name: '王女士'
                },
                createAt: '2015-01-01 11:11:11'
            },
            {
                id: 2,
                members: [
                    {
                        id: 1,
                        name: '123',
                        phoneNumber: '15651656873',
                        isVip: true
                    },
                    {
                        id: 0,
                        name: '王女士',
                        phoneNumber: '13333333333',
                        isVip: false
                    }
                ],
                header: {
                    id: 1,
                    name: '王女士'
                },
                createAt: '2015-01-01 11:11:11'
            }
        ]
    };

    render() {
        const columns = [
            {
                title: '编号',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '团长',
                key: 'header',
                dataIndex: 'header',
                render: (element) => (element.name)
            },
            {
                title: '当前人数',
                key: 'peopleNum',
                render: (e, row) => (
                    row.members.length
                )
            },
            {
                title: '创建时间',
                key: 'createAt',
                dataIndex: 'createAt'
            },
            {
                title: '操作',
                render: (txt, row) => (
                    <button
                        className="btn btn-link"
                        onClick={() => {
                            row.members.splice(0, 0, {
                                name: '',
                                phoneNumber: '',
                                isVip: false,
                                editing: true
                            });
                            this.forceUpdate();
                        }}
                    >添加成员</button>
                )
            }
        ];
        this.state.groups = this.state.groups.map((element, index, array) => {
            element.key = index;
            return element;
        });
        return (
            <div className="display-panel">
                <div className="display-title">
                    拼团活动 - {this.state.name}
                </div>
                <Row>
                    <Col span={8}>
                        <div className="key-value">
                            <span className="key">起拼人数</span>
                            <span className="value">{this.state.minNum}</span>
                        </div>
                        <div className="key-value">
                            <span className="key">人数上限</span>
                            <span className="value">{this.state.maxNum}</span>
                        </div>
                        <div className="key-value">
                            <span className="key">产品</span>
                            <span className="value">{this.state.product.name}</span>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="key-value">
                            <span className="key">原价</span>
                            <span className="value"><s>￥{this.state.product.initialPrice}</s></span>
                        </div>
                        <div className="key-value">
                            <span className="key">拼团价</span>
                            <span className="value" style={{color: '#d3514d'}}>￥{this.state.product.price}</span>
                        </div>
                        <div className="key-value">
                            <span className="key">开团时间</span>
                            <span className="value" style={{color: '#d3514d'}}>{this.state.time}</span>
                        </div>
                    </Col>
                </Row>
                <div className="display-title">
                    当前拼单
                </div>
                <Table
                    className="components-table-demo-nested"
                    columns={columns}
                    dataSource={this.state.groups}
                    expandedRowRender={
                        (data) => {
                            return <GroupInfoPanel members={data.members}/>;
                        }
                    }
                />
                <button className="btn btn-primary"
                    onClick={window.showDialog.bind(this, '新建拼单', <GroupCreationPanel/>)}
                >新建拼单</button>
            </div>
        )
    }


}