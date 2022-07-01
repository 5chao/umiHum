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
      //redirect: '/home',
      component: './Home',
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
    {
      name: '违章代码管理',
      path: '/codeManage',
      component: './Home',
    },
    {
      name: '违章管理',
      path: '/violates',
      component: './Home',
    },
    {
      name: '违章上报',
      path: '/report',
      component: './Home',
    },
    {
      name: '违章分工',
      path: '/division',
      component: './Home',
    },
    {
      name: '违章处置',
      path: '/dispose',
      component: './Home',
    },
    {
      name: '违章审核',
      path: '/examine',
      component: './Home',
    },
    {
      name: '待结案确认',
      path: '/confirm',
      component: './Home',
    },
    {
      name: '一线一安全',
      path: '/lineSafety',
      component: './Home',
    },
    {
      name: '一线一方案',
      path: '/scheme',
      component: './Home',
    },
    {
      name: '驾驶员安全管理',
      path: '/driverManage',
      component: './Home',
    },
    {
      name: '驾证管理',
      path: '/licenseManage',
      component: './Home',
    },
    {
      name: '违法导入',
      path: '/illegalImport',
      component: './Home',
    },
    {
      name: '责任书管理',
      path: '/letterManage',
      component: './Home',
    },
    {
      name: '事故管理',
      path: '/accidentManage',
      component: './Home',
    },
    {
      name: '事故上报',
      path: '/accidentUpload',
      component: './Home',
    },
    {
      name: '事故分工',
      path: '/accidentDivision',
      component: './Home',
    },
    {
      name: '事故处置',
      path: '/accidentDispose',
      component: './Home',
    },
    {
      name: '处置审核',
      path: '/accidentHandle',
      component: './Home',
    },
    {
      name: '地图实时风险点',
      path: '/riskMap',
      component: './Home',
    },
    {
      name: '风险点管理',
      path: '/riskManage',
      component: './Home',
    }
  ],
  locale: {
    baseNavigator: false,
    default: 'zh-CN',
    baseSeparator: '-'
  },
  npmClient: 'yarn',
});

