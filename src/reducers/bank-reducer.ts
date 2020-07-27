import { ActionInterface } from "../interfaces/ActionInterface";
import { BankStateInterface, BankInterface } from "../interfaces/BankInterface";

export const SET_ID: string = "SET_ID";
export const SET_ADDRESS: string = "SET_ADDRESS";
export const SET_NAME: string = "SET_NAME";
export const SET_ATAS_NAMA: string = "SET_ATAS_NAMA";
export const SET_COA_AR_ID: string = "SET_COA_AR_ID";
export const SET_COA_DEBIT_CARD_ID: string = "SET_COA_DEBIT_CARD_ID";
export const SET_DEFAULT_BUNGA: string = "SET_DEFAULT_BUNGA";
export const SET_BANK_DATA: string = "SET_BANK_DATA";

export function bankReducer(state: BankStateInterface, action: ActionInterface): BankStateInterface {
    switch (action.type) {
        case SET_ID:
            return {
                ...state, 
                bankId: action.payload
            };
        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload
            };
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        case SET_ATAS_NAMA:
            return {
                ...state,
                atasNama: action.payload
            }
        case SET_COA_AR_ID:
            return {
                ...state,
                coaArId: action.payload
            }
        case SET_COA_DEBIT_CARD_ID:
            return {
                ...state,
                coaDebitCardId: action.payload
            }
        case SET_DEFAULT_BUNGA:
            return {
                ...state,
                defaultBunga: action.payload
            }
        case SET_BANK_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;

    }
}