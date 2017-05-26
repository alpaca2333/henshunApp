/**
 * Created by alpaca on 2017/3/21.
 */
import * as React from 'react';
import {getStatusString, getDateTimeString} from '../lib/common';
import * as $ from 'jquery';

export class HotelInfoModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.submit = this.submit.bind(this);
    }

    static defaultProps = {
        id: 'hotelInfoModal'
    };

    getInitialState() {
        return {
            operation: 'open',
            hotel: {
                idNum: 'asd',
                name: '',
                location: ''
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
                                {this.state.operation === 'open' ? '开店！' : '修改'}
                            </h4>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <p className="weak">店名：</p>
                                    <input type="text" className="form-control" ref="txtName"/>
                                </li>
                                <li className="list-group-item">
                                    <p className="weak">位置：</p>
                                    <input type="text" className="form-control" ref="txtLocation"/>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal" ref="close">
                                取消
                            </button>
                            <button onClick={this.submit} type="button" className="btn btn-primary">
                                提交
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    submit() {
        if (this.state.operation === 'open') {
            const name = this.refs.txtName.value;
            const location = this.refs.txtLocation.value;
            $.post('/api/request', {
                name: name, location: location, operation: this.state.operation
            }, (result) => {
                if (result.error) {
                    alert(result.message);
                } else {
                    alert("Request Succeeded! Please wait for administrator's approval.");
                    this.refs.close.click();
                }
            })
        }
        else {
            $.post('/api/request', {
                name: this.refs.txtName.value,
                location: this.refs.txtLocation.value,
                operation: this.state.operation,
                idNum: this.state.hotel.idNum
            }, (result) => {
                if (result.error) {
                    alert(result.message);
                } else {
                    alert("Request Succeeded! Please wait for administrator's approval.");
                    this.refs.close.click();
                }
            })
        }
    }
}