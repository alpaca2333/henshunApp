import 'babel-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {LoginPane} from './views/login-panel';
import {ConsoleFrame} from './views/console-frame';
import {ConsoleNavList} from './views/console-nav-list';
import {CustomerListPanel} from './views/customer-list-panel';
import {CustomerInfoPanel} from './views/customer-info-panel';
import {Dialog} from './views/dialog';
import {UserListPanel} from './views/user-list-panel';
import {UserInfoPanel} from './views/user-info-panel';
import {UserAddPanel} from "./views/user-add-panel";

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
window.renderStoreNavList = () => {
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
            text: '个人信息',
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
    window.components.customerInfoPanel = ReactDOM.render(
        <CustomerInfoPanel/>,
        document.getElementById('main-body')
    )
};

window.initDialog = () => {
    let background = document.getElementById('modal-background');
    let panel = document.getElementById('modal-panel');
    if (!background || !panel) {
        if (!background) {
            background = document.createElement('div');
            background.id = "modal-background";
            document.body.appendChild(background);
        }
        panel = document.createElement('div');
        panel.id = "modal-panel";
        background.appendChild(panel);
    }
    window.components.dialog = ReactDOM.render(
        <Dialog/>,
        panel
    );
};

window.showDialog = (title, contentDiv) => {
    window.components.dialog.setState({
        title: title,
        dialogBody: contentDiv
    });
    const background = document.getElementById('modal-background');
    const panel = document.getElementById('modal-panel');
    background.style.display = "block";
    background.style.animation = "fadeIn 0.1s ease-out";
    panel.style.animation = "zoomIn 0.3s ease";
};

window.closeDialog = () => {
    const background = document.getElementById('modal-background');
    const panel = document.getElementById('modal-panel');
    background.style.animation = "fadeOut 0.1s ease-out forwards";
    panel.style.animation = "zoomOut 0.3s ease forwards";
    setTimeout(() => {
        background.style.display = "none";
    }, 300);
};

window.renderUserListPanel = () => {
    ReactDOM.render(
        <UserListPanel/>,
        document.getElementById('main-body')
    );
};

window.renderAdminNavList = () => {
    const navData = [
        {
            iconSpan: (<span className="glyphicon glyphicon-user nav-icon" />),
            onclick: () => {
                window.renderUserListPanel();
            },
            text: '所有用户',
            navType: 'action'
        },
        {
            iconSpan: (<span className="glyphicon glyphicon-plus-sign nav-icon"/>),
            onclick: () => {
                window.renderNewUserPanel();
            },
            text: '新增用户',
            navType: 'action'
        }
    ];
    window.components.consoleNavList = ReactDOM.render(
        <ConsoleNavList navData = {navData}/>,
        document.getElementById('side-body')
    );
};

window.renderUserInfoPanel = () => {
    window.components.userInfoPanel = ReactDOM.render(
        <UserInfoPanel/>,
        document.getElementById('main-body')
    );
};

window.renderNewUserPanel = () => {
    ReactDOM.render(
        <UserAddPanel/>,
        document.getElementById('main-body')
    )
};

