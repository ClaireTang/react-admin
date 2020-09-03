import service from '../../src/util/request'

export function Login(data) {
    return service.request({
        url: '/login/',
        method: 'post',
        data
    })
}