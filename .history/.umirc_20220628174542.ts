import { defineConfig } from '@umijs/max';

export default defineConfig({
  favicons: ['/logo.svg'],
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  dva: {},
  layout: {
    title: 'umiHub',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
        name: 'CRUD 示例',
        path: '/table',
        component: './Table',
    },
  ],
  locale: {
    baseNavigator: false,
    default: 'zh-CN',
    baseSeparator: '-'
  },
  npmClient: 'yarn',
});

