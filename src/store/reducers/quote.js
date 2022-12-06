import {ADD_FAVORITE, ADD_QUOTE, QUOTE_FETCH_SUCCESS} from "../actions/actionType";

const initialState = {
    quote: "",
    quotes: [],
    favorites: []
}
export default function quoteReducer(state = initialState, action) {
    switch (action.type) {
        case QUOTE_FETCH_SUCCESS:
            return { ...state, quote: action.payload }
        case ADD_QUOTE:
            return { ...state, quotes: [...state.quotes, action.payload] }
        case ADD_FAVORITE:
            return { ...state, favorites: [...state.favorites, action.payload] }
        default:
            return state
    }
}