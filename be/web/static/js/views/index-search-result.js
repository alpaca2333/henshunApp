/**
 * Created by alpaca on 2017/3/6.
 */

import * as React from 'react';

export class IndexSearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
        this.displayModal = this.displayModal.bind(this);
        this.setSearchCondition = this.setSearchCondition.bind(this);
    }

    getDefaultState() {
        return {
            condition: {
                arriveAt: '2015/01/01',
                leaveAt: '2015/01/02',
                key: '马迹噶'
            },
            hostels: [
                {
                    id: 1,
                    name: '马迹噶酒店',
                    location: '这是一个奇怪的地方，具体地点我是真的不太清楚',
                    imgUrl: '../../../static/img/login-banner2.jpg',
                    minPrice: 128,
                    rank: 4.1
                },
                {
                    id: 2,
                    name: '马迹噶酒店2',
                    location: '这是一个奇怪的地方，具体地点我是真的不太清楚',
                    imgUrl: '../../../static/img/login-banner2.jpg',
                    minPrice: 128,
                    rank: 4.1
                }
            ]
        };
    }

    render() {
        const hotelArr = [];
        for (let index in this.state.hostels) {
            const hotel = this.state.hostels[index];
            hotelArr.push(
                <tr key={'hotel#' + index}>
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
                        <button onClick={this.displayModal.bind(this, hotel.id)} className="btn btn-primary" data-toggle="modal" data-target="#hotelDetailModal">查看详情</button>
                    </td>
                </tr>
            );
        }
        return (
            <div className="panel panel-info" style={{width: '100%'}} ref="root">
                <div className="panel-heading">
                    {this.state.condition.arriveAt} - {this.state.condition.leaveAt} - {this.state.condition.key}
                </div>
                <div className="panel-body">
                    <table className="table-hover table">
                        <tbody>
                        {hotelArr}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    hide() {
        this.refs.root.style.display = 'none';
    }

    show() {
        this.refs.root.style.display = 'block';
    }

    displayModal(id) {
        const C = window.components;
        C.indexHotelDetailModal.setHostelId(id);
    }

    setSearchCondition(arrive, leave, key) {
        this.hide();
        $.post('/api/hostels', {
            arriveAt: arrive,
            leaveAt: leave,
            key: key
        }, (data) => {
            if (data.error) {
                alert('发生了一些小故障：\n' + data.message);
            } else {
                this.setState({
                    hostels: data.data,
                    condition: {
                        arriveAt: arrive,
                        leaveAt: leave,
                        key: key
                    }
                });
            }
        });
        this.show();
    }
}