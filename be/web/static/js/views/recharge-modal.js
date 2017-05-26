/**
 * Created by alpaca on 2017/3/16.
 */
import * as React from 'react';
import * as $ from 'jquery';

export class RechargeModal extends React.Component {
    constructor(props) {
        super(props);
        this.recharge = this.recharge.bind(this);
    }

    static defaultProps = {
        id: 'rechargeModal'
    };

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
                                充值
                            </h4>
                        </div>
                        <div className="modal-body">
                            充值金额：
                            <input className="form-control" type="number" ref="numRecharge"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">关闭
                            </button>
                            <button onClick={this.recharge} type="button" className="btn btn-primary" data-dismiss="modal">
                                确认充值
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    recharge() {
        const numRecharge = parseInt(this.refs.numRecharge.value);
        $.getJSON('/api/vip/recharge', {
            amount: numRecharge
        }, (result) => {
            if (result.error) {
                alert("充值失败。\n原因是: " + result.message);
            } else {
                window.location.href = '/vip/center';
            }
        });
    }
}