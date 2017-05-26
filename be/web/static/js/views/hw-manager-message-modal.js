/**
 * Created by alpaca on 2017/3/11.
 */
import * as React from 'react';
import * as $ from 'jquery';

export class HwManagerMessageModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
        this.approve = this.approve.bind(this);
        this.deny = this.deny.bind(this);
    }

    static defaultProps = {
        id: 'messageModal'
    };


    getDefaultState() {
        return {
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
        };
    }

    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content panel panel-info">
                        <div className="modal-header panel-heading">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                ×
                            </button>
                            <h4 className="modal-title" id="myModalLabel">
                                {this.state.title} - <span className="weak">{this.state.createAt.toTimeString()}</span>
                            </h4>
                        </div>
                        <div className="modal-body panel-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <p className="weak">店名</p>
                                    <p>{this.state.name}</p>
                                </li>
                            </ul>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <p className="weak">位置</p>
                                    <p>{this.state.location}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button ref="close" type="button" className="btn btn-default" data-dismiss="modal">关闭
                            </button>
                            <button onClick={this.deny} type="button" className="btn btn-warning" data-dismiss="modal">
                                拒绝
                            </button>
                            <button onClick={this.approve} type="button" className="btn btn-primary" data-dismiss="modal">
                                同意
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    approve() {
        $.get('/api/message/' + this.state.id + '/approval', (result) => {
            if (result.error) {
                alert(result.message);
            } else {
                alert('Approval success');
                this.refs.close.click();
            }
        });
    }

    deny() {
        $.get('/api/message/' + this.state.id + '/denying', (result) => {
            if (result.error) {
                alert(result.message);
            } else {
                alert('Denying success');
                this.refs.close.click();
            }
        });
    }
}