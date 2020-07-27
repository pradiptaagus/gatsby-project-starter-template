import axios from "./config";
import { MovieInterface } from "../interfaces/MovieInterface";

export const movies = (data: MovieInterface) => {
    let url: string[] = [];

    if (data.title) {
        url.push(`t=${data.title}`);
    } 

    if (data.year) {
        url.push(`y=${data.year}`);
    }

    if (data.plot) {
        url.push(`plot=${data.plot}`);
    }

    url.push("apikey=9ed8b0d9");
    
    return new Promise((resolve, reject) => {
        axios.get('?' + url.join('&')).then(response => {
            resolve(response.data);
        }).catch(errors => {
            reject(errors);
        });
    });
}