import type { AxiosRequestConfig } from 'axios';
import http from '@/utils/http';
import { ApiPrefixEnum } from '@/enums/apiPrefixEnum';

export const apiLogin = (config: AxiosRequestConfig): any =>
  config ? {} : http.get(`${ApiPrefixEnum.APP}/login`, config);
