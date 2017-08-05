import 'babel-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Spin} from 'antd';
import {LoginPane} from './views/login-panel';
import {ConsoleFrame} from './views/console-frame';
import {ConsoleNavList} from './views/console-nav-list';
import {CustomerListPanel} from './views/customer-list-panel';
import {CustomerInfoPanel} from './views/customer-info-panel';
import {Dialog} from './views/dialog';
import {UserListPanel} from './views/user-list-panel';
import {AdminUserInfoPanel} from './views/admin-user-info-panel';
import {UserInfoPanel} from './views/user-info-panel';
import {UserAddPanel} from './views/user-add-panel';
import {PaymentDetailPanel} from './views/payment-detail-panel';
import {GroupBuyingListPanel} from './views/group-buying-list-panel';
import {GroupBuyingInfoPanel} from './views/group-buying-info-panel';
import {StoreOwnerListPanel} from './views/store-owner-list-panel';
import {StoreStatisticPanel} from './views/store-statistic-panel';
import {CustomerReturnVisitListPanel} from './views/customer-return-visit-list-panel';
import {AdminStatisticPanel} from './views/admin-statistic-panel';
import {InfoManagingPanel} from './views/info-managing-panel';
import {CrowdFundingInfoPanel} from "./views/crowd-funding-info-panel";

ReactDOM.render(
    <div>
        <Spin size="large"/>
    </div>,
    document.getElementById('body'));

window.components = {};

// 渲染登录页面
window.renderLoginPane = () => {
    return window.components.loginPane = ReactDOM.render(
        <LoginPane/>,
        document.getElementById('login-body')
    )
};

// 渲染控制台框架div，postCallback为框架渲染完成后需要执行的操作。
window.renderConsoleFrame = (postCallBack) => {
    return window.components.consoleFrame = ReactDOM.render(
        <ConsoleFrame logoUrl='../../static/img/hengshun-logo.png' didMount={postCallBack}/>,
        document.getElementById('body')
    );
};

// 渲染控制台导航栏列表
window.renderStoreNavList = () => {
    const navData = [
        {
            iconSpan: (<span className='glyphicon glyphicon-user nav-icon' />),
            onclick: () => {
                window.renderCustomerListPanel();
            },
            href: '#',
            text: '我的顾客',
            navType: 'action' // link or action
        },
        {
            iconSpan: (<span className='glyphicon glyphicon-gift nav-icon' />),
            onclick: () => {
                window.renderGroupBuyingPanel();
            },
            href: '#',
            text: '拼团购买',
            navType: 'action' // link or action
        },
        {
            iconSpan: (<span className='glyphicon glyphicon-signal nav-icon' />),
            onclick: () => {
                window.renderStoreStatisticPanel();
            },
            href: '#',
            text: '销售统计',
            navType: 'action' // link or action
        }
    ];
    return window.components.consoleNavList = ReactDOM.render(
        <ConsoleNavList navData={navData}/>,
        document.getElementById('side-body')
    );
};

window.renderClerkNavList = () => {
    const navData = [
        {
            iconSpan: (<span className='glyphicon glyphicon-user nav-icon' />),
            text: '所有顾客',
            navType: 'action', // link or action
            onclick: () => {
                window.renderCustomerReturnVisitListPanel();
            }
        },
        {
            iconSpan: (<span className='glyphicon glyphicon-user nav-icon' />),
            text: '门店客户',
            navType: 'action', // link or action
            onclick: () => {
                window.renderStoreOwnerListPanel();
            }
        },
        {
            iconSpan: (<span className='glyphicon glyphicon-signal nav-icon' />),
            text: '销售统计',
            navType: 'action', // link or action
            onclick: () => {
                window.renderCustomerReturnVisitListPanel();
            }
        },

    ];
    return window.components.consoleNavList = ReactDOM.render(
        <ConsoleNavList navData={navData}/>,
        document.getElementById('side-body')
    );
};

window.renderGroupBuyingPanel = () => {
    return ReactDOM.render(
        <GroupBuyingListPanel/>,
        document.getElementById('main-body')
    );
};

// 渲染顾客列表div
window.renderCustomerListPanel = () => {
    return ReactDOM.render(
        <CustomerListPanel/>,
        document.getElementById('main-body')
    );
};

// 渲染顾客详细信息div
window.renderCustomerInfoPanel = (showReturnVisit, customerId) => {
    return window.components.customerInfoPanel = ReactDOM.render(
        <CustomerInfoPanel showReturnVisit={showReturnVisit} customerId={customerId}/>,
        document.getElementById('main-body')
    )
};

window.initDialog = () => {
    let background = document.getElementById('modal-background');
    let panel = document.getElementById('modal-panel');
    if (!background || !panel) {
        if (!background) {
            background = document.createElement('div');
            background.id = 'modal-background';
            document.body.appendChild(background);
        }
        panel = document.createElement('div');
        panel.id = 'modal-panel';
        background.appendChild(panel);
    }
    return window.components.dialog = ReactDOM.render(
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
    background.style.display = 'block';
    background.style.animation = 'fadeIn 0.1s ease-out';
    panel.style.animation = 'zoomIn 0.3s ease';
};

window.closeDialog = () => {
    const background = document.getElementById('modal-background');
    const panel = document.getElementById('modal-panel');
    background.style.animation = 'fadeOut 0.1s ease-out forwards';
    panel.style.animation = 'zoomOut 0.3s ease forwards';
    setTimeout(() => {
        background.style.display = 'none';
    }, 300);
};

window.renderUserListPanel = () => {
    return ReactDOM.render(
        <UserListPanel/>,
        document.getElementById('main-body')
    );
};

window.renderAdminNavList = () => {
    const navData = [
        {
            iconSpan: (<span className='glyphicon glyphicon-user nav-icon' />),
            onclick: () => {
                window.renderUserListPanel();
            },
            text: '所有用户',
            navType: 'action'
        },
        {
            iconSpan: (<span className='glyphicon glyphicon-plus-sign nav-icon'/>),
            onclick: () => {
                window.renderNewUserPanel();
            },
            text: '新增用户',
            navType: 'action'
        },
        {
            iconSpan: (<span className='glyphicon glyphicon-signal nav-icon'/>),
            onclick: () => {
                window.renderAdminStatisticPanel();
            },
            text: '销售统计',
            navType: 'action'
        },
        {
            iconSpan: (<span className='glyphicon glyphicon-list-alt nav-icon'/>),
            onclick: () => {
                window.renderInfoManagingPanel();
            },
            text: '信息管理',
            navType: 'action'
        }
    ];
    return window.components.consoleNavList = ReactDOM.render(
        <ConsoleNavList navData = {navData}/>,
        document.getElementById('side-body')
    );
};

window.renderAdminUserInfoPanel = (userId) => {
    return window.components.userInfoPanel = ReactDOM.render(
        <AdminUserInfoPanel id={userId}/>,
        document.getElementById('main-body')
    );
};

window.renderUserInfoPanel = (userId) => {
    return window.components.userInfoPanel = ReactDOM.render(
        <UserInfoPanel id={userId}/>,
        document.getElementById('main-body')
    );
};

window.renderNewUserPanel = () => {
    return ReactDOM.render(
        <UserAddPanel/>,
        document.getElementById('main-body')
    )
};

window.renderPaymentDetailPanel = () => {
    return ReactDOM.render(
        <PaymentDetailPanel/>,
        document.getElementById('main-body')
    )
};

window.renderGroupBuyingInfoPanel = () => {
    return ReactDOM.render(
        <GroupBuyingInfoPanel/>,
        document.getElementById('main-body')
    )
};

window.renderStoreOwnerListPanel = () => {
    return ReactDOM.render(
        <StoreOwnerListPanel/>,
        document.getElementById('main-body')
    );
};

window.renderStoreStatisticPanel = () => {
    return ReactDOM.render(
        <StoreStatisticPanel/>,
        document.getElementById('main-body')
    )
};

window.renderCustomerReturnVisitListPanel = () => {
    return ReactDOM.render(
        <CustomerReturnVisitListPanel/>,
        document.getElementById('main-body')
    );
};

window.renderAdminStatisticPanel = () => {
    return ReactDOM.render(
        <AdminStatisticPanel/>,
        document.getElementById('main-body')
    )
};

window.renderInfoManagingPanel = () => {
    ReactDOM.render(
        <InfoManagingPanel/>,
        document.getElementById('main-body')
    )
};

window.renderCrowdFundingInfoPanel = (id) => {
    ReactDOM.render(
        <CrowdFundingInfoPanel id={id}/>,
        document.getElementById('main-body')
    )
};

window.initDialog();