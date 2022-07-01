import { request } from '@umijs/max'

export async function queryMenuList() {
  return request('/api/v1/queryMenuList', {
    method: 'POST'
  })
}