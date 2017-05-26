/**
 * Created by alpaca on 2017/3/19.
 */
import * as React from 'react';
import * as $ from 'jquery';

export class ReserveModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.setReserveInfo = this.setReserveInfo.bind(this);
        this.reserve = this.reserve.bind(this);
    }

    static defaultProps = {
        id: 'reserveModal'
    };

    getInitialState() {
        return {
            roomProtoId: 0,
            hostel: {
                id: 1,
                name: '马迹噶酒店',
                location: '这是一个奇怪的地方，具体地点我是真的不太清楚',
                imgUrl: '../../../static/img/login-banner2.jpg',
                minPrice: 128,
                rank: 4.1
            },
            roomProto: {
                id: 0,
                type: '单人间',
                price: 123,
                description: '标准件 热水 wifi 特价 不许带妹'
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
                                预定 - {this.state.hostel.name} - {this.state.roomProto.type}
                            </h4>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div>
                                        <p className="weak">到店日期：</p>
                                        <input type="date" className="form-control" ref="dateArrive"/>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div>
                                        <p className="weak">离店日期：</p>
                                        <input type="date" className="form-control" ref="dateLeave"/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button ref="close" type="button" className="btn btn-default" data-dismiss="modal">关闭
                            </button>
                            <button onClick={this.reserve} type="button" className="btn btn-primary">
                                确认预定
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    setReserveInfo(hostelId, roomProtoId) {
        $.get('/api/roomProto/' + roomProtoId, (data) => {
            if (data.error) {
                alert("请求房间信息发生了错误：\n" + data.message);
                return;
            }
            $.get('/api/hostel/' + hostelId, (data2) => {
                if (data.error) {
                    alert("请求旅馆信息发生了错误：\n" + data.message);
                }
                this.setState({
                    hostel: data2.data,
                    roomProto: data.data
                })
            });
        });
    }

    reserve() {
        const postData = {
            arriveAt: this.refs.dateArrive.value,
            leaveAt: this.refs.dateLeave.value,
            roomProtoId: this.state.roomProto.id
        };
        $.post('/api/hostel/reservation', postData, (result) => {
            if (result.error) {
                alert(result.message);
            } else {
                alert('預定成功！');
                this.refs.close.click();
            }
        })
    }
}