import * as React from 'react';
import {Table, Row, Col, Input} from 'antd';
import {addKeyToArray, timeLengthStr} from '../lib/common';
import {YesNoDialog} from './yes-no-dialog';

export class ReturnVisitPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = ReturnVisitPanel.initialState;
    }

    static initialState = {
        returnVisits: [
            {
                id: 1,
                startAt: '2015-01-01 10:10:10',
                endAt: '2015-01-01 11:10:11',
                summary: '这位顾客表示产品价格适中但是量太少了，可不可以加大量，不然很快就吃完了凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数',
                editing: false
            },
            {
                id: 1,
                startAt: '2015-01-01 10:10:10',
                endAt: null,
                summary: '',
                editing: false
            }
        ]
    }

    render() {
        const columns = [
            {
                title: '#',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '开始时间',
                key: 'startAt',
                dataIndex: 'startAt'
            },
            {
                title: '结束时间',
                key: 'endAt',
                dataIndex: 'endAt'
            },
            {
                title: '持续时间',
                key: 'period',
                render: (element, row) => {
                    const start = Date.parse(row.startAt);
                    const end = Date.parse(row.endAt);
                    return timeLengthStr((end - start) / 1000);
                }
            },
            {
                title: '摘要',
                key: 'summary',
                dataIndex: 'summary',
                render: (element, row) => (
                    element.substr(0, 20)
                )
            },
            {
                title: '状态',
                key: 'state',
                render: (e, row) => (
                    row.endAt ? '已结束' : '进行中'
                )
            }
        ];
        addKeyToArray(this.state.returnVisits);
        return (
            <div>
                <div className="display-title">
                    回访记录
                </div>
                <Table 
                    columns={columns} dataSource={this.state.returnVisits}
                    expandedRowRender={(e) => (
                        <div>
                            <Row>
                                <Col span={12}>
                                    <div className="key-value">
                                        <span className="key">开始时间</span>
                                        <span className="value">{e.startAt}</span>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="key-value">
                                        <span className="key">结束时间</span>
                                        <span className="value">{e.endAt ? e.endAt : '未结束'}</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <div className="key-value" style={{marginBottom: 12}}>
                                        <span className="key">摘要：</span>
                                    </div>
                                    <textarea placeholder="在此填写摘要..." style={{height: 200, width: 700, resize: 'none', border: 'none', outline: 'none', background: e.editing ? 'white' : 'transparent', padding: '8px'}} defaultValue={e.summary} disabled={!e.editing} onChange={(ev) => {e.summary = ev.target.value;}}/>
                                </Col>
                                <Col span={12}>
                                    {e.endAt ? '' : <button className="btn btn-primary" onClick={() => {
                                        window.showDialog('结束回访',
                                            <YesNoDialog content={
                                                '回访结束于 ' + new Date().format('yyyy-MM-dd hh:mm:ss') + ' ，是否继续？'
                                            } yesOption={() => {
                                                e.editing = false;
                                                e.endAt = new Date().format('yyyy-MM-dd hh:mm:ss');
                                                this.forceUpdate();
                                                window.closeDialog();
                                            }}/>
                                        );
                                        
                                    }}>结束</button>}
                                    {e.editing ? <button className="btn btn-primary" onClick={() => {
                                        e.editing = false;
                                        this.forceUpdate();
                                    }} style={{marginLeft: 12}}>保存</button> : ''}
                                    {e.editing ? '' : <button className="btn btn-primary" onClick={() => {
                                        e.editing = true;
                                        this.forceUpdate();
                                    }} style={{marginLeft: 12}}>编辑</button>}
                                </Col>
                            </Row>
                        </div>
                    )}
                />
                <button 
                    className="btn btn-primary"
                    onClick={() => {
                        window.showDialog('开始新回访',
                            <YesNoDialog content={
                                '将要于 ' + new Date().format('yyyy-MM-dd hh:mm:ss') + ' 开始一个新回访，是否继续？'
                            } yesOption={() => {
                                this.state.returnVisits.splice(0, 0, {
                                    id: '*',
                                    startAt: new Date().format('yyyy-MM-dd hh:mm:ss'),
                                    endAt: null,
                                    summary: '',
                                    editing: false
                                });
                                window.closeDialog();
                                this.forceUpdate();
                            }}/>
                        );
                    }}
                >开始回访</button>
            </div>
        )
    }
}