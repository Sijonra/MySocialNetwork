import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        headers:{"API-KEY": "7a72805e-3ef8-4b01-8441-810a01e74cd2"},
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
    }
)

export const userApi = {
    getTotalUsersCount: () => {
        return instance.get('/users').then(response=>{
            return response.data;
        })
    },
    getUsers: (currentPage, usersOnPage) => {
        return instance.get(`/users?page=${currentPage}&count=${usersOnPage}`).then(response=>{
            return response.data;
        })
    }
}

export const profileApi = {
    getUserProfile: (userId)=>{
        return instance.get('/profile/' + userId).then(response =>{
            return response.data;
        })
    }
}