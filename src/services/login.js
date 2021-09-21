import req from '../utils/req'

export function login(data) {
    return req({
        url: '/api/page/login',
        method: 'GET',
        data
    })
}

export function reqTodoList(data) {
    return req({
        url: '/api/page/todoList',
        method: 'GET',
        data
    })
}

