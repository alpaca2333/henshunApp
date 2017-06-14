import * as React from 'react';
import request from 'superagent';

export class CustomerListPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        dataApi: '/api/my/customers'
    };

    getInitialState() {
        return {
            customers: [
                {
                    id: 1,
                    username: 'asd123',
                    name: '大哥好多年',
                    phoneNumber: '15644448888'
                }
            ]
        }
    }

    render() {
        return (
            <div id="display-panel">
                <span id="display-title">我的顾客</span>
                <div class="input-group input-group-sm" id="search-group">
                    <span class="input-group-btn">
                        <button class="btn btn-primary"><span class=" glyphicon glyphicon-search"></span> </button>
                    </span>
                    <input type="text" class="form-control form-inline" placeholder="姓名/用户名/手机号/编号"/>
                </div>
                <table class="table" id="data-table">
                    <thead>
                    <tr class="table-head">
                        <td style="width: 10%">编号</td>
                        <td style="width: 10%">姓名</td>
                        <td style="width: 10%">用户名</td>
                        <td style="width: 10%">手机号</td>
                        <td style="width: 15%">操作</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>编号</td>
                        <td>姓名</td>
                        <td>用户名</td>
                        <td>手机号</td>
                        <td>
                            <button class="btn btn-link">查看</button>
                            <button class="btn btn-link">编辑</button>
                            <button class="btn btn-link">录入消费</button>
                        </td>
                    </tr>
                    <tr>
                        <td>编号</td>
                        <td>姓名</td>
                        <td>用户名</td>
                        <td>手机号</td>
                        <td>
                            <button class="btn btn-link">查看</button>
                            <button class="btn btn-link">编辑</button>
                            <button class="btn btn-link">录入消费</button>
                        </td>
                    </tr>
                    <tr>
                        <td>编号</td>
                        <td>姓名</td>
                        <td>用户名</td>
                        <td>手机号</td>
                        <td>
                            <button class="btn btn-link">查看</button>
                            <button class="btn btn-link">编辑</button>
                            <button class="btn btn-link">录入消费</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    componentDidMount() {
        request
            .get('//www.baidu.com')
            .end((err, res) => {
                alert(err);
                alert(res);
            })
    }
}