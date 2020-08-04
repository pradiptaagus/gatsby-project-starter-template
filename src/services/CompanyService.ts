import axios from "./config";
import { Queryinterface } from "../interfaces/QueryInterface";
import { CompanyInterface } from "../interfaces/CompanyInterface";
import { ServiceInterface } from "../interfaces/ServiceInterface";

const apiUrl: string = "/company";

export class CompanyService implements ServiceInterface {
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

    store(data: CompanyInterface) {
        return new Promise((resolve, reject) => {
            axios.post(apiUrl, {
                name: data.name,
                business_name: data.businessName,
                tax_number: data.taxNumber,
                serial_number: data.serialNumber,
                activation_code: data.activationCode,
                address: data.address,
                inventory_valuation_method: data.inventoryValuationMethod,
                inventory_method: data.inventoryMethod,
                contact_person: data.contactPerson,
                start_systen: data.startSystem,
                address_2: data.address2,
                giverment_vat: data.govermentVat,
                email: data.email,
                website: data.website,
                phone: data.phone,
                business_type: data.businessType,
                package_system_id: data.packageSystemId,
                status: data.status,
                time_zone: data.timeZone
            }).then((response: any) => {
                resolve(response.data)
            }).catch((errors: any) => {
                reject(errors.response.data);
            });
        });
    }

    update(data: CompanyInterface, id: string) {
        return new Promise((resolve, reject) => {
            axios.put(`${apiUrl}/${id}`, {
                name: data.name,
                business_name: data.businessName,
                tax_number: data.taxNumber,
                serial_number: data.serialNumber,
                activation_code: data.activationCode,
                address: data.address,
                inventory_valuation_method: data.inventoryValuationMethod,
                inventory_method: data.inventoryMethod,
                contact_person: data.contactPerson,
                start_systen: data.startSystem,
                address_2: data.address2,
                giverment_vat: data.govermentVat,
                email: data.email,
                website: data.website,
                phone: data.phone,
                business_type: data.businessType,
                package_system_id: data.packageSystemId,
                status: data.status,
                time_zone: data.timeZone
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