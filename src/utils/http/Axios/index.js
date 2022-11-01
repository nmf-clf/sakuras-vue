/*
 * @Author: niumengfei
 * @Date: 2022-10-29 16:32:33
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-10-31 15:59:27
 */
let BaiscAjax;

const AxiosAjax = require('./AxiosAjax').default;
// axios 实例方法 request get  delete head post put patch
BaiscAjax = AxiosAjax;
// 在这里可以根据环境改写原始axios上的方法
if(false){
    const MockAjax = {
        get: function(url, config) {
            return AxiosAjax.get(url, config)
        },
        post: function(url, config) {
            return AxiosAjax.get(url, config)
        }
    }
    BaiscAjax = MockAjax;
}


export default BaiscAjax;