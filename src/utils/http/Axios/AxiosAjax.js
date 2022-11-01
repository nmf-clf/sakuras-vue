/*
 * @Author: niumengfei
 * @Date: 2022-10-29 14:36:35
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-11-01 15:39:01
 */
import axios from "axios";
import requestLog from '../../Tnlog'

//创建axios应用实例
const AxiosAjax = axios.create({
    /* 在这里重写参数默认值 */
    baseURL: (function (e) {
        // if (process.env.NODE_DEV !== 'production' && window.TIAN.proxy === 'true') {
        //     return '';
        // } 
        return 'http://localhost:9000';
    })(),
    withCredentials: false,
    timeout: 50000, //请求超时时间
    // headers: { 'X-Requested-With': 'XMLHttpRequest' },
});

//请求拦截器
AxiosAjax.interceptors.request.use(config => {
    //可以在此处添加请求Header
    requestLog(`发起['${config.url}]：参数=> ${JSON.stringify(config.data)}`);
    return config;
}, (err) => {
    ElMessage.error('响应出现异常=>' + err)
    requestLog('请求异常=>' + err, 2);
    return Promise.reject(err);
});

//响应拦截器
AxiosAjax.interceptors.response.use((res) => {
    requestLog(`返回[${res.config.url}]：状态值=> ${res.status} ，数据=> ${JSON.stringify(res.data)}`);
    //后台返回体：code: 1成功 0失败
    let _data = res?.data || {};
    if(_data.code == '1'){
        return {
            status: res.status, 
            data: _data.data,
            message: _data.message,
            code: _data.code,
        };
    }else{
        ElMessage.error('出错啦=> ' + (_data.message || `request failed: code is ${_data.code} , expect 1`));
        return Promise.reject(`响应异常=> code is ${_data.code} , expect 1` );
    }
}, (err) => {
    axios.isCancel(err) ? requestLog('当前请求被取消', 1) : requestLog('响应出现异常=>' + err, 2);
    ElMessage.error('响应异常=>' + err);
    return Promise.reject(err);
});

export default AxiosAjax;
