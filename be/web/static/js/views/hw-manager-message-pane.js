/**
 * Created by alpaca on 2017/3/11.
 */
import * as React from 'react';
import * as $ from 'jquery';

export class HwManagerMessagePane extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
        this.setModalData = this.setModalData.bind(this);
    }

    getDefaultState() {
        return {
            messages: [
                {
                    id: 1,
                    idNum: '123',
                    location: '123',
                    message: '123',
                    modifiedAt: '123',
                    name: '傻逼点',
                    state: 'unprocessed',
                    type: 'create',
                    createAt: new Date(),
                    from: {
                        id: 1,
                        username: '123'
                    }
                }
            ]
        }
    }

    render() {
        const messageArr = [];
        for (let i in this.state.messages) {
            const message = this.state.messages[i];
            messageArr.push(
                <a key={'message#' + i} onClick={this.setModalData.bind(this, i)} className="list-group-item" data-toggle="modal" data-target="#messageModal">
                    <h4 className="list-group-item-heading">{message.type === 'create' ? 'Opening Request' : 'Modifying Request'}<span className="weak"> - {message.createAt.toTimeString()}</span></h4>
                    <p className="list-group-item-text">{message.type === 'create' ? '' : message.name}</p>
                </a>
            );
        }
        return (
            <div className="panel panel-info">
                <div className="panel-heading">Messages</div>
                <div className="panel-body">
                    <div className="list-group">
                        {messageArr}
                    </div>
                </div>
            </div>
        );
    }

    setModalData(i) {
        const C = window.components;
        const message = this.state.messages[i];
        C.adminMessageModal.setState(message);
    }

    componentDidMount() {
        $.get('/api/message/unprocessed', (result) => {
            if (result.error) {
                alert(result.message);
            } else {
                const messages = result.data.map((val, index, arr) => {
                    val.createAt = new Date(val.createdAt);
                    return val;
                });
                this.setState({
                    messages: messages
                });
            }
        })
    }
}