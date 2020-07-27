import axios from "./config";
import { Queryinterface } from "../interfaces/QueryInterface";
import { UserInterface } from "../interfaces/UserInterface";

const apiUrl: string = "/user";

export class UserService {
    users(data: Queryinterface) {
        let url: string[] = [];
    
        if (data.page) {
            url.push("page=" + data.page);
        }
    
        if (data.size) {
            url.push("size=" + data.size);
        }
        
        return new Promise((resolve, reject) => {
            axios.get(`${apiUrl}?` + url.join('&')).then(response => {
                resolve(response.data);
            }).catch(errors => {
                reject(errors.response.data);
            });
        });
    }
    
    showUser(id: string) {
        return new Promise((resolve, reject) => {
            axios.get(`/user/${id}`).then(response => {
                resolve(response.data);
            }).catch(errors => {
                reject(errors.response.data);
            });
        });
    }

    storeUser(data: UserInterface) {
        return new Promise((resolve, reject) => {
            axios.post('/user', {
                username: data.username,
                email: data.email
            }).then(response => {
                resolve(response.data)
            }).catch(errors => {
                reject(errors.response.data);
            });
        });
    }

    updateUser(data: UserInterface, id: string) {
        return new Promise((resolve, reject) => {
            axios.put(`/user/${id}`, {
                username: data.username,
                email: data.email
            }).then(response => {
                resolve(response.data);
            }).catch(errors => {
                reject(errors.response.data);
            });
        });
    }

    deleteUser(id: string) {
        return new Promise((resolve, reject) => {
            axios.delete(`/user/${id}`).then(response => {
                resolve(response.data);
            }).catch(errors => {
                reject(errors.response.data);
            });
        });
    }
}