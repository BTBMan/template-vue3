import type { RouteRecordRaw } from 'vue-router';
import guards from '@/router/guards';
import { notFoundRoute } from '@/router/routes/basic';
import Root from '@/views/system/Root.vue';
import Login from '@/views/system/Login.vue';

const rootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  component: Root,
  beforeEnter: guards,
  meta: {
    title: 'Root',
  },
};

const loginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: Login,
  meta: {
    title: '登录',
  },
};

export const routes: RouteRecordRaw[] = [rootRoute, loginRoute, notFoundRoute];
