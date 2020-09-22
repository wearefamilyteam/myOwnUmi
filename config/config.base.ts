import { defineConfig } from 'umi';
import routes from './router.config';
import { resolve } from 'path';

export default {
  history: {
    type: 'hash',
  },
  routes: routes,
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    '@primary-color': 'red',
  },
  title: '王清最帅',
  links: [{ rel: 'icon', href: './wangqing.jpeg' }],
  alias: {
    utils: resolve(__dirname, '../src/utils'),
    assets: resolve(__dirname, '../src/assets'),
    components: resolve(__dirname, '../src/components'),
    services: resolve(__dirname, '../src/services'),
    pages: resolve(__dirname, '../src/pages'),
  },
};
