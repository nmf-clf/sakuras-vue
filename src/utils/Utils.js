/*
 * @Author: niumengfei
 * @Date: 2022-10-29 14:04:02
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-10-29 14:05:38
 */
//公共方法
class Utils{
    constructor() {
        //获取平台标志
        this.platfrom = {
          Android: (function () {
            return navigator.userAgent.match(/Android/i) ? true : false;
          })(),
          iOS: (function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
          })(),
          WeChat: (function () {
            return navigator.userAgent.toLowerCase().match(/micromessenger/i)
              ? true
              : false;
          })(),
        };
    }
    //判断是否是空对象
    isEmptyObj(obj){
        if(!obj) return true; //空的基本数据类型 返回true
        return JSON.stringify(obj) === '{}' ? true : false; //空对象返回true
    }
}

export default new Utils();