import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {LoginPane} from './views/login-panel';
import {ConsoleFrame} from './views/console-frame';
import {ConsoleNavList} from './views/console-nav-list';
import {CustomerListPanel} from './views/titled-display-panel';
window.components = {};

window.renderLoginPane = () => {
    window.components.loginPane = ReactDOM.render(
        <LoginPane/>,
        document.getElementById('login-panel-container')
    )
};

window.renderConsoleFrame = (postCallBack) => {
    window.components.consoleFrame = ReactDOM.render(
        <ConsoleFrame logoUrl="../../static/img/hengshun-logo.png" didMount={postCallBack}/>,
        document.getElementById('body')
    );
};

window.renderConsoleNavList = () => {
    const navData = [
        {
            iconSpan: (<span className="glyphicon glyphicon-user nav-icon" />),
            onclick: () => {
                alert('啊，我被点了');
            },
            href: '#',
            text: '喵喵喵？',
            navType: 'link' // link or action
        },
        {
            iconSpan: (<span className="glyphicon glyphicon-user nav-icon" />),
            onclick: () => {
                alert('???');
            },
            href: '#',
            text: '喵喵喵？',
            navType: 'action' // link or action
        }
    ];
    window.components.consoleNavList = ReactDOM.render(
        <ConsoleNavList navData={navData}/>,
        document.getElementById('side-body')
    );
};

window.renderCustomerListPanel = () => {
    ReactDOM.render(
        <CustomerListPanel/>,
        document.getElementById('main-body')
    );
}