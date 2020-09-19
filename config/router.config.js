export default [
    {
        path: '/',
        component: '@/layouts/SecurityLayout',
        routes: [
            {
                path: '/system',
                component: '@/layouts/BlankLayout',
                routes: [
                    {path: '/system', redirect: '/system/myTest'},
                    {
                        path: '/system/myTest',
                        component: '@/pages/myTest',
                    }
                ]
            },
        ]
    },
    {
        path: '/login',
        component: '@/pages/login'
    }
  ]