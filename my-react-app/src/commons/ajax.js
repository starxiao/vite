import Axios from 'axios';

let axios = Axios.create({
    // baseURL: 'http://localhost:3000/api',
    defaults: {
        timeout: 5000
    },
})
export function ajax(options) {
    return axios({
        url: options.url || '',
        method: options.method || 'GET',
        data: options.data
    });
}

export function get(url, data) {
    return axios.get(url, {
        data: data
    });
}

export function post(url, data) {
    return axios.post(url, data);
}