/**
 * Created by alpaca on 17-6-25.
 */
import * as React from 'react';
import {DatePicker, Select} from 'antd';
import {BabyInfoPanel} from "./baby-info-panel";
export class CustomerBabyPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = CustomerBabyPanel.initialState;
    }

    static initialState = {
        babies: [
            1, 2, 3
        ],
        state: 'display' // edit / display
    };

    render() {

        const babyInfos = [];
        for (let babyId of this.state.babies) {
            babyInfos.push(
                <BabyInfoPanel babyId={babyId} key={'baby#' + babyId}/>
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
}