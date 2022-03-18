import type { RouteRecordRaw } from 'vue-router';
import PageNotFound from '@/views/system/abnormal/PageNotFound.vue';

export const notFoundRoute: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'NotFoundRoute',
  component: PageNotFound,
  meta: {
    title: '页面未找到',
  },
};
