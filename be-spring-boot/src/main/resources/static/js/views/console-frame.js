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
        this.state = ConsoleFrame.initialState;
        this.updated = this.props.updated.bind(this);
    }

    static defaultProps = {
        logoUrl: '../../static/img/hengshun-logo.png',
        updated: () => { }, // only called the first time the element is created.
        didMount: () => { }
    };

    static initialState = {
        backStack: [
            // {
            //     text: '点我就消失',
            //     operation: () => {
            //         alert('再见');
            //     },
            //     state: {}
            // }
        ]
    };

    render() {
        let returnButton = '';
        if (this.state.backStack.length > 0) {
            const backInfo = this.state.backStack[this.state.backStack.length - 1];
            returnButton = (
                <a
                    ref="backButton"
                    className="btn btn-link"
                    style={{marginLeft: '32px'}}
                    onClick={() => {
                        backInfo.operation();
                        this.state.backStack.pop();
                        this.forceUpdate();
                    }}
                >
                    <span className="backText" style={{marginLeft: '12px'}}>{'<< ' + backInfo.text}</span>
                </a>
            )
        }
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
                        {returnButton}
                        <span style={{float: 'right'}}>123</span>
                    </div>
                    <div id="main-body">
                    </div>
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        if (typeof this.updated === 'function') {
            this.updated.call(this);
            this.updated = null;
        }
    }

    componentDidMount() {
        if (typeof this.props.didMount === 'function') {
            this.props.didMount();
        }
    }

    pushBackOperation(text, operation) {
        this.state.backStack.push({
            text: text,
            operation: operation
        });
        this.forceUpdate();
    }

    back() {
        const backBut = this.refs.backButton;
        if (backBut) {
            backBut.click();
        }
    }

    clearBackStack() {
        this.setState({
            backStack: []
        })
    }

    updated() {}
}