import axios from "./config";
import { Queryinterface } from "../interfaces/QueryInterface";
import { UserInterface } from "../interfaces/UserInterface";
import { ServiceInterface } from "../interfaces/ServiceInterface";

const apiUrl: string = "/user";

export class UserService implements ServiceInterface {
    index(data: Queryinterface) {
        let url: string[] = [];
    
        if (data.page) {
            url.push("page=" + data.page);
        }
    
        if (data.size) {
            url.push("size=" + data.size);
        }
        
        return new Promise((resolve, reject) => {
            axios.get(`${apiUrl}?` + url.join('&')).then((response: any) => {
                resolve(response.data);
            }).catch((errors: any) => {
                reject(errors.response.data);
            });
        });
    }
    
    show(id: string) {
        return new Promise((resolve, reject) => {
            axios.get(`${apiUrl}/${id}`).then((response: any) => {
                resolve(response.data);
            }).catch((errors: any) => {
                reject(errors.response.data);
            });
        });
    }

    store(data: UserInterface) {
        return new Promise((resolve, reject) => {
            axios.post(apiUrl, {
                username: data.username,
                email: data.email
            }).then((response: any) => {
                resolve(response.data)
            }).catch((errors: any) => {
                reject(errors.response.data);
            });
        });
    }

    update(data: UserInterface, id: string) {
        return new Promise((resolve, reject) => {
            axios.put(`${apiUrl}/${id}`, {
                username: data.username,
                email: data.email
            }).then((response: any) => {
                resolve(response.data);
            }).catch((errors: any) => {
                reject(errors.response.data);
            });
        });
    }

    delete(id: string) {
        return new Promise((resolve, reject) => {
            axios.delete(`${apiUrl}/${id}`).then((response: any) => {
                resolve(response.data);
            }).catch((errors: any) => {
                reject(errors.response.data);
            });
        });
    }
}