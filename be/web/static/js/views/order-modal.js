import * as React from 'react';
import {getStatusString, getDateTimeString} from '../lib/common';
import * as $ from 'jquery';

export class VipOrderModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
        this.setOrderId = this.setOrderId.bind(this);
        this.cancelReservation = this.cancelReservation.bind(this);
    }

    static defaultProps = {
        id: 'orderModal'
    };

    getDefaultState() {
        return {
            order: {
                id: 1,
                name: '顾楷狗',
                phoneNumber: '15651656873',
                idNum: '320802199607011518',
                arriveAt: new Date(),
                leaveAt: new Date(),
                roomNum: '010',
                hotel: '凯文宾馆',
                state: 1,
                hotelId: 1,
                arriveAtPlan: new Date(),
                leaveAtPlan: new Date(),
                createAt: new Date(),
            }
        }
    }


    setOrderId(id) {
        $.get('/api/order/' + id, (result) => {
            if (result.error) {
                alert("订单错误：\n" + result.message);
            } else {
                result = result.data;
                result.arriveAtPlan = new Date(result.arriveAt);
                result.leaveAtPlan = new Date(result.leaveAt);
                result.hotel = result.hostel.name;
                result.idNum = result.vip.idNum;
                result.phoneNumber = result.vip.phoneNumber;
                result.hostelId = result.hostel.id;
                result.name = result.vip.name;
                this.setState({
                    order: result
                });
            }
        })
    }

    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content  panel panel-info">
                        <div className="modal-header panel-heading">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                ×
                            </button>
                            <h4 className="modal-title" id="myModalLabel">
                                订单#{this.state.order.id} - {getStatusString(this.state.order.state)}
                            </h4>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <p className="weak">
                                        姓名
                                    </p>
                                    <p>{this.state.order.name}</p>
                                </li>
                                <li className="list-group-item">
                                    <p className="weak">
                                        预定手机号
                                    </p>
                                    <p>{this.state.order.phoneNumber}</p>
                                </li>
                                <li className="list-group-item">
                                    <p className="weak">
                                        身份证号
                                    </p>
                                    <p>{this.state.order.idNum}</p>
                                </li>
                                <li className="list-group-item">
                                    <p className="weak">
                                        订单创建日期
                                    </p>
                                    <p>{getDateTimeString(this.state.order.createAt)}</p>
                                </li>
                                <li className="list-group-item">
                                    <p className="weak">
                                        预计到店日期
                                    </p>
                                    <p>{getDateTimeString(this.state.order.arriveAtPlan)}</p>
                                </li>
                                <li className="list-group-item">
                                    <p className="weak">
                                        预计离店日期
                                    </p>
                                    <p>{getDateTimeString(this.state.order.leaveAtPlan)}</p>
                                </li>
                                <li className="list-group-item">
                                    <p className="weak">
                                        到店时间
                                    </p>
                                    <p>{getDateTimeString(this.state.order.arriveAt)}</p>
                                </li>
                                <li className="list-group-item">
                                    <p className="weak">
                                        离店时间
                                    </p>
                                    <p>{getDateTimeString(this.state.order.leaveAt)}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal" ref="close">关闭
                            </button>
                            <button onClick={this.cancelReservation} type="button" className="btn btn-primary"
                                    style={{display: this.state.order.state == 'reservation' ? 'inline' : 'none'}}>
                                取消预定
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    cancelReservation() {
        $.get('/api/order/' + this.state.order.id + '/cancelling', (result) => {
            if (result.error) {
                alert("订单取消失败：\n" + result.message);
            } else {
                alert("订单取消成功。");
                this.refs.close.click();
            }
        });
        window.components.vipCenterOrders.refreshOrder();
    }
}