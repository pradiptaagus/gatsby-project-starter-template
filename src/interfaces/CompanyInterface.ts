export interface CompanyInterface {
    name: string;
    businessName: string;
    taxNumber: string;
    serialNumber: string;
    activationCode: string;
    address: string;
    inventoryValuationMethod: number;
    inventoryMethod: number;
    contactPerson: string;
    startSystem: string;
    address2: string;
    govermentVat: number;
    email: string;
    website: string;
    phone: string;
    businessType: number;
    packageSystemId: string;
    status: string;
    timeZone: string;
}

export interface CompanyStateInterface extends CompanyInterface {
    id: string;
    data: any[];
    currentPage: number;
    itemPerPage: number;
    totalItemCount: number;
}