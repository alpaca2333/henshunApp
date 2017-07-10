/**
 * Created by alpaca on 17-6-29.
 */
import * as React from 'react';

export class PaymentDetailPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="display-panel">
                <div className="key-value">
                    <div className="key-value">
                        <span className="key">编号</span>
                        <span className="value" ref="valId">{this.state.id}</span>
                    </div>
                    <div className="key-value">
                        <span className="key">顾客编号</span>
                        <span className="value" ref="valId">{this.state.id}</span>
                    </div>
                    <div className="key-value">
                        <span className="key">顾客姓名</span>
                        <span className="value" ref="valId">{this.state.id}</span>
                    </div>
                    <div className="key-value">
                        <span className="key">购买时间</span>
                        <span className="value" ref="valId">{this.state.id}</span>
                    </div>
                </div>
            </div>
        )
    }
}