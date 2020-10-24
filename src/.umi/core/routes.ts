// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/wangqing/Desktop/myOwnUmi/node_modules/_@umijs_runtime@3.2.24@@umijs/runtime';
import * as umiExports from './umiExports';
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
            "path": "/system/common",
            "routes": [
              {
                "path": "/system/common/DashBoard",
                "component": require('@/pages/common/DashBoard').default,
                "exact": true
              },
              {
                "path": "/system/common/assetsCenter",
                "component": require('@/pages/common/assetsCenter').default,
                "exact": true
              },
              {
                "path": "/system/common/pluginlist",
                "component": require('@/pages/common/pluginlist').default,
                "exact": true
              },
              {
                "path": "/system/common/pluginDetail",
                "component": require('@/pages/common/pluginDetail').default,
                "exact": true
              },
              {
                "path": "/system/common/pluginExamine",
                "component": require('@/pages/common/pluginExamine').default,
                "exact": true
              }
            ]
          },
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
