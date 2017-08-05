/**
 * Created by alpaca on 17-6-25.
 */
import * as React from 'react';
import {DatePicker, Select} from 'antd';
import {BabyInfoPanel} from "./baby-info-panel";
import request from 'superagent';
import {apis, showConnectionFailedMessage} from '../lib/common';

export class CustomerBabyPanel extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.state = CustomerBabyPanel.initialState;
    }

    static defaultProps = {
        customerId: 0,
    }

    static initialState = {
        babies: [
            1
        ],
        state: 'display' // edit / display
    };

    render() {
        const babyInfos = [];
        for (let babyId of this.state.babies) {
            babyInfos.push(
                <BabyInfoPanel babyId={babyId} key={'baby#' +   babyId}/>
            );
        }

        return (
            <div>
                <div className="display-title" >宝宝信息</div>
                <div className="display-info">
                    {babyInfos}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.update();
    }

    update() {
        request.get(apis.getCustomerBabies(this.props.customerId)).end((err, resp) => {
            if (err) {
                showConnectionFailedMessage();
                return;
            }
            if (resp.error) {
                message.warning(resp.error.status + ' ' + resp.error.message);
                return;
            }
            const result = resp.body;
            if (result.error) {
                message.warning(result.error +  ' ' + result.message);
                return;
            }
            this.setState({
                babies: result.data.map((v, i, arr) => v.id)
            });
        });
    }
}