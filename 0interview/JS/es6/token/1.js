"use strict"

let Request = {
    set token(content) {
        localStorage.setItem('token',content)
    },
    get token() {
        let token = localStorage.getItem('token,content')
        if(!token) {
            alert("请登录")
        }
        return token
    }
}
