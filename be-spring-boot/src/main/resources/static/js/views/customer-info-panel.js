/**
 * Created by alpaca on 17-6-16.
 */
import * as React from 'react';
import {Tabs} from 'antd';
import {CustomerPersonalPanel} from "./customer-personal-panel";
import {CustomerBabyPanel} from "./customer-baby-panel";
import {CustomerPaymentPanel} from "./customer-payment-panel";
import {ReturnVisitPanel} from './return-visit-panel';

const TabPane = Tabs.TabPane;


export class CustomerInfoPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        showReturnVisit: false
    }

    render() {
        return (
            <div className="display-panel">
                <Tabs defaultActiveKey="1" tabBarPosition={'left'}>
                    <TabPane tab="个人" key="1">
                        <CustomerPersonalPanel ref="personalPanel"/>
                    </TabPane>
                    <TabPane tab="宝宝" key="2">
                        <CustomerBabyPanel/>
                    </TabPane>
                    <TabPane tab="消费" key="3">
                        <CustomerPaymentPanel/>
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