/* eslint-disable */

import axios from "axios";
import Qs from 'qs';
// import api_address from '../../api_address';
// import {getClientLanguage, getToken, setStorage} from '../util';
// import store from "../store";

export const geUserNameStorage = () => {
    return JSON.parse(localStorage.getItem('userName'))
};
export const getLoginInfoStorage = () => {
    return JSON.parse(localStorage.getItem('loginInfo'))
};
export const getToken = () => {

    const loginInfo = getLoginInfoStorage();

    return loginInfo
}

//增加全局设置
/*axios.interceptors.request.use(function (config) {
    // config.headers['Accept-language'] = language;
    let JWTToken = getToken();

    if (JWTToken != null) {
        config.headers['authToken'] = JWTToken;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});*/


//增加全局设置
//todo 通过http状态码判断请求状态 500是异常 400是请求信息错误 401是token过期
let clear_gotoLogin_xinji = true;
axios.interceptors.response.use(response => {
    console.log('response : ' + response.status)
    return response;
}, error => {
    console.log('error : ' + error.response)
    console.log(error)
    console.log(error.response)
    console.log(error.response.status)
    if (error.response.status === 401) {
        document.getElementById('pop_des').style.display = 'block';
        document.getElementById('pop_des').innerText = '登录已失效' + error.response.data.Message;
        //异地登录后返回登录页只能响应一次
        if (clear_gotoLogin_xinji === true) {
            clear_gotoLogin_xinji = false;
            setTimeout(() => {
                //把localstorage中登录信息清空,并跳转至登录页面
                setStorage('loginInfo', '');
                setStorage('userInfo', '');
                //todo 返回首页后必须刷新清空状态!!!!
                //开发环境直接返回/#/,开发环境移动端域名因为多了h5所以返回/h5/#/
                if (process.env.REACT_APP_ENV === 'pro') {
                    // window.location = '/h5/#/'
                    //todo 测试环境也使用 '/#/'
                    window.location = '/#/'
                    // setTimeout(()=>{
                    //     window.location.reload()
                    // },100)
                } else {
                    window.location = '/#/'
                    // setTimeout(()=>{
                    //     window.location.reload()
                    // },100)
                }
                window.location.reload()
            }, 2000)
        }
    }
    const obj = {
        status: error.response.status,
        message: error.response['data']['Message']
    }
    return Promise.reject(obj);
});

const baseAddress = process.env.NODE_ENV === 'development' ? '' : 'http://rubikcubexy.club'

/* todo 登录 */
export const createLogin = async (obj) => {
    const data = Qs.stringify(obj);
    return await axios.post(baseAddress + '/Api.login.do', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        return res;
    }).catch(errs => {
        return errs;
    });
};

/* todo 获取余额 */
export const createAmount = async (obj) => {
    const data = Qs.stringify(obj);
    return await axios.post(baseAddress + '/Api.getBalance.do', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        return res;
    }).catch(errs => {
        return errs;
    });
};

/* todo 获取所有彩种 */
export const createLotteryKinds = async () => {
    const data = Qs.stringify({});
    return await axios.post(baseAddress + '/Api.getLottery.do', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        return res;
    }).catch(errs => {
        return errs;
    });
};


/* todo 获取历史记录 */
export const createHistoryLog = async (obj) => {
    const data = Qs.stringify(obj);
    return await axios.post(baseAddress + '/Api.getLotteryCode.do', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        return res;
    }).catch(errs => {
        return errs;
    });
};

/* todo 获取彩票赔率 */
export const createLotteryRate = async (obj) => {
    const data = Qs.stringify(obj);
    return await axios.post(baseAddress + '/Api.getLotteryRate.do', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        return res;
    }).catch(errs => {
        return errs;
    });
};

/* todo 开启关闭挂机接口 */
export const createOpenClose = async (obj) => {
    const data = Qs.stringify(obj);
    return await axios.post(baseAddress + '/Api.openOrcloseGuaji.do', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        return res;
    }).catch(errs => {
        return errs;
    });
};

/* todo 获取挂机计划 */
export const createPlan = async (obj) => {
    const data = Qs.stringify(obj);
    return await axios.post(baseAddress + '/Api.getPlan.do', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        return res;
    }).catch(errs => {
        return errs;
    });
};

/* todo 获取挂机方案 */
export const createProgram = async () => {
    const data = Qs.stringify({});
    return await axios.post(baseAddress + '/Api.getFangan.do', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        return res;
    }).catch(errs => {
        return errs;
    });
};

/* todo 获取收益 */
export const createIncome = async (obj) => {
    const data = Qs.stringify(obj);
    return await axios.post(baseAddress + '/Api.getUserinfo.do', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        return res;
    }).catch(errs => {
        return errs;
    });
};
