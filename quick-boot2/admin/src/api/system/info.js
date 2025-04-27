import request from '@/utils/request'

export function getInfoList(params) {
  return request({
    url: 'info/list',
    method: 'get',
    params
  })
}

export function saveInfo(data) {
  return request({
    url: 'info/save',
    method: 'post',
    data
  })
}

export function delInfo(id) {
  return request({
    url: 'info/del/' + id,
    method: 'delete'
  })
}
