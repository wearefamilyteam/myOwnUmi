export default [
  {
    path: '/login',
    component: '@/pages/common/login',
  },
  {
    path: '/',
    component: '@/layouts/SecurityLayout',
    routes: [
      {
        path: '/system',
        component: '@/layouts/BlankLayout',
        routes: [
          {
            path: '/system/admin1',
            routes: [
              {
                path: '/system/admin/myTest21',
                component: '@/pages/admin/myTest21',
              },
            ],
          },
          // 公共的在这里
          {
            path: '/system/common',
            routes: [
              {
                path: '/system/common/DashBoard',
                component: '@/pages/common/DashBoard',
              },
              {
                path: '/system/common/assetsCenter',
                component: '@/pages/common/assetsCenter',
              },
            ],
          },
          // 普通用户在这里
          {
            path: '/system/ordinary',
            routes: [
              {
                path: '/system/ordinary/myTest',
                component: '@/pages/ordinary/myTest',
              },
            ],
          },
          // 管理员用户在这里
          {
            path: '/system/admin',
            routes: [
              {
                path: '/system/admin/myTest2',
                component: '@/pages/admin/myTest2',
              },
            ],
          },
        ],
      },
    ],
  },
];
