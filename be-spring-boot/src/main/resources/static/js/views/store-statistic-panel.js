import * as React from 'react';
import {Card, Row, Col, Table} from 'antd';
import * as charts from '../lib/charts';

export class StoreStatisticPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = StoreStatisticPanel.initialState;
        this.updateCharts = this.updateCharts.bind(this);
    }

    static initialState = {
        JRXSTJ: {
            collapsed: false,
            xiaoshouzonge: 123,
            shoudanrenshu: 3,
            xinzenghuiyuan: 4,
            xiaoshouezuigao: {
                id: 1,
                name: '香醋'
            },
            xiaoshouliangzuigao: {
                id: 1,
                name: '香醋'
            },
            xiaoshouxiangqing: [
                {
                    id: 1,
                    name: '香醋',
                    price: 123,
                    amount: 8
                },
                {
                    id: 2,
                    name: '米酒',
                    price: 123,
                    amount: 6
                },
                {
                    id: 3,
                    name: '高钙',
                    price: 123,
                    amount: 3
                },
                {
                    id: 4,
                    name: '补锌',
                    price: 123,
                    amount: 2
                },
                {
                    id: 1,
                    name: '香醋',
                    price: 123,
                    amount: 8
                },
                {
                    id: 2,
                    name: '米酒',
                    price: 123,
                    amount: 6
                },
                {
                    id: 3,
                    name: '高钙',
                    price: 123,
                    amount: 3
                },
                {
                    id: 4,
                    name: '补锌',
                    price: 123,
                    amount: 2
                },
                {
                    id: 1,
                    name: '香醋',
                    price: 123,
                    amount: 8
                },
                {
                    id: 2,
                    name: '米酒',
                    price: 123,
                    amount: 6
                },
                {
                    id: 3,
                    name: '高钙',
                    price: 123,
                    amount: 3
                },
                {
                    id: 4,
                    name: '补锌',
                    price: 123,
                    amount: 2
                },
                {
                    id: 1,
                    name: '香醋',
                    price: 123,
                    amount: 8
                },
                {
                    id: 2,
                    name: '米酒',
                    price: 123,
                    amount: 6
                },
                {
                    id: 3,
                    name: '高钙',
                    price: 123,
                    amount: 3
                },
                {
                    id: 4,
                    name: '补锌',
                    price: 123,
                    amount: 2
                }
            ]
        },
        BYXSTJ: {
            collapsed: false,
            xiaoshouzonge: 123,
            shoudanrenshu: 3,
            xinzenghuiyuan: 4,
            xiaoshouezuigao: {
                id: 1,
                name: '香醋'
            },
            xiaoshouliangzuigao: {
                id: 1,
                name: '香醋'
            },
            sanshitianrixiaoshoue: [
                {
                    time: '2015-01-01',
                    amount: '50'
                },
                {
                    time: '2015-01-01',
                    amount: '60'
                },
                {
                    time: '2015-01-01',
                    amount: '70'
                },
                {
                    time: '2015-01-01',
                    amount: '30'
                },
                {
                    time: '2015-01-01',
                    amount: '20'
                },
                {
                    time: '2015-01-01',
                    amount: '90'
                },
                {
                    time: '2015-01-01',
                    amount: '10'
                },
                {
                    time: '2015-01-01',
                    amount: '20'
                },
                {
                    time: '2015-01-01',
                    amount: '30'
                },
                {
                    time: '2015-01-01',
                    amount: '40'
                },
                {
                    time: '2015-01-01',
                    amount: '50'
                },
                {
                    time: '2015-01-01',
                    amount: '60'
                },
                {
                    time: '2015-01-01',
                    amount: '70'
                },
                {
                    time: '2015-01-01',
                    amount: '20'
                },
                {
                    time: '2015-01-01',
                    amount: '10'
                },
                {
                    time: '2015-01-01',
                    amount: '20'
                },
                {
                    time: '2015-01-01',
                    amount: '80'
                },
                {
                    time: '2015-01-01',
                    amount: '50'
                },
                {
                    time: '2015-01-01',
                    amount: '40'
                },
                {
                    time: '2015-01-01',
                    amount: '30'
                },
            ]
        }
    }

    render() {
        return (
            <div className="display-panel" >
                <div className="display-title">
                    销售统计
                </div>
                <Row>
                    <Col span={24}>
                        <Card 
                            title="今日销售统计" bodyStyle={{overflowY: 'hidden', maxHeight: this.state.JRXSTJ.collapsed ? 0 : '1000px', padding: 0, transition: 'max-height 0.3s cubic-bezier(0, 0, 0, 1)'}}
                            extra={(
                                <button 
                                    className="btn btn-link"
                                    onClick={() => {
                                        this.state.JRXSTJ.collapsed = !this.state.JRXSTJ.collapsed;
                                        this.forceUpdate();
                                    }}
                                >{
                                    this.state.JRXSTJ.collapsed ? 'more +': 'less -'
                                }</button>
                            )}
                        >
                            <div style={{padding: '24px'}}>
                                <Row>
                                    <Col span={12}>
                                        <div className="key-value">
                                            <span className="key">今日销售总额</span>
                                            <span className="value">￥{this.state.JRXSTJ.xiaoshouzonge}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">今日首单人数</span>
                                            <span className="value">{this.state.JRXSTJ.shoudanrenshu}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">今日新增会员</span>
                                            <span className="value">{this.state.JRXSTJ.xinzenghuiyuan}</span>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="key-value">
                                            <span className="key">今日销售额最高商品</span>
                                            <span className="value">{this.state.JRXSTJ.xiaoshouezuigao.name}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">今日销售量最高商品</span>
                                            <span className="value">{this.state.JRXSTJ.xiaoshouliangzuigao.name}</span>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="key-value">
                                    <span className="key">商品详细销售情况：</span>
                                </div>
                                <Table columns={StoreStatisticPanel.productSalesColumns} dataSource={this.state.JRXSTJ.xiaoshouxiangqing}/>
                            </div>
                        </Card>
                        <div style={{height: '24px'}}/>
                        <Card 
                            title="本月销售统计" 
                            bodyStyle={{overflowY: 'hidden', maxHeight: this.state.BYXSTJ.collapsed ? 0 : '600px', padding: 0, transition: 'max-height 0.3s cubic-bezier(0,0, 0, 1)'}}
                            extra={(
                                <button 
                                    className="btn btn-link"
                                    onClick={() => {
                                        this.state.BYXSTJ.collapsed = !this.state.BYXSTJ.collapsed;
                                        this.forceUpdate();
                                    }}
                                >{
                                    this.state.BYXSTJ.collapsed ? 'more +': 'less -'
                                }</button>
                            )}
                        >
                            <div style={{padding: '24px'}}>
                                <Row>
                                    <Col span={12}>
                                        <div className="key-value">
                                            <span className="key">本月销售总额</span>
                                            <span className="value">￥{this.state.JRXSTJ.xiaoshouzonge}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">本月首单人数</span>
                                            <span className="value">{this.state.JRXSTJ.shoudanrenshu}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">本月新增会员</span>
                                            <span className="value">{this.state.JRXSTJ.xinzenghuiyuan}</span>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="key-value">
                                            <span className="key">本月销售额最高商品</span>
                                            <span className="value">{this.state.JRXSTJ.xiaoshouezuigao.name}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">本月销售量最高商品</span>
                                            <span className="value">{this.state.JRXSTJ.xiaoshouliangzuigao.name}</span>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="key-value">
                                    <span className="key">近30天日销售额：</span>
                                </div>
                                <div style={{width: '100%', height: '300px'}} ref="RXSECharts"></div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                
            </div>
        )
    }

    updateCharts() {
        const RXSExAxis = this.state.BYXSTJ.sanshitianrixiaoshoue.reduce((pv, cv) => {pv.push(cv.time); return pv;}, []);
        const RXSEvalues = this.state.BYXSTJ.sanshitianrixiaoshoue.reduce((pv, cv) => {pv.push(cv.amount); return pv;}, []);
        
        this.RXSECharts.setOption({
            color: ['#E85B53'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : RXSExAxis,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'日销售额',
                    type:'bar',
                    barWidth: '60%',
                    data: RXSEvalues
                }
            ]
        });
    }

    componentDidMount() {
        this.RXSECharts = charts.init(this.refs.RXSECharts);
        this.updateCharts();
    }

    componentDidUpdate() {
        this.updateCharts();
    }
    
    RXSECharts = null;

    static productSalesColumns = [
        {
            title: '#',
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
            dataIndex: 'price'
        },
        {
            title: '数量',
            key: 'amount',
            dataIndex: 'amount'
        }
    ]
}