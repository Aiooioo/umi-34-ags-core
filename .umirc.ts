import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  nodeModulesTransform: {
    type: 'none',
  },
  ignoreMomentLocale: true,
  routes: [{ path: '/', component: '@/pages/index' }],
  webpack5: {},
  fastRefresh: {},
});
