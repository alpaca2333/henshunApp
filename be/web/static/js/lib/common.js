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