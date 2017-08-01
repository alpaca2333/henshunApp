import * as React from 'react';
import {Col, Row, Card, Table} from 'antd';
import * as charts from '../lib/charts';
import {timeLengthStr} from '../lib/common';
export class AdminStatisticPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = AdminStatisticPanel.initialState;
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
                    amount: 10
                }
            ],
            liquanshiyongcishu: 12,
            liquanzonge: 159,
            liquandingdanzonge: 15613
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
                id: 2,
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
            ],
            liquanshiyongcishu: 12,
            liquanzonge: 159,
            liquandingdanzonge: 15613
        },
        JXSXSTJ: {
            collapsed: false,
            sales: [
                {
                    id: 1,
                    name: '王女士',
                    phoneNumber: '15651656873',
                    location: '南京市鼓楼区分店',
                    todaySalesAmount: '123',
                    monthSalesAmount: '65535'
                },
                {
                    id: 2,
                    name: '孙女士',
                    phoneNumber: '15651656873',
                    location: '南京市栖霞区分店',
                    todaySalesAmount: '3',
                    monthSalesAmount: '10'
                }
            ]
        },
        HFTJ: {
            collapsed: false,
            returnVisits: [
                {
                    id: 1,
                    username: 'wanghui14',
                    name: '王女士',
                    month: {
                        visits: 12,
                        length: 15315, // 总回访时长（秒）
                    },
                    all: {
                        visits: 203,
                        length: 655345
                    }
                },
            ],
            weekReturnConsumption: 12601,
            weekReturnLength: 12506,
            weekReturnVisits: 123,
            monthReturnConsumption: 126301,
            monthReturnLength: 125406,
            monthReturnVisits: 1223,
        },
        HYTJ: {
            collapsed: false,
            todayNonVip: 123,
            todayVipPromotion: 86,
            todayVipPromotionRate: 0.03,
            monthVipPromotion: 128,
            monthVipPromotionRate: 0.4
        }
    }


    render() {
        return (
            <div className="display-panel">
                <div className="display-title">销售统计</div>
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
                                    <Col span={8}>
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
                                    <Col span={8}>
                                        <div className="key-value">
                                            <span className="key">今日销售额最高商品</span>
                                            <span className="value">{this.state.JRXSTJ.xiaoshouezuigao.name}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">今日销售量最高商品</span>
                                            <span className="value">{this.state.JRXSTJ.xiaoshouliangzuigao.name}</span>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="key-value">
                                            <span className="key">礼券使用次数</span>
                                            <span className="value">{this.state.JRXSTJ.liquanshiyongcishu}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">礼券总额</span>
                                            <span className="value">￥{this.state.JRXSTJ.liquanzonge}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">礼券订单总额</span>
                                            <span className="value">￥{this.state.JRXSTJ.liquandingdanzonge}</span>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="key-value">
                                    <span className="key">商品详细销售情况：</span>
                                </div>
                                <Table columns={AdminStatisticPanel.productSalesColumns} dataSource={this.state.JRXSTJ.xiaoshouxiangqing}/>
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
                                    <Col span={8}>
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
                                    <Col span={8}>
                                        <div className="key-value">
                                            <span className="key">本月销售额最高商品</span>
                                            <span className="value">{this.state.JRXSTJ.xiaoshouezuigao.name}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">本月销售量最高商品</span>
                                            <span className="value">{this.state.JRXSTJ.xiaoshouliangzuigao.name}</span>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="key-value">
                                            <span className="key">礼券使用次数</span>
                                            <span className="value">￥{this.state.JRXSTJ.liquanshiyongcishu}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">礼券总额</span>
                                            <span className="value">￥{this.state.JRXSTJ.liquanzonge}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">礼券订单总额</span>
                                            <span className="value">￥{this.state.JRXSTJ.liquandingdanzonge}</span>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="key-value">
                                    <span className="key">近30天日销售额：</span>
                                </div>
                                <div style={{width: '100%', height: '300px'}} ref="RXSECharts"></div>
                            </div>
                        </Card>
                        <div style={{height: '24px'}}/>
                        <Card 
                            title="经销商销售统计" 
                            bodyStyle={{overflowY: 'hidden', maxHeight: this.state.JXSXSTJ.collapsed ? '0' : '701px', padding: 0, transition: 'max-height 0.3s cubic-bezier(0,0, 0, 1)'}}
                            extra={(
                                <button 
                                    className="btn btn-link"
                                    onClick={() => {
                                        this.state.JXSXSTJ.collapsed = !this.state.JXSXSTJ.collapsed;
                                        this.forceUpdate();
                                    }}
                                >{
                                    this.state.JXSXSTJ.collapsed ? 'more +': 'less -'
                                }</button>
                            )}
                        >
                            <div style={{padding: '24px'}}>
                                <Table columns={AdminStatisticPanel.JXSXSColumns} dataSource={this.state.JXSXSTJ.sales}/>
                            </div>
                        </Card>
                        <div style={{height: '24px'}}/>
                        <Card 
                            title="回访统计" 
                            bodyStyle={{overflowY: 'hidden', maxHeight: this.state.HFTJ.collapsed ? '0' : '918px', padding: 0, transition: 'max-height 0.3s cubic-bezier(0,0, 0, 1)'}}
                            extra={(
                                <button 
                                    className="btn btn-link"
                                    onClick={() => {
                                        this.state.HFTJ.collapsed = !this.state.HFTJ.collapsed;
                                        this.forceUpdate();
                                    }}
                                >{
                                    this.state.HFTJ.collapsed ? 'more +': 'less -'
                                }</button>
                            )}
                        >
                            <div style={{padding: '24px'}}>
                                <Row>
                                    <Col span={12}>
                                        <div className="key-value">
                                            <span className="key">7日内回访总人数</span>
                                            <span className="value">{this.state.HFTJ.weekReturnVisits}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">7日内回访总时长</span>
                                            <span className="value">{timeLengthStr(this.state.HFTJ.weekReturnLength)}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">7日内回访后消费金额</span>
                                            <span className="value">￥{this.state.HFTJ.weekReturnConsumption}</span>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="key-value">
                                            <span className="key">30日内回访总人数</span>
                                            <span className="value">{this.state.HFTJ.monthReturnVisits}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">30日内回访总时长</span>
                                            <span className="value">{timeLengthStr(this.state.HFTJ.monthReturnLength)}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">30日内回访后消费金额</span>
                                            <span className="value">￥{this.state.HFTJ.monthReturnConsumption}</span>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="key-value">
                                    <span className="key">职员回访详情：</span>
                                </div>
                                <Table columns={AdminStatisticPanel.HFTJColumns} dataSource={this.state.HFTJ.returnVisits}/>
                            </div>
                        </Card>
                        <div style={{height: '24px'}}/>
                        <Card 
                            title="会员统计" 
                            bodyStyle={{overflowY: 'hidden', maxHeight: this.state.HYTJ.collapsed ? '0' : '600px', padding: 0, transition: 'max-height 0.3s cubic-bezier(0,0, 0, 1)'}}
                            extra={(
                                <button 
                                    className="btn btn-link"
                                    onClick={() => {
                                        this.state.HYTJ.collapsed = !this.state.HYTJ.collapsed;
                                        this.forceUpdate();
                                    }}
                                >{
                                    this.state.HYTJ.collapsed ? 'more +': 'less -'
                                }</button>
                            )}
                        >
                            <div style={{padding: '24px'}}>
                                <Row>
                                    <Col span={12}>
                                        <div className="key-value">
                                            <span className="key">今日到店非会员数</span>
                                            <span className="value">{this.state.HYTJ.todayNonVip}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">今日升级会员数</span>
                                            <span className="value">{this.state.HYTJ.todayVipPromotion}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">日升级会员率</span>
                                            <span className="value">{this.state.HYTJ.todayVipPromotionRate * 100}%</span>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="key-value">
                                            <span className="key">月升级会员数量</span>
                                            <span className="value">{this.state.HYTJ.monthVipPromotion}</span>
                                        </div>
                                        <div className="key-value">
                                            <span className="key">本月升级会员数</span>
                                            <span className="value">{this.state.HYTJ.monthVipPromotionRate * 100}%</span>
                                        </div>
                                    </Col>
                                </Row>
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
        },
        {
            title: '总额',
            key: 'totalAmount',
            render: (e, row) => (
                <span style={{color: '#E85B53'}}>￥{row.amount * row.price}</span>
            )
        }
    ];

    static JXSXSColumns = [
        {
            title: '#',
            key: 'id',
            dataIndex: 'id'
        },
        {
            title: '姓名',
            key: 'name',
            dataIndex: 'name'
        },
        {
            title: '电话',
            key: 'phoneNumber',
            dataIndex: 'phoneNumber'
        },
        {
            title: '门店地址',
            key: 'location',
            dataIndex: 'location'
        },
        {
            title: '今日销售额',
            key: 'todaySalesAmount',
            dataIndex: 'todaySalesAmount'
        },
        {
            title: '本月销售额',
            key: 'monthSalesAmount',
            dataIndex: 'monthSalesAmount'
        }
    ];

    static HFTJColumns = [
         {
            title: '#',
            key: 'id',
            dataIndex: 'id'
        },
        {
            title: '姓名',
            key: 'name',
            dataIndex: 'name'
        },
        {
            title: '用户名',
            key: 'username',
            dataIndex: 'username'
        },
        {
            title: '本月回访人数',
            key: 'monthVisits',
            render: (e, row) => (row.month.visits)
        },
        {
            title: '本月回访时长',
            key: 'monthLength',
            render: (e, row) => (timeLengthStr(row.month.length))
        },
        {
            title: '总回访人数',
            key: 'allVisits',
            render: (e, row) => (row.all.visits)
        },
        {
            title: '总回访时长',
            key: 'allLength',
            render: (e, row) => (timeLengthStr(row.all.length))
        },
    ]
}