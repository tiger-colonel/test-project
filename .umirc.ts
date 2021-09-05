/*
 * @Description:
 * @Author: zhaocheng.zhai
 * @Date: 2021-09-02 23:30:52
 * @LastEditTime: 2021-09-04 14:30:49
 * @LastEditors: zhaocheng.zhai
 */
import { defineConfig } from 'umi';
import * as envConfigs from './.projectrc';
const envConfig = envConfigs.env[process.env.MODE || 'test'];

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  define: {
    ...envConfig,
  },
  routes: [
    {
      exact: true,
      path: '/publish',
      component: '@/pages/publish',
    },
    {
      path: '/',
      component: '@/layout/index',
      routes: [
        {
          exact: true,
          path: '/project',
          component: '@/pages/project',
        },
      ],
    },

  ],
  fastRefresh: {},
});
