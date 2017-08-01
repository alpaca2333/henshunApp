/**
 * Created by alpaca on 2017/3/4.
 */

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