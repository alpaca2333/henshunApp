/**
 * Created by alpaca on 2017/3/22.
 */
import * as React from 'react';
import * as $ from 'jquery';

export class RoomSelectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.setOrderInfo = this.setOrderInfo.bind(this);
    }

    getInitialState() {
        return {
            protoId: 1,
            rooms: ['123', '234'],
            orderId: 1
        }
    }

    static defaultProps = {
        id: 'roomSelectModal'
    };

    render() {
        const roomNode = [];
        for (let i in this.state.rooms) {
            const room = this.state.rooms[i];
            roomNode.push(
                <option value={room} key={i}>{room}</option>
            );
        }
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content  panel panel-info">
                        <div className="modal-header panel-heading">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                ×
                            </button>
                            <h4 className="modal-title" id="myModalLabel">
                                选择房间
                            </h4>
                        </div>
                        <div className="modal-body">
                            <select ref="roomNum" className="form-control" style={{width: '150px'}}>
                                {roomNode}
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button ref="close" type="button" className="btn btn-default" data-dismiss="modal">取消
                            </button>
                            <button onClick={this.submitRoom.bind(this, this.state.orderId)} type="button" className="btn btn-primary">
                                确定
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    setOrderInfo(protoId, orderId) {
        $.get('/api/proto/' + protoId + '/rooms', (result) => {
            if (result.error) {
                alert(result.messages);
            } else {
                this.setState({
                    rooms: result.data,
                    orderId: orderId
                });
            }
        })
    }

    submitRoom(orderId) {
        const roomNum = this.refs.roomNum.value;
        $.post('/api/order/' + orderId + '/checkIn/' + roomNum, {
            orderId: orderId,
            roomNum: roomNum
        }, (result) => {
            if (result.error) {
                alert(result.messages);
            } else {
                this.refs.close.click();
            }
        })
    }
}