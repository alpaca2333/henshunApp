/**
 * Created by alpaca on 2017/3/11.
 */
import * as React from 'react';
import {getStatusString, getDateTimeString} from '../lib/common';
import * as $ from 'jquery';

export class HotelOwnerOrderModal extends React.Component {
    constructor(props) {
        super(props);
        this.setOrder = this.setOrder.bind(this);
        this.state = this.getDefaultState();
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
                status: 0,
                hotelId: 1,
                arriveAtPlan: new Date(),
                leaveAtPlan: new Date(),
                createAt: new Date(),
                roomProto: {}
            }
        }
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
                                订单#{this.state.order.id} - {getStatusString(this.state.order.status)}
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
                            <button ref="close" type="button" className="btn btn-default" data-dismiss="modal">关闭
                            </button>
                            <button type="button" className="btn btn-warning" data-dismiss="modal"
                                    style={{display: this.state.order.status == 'reservation' ? 'inline' : 'none'}}>
                                取消预定
                            </button>
                            <button onClick={this.prepareSelectModal.bind(this)}
                                    type="button" className="btn btn-primary" data-dismiss="modal" data-toggle="modal"
                                    data-target="#roomSelectModal"
                                    style={{display: this.state.order.status == 'reservation' ? 'inline' : 'none'}}>
                                入住
                            </button>
                            <button onClick={this.checkOut.bind(this)} type="button" className="btn btn-primary" data-dismiss="modal"
                                    style={{display: this.state.order.status == 'payed' ? 'inline' : 'none'}}>
                                退房
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    setOrder(id) {
        $.get('/api/order/' + id, (result) => {
            if (result.error) {
                alert(result.message);
            } else {
                result.data.name = result.data.customerName;
                result.data.status = result.data.state;
                this.setState({
                    order: result.data
                })
            }
        });
    }

    prepareSelectModal() {
        window.components.roomSelectModal.setOrderInfo(this.state.order.roomProto.id, this.state.order.id);
    }

    checkOut() {
        $.get('/api/order/' + this.state.order.id + '/checkingOut', (result) => {
            if (result.error) {
                alert(result.messages);
            } else {
                this.refs.close.click();
            }
        })
    }
}