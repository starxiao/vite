import Axios from 'axios';
import qs from 'qs';

const service = Axios.create({
    timeout: 10000,  //1000为1s
});

const pendingRequest = new Map();

service.interceptors.request.use((config) => {
    //请求前先判断是否存在，再存储唯一key
    removePendingRequest(config);
    addPengdingRequest(config);
    return config;
});

service.interceptors.response.use((response) => {
    removePendingRequest(response.config);
    return response.data;
}, (error) => {
    error.config && removePendingRequest(error.config);
    return Promise.reject(error);
});

/**
 * http 请求
 * @param {*} config
 * @returns Promise 
 */
function http(config) {
    return service({

    });
}

/**
 * http 发起GET请求
 * @param {*} url 
 * @param {*} params 
 * @returns Promise
 */
function httpGet(url, params) {
    return service.get(url, {
        params: params || {}
    });
}

/**
 * 存储唯一key对应的cancel方法，用于取消请求
 * @param {*} config 
 * @returns void
 */
function addPengdingRequest(config) {
    const key = generateKey(config);

    config.cancelToken  = config.cancelToken || new Axios.CancelToken((cancel) => {
        if(!pendingRequest.has(key)) {
            pendingRequest.set(key, cancel);
        }
    });
}

/**
 * 判断是否存在唯一key，取消之前的请求和删除key
 * @param {*} config 
 * @returns void
 */
function removePendingRequest(config) {
    const key = generateKey(config);

    if(pendingRequest.has(key)) {
        const cancel = pendingRequest.get(key);
        cancel();
        pendingRequest.delete(key);
    }
}

/**
 * 根据请求地址、方法、参数生成唯一key 
 * @param {*} config
 * @returns string
 */
function generateKey(config) {
    let { url, method, params, data } = config;

    //response返回的是一个字符串对象
    if(typeof data === 'string') {
        data = JSON.parse(data);
    }

    return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&');
}


export {
    httpGet
};