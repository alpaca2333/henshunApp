/**
 * Created by alpaca on 17-6-29.
 */
import * as React from 'react';
import {Table, DatePicker, TimePicker, InputNumber} from 'antd';
import {YesNoDialog} from './yes-no-dialog';
import {ProductSelect} from './product-select';
import {addKeyToArray} from "../lib/common";

export class PaymentDetailPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = PaymentDetailPanel.initialState;
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.cancel = this.cancel.bind(this);
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
                amount: 3,
                editing: false
            },
            {
                id: 10000001,
                name: '补铁就要选我',
                price: 5,
                amount: 6,
                editing: false
            },
            {
                id: 10000001,
                name: '补钙就要选我',
                price: 6,
                amount: 9,
                editing: false
            }
        ],
        discount: {
            reason: '老顾客优惠大减价',
            amount: '123'
        },
        editing: false
    };

    render() {
        let columns = [];
        if (!this.state.editing) {
            columns.push(
                {
                    title: '产品编号',
                    key: 'id',
                    dataIndex: 'id'
                }
            );
            columns.push(
                {
                    title: '产品名称',
                    key: 'name',
                    dataIndex: 'name'
                }
            );
        } else {
            columns.push(
                {
                    title: '产品',
                    key: 'product',
                    render: (element, row) => {
                        return <ProductSelect selectedId={row.id} onChange={(value) => {
                            row.id = value.key;
                            row.name = value.label[2];
                            row.price = parseInt(value.label[4]);
                            this.forceUpdate();
                        }}/>;
                    }
                }
            )
        }
        columns = columns.concat([
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
                dataIndex: 'amount',
                render: (e, row) => {
                    if (this.state.editing) {
                        return <InputNumber defaultValue={row.amount} onChange={(value) => {row.amount = value; this.forceUpdate();}}/>
                    } else {
                        return e;
                    }
                }
            },
            {
                title: '小计',
                key: 'subtotal',
                render: (element, row) => (
                    <span style={{color: '#d3514d'}}>￥{row.price * row.amount}</span>
                )
            }
        ]);

        addKeyToArray(this.state.products);

        if (this.state.editing) {
            columns.push({
                title: '操作',
                key: 'operation',
                render: (element, row) => {
                    return (
                        <div>
                            <button className="btn btn-link" onClick={() => {
                                window.showDialog('删除',<YesNoDialog content={'确定要删除 ' + row.name + '*' + row.amount + ' 吗？'}
                                                                    yesOption={() => {
                                                                        this.state.products.splice(row.key, 1); window.closeDialog();
                                                                        this.forceUpdate();
                                                                    }}
                                />)
                            }}>删除</button>
                        </div>
                    )
                }
            })
        }

        let total = 0.0;
        for (let product of this.state.products) {
            if (typeof product.amount === 'number' && typeof product.price === 'number') {
                total += product.amount * product.price;
            }
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
                        {this.state.editing ? <button className="btn-small btn-link" style={{float: 'left'}} onClick={() => {
                            this.state.products.splice(0, 0, {editing: true, amount: 1});
                            this.forceUpdate();
                        }}>添加条目</button> : ''}
                        <span>{this.state.discount.reason} </span>
                        <span style={{color: '#d3514d', fontSize: '16px', marginLeft: '12px'}}>-￥{this.state.discount.amount}</span>
                    </div>
                    <div style={{width: "100%", textAlign: 'right'}}>
                        <hr width="200px" style={{display: 'inline-block'}}/>
                    </div>
                    <div style={{width: "100%", textAlign: 'right', marginTop: '12px'}}>
                        <span>总计 </span>
                        <span style={{color: '#d3514d', fontSize: '20px', marginLeft: '12px'}}>￥{total < 0 ? 0 : total}</span>
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
                        onClick={this.deleteItem}
                    ><span className="glyphicon glyphicon-remove btn-icon"/>删除</button>
                </div>
            </div>
        )
    }

    edit() {
        this.state.editing = true;
        this.forceUpdate();
    }

    save() {
        const tmp = [];
        for (let product of this.state.products) {
            if (product.id) tmp.push(product);
        }
        this.state.products = tmp;
        this.state.editing = false;
        this.forceUpdate();
    }

    cancel() {
        window.showDialog('取消', <YesNoDialog content="改动将不会保存。确定要取消吗？" yesOption={() => {
            this.state.editing = false;
            this.forceUpdate();
            window.closeDialog();
        }}/>);
    }

    deleteItem() {
        window.showDialog('删除', <YesNoDialog content="确定要删除这条记录吗？" yesOption={() => {
            this.state.editing = false;
            this.forceUpdate();
            window.closeDialog();
        }}/>);
    }
}