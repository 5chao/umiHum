import { defineConfig } from '@umijs/max';

export default defineConfig({
  favicons: ['/logo.svg'],
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  dva: {},
  // layout: {
  //   title: 'umiHub',
  //   locale: false
  // },
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
    {
      name: 'CRUD 示例2',
      path: '/table2',
      component: './Table2',
    },
    {
      name: 'CRUD 示例3',
      path: '/table3',
      component: './Table3',
    },
  ],
  locale: {
    baseNavigator: false,
    default: 'zh-CN',
    baseSeparator: '-'
  },
  npmClient: 'yarn',
});

