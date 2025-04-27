import request from '@/utils/request'

export function getExpelList(userId){
    return request({
        url: '/hall/expel/list/'+userId,
        method: 'get'
    })
}

export function saveExpel(data){
    return request({
        url: '/hall/expel/save',
        method: 'post',
        data
    })
}

export function delExpel(id){
    return request({
        url: '/hall/expel/del/'+id,
        method: 'delete'
    })
}