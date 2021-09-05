/*
 * @Description:
 * @Author: zhaocheng.zhai
 * @Date: 2021-09-03 00:00:15
 * @LastEditTime: 2021-09-04 16:57:07
 * @LastEditors: zhaocheng.zhai
 */
import { request } from 'umi';

export async function getAllProject(options?: { [key: string]: any }) {
  return request('http://127.0.0.1:7006/deploy/main-server/apis/project/get-all', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function addProject(options?: { [key: string]: any }) {
  return request('http://127.0.0.1:7006/deploy/main-server/apis/project/add', {
    method: 'POST',
    data: options,
  });
}

export async function deleteProject(options?: { [key: string]: any }) {
  return request('http://127.0.0.1:7006/deploy/main-server/apis/project/delete', {
    method: 'POST',
    data: options,
  });
}

export async function getProject(options?: { [key: string]: any }) {
  return request('http://127.0.0.1:7006/deploy/main-server/apis/project/get', {
    method: 'GET',
    params: options,
  });
}

export async function updateProject(options?: { [key: string]: any }) {
  return request('http://127.0.0.1:7006/deploy/main-server/apis/project/update', {
    method: 'POST',
    data: options,
  });
}
