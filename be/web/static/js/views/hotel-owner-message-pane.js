/**
 * Created by alpaca on 2017/3/11.
 */
import * as React from 'react';

export class HotelOwnerMessagePane extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
        this.setModalData = this.setModalData.bind(this);
    }

    getDefaultState() {
        return {
            messages: [
                {
                    id: '123123',
                    title: 'This is message',
                    timestamp: new Date(),
                    content: '1234123123123',
                    isRead: false
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
                    <h4 className="list-group-item-heading">{message.title}<span className="weak"> - {message.timestamp.toTimeString()}</span></h4>
                    <p className="list-group-item-text">{message.content.substring(0, 200)}</p>
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
        C.adminMessageModal.setState({
            title: message.title,
            content: message.content,
            timestamp: message.timestamp,
            denyAction: () => { },
            approveAction: () => { },
            id: message.id
        });
    }
}