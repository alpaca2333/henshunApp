/**
 * 控制台页面的基础框架。
 * 主要分为两部分，侧边栏和显示区。
 * 侧边栏和显示区分别有一个head和body。
 * Created by alpaca on 17-6-13.
 */

import * as React from 'react';

export class ConsoleFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        logoUrl: '../../static/img/hengshun-logo.png',
        didMount: () => { }
    };

    render() {
        return (
            <div style={{height: '100%', width: '100%'}}>
                <div id="side-panel">
                    <div className="control-header" id="side-header">
                        <img src={this.props.logoUrl} id="logo"/>
                    </div>
                    <div className="no-padding" id="side-body">
                    </div>
                </div>
                <div id="main-panel">
                    <div className="control-header" id="main-header">
                    </div>
                    <div id="main-body">
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        if (typeof this.props.didMount === 'function') {
            this.props.didMount.call(this);
        }
    }
}