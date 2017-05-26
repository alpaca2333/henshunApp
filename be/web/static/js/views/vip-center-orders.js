import * as React from 'react';
import {getStatusString, getDateTimeString} from '../lib/common';
import * as $ from 'jquery';

export class VipCenterOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
        this.dofilter = this.dofilter.bind(this);
        this.refreshOrder = this.refreshOrder.bind(this);
    }

    getDefaultState() {
        return {
            orders: [{
                id: 1,
                customerName: 'majiga',
                phoneNumber: '15651656873',
                idNum: '320802199607011518',
                arriveAt: null,
                leaveAt: null,
                roomProto: null,
                hotel: null,
                state: 0
            }]
        };
    }

    render() {
        const trs = [];
        for (let i in this.state.orders) {
            const order = this.state.orders[i];
            trs.push(
                <tr key={i} onClick={this.changeOrder.bind(this, order.id)} data-toggle="modal" data-target="#orderModal">
                    <td>{order.id}</td>
                    <td>{order.customerName}</td>
                    <td>{order.phoneNumber}</td>
                    <td>{order.idNum}</td>
                    <td>{getDateTimeString(order.arriveAt)}</td>
                    <td>{getDateTimeString(order.leaveAt)}</td>
                    <td>{order.hotel}</td>
                    <td>{order.roomProto}</td>
                    <td>{order.state}</td>
                </tr>
            );
        }
        return (
            <div className="panel panel-info">
                <div className="panel-heading">My Orders</div>
                <div className="panel-body">
                    <div id="order-search" className="form-search search-only">
                        <i className="search-icon glyphicon glyphicon-search"/>
                        <input onChange={this.dofilter} ref="queryText" type="text" className="form-control search-query" placeholder="Input name or phoneNumber"/>
                    </div>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>姓名</th>
                            <th>手机号</th>
                            <th>身份证号</th>
                            <th>入住时间</th>
                            <th>离店时间</th>
                            <th>入住酒店</th>
                            <th>房间类型</th>
                            <th>订单状态</th>
                        </tr>
                        </thead>
                        <tbody>
                        {trs}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.refreshOrder();
    }

    refreshOrder() {
        $.get('/api/vip/orders', (result) => {
            if (result.error) {
                alert(result.message);
            }
            result.data = result.data.map((val, index, arr) => {
                val.roomProto = val.roomProto.type;
                val.hotel = val.hostel.name;
                val.arriveAt = new Date(val.arriveAt);
                val.leaveAt = new Date(val.leaveAt);
                return val;
            });
            this.setState({
                orders: result.data
            });
        })
    }

    pushOrder(order) {
        this.state.orders.push(order);
        this.forceUpdate();
    }

    dofilter() {
        const queryInput = this.refs.queryText;
        const key = queryInput.value;
        if (this.allOrders.length === 0) {
            this.allOrders = this.state.orders;
        } else {
            if (!key) {
                this.setState({
                    orders: this.allOrders
                });
                this.allOrders = [];
            }
        }
        if (key) {
            const displayOrders = [];
            for (let order of this.allOrders) {
                if (order.customerName.indexOf(key) !== -1 || order.phoneNumber.indexOf(key) !== -1) {
                    displayOrders.push(order);
                }
            }
            this.setState({
                orders: displayOrders
            });
        }
    }

    changeOrder(id) {
        const C = window.components;
        C.orderModal.setOrderId(id);
    }

    allOrders = [];
}