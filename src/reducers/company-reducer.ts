import { ActionInterface } from "../interfaces/ActionInterface";
import { CompanyStateInterface } from "../interfaces/CompanyInterface";

export const SET_ID: string = "SET_ID";
export const SET_NAME: string = "SET_NAME";
export const SET_BUSINESS_NAME: string = "SET_BUSINESS_NAME";
export const SET_TAX_NUMBER: string = "SET_TAX_NUMBER";
export const SET_SERIAL_NUMBER: string = "SET_SERIAL_NUMBER";
export const SET_ACTIVATION_CODE: string = "SET_ACTIVATION_CODE";
export const SET_ADDRESS: string = "SET_ADDRESS";
export const SET_INVENTORY_VALUATION_METHOD: string = "SET_INVENTORY_VALUATION_METHOD";
export const SET_INVENTORY_METHOD: string = "SET_INVENTORY_METHOD";
export const SET_CONTACT_PERSON: string = "SET_CONTACT_PERSON";
export const SET_START_SYSTEM: string = "SET_START_SYSTEM";
export const SET_ADDRESS_2: string = "SET_START_SYSTEM";
export const SET_GOVERNMENT_VAT: string = "SET_GOVERNMENT_VAT";
export const SET_EMAIL: string = "SET_EMAIL";
export const SET_WEBSITE: string = "SET_WEBSITE";
export const SET_PHONE: string = "SET_PHONE";
export const SET_BUSINESS_TYPE: string = "SET_BUSINESS_TYPE";
export const SET_PACKAGE_SYSTEM_ID: string = "SET_PACKAGE_SYSTEM_ID";
export const SET_STATUS: string = "SET_STATUS";
export const SET_TIME_ZONE: string = "SET_TIME_ZONE";
export const SET_DATA: string = "SET_DATA";
export const SET_CURRENT_PAGE: string = "SET_CURRENT_PAGE";
export const SET_ITEM_PER_PAGE: string = "SET_ITEM_PER_PAGE";
export const SET_TOTAL_ITEM_COUNT: string = "SET_TOTAL_ITEM_COUNT";

export function companyReducer(state: CompanyStateInterface, action: ActionInterface): CompanyStateInterface {
    switch (action.type) {
        case SET_ID: 
            return {
                ...state,
                id: action.payload
            }
        case SET_NAME: 
            return {
                ...state,
                name: action.payload
            }
        case SET_BUSINESS_NAME:
            return {
                ...state,
                businessName: action.payload
            }
        case SET_TAX_NUMBER:
            return {
                ...state,
                taxNumber: action.payload
            }
        case SET_SERIAL_NUMBER:
            return {
                ...state,
                serialNumber: action.payload
            }
        case SET_ACTIVATION_CODE:
            return {
                ...state,
                activationCode: action.payload
            }
        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case SET_INVENTORY_VALUATION_METHOD: 
            return {
                ...state,
                inventoryValuationMethod: action.payload
            }
        case SET_INVENTORY_METHOD:
            return {
                ...state,
                inventoryMethod: action.payload
            }
        case SET_CONTACT_PERSON:
            return {
                ...state,
                contactPerson: action.payload
            }
        case SET_START_SYSTEM:
            return {
                ...state,
                startSystem: action.payload
            }
        case SET_ADDRESS_2:
            return {
                ...state,
                address2: action.payload
            }
        case SET_GOVERNMENT_VAT:
            return {
                ...state,
                govermentVat: action.payload
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case SET_WEBSITE: 
            return {
                ...state,
                website: action.payload
            }
        case SET_PHONE:
            return {
                ...state,
                phone: action.payload
            }
        case SET_BUSINESS_TYPE:
            return {
                ...state,
                businessType: action.payload
            }
        case SET_PACKAGE_SYSTEM_ID: 
            return {
                ...state,
                packageSystemId: action.payload
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.payload
            }
        case SET_TIME_ZONE:
            return {
                ...state,
                timeZone: action.payload
            }
        case SET_DATA:
            return {
                ...state,
                data: action.payload
            };
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_ITEM_PER_PAGE:
            return {
                ...state,
                itemPerPage: action.payload
            }
        case SET_TOTAL_ITEM_COUNT:
            return {
                ...state,
                totalItemCount: action.payload
            }
        default:
            return state;
    }
}