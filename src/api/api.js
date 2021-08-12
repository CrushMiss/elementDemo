import axios from 'axios';
import {Message} from "element-ui";

// 请求拦截
// axios.interceptors.request.use(
//     config=> {
//         let token = window.sessionStorage.getItem('token');
//         // let token = '123';
//         if (token) {
//             console.log('?????');
//             config.headers['token'] = token;
//             return config;
//         }
//         console.log(token);
//     },
//     error=>{
//         console.log(error)
//     }
// );

//响应拦截
axios.interceptors.response.use(
    success=> {
        if(success.status && success.status == 200) {
            if (success.data.code==500 || success.data.code==401||success.data.code==403) {
                console.log(success.data.code);
                Message.error({message:success.data.message});
                return;
            }
            if (success.data.message) {
                console.log(success.data.code);
                Message.success({message:success.data.message});
            }
        }
        return success.data;
    },
    error => {
        console.log(error.response.code);
        Message.error({message:error.response.message});
        return;
    }
);

const base='';

export const postRequest =(url,params)=>{
    return axios({
        method: 'post',
        url: base+url,
        data: params
    })
}