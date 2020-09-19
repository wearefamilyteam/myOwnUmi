// @ts-nocheck
import { ApplyPluginsType } from '/Users/wangqing/Desktop/myOwnUmi/node_modules/_@umijs_runtime@3.2.20@@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/login",
    "component": require('@/pages/common/login').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('@/layouts/SecurityLayout').default,
    "routes": [
      {
        "path": "/system",
        "component": require('@/layouts/BlankLayout').default,
        "routes": [
          {
            "path": "/system/ordinary",
            "routes": [
              {
                "path": "/system/ordinary/myTest",
                "component": require('@/pages/ordinary/myTest').default,
                "exact": true
              }
            ]
          },
          {
            "path": "/system/admin",
            "routes": [
              {
                "path": "/system/admin/myTest2",
                "component": require('@/pages/admin/myTest2').default,
                "exact": true
              }
            ]
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
