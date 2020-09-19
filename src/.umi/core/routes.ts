// @ts-nocheck
import { ApplyPluginsType } from '/Users/wangqing/Desktop/myOwnUmi/node_modules/_@umijs_runtime@3.2.20@@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/SecurityLayout').default,
    "routes": [
      {
        "path": "/system",
        "component": require('@/layouts/BlankLayout').default,
        "routes": [
          {
            "path": "/system",
            "redirect": "/system/myTest",
            "exact": true
          },
          {
            "path": "/system/myTest",
            "component": require('@/pages/myTest').default,
            "exact": true
          }
        ]
      }
    ]
  },
  {
    "path": "/login",
    "component": require('@/pages/login').default,
    "exact": true
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
