/**
 * 控制台页面的基础框架。
 * 主要分为两部分，侧边栏和显示区。
 * 侧边栏和显示区分别有一个head和body。
 * Created by alpaca on 17-6-13.
 */

import * as React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import request from 'superagent';
import {apis} from '../lib/common';

export class ConsoleFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = ConsoleFrame.initialState;
        this.updated = this.props.updated.bind(this);
        this.update = this.update.bind(this);
    }

    static defaultProps = {
        logoUrl: '../../static/img/hengshun-logo.png',
        updated: () => { }, // only called the first time the element is created.
        didMount: () => { },
        logoutRedirect: '/login'
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
        ],
        user: {
            id: 1,
            username: 123,
            name: '王女士'
        }
    };

    render() {
        const userMenu = (
            <Menu>
                <Menu.Item key="0">
                    <button className="btn btn-link" onClick={window.renderUserInfoPanel.bind(this, this.state.user.id)}>个人信息</button>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="1">
                    <button className="btn btn-link" onClick={() => {
                        request.get(apis.logout).end(() => {this.update()})
                    }}>注销</button>
                </Menu.Item>
            </Menu>
        );

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
                        {this.state.user ?
                            <div style={{float: 'right', marginRight: 30}}>
                                <Dropdown overlay={userMenu}>
                                    <a className="ant-dropdown-link" href="#">
                                        {this.state.user.name} ({this.state.user.username}) <Icon type="down" />
                                    </a>
                                </Dropdown>
                            </div> :
                            <div style={{float: 'right', marginRight: 30}}>
                                未登录
                            </div>
                        }
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
        this.update();
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

    update() {
        request.get(apis.currentUser).end((err, resp) => {
            if (err) {
                showConnectionFailedMessage();
                return;
            }
            if (resp.error) {
                message.warning(resp.error.status + ' ' + resp.error.message);
                return;
            }
            const result = resp.body;
            if (result.error === 1) {
                this.setState({
                    user: null
                })
            }
            this.setState({
                user: result.data
            })
        })
    }
}