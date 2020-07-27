import { ActionInterface } from "../interfaces/ActionInterface";
import { UserStateInterface } from "../interfaces/UserInterface";

export const SET_ID: string = "SET_ID";
export const SET_USERNAME: string = "SET_USERNAME";
export const SET_EMAIL: string = "SET_EMAIL";
export const SET_USER_DATA: string = "SET_USER_DATA";
export const SET_CURRENT_PAGE: string = "SET_CURRENT_PAGE";
export const SET_ITEM_PER_PAGE: string = "SET_ITEM_PER_PAGE";
export const SET_TOTAL_ITEM_COUNT: string = "SET_TOTAL_ITEM_COUNT";

export function userReducer(state: UserStateInterface, action: ActionInterface): UserStateInterface {
    switch (action.type) {
        case SET_ID:
            return {
                ...state, 
                id: action.payload
            };
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            };
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case SET_USER_DATA:
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