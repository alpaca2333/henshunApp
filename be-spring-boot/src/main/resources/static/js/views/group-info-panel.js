/**
 * Created by alpaca on 17-7-16.
 */
import * as React from 'react';
import {Table} from 'antd';
import {Input} from 'antd';

export class GroupInfoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.members = this.props.members;
    }

    static initialState = {
        members: [
            {
                id: 1,
                name: '王女士',
                phoneNumber: '15555555555',
                isVip: true,
                editing: false
            },
            {
                id: null,
                name: '张先生',
                phoneNumber: '15656565656',
                isVip: false,
                editing: false
            },
            {
                id: 123,
                name: '孙女士',
                phoneNumber: '13346456831',
                isVip: true,
                editing: false
            }
        ]
    };

    render() {
        const columns = [
            {
                title: '姓名',
                key: 'name',
                dataIndex: 'name',
                render: (element, row) => {
                    const result = row.editing ? (
                        <Input defaultValue={element} onChange={(e) => {
                            row.name = e.target.value;
                        }}/>
                    ) : (
                        element
                    );
                    return result;
                },
                width: '40%'
            },
            {
                title: '手机号',
                key: 'phoneNumber',
                dataIndex: 'phoneNumber',
                render: (element, row) => {
                    const result = row.editing ? (
                        <Input defaultValue={element} onChange={(e) => {
                            row.phoneNumber = e.target.value;
                        }}/>
                    ) : (
                        element
                    );
                    return result;
                },
                width: '40%'
            },
            {
                title: '操作',
                render: (element, row) => {
                    const result = row.editing ? (
                        <div>
                            <button
                                className="btn btn-link"
                                onClick={() => {
                                    row.editing = false;
                                    this.forceUpdate();
                                }}
                            >保存</button>
                        </div>
                    ) : (
                        <div>
                            <button
                                className="btn btn-link"
                                onClick={() => {
                                    row.editing = true;
                                    this.forceUpdate();
                                }}
                            >编辑</button>
                            <button className="btn btn-link"
                                    onClick={() => {
                                        this.state.members.splice(row.key, 1);
                                        this.forceUpdate();
                                    }}
                            >删除</button>
                        </div>
                    );
                    return result;
                },
                width: '20%'
            }
        ];

        for (let i in this.state.members) {
            this.state.members[i].key = i;
        }

        return (
            <Table columns={columns}
                   dataSource={this.state.members}
                   size="small"
            />
        )
    }
}