/*
 * @Description:
 * @Author: zhaocheng.zhai
 * @Date: 2021-09-02 23:30:52
 * @LastEditTime: 2021-09-03 21:15:24
 * @LastEditors: zhaocheng.zhai
 */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

declare const SERVER_BASE_PATH: string;
declare const PUBLIC_PATH: string;
declare const PEAR_PROJECT_ID: number[];
