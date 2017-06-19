/**
 * Created by alpaca on 17-6-16.
 */

import * as React from 'react';

export class CustomerInfoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            customer: {
                id: 1,
                name: '马迹噶',
                register: '2015-01-01',
                gender: '男',
                phoneNumber: '15651656873'
            },
            babies: [
                {
                    id: 1,
                    name: '小马迹噶',
                    birthday: '2017-01-01',
                    gender: '女',
                    pe: [
                        {
                            time: '2017-01-02',
                            items: [
                                {
                                    title: '肝功能',
                                    value: '严重受损！！汝命危矣！！'
                                },
                                {
                                    title: '肾功能',
                                    value: '生活节制！！！'
                                }
                            ]
                        },
                        {
                            time: '2016-01-01',
                            items: [
                                {
                                    title: '肝功能',
                                    value: '正常！！！！'
                                },
                                {
                                    title: '肾功能',
                                    value: '正常！！！！'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
    
    render() {
        const babyInfos = [];
        for (let i in this.state.babies) {
            const baby = this.state.babies[i];
            babyInfos.push(
                <div className="key-value" key={'baby' + i + 'name'}>
                    <span className="key">姓名</span>
                    <span className="value">{baby.name}</span>
                </div>
            );
            babyInfos.push(
                <div className="key-value" key={'baby' + i + 'gender'}>
                    <span className="key">性别</span>
                    <span className="value">{baby.gender}</span>
                </div>
            );
            babyInfos.push(
                <div className="key-value" key={'baby' + i + 'birthday'}>
                    <span className="key">出生日期</span>
                    <span className="value">{baby.birthday}</span>
                </div>
            );
            const pes = [];
            for (let j in baby.pe) {
                const pe = baby.pe[j];
                const peItems = [];
                for (let k in pe.items) {
                    const peItem = pe.items[k];
                    peItems.push(
                        <div className="key-value pe-item" key={'baby' + i + 'pe' + j + 'item' + k}>
                            <span className="key">{peItem.title}</span>
                            <span className="value">{peItem.value}</span>
                        </div>
                    )
                }
                pes.push(
                    <div className="panel panel-default pe-panel" key={'baby' + i + 'pe' + j} >
                        <div className="panel-heading">
                            {pe.time}
                        </div>
                        <div className="panel-body" style={{paddingBottom: '0'}}>
                            {peItems}
                        </div>
                    </div>
                );
            }

            babyInfos.push(
                <div className="key-value" key={'baby' + i + 'pe'}>
                    <span className="key">体检报告</span>
                    <span className="value">
                            <div className="pe-report-container">
                                {pes}
                            </div>
                        </span>
                </div>
            )
        }
        return (
            <div className="display-panel">
                <div className="display-title">顾客信息</div>
                <div className="display-info">
                    <div className="key-value">
                        <span className="key">手机号</span>
                        <span className="value">{this.state.customer.phoneNumber}</span>
                    </div>
                    <div className="key-value">
                        <span className="key">性别</span>
                        <span className="value">{this.state.customer.gender}</span>
                    </div>
                    <div className="key-value">
                        <span className="key">注册时间</span>
                        <span className="value">{this.state.customer.register}</span>
                    </div>
                    <div className="key-value">
                        <span className="key">姓名</span>
                        <span className="value">{this.state.customer.name}</span>
                    </div>
                </div>
                <div className="display-title" style={{marginTop: '64px'}}>宝宝信息</div>
                <div className="display-info">
                    {babyInfos}
                    <hr/>
                </div>
            </div>
        )
    }
}