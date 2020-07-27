import axios from "./config";
import { BankQueryInterface } from "../interfaces/BankInterface";

const apiUrl: string = "/takingOrderAPILaravel/api/bank";

export class BankService {
    banks(data: BankQueryInterface) {
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
                reject(errors);
            });
        });
    }
}