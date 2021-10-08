// @ts-ignore
/* eslint-disable */
import { request as _request } from 'umi';
import * as api from './user';

export default {
  api,
};

export function request<T>(url: any, options: any) {
  return _request<T>(url, options);
}
