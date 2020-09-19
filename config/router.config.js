export default [
  {
    path: '/login',
    component: '@/pages/common/login',
    exact: true,
  },
  {
    path: '/',
    component: '@/layouts/SecurityLayout',
    routes: [
      {
        path: '/system',
        component: '@/layouts/BlankLayout',
        routes: [
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
