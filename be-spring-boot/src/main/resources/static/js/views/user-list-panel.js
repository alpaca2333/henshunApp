/**
 * Created by alpaca on 17-6-21.
 */
import * as React from 'react';
import {YesNoDialog} from "./yes-no-dialog";
import request from 'superagent';
import {apis, filter, showNetworkErrorMessage} from '../lib/common';
import {Table} from 'antd';


export class UserListPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = UserListPanel.getInitialState();
        this.delete = this.delete.bind(this);
    }

    static defaultProps = {
        url: '/api/users'
    };

    static getInitialState() {
        // allUsers保存的时所有实际数据，users是当前显示的数据。
        // 执行搜索或者分页操作时，应该更新users。执行网络请求获取所有用户数据时，应该同时更新
        // users和allUsers。
        return {
            users: [
                {
                    id: 1,
                    name: '马迹噶',
                    username: 'majiga2333',
                    type: 'admin', // admin / storeOwner / clerk
                }
            ],
            filter: (e) => true
        }
    };


    static getTypeString(type) {
        if (type === 'admin') return '系统管理员';
        if (type === 'storeOwner') return '店主';
        if (type === 'clerk') return '职员';
    }

    static getTypeToken(type) {
        if (type === '系统管理员') return 'admin';
        if (type === '店主') return 'storeOwner';
        if (type === '职员') return 'clerk';
    }

    render() {
        const columns = [
            {
                title: '#',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '用户名',
                dataIndex: 'username',
                key: 'username'
            },
            {
                title: '账户类型',
                dataIndex: 'type',
                key: 'type',
                render: (e) => UserListPanel.getTypeString(e)
            },
            {
                title: '操作',
                key: 'operation',
                render: (e, row) => (
                    <div>
                        <button className="btn btn-link" onClick={
                            () => {
                                window.components.consoleFrame.pushBackOperation(
                                    '用户列表',
                                    () => {
                                        window.renderUserListPanel();
                                    }
                                );
                                window.renderAdminUserInfoPanel();
                            }
                        }>查看</button>
                        <button className="btn btn-link" onClick={() => {
                            window.components.consoleFrame.pushBackOperation(
                                '用户列表',
                                () => {
                                    window.renderUserListPanel();
                                }
                            );
                            window.renderAdminUserInfoPanel();
                            window.components.userInfoPanel.setState({
                                state: 'edit'
                            });
                        }}>编辑</button>
                        <button className="btn btn-link" onClick={this.delete}>删除</button>
                    </div>
                )
            },
        ];


        return (
            <div className="display-panel">
                <div className="display-title">所有用户</div>
                <div className="input-group input-group-sm" id="search-group">
                    <span className="input-group-btn">
                        <button className="btn btn-primary"><span className=" glyphicon glyphicon-search"/> </button>
                    </span>
                    <input type="text" ref="searchText" className="form-control form-inline" placeholder="姓名/用户名/编号" onChange={() => {
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
                    }}/>
                </div>
                <Table columns={columns} dataSource={filter(this.state.users, this.state.filter)}/>
            </div>
        )
    }

    delete(id) {
        window.showDialog(
            "删除",
            <YesNoDialog
                content="确定要删除这个用户吗？"
                yesOption={() => {
                    request.delete(apis.deleteUser(id)).end((err, resp) => {
                        const result = resp.body;
                        if (err) {
                            showNetworkErrorMessage();
                            window.closeDialog();
                            return;
                        }
                        if (result.error) {
                            message.waring('发生了错误：' + result.message);
                        } else {
                            message.success('删除成功！');
                        }
                        this.update();
                        window.closeDialog();
                    })
                }}
            />
        )
    }

    componentDidMount() {
        this.update();
    }

    update() {
        request.get(apis.getUsers).end((err, resp) => {
            if (err) {
                showConnectionFailedMessage();
                return;
            }
            if (resp.error) {
                message.warning(resp.error.status + ' ' + resp.error.message);
                return;
            }
            const result = resp.body;
            if (result.error) {
                message.warning(result.message);
                return;
            }
            this.setState(result.data);
        })
    }
}