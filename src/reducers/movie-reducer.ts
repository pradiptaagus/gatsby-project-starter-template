import { ActionInterface } from "../interfaces/ActionInterface";
import { MovieStateInterface } from "../interfaces/MovieStateInterface";

export function movieReducer(state: MovieStateInterface, action: ActionInterface) {
    switch (action.type) {
        case 'SET_TITLE':
            return {
                ...state, 
                title: action.payload
            };
        case 'SET_RELEASE_DATE':
            return {
                ...state,
                releaseDate: action.payload
            };
        case 'SET_IMDB_RATING':
            return {
                ...state,
                imdbRating: action.payload
            };
        default:
            return state;

    }
}