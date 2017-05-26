/**
 * Created by alpaca on 2017/3/11.
 */
import * as React from 'react';
import * as $ from 'jquery';

export class HotelOwnerMyHotel extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
        this.prepareModifyModal = this.prepareModifyModal.bind(this);
    }

    getDefaultState() {
        return {
            hotel: {
                idNum: 1,
                location: '',
                id: 1,
                name: 'ashome',
                imgUrl: '123',
                minPrice: 123,
                rank: 1,
                roomProtos: []
            },
        }
    }

    render() {
        if (this.state.hotel) {
            return (
                <div>
                    <div className="list-group">
                        <a className="list-group-item">
                            <p className="weak">Name.</p>
                            <p>{this.state.hotel.name}</p>
                        </a>
                        <a className="list-group-item">
                            <p className="weak">ID.</p>
                            <p>{this.state.hotel.idNum}</p>
                        </a>
                        <a className="list-group-item">
                            <p className="weak">location</p>
                            <p>{this.state.hotel.location}</p>
                        </a>
                    </div>
                    <button onClick={this.prepareModifyModal} className="btn btn-primary" data-target="#hotelInfoModal" data-toggle="modal">修改</button>
                </div>
            )
        } else {
            return (
                <div>
                    <p className="weak"> 暂时还没有开店</p>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#hotelInfoModal">我要开店</button>
                </div>
            )
        }
    }

    componentDidMount() {
        $.get('/api/admin/info', (result) => {
            if (result.error) {
                alert('Error getting admin Info:\n' + result.message);
            } else {
                $.get('/api/admin/hostel', (result) => {
                    if (result.error) {
                        alert('Error getting hostel info:\n' + result.message);
                    } else {
                        this.setState({
                            hotel: result.data
                        })
                    }
                })
            }
        })
    }

    prepareModifyModal() {
        const C = window.components;
        C.hotelInfoModal.setState({
            operation: 'modify',
            hotel: {
                idNum: this.state.hotel.idNum
            }
        });
    }
}
