import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}

/**
 * 获取用户信息
 * @returns {Promise<any>}
 */
export async function queryCurrent() {
  return request('/admin/user');
}
export async function queryNotices() {
  return request('/api/notices');
}
