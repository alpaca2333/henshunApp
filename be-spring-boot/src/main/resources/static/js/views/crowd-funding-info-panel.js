/**
 * Created by alpaca on 2017/7/28.
 */
import * as React from 'react';
import {Col, Row, Table, message} from 'antd';
import {apis, showConnectionFailedMessage} from '../lib/common';


export class CrowdFundingInfoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = CrowdFundingInfoPanel.initialState;
    }

    static defaultProps = {
        fundingId: 1
    }

    static initialState = {
        id: 1,
        name: '新品高钙补品',
        description: '新品众筹，七折即可获得新品',
        price: 128,
        targetNum: 200,
        currentNum: 90,
        product: {
            id: 1,
            name: 123,
            price: 190
        },
        time: '2018-01-01 00:00:00',
        members: [
            {
                id: 1,
                name: '王女士',
                phoneNumber: '15651656873',
                amount: 1
            }
        ]
    };

    render() {
        const columns = [
            {
                title: '#',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '电话号码',
                dataIndex: 'phoneNumber',
                key: 'phoneNumber'
            },
            {
                title: '数量',
                dataIndex: 'amount',
                key: 'amount'
            },
            {
                title: '操作',
                key: 'operation',
                render: (e, row) => (
                    <div>
                        <button className="btn btn-link">删除</button>
                    </div>
                )
            },
        ];
        return (
            <div className="display-panel">
                <div className="display-title">众筹 - {this.state.name}</div>
                <Row>
                    <Col span={8}>
                        <div className="key-value">
                            <span className="key">编号</span>
                            <span className="value">{this.state.id}</span>
                        </div>
                        <div className="key-value">
                            <span className="key">名称</span>
                            <span className="value">{this.state.name}</span>
                        </div>
                        <div className="key-value">
                            <span className="key">描述</span>
                            <span className="value">{this.state.description}</span>
                        </div>
                        <div className="key-value">
                            <span className="key">当前进度</span>
                            <span className="value">{this.state.currentNum / this.state.targetNum * 100}%</span>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="key-value">
                            <span className="key">产品编号</span>
                            <span className="value">{this.state.product.id}</span>
                        </div>
                        <div className="key-value">
                            <span className="key">产品名称</span>
                            <span className="value">{this.state.product.name}</span>
                        </div>
                        <div className="key-value">
                            <span className="key">原定价格</span>
                            <span className="value" style={{color: '#E85B53'}}>￥{this.state.product.price}</span>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="key-value">
                            <span className="key">众筹价格</span>
                            <span className="value" style={{color: '#E85B53'}}>￥{this.state.price}</span>
                        </div>
                        <div className="key-value">
                            <span className="key">截止时间</span>
                            <span className="value" style={{color: '#E85B53'}}>￥{this.state.time}</span>
                        </div>
                        <div className="key-value">
                            <span className="key">目标人数</span>
                            <span className="value">{this.state.targetNum}</span>
                        </div>
                        <div className="key-value">
                            <span className="key">当前人数</span>
                            <span className="value">{this.state.currentNum}</span>
                        </div>
                    </Col>
                </Row>
                <Table columns={columns} dataSource={this.state.members}/>
            </div>
        )
    }

    update() {
         request.get(apis.getFunding(this.props.fundingId)).end((err, resp) => {
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
            this.state = result.data;
            this.forceUpdate();
        })
    }
}