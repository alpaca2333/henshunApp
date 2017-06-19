import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {LoginPane} from './views/login-panel';
import {ConsoleFrame} from './views/console-frame';
import {ConsoleNavList} from './views/console-nav-list';
import {CustomerListPanel} from './views/customer-list-panel';
import {CustomerInfoPanel} from './views/customer-info-panel';

window.components = {};

// 渲染登录页面
window.renderLoginPane = () => {
    window.components.loginPane = ReactDOM.render(
        <LoginPane/>,
        document.getElementById('login-body')
    )
};

// 渲染控制台框架div，postCallback为框架渲染完成后需要执行的操作。
window.renderConsoleFrame = (postCallBack) => {
    window.components.consoleFrame = ReactDOM.render(
        <ConsoleFrame logoUrl="../../static/img/hengshun-logo.png" didMount={postCallBack}/>,
        document.getElementById('body')
    );
};

// 渲染控制台导航栏列表
window.renderConsoleNavList = () => {
    const navData = [
        {
            iconSpan: (<span className="glyphicon glyphicon-user nav-icon" />),
            onclick: () => {
                window.renderCustomerListPanel();
            },
            href: '#',
            text: '我的顾客',
            navType: 'action' // link or action
        },
        {
            iconSpan: (<span className="glyphicon glyphicon-user nav-icon" />),
            onclick: () => {
                window.renderCustomerInfoPanel();
            },
            href: '#',
            text: '大哥好多年',
            navType: 'action' // link or action
        }
    ];
    window.components.consoleNavList = ReactDOM.render(
        <ConsoleNavList navData={navData}/>,
        document.getElementById('side-body')
    );
};

// 渲染顾客列表div
window.renderCustomerListPanel = () => {
    ReactDOM.render(
        <CustomerListPanel/>,
        document.getElementById('main-body')
    );
};

// 渲染顾客详细信息div
window.renderCustomerInfoPanel = () => {
    ReactDOM.render(
        <CustomerInfoPanel/>,
        document.getElementById('main-body')
    )
};