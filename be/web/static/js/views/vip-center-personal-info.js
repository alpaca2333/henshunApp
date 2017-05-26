/**
 * Created by alpaca on 2017/2/28.
 */
import * as React from 'react';
import * as $ from 'jquery';

export class VipCenterPersonalPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
    }

    componentWillMount() {
        $.getJSON('/api/vip/info', (data) => {
            if (!data.error) {
                data = data.data;
                this.setState({
                    id: data.id,
                    idNum: data.idNum,
                    idCardNum: data.idNum,
                    name: data.name,
                    phone: data.phoneNumber,
                    balance: data.balance,
                    credit: data.credit,
                    vipLevel: data.benefitLevel ? data.benefitLevel.id : 0,
                    status: data.status,
                    benefit: data.benefitLevel ? data.benefitLevel.discount * 10 : 0
                });
            } else {
                alert(data.message);
            }
        });
    }

    getDefaultState() {
        return {
            id: 0,
            idNum: '1000000',
            name: null,
            phone: null,
            creditCard: null,
            idCardNum: null,
            balance: null,
            credit: null,
            vipLevel: null,
            status: null,
            benefit: null
        }
    }
    
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">我的会员 - {this.state.idNum}</div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <p className="weak">姓名：</p>{this.state.name}
                    </li>
                    <li className="list-group-item">
                        <p className="weak">电话号码：</p>{this.state.phone}
                    </li>
                    <li className="list-group-item">
                        <p className="weak">账户余额：</p>{this.state.balance} 元
                        <button className="btn btn-link" data-toggle="modal" data-target="#rechargeModal">充值</button>
                    </li>
                    <li className="list-group-item">
                        <p className="weak">我的积分：</p>{this.state.credit} 分
                        <button className="btn btn-link">如何获取积分？</button>
                        <button onClick={this.vipExchangeCredit} className="btn btn-primary">兑换为余额</button>
                    </li>
                    <li className="list-group-item">
                        <p className="weak">会员等级：</p>lv{this.state.vipLevel}
                        <button className="btn btn-link">立刻升级</button>
                        <div className="panel panel-default" style={{width: '400px'}}>
                            <div className="panel-heading">我的优惠</div>
                            <ul className="list-group">
                                <li className="list-group-item">所有订单 {this.state.benefit} 折优惠</li>
                                <li className="list-group-item">免费取消预定</li>
                            </ul>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <p className="weak">账户状态：</p>
                        <p>{this.state.status}</p>
                        <blockquote>
                            <p>一次性充值1000元可以激活冻结的账户</p>
                            <small>Steve Jobs</small>
                        </blockquote>
                        <button onClick={this.stopVip} className="btn btn-danger">停用</button>
                    </li>
                </ul>
            </div>
        );
    }

    vipExchangeCredit() {
        const result = $.get('/api/vip/credit/exchange');
        if (result.error) {
            alert(result.message);
        }
        window.location.reload();
    }

    stopVip() {
        const result = $.get('/api/vip/stop');
        if (result.error) {
            alert(result.message);
        }
        window.location.reload();
    }
}