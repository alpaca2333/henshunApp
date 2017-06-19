import * as React from 'react';
import request from 'superagent';

export class CustomerListPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    static defaultProps = {
        dataApi: '/api/my/customers'
    };

    getInitialState() {
        return {
            customers: [
                {
                    id: 1,
                    register: '2015-01-01',
                    name: '\u5927\u54e5\u597d\u591a\u5e74',
                    phoneNumber: '15644448888'
                }
            ]
        }
    }

    render() {
        return (
            <div className="display-panel">
                <div className="display-title">我的顾客</div>
                <div className="input-group input-group-sm" id="search-group">
                    <span className="input-group-btn">
                        <button className="btn btn-primary"><span className=" glyphicon glyphicon-search"/> </button>
                    </span>
                    <input type="text" className="form-control form-inline" placeholder="姓名/用户名/手机号/编号"/>
                </div>
                <table className="table" id="data-table">
                    <thead>
                    <tr className="table-head">
                        <td style={{width: '10%'}}>编号</td>
                        <td style={{width: '10%'}}>姓名</td>
                        <td style={{width: '10%'}}>注册时间</td>
                        <td style={{width: '10%'}}>手机号</td>
                        <td style={{width: '15%'}}>操作</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>编号</td>
                        <td>姓名</td>
                        <td>用户名</td>
                        <td>手机号</td>
                        <td>
                            <button className="btn btn-link">查看</button>
                            <button className="btn btn-link">编辑</button>
                            <button className="btn btn-link">录入消费</button>
                        </td>
                    </tr>
                    <tr>
                        <td>编号</td>
                        <td>姓名</td>
                        <td>用户名</td>
                        <td>手机号</td>
                        <td>
                            <button className="btn btn-link">查看</button>
                            <button className="btn btn-link">编辑</button>
                            <button className="btn btn-link">录入消费</button>
                        </td>
                    </tr>
                    <tr>
                        <td>编号</td>
                        <td>姓名</td>
                        <td>用户名</td>
                        <td>手机号</td>
                        <td>
                            <button className="btn btn-link">查看</button>
                            <button className="btn btn-link">编辑</button>
                            <button className="btn btn-link">录入消费</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}