/**
 * Created by alpaca on 17-6-29.
 */
import * as React from 'react';
import {Table, DatePicker, TimePicker} from 'antd';

export class PaymentDetailPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = PaymentDetailPanel.initialState;
    }

    static initialState = {
        id: 10000002,
        customer: {
            id: 1,
            name: '王女士'
        },
        time: '2015-01-01 11:11:11',
        products: [
            {
                id: 10000001,
                name: '补锌就要选我',
                price: 123,
                amount: 3
            },
            {
                id: 10000001,
                name: '补铁就要选我',
                price: 5,
                amount: 6
            },
            {
                id: 10000001,
                name: '补钙就要选我',
                price: 6,
                amount: 9
            }
        ],
        discount: {
            reason: '老顾客优惠大减价',
            amount: '123'
        },
        editing: false
    }

    render() {
        const columns = [
            {
                title: '产品编号',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '产品名称',
                key: 'name',
                dataIndex: 'name'
            },
            {
                title: '单价',
                key: 'price',
                dataIndex: 'price',
                render: (element, row) => (
                    <span style={{color: '#d3514d'}}>￥{element}</span>
                )
            },
            {
                title: '数量',
                key: 'amount',
                dataIndex: 'amount'
            },
            {
                title: '小计',
                key: 'subtotal',
                render: (element, row) => (
                    <span style={{color: '#d3514d'}}>￥{row.price * row.amount}</span>
                )
            }
        ];

        let total = 0.0;
        for (let product of this.state.products) {
            total += product.amount * product.price;
        }
        total -= this.state.discount.amount;

        return (
            <div className="display-panel">
                <div className="display-title">订单详情</div>
                <div className="display-info">
                    <div className="key-value">
                        <div className="key-value">
                            <span className="key">编号</span>
                            <span className="value" ref="valId">{this.state.id}</span>
                        </div>
                        <div className="key-value">
                            <span className="key">顾客编号</span>
                            <span className="value" ref="valId">{this.state.customer.id}</span>
                        </div>
                        <div className="key-value">
                            <span className="key">顾客姓名</span>
                            <span className="value" ref="valId">{this.state.customer.name}</span>
                        </div>
                        <div className="key-value">
                            <span className="key">购买时间</span>
                            <span className="value" ref="valId">{this.state.time}</span>
                        </div>
                    </div>
                    <Table columns={columns} dataSource={this.state.products} pagination={false}/>
                    <div style={{width: "100%", textAlign: 'right', marginTop: '20px'}}>
                        <span>{this.state.discount.reason} </span>
                        <span style={{color: '#d3514d', fontSize: '16px', marginLeft: '12px'}}>-￥{this.state.discount.amount}</span>
                        
                    </div>
                    <div style={{width: "100%", textAlign: 'right'}}>
                        <hr width="200px" style={{display: 'inline-block'}}/>
                    </div>
                    <div style={{width: "100%", textAlign: 'right', marginTop: '12px'}}>
                        <span>总计 </span>
                        <span style={{color: '#d3514d', fontSize: '20px', marginLeft: '12px'}}>￥{total}</span>
                    </div>
                    <button
                        className="btn btn-primary" id="btn-edit"
                        style={{display: this.state.editing ? 'none': 'inline'}}
                        onClick={this.edit}
                    ><span className="glyphicon glyphicon-pencil btn-icon"/>编辑</button>
                    <button
                        className="btn btn-primary"
                        style={{display: this.state.editing ? 'inline': 'none'}}
                        onClick={this.save}
                    ><span className="glyphicon glyphicon-save btn-icon"/>保存</button>
                    <button
                        className="btn btn-default"
                        style={{display: this.state.editing ? 'inline': 'none', marginLeft: '36px'}}
                        onClick={this.cancel}
                    ><span className="glyphicon glyphicon-ban-circle btn-icon"/>取消</button>
                    <button
                        className="btn btn-default"
                        style={{display: this.state.editing ? 'none': 'inline', marginLeft: '36px'}}
                        onClick={this.delete}
                    ><span className="glyphicon glyphicon-remove btn-icon"/>删除</button>
                </div>
            </div>
        )
    }
}