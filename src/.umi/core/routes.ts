// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/mdzz/code/myOwnUmi/node_modules/_@umijs_runtime@3.2.24@@umijs/runtime';
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
          },
          {
            "path": "/system/common",
            "routes": [
              {
                "path": "/system/common/assetsCenter",
                "component": require('@/pages/common/assetsCenter').default,
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
