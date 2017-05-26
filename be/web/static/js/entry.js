import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {LoginForm} from './views/login-form';
import {SideNavBar} from './views/side-nav-bar';
import {VipCenterPersonalPane} from './views/vip-center-personal-info';
import {VipCenterProfilePane} from './views/vip-center-profile';
import {VipCenterOrder} from './views/vip-center-orders';
import {VipOrderModal} from './views/order-modal';
import {IndexSearch} from './views/index-search';
import {IndexSearchResult} from './views/index-search-result';
import {HotelDetailModal} from './views/hotel-detail-modal';
import {HwManagerMessageModal} from './views/hw-manager-message-modal';
import {HwManagerMessagePane} from './views/hw-manager-message-pane';
import {HwManagerFinancial} from './views/hw-manager-financial';
import {HotelOwnerMyHotel} from './views/hotel-owner-my-hotel'
import {HotelOwnerOrders} from './views/hotel-owner-orders';
import {HotelOwnerOrderModal} from './views/hotel-owner-order-modal';
import {RegisterForm} from './views/register-form';
import {RechargeModal} from './views/recharge-modal';
import {ReserveModal} from './views/reserve-modal';
import {HotelInfoModal} from './views/hotel-info-modal';
import {RoomSchedulePane} from './views/room-schedule-pane'
import {RoomSelectModal} from './views/room-select-modal';

const components = window.components = {};
const Render = window.render = {};

Render['renderLoginForm'] = function renderLoginForm() {
    const divLogin = document.getElementById('login-form-container');
    components['loginForm'] = ReactDOM.render(
        <LoginForm redirect="/vip/center" />, divLogin
    );
};

Render['renderRegisterForm'] = function renderRegisterForm() {
    components['registerForm'] = ReactDOM.render(
        <RegisterForm action="/api/vip/register"/>,
        document.getElementById('register-form-container')
    )
};

Render['renderVipCenterSideNav'] = function renderVipCenterSideNav() {
    const navData = [
        {
            text: 'Personal',
            action: Render.renderVipCenterPersonalInfo
        },
        {
            text: 'Profile',
            action: Render.renderVipCenterProfile
        },
        {
            text: 'Orders',
            action: Render.renderVipCenterOrders
        }
    ];
    components['vipCenterSideNav'] = ReactDOM.render(
        <SideNavBar navs={navData}/>,
        document.getElementById('vip-center-side-nav-container')
    );
};


Render['renderVipCenterPersonalInfo'] = function renderVipCenterPersonalInfo() {
    components['vipCenterDisplayPanel'] = ReactDOM.render(<VipCenterPersonalPane/>, document.getElementById('vip-center-display-panel'));
};

Render['renderVipCenterProfile'] = function renderVipCenterProfile() {
    components['vipCenterProfile'] = ReactDOM.render(
        <VipCenterProfilePane/>,
        document.getElementById('vip-center-display-panel')
    );
};

Render['renderVipCenterOrders'] = function renderVipCenterOrders() {
    components['vipCenterOrders'] = ReactDOM.render(
        <VipCenterOrder/>,
        document.getElementById('vip-center-display-panel')
    );
};

Render['renderOrderModal'] = function renderOrderModal() {
    components['orderModal'] = ReactDOM.render(
        <VipOrderModal id="orderModal"/>,
        document.getElementById('order-modal-container')
    );
};

Render['renderIndexSideNav'] = function renderIndexSideNav() {
    const navData = [
        {
            text: 'Reservation',
            action: Render.renderIndexSearch
        },
        {
            text: 'Hotels'
        }
    ];
    components['indexSideNavBar'] = ReactDOM.render(
        <SideNavBar navs={navData}/>,
        document.getElementById('index-side-nav-container')
    );
};

Render['renderIndexSearch'] = function renderIndexSearch() {
    components['indexSearch'] = ReactDOM.render(
        <IndexSearch/>,
        document.getElementById('index-search-container')
    );
};

Render['renderIndexSearchResult'] = function renderIndexSearchResult() {
    components['indexSearchResult'] = ReactDOM.render(
        <IndexSearchResult/>,
        document.getElementById('index-search-result-container')
    );
};

Render['renderIndexHotelDetailModal'] = function renderIndexHotelDetailModal() {
    components['indexHotelDetailModal'] = ReactDOM.render(
        <HotelDetailModal/>,
        document.getElementById('index-hotel-detail-modal-container')
    );
};

Render['renderAdminLoginForm'] = function renderAdminLoginForm() {
    components['adminLoginForm'] = ReactDOM.render(
        <LoginForm action="/api/admin/login" redirect="/admin"/>,
        document.getElementById('admin-login-form-container')
    );
};

Render['renderHotelOwnerSideNav'] = function renderHotelOwnerSideNav() {
    const navData = [
        {
            text: 'Messages',
            action: Render.renderHotelOwnerMessagePane
        },
        {
            text: 'My Hotel',
            action: Render.renderHotelOwnerMyHotel
        },
        {
            text: 'Rooms & Schedules',
            action: Render.renderRoomSchedules
        },
        {
            text: 'Orders',
            action: Render.renderHotelOwnerOrders
        }
    ];
    components['hotelOwnerSideNav'] = ReactDOM.render(
        <SideNavBar navs={navData}/>,
        document.getElementById('admin-side-nav-container')
    );
};

Render['renderHwManagerSideNav'] = function renderHwManagerSideNav() {
    const navData = [
        {
            text: 'Messages',
            action: Render.renderHwManagerMessagePane
        },
        {
            text: 'Financial',
            action: Render.renderHwManagerFinancial
        }
    ];
    components['hwManagerSideNav'] = ReactDOM.render(
        <SideNavBar navs={navData}/>,
        document.getElementById('admin-side-nav-container')
    );
};

Render['renderHwManagerMessageModal'] = function renderHwManagerMessageModal() {
    components['adminMessageModal'] = ReactDOM.render(
        <HwManagerMessageModal/>,
        document.getElementById('message-modal-container')
    )
};

Render['renderHwManagerMessagePane'] = function renderHwManagerMessagePane() {
    components['hwManagerMessagePane'] = ReactDOM.render(
        <HwManagerMessagePane/>,
        document.getElementById('admin-display-containter')
    );
};

Render['renderHwManagerFinancial'] = function renderHwManagerFinancial() {
    components['hwManagerFinancial'] = ReactDOM.render(
        <HwManagerFinancial/>,
        document.getElementById('admin-display-containter')
    );
};

Render['renderHotelOwnerMessagePane'] = function renderHotelOwnerMessagePane() {
    components['hotelOwnerMessagePane'] = ReactDOM.render(
        <HwManagerMessagePane/>,
        document.getElementById('admin-display-containter')
    );
};

Render['renderHotelOwnerMyHotel'] = function renderHotelOwnerMyHotel() {
    components['hotelOwnerMessagePane'] = ReactDOM.render(
        <HotelOwnerMyHotel/>,
        document.getElementById('admin-display-containter')
    );
};

Render['renderHotelOwnerOrders'] = function renderHotelOwnerOrders() {
    components['hotelOwnerOrders'] = ReactDOM.render(
        <HotelOwnerOrders/>,
        document.getElementById('admin-display-containter')
    );
};


Render['renderHotelOwnerOrderModal'] = function renderHotelOwnerOrderModal() {
    components['hotelOwnerOrderModal'] = ReactDOM.render(
        <HotelOwnerOrderModal/>,
        document.getElementById('order-modal-container')
    );
};

Render['renderRechargeModal'] = function renderRechargeModal() {
    components['rechargeModal'] = ReactDOM.render(
        <RechargeModal/>,
        document.getElementById('recharge-modal-container')
    );
};

Render['renderIndexReserveModal'] = function renderIndexReserveModal() {
    components['indexReserveModal'] = ReactDOM.render(
        <ReserveModal/>,
        document.getElementById('reserve-modal-container')
    );
};

Render['renderHotelInfoModal'] = () => {
    components['hotelInfoModal'] = ReactDOM.render(
        <HotelInfoModal/>,
        document.getElementById('hotel-info-modal-container')
    );
};

Render['renderRoomSchedules'] = () => {
    components['roomSchedules'] = ReactDOM.render(
        <RoomSchedulePane/>,
        document.getElementById('admin-display-containter')
    );
};

Render['renderRoomSelectModal'] = () => {
    components['roomSelectModal'] = ReactDOM.render(
        <RoomSelectModal/>,
        document.getElementById('room-select-modal-container')
    );
};