export interface StoreBankInterface {
    address: string;
    name: string;
    atasNama: string;
    coaArId: string;
    coaDebitCardId: string;
    defaultBunga: number;
}

export interface UpdateBankInterface{
    address: string;
    name: string;
    atasNama: string;
    coaArId: string;
    coaDebitCardId: string;
    defaultBunga: number;
}

export interface BankQueryInterface {
    page: string;
    size: string;
}

export interface BankInterface {
    bankId: string;
    address: string;
    name: string;
    atasNama: string;
    coaArId: string;
    coaDebitCardId: string;
    defaultBunga: number;
}

export interface BankStateInterface {
    bankId: string;
    address: string;
    name: string;
    atasNama: string;
    coaArId: string;
    coaDebitCardId: string;
    defaultBunga: number;
    data: BankInterface[]
}