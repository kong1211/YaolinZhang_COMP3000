import request from '@/utils/request'

export function getLogs(params) {
  return request({
    url: 'log/page',
    method: 'get',
    params
  })
}

export function delLog(id) {
  return request({
    url: `/log/del/${id}`,
    method: 'delete'
  })
}

export function cleanAllLogs() {
  return request({
    url: '/log/cleanAll',
    method: 'delete'
  })
}
