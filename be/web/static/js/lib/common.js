/**
 * Created by alpaca on 2017/3/4.
 */
import * as $ from 'jquery';

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

const IMG_danrenjian = '../../../static/img/danrenjian.jpg';
const IMG_shuangrenjian = '../../../static/img/shuangrenjian.jpg';
const IMG_dachuangjian = '../../../static/img/dachuangjian.jpg';

module.exports.IMG_danrenjian = IMG_danrenjian;
module.exports.IMG_shuangrenjian = IMG_shuangrenjian;
module.exports.IMG_dachuangjian = IMG_dachuangjian;
