export default {
  'POST /api/v1/queryMenuList': (req: any, res: any) => {
    res.json({
      success: true,
      data: {
        list: [
          {
            key: 'empty-1',
            path: '/',
            name: '首页',
            single: true,
            routes: [
              {
                key: 11,
                path: '/',
                name: '首页',
                single: true,
              }
            ]
          },
          {
            key: 2,
            path: '/access',
            name: '权限演示',
            icon: 'heart',
            folder: true,
            routes: [
              {
                key: 21,
                path: '/access',
                name: '权限演示2',
               
              },
              {
                key: 22,
                path: '/access',
                name: '权限演示3',
          
              }
            ]
          }
        ]
      },
      errorCode: 0
    })
  }
}