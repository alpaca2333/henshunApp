/**
 * Created by alpaca on 2017/3/5.
 */

import * as React from 'react';
import * as $ from 'jquery';
import {IndexSearchResult} from './index-search-result';

export class IndexSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
        this.collapse = this.collapse.bind(this);
        this.expend = this.expend.bind(this);
        this.search = this.search.bind(this);
    }

    getDefaultState() {
        return {
            status: 'search'
        }
    }
    
    render() {
        if (this.state.status === 'search') {
            return (
                <div className="panel" style={{height: '375px'}}>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div>
                                <p className="weak">到店日期：</p>
                                <input type="date" className="form-control" ref="dateArrive"/>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div>
                                <p className="weak">离店日期：</p>
                                <input type="date" className="form-control" ref="dateLeave"/>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <p className="weak">房间类型</p>
                            <div className="checkbox-inline">
                                <input type="checkbox" className="checkbox-inline" id="check1" ref="chkBiaozhun"/>
                                <label htmlFor="check1">标准间</label>
                            </div>
                            <div className="checkbox-inline" style={{marginLeft: '16px'}}>
                                <input type="checkbox" className="checkbox-inline" id="check2" ref="chkDachuang"/>
                                <label htmlFor="check2">大床间</label>
                            </div>
                            <div className="checkbox-inline" style={{marginLeft: '16px'}}>
                                <input type="checkbox" className="checkbox-inline" id="check3" ref="chkShuangren"/>
                                <label htmlFor="check3">双人间</label>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <p className="weak">酒店关键字</p>
                            <input className="form-control" type="text" ref="txtKey"/>
                        </li>
                        <li className="list-group-item">
                            <button className="btn btn-info" style={{paddingLeft: '30px', paddingRight: '30px'}} onClick={this.search}>搜索</button>
                        </li>
                    </ul>
                </div>
            );
        } else if (this.state.status === 'collapse') {
            return (
                <div className="panel" style={{width: '100%'}}>
                    <button className="btn btn-primary" onClick={this.expend} style={{width: '100%'}}>展开搜索 >></button>
                </div>
            )
        }
    }

    componentDidMount() {
        this.componentDidUpdate();
    }

    componentDidUpdate() {
        if (this.state.status === 'collapse') return;
        let today = new Date();
        this.refs.dateArrive.value = today.format('yyyy-MM-dd');
        today.setDate(today.getDate() + 1);
        this.refs.dateLeave.value = today.format('yyyy-MM-dd');
    }

    collapse() {
        this.setState({
            status: 'collapse'
        });
    }

    expend() {
        this.setState({
            status: 'search'
        });
    }

    search() {
        const C = window.components;
        const result = C.indexSearchResult;
        if (!result) return;
        else result.setSearchCondition(
            this.refs.dateArrive.value,
            this.refs.dateLeave.value,
            this.refs.txtKey.value
        );
        this.collapse();
    }
}