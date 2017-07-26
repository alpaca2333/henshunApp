/**
 * Created by alpaca on 17-7-19.
 */
import * as React from 'react';
import {Table} from 'antd';
import {addKeyToArray, filter} from '../lib/common';

export class StoreOwnerListPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = StoreOwnerListPanel.initialState;
    }

    static initialState = {
        storeOwners: [
            {
                id: 1,
                name: '王慧',
                username: 'wanghui123',
                location: '南京市鼓楼区广州路23号',
                phoneNumber: '15651656873'
            },
            {
                id: 2,
                name: '孙旭',
                username: 'sx666',
                location: '南京市鼓楼区',
                phoneNumber: '15651656873'
            },
            {
                id: 3,
                name: '张振宁',
                username: 'hanghangji123',
                location: '南京市栖霞区',
                phoneNumber: '15651656873'
            },
        ],
        filter: (element) => (true)
    };

    render() {
        const columns = [
            {
                title: '#',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '姓名',
                key: 'name',
                dataIndex: 'name'
            },
            {
                title: '用户名',
                key: 'username',
                dataIndex: 'username'
            },
            {
                title: '门店地点',
                key: 'location',
                dataIndex: 'location'
            },
            {
                title: '手机号',
                key: 'phoneNumber',
                dataIndex: 'phoneNumber'
            },
            {
                title: '操作',
                key: 'operation',
                render: () => (
                    <div>
                        <button className="btn btn-link">删除</button>
                    </div>
                )
            }
        ];
        addKeyToArray(this.state.storeOwners);
        const result = filter(this.state.storeOwners, this.state.filter);
        return (
            <div className="display-panel">
                <div className="display-title">
                    所有客户
                </div>
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
                <Table columns={columns} dataSource={result}/>
            </div>
        );
    }
}