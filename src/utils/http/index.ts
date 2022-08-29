import axios from 'axios';
import { message } from 'ant-design-vue';
import { APIBASE } from '@/enums';
import { getFromStorage } from '@/utils';
import { handleBlob } from './handleBlob';

const clientType: ClientType = 'app';

const defaultHeaders = {
  'Content-Type': 'application/json;charset=UTF-8',
  clientType,
};

const http = axios.create({
  baseURL: APIBASE,
  timeout: 60000,
  validateStatus(status) {
    if (status !== 200) {
      message.error(`请求失败. status:${status}`);

      return false;
    }
    return true;
  },
  headers: defaultHeaders,
});

// 请求拦截
http.interceptors.request.use(
  (conf: any) => {
    conf.headers.Authorization = `bearer ${getFromStorage('token')}`;

    if (getFromStorage('corpId')) {
      conf.headers.corpId = getFromStorage('corpId');
    }

    if (getFromStorage('userId')) {
      conf.headers.userId = getFromStorage('userId');
      conf.headers.userUuid = getFromStorage('userId');
    }

    if (getFromStorage(['accoundId'])) {
      conf.headers.accountId = getFromStorage(['accoundId']);
    }

    return conf;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// 响应拦截
const successCode = ['M0000', 'M1102', 'M1104', 'M1000'];

http.interceptors.response.use(
  (res) => {
    const { data, config } = res;
    const { headers } = config;
    const { hideGlobalMessage } = headers!;

    if (data instanceof Blob) {
      handleBlob(res);
      return Promise.resolve();
    }

    if (!hideGlobalMessage && !successCode.includes(data.code)) {
      message.error(`${data.message || data.msg || '处理失败'}`);
      return Promise.reject(data.message || data.msg);
    }

    return Promise.resolve(data);
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default http;
