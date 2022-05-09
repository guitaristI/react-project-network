const axios = require("axios");


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '0a0d09a0-5e11-4187-b0e4-80862c99643c'
    },
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`, {}).then(response => {
            return response.data
        })
    },
    unfollow(id) {
        return instance.delete(`/follow/${id}`, {}).then(response => {
            return response.data
        })
    },
    follow(id) {
        return instance.post(`/follow/${id}`, {}, {}).then(response => {
            return response.data
        })
    },

    getProfile(userId) {
        return instance.get(`/profile/${userId}`, {}).then(response => {
            return response.data
        })
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`, {}).then(response => {
            return response.data
        })
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status}).then(response => {
            return response
        })
    },
    updatePhoto(file) {
        const formData = new FormData();
        formData.append("image", file)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            return response
        })
    },
}

export const authAPI = {
    authMe() {
        return instance.get(`/auth/me`, {}).then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`/auth/login`)
    },
}