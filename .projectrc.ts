/*
 * @Description:
 * @Author: zhaocheng.zhai
 * @Date: 2021-09-03 20:57:40
 * @LastEditTime: 2021-09-03 21:45:58
 * @LastEditors: zhaocheng.zhai
 */
// 区分环境的相关配置
export interface IEnvConfig {
  PUBLIC_PATH: string; // CDN路径
  SERVER_BASE_PATH: string; // 服务端接口地址
  [key: string]: string;
}

// 环境变量
export const env: { [key: string]: IEnvConfig } = {
  // 联调环境
  dev: {
    PUBLIC_PATH: 'http://127.0.0.1:7001',
    SERVER_BASE_PATH: '',
  },
  // 测试环境
  test: {
    PUBLIC_PATH: '',
    SERVER_BASE_PATH: '',
  },
  // 灰度环境
  gray: {
    PUBLIC_PATH: '',
    SERVER_BASE_PATH: '',
  },
  // 正式环境
  prod: {
    PUBLIC_PATH: '',
    SERVER_BASE_PATH: '',
  },
};
