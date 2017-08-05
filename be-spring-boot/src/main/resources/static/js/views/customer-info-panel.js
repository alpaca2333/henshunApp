/**
 * Created by alpaca on 17-6-16.
 */
import * as React from 'react';
import {Tabs} from 'antd';
import {CustomerPersonalPanel} from "./customer-personal-panel";
import {CustomerBabyPanel} from "./customer-baby-panel";
import {CustomerPaymentPanel} from "./customer-payment-panel";
import {ReturnVisitPanel} from './return-visit-panel';
import {apis, showConnectionFailedMessage} from '../lib/common';

const TabPane = Tabs.TabPane;


export class CustomerInfoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    static defaultProps = {
        showReturnVisit: false,
        customerId: 0,
    }

    render() {
        return (
            <div className="display-panel">
                <Tabs defaultActiveKey="1" tabBarPosition={'left'}>
                    <TabPane tab="个人" key="1">
                        <CustomerPersonalPanel ref="personalPanel" customerId={this.props.customerId}/>
                    </TabPane>
                    <TabPane tab="宝宝" key="2">
                        <CustomerBabyPanel customerId={this.props.customerId}/>
                    </TabPane>
                    <TabPane tab="消费" key="3">
                        <CustomerPaymentPanel customerId={this.props.customerId}/>
                    </TabPane>
                    {
                        this.props.showReturnVisit ? 
                        <TabPane tab="回访记录" key="4">
                            <ReturnVisitPanel/>
                        </TabPane> : ''
                    }
                </Tabs>
            </div>
        )
    }
}