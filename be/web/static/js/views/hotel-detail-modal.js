/**
 * Created by alpaca on 2017/3/6.
 */
import * as React from 'react';
import {IMG_dachuangjian, IMG_danrenjian, IMG_shuangrenjian} from '../lib/common';
import * as $ from 'jquery';

export class HotelDetailModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
        this.setHostelId = this.setHostelId.bind(this);
        this.reserve = this.reserve.bind(this);
    }

    static defaultProps = {
        id: 'hotelDetailModal'
    };

    getDefaultState() {
        return {
            hotel: {
                id: 1,
                name: '马迹噶酒店',
                location: '这是一个奇怪的地方，具体地点我是真的不太清楚',
                imgUrl: '../../../static/img/login-banner2.jpg',
                minPrice: 128,
                rank: 4.1
            },
            rooms: [
                {
                    id: 0,
                    type: '单人间',
                    price: 123,
                    description: '标准件 热水 wifi 特价 不许带妹'
                }
            ]
        }
    }

    render() {
        const roomArr = [];
        for (let index in this.state.rooms) {
            const room = this.state.rooms[index];
            let roomAvatar;
            if (room.type == 0 || room.type == 'danren') {
                roomAvatar = IMG_danrenjian;
            } else if (room.type == 1 || room.type == 'shuangren') {
                roomAvatar = IMG_shuangrenjian;
            } else if (room.type == 2 || room.type == 'dachuang') {
                roomAvatar = IMG_dachuangjian;
            }
            roomArr.push(
                <tr key={'hotelInfo#' + index}>
                    <td style={{width: '64px'}} key={'room#' + index}>
                        <img src={roomAvatar} height="64px" width="64px" className="avatar64"/>
                    </td>
                    <td>
                        <p className="room-name"><b>{room.type}</b></p>
                        <p className="weak">{room.description}</p>
                    </td>
                    <td style={{textAlign: 'right'}}>
                        <p className="price-small"><b>￥{room.price}</b></p>

                        <button onClick={this.reserve.bind(this, this.state.hotel.id, room.id)}  type="button" className="btn small btn-primary" data-toggle="modal" data-target="#reserveModal" data-dismiss="modal">
                            预定
                        </button>
                    </td>
                </tr>
            );
        }

        const hotel = this.state.hotel;
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content  panel panel-info">
                        <div className="modal-header panel-heading">
                        </div>
                        <div className="modal-body panel-body">
                            <table className="table table-hover">
                                <tbody>
                                <tr>
                                    <td style={{width: '128px'}}>
                                        <img src={hotel.imgUrl} className="avatar64"  height="128px" width="128px"/>
                                    </td>
                                    <td style={{verticalAlign: 'top', textAlign: 'left'}}>
                                        <p className="hotel-name"><b>{hotel.name}</b></p>
                                        <p className="weak">{hotel.location}</p>
                                    </td>
                                    <td style={{verticalAlign: 'top', textAlign: 'right'}}>
                                        <p className="price"><b>￥{hotel.minPrice}</b><span className="price-small">起</span></p>
                                        <div className="progress" style={{width: '60%', marginLeft: '40%'}}>
                                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={hotel.rank * 20} aria-valuemin="0" aria-valuemax="100" style={{width: (hotel.rank * 20) + '%'}}>评分{hotel.rank}/5</div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <table className="table">
                                <tbody>
                                {roomArr}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">关闭
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    setHostelId(hotelId) {
        $.getJSON('/api/hostel/' + hotelId, (result) => {
            if (result.error) {
                alert(result.message);
                return;
            }
            const rooms = result.data.rooms;

            this.setState({
                hotel: result.data,
                rooms: result.data.roomProtos
            });
        })
    }

    reserve(hostelId, roomProtoId) {
        const C = window.components;
        C.indexReserveModal.setReserveInfo(hostelId, roomProtoId);
    }
}