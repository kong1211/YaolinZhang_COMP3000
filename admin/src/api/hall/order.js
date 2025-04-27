import request from '@/utils/request'

export function getOrders(params){
    return request({
        url: '/hall/order/list',
        method: 'get',
        params
    })
}

export function insertOrder(data){
    return request({
        url: '/hall/order/insert',
        method: 'post',
        data
    })
}

export function getOrder(id){
    return request({
        url: `/hall/order/get/${id}`,
        method: 'get'
    })
}

export function deleteOrder(id){
    return request({
        url: '/hall/order/del/'+id,
        method: 'delete'
    })
}

export function updateOrder(data){
    return request({
        url: '/hall/order/update',
        method: 'put',
        data
    })
}