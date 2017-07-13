/**
 * Created by alpaca on 2017/6/25.
 */
import * as React from 'react';
import {DatePicker} from 'antd';
import moment from 'moment';

export class PeEditDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = PeEditDialog.initialState;
    }

    static initialState = {
        pes: [
            {
                key: '肝功能1',
                value: '肾功能1'
            },
            {
                key: '肝功能2',
                value: '肾功能2'
            },
            {
                key: '肝功能3',
                value: '肾功能3'
            }
        ],
        time: '2015-01-01'
    };

    render() {
        const pes = [];
        for (let i in this.state.pes)
        {
            const pe = this.state.pes[i];
            if (!pe) continue;
            pes.push(
                <div className="pe-record" key={'pes#' + i}>
                    {pe.editing ?
                        <input ref={'key' + i} type="text" className="key" placeholder="项目名称" defaultValue={this.state.pes[i].key}/> :
                        <span className="key">{pe.key}</span>
                    }
                    {pe.editing ?
                        <input ref={'value' + i} type="text" className="value" placeholder="项目结果描述"  defaultValue={this.state.pes[i].value}/> :
                        <span className="value">{pe.value}</span>
                    }
                    {pe.editing ?
                        <button className="btn btn-link" onClick={() => {
                            this.state.pes[i].editing = false;
                            this.state.pes[i].key = this.refs['key' + i].value;
                            this.state.pes[i].value = this.refs['value' + i].value;
                            this.forceUpdate();
                        }}>
                            <span className="glyphicon glyphicon-ok"/>
                        </button> :
                        <span>
                            <button className="btn btn-link" onClick={() => {
                                this.state.pes[i].editing = true;
                                this.forceUpdate();
                            }}>
                                <span className="glyphicon glyphicon-pencil"/>
                            </button>
                            <button className="btn btn-link" onClick={() => {
                                for (let j = parseInt(i); j < this.state.pes.length - 1; ++j) {
                                    this.state.pes[j] = this.state.pes[j + 1];
                                }
                                this.state.pes.pop();
                                this.forceUpdate();
                            }}>
                                <span className="glyphicon glyphicon-minus"/>
                            </button>
                        </span>
                    }
                </div>
            )
        }
        return (
            <div>
                <div className="pe-record">
                    <span className="key">日期：</span>
                    <span className="value">
                        <DatePicker defaultValue={moment(new Date())}/>
                    </span>
                </div>
                {pes}
                <button className="btn btn-link" onClick={() => {
                    this.state.pes.map((element, i, a) => {
                        element.editing = false;
                        return element;
                    });
                    this.state.pes.push({
                        key: '',
                        value: '',
                        editing: true
                    });
                    this.forceUpdate();
                }}>
                    <span className="glyphicon glyphicon-plus" style={{padding: 0, fontSize: '12px'}}/>
                </button>
                <div className="dialog-footer" style={{textAlign: 'center'}}>
                    <button
                        className="btn btn-primary"
                        onClick={
                            () => {
                                window.closeDialog();
                                for (let i in this.state.pes) {
                                    if (this.state.pes[i].editing) {
                                        this.state.pes[i].key = this.refs['key' + i].value;
                                        this.state.pes[i].value = this.refs['value' + i].value;
                                        this.state.pes[i].editing = false;
                                    }
                                }
                                this.forceUpdate();
                            }
                        }>保存</button>
                    <button
                        className="btn btn-default" style={{marginLeft: '36px'}}
                        onClick={
                            window.closeDialog
                        }>取消</button>
                </div>
            </div>
        )
    }
}