/**
 * Created by alpaca on 17-6-21.
 */
import * as React from 'react';
import {YesNoDialog} from "./yes-no-dialog";

export class UserListPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = UserListPanel.getInitialState();
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
            allUsers: [
                {
                    id: 1,
                    name: '马迹噶',
                    username: 'majiga2333',
                    type: 'admin', // admin / storeOwner / clerk
                }
            ]
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
        const u = [];
        for (let i in this.state.users) {
            const user = this.state.users[i];
            u.push(
                <tr key={'user' + i}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{UserListPanel.getTypeString(user.type)}</td>
                    <td>
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
                    </td>
                </tr>
            );
        }

        return (
            <div className="display-panel">
                <div className="display-title">所有用户</div>
                <div className="input-group input-group-sm" id="search-group">
                    <span className="input-group-btn">
                        <button className="btn btn-primary"><span className=" glyphicon glyphicon-search"/> </button>
                    </span>
                    <input type="text" ref="searchText" className="form-control form-inline" placeholder="姓名/用户名/编号"/>
                </div>
                <table className="table" id="data-table">
                    <thead>
                    <tr className="table-head">
                        <td style={{width: '10%'}}>编号</td>
                        <td style={{width: '10%'}}>用户名</td>
                        <td style={{width: '10%'}}>姓名</td>
                        <td style={{width: '10%'}}>身份</td>
                        <td style={{width: '15%'}}>操作</td>
                    </tr>
                    </thead>
                    <tbody>
                    {u}
                    </tbody>
                </table>
            </div>
        )
    }

    componentDidMount() {
        // 设置当搜索文本框的值发生改变时进行过滤
        this.refs.searchText.onchange = () => {
            this.filter(this.refs.searchText.value);
        };
    }

    filter(key) {
        if (key && key.trim()) {
            const users = [];
            this.state.allUsers.map(
                (e, i, all) => {
                    if ((e.id + '').indexOf(key) !== -1 ||
                        (e.name + '').indexOf(key) !== -1 ||
                        (e.username + '').indexOf(key) !== -1 ||
                        (UserListPanel.getTypeString(e.type) + '').indexOf(key) !== -1
                    ) {
                        users.push(e);
                    }
                    return null;
                }, this
            );
            this.setState({
                users: users
            });
        } else {
            this.setState({
                users: this.state.allUsers
            });
        }
    }

    delete() {
        window.showDialog(
            "删除",
            <YesNoDialog
                content="确定要删除这个用户吗？"
                yesOption={() => {
                    // 删除操作
                    window.closeDialog();
                }}
            />
        )
    }
}