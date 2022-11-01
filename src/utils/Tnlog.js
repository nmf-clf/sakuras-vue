/*
 * @Author: niumengfei
 * @Date: 2022-10-29 16:17:46
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-10-29 16:17:59
 */
/* 前端日志 */
class TnLog {
    prefixInteger(num, n) {
        n = n || 2;
        return (Array(n).join(0) + num).slice(-n);
    }

    dateMark() {
        let dy = new Date();
        return dy.getFullYear() + '-' + this.prefixInteger((dy.getMonth() + 1)) + '-' + this.prefixInteger(dy.getDate()) + ' ' + this.prefixInteger(dy.getHours()) + ':' + this.prefixInteger(dy.getMinutes()) + ':' + this.prefixInteger(dy.getSeconds()) + ' ' + this.prefixInteger(dy.getMilliseconds(), 4);
    }

    output(str, index) {
        let t = ['info', 'warn', 'error'];
        let dm = this.dateMark();
        console[t[index]]('[' + dm + ']--' + str);
    }

}

function log(str, index) {
    index = typeof index === 'undefined' ? 0 : index;
    let tl = new TnLog();
    tl.output(str, index);
}

export default log;