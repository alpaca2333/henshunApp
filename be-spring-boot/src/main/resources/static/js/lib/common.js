/**
 * Created by alpaca on 2017/3/4.
 */

 import {message} from 'antd';

export function getStatusString(status) {
    switch (status) {
        case 0:
            return 'Reserved';
        case 1:
            return 'Checked In';
        case 2:
            return 'Cancelled';
        default:
            return status;
    }
}

export function getDateTimeString(date) {
    if (!date) return '';
    if (typeof date === 'number') date = new Date(date);
    if (typeof date === 'string') return date;
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

Date.prototype.format = function(format){
    const o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    };

    if(/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }

    for(let k in o) {
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
};

export const typeSelectOptions = [
    {value: 'admin', label: '系统管理员'},
    {value: 'clerk', label: '职员'},
    {value: 'storeOwner', label: '店主'},
];

export function showAndHide(div, displayMode) {
    div.style.display = displayMode;
    setTimeout(() => {
        div.style.display = "none";
    }, 5000);
}

export function addKeyToArray(iterable) {
    const base = new Date() + 0;
    for (let i in iterable) {
        iterable[i].key = base + i + '';
    }
}

export function filter(arr, filter) {
    return arr.reduce((pv, cv, i, arr) => {
        if (filter(cv)) pv.push(cv);
        return pv;
    }, []);
}

export function timeLengthStr(seconds) {
    const hours = parseInt(seconds / 3600);
    seconds -= 3600 * hours;
    const minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    return (hours ? hours + '小时 ' : '') + (minutes ? minutes + '分钟 ' : '') + (seconds + '秒');
}

module.exports.apis = {
    getUsers: '/api/users',
    deleteUser: (id) => '/api/users/' + id,
    getUser: (id) =>  '/api/user/' + id,
    updateUser: (id) =>  '/api/user/' + id,
    updatePassword: (userId) => '/api/user/' + userId + '/password',
    addUser: '/api/users',
    getBaby: (babyId) => '/api/baby/' + babyId,
    updateBaby: (babyId) => '/api/baby/' + babyId
}

export function showNetworkErrorMessage() {
    message.error('无法连接到网络。请检查网络后重试。');
}

export function showDataFormatErrorMessage() {
    message.error('数据格式错误。');
}

export function showPoorPrivillegeMessage() {
    message.error('没有完成这项操作的权限。');
}

export function showServerErrorMessage() {
    message.error('服务器发生了错误。');
}

export function showConnectionFailedMessage() {
    message.error('无法连接到服务器，请稍后重试');
}